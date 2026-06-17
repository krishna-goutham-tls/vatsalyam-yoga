## 2026-06-05 — Mobile UX fixes, workshops page, footer redesign

### Classes mobile stacking replaced with vertical scroll
Context: Sticky stacking cards on mobile accumulated tab heights (36px each × 7 cards), leaving insufficient viewport space for card body content. By card 4+, the text area was nearly invisible.
Decision: Replace mobile stacking with simple vertical scroll cards (image 16:10 aspect + title + description). Keep desktop stacking unchanged but add `pb-96` (384px) bottom padding so the last desktop card isn't clipped at the viewport bottom.
Risks: Desktop stacking still has the same fundamental issue on very short viewports; padding is a pragmatic workaround.

### Classes SectionHeader z-index conflict with hamburger menu
Context: SectionHeader (`z-50`, `sticky top-16`) painted on top of the header's mobile menu overlay (also `z-50`) because it came later in the DOM.
Decision: Lower SectionHeader to `z-40 lg:z-50` — below header on mobile, above stacking cards on desktop.

### Hamburger menu scroll race condition
Context: `scrollIntoView({ behavior: "smooth" })` started a scroll animation, but AnimatePresence exit animation (height auto → 0, 300ms) caused a layout reflow that canceled the scroll.
Decision: Close menu first, then `setTimeout(350ms)` before calling `scrollToSection()`. Integrated main's custom `scrollToSection` from `@/lib/scroll` instead of native `scrollIntoView`.
Risks: 350ms delay feels slightly sluggish but is reliable.

### Testimonial card blink on load
Context: CSS classes (`rotate-1`, `-translate-y-1`) and Framer Motion (`initial={{ rotate: 0, y: 30 }}`) both controlled `transform` on the same element. CSS applied tilt immediately, Framer Motion overrode it to rotate:0 (removing tilt), then animated back — causing a visible blink/snap.
Decision: Move rotation and y-offset into Framer Motion's `initial`/`whileInView` as numeric values (`rotateDeg`, `yOffsetPx`). Single transform system, no blink. `whileHover` restored with its own fast 0.3s transition (was using the 0.6s entrance transition which made hover feel unresponsive).

### Workshops moved to dedicated page
Context: Workshops was a 3-column poster grid at the bottom of the landing page, below the contact form. Hard to find, limited info.
Decision: Create `/workshops` page with horizontal cards (image left 38%, content right), most recent first, no Book Now button (info-only). Add to nav menu. Remove from landing page.
Outcome: Workshops now accessible from nav, has own SEO metadata, cleaner landing page.

### Footer redesign
Context: Footer used single `logo.png` with `brightness-150` on `bg-deep-forest` — same color as Credibility section, creating visual repetition.
Decision: Switch to two-image logo (logo-icon.png + logo-name.png) matching header sizing. Experimented with charcoal background, then parchment (matching header). Parchment selected for now.
Risks: Parchment footer may feel too light; charcoal was more conventional for footers.

### Rebase conflict resolution
Context: Main had a new commit (`f73d895`) adding custom smooth scroll utility. User's earlier merge accepted incoming (main) changes over staging changes, breaking our work.
Decision: Reset to clean commit, rebase onto latest main, manually resolve conflicts keeping our staging structure but integrating `scrollToSection` utility.
