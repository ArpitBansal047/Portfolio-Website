import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import type { CaseStudy } from "../data/portfolio";
import "./styles/CaseStudyInline.css";

type CaseStudyButtonProps = {
  caseStudy: CaseStudy;
  /** Shorter copy for narrow panels (e.g. YOU tile). */
  compact?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const CaseStudyButton = ({ caseStudy, compact = false, onOpenChange }: CaseStudyButtonProps) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => {
      const next = !prev;
      onOpenChange?.(next);
      return next;
    });
  };

  const approachItems = caseStudy.approach;
  const stackItems = caseStudy.stackRationale;
  const outcomeItems = caseStudy.outcomes;

  return (
    <section className={`case-study-inline${compact ? " case-study-inline--compact" : ""}`}>
      <button
        type="button"
        className="case-study-btn"
        onClick={toggle}
        data-cursor="disable"
        aria-expanded={open}
      >
        {open ? "Hide details" : "More detail"}
        {open ? <MdExpandLess aria-hidden="true" /> : <MdExpandMore aria-hidden="true" />}
      </button>

      {open && (
        <section className="case-study-inline__body">
          <p className="case-study-inline__problem">{caseStudy.problemDetail}</p>

          <h5>Approach</h5>
          <ul>
            {approachItems.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>

          <h5>Why this stack</h5>
          <ul className="case-study-inline__stack">
            {stackItems.map((row) => (
              <li key={row.tech}>
                <strong>{row.tech}</strong> — {row.why}
                {row.alternative ? ` (vs ${row.alternative})` : ""}
              </li>
            ))}
          </ul>

          <h5>Results</h5>
          <ul className="case-study-outcomes">
            {outcomeItems.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
};

export default CaseStudyButton;
