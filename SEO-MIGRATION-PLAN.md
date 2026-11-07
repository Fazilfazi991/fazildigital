# Saudi SEO migration plan

Prepared 6 November 2026 (Asia/Calcutta). Phase 1 is a preservation and planning exercise. Recommendations below are **not redirects, removals, noindex changes or production actions**. The development homepage changes its own messaging; existing internal pages remain available.

## Decision rules

| Class | Meaning | Gate before changing production |
| --- | --- | --- |
| KEEP | Preserve URL and established purpose | Routine factual/quality review; protect historical query ownership |
| REBUILD | Keep the same URL and improve its content or technical treatment | Approve page brief, evidence, metadata and QA; publish only in a later authorized release |
| CONSOLIDATE | Candidate to combine substantially equivalent content | Compare queries, backlinks, conversions and content; choose a verified relevant destination, approve mapping, then implement one direct permanent redirect |
| RETIRE | Candidate for removal after evidence review | Confirm no useful demand, links, conversions or relevant destination; obtain explicit deletion approval and plan genuine 404/410 |
| REVIEW | Evidence insufficient for a safe decision | Keep current state until query, links, scope and relevance are reviewed |

No current URL qualifies for RETIRE on the evidence available. Strategic de-emphasis alone does not prove a URL is safe to remove. The two CONSOLIDATE recommendations concern apparent same-intent article pairs only; neither is an approved redirect. A broader paid-ad, development or UAE URL must not be redirected to a Saudi SEO page merely to preserve traffic.

## Protected assets and conflicts

Retain `/riyadh/seo/`, `/jeddah/seo/` and `/dammam/seo/` at their existing URLs. REBUILD means improve those exact URLs in Phase 2, not replace them. Riyadh and Dammam already have specialized content in `src/data/specializedContent.ts`; preserve this substance. Jeddah's historical page-one observation is only an 11-impression sample and is not a current ranking claim.

Protect `/about/`, the Saudi Snapchat benchmark article, `/digital-marketing-expert-dubai/`, `/locations/dammam/`, the UAE transformation guide and the Sharjah directory guide because the older register records clicks. Their off-strategy subjects require a deliberate portfolio decision after fresh evidence. Also hold `/riyadh/paid-ads/`, `/services/saas-development/`, `/markets/` and `/case-studies/dubai-seo/` pending their historical-query review.

The Dammam hub and specialist SEO page have documented query overlap. Review the hub's broad city demand independently from SEO-service queries; do not remove a page with historical clicks. Keep `/dammam/seo/` as the intended owner of local SEO commercial intent and strengthen contextual links only in an authorized internal-page phase.

## URL normalization

Tables use `https://www.fazildigital.com` plus the displayed path. HTML paths are displayed with the existing declared canonical slash, while Next.js currently defaults to slashless routing because `next.config.ts` does not enable `trailingSlash`. Treat slash and slashless spellings as one logical page in this register, not duplicate pages to delete. Verify actual responses, canonical destination and redirect chains before choosing a consistent production format. Existing literal redirect sources retain their config spelling. The non-www host, HTTP variants, query strings and fingerprinted metadata assets are variants, not separate content pages; fresh crawl/server data is required to enumerate unknown historical variants.

The inventory covers all source-defined HTML routes, each blog's raw and `.md` representation, configured redirect sources, documented historical missing paths and all existing public support assets. It is not a claim to know every URL ever crawled by Google. Unknown backlink targets and historical 404s must be added from exports before destructive migration work.

## Migration sequence for a separately approved Phase 2

