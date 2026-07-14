import { useEffect, useState } from "react";
import {
  MdArrowOutward,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { WipProject } from "../data/portfolio";
import ClickableImage from "./ClickableImage";
import ExpandableWorkDetail from "./ExpandableWorkDetail";
import { assetUrl } from "../utils/assetUrl";

type WipMobileColumnProps = {
  project: WipProject;
};

const WipMobileColumn = ({ project }: WipMobileColumnProps) => {
  const [index, setIndex] = useState(0);
  const [detailOpen, setDetailOpen] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);
  const shot = project.screenshots[index];

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 650px)");
    const sync = () => setIsNarrow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const bulletsDetailOnly = isNarrow && project.id === "you";

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () =>
    setIndex((i) => Math.min(project.screenshots.length - 1, i + 1));

  return (
    <article
      className={`wip-app-panel wip-app-panel--${project.id}${detailOpen ? " wip-app-panel--detail-open" : ""}`}
    >
      <h3 className="wip-app-title">{project.name}</h3>

      <section className="wip-app-inner">
        <section className="wip-app-text">
          <p className="wip-tag">{project.tagline}</p>

          <section className="wip-links">
            {project.uiLink && (
              <a
                href={project.uiLink}
                target="_blank"
                rel="noopener noreferrer"
                className="wip-link wip-link--primary"
                data-cursor="disable"
              >
                UI Gallery <MdArrowOutward />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="wip-link"
                data-cursor="disable"
              >
                GitHub <SiGithub aria-hidden="true" />
              </a>
            )}
          </section>

          <ExpandableWorkDetail
            problem={project.description}
            problemBrief={project.descriptionBrief}
            impact={project.impact}
            impactBrief={project.impactBrief}
            stack={project.stack}
            bullets={project.bullets}
            caseStudy={project.caseStudy}
            compact
            briefStackCount={6}
            initialBulletCount={bulletsDetailOnly ? 0 : 2}
            bulletsDetailOnly={bulletsDetailOnly}
            problemLabel="Overview"
            impactLabel="What I built"
            onOpenChange={setDetailOpen}
          />
        </section>

        <section className="wip-app-ss">
          <figure className="wip-ss-frame">
            <ClickableImage
              key={`${project.id}-${index}`}
              src={assetUrl(shot.src)}
              alt={shot.label}
              downloadName={`${project.id}-${shot.label.replace(/\s+/g, "-").toLowerCase()}.png`}
            />
          </figure>

          <section className="wip-ss-controls">
            <button
              type="button"
              className="wip-ss-arrow"
              onClick={goPrev}
              disabled={index === 0}
              aria-label="Previous screenshot"
              data-cursor="disable"
            >
              <MdChevronLeft />
            </button>
            <span className="wip-ss-meta">
              <span className="wip-ss-label">{shot.label}</span>
              <span className="wip-ss-counter">
                {index + 1} / {project.screenshots.length}
              </span>
            </span>
            <button
              type="button"
              className="wip-ss-arrow"
              onClick={goNext}
              disabled={index === project.screenshots.length - 1}
              aria-label="Next screenshot"
              data-cursor="disable"
            >
              <MdChevronRight />
            </button>
          </section>
        </section>
      </section>
    </article>
  );
};

export default WipMobileColumn;
