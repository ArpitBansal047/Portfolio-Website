import SectionTitle from "./SectionTitle";
import WipProjects from "./WipProjects";
import Work from "./Work";
import "./styles/ProjectsHub.css";
import "./styles/SectionTitle.css";

const ProjectsHub = () => {
  return (
    <section className="projects-hub">
      <section className="projects-hub-heading section-container">
        <SectionTitle lead="P" accent="ERSONAL PROJECTS" id="projects" className="nav-scroll-target" />
      </section>
      <WipProjects />
      <Work />
    </section>
  );
};

export default ProjectsHub;
