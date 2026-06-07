import { smoother } from "../components/utils/scrollSmoother";

let lockCount = 0;

export function lockPageScroll() {
  lockCount += 1;
  if (lockCount === 1) {
    smoother?.paused(true);
    document.body.classList.add("scroll-locked");
  }
}

export function unlockPageScroll() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    document.body.classList.remove("scroll-locked");
    smoother?.paused(false);
  }
}
