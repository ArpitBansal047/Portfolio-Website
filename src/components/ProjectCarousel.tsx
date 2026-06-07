import { useState } from "react";
import { MdArrowOutward, MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Project } from "../data/portfolio";
import WorkImage from "./WorkImage";
import "./styles/ProjectCarousel.css";

type ProjectCarouselProps = {
  id: string;
  title: React.ReactNode;
  subtitle: string;
  projects: Project[];
  showGithub?: boolean;
  compact?: boolean;
};

const ProjectCarousel = ({
  id,
  title,
  subtitle,
  projects,
  showGithub = true,
  compact = false,
}: ProjectCarouselProps) => {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(projects.length - 1, i + 1));

  return (
    <section className="project-carousel section-container" id={id} data-cursor="disable">
      {title}
      <p className="project-carousel-subtitle">{subtitle}</p>

      <section className="project-carousel-stage">
        <button
          type="button"
          className="project-carousel-arrow project-carousel-arrow--left"
          onClick={goPrev}
          disabled={index === 0}
          aria-label="Previous project"
          data-cursor="disable"
        >
          <MdChevronLeft />
        </button>

        <article className={`project-carousel-card${compact ? " project-carousel-card--compact" : ""}`} key={project.id}>
          <section className="project-carousel-info">
            <section className="project-carousel-title" aria-label={`${project.name} — ${project.category}`}>
              <h3 className="project-carousel-number">{project.number}</h3>
              <section className="project-carousel-title-meta">
                <h4 className="project-carousel-name">{project.name}</h4>
                <p className="project-carousel-category">{project.category}</p>
              </section>
            </section>
            {compact ? (
              <>
                {project.glance && (
                  <p className="project-carousel-glance">{project.glance}</p>
                )}
                <p className="project-carousel-summary">{project.impact}</p>
              </>
            ) : (
              <>
                {project.glance && (
                  <p className="project-carousel-glance">{project.glance}</p>
                )}
                <h4>The problem</h4>
                <p>{project.problem}</p>
                <h4>The impact</h4>
                <p>{project.impact}</p>
              </>
            )}
            <h4>Tech stack</h4>
            <section className="project-carousel-tags">
              {project.stack.map((tag) => (
                <span key={tag} className="project-carousel-tag">
                  {tag}
                </span>
              ))}
            </section>
            <section className="project-carousel-actions">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-carousel-btn project-carousel-btn--primary"
                  data-cursor="disable"
                >
                  Live Demo <MdArrowOutward />
                </a>
              )}
              {showGithub && project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-carousel-btn project-carousel-btn--ghost"
                  data-cursor="disable"
                >
                  GitHub <MdArrowOutward />
                </a>
              )}
            </section>
          </section>
          <WorkImage
            image={project.image}
            alt={project.name}
            link={project.liveUrl || project.githubUrl}
          />
        </article>

        <button
          type="button"
          className="project-carousel-arrow project-carousel-arrow--right"
          onClick={goNext}
          disabled={index === projects.length - 1}
          aria-label="Next project"
          data-cursor="disable"
        >
          <MdChevronRight />
        </button>
      </section>

      <p className="project-carousel-counter">
        {index + 1} / {projects.length}
      </p>
    </section>
  );
};

export default ProjectCarousel;
