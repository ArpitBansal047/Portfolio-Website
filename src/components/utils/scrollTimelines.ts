import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setAllTimeline() {
  const cards = gsap.utils.toArray<HTMLElement>(
    ".education-section .career-card"
  );
  if (!cards.length) return;

  gsap.set(cards, { opacity: 0, y: 16 });

  gsap.to(cards, {
    opacity: 1,
    y: 0,
    stagger: 0.06,
    duration: 0.45,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".education-section",
      start: "top 85%",
      toggleActions: "play none none none",
      invalidateOnRefresh: true,
    },
  });
}
