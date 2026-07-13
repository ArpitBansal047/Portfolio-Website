import { useEffect, useState } from "react";
import { LuFileText } from "react-icons/lu";
import { site } from "../data/portfolio";
import "./styles/StickyRecruiterCta.css";

const StickyRecruiterCta = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.45);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
