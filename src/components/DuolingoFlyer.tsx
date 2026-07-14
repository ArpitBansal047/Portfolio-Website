import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ClickableImage from "./ClickableImage";
import { duolingoMeta } from "../data/portfolio";
import "./styles/ImageLightbox.css";

const DUO_OWL_SRC = "/images/beyond/duo-owl.png";
const MARGIN = 12;
const TOUCH_TOOLTIP_MS = 4000;

const clampTooltipPos = (anchor: DOMRect, tipW: number, tipH: number) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  let x = anchor.left + anchor.width / 2;
  let y = anchor.bottom + 10;

  const halfW = tipW / 2;
  x = Math.max(MARGIN + halfW, Math.min(vw - MARGIN - halfW, x));

  if (y + tipH > vh - MARGIN) {
    y = anchor.top - tipH - 10;
  }
  y = Math.max(MARGIN, Math.min(vh - MARGIN - tipH, y));

  return { x, y };
};

const DuolingoFlyer = () => {
  const ref = useRef<HTMLElement>(null);
  const tipRef = useRef<HTMLElement>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [hovered, setHovered] = useState(false);
  const [tipPos, setTipPos] = useState({ x: 0, y: 0 });
  const [coarsePointer, setCoarsePointer] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setCoarsePointer(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const clearHideTimer = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  const hideTip = useCallback(() => {
    clearHideTimer();
    setHovered(false);
  }, [clearHideTimer]);

  const showTip = useCallback(() => {
    clearHideTimer();
    setHovered(true);
  }, [clearHideTimer]);

  const showTipTimed = useCallback(() => {
    showTip();
    hideTimerRef.current = setTimeout(hideTip, TOUCH_TOOLTIP_MS);
  }, [showTip, hideTip]);

  const handleTouchTap = useCallback(() => {
    if (hovered) {
      hideTip();
      return;
    }
    showTipTimed();
  }, [hovered, hideTip, showTipTimed]);

  const positionTip = useCallback(() => {
    const el = ref.current;
    const tip = tipRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const tipW = tip?.offsetWidth ?? 280;
    const tipH = tip?.offsetHeight ?? 72;
    setTipPos(clampTooltipPos(rect, tipW, tipH));
  }, []);

  useLayoutEffect(() => {
    if (!hovered) return;
    const frame = requestAnimationFrame(() => {
      positionTip();
    });
    window.addEventListener("resize", positionTip);
    window.addEventListener("scroll", positionTip, true);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", positionTip);
      window.removeEventListener("scroll", positionTip, true);
    };
  }, [hovered, positionTip]);

  useEffect(() => () => clearHideTimer(), [clearHideTimer]);

  return (
    <>
      <section
        ref={ref}
        className="duolingo-flyer"
        aria-label="Duolingo Spanish streak"
        onMouseEnter={coarsePointer ? undefined : showTip}
        onMouseLeave={coarsePointer ? undefined : hideTip}
        onFocus={coarsePointer ? undefined : showTip}
        onBlur={coarsePointer ? undefined : hideTip}
        tabIndex={coarsePointer ? -1 : 0}
      >
        {coarsePointer ? (
          <button
            type="button"
            className="duolingo-owl-touch"
            onClick={handleTouchTap}
            aria-label="Show Duolingo streak info"
            aria-expanded={hovered}
            data-cursor="disable"
          >
            <img src={DUO_OWL_SRC} alt="Duolingo owl" loading="lazy" />
          </button>
        ) : (
          <ClickableImage
            src={DUO_OWL_SRC}
            alt="Duolingo owl"
            className="duolingo-owl-clickable"
            downloadName="duo-owl.png"
          />
        )}
      </section>

      {hovered &&
        createPortal(
          <section
            ref={tipRef}
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
