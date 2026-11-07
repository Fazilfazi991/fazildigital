# Autonomous refinement cycle — 7 November 2026

Started from `codex/visual-refresh-v2` at `4d68af63c5ed6bff3705ef8d8a94c6d02064e418`. Production was not changed.

## Improvements

- Blog now presents one visual featured guide and an accessible, compact reading list instead of repeated geometric guide motifs. Its shorter hero leads directly to the guides; all existing article links and metadata remain.
- Contact form is first in the DOM and visually first on desktop and mobile, so reading and keyboard order agree. WhatsApp and analytics semantics remain unchanged.
- Methodology-number contrast and small scope captions were improved; heading tracking and commercial text measure were refined.
- Jeddah and Dammam now have distinct original conceptual artwork with smaller mobile variants. These are not photographs of actual locations, offices or client work; see `public/images/visual-refresh/ASSET-MANIFEST.md` and `reports/creative-cycle-review.md`.

The actual Impeccable skill was used. Its critique was a disclosed single-context fallback because the available agent slots prevented its independent critique subagents. See `reports/impeccable-cycle.md`. Design and QA agents reviewed the final desktop and mobile screenshots. The final Blog hero was revised after the first review and checked again.

## Verification

- Production build and TypeScript: PASS, 181 static pages generated. Full repository ESLint: PASS.
- Technical SEO: six groups pass, including 126 content URLs and 98 raw/Markdown indexing representations, robots, sitemap and legacy redirects: `reports/cycle-technical-seo.json`.
- Browser QA: 12 routes at 320/390/768/1024/1440, canonical/H1/overflow and keyboard menu checks pass; 14 automated axe WCAG A/AA scans on seven routes pass. Contact mobile visual and DOM order agree. `reports/qa-cycle-browser.json`.
- Final Blog-specific recheck: five widths, guide navigation, image loading and mobile/desktop axe pass: `reports/qa-cycle-blog-final.json`. The other page tests were run on the preceding build, which differs only in the final Blog hero markup/styles.
- Enquiry privacy: both forms pass synthetic testing, clean WhatsApp destination, eight intercepted simulated analytics requests, clipboard success and denied fallback. No real message or GA event was sent; `reports/qa-refresh-privacy.json`.
- Dependencies and lockfile were unchanged; the immediately preceding audit found 0 production vulnerabilities and 8 moderate development-only advisories. See `reports/visual-refresh-npm-audit*.json`.
- Original city artwork mobile variants are 14 KB and 20 KB; local asset loading was tested. These are not field Core Web Vitals metrics.

Before screenshots are in `previews/qa-refresh/`; after screenshots are in `reports/qa-cycle-screens/`. The local build used `G-TESTONLY` and must never be promoted. The protected Preview is built separately. Production/source alignment remains subject to `PRODUCTION-SOURCE-ALIGNMENT-PLAN.md`; do not merge or deploy without separate approval.
