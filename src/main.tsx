import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { site } from "./data/portfolio";
import "./index.css";
import "./components/styles/Breakpoints.css";
import "./components/styles/Responsive.css";

document.title = site.tabTitle;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
