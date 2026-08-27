# Fazil Digital SEO Changelog

## 2026-08-27 — Baseline technical SEO and freshness pass

- **URLs:** all blog articles
- **Change:** Blog metadata now uses each article's curated excerpt and relies on the global title template only once.
- **Reason:** The previous description was cut from raw HTML before tags were stripped, and page titles could receive the brand suffix twice.
- **Search Console evidence:** Blog pages account for current organic visibility; the Snapchat benchmark article has 832 impressions, 1 click, 0.1% CTR, and average position 6.1 over the last 3 months.
- **Keyword targeted:** Article-specific primary keywords.
- **Previous state:** Raw-content description; manually appended brand suffix.
- **New state:** Curated excerpt; single global brand suffix.
- **Expected effect:** Clearer snippets and less title duplication after recrawl.
- **Deployment commit/SHA:** Not available. This workspace has no `.git` metadata.

- **URL:** `/blog/snapchat-ads-cpa-benchmarks-saudi-arabia-2026/`
- **Change:** Retitled to `Snapchat Ads Benchmarks Saudi Arabia 2026: CPA, CPC & ROAS`; refreshed `lastModified`; corrected internal links pointing to obsolete slugs.
- **Reason:** High-impression, page-one result with 0.1% CTR needs closer alignment to the visible benchmark metrics and observed queries.
- **Search Console evidence:** 832 impressions, 1 click, 0.1% CTR, position 6.1; related queries include Saudi Snapchat CPA/CPC and food-industry benchmarks.
- **Keyword targeted:** Snapchat ads benchmarks Saudi Arabia 2026; Snapchat CPA, CPC, ROAS KSA.
- **Previous state:** `Snapchat Ads CPA Benchmarks Saudi Arabia 2026 [Data]`; multiple broken internal links.
- **New state:** Metric-led title and canonical internal links.
- **Expected effect:** Better search-result relevance and internal crawl path after recrawl.
- **Deployment commit/SHA:** Not available.

- **URLs:** all blog articles containing data tables
- **Change:** Confined wide tables to their content column with horizontal scrolling on narrow screens; corrected an invalid anchor underline declaration.
- **Reason:** Browser QA at 375px found a 473px document width caused by the five-column Snapchat benchmark table.
- **Search Console evidence:** Device-level data was not isolated in this session; the affected article is the site's highest-impression page in the current snapshot.
- **Keyword targeted:** N/A, mobile UX and Core Web Vitals support.
- **Previous state:** Wide tables expanded the whole document and created a horizontal page scrollbar.
- **New state:** Tables scroll within their own content area without widening the page.
- **Expected effect:** Better mobile readability and fewer accidental horizontal scrolls.
- **Deployment commit/SHA:** Not available.

- **URLs:** `/blog/raw/*`, `/sitemap.xml`, `/robots.txt`
- **Change:** Excluded raw Markdown article routes from generated sitemap and standardized the sitemap declaration on the `www` canonical host.
- **Reason:** Raw routes are alternate machine-readable representations, not independent indexable pages. Production currently exposes them with HTTP 200 and the generated sitemap listed at least one raw article URL.
- **Search Console evidence:** 26 alternate-canonical exclusions; mixed www/non-www URLs also appear in performance data.
- **Keyword targeted:** N/A, crawl/index hygiene.
- **Previous state:** Raw routes eligible for sitemap inclusion; robots sitemap used non-www host.
- **New state:** Raw routes excluded from generation; robots points to `https://www.fazildigital.com/sitemap.xml`.
- **Expected effect:** Cleaner crawl signals after deployment and sitemap recrawl.
- **Deployment commit/SHA:** Not available.

- **URLs:** homepage and `/digital-marketing-expert-dubai/`
- **Change:** Replaced expired Q2 2026 availability claims with evergreen availability copy.
- **Reason:** The visible offer was outdated in August 2026 and could reduce trust.
- **Search Console evidence:** `/digital-marketing-expert-dubai` has 57 impressions, 2 clicks, 3.5% CTR, position 17.0.
- **Keyword targeted:** Digital marketing expert Dubai (trust/CRO support).
- **Previous state:** `1 spot remaining for Q2 2026` / `accepting new clients for Q2 2026`.
- **New state:** `Ask about current project availability.`
- **Expected effect:** Accurate, lower-maintenance conversion copy.
- **Deployment commit/SHA:** Not available.

## 2026-08-27 — Conversion and indexation continuation