1. Export at least a recent 3-month GSC baseline and a longer comparison window: page × query × country × device, canonical/index coverage and indexed/nonindexed examples. Obtain GA4 organic landing-page/key-event reports and backlink/redirect inventory. Keep branded and nonbranded queries separate.
2. Sign off keyword ownership in `SAUDI-SITE-ARCHITECTURE.md`. Finalize local/technical/content page briefs, genuine Arabic localization resources and proof approvals. Do not publish translated shell pages or a new city/service matrix.
3. Rebuild retained URLs in small groups. Avoid simultaneous protected-title experiments; define hypothesis, comparison period and rollback per experiment. Preserve existing article dates except for material updates.
4. Choose one sitemap owner, align canonical/slash policy, fix raw-representation indexing headers and remove unsupported location-address schema after explicit implementation approval. Update internal links and machine-readable summaries with the same evidence boundary.
5. For an approved consolidation, merge useful content first; verify the destination is a substantive 200 page with matching intent. Apply a single direct permanent redirect, update internal links/canonical/sitemap, test legacy links and keep the redirect long term. Avoid chains and mass redirects to the homepage.
6. Release only after review. Monitor GSC crawl/index coverage, page/query ownership, clicks, impressions, CTR, qualified enquiries and error logs against dated baselines. Annotate deployment time and do not infer success from immediate rank movement. Maintain a rollback of code, metadata and URL mappings.

## Evidence still required

- Live authenticated Search Console and GA4 exports. Supplied totals and historical repository notes are not live account verification.
- Current inbound links, referring-page context and historical redirect/server-log coverage.
- Permission and source reports for case studies; genuine business location facts and Arabic editorial capability.
- Business decision on retaining useful UAE/paid-media readership independently of the new commercial navigation.
- Approval of every eventual removal/redirect and the canonical slash policy. No such approval is implied by this report.

## References

Repository evidence: `SEO-URL-REGISTER.md`, `SEO-CTR-OPPORTUNITIES.md`, `SEO-CHANGELOG.md`, `SNAPCHAT-CONTENT-MAP.md`, `CLAIMS-EVIDENCE-REGISTER.md`, `CASE-STUDY-EVIDENCE-REGISTER.md`, route/data sources and `next.config.ts`. Google recommends mapping old URLs to corresponding destinations, testing and monitoring migrations: [Site moves with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes). Reciprocal language alternatives apply to genuinely equivalent localized pages: [Localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions).

<!-- BEGIN GENERATED INVENTORY -->

## Complete URL register

Generated with `node scripts/seo-inventory.mjs` from source commit `833d3820ede59d9f96df12551f12d43e1695a363` (94 tracked files). 115 unique HTML routes; 41 articles; 6 cities × 7 services = 42 combinations (one static override, not an extra URL). 227 total logical URLs/assets/aliases including existing redirects and documented missing paths.

### Indexable HTML routes (source-derived, not an indexing assertion)

