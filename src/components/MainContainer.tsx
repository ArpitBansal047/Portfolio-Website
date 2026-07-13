import About from "./About";
import BeyondCode from "./BeyondCode";
import Career from "./Career";
import CareerTimeline from "./CareerTimeline";
import Contact from "./Contact";
import DuolingoFlyer from "./DuolingoFlyer";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import RecruiterChatbot, { RecruiterChatFab } from "./RecruiterChatbot";
import SkillsRegion from "./SkillsRegion";
import StickyRecruiterCta from "./StickyRecruiterCta";
import "./styles/BeyondCode.css";
import "./styles/SectionSpacing.css";
import setSplitText from "./utils/splitText";
import { useEffect, useState } from "react";

const MainContainer = () => {
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const resizeHandler = () => setSplitText();
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    (window as Window & { openRecruiterChat?: () => void }).openRecruiterChat = () =>
      setChatOpen(true);
  }, []);

  return (
    <section className="container-main">
      <Cursor />
      <Navbar />
      <StickyRecruiterCta />
      <RecruiterChatFab onOpen={() => setChatOpen(true)} />
      <RecruiterChatbot open={chatOpen} onClose={() => setChatOpen(false)} />
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
