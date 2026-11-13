import { createHmac } from "node:crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 16 * 1024;
const MAX_REQUESTS = 5;
const WINDOW_SECONDS = 10 * 60;
const DUPLICATE_SECONDS = 10 * 60;
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const DEFAULT_RECIPIENT = "fazil4fazi@gmail.com";
const localRateLimits = new Map<string, { count: number; expiresAt: number }>();
const localDuplicates = new Map<string, number>();

const SERVICES = new Set([
  "SEO / Google rankings",
  "Digital marketing",
  "Website development",
  "Custom CRM / AI automation",
  "Getting more enquiries",
  "Not sure yet",
]);

type Enquiry = {
  name: string;
  service: string;
  challenge: string;
  details: string;
  website: string;
  contactMethod: "whatsapp" | "email";
  countryCode: string;
  phone: string;
  email: string;
  consent: boolean;
  sourcePage: string;
  honeypot: string;
};

function json(data: Record<string, unknown>, status: number, headers?: HeadersInit) {
  return Response.json(data, { status, headers });
}

async function readJsonLimited(request: Request): Promise<unknown | null> {
  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (declaredLength > MAX_BODY_BYTES || !request.body) return null;

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BODY_BYTES) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }

  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  try {
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return undefined;
  }
}

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function validEmail(value: string) {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parseEnquiry(input: unknown): Enquiry | string {
  if (!input || typeof input !== "object" || Array.isArray(input)) return "invalid";
  const body = input as Record<string, unknown>;
  const name = cleanText(body.name, 100);
  const service = cleanText(body.service, 80);
  const challenge = cleanText(body.challenge, 160);
  const details = cleanText(body.details, 1200);
  const website = cleanText(body.website, 300);
  const contactMethod = body.contactMethod;
  const countryCode = cleanText(body.countryCode, 5);
  const phone = cleanText(body.phone, 24);
  const email = cleanText(body.email, 254);
  const sourceCandidate = cleanText(body.sourcePage, 500);
  const sourcePage = sourceCandidate.startsWith("/")
    ? sourceCandidate.split(/[?#]/, 1)[0].slice(0, 250)
    : "/";

  if (!name || name.length > 100 || !service || !SERVICES.has(service) || !challenge) return "invalid";
  if (typeof body.consent !== "boolean" || !body.consent) return "consent";
  if (contactMethod !== "whatsapp" && contactMethod !== "email") return "invalid";

  if (website) {
    try {
      const parsed = new URL(website);
      if (!/^https?:$/.test(parsed.protocol) || website.length > 300) return "invalid";
    } catch {
      return "invalid";
    }
  }

  if (contactMethod === "email" && !validEmail(email)) return "contact";
  if (contactMethod === "whatsapp") {
    const digits = phone.replace(/\D/g, "");
    const countryDigits = countryCode.slice(1);
    if (!/^\+[1-9]\d{0,3}$/.test(countryCode)
      || !/^[0-9\s().-]+$/.test(phone)
      || digits.length < 5
      || digits.length > 15
      || digits.length + countryDigits.length < 8
      || digits.length + countryDigits.length > 15) return "contact";
  }

  return {
    name,
    service,
    challenge,
    details,
    website,
    contactMethod,
    countryCode,
    phone,
    email,
    consent: true,
    sourcePage,
    honeypot: cleanText(body.honeypot, 300),
  };
}

function redisSettings() {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:") return null;
    return { base: parsed.toString().replace(/\/$/, ""), token };
  } catch {
    return null;
  }
}

async function protectSubmission(request: Request, enquiry: Enquiry) {
  const redis = redisSettings();
  // Vercel supplies x-real-ip; use it before forwarded headers so visitor input cannot
  // cheaply rotate rate-limit keys by adding values to x-forwarded-for.
  const ip = request.headers.get("x-real-ip")?.trim()
    || request.headers.get("x-vercel-forwarded-for")?.split(",").at(-1)?.trim()
    || request.headers.get("x-forwarded-for")?.split(",").at(-1)?.trim();
  if (!ip) return { type: "unavailable" as const };

  // Redis is preferred for a shared limit across Vercel instances. When no Redis
  // credentials are configured, keep a best-effort per-instance limit so the form
  // remains usable; this state resets with the serverless instance and is not global.
  if (!redis) {
    const secret = process.env.RESEND_API_KEY;
    if (!secret) return { type: "unavailable" as const };
    const now = Date.now();
    for (const [key, expiry] of localDuplicates) if (expiry <= now) localDuplicates.delete(key);
    for (const [key, rate] of localRateLimits) if (rate.expiresAt <= now) localRateLimits.delete(key);
    const rateKey = createHmac("sha256", secret).update(ip).digest("hex");
    const rate = localRateLimits.get(rateKey);
    if (rate && rate.count >= MAX_REQUESTS) return { type: "limited" as const };
    if (rate) rate.count += 1;
    else localRateLimits.set(rateKey, { count: 1, expiresAt: now + WINDOW_SECONDS * 1000 });
    const payloadHash = createHmac("sha256", secret).update(JSON.stringify({
      name: enquiry.name, service: enquiry.service, challenge: enquiry.challenge,
      details: enquiry.details, website: enquiry.website, contactMethod: enquiry.contactMethod,
      countryCode: enquiry.countryCode, phone: enquiry.phone, email: enquiry.email,
    })).digest("hex");
    if ((localDuplicates.get(payloadHash) || 0) > now) return { type: "duplicate" as const };
    localDuplicates.set(payloadHash, now + DUPLICATE_SECONDS * 1000);
    return { type: "allowed" as const, redis: null, duplicateKey: payloadHash };
  }

  const digest = (value: string) => createHmac("sha256", redis.token).update(value).digest("hex");
  const rateKey = `fazil:enquiry:rate:${digest(ip)}`;
  const payloadHash = digest(JSON.stringify({
    name: enquiry.name,
    service: enquiry.service,
    challenge: enquiry.challenge,
    details: enquiry.details,
    website: enquiry.website,
    contactMethod: enquiry.contactMethod,
    countryCode: enquiry.countryCode,
    phone: enquiry.phone,
    email: enquiry.email,
  }));
  const duplicateKey = `fazil:enquiry:dedupe:${payloadHash}`;
  const script = "local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],ARGV[1]); end; if n>tonumber(ARGV[2]) then return {0,n}; end; local ok=redis.call('SET',KEYS[2],'1','NX','EX',ARGV[3]); if not ok then return {2,n}; end; return {1,n}";

  try {
    const response = await fetch(`${redis.base}/pipeline`, {
      method: "POST",
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${redis.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([["EVAL", script, "2", rateKey, duplicateKey, String(WINDOW_SECONDS), String(MAX_REQUESTS), String(DUPLICATE_SECONDS)]]),
      signal: AbortSignal.timeout(3500),
    });
    if (!response.ok) return { type: "unavailable" as const };
    const result = await response.json() as Array<{ result?: [number, number] }>;
    const decision = result[0]?.result?.[0];
    if (decision === 0) return { type: "limited" as const };
    if (decision === 2) return { type: "duplicate" as const };
    if (decision !== 1) return { type: "unavailable" as const };
    return { type: "allowed" as const, redis, duplicateKey };
  } catch {
    return { type: "unavailable" as const };
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  })[character]!);
}

function contactSummary(enquiry: Enquiry) {
  return enquiry.contactMethod === "email"
    ? `Email: ${enquiry.email}`
    : `WhatsApp: ${enquiry.countryCode} ${enquiry.phone}`;
}

function makeEmail(enquiry: Enquiry) {
  const submittedAt = new Date().toISOString();
  const rows: Array<[string, string]> = [
    ["Name", enquiry.name],
    ["Service", enquiry.service],
    ["Challenge", enquiry.challenge],
    ["Additional details", enquiry.details || "—"],
    ["Website", enquiry.website || "—"],
    ["Preferred contact", enquiry.contactMethod],
    ["Contact detail", contactSummary(enquiry)],
    ["Source page", enquiry.sourcePage],
    ["Submitted at (UTC)", submittedAt],
  ];
  const htmlRows = rows.map(([label, value]) => `<tr><th align="left" style="padding:10px 12px;border-bottom:1px solid #e7e5e1;color:#414141;vertical-align:top">${escapeHtml(label)}</th><td style="padding:10px 12px;border-bottom:1px solid #e7e5e1;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join("");
  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  return { html: `<div style="font-family:Arial,sans-serif;color:#080808;max-width:680px"><h1 style="font-size:22px">New enquiry from ${escapeHtml(enquiry.name)}</h1><table style="border-collapse:collapse;width:100%">${htmlRows}</table></div>`, text, submittedAt };
}

async function releaseDuplicateLock(redis: { base: string; token: string } | null, duplicateKey: string) {
  if (!redis) {
    localDuplicates.delete(duplicateKey);
    return;
  }
  try {
    await fetch(`${redis.base}/pipeline`, {
      method: "POST",
      cache: "no-store",
      headers: { Authorization: `Bearer ${redis.token}`, "Content-Type": "application/json" },
      body: JSON.stringify([["DEL", duplicateKey]]),
      signal: AbortSignal.timeout(1500),
    });
  } catch {
    // The short lock expires automatically if the provider cannot be reached here.
  }
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).origin !== new URL(request.url).origin) return json({ ok: false, error: "Request could not be accepted." }, 403);
    } catch {
      return json({ ok: false, error: "Request could not be accepted." }, 403);
    }
  }

  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return json({ ok: false, error: "Send the enquiry using the form." }, 415);
  }

  const parsed = await readJsonLimited(request);
  if (parsed === null) return json({ ok: false, error: "The enquiry is too large. Shorten the details and try again." }, 413);
  if (parsed === undefined) return json({ ok: false, error: "The enquiry could not be read. Check the fields and try again." }, 400);

  const parsedEnquiry = parseEnquiry(parsed);
  if (typeof parsedEnquiry === "string") {
    if (parsedEnquiry === "consent") return json({ ok: false, error: "Please agree to be contacted about this enquiry." }, 400);
    if (parsedEnquiry === "contact") return json({ ok: false, error: "Enter a valid contact detail for your selected method." }, 400);
    return json({ ok: false, error: "Check your answers and try again." }, 400);
  }

  const enquiry = parsedEnquiry;
  // Do not send data from an automated honeypot submission. A neutral response keeps
  // the endpoint from disclosing the filtering rule or generating noisy retries.
  if (enquiry.honeypot) return json({ ok: true, accepted: true }, 202);

  const resendKey = process.env.RESEND_API_KEY;
  const recipient = process.env.LEAD_TO_EMAIL || DEFAULT_RECIPIENT;
  const sender = process.env.LEAD_FROM_EMAIL;
  const protection = await protectSubmission(request, enquiry);
  if (protection.type === "limited") return json({ ok: false, error: "Too many enquiries were submitted. Please wait a few minutes and try again." }, 429, { "Retry-After": String(WINDOW_SECONDS) });
  if (protection.type === "duplicate") return json({ ok: false, error: "This enquiry was just submitted. Please wait before sending it again." }, 409);
  if (protection.type === "unavailable" || !resendKey || !sender) return json({ ok: false, error: "Enquiry submission is temporarily unavailable. Please try again later or use WhatsApp." }, 503);

  const email = makeEmail(enquiry);
  const message = {
    from: sender,
    to: [recipient],
    subject: `New Fazil Digital Enquiry — ${enquiry.service}`,
    html: email.html,
    text: email.text,
    ...(enquiry.contactMethod === "email" ? { reply_to: enquiry.email } : {}),
  };

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      cache: "no-store",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify(message),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) {
      await releaseDuplicateLock(protection.redis, protection.duplicateKey);
      return json({ ok: false, error: "We couldn't submit your enquiry just now. Your answers are still here—please try again." }, 502);
    }

    const providerResult = await response.json() as { id?: string };
    if (!providerResult.id) {
      await releaseDuplicateLock(protection.redis, protection.duplicateKey);
      return json({ ok: false, error: "We couldn't confirm your enquiry submission. Your answers are still here—please try again." }, 502);
    }
    return json({ ok: true, accepted: true, contactMethod: enquiry.contactMethod, submittedAt: email.submittedAt }, 200);
  } catch {
    await releaseDuplicateLock(protection.redis, protection.duplicateKey);
    return json({ ok: false, error: "We couldn't submit your enquiry just now. Your answers are still here—please try again." }, 502);
  }
}
