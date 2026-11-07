# Fazil Digital Phase 1 handoff

6 November 2026. Development branch: `revamp/saudi-seo-organic`. Baseline `main`: `833d3820ede59d9f96df12551f12d43e1695a363`. No merge or production deployment is part of this phase.

## Team actually used

Four concurrent agents were supported: one lead and three spawned subagents. The ten requested specialties were combined and reassigned in waves; ten separate agents were not launched.

| Actual agent | Roles and owned work |
| --- | --- |
| Lead coordinator | Architecture coordination, design direction/system, homepage implementation, integration, visual inspection, build/type/lint checks, branch delivery |
| technical_audit | Repository/code audit; then QA, browser test script, screenshots and verification report |
| seo_migration | SEO audit, full URL inventory/migration plan; then source preservation and SEO regression guard |
| content_strategy | Saudi keyword research, content strategy, information architecture; then UX/accessibility source review and copy verification |

Reports and UI used explicit file ownership in the shared checkout. No two agents edited a file simultaneously. Research/audits ran concurrently with homepage implementation; QA prepared tests before the final build and checked the integrated production build. Source preservation and content reviews ran independently.

## Deliverables

- [Saudi SEO audit](SAUDI-SEO-AUDIT.md) and [technical audit](WEBSITE-TECHNICAL-AUDIT.md).
- [Migration plan](SEO-MIGRATION-PLAN.md) and [227-row URL inventory](SEO-URL-INVENTORY.csv). There are 115 HTML routes. No retirement or redirect has been implemented.
- [Saudi keyword strategy](SAUDI-KEYWORD-STRATEGY.md) and [future architecture](SAUDI-SITE-ARCHITECTURE.md), with evidence separated from hypotheses.
- [Design system](DESIGN-SYSTEM.md), [design authority](DESIGN.md), [product constraints](PRODUCT.md) and [UX review](HOMEPAGE-UX-REVIEW.md).
- A new homepage in `src/app/page.tsx` and `src/app/home.css`, interaction components in `src/components/home/HomeInteractions.tsx`, local licensed fonts, and `SiteChrome` to preserve the existing internal-page UI.
- [Verification report](REVAMP-VERIFICATION-REPORT.md), executable browser/preservation/inventory checks and [desktop](previews/home-desktop.png)/[mobile](previews/home-mobile.png) captures, plus full-page captures.

The homepage follows all eleven specified sections. Its selected-work state is deliberately empty because approved Saudi SEO evidence is missing. Three original short SEO articles are readable inline through native disclosures; they are not invented blog publications or new internal routes. The old blog archive remains available. Planned specialist service pages use homepage sections until a later internal-page release. The form prepares a WhatsApp draft; the visitor reviews and sends it. No backend success is fabricated and no messages were sent in testing.

## Local review

The optimized production preview is running at [http://127.0.0.1:3001](http://127.0.0.1:3001). It is bound to localhost. No external deployment or deployment-setting change was made.

With Node.js and npm available, restart it from the repository:

```powershell
npm ci
npm run build
npm run start -- --hostname 127.0.0.1 --port 3001
```

The existing postbuild sitemap generator rewrites `public/sitemap.xml`. That is a pre-existing behavior; restore that generated file when keeping this phase's preserved source assets: `git restore -- public/sitemap.xml`. One sitemap owner is a Phase 2 decision. For day-to-day editing use `npm run dev`. In this workstation npm was absent from PATH, so the npm 10.9.4 CLI was downloaded to the local Codex temp directory; project dependencies/lockfile were not changed. The already installed local preview can also restart with `node node_modules/next/dist/bin/next start --hostname 127.0.0.1 --port 3001`.

## Verification and remaining decisions

The production build and postbuild, TypeScript, changed-code ESLint, browser checks and preservation guard passed. The final browser pass has 15 passing checks across five widths, with ten legacy URLs returning 200. The lead inspected actual desktop/mobile viewport and full-page screenshots. Full-repository ESLint retains five pre-existing errors and seven warnings in unchanged legacy files; details are in the verification report.

Before a public release, resolve the dependency audit's existing 18 advisories, including the installed Next.js critical finding, and review the documented legacy claims/schema, sitemap ownership, raw-route indexing headers and canonical normalization. No dependency upgrade or infrastructure change was silently included in this homepage phase. No authenticated live GSC or GA4 data was available.

The review decisions are the homepage direction, scoped Phase 2 technical fixes, fresh query/backlink evidence for any consolidation, Arabic editorial support, and case-study publication evidence. All internal-page rebuilding, redirects, deletions and production deployment remain for a separately authorized phase. The final Git commit and push result are recorded in the chat handoff.