| Current URL | Class | Future destination / retained URL | Reason |
| --- | --- | --- | --- |
| `/blog/abu-dhabi-digital-marketing-guide-2026/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/agency-vs-consultant-vs-freelancer-uae/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/ai-automation-2026-agentic-ai-uae-businesses/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/ai-automation-for-small-business-uae/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/ai-automation-uae-sme-tasks/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/ai-content-vs-human-content-2026-google-update-uae/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/ai-search-optimization-2026-playbook/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/bilingual-seo-dubai-b2b-guide/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/claude-design-launch-uae-businesses-2026/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/claude-opus-4-7-guide-uae-businesses-2026/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/content-marketing-strategy-uae-2026/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/dammam-digital-marketing-eastern-province/` | REBUILD | `/blog/dammam-digital-marketing-eastern-province/` | Relevant Saudi market guide; preserve informational purpose distinct from local commercial page |
| `/blog/digital-marketing-budget-jeddah-2026/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/digital-marketing-budget-uae-sme-2026/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/digital-marketing-riyadh-saudi-businesses-2026/` | REBUILD | `/blog/digital-marketing-riyadh-saudi-businesses-2026/` | Relevant Saudi market guide; preserve informational purpose distinct from local commercial page |
| `/blog/digital-transformation-uae-sme-guide/` | KEEP | `/blog/digital-transformation-uae-sme-guide/` | Historical 166 impressions/1 click; preserve distinct SME transformation intent |
| `/blog/ecommerce-marketing-uae-saudi-guide-2026/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/google-maps-seo-uae-2026/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/google-march-2026-core-update-dubai-riyadh/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/google-vs-snapchat-ads-saudi-roi/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/how-to-choose-a-digital-marketing-agency-in-dubai/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/how-to-rank-on-google-maps-uae/` | CONSOLIDATE | `/blog/google-maps-seo-uae-2026/` | Potential same-intent overlap; destination is provisional and must win fresh query/backlink/content review before approval |
| `/blog/linkedin-marketing-b2b-uae-saudi-2026/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/linkedin-vs-tiktok-b2b-dubai/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/marketing-roi-tracking-gcc-businesses/` | CONSOLIDATE | `/blog/tracking-marketing-roi-gcc-dashboard-guide/` | Potential same-intent overlap; destination is provisional and must win fresh query/backlink/content review before approval |
| `/blog/paid-ads-guide-uae-saudi-arabia-2026/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/rank-on-google-dubai-2025/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/riyadh-ecommerce-conversion-fixes/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/saas-development-uae-startup-guide/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/seo-for-uae-businesses-complete-guide-2026/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/seo-jeddah-guide-2026/` | REBUILD | `/blog/seo-jeddah-guide-2026/` | Relevant Saudi market guide; preserve informational purpose distinct from local commercial page |
| `/blog/sharjah-business-directory-guide-2026/` | KEEP | `/blog/sharjah-business-directory-guide-2026/` | Historical 17 impressions/3 clicks; preserve despite small sample and UAE topic |
| `/blog/sharjah-digital-marketing-seo-guide/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/snapchat-ads-cpa-benchmarks-saudi-arabia-2026/` | KEEP | `/blog/snapchat-ads-cpa-benchmarks-saudi-arabia-2026/` | Historical 832 impressions/1 click/position 6.1; preserve URL, review title-to-content fit after benchmark claims removal |
| `/blog/snapchat-ads-saudi-arabia-conversion-guide-2026/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/snapchat-ads-uae-ksa-2026-ramadan-data/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/social-media-management-dubai-2026/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/tracking-marketing-roi-gcc-dashboard-guide/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/vet-digital-consultant-dubai-checklist/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/web-development-dubai-business-site-2026/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/blog/why-your-uae-website-isnt-ranking-on-google/` | REVIEW | Pending evidence | Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review |
| `/abu-dhabi/ai-automation/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/abu-dhabi/digital-marketing/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/abu-dhabi/paid-ads/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/abu-dhabi/saas-development/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/abu-dhabi/seo/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/abu-dhabi/social-media-management/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/abu-dhabi/web-development/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/dammam/ai-automation/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/dammam/digital-marketing/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/dammam/paid-ads/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/dammam/saas-development/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/dammam/seo/` | REBUILD | `/dammam/seo/` | Protected Saudi SEO intent; resolve hub overlap using fresh query evidence |
| `/dammam/social-media-management/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/dammam/web-development/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/dubai/ai-automation/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/dubai/digital-marketing/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/dubai/paid-ads/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/dubai/saas-development/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/dubai/seo/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/dubai/social-media-management/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/dubai/web-development/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/jeddah/ai-automation/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/jeddah/digital-marketing/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/jeddah/paid-ads/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/jeddah/saas-development/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/jeddah/seo/` | REBUILD | `/jeddah/seo/` | Protected Saudi SEO intent; historical 11 impressions/1 click/position 4.8 is a small sample |
| `/jeddah/social-media-management/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/jeddah/web-development/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/riyadh/ai-automation/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/riyadh/digital-marketing/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/riyadh/paid-ads/` | REVIEW | Pending evidence | Historical 90 impressions/1 click; retain pending separate paid-search intent review |
| `/riyadh/saas-development/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/riyadh/seo/` | REBUILD | `/riyadh/seo/` | Protected Saudi SEO intent; historical 206 impressions/0 clicks/position 58.3; retain specialized copy |
| `/riyadh/social-media-management/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/riyadh/web-development/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/sharjah/ai-automation/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/sharjah/paid-ads/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/sharjah/saas-development/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/sharjah/seo/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/sharjah/social-media-management/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/sharjah/web-development/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |
| `/locations/abu-dhabi/` | REVIEW | Pending evidence | Broad city-services intent; keep live while measuring overlap and historical value |
| `/locations/dammam/` | REVIEW | Pending evidence | Historical 551 impressions/3 clicks; overlaps /dammam/seo/. Evaluate query split before any merge |
| `/locations/dubai/` | REVIEW | Pending evidence | Broad city-services intent; keep live while measuring overlap and historical value |
| `/locations/jeddah/` | REVIEW | Pending evidence | Broad city-services intent; keep live while measuring overlap and historical value |
| `/locations/riyadh/` | REVIEW | Pending evidence | Broad city-services intent; keep live while measuring overlap and historical value |
| `/locations/sharjah/` | REVIEW | Pending evidence | Broad city-services intent; keep live while measuring overlap and historical value |
| `/case-studies/abu-dhabi-social-media/` | REVIEW | Pending evidence | Existing anonymized scope is not verified delivery/results; retain pending evidence and permission review |
| `/case-studies/dammam-marketing/` | REVIEW | Pending evidence | Existing anonymized scope is not verified delivery/results; retain pending evidence and permission review |
| `/case-studies/dubai-seo/` | REVIEW | Pending evidence | Historical case-study query visibility; source measurements and publication approval unavailable |
| `/case-studies/green-bags-uae/` | KEEP | `/case-studies/green-bags-uae/` | First-party supported named scope only; no verified numerical outcome or Saudi-client claim |
| `/case-studies/jeddah-web-development/` | REVIEW | Pending evidence | Existing anonymized scope is not verified delivery/results; retain pending evidence and permission review |
| `/case-studies/riyadh-paid-ads/` | REVIEW | Pending evidence | Existing anonymized scope is not verified delivery/results; retain pending evidence and permission review |
| `/case-studies/sharjah-ai-automation/` | REVIEW | Pending evidence | Existing anonymized scope is not verified delivery/results; retain pending evidence and permission review |
| `/services/ai-automation/` | REVIEW | Pending evidence | Off-strategy service; no safe equivalent SEO destination established |
| `/services/digital-marketing/` | REVIEW | Pending evidence | Off-strategy service; no safe equivalent SEO destination established |
| `/services/paid-ads/` | REVIEW | Pending evidence | Off-strategy service; no safe equivalent SEO destination established |
| `/services/saas-development/` | REVIEW | Pending evidence | Historical 52 impressions/1 click; off-strategy intent is not equivalent to SEO |
| `/services/seo/` | REBUILD | `/services/seo/` | National SEO program; retain URL and distinguish from consultant homepage |
| `/services/social-media-management/` | REVIEW | Pending evidence | Off-strategy service; no safe equivalent SEO destination established |
| `/services/web-development/` | REVIEW | Pending evidence | Off-strategy service; no safe equivalent SEO destination established |
| `/` | REBUILD | `/` | Saudi consultancy homepage prototype; retain URL |
| `/about/` | KEEP | `/about/` | Protect branded/person intent and historical 6 clicks; later factual positioning update only |
| `/blog/` | REBUILD | `/blog/` | Retain article hub; curate Saudi organic-growth discovery without deleting older articles |
| `/case-studies/` | REBUILD | `/case-studies/` | Evidence-led case index; publish only substantiated scope/results |
| `/contact/` | REBUILD | `/contact/` | Retain enquiry intent; accurate WhatsApp handoff and Saudi SEO briefing |
| `/digital-marketing-expert-dubai/` | REVIEW | Pending evidence | Protect historical 57 impressions/2 clicks and distinct UAE intent despite new positioning |
| `/locations/` | REVIEW | Pending evidence | Broad multi-country hub; evaluate queries/backlinks before any consolidation |
| `/markets/` | REVIEW | Pending evidence | Historical 124 impressions/1 click; do not redirect broad market intent to homepage blindly |
| `/methodology/` | REBUILD | `/methodology/` | Retain URL with distinct SEO working-process intent, rather than a second services pitch |
| `/portfolio/` | REVIEW | Pending evidence | Preserve named project scope; verify permission and alignment before restructuring |
| `/privacy-policy/` | KEEP | `/privacy-policy/` | Restored legal/privacy route; preserve and review against future processing changes |
| `/services/` | REBUILD | `/services/` | Retain useful service-navigation hub; specialist SEO scope in Phase 2 |
| `/sharjah/digital-marketing/` | REVIEW | Pending evidence | Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established |

### Machine-readable alternate representations

| Current URL | Class | Future destination / retained URL | Reason |
| --- | --- | --- | --- |
| `/blog/raw/abu-dhabi-digital-marketing-guide-2026/` | REBUILD | `/blog/abu-dhabi-digital-marketing-guide-2026/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/agency-vs-consultant-vs-freelancer-uae/` | REBUILD | `/blog/agency-vs-consultant-vs-freelancer-uae/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/ai-automation-2026-agentic-ai-uae-businesses/` | REBUILD | `/blog/ai-automation-2026-agentic-ai-uae-businesses/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/ai-automation-for-small-business-uae/` | REBUILD | `/blog/ai-automation-for-small-business-uae/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/ai-automation-uae-sme-tasks/` | REBUILD | `/blog/ai-automation-uae-sme-tasks/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/ai-content-vs-human-content-2026-google-update-uae/` | REBUILD | `/blog/ai-content-vs-human-content-2026-google-update-uae/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/ai-search-optimization-2026-playbook/` | REBUILD | `/blog/ai-search-optimization-2026-playbook/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/bilingual-seo-dubai-b2b-guide/` | REBUILD | `/blog/bilingual-seo-dubai-b2b-guide/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/claude-design-launch-uae-businesses-2026/` | REBUILD | `/blog/claude-design-launch-uae-businesses-2026/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/claude-opus-4-7-guide-uae-businesses-2026/` | REBUILD | `/blog/claude-opus-4-7-guide-uae-businesses-2026/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/content-marketing-strategy-uae-2026/` | REBUILD | `/blog/content-marketing-strategy-uae-2026/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/dammam-digital-marketing-eastern-province/` | REBUILD | `/blog/dammam-digital-marketing-eastern-province/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/digital-marketing-budget-jeddah-2026/` | REBUILD | `/blog/digital-marketing-budget-jeddah-2026/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/digital-marketing-budget-uae-sme-2026/` | REBUILD | `/blog/digital-marketing-budget-uae-sme-2026/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/digital-marketing-riyadh-saudi-businesses-2026/` | REBUILD | `/blog/digital-marketing-riyadh-saudi-businesses-2026/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/digital-transformation-uae-sme-guide/` | REBUILD | `/blog/digital-transformation-uae-sme-guide/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/ecommerce-marketing-uae-saudi-guide-2026/` | REBUILD | `/blog/ecommerce-marketing-uae-saudi-guide-2026/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/google-maps-seo-uae-2026/` | REBUILD | `/blog/google-maps-seo-uae-2026/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/google-march-2026-core-update-dubai-riyadh/` | REBUILD | `/blog/google-march-2026-core-update-dubai-riyadh/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/google-vs-snapchat-ads-saudi-roi/` | REBUILD | `/blog/google-vs-snapchat-ads-saudi-roi/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/how-to-choose-a-digital-marketing-agency-in-dubai/` | REBUILD | `/blog/how-to-choose-a-digital-marketing-agency-in-dubai/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/how-to-rank-on-google-maps-uae/` | REBUILD | `/blog/how-to-rank-on-google-maps-uae/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/linkedin-marketing-b2b-uae-saudi-2026/` | REBUILD | `/blog/linkedin-marketing-b2b-uae-saudi-2026/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/linkedin-vs-tiktok-b2b-dubai/` | REBUILD | `/blog/linkedin-vs-tiktok-b2b-dubai/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/marketing-roi-tracking-gcc-businesses/` | REBUILD | `/blog/marketing-roi-tracking-gcc-businesses/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/paid-ads-guide-uae-saudi-arabia-2026/` | REBUILD | `/blog/paid-ads-guide-uae-saudi-arabia-2026/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/rank-on-google-dubai-2025/` | REBUILD | `/blog/rank-on-google-dubai-2025/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/riyadh-ecommerce-conversion-fixes/` | REBUILD | `/blog/riyadh-ecommerce-conversion-fixes/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/saas-development-uae-startup-guide/` | REBUILD | `/blog/saas-development-uae-startup-guide/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/seo-for-uae-businesses-complete-guide-2026/` | REBUILD | `/blog/seo-for-uae-businesses-complete-guide-2026/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/seo-jeddah-guide-2026/` | REBUILD | `/blog/seo-jeddah-guide-2026/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/sharjah-business-directory-guide-2026/` | REBUILD | `/blog/sharjah-business-directory-guide-2026/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/sharjah-digital-marketing-seo-guide/` | REBUILD | `/blog/sharjah-digital-marketing-seo-guide/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/snapchat-ads-cpa-benchmarks-saudi-arabia-2026/` | REBUILD | `/blog/snapchat-ads-cpa-benchmarks-saudi-arabia-2026/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/snapchat-ads-saudi-arabia-conversion-guide-2026/` | REBUILD | `/blog/snapchat-ads-saudi-arabia-conversion-guide-2026/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/snapchat-ads-uae-ksa-2026-ramadan-data/` | REBUILD | `/blog/snapchat-ads-uae-ksa-2026-ramadan-data/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/social-media-management-dubai-2026/` | REBUILD | `/blog/social-media-management-dubai-2026/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/tracking-marketing-roi-gcc-dashboard-guide/` | REBUILD | `/blog/tracking-marketing-roi-gcc-dashboard-guide/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/vet-digital-consultant-dubai-checklist/` | REBUILD | `/blog/vet-digital-consultant-dubai-checklist/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/web-development-dubai-business-site-2026/` | REBUILD | `/blog/web-development-dubai-business-site-2026/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/raw/why-your-uae-website-isnt-ranking-on-google/` | REBUILD | `/blog/why-your-uae-website-isnt-ranking-on-google/` | Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent) |
| `/blog/abu-dhabi-digital-marketing-guide-2026.md` | REBUILD | `/blog/abu-dhabi-digital-marketing-guide-2026/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/agency-vs-consultant-vs-freelancer-uae.md` | REBUILD | `/blog/agency-vs-consultant-vs-freelancer-uae/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/ai-automation-2026-agentic-ai-uae-businesses.md` | REBUILD | `/blog/ai-automation-2026-agentic-ai-uae-businesses/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/ai-automation-for-small-business-uae.md` | REBUILD | `/blog/ai-automation-for-small-business-uae/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/ai-automation-uae-sme-tasks.md` | REBUILD | `/blog/ai-automation-uae-sme-tasks/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/ai-content-vs-human-content-2026-google-update-uae.md` | REBUILD | `/blog/ai-content-vs-human-content-2026-google-update-uae/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/ai-search-optimization-2026-playbook.md` | REBUILD | `/blog/ai-search-optimization-2026-playbook/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/bilingual-seo-dubai-b2b-guide.md` | REBUILD | `/blog/bilingual-seo-dubai-b2b-guide/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/claude-design-launch-uae-businesses-2026.md` | REBUILD | `/blog/claude-design-launch-uae-businesses-2026/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/claude-opus-4-7-guide-uae-businesses-2026.md` | REBUILD | `/blog/claude-opus-4-7-guide-uae-businesses-2026/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/content-marketing-strategy-uae-2026.md` | REBUILD | `/blog/content-marketing-strategy-uae-2026/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/dammam-digital-marketing-eastern-province.md` | REBUILD | `/blog/dammam-digital-marketing-eastern-province/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/digital-marketing-budget-jeddah-2026.md` | REBUILD | `/blog/digital-marketing-budget-jeddah-2026/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/digital-marketing-budget-uae-sme-2026.md` | REBUILD | `/blog/digital-marketing-budget-uae-sme-2026/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/digital-marketing-riyadh-saudi-businesses-2026.md` | REBUILD | `/blog/digital-marketing-riyadh-saudi-businesses-2026/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/digital-transformation-uae-sme-guide.md` | REBUILD | `/blog/digital-transformation-uae-sme-guide/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/ecommerce-marketing-uae-saudi-guide-2026.md` | REBUILD | `/blog/ecommerce-marketing-uae-saudi-guide-2026/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/google-maps-seo-uae-2026.md` | REBUILD | `/blog/google-maps-seo-uae-2026/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/google-march-2026-core-update-dubai-riyadh.md` | REBUILD | `/blog/google-march-2026-core-update-dubai-riyadh/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/google-vs-snapchat-ads-saudi-roi.md` | REBUILD | `/blog/google-vs-snapchat-ads-saudi-roi/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/how-to-choose-a-digital-marketing-agency-in-dubai.md` | REBUILD | `/blog/how-to-choose-a-digital-marketing-agency-in-dubai/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/how-to-rank-on-google-maps-uae.md` | REBUILD | `/blog/how-to-rank-on-google-maps-uae/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/linkedin-marketing-b2b-uae-saudi-2026.md` | REBUILD | `/blog/linkedin-marketing-b2b-uae-saudi-2026/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/linkedin-vs-tiktok-b2b-dubai.md` | REBUILD | `/blog/linkedin-vs-tiktok-b2b-dubai/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/marketing-roi-tracking-gcc-businesses.md` | REBUILD | `/blog/marketing-roi-tracking-gcc-businesses/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/paid-ads-guide-uae-saudi-arabia-2026.md` | REBUILD | `/blog/paid-ads-guide-uae-saudi-arabia-2026/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/rank-on-google-dubai-2025.md` | REBUILD | `/blog/rank-on-google-dubai-2025/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/riyadh-ecommerce-conversion-fixes.md` | REBUILD | `/blog/riyadh-ecommerce-conversion-fixes/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/saas-development-uae-startup-guide.md` | REBUILD | `/blog/saas-development-uae-startup-guide/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/seo-for-uae-businesses-complete-guide-2026.md` | REBUILD | `/blog/seo-for-uae-businesses-complete-guide-2026/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/seo-jeddah-guide-2026.md` | REBUILD | `/blog/seo-jeddah-guide-2026/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/sharjah-business-directory-guide-2026.md` | REBUILD | `/blog/sharjah-business-directory-guide-2026/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/sharjah-digital-marketing-seo-guide.md` | REBUILD | `/blog/sharjah-digital-marketing-seo-guide/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/snapchat-ads-cpa-benchmarks-saudi-arabia-2026.md` | REBUILD | `/blog/snapchat-ads-cpa-benchmarks-saudi-arabia-2026/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/snapchat-ads-saudi-arabia-conversion-guide-2026.md` | REBUILD | `/blog/snapchat-ads-saudi-arabia-conversion-guide-2026/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/snapchat-ads-uae-ksa-2026-ramadan-data.md` | REBUILD | `/blog/snapchat-ads-uae-ksa-2026-ramadan-data/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/social-media-management-dubai-2026.md` | REBUILD | `/blog/social-media-management-dubai-2026/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/tracking-marketing-roi-gcc-dashboard-guide.md` | REBUILD | `/blog/tracking-marketing-roi-gcc-dashboard-guide/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/vet-digital-consultant-dubai-checklist.md` | REBUILD | `/blog/vet-digital-consultant-dubai-checklist/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/web-development-dubai-business-site-2026.md` | REBUILD | `/blog/web-development-dubai-business-site-2026/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |
| `/blog/why-your-uae-website-isnt-ranking-on-google.md` | REBUILD | `/blog/why-your-uae-website-isnt-ranking-on-google/` | Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2 |

