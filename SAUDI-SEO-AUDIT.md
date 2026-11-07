# Fazil Digital: Saudi SEO audit

Prepared 6 November 2026 (Asia/Calcutta). Baseline source: `833d3820ede59d9f96df12551f12d43e1695a363` on `main`, inspected from the development branch. This report distinguishes source findings, a small read-only live HTTP sample, supplied business information and older internal reporting. No live Search Console or GA4 account access was used, and no production configuration, redirects, pages or analytics settings were changed.

## Assessment

The existing site spreads its commercial message across seven services, six cities and two national markets, while the new business brief calls for one specialist Saudi SEO offer. The 42 city/service combinations are generated because data records exist, not because independent demand, unique delivery evidence or distinct search intent has been established for each page. Changing layout variants with a seeded randomizer does not create substantive differentiation. The safest first step is a focused homepage and an explicit URL ownership plan, followed by evidence-led internal-page work.

Low supplied CTR and average position indicate limited organic discovery, but the totals alone cannot identify the cause. A low average position can depress CTR; broad targeting, content quality, weak authority, snippet fit and indexing may also contribute. The available evidence does **not** establish a penalty, algorithmic cause, traffic decline or a guaranteed recovery opportunity. Current query/page exports are necessary to separate these explanations.

## Evidence and baseline

| Evidence | Observation | Limits |
| --- | --- | --- |
| User's supplied screenshot baseline, described in the brief | Approximately 6,630 impressions, 20 clicks, 0.3% CTR, 53.5 average position across three months | Supplied baseline only; exact dates, property, filters and page/query/device/country breakdown were not supplied or verified |
| `SEO-URL-REGISTER.md` / `SEO-CTR-OPPORTUNITIES.md` | Historical snapshots primarily covering 25 May–24 August 2026; URL/query observations below | Internal written records, not fresh source exports or current rankings |
| `SEO-CHANGELOG.md` | Another 27 August note records 4,891 impressions, 20 clicks, 0.4% CTR and position 38.5 | Different reported snapshot; do not compare with the new supplied totals as a trend |
| Claims and case-study registers | First-party Green Bags scope exists; numerical results lack underlying reports/approval | A named business, repeated claim or repository image does not prove an outcome |
| Source inventory | All 94 tracked baseline files catalogued; route/data/config/metadata/schema/content/SEO documentation reviewed | Source-defined availability does not prove Google indexation or all historical URL variants |
| Live HTTP sample, 6 November | Sitemap, robots, Riyadh SEO and one raw article endpoint checked read-only | Four endpoints, not a full live crawl, field performance test or authenticated account audit |

## Inventory and architecture

`scripts/seo-inventory.mjs` reproducibly reads the baseline Git tree, preserving the distinction between existing routes and new prototype assets. It produces `SEO-URL-INVENTORY.csv` and the full tables in `SEO-MIGRATION-PLAN.md`.

- **115 unique HTML routes:** 12 top-level pages, 7 service pages, 6 location hubs, 42 city/service URLs, 41 blog articles and 7 project notes. The dedicated `/sharjah/digital-marketing/` page overrides one generated combination; it is not a 43rd combination.
- Each of the 41 articles also has a `/blog/raw/{slug}/` representation and `/blog/{slug}.md` rewrite alias. These are alternate formats of the same article, not new search-intent pages.
- **227 logical URLs/assets/aliases** are individually classified, including configured redirect sources, known missing routes and public support assets. Host/slash variants are grouped as described in the migration plan.
- Classification totals: **28 KEEP, 99 REBUILD, 2 CONSOLIDATE, 98 REVIEW, 0 RETIRE**. Asset and representation rows are included in these totals. No removal is justified by the evidence available.

## Priority findings

