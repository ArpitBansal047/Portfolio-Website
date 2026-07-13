import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "../context/ThemeProvider";
import "./styles/NavbarControls.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="navbar-icon-btn"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      data-cursor="disable"
    >
      {theme === "dark" ? <LuSun aria-hidden="true" /> : <LuMoon aria-hidden="true" />}
    </button>
  );
};

export default ThemeToggle;
