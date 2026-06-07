import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import type { IconType } from "react-icons";
import SectionTitle from "./SectionTitle";
import ContactForm from "./ContactForm";
import { site } from "../data/portfolio";
import "./styles/Contact.css";
import "./styles/SectionTitle.css";

type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
  variant: "github" | "linkedin" | "whatsapp";
};

const socialLinks: SocialLink[] = [
  { label: "WhatsApp", href: site.whatsapp, icon: SiWhatsapp, variant: "whatsapp" },
  { label: "LinkedIn", href: site.linkedin, icon: FaLinkedinIn, variant: "linkedin" },
  { label: "GitHub", href: site.github, icon: SiGithub, variant: "github" },
];

const Contact = () => {
  return (
    <section className="contact-section section-container" id="contact">
      <section className="contact-container">
        <SectionTitle id="contact" lead="C" accent="ONTACT" className="nav-scroll-target" />

        <nav className="contact-social-row" aria-label="Social profiles">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`contact-social-row__link contact-social-row__link--${link.variant}`}
                data-cursor="disable"
              >
                {link.label} <Icon aria-hidden="true" />
              </a>
            );
          })}
        </nav>

        <ContactForm />

        <section className="contact-details-grid">
          <article className="contact-detail">
            <h4>Email</h4>
            <a href={`mailto:${site.email}`} data-cursor="disable">
              {site.email}
            </a>
          </article>
          <article className="contact-detail">
            <h4>Location</h4>
            <p>{site.location}</p>
          </article>
          <article className="contact-detail contact-detail--wide">
            <h4>Availability</h4>
            <p>{site.availability}</p>
          </article>
        </section>

        <footer className="contact-footer-row">
          <p className="contact-credit">
            <span className="contact-credit-lead">Designed &amp; developed by</span>
            <span className="contact-credit-name-row">
              <span className="contact-credit-name">{site.name}</span>
              <span className="contact-credit-sep" aria-hidden="true">
                ·
              </span>
              <span className="contact-credit-year">© 2026</span>
            </span>
          </p>
        </footer>
      </section>
    </section>
  );
};

export default Contact;
