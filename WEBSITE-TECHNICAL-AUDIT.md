# Existing website technical audit

Audit date: 6 November 2026. Baseline: `main` commit `833d3820ede59d9f96df12551f12d43e1695a363`. Working branch: `revamp/saudi-seo-organic`.

This is a repository audit, not a verified production crawl, field performance report, security certification or live Search Console assessment. Findings describe the baseline unless explicitly identified as Phase 1 work. No existing routes, redirects, infrastructure or tracking were changed by this audit.

## Repository and route inventory

The application is Next.js 16.3.3 App Router, React 19.2.4, TypeScript with strict mode, Tailwind 4 and ESLint 9. Its runtime dependencies are limited to Next.js, React and React DOM. `package-lock.json` pins installation. `next-sitemap` is a development dependency invoked by `postbuild`.

| Surface | Source | Existing extent |
| --- | --- | --- |
| Static content pages | `src/app/**/page.tsx` | Home, about, services, locations, case studies, blog, portfolio, methodology, markets, contact, privacy policy, Dubai expert: 12 distinct static URLs |
| City/service pages | `src/app/[location]/[service]/page.tsx`, `src/data/locations.ts`, `src/data/services.ts` | Six cities × seven services = 42 combinations |
| Explicit city override | `src/app/sharjah/digital-marketing/page.tsx` | Shadows one generated combination; not a 43rd combination |
| Service pages | `src/app/services/[slug]/page.tsx` | Seven service slugs |
| City hubs | `src/app/locations/[city]/page.tsx` | Six city slugs |
| Article pages | `src/data/blog.ts` and four imported cluster files | 41 distinct slugs; all four clusters are included in the exported array |
| Case-study details | `src/app/case-studies/[slug]/page.tsx` | Seven detail slugs, including Green Bags UAE |
| Alternate article representations | `src/app/blog/raw/[slug]/route.ts`, `next.config.ts` | `/blog/raw/{slug}` and rewritten `/blog/{slug}.md` for each article |
| Discovery assets | `src/app/sitemap.ts`, `public/sitemap.xml`, `public/robots.txt`, `public/llms*.txt` | Multiple sitemap authorities and machine-readable content |

The source supports **115 distinct canonical content URLs**, before trailing-slash/host variants, article alternate representations, redirect sources and static assets. This is a route inventory, not an indexation count. A comprehensive per-URL disposition belongs to `SEO-MIGRATION-PLAN.md`.

The old PRD in `_docs/fazil-prd.docx` / `_docs/docx_text.txt` deliberately requested broad UAE/GCC service multiplication. The new brief supersedes that strategy. The existing articles, portfolio and commercially unrelated routes remain preserved because strategic relevance alone does not establish that a URL has no search or backlink value.

## Findings by priority

### High: unsupported claims remain on legacy surfaces

`src/app/sharjah/digital-marketing/page.tsx` still declares `Rank Top 3 guaranteed.` in its metadata description and `Top 3 Rankings` in its title. `public/llms.txt` calls `+180% organic growth, 3.2x ROAS` verifiable metrics. These conflict with `CLAIMS-EVIDENCE-REGISTER.md` and `CASE-STUDY-EVIDENCE-REGISTER.md`, which explicitly state that the source evidence is unavailable.

The registers' August statement that unsupported claims were removed must not be taken as proof that every remaining surface is clean. Retain the URLs, log these exceptions, and correct their claims in a separately reviewed content change. None of these claims should enter the new homepage. Named portfolio records and a publicly reachable business do not establish performance attribution or publication permission.

### High: city/service schema implies unsupported business premises

`src/app/[location]/[service]/page.tsx` emits `LocalBusiness` / `ProfessionalService` with a `PostalAddress` in every target city. The data model describes markets, not documented offices. A city served is not evidence of a physical presence. `src/app/locations/[city]/page.tsx` also uses `LocalBusiness` for the generic city hub.

Future internal-page work should separate service coverage (`areaServed`) from confirmed business location and use genuine entity facts. The new homepage should use Organization, Person and Service relationships without invented addresses, ratings, credentials or results.

### High: three competing sitemap paths and inconsistent coverage

`src/app/sitemap.ts` defines `/sitemap.xml`, `public/sitemap.xml` also occupies that URL, and `package.json` runs `next-sitemap` after the build. The handwritten App Router list contains six anonymous case studies but omits the seventh detail, `/case-studies/green-bags-uae/`. The tracked public XML uses slashless locations while the App Router version emits trailing slashes. Most static and generated entries receive `new Date()` every execution, so `lastModified` is not an editorial change timestamp.

