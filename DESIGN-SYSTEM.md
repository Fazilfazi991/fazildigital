# Fazil Digital design system

## Direction

**Search Wayfinding** presents Fazil Digital as a direct, practical SEO consultancy. The interface helps a visitor understand the path from a search problem to a useful page and a clear enquiry. It uses restrained editorial structure, navigational cues, clear evidence labels, and purposeful variation between sections. It avoids the earlier beige/forest-green and oversized serif treatment.

Audience: Saudi business owners and marketing teams seeking direct SEO support, particularly in Riyadh, Jeddah, and Dammam. The Calicut page also describes remote consultancy for businesses in Calicut/Kozhikode and does not imply a local office.

## Tokens

| Role | Value | Rule |
| --- | --- | --- |
| Canvas | `#FAFAF8` | Default page surface |
| Surface | `#FFFFFF` | Cards, menus, and form controls |
| Ink | `#151B26` | Headings and primary copy |
| Brand blue | `#2463EB` | Links, primary actions, and wayfinding |
| Blue hover | `#1D4ED8` | Hover and pressed action state |
| Lime | `#C6F36B` | Restrained marker and selected-state accent |
| Cool neutral | `#E7EBF1` | Diagrams and secondary panels |
| Muted copy | `#465366` | Supporting text on light surfaces |
| Border | `#D5DBE4` | Decorative separators; do not use alone to distinguish controls |
| Focus | `#142B55` | Visible keyboard focus against light surfaces |

Plus Jakarta Sans is used for headings and DM Sans for body/UI text, self-hosted through `next/font/google`. Body copy is 16px or larger, with comfortable line height and measures generally under 70ch. Hero headings are fluid: approximately 40–72px desktop and 34–48px mobile. Avoid arbitrary small informational labels.

## Layout and composition

Use a 4px/8px spacing rhythm, a 1180px content measure, and fluid gutters. The shared header and footer provide consistent brand orientation. Home, About, and Calicut use route-specific compositions: personal introduction and search-to-enquiry path on home; founder story and readable career timeline on About; local market-specific remote consultancy on Calicut. Alternate split compositions, process diagrams, editorial rows, lists, and restrained feature panels. Do not add filler or repeat the same card grid in every section.

Primary buttons use blue with white text, at least a 44px target, and clear hover/focus feedback. Keep lime as a small accent. Use dark ink panels selectively. Keep visible text contrast AA; decorative separators may use the border token, but inputs and controls need a clearer boundary or focus treatment. Mobile navigation is a keyboard-operable native disclosure. FAQs use native details/summary where appropriate.

## Motion and accessibility

Motion is short and purposeful: 150–220ms control feedback and modest 350–550ms reveals. Essential content is visible without JavaScript. Respect `prefers-reduced-motion`, including programmatic scrolling. Preserve logical headings, landmarks, skip navigation, descriptive image alternatives, keyboard focus, and responsive reading order. Do not use scroll-jacking, parallax, or animation that changes layout geometry.

The chatbot stays visually subordinate to page content, sits near the safe-area bottom, and must not cover the hero message or primary CTA. Keep server-side credential handling, rate limits, privacy notice, and explicit WhatsApp handoff. Never enable paid public requests without separate authorization.

## Evidence and content boundaries

Use the real owner-supplied portrait at `/images/about/mohammad-fazil.webp`; provenance and conversion details are recorded in `public/images/about/ASSET-PROVENANCE.md`. Label example deliverables as examples. Do not invent client outcomes, logos, credentials, education, dates, or office presence. The latest owner instruction authorizes undated ZORX marketing leadership; it remains labeled owner-confirmed and not independently verified in the About fact register. Preserve the verified Fusion Ventures title exactly.

Calicut keeps its canonical and `noindex, follow` while it is a Preview and stays out of the sitemap. A later approved SEO launch must separately update indexing and sitemap inclusion. Preserve Saudi URLs, canonical metadata, redirects, analytics, privacy-safe forms, and existing content.
