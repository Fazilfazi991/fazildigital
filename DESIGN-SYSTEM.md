# Fazil Digital design system

## Direction
Premium Editorial Minimal, as specified in the Phase 1 brief. The homepage is a consultant's considered point of view: expressive type, calm reading surfaces and a geometric search aperture. It replaces the old agency layout. Its mode is Persuade. The audience is Saudi business decision makers seeking a direct SEO relationship.

## Tokens
| Role | Value | Rule |
| --- | --- | --- |
| Paper | #F5F3ED | Main reading surface |
| Forest | #1E4032 | Headings, primary actions, selected panels |
| Ink | #222B28 | Body copy |
| Sand | #C8B38B | Decorative linework, not small body text |
| Muted ink | #59635C | Secondary copy on paper |
| Pale sage | #E7EBE1 | Service and diagram surfaces |

Instrument Serif carries display headlines with regular weight; Manrope carries UI and body text. Both are local WOFF2 assets loaded through next/font/local with swap, with OFL licenses alongside the files. Body descriptions have a 14px floor, leads are 14–15px, secondary UI has a 12px floor; nonessential artwork and the requested eyebrow can be smaller. Display scales from 50px to 112px; section headings from 37px to 62px. Comfortable copy measures under 65ch. Future Arabic typography: evaluate Noto Sans Arabic with a native-language editor, RTL layout and independent keyword research before publishing. No Arabic font payload or untranslated route ships in Phase 1.

## Layout and components
Maximum content width 1280px, fluid gutters 24–64px, section rhythm 80–120px on desktop and 64–80px on mobile. Left-aligned editorial grid, with staggered widths rather than repeated identical section shells. Hairline rules separate content. Three service cards are a deliberate brief requirement. Riyadh receives a wider dark panel; Jeddah and Dammam are quieter linked rows. No numerical claims or logos stand in for evidence.

Primary actions are forest rectangles with a small radius and generous 48px minimum target height. Secondary actions use underlined text and a consistent 1.5px SVG arrow. Focus rings use a 3px contrasting outline with offset. Menu and FAQ use native details/summary semantics. The mobile menu closes after navigation and Escape, with focus returned on Escape. Form fields have persistent labels, native validation and explicit review/send boundaries.

## Motion and loading
The hero has one subtle 600ms entrance. A single methodology rule draws when scrolled into view; its content is always visible. Reduced motion disables both. No content starts hidden behind JavaScript. No animation changes document geometry. The search motif is a decorative SVG with a fixed aspect ratio, not a data visualization. No image or animation dependencies.

## Scope and critique
The pinned brief supersedes the concept-seed alternatives. The broad type and quiet forest search aperture identify an independent specialist. Streaming-catalog focus grammar and instrument trace systems would obscure the simple consultancy offer; expressionist poster styling conflicts with the specified calm palette. Their useful disciplines are retained as clear focus state, careful linework and confident typographic hierarchy, without importing their visual motifs. The code-led contract is a prominent readable headline, a functional review action in the first viewport, natural mobile reading order and fully operable navigation. Internal pages keep their existing presentation until Phase 2.
