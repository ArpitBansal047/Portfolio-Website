import { TbNotes } from "react-icons/tb";
import HoverLinks from "./HoverLinks";
import { site } from "../data/portfolio";
import "./styles/SocialIcons.css";

/** Resume rail only — social links live in Contact section. */
const SocialIcons = () => {
  return (
    <section className="icons-section">
      <a
        className="resume-button"
        href={site.resumePath}
        download
        data-cursor="disable"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </section>
  );
};

export default SocialIcons;