| Priority | Finding and source evidence | Effect / proposed next action |
| --- | --- | --- |
| P1 | `public/llms.txt:24` still calls `+180% organic growth, 3.2x ROAS` “verifiable metrics.” The claims register says these outcomes lack evidence. | Machine-readable summaries contradict the evidence policy. Preserve endpoint; remove unsupported statements in a separately authorized factual cleanup. Never reuse them on the new homepage. |
| P1 | `src/app/sharjah/digital-marketing/page.tsx` description includes “Rank Top 3 guaranteed.” Its title also promotes Top 3 rankings. | Unsupported guarantee remains despite the earlier cleanup register. Flag immediately for factual correction; no deletion or redirect is required. Internal-page changes remain outside this prototype. |
| P1 | `src/data/blogs-cluster-3.ts` Riyadh guide says a case study “tripled the conversion rate,” although the case register lacks platform reports and approval. | Article claims require another evidence review. Do not frame this article as a verified performance case or copy its claim into homepage messaging. |
| P1 | `src/app/[location]/[service]/page.tsx` assigns LocalBusiness/ProfessionalService a postal address in **every** city. There is no evidence of six offices or a Saudi office. | Service area is not a physical office. Later replace unsupported local-address assertions with factual Person/Organization/Service and genuine areaServed. The new homepage must avoid an invented Saudi address. |
| P1 | A metadata sitemap (`src/app/sitemap.ts`), tracked `public/sitemap.xml` and `postbuild: next-sitemap` all target sitemap output. | Multiple owners risk route collision and build-time drift. Decide one owner in Phase 2; do not edit production settings here. |
| P1 | The metadata sitemap hardcodes six cases and omits `green-bags-uae`, although the route supports seven. Live XML contains **114** URLs and omits that case; the source has 115 HTML routes. | Missing legitimate project discovery. Use content data as a future single source and verify the final generated response. Sitemap inclusion alone does not ensure indexing. |
| P1 | `/blog/raw/*` route headers have neither `X-Robots-Tag: noindex` nor a canonical Link, despite documentation classifying them NOINDEX. Exclusion from sitemap is not a noindex directive. | Alternate HTML/Markdown indexing signals are incomplete. Preserve machine retrieval, plan noindex/canonical response headers consistently for raw and `.md` aliases. |
| P2 | Declared canonicals/sitemap generally end in `/`, but `next.config.ts` does not set `trailingSlash`. Live `/riyadh/seo/` resolves to slashless `/riyadh/seo`. The Sharjah override itself declares a slashless canonical. | Canonical URLs can lead through normalization rather than directly to a 200. Choose and test one policy before implementing any migration; keep existing URLs available. |
| P2 | Root `alternates.languages` points `en-ae` to Dubai hub and `en-sa` to Riyadh hub sitewide. These hubs are different content, not equivalent localized versions of every child page. | Inherited language alternatives are semantically wrong. Homepage metadata should override them; later remove the global pairing and use reciprocal equivalents only when real localized pages exist. |
| P2 | Root title template is `%s \| Mohammad Fazil`; multiple service/location/about titles already contain Mohammad Fazil or Fazil Digital. | Repeated brand suffixes and formulaic, overlong snippets. This is confirmed template duplication, not a claim that all 115 full titles are identical. Preserve protected titles until experiments are scoped. |
| P2 | `locations.ts` and `services.ts` share broad introductions and unsourced market/platform assertions; most combinations only swap the city/service. `moneyPageLayouts.ts` randomizes presentation. Riyadh and Dammam SEO have genuine specialized additions, but Jeddah still relies on shared service copy. | Thin differentiation and weak intent ownership. Retain the three Saudi SEO URLs, build meaningful city-specific briefs, and avoid generating more permutations. No search penalty is asserted. |
| P2 | Homepage, navigation/footer, service hubs, location hubs and machine-readable summaries promote paid ads, social, AI, development, SaaS and UAE alongside SEO. | Link prominence and commercial identity do not support the new specialist offer. Homepage navigation can prioritize Saudi organic journeys now; preserve internal URLs and plan their longer-term discovery separately. |
| P2 | Old schema references `/og-image.jpg` and `/images/mohammad-fazil.jpg`, neither present in the baseline tree. Host/entity names vary between non-www, www, Fazil Digital Consulting and Mohammad Fazil Digital Consulting. | Broken entity/image references and inconsistent identity. New homepage should use stable www entity IDs, factual names, existing assets only and no unsupported rich-result properties. |
| P2 | `public/robots.txt` blocks `/_next/` for generic crawler groups, while specifically declared Googlebot/Bingbot groups allow `/`. An allow rule mentions missing `/ai-agents.txt`; crawler naming comments also need validation. | Review rendering access for affected crawlers and stale directives. Do not misreport Googlebot as blocked: its specific group allows crawling. Preserve current policy until reviewed. |
| P3 | Sitemap marks most static/service/location routes modified `new Date()` every generation; changeFrequency/priority are assigned mechanically. | These dates do not identify substantive content changes. Future sitemap should use actual editorial modification dates where available. |
| P3 | Raw endpoint strips HTML and prepends frontmatter, while calling the result Markdown and including “Verified Source” language. | Formatting/retrieval quality and attribution need review; an endpoint label does not validate claims. Retain alternative retrieval without presenting it as independent evidence. |

