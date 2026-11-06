# Redesign production release and rollback plan

Status: **READY FOR REVIEW; NOT READY FOR PRODUCTION**. The current work remains on `revamp/saudi-seo-organic`. No merge, production deployment, rollback, DNS change or environment update is authorized by this document.

## Target and release record

The verified hosting target is Vercel team `team_FKtnAnds9Xak13ypGNvXO346`, project `fazil-digital` (`prj_CmLqVHcl9jaE585rBNpDoWelS8xy`). The public canonical hostname is `https://www.fazildigital.com/`; the apex domain redirects there with 308. Project Node configuration is `24.x`; framework is Next.js. Deployment protection is enabled for non-custom-domain deployments.

| Release-record field | Current evidence / requirement |
| --- | --- |
| Redesign Phase 2 baseline | `4b81b631de2430b533970ce33096c1364a349627` |
| Existing protected redesign preview | `dpl_dXYZu42b2SMyMBq8xk4DE19hY8R4`, READY, source `4b81b63` |
| Existing preview URL | [Protected Phase 2 preview](https://fazil-digital-aqliqrx37-faziils-projects.vercel.app) |
| Final Phase 3 release-candidate SHA / preview ID | Record the coordinator's final pushed SHA and its matching protected deployment after verification; do not substitute the older preview |
| Current live production | `dpl_9WtYzrpB5LXDDHGu4VPKhxHkmPUa`, source `833d3820ede59d9f96df12551f12d43e1695a363` |
| Security-only review | [Draft PR #1](https://github.com/Fazilfazi991/fazildigital/pull/1), head `75da19d47711ab3beeee8aff50b2628bb3928f5c`, unmerged |
| Patched production rollback anchor | **PENDING** — record the approved security-hotfix release or another verified patched production artifact |
| Production release approval / operator / time | **PENDING OWNER APPROVAL** |

Do not describe current live Production as patched: its source pins Next.js 16.3.3. The security PR remains separate from the redesign. If the owner approves and merges/releases that hotfix, first reconcile the updated main with this branch and rerun all regression checks before proposing the full redesign merge.

## Before proposing a production merge

1. Record the final candidate SHA, review the complete diff and obtain explicit visual/content approval. Keep the existing editorial direction; approval of a local screenshot is not permission to deploy.
2. Confirm all 126 content URLs remain covered by the URL register. No legacy removal, redirect or noindex may be inferred from Saudi-only positioning. Obtain an explicit URL-level decision before implementing any migration. Never redirect unrelated legacy content to the Saudi homepage.
3. Pass a clean lockfile install, production build, TypeScript, full repository lint, current audits, all technical SEO assertions and the final cross-page browser run. Current dependency status is zero production vulnerabilities and eight reviewed Moderate development-only entries, with zero Critical/High findings.
4. Review 320, 390, 768, 1024 and 1440px layouts; keyboard navigation; reduced motion; native disclosures; all service/city/article journeys; and enquiry draft behavior. Preserve screenshot and test evidence for the exact candidate.
5. Verify the candidate's authenticated protected preview. An unauthenticated request must reach Vercel SSO and remain noindex. Do not disable protection, change access rules or publish bypass/share parameters to make a test pass.
6. Confirm the exact Vercel project/team, production branch automation, configured Node runtime, install command and build command. Project metadata and the older hosted preview are evidence, but settings and branch heads must be re-read immediately before release.
7. Have the owner validate the real Production GA4 stream variable and automatic outbound-measurement rules. WhatsApp review URLs contain enquiry text, which must not be collected through automatic `link_url` events. The custom application events omit those fields; actual stream rules remain an owner verification item. The branch requires only `NEXT_PUBLIC_GA_MEASUREMENT_ID` for analytics; website/form rendering works without it. No new database, CRM or server-side enquiry credential is required. Do not claim a backend submission exists.
8. Ensure synthetic analytics fixtures remain confined to intercepted local tests. Never reuse a local build compiled with a test identifier as the Production artifact. Keep secrets out of source, logs, screenshots and review artifacts.
9. Establish the patched rollback anchor and record its deployment ID, commit and environment. A rollback plan with an unidentified or known-vulnerable default target is incomplete.

Fresh Search Console/backlink evidence, Arabic editorial approval and client outcome evidence remain separate content/migration decisions. Their absence does not justify invented claims or destructive SEO cleanup.

## Owner-operated release sequence after explicit approval

1. Reconfirm approval names the exact candidate and environment. Inspect whether merging main automatically builds/assigns Production; select a staged release path with required checks before taking that action.
2. Build a Production candidate using the project's actual Production variables and current Node configuration, without assigning public domains until the acceptance checks pass. A protected Preview and a Production build can have different baked-in public variables.
3. Verify that staged artifact: representative commercial pages and articles render correctly; www canonicals, 126-entry sitemap, robots, six old redirects and 98 alternate raw/Markdown headers agree with the approved plan. Compare its Git SHA and dependency versions with the release record.
4. Inspect analytics tag configuration without sending artificial leads. Local tests already distinguish `seo_review_intent`, `contact_form_submit` and `whatsapp_click`; they do not establish actual message delivery or qualified leads. Owner-confirmed WhatsApp is +971 54 276 3828.
5. Only the authorized operator assigns/promotes the approved Production artifact. Record deployment ID, URL, commit, Node/framework versions, approval and time.
6. Perform limited read-only post-release checks and inspect operational errors/availability. Preserve evidence. Observe real search performance after recrawl; do not promise immediate ranking or CTR movement.

The supplied checklist does not execute these steps. A merge, production-stage deployment or promotion is still a release action requiring the owner's separate approval. Vercel documents that [promoting a Preview creates a new Production deployment](https://vercel.com/docs/cli/promote); a [Production build uses Production environment variables](https://vercel.com/docs/cli/build). Treat that rebuilt artifact as a separate verification target.

## Rollback triggers and decision

Rollback assessment is warranted for sustained server errors, major broken enquiry/navigation journeys, lost indexability, incorrect canonical host, missing valuable URLs, material disclosure/security regression or an approved release's clear operational failure. Record the observed issue, affected URLs, deployment ID and incident owner. Cosmetic preferences alone should return to the review process rather than trigger an uncontrolled production reversal.

Prefer a roll-forward fix when reverting would restore a known vulnerability. The current historical production artifact uses Next.js 16.3.3 and must not silently become the default safe rollback destination.

## Owner-operated rollback procedure

1. Confirm the intended rollback artifact is the recorded, tested **patched Production** deployment in the same project/team. Verify its exact commit, environment and dependency version; do not choose an older Preview merely because it looks familiar.
2. Obtain incident-owner approval for the selected target and expected impact. If the only usable fallback is vulnerable, require an explicit documented risk exception and urgent patch plan.
3. Use the existing Vercel rollback/promotion mechanism to restore that known artifact. Do not change DNS, wipe Git history or create unrelated infrastructure as a shortcut.
4. Confirm public domains point to the intended artifact, then check status, navigation, key enquiry paths, sitemap, robots, canonicals and preserved redirects.
5. Record that a Vercel rollback can disable automatic production-domain assignment for later pushes. The operator must inspect that state and deliberately restore normal assignment with an approved patched release; do not assume the next push went live.
6. Reconcile Git through reviewed revert/fix commits rather than a destructive main reset. Retain the failed candidate and evidence for diagnosis. Rerun all checks before the next release proposal.

Operational reference: [Vercel Instant Rollback](https://vercel.com/docs/instant-rollback), including promotion to restore automatic Production-domain assignment after rollback.

No database/schema migration or new backend service is introduced by this redesign, so the present rollback is an application/deployment operation. If that scope changes later, this plan must be reviewed before release.
