import SectionTitle from "./SectionTitle";
import { aboutParagraphs, site } from "../data/portfolio";
import ClickableImage from "./ClickableImage";
import "./styles/About.css";
import "./styles/SectionTitle.css";
import "./styles/SectionSpacing.css";

const About = () => {
  return (
    <section className="about-section">
      <section className="about-layout">
        <figure className="about-photo">
          <ClickableImage
            src={site.profileImage}
            alt={site.name}
            className="about-photo-clickable"
            downloadName="arpit-bansal-profile.png"
          />
        </figure>
        <section className="about-me">
          <SectionTitle
            id="about"
            lead="A"
            accent="BOUT ME"
            as="h3"
            className="section-title--about nav-scroll-target"
          />
          {aboutParagraphs.map((paragraph) => (
            <p className="about-para" key={paragraph.slice(0, 32)}>
              {paragraph}
            </p>
          ))}
        </section>
      </section>
    </section>
  );
};

export default About;
