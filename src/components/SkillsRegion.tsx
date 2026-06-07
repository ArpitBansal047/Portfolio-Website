import { lazy, Suspense } from "react";
import Certificates from "./Certificates";
import ProjectsHub from "./ProjectsHub";
import "./styles/SkillsRegion.css";

const TechStack = lazy(() => import("./TechStack"));

const SkillsRegion = () => {
  return (
    <section className="skills-region" id="projects-region">
      <section className="section-content-center section-container skills-region-body">
        <ProjectsHub />
        <Certificates />
        <Suspense fallback={null}>
          <TechStack />
        </Suspense>
      </section>
    </section>
  );
};

export default SkillsRegion;
