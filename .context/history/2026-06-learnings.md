## 2026-06-05 — Framer Motion + CSS transform conflict

Root cause: When Framer Motion and CSS both manage `transform` on the same element, they fight. CSS applies immediately on mount, Framer Motion overrides via inline `style` on `initial`, then CSS retakes control when Framer Motion releases. This causes a visible blink (element appears, disappears, reappears) or snap (rotation abruptly changes).

Fix: Choose ONE system. Either put all transforms in Framer Motion (initial/whileInView/whileHover) with no CSS transform classes, or put all transforms in CSS with no Framer Motion transform properties. For the Stories testimonial cards, Framer Motion was necessary for the entrance animation, so all transforms moved there.

## 2026-06-05 — AnimatePresence exit animation cancels smooth scroll

Root cause: `scrollIntoView({ behavior: "smooth" })` and `AnimatePresence` exit animation both modify layout/scroll simultaneously. The exit animation (height: auto → 0) causes a reflow that interrupts the smooth scroll animation, causing it to silently fail.

Fix: Delay the scroll call until after the exit animation completes. 350ms (300ms animation + 50ms buffer) is sufficient. Using `setTimeout` is the simplest approach.

## 2026-06-05 — Framer Motion whileHover inconsistency

Root cause: `whileHover` on slightly rotated elements has unreliable pointer detection — the visual bounds don't match the bounding box. Additionally, if `whileHover` uses the same `transition` prop as `whileInView` (e.g., 0.6s duration with stagger delay), the hover feels unresponsive or appears not to trigger.

Fix: Include a dedicated `transition` object inside the `whileHover` prop itself: `whileHover={{ rotate: 0, transition: { duration: 0.3 } }}`. This overrides the entrance transition for hover interactions only.
