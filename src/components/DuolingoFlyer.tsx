import { useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import ClickableImage from "./ClickableImage";
import { duolingoMeta } from "../data/portfolio";
import "./styles/ImageLightbox.css";

const DUO_OWL_SRC = "/images/beyond/duo-owl.png";

const TOOLTIP_W = 280;
const TOOLTIP_H = 96;
const MARGIN = 16;

const clampTooltipPos = (rect: DOMRect) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  let x = rect.left + rect.width / 2;
  let y = rect.bottom + 12;

  x = Math.max(MARGIN + TOOLTIP_W / 2, Math.min(vw - MARGIN - TOOLTIP_W / 2, x));

  if (y + TOOLTIP_H > vh - MARGIN) {
    y = rect.top - TOOLTIP_H - 12;
  }
  y = Math.max(MARGIN, Math.min(vh - MARGIN - TOOLTIP_H, y));

  return { x, y };
};

const DuolingoFlyer = () => {
  const ref = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);
  const [tipPos, setTipPos] = useState({ x: 0, y: 0 });

  const showTip = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setTipPos(clampTooltipPos(el.getBoundingClientRect()));
    setHovered(true);
  }, []);

  return (
    <>
      <section
        ref={ref}
        className="duolingo-flyer"
        aria-label="Duolingo Spanish streak"
        onMouseEnter={showTip}
        onMouseLeave={() => setHovered(false)}
        onFocus={showTip}
        onBlur={() => setHovered(false)}
        tabIndex={0}
      >
        <ClickableImage
          src={DUO_OWL_SRC}
          alt="Duolingo owl"
          className="duolingo-owl-clickable"
          downloadName="duo-owl.png"
        />
      </section>

      {hovered &&
        createPortal(
          <section
            className="duolingo-tooltip-portal"
            style={{ left: tipPos.x, top: tipPos.y }}
            role="tooltip"
          >
            <p>{duolingoMeta.streakLine}</p>
            <p>{duolingoMeta.scoreLine}</p>
          </section>,
          document.body
        )}
    </>
  );
};

export default DuolingoFlyer;
