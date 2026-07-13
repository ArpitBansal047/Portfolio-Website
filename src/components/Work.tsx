import ProjectCarousel from "./ProjectCarousel";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolio";
import "./styles/SectionTitle.css";

const Work = () => {
  return (
    <section className="projects-subsection projects-subsection--websites">
      <ProjectCarousel
        id="websites"
        title={<SectionTitle lead="W" accent="EB EXPERIMENTS" as="h3" className="section-title--sub" />}
        subtitle="Earlier full-stack builds — Cryptoverse unified crypto tracking (10K+ API calls/day with smart caching) and Streamer, a Twitch-style RTMP prototype with OAuth, WebSockets, and FLV playback (~99% uptime across 50+ live tests)."
        projects={projects}
        showGithub={false}
        compact
      />
    </section>
  );
};

export default Work;
