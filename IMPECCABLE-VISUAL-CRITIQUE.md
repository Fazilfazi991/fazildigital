# Impeccable critique: existing production design

⚠️ DEGRADED: single-context (sub-agent spawn failed: agent thread limit reached). The full project team occupies the available slots. The design review was made before consulting the detector. The Impeccable skill's `context.mjs`, `critique`, `shape`, `new-work`, `typeset`, `layout` and `distill` references guided this work. The deterministic detector reported no findings for `src/app/page.tsx`; a clean detector is not a visual-quality verdict. Browser-injected overlay was not run because the available browser evaluation surface is read-only. No temporary critique server was started.

## What was reviewed

The live homepage, Riyadh, SEO Services, About, Blog and Contact were opened and visually inspected in the browser at desktop width on 7 November 2026. The existing mobile baseline and full-page browser captures are recorded in `RECONCILED-BROWSER-VERIFICATION.md`; they are useful regression evidence, but were not a new mobile critique session. Product and design context, current homepage TSX and `DESIGN-SYSTEM.md` were also read.

## Strengths

- The commercial intent and market are clear, and the consultant's name appears without invented proof.
- The forest, paper and ink palette has a recognizable, calm identity; fonts are locally hosted.
- The enquiry flow clearly distinguishes drafting, copying and sending, with personal details excluded from WhatsApp links.

## Priority findings and response

1. **The type sets the pace for every page.** The large, high-contrast display serif takes most of the first view on home, Riyadh, Services, About, Blog and Contact. The repetition feels generated even though the copy differs. Retain the font as an accent, reduce hero scale, and give service, city, reading and enquiry pages distinct compositional roles.
2. **Visuals explain too little.** The homepage radar graphic and generic geometric motifs create polish but do not show what SEO work produces. Replace the hero's decorative focus with one authored, calm editorial visual, and use a clearly labelled illustrative deliverable to explain an audit's inputs and prioritized outputs. Do not present specimen work as a real client report.
3. **Useful reassurance arrives late.** The first desktop viewport gives the headline most of the available height and pushes conversion detail toward the bottom edge. Bring the primary request action and direct-consultant context into view earlier, and show what happens after preparing a message where the form is used.
4. **Sections share the same volume and rhythm.** Large display headings, wide empty bands, and repeated two-column explanations make service and city pages difficult to distinguish. Mix concise numbered rows, an asymmetric image-and-copy chapter, a dark process section, and readable editorial lists. Keep the page purpose recognizable at a glance.
5. **Credibility is abstract.** “Direct involvement” and “clear process” are valid but not concrete. Show named consultancy, scope, specific activities and a sample roadmap without fabricating clients, statistics, a Saudi office, or results.

## Representative page notes

| Surface | Rendered observation | Design priority |
| --- | --- | --- |
| Homepage | The headline and dark radar dominate; supporting value and CTA sit low in the viewport. | Make the offer, action and one meaningful visual share the first view. |
| Riyadh | Clear service keyword, but the sparse split hero is structurally identical to service and support pages. | Make the primary market's customer needs and deliverables more tangible; preserve the commercial H1. |
| SEO Services | The huge heading competes with explanatory text in a separate column. | Use a compact service overview, visible deliverable structure and a clear path to the review. |
| About | The page states a direct relationship but uses the same hero structure. | Give the named consultant's working relationship a distinct, personal editorial treatment without a fabricated portrait. |
| Blog | Archive opens with oversized display copy before useful reading choices. | Elevate article titles, categories and readability; use restrained editorial thumbnails where useful. |
| Contact | The same split headline delays the practical task. | Place the form and message preparation explanation prominently, preserving its copy/paste privacy model. |

## Heuristic review

Indicative score 0–4, based on rendered desktop review and existing documented behavior rather than a new end-to-end accessibility audit.

| Heuristic | Score | Observation |
| --- | --- | --- |
| Visibility of system status | 3 | Form explains preparation and copied state; preserve those messages. |
| Match to real world | 3 | SEO scope is explained in plain terms; sample deliverables would make it more concrete. |
| User control and freedom | 3 | Copy and open are separate; preserve choice and fallback. |
| Consistency and standards | 3 | Controls are recognizable; visual page hierarchy is overly uniform. |
| Error prevention | 3 | Persistent labels and native validation help; preserve them. |
| Recognition rather than recall | 2 | Several sections use abstract language rather than visible working examples. |
| Flexibility and efficiency | 3 | Direct WhatsApp and structured review are both offered. |
| Aesthetic and minimalist design | 2 | Display type and repeated empty space suppress information rather than clarifying it. |
| Error recovery | 3 | Clipboard-denied fallback exists; retain and re-test it. |
| Help and documentation | 3 | Form explains the next step; keep that reassurance adjacent. |

The main visitor task is to decide whether this is relevant SEO help and start a review; direct consultant access and clean content hierarchy should support that path. Automated scans and this critique are not a substitute for keyboard, responsive, privacy and visual regression testing after implementation.

Questions skipped: the user's brief explicitly requests autonomous selection and implementation of the strongest direction.
