import { useEffect, useState } from "react";
import ImageLightbox from "./ImageLightbox";
import "./styles/ImageLightbox.css";

type ClickableImageProps = {
  src: string;
  alt: string;
  className?: string;
  downloadName?: string;
  externalUrl?: string;
};

const PLACEHOLDER = "/images/placeholder.webp";

const ClickableImage = ({
  src,
  alt,
  className,
  downloadName,
  externalUrl,
}: ClickableImageProps) => {
  const [open, setOpen] = useState(false);
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  useEffect(() => {
    setFailedSrc(null);
    setOpen(false);
  }, [src]);

  const displaySrc = failedSrc === src ? PLACEHOLDER : src;

  return (
    <>
      <button
        type="button"
        className={`clickable-image ${className || ""}`}
        onClick={() => setOpen(true)}
        aria-label={`View ${alt}`}
        data-cursor="disable"
      >
        <img
          src={displaySrc}
          alt={alt}
          loading="lazy"
          onError={() => setFailedSrc(src)}
        />
        <span className="clickable-image__hint">Click to zoom</span>
      </button>
      <ImageLightbox
        src={displaySrc}
        alt={alt}
        open={open}
        onClose={() => setOpen(false)}
        downloadName={downloadName}
        externalUrl={externalUrl}
      />
    </>
  );
};

export default ClickableImage;
