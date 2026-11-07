# Phase 2 technical SEO verification

Review date: 6 November 2026. Work is on `revamp/saudi-seo-organic`, continuing `642ac90`. No redesign merge or production deployment is authorized or performed here.

## Implemented foundation

`src/app/sitemap.ts` is the single sitemap authority. The obsolete public sitemap, next-sitemap configuration, package and postbuild generator are removed from the redesign. `src/data/seo-routes.ts` contains the reviewed commercial route registry, preserved legacy combinations, service pages, city hubs, static pages and all seven project notes. The named Green Bags UAE note is included. Article entries combine the 41 preserved articles and eight new Saudi SEO articles, with deduplication by slug.

All **115 original canonical content URLs** are retained. The sitemap adds three specialist service URLs and eight original article URLs, for an expected **126 unique content entries**. Future additions to city/service data arrays do not silently multiply sitemap routes. The old combination generator now uses the frozen 42-route preservation registry and rejects undeclared dynamic combinations; the three rebuilt Saudi SEO URLs have explicit static page implementations. No uncertain legacy page is deleted, redirected or noindexed for being outside the new commercial focus.

## Canonical and redirect policy

The canonical host is `https://www.fazildigital.com`. Content page URLs end in a slash. `trailingSlash: true` makes Next.js normalize slashless requests permanently to those existing canonical URLs. The six existing permanent redirect mappings remain unchanged. Static files, sitemap, robots and `.md` aliases retain their appropriate extension-bearing forms. Host-level production redirection and Search Console settings are not altered by this branch.

Root and reviewed page metadata no longer publish false English-country language alternatives pointing at unrelated city hubs. Legacy city and city/service metadata also remove that false hreflang mapping. No Arabic route or Arabic-equivalent hreflang is published before genuine localized content and editorial approval exist.

## Indexing and structured data

Both `/blog/raw/{slug}/` and rewritten `/blog/{slug}.md` responses carry `X-Robots-Tag: noindex, follow` and an HTTP `Link` canonical header to the corresponding HTML article. They remain retrievable and are excluded from the sitemap. JSON-stringified front matter protects quoted article metadata. The canonical source uses the www host and current content path.

The robots policy continues to preserve the existing search/retrieval and training-bot distinctions. The blanket `/_next/` disallow is removed so rendering resources are crawlable. Existing admin/API rules and sitemap declaration remain.

Legacy city/service schema now describes Service coverage without creating a LocalBusiness office for each city. City hubs describe CollectionPage coverage. Explicit Sharjah and Dubai expert pages also remove unsupported office-address markup. Sharjah's ranking guarantee is removed from metadata; Dubai's visible and structured FAQs replace unsupported fixed price/timing claims with scope-based wording. `llms.txt` and `llms-full.txt` now describe the approved Saudi positioning, evidence limits and owner-confirmed contact, without invented numerical results or office locations. Dammam's former specialized/generic HTML concatenation no longer appends a literal undefined value.

## Verification method

`scripts/verify-technical-seo.mjs` reads the original Phase 1 URL inventory from Git, rather than treating the new sitemap as proof of preservation. It checks every old and approved new content route, exact self canonicals, title uniqueness, one H1, absence of fabricated locale alternatives and continued indexability. It also checks both alternate representations for every article, the six preserved redirects, slash normalization, robots/LLM text and representative legacy schemas. Execution is restricted to localhost targets.

The final run and exact counts are recorded below. Cross-page keyboard, mobile navigation, enquiry analytics, layout widths, accessibility and screenshots are independently covered by the QA agent's browser report. Field Core Web Vitals, live Search Console, backlinks and actual qualified enquiries are not inferred from local tests.

## Final executed HTTP regression

Final integrated production preview: `http://127.0.0.1:3002`. Run completed **6 November 2026, 22:08 IST** (`2026-11-06T16:38:06.679Z`). Command: set `BASE_URL` to that local origin, then run `node scripts/verify-technical-seo.mjs`. Exit code **0**; **6 verification groups passed, 0 failed**. Machine-readable evidence: `reports/technical-seo-results.json`.

| Verification | Observed result |
| --- | --- |
| Single sitemap authority | 126 distinct canonical content entries; no raw/Markdown entries or duplicates |
| Historical URL preservation | All 115 original content paths remain present and indexable |
| Every original and newly approved content path | All 126 return HTTP 200, have exact self canonicals, exactly one H1 and 126 unique titles |
| Country/language metadata | No false hreflang alternatives on any of the 126 content responses |
| Article alternate representations | All 49 articles × 2 forms = 98 responses return HTTP 200 with noindex and the correct HTML canonical Link header |
| Historical permanent redirects | All six retain their original final destinations and return permanent 308 normalization/redirect responses |
| Slash normalization samples | About, Riyadh SEO and new Local SEO slashless requests return 308 to the slash-terminated canonical path |
| Robots and LLM text | Rendering assets allowed; correct www sitemap declaration; former invented numerical result strings absent |
| Legacy schema samples | Dubai SEO, Dammam paid ads and Jeddah city hub contain no LocalBusiness or PostalAddress office assertion |

The production build that produced this preview passed after the final schema and content fixes. This run verifies local HTTP behavior; it does not modify or claim to have inspected the live production Search Console or hosting configuration.

## Remaining evidence decisions

Fresh Search Console page/query exports and backlink evidence are still needed before approving legacy URL consolidation or retirement. Arabic-language publication needs genuine editorial review. Project outcomes need analytics evidence, comparison periods, metric definitions and publication permission. The owner-confirmed WhatsApp number is **+971 54 276 3828**. Draft preparation and outbound review clicks remain intent signals, not confirmed qualified leads.
