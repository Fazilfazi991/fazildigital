# Phase 1 verification report

Browser run: 2026-11-06T16:04:38.028Z. Local target: http://127.0.0.1:3001. Browser: installed Chromium via Playwright, headless. No external enquiry was opened or sent.

## Browser checks

15 passed; 0 failed.

| Check | Result |
| --- | --- |
| Saudi metadata, one H1 and self canonical | PASS |
| Structured data matches visible consultant facts without invented offices | PASS |
| Semantic landmarks, heading order and form labels | PASS |
| Desktop navigation and primary actions have valid destinations | PASS |
| FAQ works by keyboard with native disclosure state | PASS |
| Three original Saudi insight notes can be read without leaving the homepage | PASS |
| Invalid form does not create an enquiry draft | PASS |
| Valid form prepares a truthful, correctly encoded WhatsApp review | PASS |
| Layouts fit desktop, tablet and narrow mobile without horizontal overflow | PASS |
| Mobile menu opens, closes on navigation and restores focus with Escape | PASS |
| Reduced motion disables hero animation and process transition | PASS |
| Desktop and mobile screenshots captured with loaded fonts | PASS |
| Homepage content and navigation remain visible without JavaScript | PASS |
| Linked existing articles and core legacy landing pages remain reachable | PASS |
| No homepage runtime exceptions or failed application resources | PASS |

## Responsive evidence

```json
[
  {
    "width": 1440,
    "viewport": 1440,
    "document": 1440,
    "body": 1440,
    "main": 1440
  },
  {
    "width": 1024,
    "viewport": 1024,
    "document": 1024,
    "body": 1024,
    "main": 1024
  },
  {
    "width": 768,
    "viewport": 768,
    "document": 768,
    "body": 768,
    "main": 768
  },
  {
    "width": 390,
    "viewport": 390,
    "document": 390,
    "body": 390,
    "main": 390
  },
  {
    "width": 320,
    "viewport": 320,
    "document": 320,
    "body": 320,
    "main": 320
  }
]
```

## Existing URL HTTP samples

- 200: /about
- 200: /services/seo
- 200: /riyadh/seo
- 200: /jeddah/seo
- 200: /dammam/seo
- 200: /blog
- 200: /about/
- 200: /contact/
- 200: /privacy-policy/
- 200: /blog/snapchat-ads-cpa-benchmarks-saudi-arabia-2026/

## Screenshots

- [Desktop viewport](previews/home-desktop.png) — 1440 × 1000.
- [Desktop full page](previews/home-desktop-full.png).
- [Mobile viewport](previews/home-mobile.png) — 390 × 844.
- [Mobile full page](previews/home-mobile-full.png).

Screenshots capture loaded local fonts with animations disabled for stable output. The coordinator must visually inspect the captures before declaring design verification complete.

## Build, lint and TypeScript

Run and final results are owned by the coordinator; append the actual commands and outcomes before handoff. This browser run does not claim those commands passed.

## Scope and limitations

This is a local prototype check. No production deployment, Search Console mutation, GA4 account change, redirect implementation or deletion was performed. Functional checks cover meaningful UI behavior, not a full WCAG certification or field Core Web Vitals assessment. No external WhatsApp message was sent; prepare/review events do not prove a lead was delivered or qualified. Existing historical Search Console figures remain supplied snapshots, not live data.

Re-run with `node scripts/verify-homepage.mjs` against a local server on port 3000. Set `BASE_URL` for another localhost port, and `PLAYWRIGHT_MODULE` / `BROWSER_PATH` when the bundled runtime paths differ.

## Initial browser resource observations

These are one local browser navigation's resource counts and byte observations, not a Lighthouse score or field Core Web Vitals result.

```json
{
  "resourceCount": 18,
  "localResourceCount": 18,
  "localTransferredBytes": 269870,
  "localEncodedBytes": 264470,
  "byInitiator": {
    "link": 5,
    "script": 8,
    "other": 1,
    "fetch": 4
  },
  "localFonts": [
    {
      "path": "/_next/static/media/instrument_serif_latin-s.p.3_vslfxq_--4i.woff2",
      "encodedBytes": 21032
    },
    {
      "path": "/_next/static/media/manrope_latin-s.p.3mbsihvb8fg7z.woff2",
      "encodedBytes": 24532
    }
  ],
  "externalOrigins": []
}
```

## Coordinator integration results

- `node node_modules/next/dist/bin/next build`: PASS, Next.js 16.3.3 production compilation, TypeScript and 162 static outputs (including alternate/raw/metadata routes).
- `node C:\Users\User\.codex\tmp\fazil-npm\package\bin\npm-cli.js run postbuild`: PASS, next-sitemap completed. Its generated public/sitemap.xml change was restored to preserve the original SEO asset; no sitemap configuration changed.
- `node node_modules/typescript/bin/tsc --noEmit`: PASS.
- ESLint over src/app/page.tsx, src/app/template.tsx, src/components/SiteChrome.tsx and src/components/home/HomeInteractions.tsx: PASS, no warnings. Root layout was separately included in the full lint run with no finding.
- Full repository ESLint: FAIL with 5 pre-existing errors and 7 warnings in unchanged legacy files. Errors: locations/page.tsx (unescaped apostrophe), money-pages/BlockRenderer.tsx (2 explicit-any types), data/moneyPageLayouts.ts (2 explicit-any types). Warnings concern unused imports/variables in services/page.tsx, money-pages/HeroVariants.tsx, money-pages/ValuePropVariants.tsx and data/moneyPageLayouts.ts. These files are byte-preserved from the baseline; no new lint finding was introduced.
- `node scripts/verify-preservation.mjs`: PASS after postbuild restoration. Local main remains at the cloned baseline; 91 original files outside the authorized homepage/layout/template changes are preserved; the 227 classifications regenerate exactly; three Saudi city SEO destinations remain.
- `node scripts/seo-inventory.mjs --check`: PASS as part of the preservation guard.
- `git diff --check`: PASS.
- Impeccable mechanical detector over the changed homepage/CSS/interactions: empty findings.
- Actual desktop and mobile first-viewport and full-page captures inspected by the lead. Final production captures have no development toolbar, clipped text or visible spacing defects. No further UI change followed the successful final browser capture.

## Existing dependency advisories

`npm ci` and a separate `npm audit --json` report 18 advisories: 1 low, 10 moderate, 6 high, 1 critical. The direct Next.js dependency (16.3.3) is classified critical by the current registry audit; the reported patched version is 16.4.5. eslint-config-next also appears in the direct advisory graph. These dependencies and package-lock.json are unchanged from the cloned baseline. Upgrade/remediation and a fresh full regression run are a prerequisite for a public release; this phase supplies a localhost-only review build and has not deployed it. Counts are an observed audit snapshot, not a complete security assessment. The npm audit raw JSON is kept in the local Codex temp directory, not committed as source.

## Documentation read

AGENTS.md and the installed Next.js bundled metadata, server/client, layout and font guides under node_modules/next/dist/docs were inspected, alongside official online metadata/font guidance while the initial dependency installation was still in progress. Next dev automatically refreshed the AGENTS.md instruction block; that generated change was restored before the final preservation check. No production configuration was changed.
