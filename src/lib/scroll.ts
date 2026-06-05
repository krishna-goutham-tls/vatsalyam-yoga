/**
 * Custom smooth scroll with controlled duration and easing.
 * Native scroll-behavior: smooth has no timing/easing control,
 * often feels abrupt. This gives a buttery, consistent feel.
 */

const SCROLL_DURATION = 900; // ms — not too fast, not too laggy
const HEADER_OFFSET = 80; // px — clear the fixed header

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function smoothScrollTo(targetY: number): void {
  const startY = window.scrollY;
  const delta = targetY - startY;

  if (Math.abs(delta) < 2) return;

  let start: number | null = null;

  function step(timestamp: number) {
    if (start === null) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / SCROLL_DURATION, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + delta * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  smoothScrollTo(y);
}
