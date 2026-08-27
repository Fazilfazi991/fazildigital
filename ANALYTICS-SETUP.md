# Fazil Digital Analytics Setup

The site has one optional GA4 integration. It remains inactive unless this environment variable is configured in Vercel:

`NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

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

After adding the ID, deploy once and verify events in GA4 DebugView or Realtime. Mark `generate_lead` as a key event only after a real test confirms it fires once per intended lead action.
