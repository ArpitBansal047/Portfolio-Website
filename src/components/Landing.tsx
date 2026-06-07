import { MdArrowOutward } from "react-icons/md";
import { heroMetrics, site } from "../data/portfolio";
import { scrollToSection } from "./utils/scrollToSection";
import "./styles/Landing.css";
import "./styles/SectionSpacing.css";

const Landing = () => {
  return (
    <section className="landing-section" id="landingDiv">
      <section className="landing-container">
        <section className="landing-intro">
          <p className="landing-greeting">Hello! I&apos;m</p>
          <h1 className="landing-name">
            ARPIT
            <br />
            <span>BANSAL</span>
          </h1>
        </section>

        <section className="landing-hero-side">
          <p className="landing-role">{site.title}</p>

          <div className="landing-swap landing-swap--accent" aria-hidden="true">
            <span className="landing-h2-1">Full-Stack</span>
            <span className="landing-h2-2">Developer</span>
          </div>

          <div className="landing-swap landing-swap--tagline" aria-hidden="true">
            <span className="landing-h2-info">GenAI · React</span>
            <span className="landing-h2-info-1">Automation</span>
          </div>

          <span className="open-roles-pill" role="status">
            Open to roles
          </span>

          <section className="landing-contact">
            <a
              href={`mailto:${site.email}`}
              className="landing-email"
              data-cursor="disable"
            >
              {site.email}
            </a>
          </section>

          <section className="hero-metrics">
            {heroMetrics.map((metric) => (
              <article className="hero-metric" key={metric.title}>
                <strong>{metric.value}</strong>
                <h4 className="hero-metric-title">{metric.title}</h4>
                <p className="hero-metric-detail">{metric.detail}</p>
              </article>
            ))}
          </section>

          <section className="hero-cta">
            <a
              href={site.resumePath}
              download
              className="hero-btn hero-btn--primary"
              data-cursor="disable"
            >
              Download Resume
            </a>
            <button
              type="button"
              className="hero-btn hero-btn--ghost"
              data-cursor="disable"
              onClick={() => scrollToSection("#contact")}
            >
              Contact Me <MdArrowOutward />
            </button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Landing;
