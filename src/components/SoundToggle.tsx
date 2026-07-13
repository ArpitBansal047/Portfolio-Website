import { LuVolume2, LuVolumeX } from "react-icons/lu";
import { useSound } from "../context/SoundProvider";
import "./styles/NavbarControls.css";

const SoundToggle = () => {
  const { muted, enabled, toggleMute, enableSound } = useSound();

  const handleClick = () => {
    if (!enabled) {
      enableSound();
      return;
    }
    toggleMute();
  };

  const isOff = !enabled || muted;

  return (
    <button
      type="button"
      className={`navbar-icon-btn${isOff ? " navbar-icon-btn--muted" : ""}`}
      onClick={handleClick}
      aria-label={isOff ? "Enable ambient sound" : "Mute ambient sound"}
      aria-pressed={!isOff}
      data-cursor="disable"
    >
      {isOff ? <LuVolumeX aria-hidden="true" /> : <LuVolume2 aria-hidden="true" />}
    </button>
  );
};

export default SoundToggle;
