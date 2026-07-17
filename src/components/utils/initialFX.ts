import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { smoother } from "./scrollSmoother";
import { setAllTimeline } from "./scrollTimelines";

gsap.registerPlugin(ScrollTrigger);

const isCompactLanding = () =>
  window.matchMedia("(max-width: 1099px)").matches;

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother?.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: getComputedStyle(document.documentElement).getPropertyValue("--backgroundColor").trim() || "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  setTimeout(() => {
    ScrollTrigger.refresh(true);
    setAllTimeline();
  }, 1200);

  const landingTagline = new SplitText(".landing-tagline", {
    type: "chars,lines",
    linesClass: "split-line",
  });

  gsap.fromTo(
    [".header", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  if (isCompactLanding()) {
    revealCompactLanding(landingTagline);
  } else {
    revealDesktopLanding(landingTagline);
  }
}

function revealDesktopLanding(landingTagline: SplitText) {
  gsap.fromTo(
    [".landing-greeting", ".landing-name"],
    { opacity: 0, y: 32 },
    {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: "power3.out",
      delay: 0.3,
    }
  );

  gsap.fromTo(
    landingTagline.chars,
    { opacity: 0, y: 40, filter: "blur(4px)" },
    {
      opacity: 1,
      duration: 0.9,
      filter: "blur(0px)",
      ease: "power3.out",
      y: 0,
      stagger: 0.025,
      delay: 0.55,
    }
  );

  gsap.fromTo(
    [
      ".landing-open-pill",
      ".landing-actions",
      ".hero-code-editor",
      ".hero-stats-bar",
    ],
    { opacity: 0, y: 16 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.85,
    }
  );
}

function revealCompactLanding(landingTagline: SplitText) {
  const revealAt = 0.35;

  gsap.fromTo(
    [".landing-greeting", ".landing-name"],
    { opacity: 0, y: 12 },
    {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: "power2.out",
      delay: revealAt,
    }
  );

  gsap.fromTo(
    landingTagline.chars,
    { opacity: 0, y: 10 },
    {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: "power2.out",
      stagger: 0,
      delay: revealAt,
    }
  );

  gsap.fromTo(
    [
      ".landing-open-pill",
      ".landing-actions",
      ".hero-code-editor",
      ".hero-stats-bar",
    ],
    { opacity: 0, y: 8 },
    {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: "power2.out",
      stagger: 0.08,
      delay: revealAt,
    }
  );
}
