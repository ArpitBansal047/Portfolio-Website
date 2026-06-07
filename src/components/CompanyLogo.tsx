import ClickableImage from "./ClickableImage";
import "./styles/ImageLightbox.css";

type CompanyLogoProps = {
  src: string;
  alt: string;
  href?: string;
  size?: "md" | "lg";
};

const CompanyLogo = ({ src, alt, href, size = "md" }: CompanyLogoProps) => {
  return (
    <ClickableImage
      src={src}
      alt={alt}
      className={`company-logo-clickable company-logo-clickable--${size}`}
      downloadName={`${alt.replace(/\s+/g, "-").toLowerCase()}.png`}
      externalUrl={href}
    />
  );
};

export default CompanyLogo;
