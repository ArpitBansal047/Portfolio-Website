import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import { beyondCode, BeyondItem } from "../data/portfolio";
import { MdArrowOutward } from "react-icons/md";
import ClickableImage from "./ClickableImage";
import "./styles/BeyondCode.css";
import "./styles/SectionTitle.css";

const BeyondCard = ({ item }: { item: BeyondItem }) => {
  const [expanded, setExpanded] = useState(false);
  const [needsReadMore, setNeedsReadMore] = useState(false);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = descRef.current;
    if (!el) return;

    const measure = () => {
      if (expanded) return;
      setNeedsReadMore(el.scrollHeight > el.clientHeight + 1);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [item.description, expanded]);

  return (
    <article
      className={`beyond-card ${expanded ? "beyond-card--expanded" : ""}`}
      data-cursor="disable"
    >
      <section className="beyond-card-media">
        {item.image ? (
          <ClickableImage
            src={item.image}
            alt={item.title}
            className={item.imageClass}
            downloadName={`${item.title.replace(/\s+/g, "-").toLowerCase()}.png`}
          />
        ) : (
          <span className="beyond-emoji" role="img" aria-label={item.title}>
            {item.emoji}
          </span>
        )}
      </section>

      <section className="beyond-card-body">
        <h3>{item.title}</h3>
        <p ref={descRef}>{item.description}</p>
        {(needsReadMore || expanded) && (
          <button
            type="button"
            className="beyond-read-more"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            data-cursor="disable"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="beyond-link"
            data-cursor="disable"
          >
            {item.linkLabel} <MdArrowOutward />
          </a>
        )}
      </section>
    </article>
  );
};

const BeyondCode = () => {
  return (
    <section className="beyond-section section-container">
      <section className="beyond-heading section-heading">
        <SectionTitle id="beyond" lead="B" accent="EYOND CODE" className="nav-scroll-target" />
      </section>

      <section className="beyond-grid">
        {beyondCode.items.map((item) => (
          <BeyondCard key={item.title} item={item} />
        ))}
      </section>
    </section>
  );
};

export default BeyondCode;
