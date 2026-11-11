import { CHAT_SYSTEM_PROMPT } from "@/lib/chatbot/knowledge";
import { checkChatLimit, type LimitResult } from "@/lib/chatbot/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 35;

const MAX_BODY_BYTES = 18_000;
const MAX_TURNS = 10;
const MAX_MESSAGE_CHARS = 1_400;
const MAX_OUTPUT_TOKENS = 300;
const UPSTREAM_TIMEOUT_MS = 28_000;

type Turn = { role: "user" | "assistant"; content: string };

function configured() {
  return process.env.CHATBOT_ENABLED === "true"
    && Boolean(process.env.DEEPSEEK_API_KEY)
    && Boolean(process.env.UPSTASH_REDIS_REST_URL)
    && Boolean(process.env.UPSTASH_REDIS_REST_TOKEN)
    && Buffer.byteLength(process.env.CHATBOT_RATE_LIMIT_SALT ?? "") >= 32;
}

export async function GET() {
  return Response.json({ available: configured() }, {
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: Request) {
  if (!configured()) return jsonError(503, "unavailable");
  if (!isSameOrigin(request)) return jsonError(403, "forbidden");
  const contentType = request.headers.get("content-type") ?? "";
  const declaredSize = Number(request.headers.get("content-length") ?? 0);
  if (!contentType.toLowerCase().includes("application/json") || declaredSize > MAX_BODY_BYTES) {
    return jsonError(413, "invalid_request");
  }

  let raw: string;
  try {
    raw = await readBoundedBody(request, MAX_BODY_BYTES);
  } catch {
    return jsonError(413, "invalid_request");
  }
  let turns: Turn[];
  try {
    const parsed = JSON.parse(raw) as { messages?: unknown };
    turns = validateTurns(parsed.messages);
  } catch {
    return jsonError(400, "invalid_request");
  }

  const ip = request.headers.get("x-real-ip")?.trim();
  if (!ip || ip.length > 128) return jsonError(503, "unavailable");
  let limit: LimitResult;
  try {
    limit = await checkChatLimit(ip);
  } catch {
    return jsonError(503, "unavailable");
  }
  if (!limit.allowed) return jsonError(429, "rate_limited");

  const apiKey = process.env.DEEPSEEK_API_KEY!;
  const model = validModel(process.env.DEEPSEEK_MODEL);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);
  const onDisconnect = () => controller.abort();
  request.signal.addEventListener("abort", onDisconnect, { once: true });

  let upstream: Response;
  try {
    upstream = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        messages: [{ role: "system", content: CHAT_SYSTEM_PROMPT }, ...turns],
        thinking: { type: "disabled" },
        stream: true,
        max_tokens: MAX_OUTPUT_TOKENS,
        temperature: 0.35,
      }),
      cache: "no-store",
      signal: controller.signal,
    });
  } catch {
    clearTimeout(timeout);
    request.signal.removeEventListener("abort", onDisconnect);
    await releaseLimitLease(limit);
    return jsonError(502, "provider_unavailable");
  }

  if (!upstream.ok || !upstream.body) {
    clearTimeout(timeout);
    request.signal.removeEventListener("abort", onDisconnect);
    await releaseLimitLease(limit);
    const status = upstream.status === 429 ? 429 : upstream.status === 401 || upstream.status === 402 ? 503 : 502;
    return jsonError(status, status === 429 ? "provider_busy" : "provider_unavailable");
  }

  const stream = new ReadableStream<Uint8Array>({
    async start(output) {
      const reader = upstream.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      try {
        while (!controller.signal.aborted) {
          const { value, done } = await reader.read();
          if (done) {
            buffer += decoder.decode();
            const finalLine = buffer.trim();
            if (finalLine.startsWith("data:") && finalLine.slice(5).trim() !== "[DONE]") {
              try {
                const chunk = JSON.parse(finalLine.slice(5).trim()) as { choices?: Array<{ delta?: { content?: unknown } }> };
                const text = chunk.choices?.[0]?.delta?.content;
                if (typeof text === "string" && text.length) output.enqueue(new TextEncoder().encode(text));
              } catch { /* ignore malformed terminal provider data */ }
            }
            break;
          }
          buffer += decoder.decode(value, { stream: true });
          const events = buffer.split("\n");
          buffer = events.pop() ?? "";
          for (const line of events) {
            if (!line.startsWith("data:")) continue;
            const data = line.slice(5).trim();
            if (data === "[DONE]") { output.close(); return; }
            try {
              const chunk = JSON.parse(data) as { choices?: Array<{ delta?: { content?: unknown } }> };
              const text = chunk.choices?.[0]?.delta?.content;
              if (typeof text === "string" && text.length) output.enqueue(new TextEncoder().encode(text));
            } catch {
              // Ignore malformed individual provider chunks; never forward raw provider data.
            }
          }
        }
        output.close();
      } catch {
        try { output.error(new Error("stream_interrupted")); } catch { /* consumer already closed */ }
      } finally {
        clearTimeout(timeout);
        request.signal.removeEventListener("abort", onDisconnect);
        try { await reader.cancel(); } catch { /* upstream may already be closed */ }
        await releaseLimitLease(limit);
      }
    },
    cancel() {
      controller.abort();
      clearTimeout(timeout);
      request.signal.removeEventListener("abort", onDisconnect);
      void releaseLimitLease(limit);
    },
  });
  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store, no-transform",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

async function releaseLimitLease(limit: LimitResult) {
  try { await limit.release?.(); } catch { /* the short Redis lease expires automatically */ }
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try { return new URL(origin).origin === new URL(request.url).origin; } catch { return false; }
}

async function readBoundedBody(request: Request, maxBytes: number) {
  if (!request.body) throw new Error("missing body");
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > maxBytes) { await reader.cancel(); throw new Error("body too large"); }
    chunks.push(value);
  }
  const body = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.byteLength; }
  return new TextDecoder().decode(body);
}

function validateTurns(value: unknown): Turn[] {
  if (!Array.isArray(value) || value.length < 1 || value.length > MAX_TURNS) throw new Error("invalid turns");
  const turns = value.map((item) => {
    if (!item || typeof item !== "object") throw new Error("invalid turn");
    const candidate = item as Record<string, unknown>;
    if ((candidate.role !== "user" && candidate.role !== "assistant") || typeof candidate.content !== "string") {
      throw new Error("invalid turn");
    }
    const content = candidate.content.trim();
    if (!content || content.length > MAX_MESSAGE_CHARS) throw new Error("invalid message");
    return { role: candidate.role, content } as Turn;
  });
  if (turns[turns.length - 1].role !== "user") throw new Error("last turn must be user");
  return turns;
}

function validModel(value: string | undefined) {
  return value && /^[a-zA-Z0-9._-]{1,80}$/.test(value) ? value : "deepseek-flash";
}

function jsonError(status: number, code: string) {
  return Response.json({ error: code }, { status, headers: { "Cache-Control": "no-store" } });
}
