import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { useCaseStudy } from "../context/CaseStudyContext";
import "./styles/CaseStudyDrawer.css";

const CaseStudyDrawer = () => {
  const { open, closeCaseStudy } = useCaseStudy();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCaseStudy();
    };
    document.body.classList.add("scroll-locked");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("scroll-locked");
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeCaseStudy]);

  if (!open) return null;

  const { title, category, caseStudy } = open;

  return (
    <div className="case-study-overlay" role="presentation" onClick={closeCaseStudy}>
      <aside
        className="case-study-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="case-study-drawer__head">
          <div>
            {category && <p className="case-study-drawer__category">{category}</p>}
            <h2 id="case-study-title">{title}</h2>
          </div>
          <button type="button" className="case-study-drawer__close" onClick={closeCaseStudy} aria-label="Close case study">
            <MdClose />
          </button>
        </header>

        <section className="case-study-drawer__section">
          <h3>Problem</h3>
          <p>{caseStudy.problemDetail}</p>
        </section>

        <section className="case-study-drawer__section">
          <h3>Approach</h3>
          <ul>
            {caseStudy.approach.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </section>

        <section className="case-study-drawer__section">
          <h3>Stack decisions</h3>
          <div className="case-study-table-wrap">
            <table className="case-study-table">
              <thead>
                <tr>
                  <th>Tech</th>
                  <th>Why</th>
                  <th>Alternative</th>
                </tr>
              </thead>
              <tbody>
                {caseStudy.stackRationale.map((row) => (
                  <tr key={row.tech}>
                    <td>{row.tech}</td>
                    <td>{row.why}</td>
                    <td>{row.alternative ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="case-study-drawer__section">
          <h3>Outcomes</h3>
          <ul className="case-study-outcomes">
            {caseStudy.outcomes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </section>

        {caseStudy.learnings && (
          <section className="case-study-drawer__section">
            <h3>Learnings</h3>
            <p>{caseStudy.learnings}</p>
          </section>
        )}
      </aside>
    </div>
  );
};

export default CaseStudyDrawer;