## Known query ownership and cannibalization

| Cluster | Evidence available | Interpretation and next action |
| --- | --- | --- |
| Riyadh SEO | Historical `riyadh seo` 88/88 impressions mapped to `/riyadh/seo/`; later page record 206 impressions, 0 clicks, position 58.3 | Query mapping was coherent but visibility weak in that historical sample. Retain specialist URL; do not create `/seo-riyadh/` or duplicate intent on homepage. |
| Dammam SEO | Historical `seo services in dammam`: 81 impressions at `/locations/dammam/`, 6 non-www hub, 6 at `/dammam/seo/` | Documented overlap, not guessed cannibalization. Keep specialist commercial ownership and inspect the hub's broader query value before consolidation. |
| Jeddah SEO | Historical 11 impressions, 1 click, position 4.8 | Protect despite small sample; insufficient evidence for a current top-ranking claim. Expand unique city intent later. |
| Maps / UAE local SEO | `google-maps-seo-uae-2026` and `how-to-rank-on-google-maps-uae` target closely related informational tasks | Candidate same-intent consolidation. Query overlap, link quality, content differences and winning destination remain unverified. |
| Marketing ROI dashboards | `tracking-marketing-roi-gcc-dashboard-guide` and `marketing-roi-tracking-gcc-businesses` use very similar dashboard/how-to intent | Candidate consolidation only; do not merge without page/query and link review. |
| Saudi Snapchat | Benchmark, conversion, channel-comparison and broad paid-ad guides overlap terminology | Existing content map distinguishes useful tasks. Protect benchmark URL; keep other pages REVIEW and avoid new consolidation assumptions. Numerical benchmark removal also makes title/content fit worth checking carefully. |
| Mohammad Fazil / brand | Historical homepage and About association; About has 536 impressions/6 clicks | A homepage + factual person About cluster is sensible. Keep entity facts consistent and preserve About URL. |
| Commercial vs supporting guides | City services and broad Saudi city marketing articles both cover SEO | Commercial page owns hiring intent; article answers research questions and links to the matching service. Do not retitle every city guide “SEO services” and create overlap. |

## Historical assets worth protecting

These values come from the **older repository register**, not the new supplied screenshot or a live verification:

| URL | Recorded historical signal | Recommendation |
| --- | --- | --- |
| `/about/` | 536 impressions, 6 clicks, position 7.4 | KEEP branded/person purpose |
| `/blog/snapchat-ads-cpa-benchmarks-saudi-arabia-2026/` | 832 impressions, 1 click, position 6.1 | KEEP URL; evidence and snippet alignment review |
| `/digital-marketing-expert-dubai/` | 57 impressions, 2 clicks | REVIEW and preserve; no forced Saudi destination |
| `/locations/dammam/` | 551 impressions, 3 clicks | REVIEW and preserve query split |
| `/blog/digital-transformation-uae-sme-guide/` | 166 impressions, 1 click | KEEP distinct informational asset |
| `/blog/sharjah-business-directory-guide-2026/` | 17 impressions, 3 clicks | KEEP despite small sample |
| `/riyadh/paid-ads/` | 90 impressions, 1 click | REVIEW and preserve distinct intent |
| `/services/saas-development/` | 52 impressions, 1 click | REVIEW and preserve distinct intent |
| `/markets/` | 124 impressions, 1 click | REVIEW before hub restructuring |
| `/case-studies/dubai-seo/` | Query `seo case studies dubai`: 78 impressions, no clicks | REVIEW source proof before case claims/snippet changes |

