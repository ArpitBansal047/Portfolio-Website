import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import ClickableImage from "./ClickableImage";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  /** When true, image is display-only (no external link overlay). */
  staticOnly?: boolean;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const [imgSrc] = useState(props.image);

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      setVideo(URL.createObjectURL(blob));
    }
  };

  if (props.staticOnly) {
    return (
      <section className="work-image work-image--static-only">
        <section className="work-image-in work-image-in--static">
          <ClickableImage
            src={imgSrc}
            alt={props.alt || "Project screenshot"}
            downloadName={`${props.alt || "project"}.png`}
            externalUrl={props.link}
          />
        </section>
      </section>
    );
  }

  return (
    <section className="work-image">
      <section
        className="work-image-in work-image-in--static"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
      >
        <ClickableImage
          src={imgSrc}
          alt={props.alt || "Project screenshot"}
          downloadName={`${props.alt || "project"}.png`}
          externalUrl={props.link}
        />
        {props.link && (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="work-image-link"
            data-cursor="disable"
          >
            <MdArrowOutward />
          </a>
        )}
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </section>
    </section>
  );
};

export default WorkImage;
