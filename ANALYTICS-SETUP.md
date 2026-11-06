# Fazil Digital Analytics Setup

The site has one GA4 integration through `src/components/Analytics.tsx`. The measurement ID is read from `NEXT_PUBLIC_GA_MEASUREMENT_ID`; no second tag or synthetic ID belongs in production. Use the actual Web data stream for the canonical website. Do not use the GA account ID or numeric property ID.

## Current development implementation — 6 November 2026

The Saudi review form prepares a message in the browser. The visitor copies it and opens a clean WhatsApp destination, then pastes and sends it there. A selectable manual copy fallback appears if clipboard access fails. The message is never placed in an outbound URL. These events describe separate intent stages; none verifies message delivery, a qualified lead or a sale.

| Event | Trigger | Data sent |
| --- | --- | --- |
| `seo_review_intent` | A valid SEO review form prepares a draft locally | `method: whatsapp` |
| `contact_form_submit` | The prepared enquiry's review link is clicked; the name is retained for continuity with earlier instrumentation | `method: whatsapp` |
| `whatsapp_click` | Click on a `wa.me` link | Event name only |
| `email_click` | Click on a `mailto:` link | Event name only |
| `phone_click` | Click on a `tel:` link | Event name only |

Names, email addresses, phone numbers, form messages, website field contents and WhatsApp message text are not passed as custom event parameters. The approved outbound destination is `https://wa.me/971542763828`, without a message query string. Synthetic intercepted testing covers both review forms and simulated enhanced outbound `link_url` collection; see `reports/release-privacy-test.json`. It does not inspect the real GA4 stream or guarantee the behavior of arbitrary third-party scripts. A prepared message remains a draft until the visitor chooses to paste and send it in WhatsApp.

The current bridge does **not** emit `generate_lead`. Do not carry the old instruction to mark that event as a primary key event into this release. If the owner later defines an intent event as a key event, its reporting label must still distinguish intent from qualified enquiries. Qualification requires a separate, evidence-backed business process; the website does not claim a CRM or a confirmed delivery callback.

Tests may stub the event collector and inspect synthetic interactions locally without sending a real message. A synthetic measurement ID is test-only and must never be saved as production configuration. Local event assertions do not establish that the real GA4 property has received or classified those events. Current production stream matching and any property configuration remain release checks for the owner; no production analytics setting was changed during this content pass.

## Historical activation record — 27 August 2026

The following entries preserve the earlier repository record for the `fazil-digital` project. They describe the old production implementation and its verification on that date, not a fresh verification of the November redesign or its current event semantics. The then-recorded public Web stream measurement ID was `G-BEGJF6PL8R`.

| Check | Status |
| --- | --- |
| Production environment variable | Configured for Production in Vercel |
| Production deployment containing the variable | Verified on release `9f2ab8d` |
| `gtag.js` loaded on production | Verified once with measurement ID `G-BEGJF6PL8R` |
| GA4 collection requests | Verified for production page views and `whatsapp_click` |
| Events visible in GA4 Realtime | Verified in the `Fazildigital` property (ID `551832601`): `contact_form_submit`, `generate_lead`, `whatsapp_click`, and `email_click` |
| Historical `generate_lead` key-event check | Rechecked in Chrome on 2026-08-27: Admin → Data display → Events → Recent events showed `0 of 0`; configuration was deferred and existing key events were unchanged. This is historical, not a current instruction to enable the event. |

Verification used synthetic contact details and stopped at the WhatsApp review screen; no message was sent. The observed custom event parameters contained only `method: whatsapp` where applicable and no personally identifiable information.

The historical continuation emitted more ambitious lead semantics than the current implementation supports. Its former key-event recommendation is superseded by the intent-only definitions above. Keep a single environment-configured tag, and verify the actual production stream and owner-approved event definitions before any eventual release.
