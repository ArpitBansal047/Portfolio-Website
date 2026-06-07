import SectionTitle from "./SectionTitle";
import WipProjects from "./WipProjects";
import Work from "./Work";
import "./styles/ProjectsHub.css";
import "./styles/SectionTitle.css";

const ProjectsHub = () => {
  return (
    <section className="projects-hub" id="projects">
      <section className="projects-hub-heading section-container">
        <SectionTitle lead="P" accent="ROJECTS" />
        <p className="section-lead projects-hub-lead">
          Apps and websites I build outside work — personal projects for learning and exploration.
        </p>
      </section>
      <WipProjects />
      <Work />
    </section>
  );
};

export default ProjectsHub;
