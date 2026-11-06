# Existing-site security hotfix

Reviewed 6 November 2026. Branch `security/nextjs-november-2026` starts from `origin/main` at `833d3820ede59d9f96df12551f12d43e1695a363`. This branch does not contain the Saudi redesign. No merge or deployment was performed.

## Change

Pin `next` and `eslint-config-next` to 16.4.5, regenerate the dependency lockfile and apply compatible transitive fixes with ordinary `npm audit fix --ignore-scripts`. No `--force`, blanket suppression, canary dependency or cross-major override is used. React and React DOM remain 19.2.4. The existing pages, assets, metadata, redirects, configuration and build pipeline are unchanged.

The official [November security release](https://nextjs.org/blog/november-2026-security-release) and [16.4.5 release notes](https://github.com/vercel/next.js/releases/tag/v16.4.5) establish the selected patched stable version. The old 16.3.3 framework was also affected by earlier [ImageResponse RCE](https://github.com/vercel/next.js/security/advisories/GHSA-vcvr-r3jv-pc5j) and [October image/cache vulnerabilities](https://nextjs.org/blog/nextjs-security-update-october-14-2026). Patched Next selects `sharp` 0.35.5.

## Audit and remaining exposure

`reports/security/audit-before.json`: 18 affected dependency entries: 1 critical, 6 high, 10 moderate, 1 low.

`reports/security/audit-after.json`: **0 critical, 0 high, 8 moderate, 0 low**. All original Critical/High entries are fixed. Compatible updates also resolve Babel, humanfs and baseline-browser-mapping findings. Remaining entries all propagate one [minimatch glob-amplification issue](https://github.com/advisories/GHSA-g3hv-75wg-m249) through the development-only TypeScript-ESLint dependency chain. Nested minimatch is 10.2.6; upstream's published patch is 11.0.1. Current TypeScript-ESLint constrains it to 10.x.

The site exposes no lint/glob endpoint and does not accept remote glob patterns; the affected tools process repository configuration during development. Do not run untrusted lint configuration in a privileged workflow. npm proposes a breaking forced downgrade of eslint-config-next to 15.5.29; this was deliberately not applied. Follow a compatible upstream patch or separately validate a targeted toolchain upgrade. This residual Moderate finding is reported without suppression.

No application ImageResponse, Cache Components/use-cache, Server Action or Edge-cookie code was found. The existing image optimizer is reachable through `next/image`; absence of a specific application path does not replace the framework patch. Any production release still requires owner review.

## Executed verification

- `npm run build`: PASS on Next.js 16.4.5; TypeScript, 162 static routes and unchanged next-sitemap postbuild complete successfully.
- `node node_modules/typescript/bin/tsc --noEmit`: PASS.
- Full ESLint: retains the existing baseline **5 errors and 7 warnings** in legacy location and money-page sources. No application source changed in this hotfix. Those unrelated defects are fixed on the separate redesign branch; they are disclosed here rather than hidden or mixed into a security-only patch.
- Local production browser regression: PASS for `/`, `/about`, `/contact`, `/riyadh/seo`, `/jeddah/seo` and `/dammam/seo` (HTTP 200, one H1 each), mobile navigation at 390px, and no JavaScript runtime exceptions. See `SECURITY-HOTFIX-BROWSER-RESULTS.json`.
- External browser requests were blocked for the hotfix smoke check; no contact message was opened or sent. The temporary local server was stopped afterward.
- The postbuild-generated public sitemap was restored byte-for-byte from main so this PR contains no unintended SEO change.

This is a draft review artifact. It has not patched the live website until the owner reviews, merges and releases it through the production process.
