import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { smoother } from "./scrollSmoother";
import { setAllTimeline } from "./scrollTimelines";

gsap.registerPlugin(ScrollTrigger);

const isCompactLanding = () =>
  window.matchMedia("(max-width: 1279px)").matches;

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother?.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  setTimeout(() => {
    ScrollTrigger.refresh(true);
    setAllTimeline();
  }, 1200);

  const landingText = new SplitText([".landing-role", ".landing-name"], {
    type: "chars,lines",
    linesClass: "split-line",
  });

  const textProps = { type: "chars,lines", linesClass: "split-h2" };

  const landingText2 = new SplitText(".landing-h2-info", textProps);
  const landingText3 = new SplitText(".landing-h2-info-1", textProps);
  const landingText4 = new SplitText(".landing-h2-1", textProps);
  const landingText5 = new SplitText(".landing-h2-2", textProps);

  gsap.set(landingText3.chars, { opacity: 0, y: 0 });
  gsap.set(landingText5.chars, { opacity: 0, y: 0 });
  gsap.set(".landing-h2-info-1, .landing-h2-2", { autoAlpha: 0 });

  document.querySelectorAll(".landing-swap").forEach((el) => {
    el.classList.add("is-live");
  });

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  if (isCompactLanding()) {
    revealCompactLanding(landingText, landingText2, landingText4);
  } else {
    revealDesktopLanding(landingText, landingText2, landingText4);
  }

  loopText(landingText2, landingText3);
  loopText(landingText4, landingText5);
}

function revealDesktopLanding(
  landingText: SplitText,
  landingText2: SplitText,
  landingText4: SplitText
) {
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-swap--accent",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    landingText4.chars,
    { opacity: 0, y: 40, filter: "blur(4px)" },
    {
      opacity: 1,
      duration: 0.9,
      filter: "blur(0px)",
      ease: "power3.out",
      y: 0,
      stagger: 0.03,
      delay: 0.85,
    }
  );

  gsap.fromTo(
    ".landing-swap--tagline",
    { opacity: 0, y: 16 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      y: 0,
      delay: 0.95,
    }
  );

  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 40, filter: "blur(4px)" },
    {
      opacity: 1,
      duration: 0.9,
      filter: "blur(0px)",
      ease: "power3.out",
      y: 0,
      stagger: 0.03,
      delay: 0.95,
    }
  );
}

function revealCompactLanding(
  landingText: SplitText,
  landingText2: SplitText,
  landingText4: SplitText
) {
  const revealAt = 0.35;

  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 12 },
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
    [".landing-swap--accent", ".landing-swap--tagline"],
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
    [landingText4.chars, landingText2.chars],
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
      ".open-roles-pill",
      ".landing-contact",
      ".hero-metrics",
      ".hero-cta",
    ],
    { opacity: 0, y: 8 },
    {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: "power2.out",
      stagger: 0,
      delay: revealAt,
    }
  );
}

function loopText(text1: SplitText, text2: SplitText) {
  const altEl = text2.elements[0] as HTMLElement;
  gsap.set(altEl, { autoAlpha: 0 });

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;
  const slide = isCompactLanding() ? 32 : 48;

  tl.fromTo(
    text2.chars,
    { opacity: 0, y: slide },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.08,
      delay,
      onStart: () => {
        gsap.set(altEl, { autoAlpha: 1 });
      },
    },
    0
  )
    .fromTo(
      text1.chars,
      { y: 0, opacity: 1 },
      {
        y: -slide,
        opacity: 0,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.08,
        delay,
      },
      0
    )
    .fromTo(
      text2.chars,
      { y: 0, opacity: 1 },
      {
        y: -slide,
        opacity: 0,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.08,
        delay: delay2,
        onComplete: () => {
          gsap.set(altEl, { autoAlpha: 0 });
        },
      },
      1
    )
    .fromTo(
      text1.chars,
      { y: slide, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.08,
        delay: delay2,
      },
      1
    );
}
