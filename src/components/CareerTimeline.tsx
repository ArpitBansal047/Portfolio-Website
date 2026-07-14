import { useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle";
import ClickableImage from "./ClickableImage";
import { educationBulletIcons, educationExperiences } from "../data/portfolio";
import { useHorizontalOverflow } from "./utils/useHorizontalOverflow";
import "./styles/SectionSpacing.css";
import "./styles/Career.css";
import "./styles/SectionTitle.css";
import "./styles/ImageLightbox.css";

const formatEducationLocation = (location: string) => {
  const splitAt = location.lastIndexOf(" · ");
  if (splitAt === -1) return location;

  const place = location.slice(0, splitAt);
  const grade = location.slice(splitAt + 3);

  return (
    <>
      {place} · <span className="career-grade">{grade}</span>
    </>
  );
};

const bulletLabels: Record<keyof typeof educationBulletIcons, string> = {
  book: "Books",
  badminton: "Badminton shuttlecock",
  chess: "Chess king",
};

const EducationBulletIcon = ({ badge }: { badge?: keyof typeof educationBulletIcons }) => {
  if (!badge) return null;

  const src = educationBulletIcons[badge];
  if (!src) return null;

  return (
    <ClickableImage
      src={src}
      alt={bulletLabels[badge]}
      className="career-bullet-img-btn"
      downloadName={`education-${badge}.png`}
    />
  );
};

const CareerTimeline = () => {
  const scrollRef = useRef<HTMLElement>(null);
  const hasOverflow = useHorizontalOverflow(scrollRef, [educationExperiences.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const resetScroll = () => {
      el.scrollLeft = 0;
    };

    const onWheel = (event: WheelEvent) => {
      const canScrollLeft = el.scrollLeft > 0;
      const canScrollRight = el.scrollLeft + el.clientWidth < el.scrollWidth - 1;

      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        event.stopPropagation();
        return;
      }

      if (event.deltaY !== 0 && (canScrollLeft || canScrollRight)) {
        el.scrollLeft += event.deltaY;
        event.preventDefault();
        event.stopPropagation();
      }
    };

    resetScroll();
    window.addEventListener("resize", resetScroll);
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("resize", resetScroll);
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <section className="career-section education-section section-container" id="education">
      <section className="section-heading">
        <SectionTitle lead="E" accent="DUCATION" />
      </section>

      <section className="career-container">
        <section className="education-scroll-wrap">
          <section
            ref={scrollRef}
            className="career-scroll career-scroll--horizontal education-scroll"
          >
            <section className="education-scroll-track">
              {educationExperiences.map((exp) => (
                <section className="education-tile-column" key={`${exp.company}-${exp.period}`}>
                  <article className={`career-card career-card--${exp.kind}`}>
                    <section className="career-card-head">
                      <span className="career-period">{exp.period}</span>
                      <span className={`career-kind career-kind--${exp.kind}`}>
                        {exp.kind === "work" ? "Work" : "Education"}
                      </span>
                    </section>

                    <section className="career-card-title-row">
                      <h4>{exp.role}</h4>
                    </section>
                    <h5>{exp.company}</h5>
                    <span className="career-location">
                      {formatEducationLocation(exp.location)}
                    </span>

                    <ul className="career-bullets">
                      {exp.bullets.map((bullet) => (
                        <li key={bullet.slice(0, 48)}>
                          <EducationBulletIcon badge={exp.badge} />
                          <span className="career-bullet-text">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                  <span className="education-tile-dot" aria-hidden="true" />
                </section>
              ))}
            </section>
          </section>
        </section>
        <p
          className={`education-scroll-hint${hasOverflow ? " education-scroll-hint--visible" : ""}`}
          aria-hidden={!hasOverflow}
        >
          Scroll for more
        </p>
      </section>
    </section>
  );
};

export default CareerTimeline;
