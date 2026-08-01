import { smoother } from "./scrollSmoother";

function getNavScrollOffset() {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--nav-scroll-offset")
    .trim();
  const parsed = parseInt(raw, 10);
  return Number.isFinite(parsed) ? parsed : 100;
}

export function scrollToSection(selector: string) {
  if (!selector) return false;

  const el = document.querySelector(selector);
  if (!el) return false;

  const offset = getNavScrollOffset();

  if (smoother) {
    smoother.paused(false);
    smoother.scrollTo(el, true, `top ${offset}px`);
    return true;
  }

  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

function isNearViewportTop(selector: string) {
  const el = document.querySelector(selector);
  if (!el) return false;
  const offset = getNavScrollOffset();
  const top = el.getBoundingClientRect().top;
  return Math.abs(top - offset) < 140;
}

/**
 * Cold-load safe deep links (#you, #apps, …).
 * Retries until the node exists, then re-scrolls after layout/ScrollTrigger settle.
 */
export function scrollToHashWhenReady(
  hash = typeof window !== "undefined" ? window.location.hash : "",
  options?: { maxWaitMs?: number },
) {
  if (!hash || hash.length < 2) return;

  const maxWaitMs = options?.maxWaitMs ?? 10000;
  const started = performance.now();
  let succeededOnce = false;

  const attempt = () => {
    const elapsed = performance.now() - started;
    const found = Boolean(document.querySelector(hash));

    if (found) {
      scrollToSection(hash);
      succeededOnce = true;

      if (isNearViewportTop(hash) || elapsed > maxWaitMs) {
        // Final polish after images / ScrollTrigger
        window.setTimeout(() => scrollToSection(hash), 400);
        window.setTimeout(() => scrollToSection(hash), 1200);
        return;
      }
    }

    if (elapsed < maxWaitMs) {
      window.setTimeout(attempt, succeededOnce ? 120 : 50);
    }
  };

  attempt();
}
