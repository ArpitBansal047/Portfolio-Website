import { useEffect, useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Project } from "../data/portfolio";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(useGSAP);

type ProjectShowcaseProps = {
  id: string;
  scrollTriggerId: string;
  title: React.ReactNode;
  subtitle: string;
  projects: Project[];
  variant?: "default" | "amdocs";
  enablePin?: boolean;
  flowLayout?: boolean;
};

const ProjectShowcase = ({
  id,
  scrollTriggerId,
  title,
  subtitle,
  projects,
  variant = "default",
  enablePin = true,
  flowLayout = false,
}: ProjectShowcaseProps) => {
  const usePin = enablePin && !flowLayout;
  const scrollRef = useRef<HTMLElement>(null);
  const isScrollOnly = flowLayout && variant === "amdocs";

  useEffect(() => {
    if (!flowLayout) return;

    const el = scrollRef.current;
    if (!el) return;

    const resetScroll = () => {
      el.scrollLeft = 0;
    };

    resetScroll();
    window.addEventListener("resize", resetScroll);

    return () => {
      window.removeEventListener("resize", resetScroll);
    };
  }, [flowLayout, projects.length]);

  useGSAP(() => {
    if (!usePin || window.innerWidth <= 1024) return;

    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName(`work-box--${scrollTriggerId}`);
      if (!box.length) return;
      const container = document.querySelector(
        `.work-container--${scrollTriggerId}`
      )!;
      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: `#${id}`,
        start: "top top",
        end: `+=${translateX}`,
        scrub: 0.8,
        pin: true,
        pinType: "transform",
        anticipatePin: 1,
        invalidateOnRefresh: true,
        id: scrollTriggerId,
      },
    });

    timeline.to(`.work-flex--${scrollTriggerId}`, {
      x: -translateX,
      ease: "none",
    });

    gsap.utils.toArray<HTMLElement>(`.work-box--${scrollTriggerId}`).forEach((box) => {
      gsap.fromTo(
        box.querySelector(".work-image"),
        { y: 30, scale: 0.96 },
        {
          y: -20,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: box,
            containerAnimation: timeline,
            start: "left 80%",
            end: "right 20%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById(scrollTriggerId)?.kill();
    };
  }, [usePin, id, scrollTriggerId]);

  return (
    <section
      className={`work-section ${variant === "amdocs" ? "work-section--amdocs" : ""} ${flowLayout ? "work-section--flow" : ""}`}
      id={id}
      data-cursor="disable"
    >
      <section className={`work-container work-container--${scrollTriggerId} section-container`}>
        {title}
        <p className="work-subtitle">{subtitle}</p>
        <section className="work-scroll-wrap">
          <section
            ref={scrollRef}
            className={`work-flex work-flex--${scrollTriggerId}`}
          >
            {projects.map((project) => (
              <section
                className={`work-box work-box--${scrollTriggerId}`}
                key={project.id}
              >
                <section className="work-info">
                  <section className="work-title">
                    <h3>{project.number}</h3>
                    <section>
                      <h4>{project.name}</h4>
                      <p>{project.category}</p>
                    </section>
                  </section>
                  <h4>The problem</h4>
                  <p>{project.problem}</p>
                  <h4>The impact</h4>
                  <p>{project.impact}</p>
                  <h4>Tech stack</h4>
                  <section className="work-tags">
                    {project.stack.map((tag) => (
                      <span key={tag} className="work-tag">
                        {tag}
                      </span>
                    ))}
                  </section>
                  <section className="work-actions">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-btn work-btn--primary"
                        data-cursor="disable"
                      >
                        Live Demo <MdArrowOutward />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-btn work-btn--ghost"
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
                  staticOnly={isScrollOnly}
                />
              </section>
            ))}
          </section>
        </section>
        {isScrollOnly && projects.length > 1 && (
          <p className="work-scroll-hint">
            Scroll right for more tools
          </p>
        )}
      </section>
    </section>
  );
};

export default ProjectShowcase;
