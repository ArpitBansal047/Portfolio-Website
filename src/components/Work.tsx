import ProjectCarousel from "./ProjectCarousel";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolio";
import "./styles/SectionTitle.css";

const Work = () => {
  return (
    <section className="projects-subsection projects-subsection--websites">
      <ProjectCarousel
        id="websites"
        title={<SectionTitle lead="W" accent="EBSITES" as="h3" className="section-title--sub" />}
        subtitle="Personal web builds — Cryptoverse, Streamer, and Cyberpunks."
        projects={projects}
        showGithub={false}
        compact
      />
    </section>
  );
};

export default Work;