This is a source-level route/output collision risk; the exact server/build response needs verification with the installed Next.js version. Select one sitemap authority in a future approved SEO configuration pass, derive all case slugs from one registry, retain only canonical URLs and use real modification dates. Phase 1 must not silently replace production sitemap behavior. If a local build rewrites the tracked public sitemap through `postbuild`, review and restore that generated change before committing the homepage.

### High: raw article indexing protection is not implemented as documented

`next-sitemap.config.js` excludes `/blog/raw/*`, but `src/app/blog/raw/[slug]/route.ts` only sets `Content-Type: text/markdown`. It has no `X-Robots-Tag: noindex` and no HTTP `Link` canonical relationship to the HTML article. `/blog/{slug}.md` rewrites to the same handler. The old SEO register labels the route family NOINDEX, which is an intended policy rather than a response header visible in this source.

Exclusion from XML alone is not an indexation directive. Keep the representations available; a later approved change should implement and test headers on both raw and rewritten paths. The Markdown serialization also strips all HTML tags without preserving proper heading/list/table structure and interpolates unescaped front matter values, reducing machine readability.

### Medium: country targeting leaks through inherited metadata

`src/app/layout.tsx` defaults to Dubai/general digital services. Its `alternates.languages` maps sitewide `en-ae` and `en-sa` to the Dubai and Riyadh city hubs, which are not equivalent regional versions of every page. The English document does not currently have an Arabic equivalent. Generic commercial pages often manually include `Mohammad Fazil` in their titles while the root template appends it again. Generated city/service titles manually include `Fazil Digital` and then inherit the person suffix, adding unnecessary length.

The Phase 1 homepage should explicitly override its own title, description, canonical, social metadata and inherited language alternatives. Rewriting all internal metadata is outside this phase. Future localization needs genuine page equivalents and independent Arabic editorial work before hreflang is published.

### Medium: missing social and schema image assets

`src/app/blog/[slug]/page.tsx` and the city/service template refer to `/og-image.jpg`, which is absent from the tracked `public/` assets at baseline. The old homepage also referred to `/images/mohammad-fazil.jpg`, likewise absent. Do not treat these as valid proof or preview images. Create an approved social asset later or omit missing references. Preserve existing icon assets.

### Medium: generated pages share content and service intent

`src/data/moneyPageLayouts.ts` pseudo-randomly chooses hero, value and process components and section order from the URL seed. Different presentation does not create unique intent or location expertise. All seven services are generated for every city. `specializedContent.ts` improves Riyadh and Dammam SEO with dedicated copy, but other combinations draw heavily on shared service descriptions and FAQs.

`MarketInsightBlock` suppresses its entire section when no `marketContext` exists, so less-developed city records can produce shorter templates. The combination template concatenates specialized HTML with `location.marketContext` without filtering `undefined`; Dammam has no generic market context, creating a possible literal `undefined` tail in the rendered HTML. Verify that page during the future internal rebuild.

Retain the Saudi SEO URLs and any historically performing assets. Replace automatic combinatorial publication with a reviewed URL manifest and purpose-specific briefs in Phase 2, only after evidence review and approved mappings.

### Medium: legacy accessibility and motion debt

* `src/components/Navbar.tsx`: the desktop services menu is shown only with `group-hover`; the button does not toggle an accessible expanded state. Keyboard users cannot reliably discover the submenu. The mobile trigger removes its outline and lacks `aria-expanded` / `aria-controls`.
* `src/components/Accordion.tsx`: buttons expose `aria-expanded`, but have no `aria-controls`; visually collapsed answer content remains in the accessibility tree rather than using native disclosure semantics or a matching hidden state.
* `src/app/portfolio/page.tsx`: the lightbox is a clickable `div` with no dialog semantics, Escape handling, focus trapping or focus restoration. Several image tiles depend on mouse `onClick` rather than native controls.
* `src/app/template.tsx` at baseline starts all page content transparent until an effect and a 150ms timer complete. This makes reading depend on JavaScript hydration and adds artificial perceived latency. The progress strip is decorative rather than tied to actual loading.
* `src/components/visuals/GrowthFlywheel.tsx` spins an element indefinitely. The baseline global stylesheet has no reduced-motion override for this or the template/button motion.
* `MobileStickyCTA.tsx` and `FloatingWhatsApp.tsx` add separate fixed conversion controls on mobile. Verify they do not cover article text, form controls or one another at narrow heights.

The homepage prototype introduces its own native disclosures, visible focus states, reduced-motion treatment and page chrome. These fixes must be verified against the actual rendered homepage; their presence in a design document is not a test result. The legacy internal controls remain a future remediation list.

### Medium: form status and conversion semantics

