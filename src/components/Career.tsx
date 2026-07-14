import CompanyLogo from "./CompanyLogo";
import ProjectShowcase from "./ProjectShowcase";
import SectionTitle from "./SectionTitle";
import { amdocsMeta, amdocsProjects, portfolioNotes } from "../data/portfolio";
import CareerYHills from "./CareerYHills";
import "./styles/Career.css";
import "./styles/SectionTitle.css";
import "./styles/SectionSpacing.css";

const Career = () => {
  return (
    <section className="career-block">
      <section className="section-heading section-container">
        <SectionTitle id="career" lead="C" accent="AREER" className="nav-scroll-target" />
      </section>

      <section className="section-content-center section-container">
        <section className="career-amdocs-intro">
          <section className="career-company-row career-company-row--intro">
            <CompanyLogo
              src={amdocsMeta.logo}
              alt={`${amdocsMeta.company} logo`}
              href={amdocsMeta.website}
              size="lg"
            />
            <h3>
              {amdocsMeta.company} <span>· {amdocsMeta.role}</span>
            </h3>
          </section>
          <p className="career-amdocs-meta">
            {amdocsMeta.period} · {amdocsMeta.location}
          </p>
        </section>
      </section>

      <ProjectShowcase
        id="amdocs-work"
        scrollTriggerId="amdocs"
        variant="amdocs"
        flowLayout
        enablePin={false}
        title={
          <h3 className="section-subtitle-sm">
            Tools & <span>platforms</span>
          </h3>
        }
        footnote={portfolioNotes.amdocsConfidential}
        projects={amdocsProjects}
      />

      <CareerYHills />
    </section>
  );
};

export default Career;
