# Fazil Digital visual reset contract

## Grounding

Fazil Digital connects search discovery to clear business enquiries through direct SEO consulting. Its audience is a Saudi business owner or marketing lead evaluating whether a consultant can explain the work and the next step. The real scene is a quick, practical review on a laptop or phone; legibility and trust matter more than a theatrical brand story. The product's cultural home is contemporary Saudi business and city wayfinding. No Saudi office, client result, ranking, quote, or city map is implied.

The new identity replaces the rejected ivory/forest editorial treatment. The supplied cool-white, ink, blue, lime, and cool-neutral palette is binding. The chosen form is **Search Wayfinding**: a restrained route system that makes the path from a search to a useful page and onward to an enquiry understandable. The route is a functional diagram and navigation aid, not decorative grid art.

## Grounded system candidates (ranked by resonance)

1. Urban wayfinding signage: service/city routes have distinct destinations and a clear onward path.
2. A public service directory: visitors scan a meaningful hierarchy and choose the right entry point.
3. A consultant's field guide with route annotations: findings lead to a practical next action, matching research, implementation, and review.
4. A printed editorial brief: claims, evidence, audience, and action stay together.
5. A booking confirmation: the next step is explicit, with expectations and contact routes stated plainly.
6. A technical specification sheet: scope and acceptance checks are easy to inspect without implying measured client results.
7. A marketplace frontage: clear service descriptions support a quick decision without inventing endorsements.

The assigned direction is the third grounded candidate, adapted to the user's exact palette and content requirements. The category rut to avoid is oversized editorial display type over repeated feature cards; its opposite is a generic dark SaaS dashboard with invented metrics. Neither becomes the direction.

## Direction

- **World:** Search Wayfinding. Use cool-white paper surfaces, ink typography, precise blue route lines and destinations, and rare lime active markers. The line and marker encode actual section sequence or a selected step. No decorative map grids, fake map coordinates, fabricated rankings, or pseudo data.
- **First viewport:** A modern sans-serif split hero with Mohammad's approved portrait, Saudi SEO offer, direct consultant introduction, two clear actions, and a brief Dubai-based/Saudi-market location line. Headline 34–46px on mobile and 56–72px on desktop. A small route graphic can show “search → useful page → enquiry” and is explicitly illustrative.
- **Visitor path:** Introduction → verified professional context → business problems and responses → clearly-labelled example deliverables → SEO expertise → route from search to enquiry → working process → business fit → FAQs → privacy-safe enquiry. Keep the ten requested purposes; absorb insights links into relevant surfaces rather than adding a filler section.
- **Signature interaction:** A stepwise, keyboard-operable process route whose active stage and description are visible; it works without animation or JavaScript. The user can move between stages without scroll-jacking or losing content. Motion is a single restrained route-draw/stagger moment, with reduced motion respected.
- **Cross-surface reach:** Homepage, About, Calicut, shared header/footer, and chat use one token set. About's timeline uses the same route/marker language with first-person narrative. Calicut names Calicut and Kozhikode, states remote service and no local-office claim, and remains `noindex` in Preview. Chat styling changes only; its server security, rate limits, provider opt-in, privacy, and clean WhatsApp handoff remain intact.
- **Honest risk:** No client evidence or numerical results are available, so deliverable examples remain explicitly illustrative. Fusion Ventures title stays at the publicly verified “Co-Founder, Technical & Business Development.” ZORX leadership may be stated as owner-confirmed and undated under the latest direct user instruction; it is not described as independently verified. Other unsupported employers, dates, degrees, and credential names stay omitted. The AI endpoint remains unavailable until configured with the required server credentials and explicit opt-in.

## Challenger evaluation

Compared with Search Wayfinding on audience identification and product clarity:

- Green-phosphor terminal — declined; terminal jargon and dark mono-only grammar obscure a human consultant and contradict the pinned palette.
- Pixel arcade screen — declined; game metaphors do not identify the service or strengthen SEO decisions.
- Neo-Tokyo neon night — declined; it misplaces the Saudi business context and conflicts with the provided colors.
- Art Deco cinema lobby — declined; entertainment framing and brass/crimson materials misidentify the service.
- Paper automata — competitive only on product clarity: a reversible, stepwise process has a useful interaction lesson. Keep that sequencing discipline, not its paper/crimson visual grammar or illustrated figures.
- Multiplane cel animation — declined; parallax planes add visual fiction without clarifying the service and risk mobile readability/performance.

The user's palette and task constraints take precedence over any challenger palette. Build path: code-led, per `.impeccable/config.json`; no concept mockup is the visual source of truth.

## Shared tokens

| Role | Value | Use |
| --- | --- | --- |
| Canvas | `#FAFAF8` | Main page ground |
| Surface | `#FFFFFF` | Forms, nav, readable panels |
| Ink | `#151B26` | Primary text and dark feature surfaces |
| Brand blue | `#2463EB` | Primary actions, route and active links |
| Blue hover | `#1D4ED8` | Hover/pressed action state |
| Accent lime | `#C6F36B` | Sparse route marker and small active state, always with ink text |
| Cool neutral | `#E7EBF1` | Section surfaces and quiet diagrams |
| Border | `#D5DBE4` | Dividers and controls |
| Muted ink | `#465366` | Secondary text; maintain WCAG AA contrast |
| Focus | `#142B55` | Visible keyboard outline |

Typography: Plus Jakarta Sans for headings and DM Sans for body; self-host through `next/font` so page views do not call third-party font services. Body 16–18px, 1.55–1.7 line height, comfortable 65–75ch measure. Use a consistent scale and avoid display tracking below `-0.04em`.

Layout: 4px base / 8px rhythm, 1180px reading grid, 12-column desktop composition, 24px mobile gutters. Controls and small cards use 12–16px radii; large content sections remain open rather than nested cards. Borders or shadows, not both. Buttons use sentence case and name the action.

Motion: hover 150–220ms; one route/process entrance 350–550ms; no scroll-jacking, parallax, hidden initial content, or repetitive reveal on every block. `prefers-reduced-motion` removes transforms and transitions while preserving the full static content.

## Scope boundaries

- Preserve the canonical homepage and About URLs, current redirects, and all 126 sitemap URLs. Do not add Calicut to the sitemap while its route remains noindex.
- Preserve analytics semantics and contact form privacy behavior. Never send raw chatbot messages, submitted URLs, or personal details to analytics.
- Do not enable paid AI traffic, publish to Production, or change DNS/Production settings.
- Retain the authentic owner-provided portrait and its provenance record.
