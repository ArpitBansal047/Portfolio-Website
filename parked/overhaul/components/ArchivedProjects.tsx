import { useState } from "react";
import ProjectCarousel from "./ProjectCarousel";
import SectionTitle from "./SectionTitle";
import { archivedProjects, archivedWipProjects } from "../data/portfolio";
import WipMobileColumn from "./WipMobileColumn";
import "./styles/ArchivedProjects.css";
import "./styles/SectionTitle.css";

const ArchivedProjects = () => {
  const [open, setOpen] = useState(false);
  const hasArchive = archivedProjects.length > 0 || archivedWipProjects.length > 0;

  if (!hasArchive) return null;

  return (
    <section className="archived-projects section-container">
      <button
        type="button"
        className="archived-projects__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {open ? "Hide" : "View"} earlier projects (2020–2022)
      </button>

      {open && (
        <section className="archived-projects__body">
          {archivedWipProjects.length > 0 && (
            <section className="archived-projects__wip">
              {archivedWipProjects.map((project) => (
                <WipMobileColumn key={project.id} project={project} compact />
              ))}
            </section>
          )}
          {archivedProjects.length > 0 && (
            <ProjectCarousel
              id="archived-websites"
              title={<SectionTitle lead="E" accent="ARLIER" as="h3" className="section-title--sub" />}
              subtitle="Personal builds from 2021–2022 — learning projects."
              projects={archivedProjects}
              showGithub
              compact
            />
          )}
        </section>
      )}
    </section>
  );
};

export default ArchivedProjects;
