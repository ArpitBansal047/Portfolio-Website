import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { LuMenu, LuX } from "react-icons/lu";
import { site } from "../data/portfolio";
import { scrollToSection } from "./utils/scrollToSection";
import { setSmoother } from "./utils/scrollSmoother";
import ThemeToggle from "./ThemeToggle";
import SoundToggle from "./SoundToggle";
import "./styles/Navbar.css";
import "./styles/NavbarControls.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const NAV_LINKS = [
  { href: "#about", label: "ABOUT" },
  { href: "#career", label: "CAREER" },
  { href: "#apps", label: "PROJECTS" },
  { href: "#techstack", label: "STACK" },
  { href: "#beyond", label: "CODE", strike: true },
  { href: "#contact", label: "CONTACT" },
] as const;

const NavLinkItems = () => (
  <>
    {NAV_LINKS.map((link) => (
      <li key={link.href}>
        <a data-href={link.href} href={link.href} data-cursor="disable">
          <HoverLinks text={link.label} strike={"strike" in link ? link.strike : undefined} />
        </a>
      </li>
    ))}
  </>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

    const onNavClick = (e: Event) => {
      const anchor = (e.target as HTMLElement).closest("a[data-href]");
      if (!anchor) return;
      e.preventDefault();
      scrollToSection(anchor.getAttribute("data-href") || "");
      setMenuOpen(false);
    };

    document.addEventListener("click", onNavClick);

    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
      if (window.innerWidth > 768) setMenuOpen(false);
    });

    return () => {
      document.removeEventListener("click", onNavClick);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-menu-open", menuOpen);
    return () => document.body.classList.remove("nav-menu-open");
  }, [menuOpen]);

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

        <section className="navbar-right">
          <ul className="navbar-links navbar-links--desktop">
            <NavLinkItems />
          </ul>

          <div className="navbar-controls navbar-controls--desktop" aria-label="Theme and sound">
            <ThemeToggle />
            <SoundToggle />
          </div>

          <button
            type="button"
            className="navbar-menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="navbar-mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            data-cursor="disable"
          >
            {menuOpen ? <LuX aria-hidden="true" /> : <LuMenu aria-hidden="true" />}
          </button>
        </section>
      </section>

      <nav
        id="navbar-mobile-menu"
        className={`navbar-drawer${menuOpen ? " navbar-drawer--open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <ul className="navbar-links navbar-links--mobile">
          <NavLinkItems />
        </ul>
        <div className="navbar-divider--mobile" aria-hidden="true" />
        <div className="navbar-controls navbar-controls--mobile">
          <span className="navbar-menu-label">Preferences</span>
          <div className="navbar-controls-row">
            <ThemeToggle />
            <SoundToggle />
          </div>
        </div>
      </nav>

      {menuOpen && (
        <button
          type="button"
          className="navbar-backdrop"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          data-cursor="disable"
        />
      )}

      <section className="landing-circle1"></section>
      <section className="landing-circle2"></section>
      <section className="nav-fade"></section>
    </>
  );
};

export default Navbar;
