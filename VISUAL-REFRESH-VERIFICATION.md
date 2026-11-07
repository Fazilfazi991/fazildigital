# Visual refresh verification

Branch `codex/visual-refresh-v2` starts from deployed `e8e9329eaeca22bc8612c7d2fb6645449af5ec43`. Production remains on the existing deployment. See `PRODUCTION-SOURCE-ALIGNMENT-PLAN.md` before any source reconciliation.

## Direction and deliverables

The selected editorial direction combines the premium editorial hero (B) with the clearly labeled review-deliverable concept (C). Static review boards are in `design/hero-concepts/`; they are not public routes. `IMPECCABLE-VISUAL-CRITIQUE.md` records the visual critique and the limitation that the skill's independent critique subagents could not be spawned under the available agent limit. `DESIGN.md`, `VISUAL-REFRESH-DIRECTION.md`, and `public/images/visual-refresh/ASSET-MANIFEST.md` document the implementation, original conceptual artworks and provenance. Artwork does not represent actual Saudi offices, client projects or performance evidence.

The homepage uses a smaller sans-serif headline, original material artwork and a useful example of review scope. The seven service/city commercial pages retain unique content and add deliverable summaries; About, Blog and Contact share the typography and spacing refresh. The mobile contact form appears sooner. Canonical URLs, route structure and the privacy-safe form/event implementation are retained. Social artwork is provided for the refreshed page metadata.

## Checks

- Next.js production build: PASS, 181 static pages generated; integrated TypeScript stage passed.
- Full ESLint: PASS (`eslint .`, exit 0).
- `npm audit`: 0 production vulnerabilities; full dependency tree 8 moderate development-only advisories, 0 high/critical. Evidence: `reports/visual-refresh-npm-audit*.json`.
- Technical SEO: six groups PASS; all 126 content URLs return 200 with self-canonicals, 98 raw/Markdown representations retain noindex/canonical headers, redirects and robots/sitemap pass. Evidence: `reports/visual-refresh-technical-seo.json`.
- Independent production-build browser matrix: 11 priority routes × five widths (320, 390, 768, 1024, 1440), no overflow or H1/canonical failures, keyboard mobile menu and reduced-motion context passed. Evidence: `reports/qa-refresh-browser.json`; screenshots: `previews/qa-refresh/`.
- Synthetic privacy: both forms, clean WhatsApp link, clipboard success and denied fallback, and no personal data in eight intercepted simulated analytics requests. No actual WhatsApp message or real GA event sent. Evidence: `reports/qa-refresh-privacy.json`.
- Asset loading: hero and all three editorial images loaded during a local mobile test; a single local navigation timing is recorded in `reports/visual-refresh-asset-performance.json`. This is not a field Core Web Vitals assessment.
- Desktop and mobile homepage, Riyadh and Contact screenshots were visually inspected. Before screenshots are in `previews/reconciled/verified-2026-11-06T19-56-22-133Z/`; after screenshots are in `previews/qa-refresh/` and `previews/visual-refresh/`.

The test build used `G-TESTONLY` for intercepted local checks and must not be promoted. The protected Preview is an independently built non-production artifact. Release, source reconciliation and production deployment require separate owner approval.
