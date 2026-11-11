import { createHmac, randomUUID } from "node:crypto";

const SCRIPT = `
local visitor = redis.call('INCR', KEYS[1])
if visitor == 1 then redis.call('EXPIRE', KEYS[1], tonumber(ARGV[1])) end
local daily = redis.call('INCR', KEYS[2])
if daily == 1 then redis.call('EXPIRE', KEYS[2], tonumber(ARGV[2])) end
redis.call('ZREMRANGEBYSCORE', KEYS[3], '-inf', tonumber(ARGV[5]))
local active = redis.call('ZCARD', KEYS[3])
if visitor > tonumber(ARGV[3]) or daily > tonumber(ARGV[4]) or active >= tonumber(ARGV[6]) then
  return {visitor, daily, 0}
end
redis.call('ZADD', KEYS[3], tonumber(ARGV[5]) + tonumber(ARGV[7]), ARGV[8])
redis.call('EXPIRE', KEYS[3], math.ceil(tonumber(ARGV[7]) / 1000) + 10)
return {visitor, daily, 1}
`;

export type LimitResult = { allowed: boolean; remaining: number; release?: () => Promise<void> };

export async function checkChatLimit(ip: string): Promise<LimitResult> {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
  const salt = process.env.CHATBOT_RATE_LIMIT_SALT;
  if (!redisUrl || !redisToken || !salt || Buffer.byteLength(salt) < 32) throw new Error("Rate limiter is not configured");

  const url = new URL(redisUrl);
  if (url.protocol !== "https:" || !(url.hostname === "upstash.io" || url.hostname.endsWith(".upstash.io"))) {
    throw new Error("Invalid rate limiter endpoint");
  }

  const visitorHash = createHmac("sha256", salt).update(ip).digest("hex").slice(0, 32);
  const now = new Date();
  const window = Math.floor(now.getTime() / 600_000);
  const day = now.toISOString().slice(0, 10);
  const perWindowLimit = boundedInteger(process.env.CHATBOT_VISITOR_LIMIT, 6, 1, 30);
  const dailyLimit = boundedInteger(process.env.CHATBOT_DAILY_REQUEST_LIMIT, 75, 1, 5000);
  const concurrencyLimit = boundedInteger(process.env.CHATBOT_MAX_CONCURRENT, 5, 1, 50);
  const leaseMs = 40_000;
  const token = randomUUID();
  const windowTtl = Math.ceil((600_000 - (now.getTime() % 600_000)) / 1000) + 10;
  const dayTtl = Math.ceil((86_400_000 - (now.getTime() % 86_400_000)) / 1000) + 10;

  const response = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${redisToken}`, "Content-Type": "application/json" },
    body: JSON.stringify([
      "EVAL", SCRIPT, "3",
      `fazil-chat:visitor:${visitorHash}:${window}`,
      `fazil-chat:daily:${day}`,
      "fazil-chat:inflight",
      String(windowTtl), String(dayTtl), String(perWindowLimit), String(dailyLimit),
      String(now.getTime()), String(concurrencyLimit), String(leaseMs), token,
    ]),
    cache: "no-store",
    signal: AbortSignal.timeout(3500),
  });
  if (!response.ok) throw new Error("Rate limiter unavailable");
  const payload = await response.json() as { result?: unknown; error?: string };
  if (payload.error || !Array.isArray(payload.result) || payload.result.length !== 3) {
    throw new Error("Rate limiter unavailable");
  }
  const visitorCount = Number(payload.result[0]);
  const dayCount = Number(payload.result[1]);
  const leaseGranted = Number(payload.result[2]) === 1;
  if (!Number.isFinite(visitorCount) || !Number.isFinite(dayCount)) throw new Error("Rate limiter unavailable");
  return {
    allowed: leaseGranted,
    remaining: Math.max(0, Math.min(perWindowLimit - visitorCount, dailyLimit - dayCount)),
    ...(leaseGranted ? { release: () => releaseLease(url, redisToken, token) } : {}),
  };
}

async function releaseLease(url: URL, redisToken: string, token: string) {
  const response = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${redisToken}`, "Content-Type": "application/json" },
    body: JSON.stringify(["EVAL", "return redis.call('ZREM', KEYS[1], ARGV[1])", "1", "fazil-chat:inflight", token]),
    cache: "no-store",
    signal: AbortSignal.timeout(2500),
  });
  if (!response.ok) throw new Error("Rate limiter release failed");
}

function boundedInteger(value: string | undefined, fallback: number, min: number, max: number) {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed >= min && parsed <= max ? parsed : fallback;
}
