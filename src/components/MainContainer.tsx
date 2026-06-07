import About from "./About";
import BeyondCode from "./BeyondCode";
import Career from "./Career";
import CareerTimeline from "./CareerTimeline";
import Contact from "./Contact";
import DuolingoFlyer from "./DuolingoFlyer";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SkillsRegion from "./SkillsRegion";
import SocialIcons from "./SocialIcons";
import "./styles/BeyondCode.css";
import "./styles/SectionSpacing.css";
import setSplitText from "./utils/splitText";
import { useEffect } from "react";

const MainContainer = () => {
  useEffect(() => {
    const resizeHandler = () => setSplitText();
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <section className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      <section id="smooth-wrapper">
        <section id="smooth-content">
          <section className="container-main">
            <Landing />
            <About />
            <Career />
            <SkillsRegion />
            <CareerTimeline />
            <section className="duo-flight-corridor">
              <section className="duo-flight-zone" aria-hidden="true">
                <DuolingoFlyer />
              </section>
              <BeyondCode />
            </section>
            <Contact />
          </section>
        </section>
      </section>
    </section>
  );
};

export default MainContainer;
