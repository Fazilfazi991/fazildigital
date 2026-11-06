# Security hotfix release and redesign reconciliation

7 November 2026 (Asia/Calcutta). The owner explicitly approved the security hotfix and requested reconciliation and regression checks. The redesign remains a development-branch candidate; no redesign production deployment or merge was performed.

## Security release

- [PR #1](https://github.com/Fazilfazi991/fazildigital/pull/1) was marked ready and merged with the reviewed head `75da19d47711ab3beeee8aff50b2628bb3928f5c`. GitHub merge commit: `afbf5660486c26af1468f244376a5d35492e58c5` on `main`.
- Vercel project `fazil-digital`, production deployment `dpl_BNHQp69PJvsDhxU6SvWHTmfLJSvW`: READY, source `afbf566`, target production; `www.fazildigital.com` assigned to this deployment. Hosted build logs show Next.js 16.4.5 and a successful build.
- Read-only live checks returned HTTP 200 for homepage, About, Contact, Riyadh, Jeddah, Dammam, robots.txt and sitemap.xml. The production homepage references the GA tag and does not contain the synthetic `G-TESTONLY` ID. The root canonical is `https://www.fazildigital.com` (the equivalent root URL without an explicit slash). No real enquiry or message was sent.
- The newly patched deployment is the candidate rollback anchor for a future approved redesign release. Recheck its availability and approval before relying on it. The previous production deployment uses vulnerable Next.js 16.3.3 and is not a security-safe default rollback.

## Reconciliation

Development merge commit `be50f1deef5aee405bf20983592e947f8918d27c` merges the patched main commit into the redesign source `97e1c157d05b62064db38b78ba160dc6cb429a6e`. Both branches already pinned Next.js and eslint-config-next 16.4.5. Dependency and lockfile conflicts were resolved using the redesign's dependency graph and single App Router sitemap; both hotfix and redesign audit records were retained. The redesign still includes its SEO, UI and privacy improvements and remains separate from production.

## Regression results on reconciled source

- Production build, TypeScript, and full repository ESLint with zero warnings: PASS. The local test-only build used `G-TESTONLY`; it must never be promoted as a production artifact.
- npm audit: zero production dependency vulnerabilities; eight moderate development-only advisories, zero high or critical.
- [Technical SEO regression](reports/reconciled-technical-seo.json): six groups passed; 126 content URLs return 200 with self-canonicals, 98 alternate article representations retain noindex/canonical headers, and existing redirects remain.
- [Browser regression](RECONCILED-BROWSER-VERIFICATION.md): 49 checks passed across 105 responsive cases, including service/city/guide navigation, mobile menu, reduced motion and enquiry journeys. All 115 original HTML URLs remained reachable. [Screenshots](RECONCILED-SCREENSHOT-INVENTORY.md) capture the test build.
- [Privacy regression](reports/reconciled-privacy-test.json): both enquiry forms, copy and manual fallback passed; eight simulated intercepted GA requests contained no test name, personal website or enquiry text. No real WhatsApp message or GA test event was sent.

The WhatsApp privacy improvement is part of the **redesign branch**, not the security-only release currently in production. The real production GA4 Enhanced Measurement settings and any third-party scripts remain unverified; the synthetic test does not establish their behavior. Review these before separately approving any redesign production deployment.

## Remaining approval gate

The security release is complete and `main` is reconciled. Review the current protected redesign preview, confirm the actual production GA4 stream and measurement rules, verify the patched rollback anchor, and explicitly approve a separate redesign release before merging or deploying it. URL retirement and Arabic/client-evidence decisions remain governed by their existing evidence and approval gates. Exact final branch and preview identifiers are provided in the chat handoff.