### Existing redirects and historical missing URLs

| Current URL | Class | Future destination / retained URL | Reason |
| --- | --- | --- | --- |
| `/blog/seo-cost-dubai` | KEEP | `/blog/` | Preserve existing mapping unchanged; check destination relevance and slash-chain behavior before future changes |
| `/case-studies/dammam-logistics-seo` | KEEP | `/case-studies/dammam-marketing/` | Preserve existing mapping unchanged; check destination relevance and slash-chain behavior before future changes |
| `/case-studies/dental-seo-dubai` | KEEP | `/case-studies/dubai-seo/` | Preserve existing mapping unchanged; check destination relevance and slash-chain behavior before future changes |
| `/dubai/social-media` | KEEP | `/dubai/social-media-management/` | Preserve existing mapping unchanged; check destination relevance and slash-chain behavior before future changes |
| `/en-US` | KEEP | `/` | Preserve existing mapping unchanged; check destination relevance and slash-chain behavior before future changes |
| `/snapchat-ads-saudi-arabia-benchmarks` | KEEP | `/blog/snapchat-ads-cpa-benchmarks-saudi-arabia-2026/` | Preserve existing mapping unchanged; check destination relevance and slash-chain behavior before future changes |
| `/ajman/digital-marketing/` | REVIEW | Pending evidence | Documented historical missing route; no Ajman data record or equivalent offering; do not invent a redirect |
| `/ajman/social-media-management/` | REVIEW | Pending evidence | Documented historical missing route; no Ajman data record or equivalent offering; do not invent a redirect |
| `/ajman/web-development/` | REVIEW | Pending evidence | Documented historical missing route; no Ajman data record or equivalent offering; do not invent a redirect |
| `/ai-agents.txt` | REVIEW | Pending evidence | robots.txt allows this path, but no matching public asset/route exists; do not assume indexation |

