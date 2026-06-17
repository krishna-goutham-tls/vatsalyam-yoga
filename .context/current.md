# Current State — Vatsalyam Yoga
Last updated: 2026-06-05

## Active Right Now
- Footer color experimentation — currently parchment (same as header), was charcoal, was deep-forest before that
- Staging branch pushed with all fixes, PR needs to be re-created on GitHub

## Blockers
- `gh` CLI not installed — can't create PR from terminal; user must create manually at github.com/krishna-goutham-tls/vatsalyam-yoga/pull/new/staging

## Recent Decisions (still in effect)
- 2026-06-05 — Classes mobile: simple vertical scroll cards instead of sticky stacking (stacking hides content on small screens)
- 2026-06-05 — Classes desktop: keep sticky stacking but add pb-96 for scroll room
- 2026-06-05 — Hamburger menu: 350ms setTimeout after AnimatePresence exit before scroll (prevents layout reflow from canceling smooth scroll)
- 2026-06-05 — Testimonial blink fix: move tilt rotation/y-offset from CSS to Framer Motion initial/whileInView (single transform system); whileHover uses its own 0.3s transition
- 2026-06-05 — Workshops: moved from landing page section to dedicated /workshops page; horizontal cards (image left, content right); no Book Now button
- 2026-06-05 — Footer: parchment background + charcoal text + logo without brightness-150 (matching header style)
- 2026-06-05 — Header nav: cross-page navigation with /#section href format; Workshops link added; logo uses next/link

## Next Actions (unordered)
- [ ] Create PR on GitHub from staging → main
- [ ] User to decide on footer color (parchment vs charcoal vs other)

## If I Forget Everything Else
- Multi-page static site now (home + /workshops), not single-page anymore
- Custom smooth scroll utility at src/lib/scroll.ts (replaces native scroll-behavior)
- All nav scrolling goes through scrollToSection() with 350ms menu-close delay
- Tilted cards must use Framer Motion for transforms, never CSS — CSS and Framer Motion fighting over transform causes blink
- Footer is currently parchment (same as header), may change
