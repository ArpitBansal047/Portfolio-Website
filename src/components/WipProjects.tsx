import SectionTitle from "./SectionTitle";
import { wipProjects } from "../data/portfolio";
import WipMobileColumn from "./WipMobileColumn";
import "./styles/WipProjects.css";
import "./styles/SectionTitle.css";

const WipProjects = () => {
  return (
    <section className="wip-section projects-subsection section-container" data-cursor="disable">
      <SectionTitle
        id="apps"
        lead="A"
        accent="PPS"
        as="h3"
        className="section-title--sub nav-scroll-target"
      />
      <p className="section-lead projects-subsection-lead wip-subtitle">
        Flagship side project — clinical wellness with GenAI, Firebase realtime sync, and JWT-secured sessions.
      </p>
      <section className={`wip-apps-grid${wipProjects.length === 1 ? " wip-apps-grid--single" : ""}`}>
        {wipProjects.map((project) => (
          <WipMobileColumn key={project.id} project={project} />
        ))}
      </section>
    </section>
  );
};

export default WipProjects;
