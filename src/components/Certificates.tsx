import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { certificates } from "../data/portfolio";
import { MdArrowOutward, MdDownload } from "react-icons/md";
import ImageLightbox from "./ImageLightbox";
import "./styles/Certificates.css";
import "./styles/SectionTitle.css";

const Certificates = () => {
  const [preview, setPreview] = useState<{
    src: string;
    alt: string;
    file: string;
  } | null>(null);

  return (
    <section className="certs-section section-container" id="certificates">
      <SectionTitle lead="C" accent="ERTIFICATIONS" />
      <p className="section-lead certs-subtitle">
        Click a card to preview — download the full certificate anytime.
      </p>
      <section className="certs-grid">
        {certificates.map((cert) => (
          <article className="cert-card" key={cert.title}>
            <button
              type="button"
              className="cert-visual"
              onClick={() => {
                if (cert.type === "png") {
                  setPreview({ src: cert.file, alt: cert.title, file: cert.file });
                } else {
                  window.open(cert.file, "_blank", "noopener,noreferrer");
                }
              }}
              data-cursor="disable"
              aria-label={`View ${cert.title}`}
            >
              <span className="cert-topic">{cert.topic}</span>
              <span className="cert-emoji" role="img" aria-hidden="true">
                {cert.emoji}
              </span>
              {cert.type === "png" ? (
                <img
                  src={cert.file}
                  alt=""
                  className="cert-thumb"
                  loading="lazy"
                />
              ) : (
                <span className="cert-pdf-badge">PDF</span>
              )}
              <span className="cert-zoom-hint">Click to {cert.type === "png" ? "zoom" : "open"}</span>
            </button>
            <section className="cert-info">
              <h4>{cert.title}</h4>
              <p>{cert.issuer}</p>
              <section className="cert-actions">
                <a
                  href={cert.file}
                  download
                  className="cert-action"
                  data-cursor="disable"
                >
                  <MdDownload /> Download
                </a>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-action cert-action--ghost"
                  data-cursor="disable"
                >
                  View <MdArrowOutward />
                </a>
              </section>
            </section>
          </article>
        ))}
      </section>

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
