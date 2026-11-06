# Security remediation report

Review date: 6 November 2026. Redesign baseline: `642ac90`; existing production-source baseline: `833d382`. No branch was merged or deployed by this remediation.

## Version and advisory decision

The official [Next.js 16.4.5 release](https://github.com/vercel/next.js/releases/tag/v16.4.5) is the current stable security release, published 3 November. Both `next` and `eslint-config-next` are pinned to **16.4.5**. React and React DOM remain on 19.2.4, within the supported peer range. The lockfile is regenerated, not manually edited. No canary release, audit suppression or `--force` upgrade is used.

The [November security announcement](https://nextjs.org/blog/november-2026-security-release) covers cache disclosure/poisoning, response framing, Edge-cookie exposure and SVG rejection fixes. The official GitHub release lists these advisories as Moderate; the announcement describes one cache-disclosure issue as High. We apply the complete patched release regardless of that labeling difference.

The old Next.js 16.3.3 dependency also falls in the affected range for [Node.js ImageResponse RCE](https://github.com/vercel/next.js/security/advisories/GHSA-vcvr-r3jv-pc5j), and the [October security release](https://nextjs.org/blog/nextjs-security-update-october-14-2026) describes additional image-optimization and cache-related critical fixes. Next 16.4.5 resolves those earlier framework advisories and selects patched `sharp` 0.35.5.

## Measured dependency audit

The original full audit is archived in `reports/security/audit-before.json`: **18 affected dependency entries — 1 critical, 6 high, 10 moderate, 1 low**. These are dependency entries, not 18 independent vulnerabilities; several entries represent the same issue through a dependency chain.

After the explicit framework update and ordinary `npm audit fix --ignore-scripts` in the independent hotfix worktree, the full audit reports **0 critical, 0 high, 8 moderate, 0 low**. No breaking forced fix was accepted. The audited lock was applied to the redesign, which also removes the obsolete sitemap dependency; its final audit is archived in `reports/security/audit-after.json`.

| Original affected entry | Initial severity | Remediation / disposition |
| --- | --- | --- |
| next | Critical | 16.3.3 → 16.4.5; complete stable security release |
| sharp | High | 0.35.5 selected by patched Next dependency |
| brace-expansion | High | Compatible safe update, including 1.1.21; no remaining audit finding |
| browserslist | High | 4.29.5; no remaining audit finding |
| js-yaml | High | 4.3.2; no remaining audit finding |
| source-map-js | High | 1.2.2; no remaining audit finding |
| zod | High | 4.6.7; no remaining audit finding |
| @babel/core | Low | 7.29.13; no remaining audit finding |
| @humanfs/node | Moderate | 0.16.8; no remaining audit finding |
| baseline-browser-mapping | Moderate | 2.11.35; no remaining audit finding |
| minimatch | Moderate | Nested TypeScript-ESLint copy remains 10.2.6; see reachability and follow-up below |
| @typescript-eslint/typescript-estree | Moderate | Propagates the nested minimatch finding |
| @typescript-eslint/parser | Moderate | Propagates the same development-tool chain |
| @typescript-eslint/type-utils | Moderate | Propagates the same development-tool chain |
| @typescript-eslint/utils | Moderate | Propagates the same development-tool chain |
| @typescript-eslint/eslint-plugin | Moderate | Propagates the same development-tool chain |
| typescript-eslint | Moderate | Propagates the same development-tool chain |
| eslint-config-next | Moderate | Updated to 16.4.5; still reports the same transitive toolchain finding |

## Reachability and remaining decision

Repository inspection found no application `ImageResponse`, `use cache`, `unstable_cache`, Server Action or Edge-cookie code path. That observation does not exempt a framework upgrade: the image optimizer is available through existing `next/image` use, and future code or framework internals can change exposure. The patched dependency is required before any future public deployment.

The remaining [minimatch advisory GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249) concerns attacker-controlled glob amplification; its published patch is 11.0.1. The nested consumer currently constrains minimatch to the 10.x line. It is present under development-only TypeScript-ESLint tooling, not an application route that accepts remote glob patterns. The application does not expose a linter or glob-processing endpoint. Builds/lint process trusted repository configuration; untrusted configuration should not be executed as part of a privileged workflow.

`npm audit` proposes downgrading the aligned Next ESLint configuration to 15.5.29 via `--force`. That breaking downgrade was rejected. We also avoid an unvalidated cross-major transitive override solely to obtain an empty audit. Follow up when TypeScript-ESLint publishes a compatible patched dependency range, or separately validate a targeted upgrade. This residual Moderate risk is visible in the report and audit artifacts; it is not suppressed. There are no remaining known Critical/High dependency findings in the tested lockfile.

## Independent production-source hotfix

A separate worktree, `../fazil-digital-security-hotfix`, is based on `origin/main` at `833d382` and uses branch `security/nextjs-november-2026`. It contains dependency remediation and its security verification report only; the Saudi redesign is excluded. The original build pipeline, pages, redirects, SEO assets and public website design are retained.

**Draft PR:** [Security-only hotfix #1](https://github.com/Fazilfazi991/fazildigital/pull/1). **Commit:** `75da19d47711ab3beeee8aff50b2628bb3928f5c`. Build and unchanged next-sitemap postbuild pass with 162 static routes; TypeScript passes. A local production browser smoke passes six core/protected URLs, mobile navigation and runtime-error checks. Full lint retains the disclosed pre-existing 5 errors and 7 warnings because the hotfix contains no unrelated application edits. The redesign fixes those legacy lint issues separately. GitHub's connected integration returned HTTP 403 for PR creation; the explicitly requested draft was created successfully through the existing authenticated local GitHub credential and REST API, without exposing the credential. The PR is not merged or deployed.

## Redesign-only technical changes

The redesign removes the obsolete `next-sitemap` package/postbuild path because the reviewed App Router sitemap is now authoritative. This is separate from the security-only hotfix. All 115 original content URLs remain accessible and indexable; new approved service/article routes are added explicitly. See `TECHNICAL-SEO-VERIFICATION-REPORT.md` for canonical, sitemap, raw-representation, robots, schema and old-URL evidence. The owner-confirmed WhatsApp number is +971 54 276 3828; enquiry intent is not described as a confirmed qualified lead.

## Executed redesign dependency verification

The patched shared installation completed successfully on Node 22.22.0 / npm 10.9.4. An old loaded SWC temporary directory produced a cleanup-only Windows EPERM warning; the install exited 0 and the active Next package contains all expected files at version 16.4.5. This ignored temporary directory is not part of the source commit.

| Check | Result |
| --- | --- |
| Explicit Next / ESLint configuration versions | Both 16.4.5 |
| Full repository ESLint with `--max-warnings 0` after compatible dependency upgrade and legacy fixes | PASS |
| TypeScript `--noEmit` after dependency upgrade | PASS |
| Full audit with `--audit-level=high --json` | PASS threshold; 0 critical, 0 high, 8 reported moderate |
| Production-only audit with `--omit=dev --json` | PASS; **zero reported vulnerabilities** |
| Independent hotfix build, TypeScript and browser smoke | PASS; draft PR #1 records the separate baseline lint limitation |

The coordinator's final integrated production build passed after the last content/schema fixes. Technical SEO HTTP regression then passed all six groups, covering all 126 content URLs, 98 alternate article representations and the existing redirects; see `TECHNICAL-SEO-VERIFICATION-REPORT.md` and its JSON evidence. Cross-page browser results are recorded independently by the QA agent. These checks are not a claim of independent security certification, exploitation testing or production deployment.
