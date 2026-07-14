import { useMemo, useState, type CSSProperties } from "react";
import SectionTitle from "./SectionTitle";
import { certificates, type Certificate, type CertificateSection } from "../data/portfolio";
import { MdDownload, MdVisibility } from "react-icons/md";
import ImageLightbox from "./ImageLightbox";
import "./styles/Certificates.css";
import "./styles/SectionTitle.css";

const SECTION_TITLES: Record<CertificateSection, string> = {
  technical: "Technical",
  "non-technical": "Non-technical",
};

const CertCard = ({
  cert,
  onOpen,
}: {
  cert: Certificate;
  onOpen: (cert: Certificate) => void;
}) => (
  <article
    className={`cert-card${cert.type === "png" ? " cert-card--png" : ""}`}
    key={cert.title}
    style={{ "--cert-accent": cert.themeColor } as CSSProperties}
  >
    <button
      type="button"
      className="cert-visual"
      onClick={() => onOpen(cert)}
      data-cursor="disable"
      aria-label={`View ${cert.title}`}
    >
      <span className="cert-topic">{cert.topic}</span>
      <span className="cert-emoji" role="img" aria-hidden="true">
        {cert.emoji}
      </span>
      {cert.type === "png" ? (
        <img src={cert.file} alt="" className="cert-thumb" loading="lazy" />
      ) : (
        <span className="cert-pdf-badge">PDF</span>
      )}
    </button>
    <section className="cert-info">
      <h4>{cert.title}</h4>
      <p className="cert-issuer">{cert.issuer}</p>
      <section className="cert-actions">
        <a
          href={cert.file}
          download
          className="cert-action cert-action--download"
          style={{ "--cert-accent": cert.themeColor } as CSSProperties}
          data-cursor="disable"
          aria-label={`Download ${cert.title}`}
        >
          <MdDownload aria-hidden="true" />
          <span className="cert-action__label">Download</span>
        </a>
        <button
          type="button"
          className="cert-action cert-action--ghost"
          onClick={() => onOpen(cert)}
          data-cursor="disable"
          aria-label={`View ${cert.title}`}
        >
          <MdVisibility aria-hidden="true" />
          <span className="cert-action__label">View</span>
        </button>
      </section>
    </section>
  </article>
);

const Certificates = () => {
  const [preview, setPreview] = useState<{
    src: string;
    alt: string;
    file: string;
  } | null>(null);

  const grouped = useMemo(() => {
    return (["technical", "non-technical"] as CertificateSection[]).map((section) => ({
      section,
      items: certificates.filter((c) => c.section === section),
    }));
  }, []);

  const openCert = (cert: Certificate) => {
    if (cert.type === "png") {
      setPreview({ src: cert.file, alt: cert.title, file: cert.file });
    } else {
      window.open(cert.file, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="certs-section section-container" id="certificates">
      <SectionTitle lead="C" accent="ERTIFICATIONS" />

      {grouped.map(({ section, items }) => (
        <section className="certs-group" key={section}>
          <header className="certs-group__head">
            <h3 className="certs-group__title">{SECTION_TITLES[section]}</h3>
          </header>
          <section className="certs-grid">
            {items.map((cert) => (
              <CertCard key={cert.title} cert={cert} onOpen={openCert} />
            ))}
          </section>
        </section>
      ))}

      {preview && (
        <ImageLightbox
          src={preview.src}
          alt={preview.alt}
          open={Boolean(preview)}
          onClose={() => setPreview(null)}
          downloadName={`${preview.alt.replace(/\s+/g, "-").toLowerCase()}.png`}
          externalUrl={preview.file}
        />
      )}
    </section>
  );
};

export default Certificates;
