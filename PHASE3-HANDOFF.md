# Phase 3 release candidate

Prepared 6 November 2026. Source branch `revamp/saudi-seo-organic`, based on `4b81b631de2430b533970ce33096c1364a349627`. Four agents collaborated with separate ownership across UI, URL migration, content and release engineering.

## Ready for review

- The homepage's three insight cards link to real Saudi SEO guides; the other five guides are directly accessible in the same section. The design direction is retained. Service, city, article and enquiry journeys have been reviewed at desktop and mobile widths.
- The historical blog and project-note archives remain available as secondary disclosures. Legacy commercial resources retain their URLs and have a notice directing readers to the current Saudi SEO offering.
- [URL decisions](PHASE3-LEGACY-URL-DECISIONS.md) cover 126 URLs: 33 KEEP and 93 pending evidence, each with a nonbinding candidate action and evidence requirements. No content URL was deleted, redirected or noindexed by Phase 3.
- [Content credibility audit](PHASE3-CONTENT-CREDIBILITY.md) records the 41 historical articles reviewed, the 40 with corrections, and the eight reviewed Saudi guides. Original slugs and publication dates were preserved. Remaining unsourced factual claims, client evidence and rights questions are documented as pending.
- Build, TypeScript, full lint, URL-register validation, audit and [browser regression](PHASE3-BROWSER-VERIFICATION.md) passed. Browser QA reports 49 passing checks across 105 page/viewport cases and all 15 homepage-to-service, city and guide journeys. Its synthetic analytics requests and all other nonlocal browser requests were blocked; no WhatsApp messages were sent. [Screenshot inventory](PHASE3-SCREENSHOT-INVENTORY.md) provides Phase 2/Phase 3 comparison paths.
- The public deployment remains the old `main` release; the separate [security hotfix draft PR #1](https://github.com/Fazilfazi991/fazildigital/pull/1) remains unmerged. [Security findings](PHASE3-SECURITY-REPORT.md), [hotfix release checklist](SECURITY-HOTFIX-RELEASE-CHECKLIST.md), and [redesign release and rollback plan](PRODUCTION-RELEASE-ROLLBACK.md) are ready for review.

## Ready for production

**Not yet.** The redesign is a review candidate, not an approved release. The current production version still has the vulnerable framework version. The security hotfix has not been approved or released, and a verified patched production rollback anchor has not been established. The local build uses `G-TESTONLY` only for blocked synthetic QA; it must not be promoted or reused as a production artifact. The hosted preview is built by Vercel independently from the pushed source.

## Blocked pending evidence or approval

- Owner approval and release of the security hotfix; then reconcile updated `main` into this branch and repeat the regression suite before proposing a redesign merge.
- Owner review of the final visual/content direction and explicit authorization for any eventual production release.
- Confirm the real Production GA4 stream and whether enhanced outbound measurement might capture WhatsApp enquiry text in link URLs. Application custom events omit user-entered values, but actual GA4 stream configuration has not been verified.
- Secure current Search Console and backlink data for individual legacy URL decisions. Candidate retire, noindex and consolidation classifications do not authorize implementation.
- Confirm Arabic editorial capacity, case-study evidence and permission to publish. Eight moderate advisories remain in development-only lint tooling; production dependency audit reports zero vulnerabilities.

The exact final commit and protected preview deployment are recorded in the chat handoff after push and authenticated verification. Local preview: `http://127.0.0.1:3005`, using the synthetic test-only analytics build.
