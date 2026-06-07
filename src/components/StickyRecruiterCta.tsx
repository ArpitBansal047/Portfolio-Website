import { MdArrowOutward } from "react-icons/md";
import "./styles/StickyRecruiterCta.css";

/** Resume lives on the left social rail only — avoids duplicate with RESUME button. */
const StickyRecruiterCta = () => {
  return (
    <aside className="sticky-recruiter-cta" aria-label="Quick actions">
      <a
        href="#contact"
        className="sticky-recruiter-cta__btn sticky-recruiter-cta__btn--primary"
        data-cursor="disable"
      >
        Contact <MdArrowOutward />
      </a>
    </aside>
  );
};

export default StickyRecruiterCta;