- Replaced the dead contact button with a validated WhatsApp enquiry workflow, honeypot, success/error feedback, and review-before-send explanation.
- Added a privacy policy matching the actual no-backend contact flow and current absence of analytics trackers.
- Added four permanent redirects only where obsolete URLs had verified equivalents.
- Added contextual location-hub links to dedicated city SEO pages after Search Console confirmed Dammam cannibalization.
- Replaced the unsupported AED 47,000 missed-lead claim with factual qualitative copy.
- Documented all 16 crawled-not-indexed examples and priority query mappings.
- Deployment commit/SHA: `129d3ba6ffbe025b6453a5d73e973b9923b787c7`.

## 2026-08-27 — Query ownership, SME usefulness and measurement foundation

- **URL:** `/dammam/seo/`
- **Change:** Added Dammam-specific title, description, H1, introduction, deliverables, market content and FAQs for local and B2B SEO. Added links to the Dammam hub, case study and contact journey.
- **Reason:** `seo services in dammam` had 87 impressions and zero clicks; most impressions were attributed to the broader `/locations/dammam` hub instead of this service page.
- **Target queries:** SEO services in Dammam; SEO company Dammam; Dammam SEO; local SEO Dammam.
- **Expected effect:** Clearer service-page ownership after Google recrawls both URLs. Rankings are not yet measurable.

- **URL:** `/locations/dammam/`
- **Change:** Repositioned the introduction and market section as a multi-service city hub and explicitly routed search-specific visitors to `/dammam/seo/`.
- **Reason:** Reduce intent duplication without removing a location page that already has visibility.

- **URL:** `/blog/digital-transformation-uae-sme-guide/`
- **Change:** Added practical definition, starting sequence, cost categories, workflows, build-vs-buy guidance, what not to automate and a 30/60/90-day roadmap. Removed the unsupported AED 10,000+ savings promise.
- **Reason:** Query `digital transformation for smes uae` has 101 impressions, zero clicks and average position around 41; current SERPs reward practical starting and cost guidance.

- **Sitewide:** Added an environment-controlled GA4 loader and non-PII events for form continuation, lead generation, WhatsApp, email and phone clicks. No measurement ID is committed or invented.
- **Governance:** Added `CLAIMS-EVIDENCE-REGISTER.md` and `SNAPCHAT-CONTENT-MAP.md`.

## 2026-08-27 — Riyadh SEO relevance and GA4 activation

- **URL:** `/riyadh/seo/`
- **Change:** Added Riyadh-specific metadata, H1, introduction, deliverables, Arabic/English search guidance, local SEO, B2B and sector strategy, measurement content and four focused FAQs.
- **Reason:** The page owns a clean query cluster but recorded 206 impressions, zero clicks, 0% CTR and average position 58.3. The two leading queries were `riyadh seo` (88 impressions) and `seo riyadh` (69).
- **SERP evidence:** Ranking pages consistently use dedicated Riyadh SEO-service positioning, local SEO, technical coverage, proof/case-study pathways, and Saudi-market relevance.
- **Internal links:** Added direct paths to the Riyadh city hub, Riyadh market guide and contact journey. Existing homepage, service overview, expert-page and article links were preserved.
- **Expected effect:** Stronger relevance and query alignment after recrawl; rankings are not yet measurable.

- **Analytics:** Confirmed Production environment configuration for `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-BEGJF6PL8R` in the existing Vercel project. No duplicate tag implementation was added.
- **Authorship:** Corrected blog structured data so `datePublished` uses the original publication date, `dateModified` uses the updated date, and the factual Mohammad Fazil Person/LinkedIn relationship is consistent.
- **Governance:** Added `SEO-CTR-OPPORTUNITIES.md` to control future metadata experiments.

## 2026-08-27 — Proof and case-study evidence pass

- Audited every published case study and added `CASE-STUDY-EVIDENCE-REGISTER.md`. No quantitative case-study result was classified as verified because the repository contains no supporting analytics, advertising, CRM, ranking, time-study or approval files.
- Published a conservative named Green Bags UAE project note using only the approved portfolio relationship, recorded service scope, repository visual and reachable public website. No traffic, lead, revenue, ranking or ROAS result was added.
- Added a direct portfolio-to-project discovery path and project-to-service links for SEO, paid advertising and digital marketing.
- Rechecked Search Console. The data window and totals remain unchanged, so all protected-page movement is still too early to judge. Added the `seo case studies dubai` evidence gap to the CTR register without changing metadata.
- Rechecked GA4 Admin. `generate_lead` remains visible in Realtime but has not populated the Admin recent-events table, so key-event configuration remains deferred.
