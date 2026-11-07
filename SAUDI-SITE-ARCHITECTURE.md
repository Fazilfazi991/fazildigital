# Saudi site architecture and intent ownership

Prepared 6 November 2026 (Asia/Calcutta). This is the Phase 2 plan. Phase 1 implements the homepage prototype only and preserves existing internal pages, URLs, articles, redirects, tracking and production configuration.

## Proposed hierarchy

```text
/                              National consultancy and brand introduction
├── /services/seo/              Integrated SEO engagement
│   ├── /services/technical-seo/ Planned specialist scope
│   ├── /services/local-seo/     Planned specialist scope
│   └── /services/content-marketing/ Planned organic editorial scope
├── /riyadh/seo/                Primary city commercial page (retain)
├── /jeddah/seo/                Secondary city commercial page (retain)
├── /dammam/seo/                Third-priority city commercial page (retain)
├── /about/                    Mohammad Fazil, substantiated background
├── /case-studies/             Evidence-led work index
│   └── Existing detail URLs   Preserve; scope and evidence reviewed separately
├── /blog/                     SEO and organic marketing knowledge index
│   └── Existing article URLs  Preserve; retain valuable non-core search assets
└── /contact/                  SEO review enquiry and direct contact
```

Privacy policy remains a linked utility page. Other current pages remain available until the evidence review in `SEO-MIGRATION-PLAN.md` reaches a decision. Their absence from the proposed main navigation does not authorize removal, noindexing or redirection. This diagram is not an XML sitemap replacement.

## Page contracts

Keyword phrases are hypotheses unless `SAUDI-KEYWORD-STRATEGY.md` identifies historical first-party evidence. Titles below are editorial proposals for later review, not modifications to protected metadata.

| URL and status | Purpose and search intent | Primary ownership / title direction | Required unique substance | Main onward route |
| --- | --- | --- | --- | --- |
| `/` — prototype now | National consultancy discovery and evaluation | Saudi SEO consultant; “SEO Consultant for Saudi Businesses \| Fazil Digital” | Clear specialization, direct relationship, three service pillars, Saudi priorities, methodology, honest proof, FAQ and enquiry | Services, city pages and SEO review |
| `/services/seo/` — retain, rebuild later | Evaluate a complete SEO engagement | SEO services Saudi Arabia; “SEO Services in Saudi Arabia \| Fazil Digital” | Scope, audit outputs, research, implementation responsibility, content coordination, measurement, access and scoping factors | Three specialist scopes, relevant city, contact |
| `/services/technical-seo/` — planned only | Buy a technical diagnosis and implementation scope | Technical SEO consultant / audit Saudi Arabia | Crawl/render/index issues, canonical analysis, architecture, performance, prioritization, validation and developer collaboration | SEO overview, technical guides, review |
| `/services/local-seo/` — planned only | Improve discovery for eligible real-world operations | Local SEO services Saudi Arabia | Business Profile eligibility, information accuracy, categories, reviews, service areas and actual business locations; limits of local visibility | Relevant city SEO, practical local guide, review |
| `/services/content-marketing/` — planned only | Build original content that supports organic demand | SEO content strategy Saudi Arabia | Research, intent map, original evidence, editorial briefs, subject expertise, native Arabic review and distribution; no broad social-management pitch | Content guides, SEO overview, review |
| `/riyadh/seo/` — preserve, rebuild at same URL | Evaluate SEO help for a business serving Riyadh | SEO services / consultant Riyadh | Actual buyer and sector research, language needs, relevant query examples, local delivery process, accurate service coverage, genuine proof when available | Relevant services, Riyadh reading and review |
| `/jeddah/seo/` — preserve, rebuild at same URL | Evaluate SEO help for a business serving Jeddah | SEO services / consultant Jeddah | Distinct customer journeys and competition supported by research; real operations and content examples; no interchangeable city boilerplate | Relevant services, Jeddah reading and review |
| `/dammam/seo/` — preserve, rebuild at same URL | Evaluate Dammam local and B2B SEO help | SEO services Dammam | Separate local discovery from supplier research, verify technical terminology and intended buyers, map actual language needs | Relevant services, Eastern Province reading and review |
| `/about/` — preserve | Person and brand trust | Mohammad Fazil | Verifiable background, direct responsibilities, genuine professional links and approach; no invented certifications or tenure | Services, evidence, contact |
| `/case-studies/` — preserve | Evaluate documented delivery and proof | Fazil Digital project work | Distinguish named, approved scope from verified outcomes; include source, period, baseline, metric definitions and permission for any results | Relevant project note, service and contact |
| `/blog/` — preserve | Learn and find useful guidance | Saudi SEO insights, topic browsing | Intent-led editorial categories, real author and dates, useful summaries and a clear path from guide to relevant service | Relevant article and service |
| `/contact/` — preserve | Start a scoped review | Fazil Digital contact / SEO review | Simple, labelled fields, actual contact options, honest submission or external message handoff, privacy link | Review process and confirmation appropriate to actual transport |

Services are sibling URLs under `/services/`; their indentation in the hierarchy expresses conceptual relationships, not a proposal to change their paths. Keep `/services/seo/` as the overview, not a new `/saudi-arabia/seo/` duplicate.

## Navigation and Phase 1 link behavior

Desktop and mobile use the requested labels: Home, SEO Services, Locations, Insights, About and Contact. Request an SEO Review is the primary action. In the implemented prototype, SEO Services and Locations target the visible `#services` and `#locations` sections; Insights targets `#insights`; Contact and review actions target the functional `#review` form. About links to the current `/about/`. Market links lead to the three existing city SEO pages. The existing `/services/seo/` remains a valid onward route.

