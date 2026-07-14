import SectionTitle from "./SectionTitle";
import { portfolioNotes, wipProjects } from "../data/portfolio";
import WipMobileColumn from "./WipMobileColumn";
import "./styles/WipProjects.css";
import "./styles/SectionTitle.css";

const WipProjects = () => {
  return (
    <section className="wip-section projects-subsection section-container" data-cursor="disable">
      <header className="wip-section-header">
        <SectionTitle
          id="apps"
          lead="A"
          accent="PPS"
          as="h3"
          className="section-title--sub nav-scroll-target"
        />
        <p className="wip-section-footnote">{portfolioNotes.youWip}</p>
      </header>
      <section className={`wip-apps-grid${wipProjects.length === 1 ? " wip-apps-grid--single" : ""}`}>
        {wipProjects.map((project) => (
          <WipMobileColumn key={project.id} project={project} />
        ))}
      </section>
    </section>
  );
};

export default WipProjects;
