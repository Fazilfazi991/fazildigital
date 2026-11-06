# Security-only hotfix release checklist

Status: **READY FOR REVIEW — BLOCKED PENDING OWNER APPROVAL FOR RELEASE**. This is an operator checklist, not authorization to merge or deploy. Nothing in Phase 3 merges PR #1 or changes production.

## Exact reviewed targets

| Item | Read-only verified value |
| --- | --- |
| Repository | `Fazilfazi991/fazildigital` |
| Draft PR | [#1 — security dependencies](https://github.com/Fazilfazi991/fazildigital/pull/1) |
| PR state | Open, draft, unmerged |
| Hotfix branch / head | `security/nextjs-november-2026` / `75da19d47711ab3beeee8aff50b2628bb3928f5c` |
| Base main | `833d3820ede59d9f96df12551f12d43e1695a363` |
| Vercel team | `team_FKtnAnds9Xak13ypGNvXO346` (`faziils-projects`) |
| Vercel project | `fazil-digital` / `prj_CmLqVHcl9jaE585rBNpDoWelS8xy` |
| Current production deployment | `dpl_9WtYzrpB5LXDDHGu4VPKhxHkmPUa`, source `833d382`, target Production, READY |
| Production hostname | `https://www.fazildigital.com/` |
| Existing hotfix preview | `dpl_5gATxssfWvkDnx6dRZoSHzYFT2AB`, source `75da19d`, Preview, READY |
| Hotfix preview URL | [Protected security preview](https://fazil-digital-odekqbpix-faziils-projects.vercel.app) |

These values are a dated inspection, not a promise they remain unchanged. Re-read the PR and deployment before releasing. The current Production source still pins Next.js 16.3.3; the prepared patch has not fixed the live site until it is separately approved and released.

## Owner review gates

- [ ] Review the exact PR head and confirm it still targets main. Recheck it has not acquired redesign commits.
- [ ] Confirm the diff contains only `package.json`, `package-lock.json`, the hotfix report, browser evidence and two dependency-audit artifacts. No application source, redirects, schema, public assets or design change belongs in this PR.
- [ ] Review Next.js / eslint-config-next 16.4.5 and the compatible transitive lockfile updates. Do not replace them with a forced downgrade, canary or vulnerability suppression.
- [ ] Accept or separately resolve the disclosed eight Moderate development-only TypeScript-ESLint/minimatch findings. Production-only audit is zero; full audit has zero Critical/High findings. This is one root advisory propagated through eight entries, not eight unrelated runtime defects.
- [ ] Review the hotfix's existing lint baseline: five errors and seven warnings. The hotfix deliberately preserves application sources; unrelated lint corrections live on the redesign branch. Record the owner's decision about this exception before release.
- [ ] Re-run `npm ci`, production build, TypeScript, full lint and audits against the exact approved hotfix head and current registry state. Retain actual outcomes rather than overwriting the disclosed baseline.
- [ ] Inspect the protected hotfix preview with the owner's existing Vercel access. Historical local checks passed the homepage, About, Contact and all three Saudi SEO routes, mobile menu and runtime exceptions. A READY deployment alone is not a browser acceptance test.
- [ ] Record who approves the security release and which commit is approved. Approval of the redesign is a separate decision.

## Environment and release preparation

- [ ] Confirm the same Vercel team/project IDs above, production domain mapping and actual Git production branch. A merge into main may trigger an automatic production build; verify those rules before merging, rather than treating merge as harmless.
- [ ] Verify the current configured Node version (observed project setting: `24.x`) and Production build/install settings. Local work used Node 22.22.0; retain successful hosted-build evidence at the configured runtime.
- [ ] Confirm `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Production points to the owner's real website GA4 stream. Phase 3 checked presence and Production scope only; it did not read/decrypt its value or verify GA Admin state.
- [ ] Review Enhanced Measurement and any tag-manager outbound-link rules. A WhatsApp review URL contains encoded enquiry text; automatic `link_url` collection must not capture those fields. Custom event payloads omit form fields, but that alone does not establish the real stream's automatic measurement behavior.
- [ ] Ensure no `G-TESTONLY` or other synthetic identifier is used in the Production build. Public Next.js environment values are baked into browser output at build time; assigning a correct variable after building is insufficient.
- [ ] Keep Deployment Protection intact. Observed SSO rule: all deployments except custom domains; password protection is disabled. Do not broaden access or publish temporary auth/share parameters.
- [ ] Archive the current deployment ID, Git head, dependency lock and non-secret environment metadata. Do not export secrets into reports or Git.

Only after separate explicit approval should the owner use the existing release process to merge and release the security patch. A staged Production build must use real Production environment configuration and be tested before domains are assigned. Do not promote an unreviewed Preview build as if its environment were identical to Production.

## Verification after an approved security release

- [ ] Record the new Production deployment ID, exact merged commit, framework version and domains. Confirm the deployed version includes the patch; the local lockfile does not establish live remediation.
- [ ] Verify public homepage, About, Contact and preserved Saudi SEO pages; canonical www host, legacy redirect destinations, sitemap and robots must retain their pre-hotfix behavior.
- [ ] Check error/availability observations and normal analytics loading without sending test enquiries or synthetic traffic to the real property. No WhatsApp message is required for a security smoke check.
- [ ] Record a new **patched rollback anchor**. Only this reviewed patched production artifact should become the default rollback destination for the later redesign.
- [ ] Fetch updated main into the redesign work, reconcile the approved hotfix and repeat build, lint, TypeScript, audits, complete URL regression and browser QA before proposing the redesign merge.

## Hotfix rollback boundary

The current production deployment `dpl_9WtYzrpB5LXDDHGu4VPKhxHkmPUa` is a historical fallback, **not a security-safe rollback target**: returning to its Next.js 16.3.3 source would reintroduce known vulnerabilities. Prefer a tested roll-forward repair that retains patched dependencies. Any emergency return to a vulnerable artifact requires an incident owner to explicitly approve and record that risk, exposure window and remediation deadline. No rollback, pause, promotion or domain change is performed by this checklist.

Read-only evidence: `reports/phase3-security/hosting-snapshot.json`, current audit JSON files, and `PHASE3-SECURITY-REPORT.md`.