## Live sample and limitations

Read-only HTTP requests on 6 November returned:

| Request | Observation |
| --- | --- |
| `https://www.fazildigital.com/sitemap.xml` | 200, application/xml, 114 `<loc>` elements; no raw article URLs; Green Bags case absent |
| `https://www.fazildigital.com/robots.txt` | 200, text/plain |
| `https://www.fazildigital.com/riyadh/seo/` | Followed normalization to `https://www.fazildigital.com/riyadh/seo`, 200 HTML |
| `https://www.fazildigital.com/blog/raw/seo-jeddah-guide-2026` | 200 text/markdown; no X-Robots-Tag or Link response header |

These checks do not establish sitewide index status, non-www redirects, field Core Web Vitals, SERP positions, rankings after changes, backlink quality or conversions. No traffic or ranking gain is promised. Browser/performance checks for the new local homepage belong in `REVAMP-VERIFICATION-REPORT.md` and are separate from this production sample.

## Phase 1 and next decisions

Deliver the reviewed homepage prototype, preserve internal pages and analytics, provide a full migration inventory and sign off the future architecture. Homepage links to Technical SEO, Local SEO and Content Strategy may use in-page service anchors until those planned routes exist. Existing Saudi market guides are not three newly researched Saudi SEO articles: retain their URLs and treat their claims/content as pending editorial review.

Before Phase 2, obtain current query/page/country/device exports, organic conversion definitions, backlink data, confirmed location facts, Arabic editorial resources and client publication approvals. Approve the homepage, keyword ownership, future route briefs, one sitemap owner and canonical policy. Then authorize scoped technical and factual fixes without bundling them with mass deletion or a production infrastructure change.

The current development homepage overrides the inherited title/description/canonical/language alternatives and uses factual Saudi service-area schema without a physical address, rating or numerical outcome. Its FAQ content and FAQ schema share one data source. Local fonts load through `next/font/local`; the old Fontshare stylesheet and legacy chrome are scoped to internal pages through `SiteChrome`. The new enquiry form prepares a message and asks the visitor to review it in WhatsApp rather than reporting that a message was sent. These are source-reviewed prototype changes, not fixes to the legacy findings above or a production release. Rendered checks are reported separately.

`node scripts/verify-preservation.mjs` checks that the active branch is the requested development branch, local `main` still matches the cloned baseline, all 91 original files outside the authorized homepage/layout/template changes remain unchanged, the 227-row URL inventory and generated report tables are current, and the three Saudi SEO URLs retain their exact destinations. `node scripts/seo-inventory.mjs --check` verifies the generated inventory without writing files. The preservation check passed during this review; run it again after build/postbuild because the existing sitemap generator can rewrite a protected asset.

## Sources and documentation

Repository: `AGENTS.md`, `README.md`, `_docs/docx_text.txt` (legacy specification, not claims evidence), route/data/component sources, `next.config.ts`, `next-sitemap.config.js`, tracked public assets, `ANALYTICS-SETUP.md`, all existing SEO and evidence registers. The new user brief supersedes the old PRD's broad GCC positioning and automatic matrix strategy.

Primary guidance consulted for the project: [Next.js metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata), [Next.js font loading](https://nextjs.org/docs/app/getting-started/fonts), [Google's URL migration guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) and [localized-version guidance](https://developers.google.com/search/docs/specialty/international/localized-versions). Recommendations are source-based; none constitutes a prediction of indexing or ranking outcomes.
