import { smoother } from "./scrollSmoother";

function getNavScrollOffset() {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--nav-scroll-offset")
    .trim();
  const parsed = parseInt(raw, 10);
  return Number.isFinite(parsed) ? parsed : 100;
}

export function scrollToSection(selector: string) {
  if (!selector) return;

  const el = document.querySelector(selector);
  if (!el) return;

  const offset = getNavScrollOffset();

  if (smoother) {
    smoother.paused(false);
    smoother.scrollTo(el, true, `top ${offset}px`);
    return;
  }

  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
