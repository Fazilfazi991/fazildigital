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
| Production deployment containing the variable | Verified on release `9f2ab8d` |
| `gtag.js` loaded on production | Verified once with measurement ID `G-BEGJF6PL8R` |
| GA4 collection requests | Verified for production page views and `whatsapp_click` |
| Events visible in GA4 Realtime | Verified in the `Fazildigital` property (ID `551832601`): `contact_form_submit`, `generate_lead`, `whatsapp_click`, and `email_click` |
| `generate_lead` key event | Deferred: visible in Realtime, but the Admin recent-events table has not processed the new events yet (GA4 notes this can take up to 24 hours) |

Verification used synthetic contact details and stopped at the WhatsApp review screen; no message was sent. The observed custom event parameters contained only `method: whatsapp` where applicable and no personally identifiable information.

Do not add a second Google tag or commit a measurement ID in a separate script. Once `generate_lead` appears under Admin → Data display → Events → Recent events, mark only that event as the primary key event.
