# Final release browser verification

Run: 2026-11-11T05:07:25.696Z. Local production target: http://127.0.0.1:3006. Installed Chromium via Playwright, headless. 37 checks passed; 14 failed.

## Coverage

Twenty rebuilt/new routes (homepage, four services, three Saudi city pages, About, Contact, Case Studies, Blog and all eight original guides), plus the historically important Snapchat article, at 320, 390, 768, 1024 and 1440 pixels. Expected coverage is 42 desktop/mobile viewport screenshots plus two homepage full-page captures in previews/release-final; actual captures are listed below. All 115 original HTML URLs are checked separately.

| Check | Result |
| --- | --- |
| Page, metadata and semantics: / | FAIL |
| Five responsive widths and screenshots: / | FAIL |
| Page, metadata and semantics: /services/seo/ | PASS |
| Five responsive widths and screenshots: /services/seo/ | FAIL |
| Page, metadata and semantics: /services/local-seo/ | PASS |
| Five responsive widths and screenshots: /services/local-seo/ | FAIL |
| Page, metadata and semantics: /services/technical-seo/ | PASS |
| Five responsive widths and screenshots: /services/technical-seo/ | FAIL |
| Page, metadata and semantics: /services/content-marketing/ | PASS |
| Five responsive widths and screenshots: /services/content-marketing/ | FAIL |
| Page, metadata and semantics: /riyadh/seo/ | PASS |
| Five responsive widths and screenshots: /riyadh/seo/ | FAIL |
| Page, metadata and semantics: /jeddah/seo/ | PASS |
| Five responsive widths and screenshots: /jeddah/seo/ | FAIL |
| Page, metadata and semantics: /dammam/seo/ | PASS |
| Five responsive widths and screenshots: /dammam/seo/ | FAIL |
| Page, metadata and semantics: /about/ | PASS |
| Five responsive widths and screenshots: /about/ | PASS |
| Page, metadata and semantics: /contact/ | PASS |
| Five responsive widths and screenshots: /contact/ | FAIL |
| Page, metadata and semantics: /case-studies/ | PASS |
| Five responsive widths and screenshots: /case-studies/ | FAIL |
| Page, metadata and semantics: /blog/ | PASS |
| Five responsive widths and screenshots: /blog/ | PASS |
| Page, metadata and semantics: /digital-marketing-expert-calicut/ | PASS |
| Five responsive widths and screenshots: /digital-marketing-expert-calicut/ | PASS |
| Page, metadata and semantics: /blog/seo-services-saudi-arabia-guide/ | PASS |
| Five responsive widths and screenshots: /blog/seo-services-saudi-arabia-guide/ | PASS |
| Page, metadata and semantics: /blog/seo-cost-saudi-arabia-scope-guide/ | PASS |
| Five responsive widths and screenshots: /blog/seo-cost-saudi-arabia-scope-guide/ | PASS |
| Page, metadata and semantics: /blog/riyadh-seo-strategy-guide/ | PASS |
| Five responsive widths and screenshots: /blog/riyadh-seo-strategy-guide/ | PASS |
| Page, metadata and semantics: /blog/arabic-vs-english-seo-saudi-arabia/ | PASS |
| Five responsive widths and screenshots: /blog/arabic-vs-english-seo-saudi-arabia/ | PASS |
| Page, metadata and semantics: /blog/local-seo-saudi-businesses-guide/ | PASS |
| Five responsive widths and screenshots: /blog/local-seo-saudi-businesses-guide/ | PASS |
| Page, metadata and semantics: /blog/technical-seo-audit-saudi-websites/ | PASS |
| Five responsive widths and screenshots: /blog/technical-seo-audit-saudi-websites/ | PASS |
| Page, metadata and semantics: /blog/organic-content-strategy-saudi-businesses/ | PASS |
| Five responsive widths and screenshots: /blog/organic-content-strategy-saudi-businesses/ | PASS |
| Page, metadata and semantics: /blog/google-search-console-seo-measurement-guide/ | PASS |
| Five responsive widths and screenshots: /blog/google-search-console-seo-measurement-guide/ | PASS |
| Page, metadata and semantics: /blog/snapchat-ads-cpa-benchmarks-saudi-arabia-2026/ | PASS |
| Five responsive widths and screenshots: /blog/snapchat-ads-cpa-benchmarks-saudi-arabia-2026/ | PASS |
| Internal navigation targets respond without missing pages | PASS |
| All 115 original HTML URLs remain reachable | PASS |
| Homepage guides and commercial journeys navigate to their destinations | FAIL |
| Mobile menu, keyboard escape, real page navigation and FAQ | PASS |
| Honest contact draft, synthetic analytics mappings and data boundaries | FAIL |
| Contact and reading remain useful without JavaScript | PASS |
| Reduced motion and no runtime/application resource errors | FAIL |

