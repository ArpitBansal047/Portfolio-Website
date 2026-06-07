import { useEffect } from "react";
import { createPortal } from "react-dom";
import { MdClose, MdDownload, MdOpenInNew } from "react-icons/md";
import { lockPageScroll, unlockPageScroll } from "../utils/lightboxScroll";
import "./styles/ImageLightbox.css";

type ImageLightboxProps = {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
  downloadName?: string;
  externalUrl?: string;
};

const ImageLightbox = ({
  src,
  alt,
  open,
  onClose,
  downloadName,
  externalUrl,
}: ImageLightboxProps) => {
  useEffect(() => {
    if (!open) return;

    lockPageScroll();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      unlockPageScroll();
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div className="lightbox-panel" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close"
          data-cursor="disable"
        >
          <MdClose />
        </button>
        <img src={src} alt={alt} className="lightbox-image" />
        <section className="lightbox-actions">
          <a
            href={src}
            download={downloadName || alt.replace(/\s+/g, "-").toLowerCase()}
            className="lightbox-btn"
            data-cursor="disable"
          >
            <MdDownload /> Download
          </a>
          {externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="lightbox-btn lightbox-btn--ghost"
              data-cursor="disable"
            >
              <MdOpenInNew /> Open original
            </a>
          )}
        </section>
      </div>
    </div>,
    document.body
  );
};

export default ImageLightbox;
