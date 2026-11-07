# Fazil Digital design system

The visual-refresh implementation is an editorial consultancy site for Saudi businesses, with Riyadh as the primary market. The source of implementation truth is `src/app/refresh.css`, alongside `home.css` and `site.css`. The existing product constraints in `PRODUCT.md` remain in force: direct work with Mohammad Fazil, honest service coverage, no invented clients, physical offices or outcomes, and privacy-safe enquiries. The new visual direction is described in `VISUAL-REFRESH-DIRECTION.md` and reviewed in `IMPECCABLE-VISUAL-CRITIQUE.md`.

## Color and typography

The refresh maps the homepage and shared site shell to paper `#f6f4ed`, forest `#193c30`, ink `#202b26`, sand `#c4a77b`, sage `#e5e9df`, and line `#d0d5c9`. Forest buttons remain the primary action; body text uses the ink and muted ink palette. The local Manrope variable font supplies navigation, body and now primary headings; Instrument Serif remains an expressive secondary voice, including the homepage hero's illustrative review note. The homepage H1 uses `clamp(48px, 5.4vw, 78px)` at desktop and `clamp(44px, 10vw, 62px)` at narrow widths. Internal hero headings use a separate restrained responsive scale. Body introductions use approximately 16px with generous line height. Do not override readable body copy with decorative type.

## Homepage and content rhythm

The homepage is a split editorial composition: service-focused headline and review CTA alongside an original architectural illustration, with a paper panel describing a possible review's scope. The panel is explicitly illustrative and is not a client result. The underlying service grid, city links, methodology, consultant introduction, insights, FAQs and form remain semantic and linkable. The first service card and evidence section use forest backgrounds; the remaining cards and sections create quieter contrast. Decorative geometry is replaced in the priority insight teasers by original editorial imagery.

## Commercial and supporting pages

Shared `PageHero` retains breadcrumbs, unique H1, intro and review action. Commercial pages may pass their existing deliverables to a labelled summary panel; its illustrative visual varies across technical, local/city and content pages. Long sections alternate paper and soft sage fields, and the content remains text-led. About, Blog and Contact use the shared hierarchy without inventing evidence. The design must not imply the conceptual architectural assets are photographs of a real office or city.

## Responsive, interaction and safety

At 700px and below the homepage hero and commercial hero stack; the contact panel is ordered earlier visually on narrow screens. Use the existing CSS for exact spacing and image positioning. Navigation, FAQ, forms, the clean WhatsApp destination and privacy-safe draft/copy/paste behavior remain the existing mechanisms. Focus, keyboard behavior and reduced-motion support must be preserved. All images use intentional crops and should carry empty alt text when they are decorative; informative imagery needs concise, truthful alt text. Original source and usage notes are documented in `public/images/visual-refresh/ASSET-MANIFEST.md`.

## Scope and verification

These guidelines describe the implemented CSS and component structure, not a finished visual or accessibility certification. The earlier baseline critique was based on the live pages. The post-change review must inspect desktop and mobile renders, and verify keyboard, reduced motion, layout at 320–1440px, image loading, production build, 126 URL/indexing regressions and synthetic enquiry privacy. Static hero studies in `design/hero-concepts/` are review-only and are not indexable website routes.
