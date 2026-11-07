# Homepage UX and accessibility review

6 November 2026. Source review of `src/app/page.tsx`, `src/app/home.css`, `src/components/home/HomeInteractions.tsx` and `DESIGN-SYSTEM.md`, followed by a source recheck after the lead's corrections. The lead owns all UI changes. The source findings below have been resolved; final rendered behavior and automated results are recorded separately in `REVAMP-VERIFICATION-REPORT.md`.

## Resolved review findings

| Initial finding | Final implementation verified in source |
| --- | --- |
| Important body copy and controls became too small at mobile/tablet widths. | Cross-breakpoint CSS floors now keep body explanations, FAQs and principles at 14px, and secondary text/actions at 12px. Inputs use 16px text. Tablet services stack into a readable single column rather than shrinking card copy. The lead visually inspected desktop and mobile captures. |
| The shared brown focus outline measured 2.78:1 against forest, reducing focus visibility on dark panels. | The review section and forest market panel now use a sand focus outline. Sand `#C8B38B` on forest `#1E4032` measures 5.60:1; brown on ivory remains 3.71:1. The outline is 3px with a 5px offset. |
| Decorative insight artwork was a pointer-only link hidden from assistive navigation. | Artwork is now a noninteractive `div` with decorative SVG. Each original note uses an accessible native disclosure, removing the duplicate hidden link. |
| Header primary action used a 44px minimum height, inconsistent with the documented action rule. | Header review CTA now has a 48px minimum height. Footer standalone actions have a 28px minimum height and separation; main buttons remain at least 50px. |
| Three renamed guide cards risked presenting broad, unreviewed legacy articles as reviewed Saudi SEO material. | All three were replaced by original inline notes with complete text on the homepage, native `details` controls and no invented article URLs or dates. The legacy blog archive remains separately linked. |
| Without JavaScript, a normal form submission could place personal details in a default GET URL. | `useSyncExternalStore` supplies a false server hydration snapshot, keeping the form fieldset disabled until client hydration. A `noscript` explanation offers a direct WhatsApp link. Draft creation remains client-side, with an explicit review/send boundary. |

Contrast calculations use the WCAG relative-luminance formula on the specified CSS colors. They support these specific design decisions, not a claim of complete WCAG conformance. Typography floors refer to informative body copy and secondary UI; decorative labels and the compact wordmark/desktop header treatment have their own display rules.

## Implemented editorial treatment

The homepage now contains three self-contained Saudi SEO notes:

- **Arabic SEO starts before translation** — independent Arabic and English intent research and qualified localization review.
- **Local visibility starts with real signals** — accurate business details, eligible real operations and useful city context.
- **Give every search a useful destination** — crawlability, distinct page purposes, useful internal links and meaningful measurement.

“Read the note” expands its content in place with native disclosure semantics. The notes are actual homepage content, not empty preview cards, new internal pages or fabricated past publications. Existing article routes remain untouched and discoverable through “Explore the insights archive”. Their separate factual review remains Phase 2 work.

## Confirmed UX and scope strengths

- One H1, clear H2/H3 relationships, a skip link and semantic main/header/footer landmarks.
- The requested section order and three focused service pillars; no paid advertising, software or social management promoted in the new offer.
- Riyadh receives visual priority while all three retained city SEO URLs have natural discovery links.
- Native `details`/`summary` for menu, notes and FAQ. Escape closes the mobile menu and returns focus to its summary.
- Reduced-motion CSS disables authored animation/transition; essential content is never hidden behind the scroll observer.
- Persistent form labels, native URL validation, input length limits, a honeypot, no backend success pretence and a clear prepare → review → send boundary. The conversion event fires on the outbound WhatsApp action, not draft preparation.
- Honest selected-work placeholder and factual person/organization relationships without fabricated offices, results, testimonials or Saudi clients.
- Arabic remains a future independently researched localization scope with qualified review; no untranslated routes or premature language switcher.

## Verification handoff and limits

The lead reports scoped lint and TypeScript checks passing and a successful production build generating 162 static pages. The lead also inspected the actual desktop and mobile screenshot captures and found the overall presentation sound. This reviewer rechecked implementation source, not the browser, and did not duplicate the QA agent's run.

Use the final `REVAMP-VERIFICATION-REPORT.md` for exact browser checks, failures corrected, viewport measurements and screenshot evidence. Its test scope should cover narrow mobile, tablet and desktop fit; keyboard focus, menu and disclosures; invalid and valid drafts; encoded WhatsApp text; no-JavaScript fallback; and transitions between the new homepage and preserved legacy routes. No real WhatsApp message needs to be sent to validate the flow.

The homepage is review-ready within the Phase 1 boundary. Full internal-page repositioning, evidence-backed Saudi case studies, dedicated article-page publishing and Arabic localization remain later work. Source review and synthetic checks do not establish field Core Web Vitals, real conversion performance or current organic ranking changes.
