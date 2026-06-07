import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import SectionTitle from "./SectionTitle";
import ContactForm from "./ContactForm";
import { portfolioSiteMeta, site } from "../data/portfolio";
import "./styles/Contact.css";
import "./styles/SectionTitle.css";

const socialLinks = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "YouTube", href: site.youtube },
] as const;

const Contact = () => {
  return (
    <section className="contact-section section-container" id="contact">
      <section className="contact-container">
        <SectionTitle id="contact" lead="C" accent="ONTACT" className="nav-scroll-target" />

        <nav className="contact-social-row" aria-label="Social profiles">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-row__link"
              data-cursor="disable"
            >
              {link.label} <MdArrowOutward />
            </a>
          ))}
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-row__link contact-social-row__link--whatsapp"
            data-cursor="disable"
          >
            WhatsApp <SiWhatsapp aria-hidden="true" />
          </a>
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
            <h4>Phone</h4>
            <a href={`tel:${site.phone.replace(/-/g, "")}`} data-cursor="disable">
              {site.phone}
            </a>
          </article>
          <article className="contact-detail">
            <h4>WhatsApp</h4>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
            >
              Chat on WhatsApp
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

        <section className="contact-footer-row">
          <section className="contact-portfolio-meta">
            <h4>About this site</h4>
            <p>{portfolioSiteMeta.description}</p>
            <section className="contact-portfolio-tags">
              {portfolioSiteMeta.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </section>
          </section>
          <section className="contact-credit">
            <p className="contact-credit-line">Designed &amp; developed</p>
            <p className="contact-credit-line contact-credit-line--by">
              by <span>{site.name}</span>
            </p>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Contact;
