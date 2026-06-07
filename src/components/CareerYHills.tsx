import CompanyLogo from "./CompanyLogo";
import { yhillsExperience } from "../data/portfolio";
import "./styles/Career.css";
import "./styles/SectionSpacing.css";

const CareerYHills = () => {
  const exp = yhillsExperience;

  return (
    <section className="career-yhills" id="yhills">
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
            <p className="yhills-card__period">{exp.period}</p>
            <h4 className="yhills-card__role">{exp.role}</h4>
            <h5 className="yhills-card__company">{exp.company}</h5>
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
  );
};

export default CareerYHills;
