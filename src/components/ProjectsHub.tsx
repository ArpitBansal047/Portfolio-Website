import SectionTitle from "./SectionTitle";
import WipProjects from "./WipProjects";
import Work from "./Work";
import "./styles/ProjectsHub.css";
import "./styles/SectionTitle.css";

const ProjectsHub = () => {
  return (
    <section className="projects-hub" id="projects">
      <section className="projects-hub-heading section-container">
        <SectionTitle lead="P" accent="ERSONAL PROJECTS" />
        <p className="section-lead projects-hub-lead">
          Flagship YOU wellness app, plus earlier web experiments.
        </p>
      </section>
      <WipProjects />
      <Work />
    </section>
  );
};

export default ProjectsHub;
