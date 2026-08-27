# Fazil Digital Analytics Setup

The site has one GA4 integration through `src/components/Analytics.tsx`. The Production environment variable was configured in the `fazil-digital` Vercel project on 2026-08-27:

`NEXT_PUBLIC_GA_MEASUREMENT_ID=G-BEGJF6PL8R`

Use the Web data stream measurement ID for `https://www.fazildigital.com`. Do not use the GA account ID or numeric property ID.

Implemented events:

| Event | Trigger | Data sent |
| --- | --- | --- |
| `contact_form_submit` | Valid contact form continues to WhatsApp | `method: whatsapp` |
| `generate_lead` | Same form continuation | `method: whatsapp` |
| `whatsapp_click` | Click on a `wa.me` link | Event name only |
| `email_click` | Click on a `mailto:` link | Event name only |
| `phone_click` | Click on a `tel:` link | Event name only |

Names, email addresses, phone numbers, form messages, and WhatsApp message text are not sent to analytics.

Production activation and event verification are recorded below.

| Check | Status |
| --- | --- |
| Production environment variable | Configured for Production in Vercel |
| Production deployment containing the variable | Pending current release verification |
| `gtag.js` loaded on production | Pending current release verification |
| GA4 collection requests | Pending current release verification |
| Events visible in GA4 Realtime | Pending current release verification |
| `generate_lead` key event | Pending successful GA4 receipt |

Do not add a second Google tag or commit a measurement ID in a separate script. After deployment, verify events in GA4 Realtime or DebugView and mark only `generate_lead` as the primary key event.
