import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillCategories } from "../data/portfolio";
import {
  HIGHLIGHT_SKILL_EVENT,
  normalizeSkill,
} from "../utils/skillHighlight";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLElement | null)[]>([]);
  const setRef = (el: HTMLElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  useEffect(() => {
    const onHighlight = (event: Event) => {
      const custom = event as CustomEvent<string>;
      const skill = custom.detail;
      const target = normalizeSkill(skill);

      document.querySelectorAll(".what-tags").forEach((tag) => {
        const el = tag as HTMLElement;
        const match =
          normalizeSkill(el.textContent || "").includes(target) ||
          target.includes(normalizeSkill(el.textContent || ""));
        el.classList.toggle("what-tags--highlight", match);
      });
    };

    window.addEventListener(HIGHLIGHT_SKILL_EVENT, onHighlight);
    return () => window.removeEventListener(HIGHLIGHT_SKILL_EVENT, onHighlight);
  }, []);

  return (
    <section className="whatIDO" id="skills" data-cursor="disable">
      <section className="what-box">
        <h2 className="title">
          S<span className="hat-h2">KILLS</span>
          <section>
            & <span className="do-h2"> STACK</span>
          </section>
        </h2>
      </section>
      <section className="what-box">
        <section className="what-box-in">
          <section className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </section>
          {skillCategories.map((cat, index) => (
            <section
              className="what-content what-noTouch"
              ref={(el) => setRef(el, index)}
              key={cat.title}
            >
              <section className="what-border1">
                <svg height="100%">
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                  <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                </svg>
              </section>
              <section className="what-corner"></section>
              <section className="what-content-in">
                <h3>{cat.title.toUpperCase()}</h3>
                <h4>Tools I use confidently</h4>
                <h5>Technologies</h5>
                <section className="what-content-flex">
                  {cat.skills.map((skill) => (
                    <section className="what-tags" key={skill} data-skill={skill}>
                      {skill}
                    </section>
                  ))}
                </section>
                <section className="what-arrow"></section>
              </section>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
};

export default WhatIDo;

function handleClick(container: HTMLElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);
    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
