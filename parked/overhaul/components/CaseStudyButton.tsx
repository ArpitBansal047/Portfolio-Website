import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import type { CaseStudy } from "../data/portfolio";
import "./styles/CaseStudyDrawer.css";

type CaseStudyButtonProps = {
  caseStudy: CaseStudy;
};

/** Expands case-study detail inside the existing project card (no separate drawer). */
const CaseStudyButton = ({ caseStudy }: CaseStudyButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="case-study-inline">
      <button
        type="button"
        className="case-study-btn"
        onClick={() => setOpen((v) => !v)}
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
            {caseStudy.approach.slice(0, 3).map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>

          <h5>Why this stack</h5>
          <ul className="case-study-inline__stack">
            {caseStudy.stackRationale.slice(0, 3).map((row) => (
              <li key={row.tech}>
                <strong>{row.tech}</strong> — {row.why}
                {row.alternative ? ` (vs ${row.alternative})` : ""}
              </li>
            ))}
          </ul>

          <h5>Results</h5>
          <ul className="case-study-outcomes">
            {caseStudy.outcomes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
};

export default CaseStudyButton;