## Failures

- Page, metadata and semantics: /: Visible text contrast samples meet WCAG AA ratios
+ actual - expected

+ [
+   {
+     background: [
+       248,
+       247,
+       242
+     ],
+     color: 'rgb(210, 218, 203)',
+     ratio: 1.34,
+     text: 'Prepare a message with your website and goals. Nothing is sent until you choose to open Wh'
+   },
+   {
+     background: [
+       248,
+       247,
+       242
+     ],
+     color: 'rgb(210, 218, 203)',
+     ratio: 1.34,
+     text: 'Prepare and copy your message, then paste it into WhatsApp and send it when you’re ready. '
+   }
+ ]
- []

- Five responsive widths and screenshots: /: / horizontal overflow
+ actual - expected

+ [
+   '320px: 384/384',
+   '390px: 454/454',
+   '768px: 794/794',
+   '1024px: 1032/1032'
+ ]
- []

- Five responsive widths and screenshots: /services/seo/: /services/seo/ horizontal overflow
+ actual - expected

+ [
+   '320px: 362/362',
+   '390px: 432/432',
+   '768px: 772/772'
+ ]
- []

- Five responsive widths and screenshots: /services/local-seo/: /services/local-seo/ horizontal overflow
+ actual - expected

+ [
+   '320px: 376/376',
+   '390px: 446/446',
+   '768px: 787/787'
+ ]
- []

- Five responsive widths and screenshots: /services/technical-seo/: /services/technical-seo/ horizontal overflow
+ actual - expected

+ [
+   '320px: 372/372',
+   '390px: 442/442',
+   '768px: 783/783'
+ ]
- []

- Five responsive widths and screenshots: /services/content-marketing/: /services/content-marketing/ horizontal overflow
+ actual - expected

+ [
+   '320px: 370/370',
+   '390px: 440/440',
+   '768px: 780/780'
+ ]
- []

- Five responsive widths and screenshots: /riyadh/seo/: /riyadh/seo/ horizontal overflow
+ actual - expected

+ [
+   '320px: 383/383',
+   '390px: 453/453',
+   '768px: 793/793',
+   '1024px: 1031/1031'
+ ]
- []

- Five responsive widths and screenshots: /jeddah/seo/: /jeddah/seo/ horizontal overflow
+ actual - expected

+ [
+   '320px: 401/401',
+   '390px: 471/471',
+   '768px: 811/811',
+   '1024px: 1049/1049'
+ ]
- []

- Five responsive widths and screenshots: /dammam/seo/: /dammam/seo/ horizontal overflow
+ actual - expected

+ [
+   '320px: 401/401',
+   '390px: 471/471',
+   '768px: 811/811',
+   '1024px: 1049/1049'
+ ]
- []

- Five responsive widths and screenshots: /contact/: /contact/ horizontal overflow
+ actual - expected

+ [
+   '320px: 397/397',
+   '390px: 467/467',
+   '768px: 807/807',
+   '1024px: 1045/1045'
+ ]
- []

- Five responsive widths and screenshots: /case-studies/: /case-studies/ horizontal overflow
+ actual - expected

+ [
+   '320px: 384/384',
+   '390px: 454/454',
+   '768px: 794/794',
+   '1024px: 1032/1032'
+ ]
- []