`src/components/ContactForm.tsx` has browser validation, input labels, a honeypot and encoded WhatsApp text. It sends no server request and stores no submission. However `window.open()` with `noopener,noreferrer` does not establish that a window opened or a message was sent, and its catch does not detect every popup block. It sets a state called success and reports “WhatsApp opened” unconditionally after that call.

`Analytics.tsx` maps the custom `form_submit` event to `contact_form_submit` and `generate_lead` with `method: whatsapp`. These measure continuation intent, not confirmed sent messages or qualified leads. Preserve the existing integration, distinguish these events from business outcomes in reporting, and do not claim backend submission success in the homepage. The new form's explicit prepare → review → send boundary is appropriate for this phase.

### Medium: untyped component contracts weaken safe maintenance

`src/data/moneyPageLayouts.ts` uses `any` for block props and an unused `baseData` parameter. `src/components/money-pages/BlockRenderer.tsx` uses `React.FC<any>` and `commonData: any`, so unknown block props and missing fields evade TypeScript. Unknown block types only log a warning and silently omit content. Use a discriminated block union and explicit shared page data when those templates are rebuilt, rather than broad lint suppression.

### Low to medium: asset and rendering cost

The seven portfolio PNGs range from roughly 513KB to 784KB each; the logo is approximately 136KB. Existing `next/image` usage generally supplies dimensions or fixed fill containers, and the image config allows AVIF/WebP, which are useful foundations. Large original assets still increase repository size and processing work. The portfolio's numerous remote sources add availability and cache dependencies. Its entire page is a client component to support lightbox state, importing substantial static project data into the client boundary.

At baseline, the root layout adds a render-blocking Fontshare stylesheet for Clash Display and Satoshi on every route. Phase 1 moves that stylesheet into the legacy-only `SiteChrome` path and dynamically imports the old chrome, while the homepage uses local WOFF2 fonts. Browser verification should confirm the homepage does not request the old font stylesheet. Most marketing content can remain server rendered; isolate menus, form state and intersection observers rather than making the whole homepage a client component.

### Low: configuration and repository hygiene

`next.config.ts` has duplicate remote image hosts and mixed-case entries. Multiple components embed the same WhatsApp number. The source includes unused starter SVG assets and one-off emoji/font replacement scripts. Their removal is optional cleanup, not Phase 1 work. There is no existing browser test script or dedicated type-check script in `package.json`; TypeScript itself is present. `npm run build` invokes a mutation-producing sitemap postbuild, so verification commands should disclose that behavior.

## Analytics, redirects and infrastructure preservation

`src/components/Analytics.tsx` loads one GA4 tag only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is configured. Its custom event parameters do not include form names, emails, phone numbers or message text. `ANALYTICS-SETUP.md` documents the historical production setup and deferred GA4 key-event configuration; this audit does not verify that account state today. Production environment variables, consent requirements and Search Console configuration were not changed.

`next.config.ts` currently preserves six permanent redirects (`/en-US`, the old Dubai SEO-cost article, Saudi Snapchat benchmark alias, Dubai social-media alias and two former case-study aliases), plus the Markdown rewrite. The broad `/blog/seo-cost-dubai` → `/blog/` mapping deserves later intent review but must not be silently replaced. The existing robots file's `/_next/` disallow should be reviewed for rendering-resource accessibility during the SEO configuration pass. No production robots changes were made.

## Dependency and verification boundaries

The standard `npm` command was absent from this shell's PATH at discovery. Node v22.22.0 is available, and the coordinator obtained npm 10.9.4 in a task-specific tools directory. A lockfile-based install and the bundled `node_modules/next/dist/docs/` guidance are required before implementation verification. This audit did not change dependencies or install additional application packages.

Do not infer clean build, lint, browser accessibility, security or Core Web Vitals results from this source review. Actual commands, rendered layout checks and screenshots belong in `REVAMP-VERIFICATION-REPORT.md`. Field CWV, current GSC page/query exports, backlinks, crawling logs and verified client evidence remain unavailable to this audit.

## Recommended order after homepage review

1. Approve the homepage and migration plan; keep production unchanged in this phase.
2. Resolve unsupported legacy claims and unsupported local-address schema while retaining valuable URLs.
3. Approve a single sitemap authority, raw representation headers and canonical/hreflang rules; verify exact HTTP behavior.
4. Rebuild a small reviewed set of Saudi service and city pages with typed data contracts and unique intent.
5. Repair inherited keyboard/motion/lightbox debt; measure actual LCP, INP and CLS on the deployment and field data.
6. Monitor page/query ownership, indexation, valid organic continuation events and qualified leads against a fresh dated baseline before deciding further consolidations or retirements.
