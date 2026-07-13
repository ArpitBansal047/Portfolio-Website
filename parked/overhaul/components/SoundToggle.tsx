import { MdVolumeOff, MdVolumeUp } from "react-icons/md";
import { useSound } from "../context/SoundProvider";
import "./styles/SoundToggle.css";

const SoundToggle = () => {
  const { muted, enabled, toggleMute, enableSound } = useSound();

  if (!enabled) {
    return (
      <button
        type="button"
        className="sound-toggle sound-toggle--prompt"
        onClick={enableSound}
        aria-label="Enable ambient sound"
        data-cursor="disable"
      >
        Enable sound
      </button>
    );
  }

  return (
    <button
      type="button"
      className="sound-toggle"
      onClick={toggleMute}
      aria-label={muted ? "Unmute sound" : "Mute sound"}
      aria-pressed={muted}
      data-cursor="disable"
    >
      {muted ? <MdVolumeOff /> : <MdVolumeUp />}
    </button>
  );
};

export default SoundToggle;
