import { heroMetrics, site } from "../data/portfolio";
import HeroCodeEditor from "./HeroCodeEditor";
import HeroSphere from "./HeroSphere";
import "./styles/Landing.css";

const Landing = () => {
  return (
    <section className="landing-section" id="landingDiv">
      <div className="landing-hero-grid">
        <section className="landing-left">
          <p className="landing-greeting">Hello! I&apos;m</p>
          <h1 className="landing-name">
            <span className="landing-name__line">ARPIT</span>
            <br />
            <span className="landing-name__line">BANSAL.</span>
          </h1>
          <p className="landing-tagline">
            Amdocs Software Developer | Full-Stack &amp; Gen AI
          </p>

          <section className="landing-actions">
            <span className="open-roles-pill landing-open-pill" role="status">
              <span className="landing-open-pill__status" aria-hidden="true" />
              Open to Roles
            </span>
            <a
              href={site.resumePath}
              download
              className="hero-btn hero-btn--resume"
              data-cursor="disable"
            >
              Download Resume
            </a>
          </section>
        </section>

        <section className="landing-right">
          <HeroCodeEditor />

          <section className="hero-stats-bar" aria-label="Impact metrics">
            <div className="hero-stats-bar__inner">
              {heroMetrics.map((metric) => (
                <article className="hero-stat-block" key={metric.title}>
                  <span className="hero-stat-block__value">{metric.value}</span>
                  <span className="hero-stat-block__meta">
                    {metric.title}
                    <span className="hero-stat-block__detail">
                      {" "}
                      ({metric.detail})
                    </span>
                  </span>
                </article>
              ))}
            </div>
          </section>
        </section>
      </div>

      <HeroSphere />
    </section>
  );
};

export default Landing;
