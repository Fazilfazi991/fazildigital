# Fazil Digital design system

## Direction

The current owner-approved visual language uses a black × off-white × orange palette inspired by a supplied modern editorial portfolio reference. Use bold, intentional compositions, oversized clear headings, real portraits, strong black panels and orange accents. Keep the About, Calicut, shared navigation, chatbot and homepage recognizably related while respecting the layouts and SEO purpose of each page. Avoid generic SaaS cards, excessive copy, fake proof, exaggerated results, and artificial scroll experiences.

Audience: Saudi business owners and marketing teams seeking direct SEO support, particularly in Riyadh, Jeddah and Dammam. The Calicut page describes remote consultancy for businesses in Calicut/Kozhikode and does not imply a local office.

## Tokens

| Role | Value | Rule |
| --- | --- | --- |
| Canvas | `#F8F7F3` | Primary light background |
| Ink | `#080808` | Headlines and high-contrast surfaces |
| Orange | `#FFB638` | Accent, graphic frame, selected state, CTA with black text |
| Neutral | `#E7E5E1` | Supporting panels and diagrams |
| Muted copy | `#414141` | Supporting text on light surfaces |
| White | `#FFFFFF` | Cards and reversed text on black |
| Focus | `#8A4A00` | Visible keyboard outline on light surfaces |

Use about 65% off-white, 25% black/charcoal and 10% orange across the homepage. Avoid white text over orange. Continue Plus Jakarta Sans for display and DM Sans for body/UI unless a documented layout comparison establishes a better fit. Use bold display type with negative tracking and comfortable body line height. Keep body text at 16px or larger except genuinely compact labels.

## Layout and interaction

Use a 4/8px spacing rhythm, max content measure near 1280px, fluid gutters and mobile-first reading order. Give sections varied visual composition: photo-led hero, black founder introduction, interactive selector, designed illustrative artifacts, asymmetrical service bento, four-step click-to-expand process, city list, editorial article links and a high-contrast contact region. Avoid identical repeated card grids and filler whitespace. Buttons and touch targets should be at least 44px, with visible hover and focus states. Native details/summary is appropriate for FAQs.

Page flow uses normal document scrolling. Do not add scroll-scrubbed video, pinned sections, canvas storytelling, artificial page height, scroll-jacking, autoplay, or scroll-triggered paragraph reveals. Keep lightweight hover/click feedback brief and honor `prefers-reduced-motion`.

## Accessibility, forms and chat

Preserve semantic landmarks, a skip link, logical headings, keyboard access, descriptive image alternatives, responsive reading order and visible focus. The owner photo should not be covered by decorative text. The CTA form only prepares a message locally; it must not submit or retain personal information. Preserve validation, honeypot, privacy notice, explicit user handoff to WhatsApp and rate-limited server-side chatbot credential handling. Keep the chatbot subordinate and do not cover hero content.

## Content and SEO constraints

Use the real owner portraits `/images/home/mohammad-fazil-portrait.webp` and `/images/about/mohammad-fazil.webp`; provenance is beside each asset. Label illustrative artifacts as examples. Do not invent client results, logos, credentials, dates, education, or office presence. Preserve verified Fusion Ventures title exactly and the owner-confirmed ZORX role labeling in About.

Preserve canonical metadata, redirects, analytics, Saudi service URLs, content and sitemap behavior. Calicut retains its canonical and `noindex, follow` and stays outside the sitemap. Any later public SEO launch must separately update indexing and sitemap inclusion.