The homepage insights section contains three original inline notes: “Arabic SEO starts before translation”, “Local visibility starts with real signals”, and “Give every search a useful destination”. Native `details` controls reveal each complete note on the same page. They do not create new blog URLs, publication dates or article-page ownership. The existing blog archive remains linked separately. This provides relevant Saudi SEO content while broader legacy Saudi market guides remain preserved pending factual review.

Do not link new service cards to `/services/technical-seo/`, `/services/local-seo/` or `/services/content-marketing/` before those pages exist. Each card can expose a short scope and route to the SEO review or existing SEO overview. Phase 2 replaces those actions with the planned specialist routes after their content and metadata are ready. Internal pages intentionally keep their legacy design and broad copy in this phase; this is a known preview boundary, not a complete-site repositioning claim.

## Internal linking model

| Source | Destination | Useful anchor and rationale |
| --- | --- | --- |
| Homepage service section | SEO overview; specialist scopes once published | Describe the service rather than generic “learn more”; show the integrated offer |
| Homepage market section | Riyadh, Jeddah, Dammam SEO | “SEO in Riyadh” and equivalent natural anchors; Riyadh gets visual priority |
| SEO overview | Each specialist scope and three city owners | Explain which problem each link solves; no city keyword list stuffed into paragraphs |
| Specialist service | SEO overview, related guide and applicable city pages | Describe national service depth; city context belongs on city page |
| City SEO | Relevant specialist scope, related city guide and contact | Make an intent-specific path from local need to scope and enquiry |
| Informational article | One primary relevant service and a small number of useful related guides | Support the reader's next step; preserve editorial intent |
| Project note | Only the substantiated relevant services and contact | Evidence supports service evaluation; no invented result or irrelevant city label |
| About | Services, documented work and contact | Connect the real practitioner to actual offer and evidence |
| Footer | Core commercial routes, About, Contact, privacy | A concise navigational layer rather than all generated combinations |

Use crawlable HTML links and descriptive link text. Google's guidance recommends making pages discoverable through crawlable links and using language that readers use. [Google Search Essentials](https://developers.google.com/search/docs/essentials)

## Cannibalization controls

1. The homepage owns the national consultant relationship; the SEO overview owns complete service scope. Their titles, opening copy and internal anchors must distinguish those jobs. Monitor actual queries before assuming semantic overlap is harmful.
2. Each retained city SEO URL owns its city-specific commercial service intent. Do not create `/seo-riyadh/`, `/locations/riyadh/seo/`, city consultant synonyms or new local/technical pages for every city.
3. `/locations/dammam/` currently overlaps with `/dammam/seo/` in the historical register. Keep it available and maintain a contextual link to the intended SEO owner. Determine its remaining hub role or a truly relevant consolidation only after current queries, clicks, backlinks and conversions are reviewed. Riyadh and Jeddah hubs require the same evidence discipline.
4. A Jeddah guide must answer informational questions and point to `/jeddah/seo/`; it should not repeat the city service page's sales copy and primary title. The existing Jeddah article needs a future review of its commercial title, generalized claims and technical statements.
5. Local SEO, technical SEO and content strategy are distinct workstreams. Do not duplicate each FAQ, introduction or deliverable list across their future pages. Each owns a different problem and result artifact.
6. Keep current valuable UAE and paid-media URLs while evidence is reviewed. A Saudi-only commercial navigation can coexist with protected legacy articles. Do not redirect unrelated paid-media content to the new SEO homepage merely to match the new brand focus.
7. Raw article and `.md` representations are alternate formats of the same article, not separate keyword owners. Their index controls and canonical linkage require technical review; do not create additional sitemap entries to target them.

Google describes doorway abuse as pages built for similar queries that funnel users onward and warns against scaled content without useful original value. Avoiding the old automatic matrix is a content-quality decision; it is not a diagnosis that every existing location page is spam. [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies)

## Localization and entity model

Keep Phase 1 English-only. For future Arabic pages, decide which audience needs a localized page, research its intent independently, engage a native editor, implement RTL and Arabic typography, and test fields and line wrapping. Add reciprocal `hreflang` annotations only for actual equivalent published pages; a city hub is not an alternate translation of the homepage. Use self-referential canonicals on genuine localized variants. [Google localized-version guidance](https://developers.google.com/search/docs/specialty/international/localized-versions)

The business serves Saudi companies; that does not imply a staffed office in Riyadh, Jeddah or Dammam. Homepage entity data may describe the real brand, person and area served without manufacturing a postal address or ratings. City landing pages should describe service coverage rather than an office. Google Business Profile guidance requires accurate real-world representation and restricts virtual-office listings. [Google business representation guidelines](https://support.google.com/business/answer/3038177)

## Publication gates and decisions

Phase 2 begins only after homepage review. Before publishing new internal pages: approve each intent contract; verify contact and delivery details; obtain native Arabic capability and review arrangements if offered; secure project publication permission and source reports before claims; refresh GSC and backlink evidence; and select a single sitemap authority with consistent canonical slash and host behavior. Migration decisions remain in `SEO-MIGRATION-PLAN.md` and must not be inferred from this proposed hierarchy.

No new URL is justified solely because a keyword tool lists a variation. A new page needs a distinct reader job, enough original useful substance, a real service or editorial purpose, and an internal linking role. Existing SEO reports and case registers remain preserved history rather than proof of present performance.
