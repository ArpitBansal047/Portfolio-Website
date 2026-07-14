import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { site } from "../data/portfolio";
import { smoother } from "./utils/scrollSmoother";
import "./styles/StickyRecruiterCta.css";

const ResumeDocIcon = () => (
  <svg
    className="sticky-recruiter-cta__icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M8 3h7l5 5v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M15 3v5h5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 12h6M9 15h6M9 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const StickyRecruiterCta = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const scrollY = smoother?.scrollTop() ?? window.scrollY;
      setVisible(scrollY > window.innerHeight * 0.45);
    };

    update();
    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <aside
      className={`sticky-recruiter-cta${visible ? " sticky-recruiter-cta--visible" : ""}`}
      aria-label="Download resume"
      aria-hidden={!visible}
    >
      <a
        href={site.resumePath}
        download
        className="sticky-recruiter-cta__link"
        aria-label="Download resume"
        data-cursor="disable"
        tabIndex={visible ? 0 : -1}
      >
        <ResumeDocIcon />
        <span className="sticky-recruiter-cta__label" aria-hidden="true">
          {"RESUME".split("").map((letter, index) => (
            <span key={index} className="sticky-recruiter-cta__letter">
              {letter}
            </span>
          ))}
        </span>
      </a>
    </aside>
  );
};

export default StickyRecruiterCta;
