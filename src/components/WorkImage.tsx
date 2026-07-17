import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import ClickableImage from "./ClickableImage";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  /** When true, image is display-only (no external link overlay). */
  staticOnly?: boolean;
  blurFill?: boolean;
}

const WorkImage = (props: Props) => {
  const blurFill = props.blurFill ?? props.staticOnly ?? false;
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");

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
            src={props.image}
            alt={props.alt || "Project screenshot"}
            downloadName={`${props.alt || "project"}.png`}
            externalUrl={props.link}
            blurFill={blurFill}
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
          src={props.image}
          alt={props.alt || "Project screenshot"}
          downloadName={`${props.alt || "project"}.png`}
          externalUrl={props.link}
          blurFill={blurFill}
        />
        {props.link && (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="work-image-link"
            data-cursor="disable"
            aria-label={props.link.includes("github.com") ? "Open on GitHub" : "Open project link"}
          >
            {props.link.includes("github.com") ? (
              <SiGithub aria-hidden="true" />
            ) : (
              <MdArrowOutward aria-hidden="true" />
            )}
          </a>
        )}
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </section>
    </section>
  );
};

export default WorkImage;
