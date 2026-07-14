import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { LuFileText } from "react-icons/lu";
import { site } from "../data/portfolio";
import { smoother } from "./utils/scrollSmoother";
import "./styles/StickyRecruiterCta.css";

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
        data-cursor="disable"
        tabIndex={visible ? 0 : -1}
      >
        <span>RESUME</span>
        <LuFileText aria-hidden="true" />
      </a>
    </aside>
  );
};

export default StickyRecruiterCta;
