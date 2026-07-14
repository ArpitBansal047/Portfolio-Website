import CompanyLogo from "./CompanyLogo";
import { yhillsExperience } from "../data/portfolio";
import "./styles/Career.css";
import "./styles/SectionSpacing.css";

const CareerYHills = () => {
  const exp = yhillsExperience;

  return (
    <section className="career-yhills" id="yhills">
      <section className="section-container yhills-card-wrap">
      <article className="yhills-card">
        <section className="yhills-card__header">
          <CompanyLogo
            src={exp.logo}
            alt={`${exp.company} logo`}
            href={exp.website}
            size="lg"
          />
          <section className="yhills-card__identity">
            <span className="yhills-card__kind">Internship</span>
            <h5 className="yhills-card__company">{exp.company}</h5>
            <h4 className="yhills-card__role">{exp.role}</h4>
            <p className="yhills-card__period">{exp.period}</p>
            <p className="yhills-card__location">{exp.location}</p>
          </section>
        </section>

        <p className="yhills-summary">{exp.summary}</p>

        <section className="yhills-metrics" aria-label="Internship highlights">
          {exp.metrics.map((metric) => (
            <span key={metric}>{metric}</span>
          ))}
        </section>

        <ul className="career-bullets yhills-card__bullets">
          {exp.bullets.map((bullet) => (
            <li key={bullet.slice(0, 48)}>{bullet}</li>
          ))}
        </ul>
      </article>
      </section>
    </section>
  );
};

export default CareerYHills;
