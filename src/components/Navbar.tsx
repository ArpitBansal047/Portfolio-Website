import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { site } from "../data/portfolio";
import { scrollToSection } from "./utils/scrollToSection";
import { setSmoother } from "./utils/scrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    const instance = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.15,
      speed: 1.15,
      effects: window.innerWidth > 1024,
      smoothTouch: 0.1,
      autoResize: true,
      ignoreMobileResize: true,
    });

    setSmoother(instance);
    instance.scrollTop(0);
    instance.paused(true);

    const links = document.querySelectorAll(".header ul a[data-href]");
    const onNavClick = (e: Event) => {
      e.preventDefault();
      const anchor = e.currentTarget as HTMLAnchorElement;
      scrollToSection(anchor.getAttribute("data-href") || "");
    };

    links.forEach((elem) => elem.addEventListener("click", onNavClick));

    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });

    return () => {
      links.forEach((elem) => elem.removeEventListener("click", onNavClick));
    };
  }, []);

  return (
    <>
      <section className="header">
        <section className="navbar-left">
          <button
            type="button"
            className="navbar-avatar-clickable"
            onClick={() => window.location.reload()}
            aria-label="Reload portfolio"
            data-cursor="disable"
          >
            <img src={site.profileImage} alt={site.name} className="navbar-avatar" />
          </button>
          <a
            href={`mailto:${site.email}`}
            className="navbar-email"
            data-cursor="disable"
            title={site.email}
          >
            {site.email}
          </a>
        </section>
        <ul>
          <li>
            <a data-href="#about" href="#about" data-cursor="disable">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#career" href="#career" data-cursor="disable">
              <HoverLinks text="CAREER" />
            </a>
          </li>
          <li>
            <a data-href="#apps" href="#apps" data-cursor="disable">
              <HoverLinks text="PROJECTS" />
            </a>
          </li>
          <li>
            <a data-href="#techstack" href="#techstack" data-cursor="disable">
              <HoverLinks text="STACK" />
            </a>
          </li>
          <li>
            <a
              data-href="#beyond"
              href="#beyond"
              data-cursor="disable"
              aria-label="Beyond Code"
            >
              <HoverLinks text="CODE" strike />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact" data-cursor="disable">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </section>

      <section className="landing-circle1"></section>
      <section className="landing-circle2"></section>
      <section className="nav-fade"></section>
    </>
  );
};

export default Navbar;
