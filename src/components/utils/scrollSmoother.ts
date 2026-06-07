import type { ScrollSmoother } from "gsap-trial/ScrollSmoother";

/** Shared ScrollSmoother instance — avoids circular imports with Navbar. */
export let smoother: ScrollSmoother | undefined;

export function setSmoother(instance: ScrollSmoother) {
  smoother = instance;
}