### SEO and support assets

| Current URL | Class | Future destination / retained URL | Reason |
| --- | --- | --- | --- |
| `/apple-icon.png` | KEEP | `/apple-icon.png` | Preserve brand/icon route; no independent SEO landing-page intent |
| `/favicon.ico` | KEEP | `/favicon.ico` | Preserve brand/icon route; no independent SEO landing-page intent |
| `/icon.png` | KEEP | `/icon.png` | Preserve brand/icon route; no independent SEO landing-page intent |
| `/file.svg` | KEEP | `/file.svg` | Preserve existing image/vector support asset; not an indexable commercial page |
| `/globe.svg` | KEEP | `/globe.svg` | Preserve existing image/vector support asset; not an indexable commercial page |
| `/images/brand/fazil-digital-logo.png` | KEEP | `/images/brand/fazil-digital-logo.png` | Preserve existing image/vector support asset; not an indexable commercial page |
| `/images/portfolio/clients/bags_basket_web.png` | KEEP | `/images/portfolio/clients/bags_basket_web.png` | Preserve existing image/vector support asset; not an indexable commercial page |
| `/images/portfolio/clients/budget_home_fix_web.png` | KEEP | `/images/portfolio/clients/budget_home_fix_web.png` | Preserve existing image/vector support asset; not an indexable commercial page |
| `/images/portfolio/clients/bwmc_web.png` | KEEP | `/images/portfolio/clients/bwmc_web.png` | Preserve existing image/vector support asset; not an indexable commercial page |
| `/images/portfolio/clients/golden_point_web.png` | KEEP | `/images/portfolio/clients/golden_point_web.png` | Preserve existing image/vector support asset; not an indexable commercial page |
| `/images/portfolio/clients/green_bags_web.png` | KEEP | `/images/portfolio/clients/green_bags_web.png` | Preserve existing image/vector support asset; not an indexable commercial page |
| `/images/portfolio/clients/logos_set_2.png` | KEEP | `/images/portfolio/clients/logos_set_2.png` | Preserve existing image/vector support asset; not an indexable commercial page |
| `/images/portfolio/clients/zap_mart_web.png` | KEEP | `/images/portfolio/clients/zap_mart_web.png` | Preserve existing image/vector support asset; not an indexable commercial page |
| `/llms-full.txt` | REBUILD | `/llms-full.txt` | Preserve endpoint; remove stale unsupported claims and align positioning after approval |
| `/llms.txt` | REBUILD | `/llms.txt` | Preserve endpoint; remove stale unsupported claims and align positioning after approval |
| `/next.svg` | KEEP | `/next.svg` | Preserve existing image/vector support asset; not an indexable commercial page |
| `/robots.txt` | REBUILD | `/robots.txt` | Preserve crawler policy; review /_next/ blocking and stale/misnamed crawler entries separately |
| `/sitemap.xml` | REBUILD | `/sitemap.xml` | Preserve; competing static/metadata/postbuild sitemap ownership needs a separately approved fix |
| `/vercel.svg` | KEEP | `/vercel.svg` | Preserve existing image/vector support asset; not an indexable commercial page |
| `/window.svg` | KEEP | `/window.svg` | Preserve existing image/vector support asset; not an indexable commercial page |