- Homepage guides and commercial journeys navigate to their destinations: Homepage link missing: /riyadh/seo/
- Honest contact draft, synthetic analytics mappings and data boundaries: Build must enable G-TESTONLY for an intercepted synthetic mapping test
- Reduced motion and no runtime/application resource errors: locator.evaluate: Timeout 30000ms exceeded.
Call log:
[2m  - waiting for locator('.fd-hero-copy')[22m


## Evidence

- Complete results, responsive dimensions, metadata and resource observations: reports/release-final-browser-results.json.
- Link responses: reports/release-final-link-checks.json.
- Original URL responses: reports/release-final-original-url-checks.json.
- Synthetic analytics mapping: reports/release-final-synthetic-analytics.json.

## Screenshots

- [/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/home-mobile.png)
- [/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/home-desktop.png)
- [/services/seo/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/services-seo-mobile.png)
- [/services/seo/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/services-seo-desktop.png)
- [/services/local-seo/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/services-local-seo-mobile.png)
- [/services/local-seo/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/services-local-seo-desktop.png)
- [/services/technical-seo/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/services-technical-seo-mobile.png)
- [/services/technical-seo/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/services-technical-seo-desktop.png)
- [/services/content-marketing/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/services-content-marketing-mobile.png)
- [/services/content-marketing/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/services-content-marketing-desktop.png)
- [/riyadh/seo/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/riyadh-seo-mobile.png)
- [/riyadh/seo/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/riyadh-seo-desktop.png)
- [/jeddah/seo/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/jeddah-seo-mobile.png)
- [/jeddah/seo/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/jeddah-seo-desktop.png)
- [/dammam/seo/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/dammam-seo-mobile.png)
- [/dammam/seo/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/dammam-seo-desktop.png)
- [/about/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/about-mobile.png)
- [/about/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/about-desktop.png)
- [/contact/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/contact-mobile.png)
- [/contact/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/contact-desktop.png)
- [/case-studies/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/case-studies-mobile.png)
- [/case-studies/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/case-studies-desktop.png)
- [/blog/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/blog-mobile.png)
- [/blog/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/blog-desktop.png)
- [/digital-marketing-expert-calicut/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/digital-marketing-expert-calicut-mobile.png)
- [/digital-marketing-expert-calicut/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/digital-marketing-expert-calicut-desktop.png)
- [/blog/seo-services-saudi-arabia-guide/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/blog-seo-services-saudi-arabia-guide-mobile.png)
- [/blog/seo-services-saudi-arabia-guide/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/blog-seo-services-saudi-arabia-guide-desktop.png)
- [/blog/seo-cost-saudi-arabia-scope-guide/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/blog-seo-cost-saudi-arabia-scope-guide-mobile.png)
- [/blog/seo-cost-saudi-arabia-scope-guide/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/blog-seo-cost-saudi-arabia-scope-guide-desktop.png)
- [/blog/riyadh-seo-strategy-guide/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/blog-riyadh-seo-strategy-guide-mobile.png)
- [/blog/riyadh-seo-strategy-guide/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/blog-riyadh-seo-strategy-guide-desktop.png)
- [/blog/arabic-vs-english-seo-saudi-arabia/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/blog-arabic-vs-english-seo-saudi-arabia-mobile.png)
- [/blog/arabic-vs-english-seo-saudi-arabia/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/blog-arabic-vs-english-seo-saudi-arabia-desktop.png)
- [/blog/local-seo-saudi-businesses-guide/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/blog-local-seo-saudi-businesses-guide-mobile.png)
- [/blog/local-seo-saudi-businesses-guide/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/blog-local-seo-saudi-businesses-guide-desktop.png)
- [/blog/technical-seo-audit-saudi-websites/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/blog-technical-seo-audit-saudi-websites-mobile.png)
- [/blog/technical-seo-audit-saudi-websites/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/blog-technical-seo-audit-saudi-websites-desktop.png)
- [/blog/organic-content-strategy-saudi-businesses/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/blog-organic-content-strategy-saudi-businesses-mobile.png)
- [/blog/organic-content-strategy-saudi-businesses/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/blog-organic-content-strategy-saudi-businesses-desktop.png)
- [/blog/google-search-console-seo-measurement-guide/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/blog-google-search-console-seo-measurement-guide-mobile.png)
- [/blog/google-search-console-seo-measurement-guide/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/blog-google-search-console-seo-measurement-guide-desktop.png)
- [/blog/snapchat-ads-cpa-benchmarks-saudi-arabia-2026/ at 390px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/blog-snapchat-ads-cpa-benchmarks-saudi-arabia-2026-mobile.png)
- [/blog/snapchat-ads-cpa-benchmarks-saudi-arabia-2026/ at 1440px](previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z/blog-snapchat-ads-cpa-benchmarks-saudi-arabia-2026-desktop.png)

## Interpretation and limits

Analytics uses the synthetic G-TESTONLY build configuration. All Google and WhatsApp requests are intercepted; the outbound review link click is prevented from opening another page. These checks validate local intent and click mappings, not delivery to a GA account, a sent WhatsApp message or a qualified lead. The form stores no backend submission.

Local LCP/CLS/resource observations are one synthetic navigation under a local server; they are not field Core Web Vitals, an INP assessment or a Lighthouse score. Keyboard, semantics, native form validation, reduced motion and no-JavaScript checks are useful coverage, not a WCAG certification. Compilation, full lint, dependency audit and technical sitemap/redirect assertions are separately owned by the technical engineer. Screenshots require visual inspection before design approval. No production deployment, merge or external enquiry is performed.

## Build and comparison provenance

Local build ID: `-AocdyqnX2cYXc7-Zfuiz`. Capture run: 2026-11-11T05-05-47-440Z. Actual screenshot folder: `previews/calicut-final-broad/verified-2026-11-11T05-05-47-440Z`. See [before/after inventory](RELEASE-SCREENSHOT-INVENTORY.md). Phase 2 files were preserved and not overwritten.
