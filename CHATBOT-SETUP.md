# Chat assistant setup

The chatbot is intentionally unavailable until every required server-side setting is present. No provider request runs from the browser, and the API route returns unavailable unless its opt-in switch, DeepSeek secret, and durable Upstash limiter are configured.

## Required environment variables

Set these in the protected development or preview environment only after approving paid API traffic:

| Variable | Purpose |
| --- | --- |
| `CHATBOT_ENABLED=true` | Explicitly enables the public chat endpoint. Omit or set to `false` to disable. |
| `DEEPSEEK_API_KEY` | Server-only DeepSeek API credential. Never use a `NEXT_PUBLIC_` name. |
| `UPSTASH_REDIS_REST_URL` | HTTPS REST endpoint for an existing Upstash Redis database. |
| `UPSTASH_REDIS_REST_TOKEN` | Server-only Upstash REST token. |
| `CHATBOT_RATE_LIMIT_SALT` | Random private salt, at least 32 bytes, used to derive a pseudonymous visitor key. Rotate it to reset visitor buckets. |

Optional settings:

| Variable | Default | Bounds |
| --- | --- | --- |
| `DEEPSEEK_MODEL` | `deepseek-flash` | Alphanumeric model identifier with `.`, `_`, or `-`; server-side only. |
| `CHATBOT_VISITOR_LIMIT` | `6` | Requests per 10-minute visitor window, 1–30. |
| `CHATBOT_DAILY_REQUEST_LIMIT` | `75` | Global requests per UTC day, 1–5000. |
| `CHATBOT_MAX_CONCURRENT` | `5` | Concurrent provider streams, 1–50. Leases expire after 40 seconds if a worker is terminated. |

The API uses a direct server-side Fetch integration with DeepSeek's documented Chat Completions stream. It requests non-thinking mode, limits output to 300 tokens, and has a 28-second upstream timeout. The Upstash Lua script increments visitor and global daily counters and grants a bounded concurrent-stream lease atomically; Redis failures fail closed before any model call. The visitor IP is read from Vercel's `x-real-ip` request header, processed transiently for keyed hashing, and not stored as a raw Redis key. Redis counters expire at their window/day boundary; concurrent leases expire after 40 seconds if a worker is terminated. Vercel hosting logs and the providers' own processing remain subject to their applicable terms.

The global daily limit counts requests, not exact API spend. Model prices and prompt size can change; review provider usage and keep billing alerts enabled. This implementation does not provision a database, install secrets, or alter Vercel configuration.

## Privacy and behavior

- Chat transcripts live only in the open browser tab's memory and are not stored by this site by default.
- When chat is enabled, the bounded recent messages are sent to DeepSeek for response processing. Do not promise that DeepSeek does not retain them; see its [Privacy Policy](https://platform.deepseek.com/downloads/DeepSeek%20Privacy%20Policy.pdf).
- The site sends no chat content to Google Analytics. Only parameter-free interaction event names are emitted.
- WhatsApp handoff drafts contain only fields the visitor chooses to enter. The UI copies the draft explicitly and opens the clean `https://wa.me/971542763828` destination without query text; sending remains a visitor action.
- The approved knowledge base is versioned in `src/lib/chatbot/knowledge.ts`. It deliberately omits unverified biography, credentials, client outcomes and prices.

## Mount contract

Import and render `ChatAssistant` from `src/components/chatbot/ChatAssistant.tsx` once in the shared site shell (for example, `SiteChrome`). Do not import it into page content or add another WhatsApp control. Its launcher is fixed at `z-index: 80`, 112px above the lower safe-area edge on desktop and 164px on narrow screens to clear existing contact controls. The open panel uses a scrim at `z-index: 100` and becomes a full-screen safe-area-aware sheet at `z-index: 120` on mobile. The component owns its CSS import and does not require shared style edits.

## Verification notes

Without credentials, `GET /api/chat` returns `{ "available": false }`; the client shows an unavailable message, and `POST /api/chat` returns 503 without calling DeepSeek. There are no credentials in this branch, so a real provider call and public rate-limit exercise are not possible here. Use synthetic messages only when testing an authorized protected preview.
