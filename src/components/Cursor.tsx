import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./styles/Cursor.css";
import gsap from "gsap";

const CURSOR_SMOOTH = 0.42;

const POINTER_QUERY = "(hover: hover) and (pointer: fine)";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(POINTER_QUERY);
    const sync = () => setEnabled(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let hover = false;
    const cursor = cursorRef.current;
    if (!cursor) return;

    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    document.addEventListener("mousemove", onMove);

    let frameId = 0;
    const loop = () => {
      if (!hover) {
        cursorPos.x += (mousePos.x - cursorPos.x) * CURSOR_SMOOTH;
        cursorPos.y += (mousePos.y - cursorPos.y) * CURSOR_SMOOTH;
        gsap.set(cursor, { x: cursorPos.x, y: cursorPos.y });
      }
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);

    document.querySelectorAll("[data-cursor]").forEach((item) => {
      const element = item as HTMLElement;
      element.addEventListener("mouseover", (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();

        if (element.dataset.cursor === "icons") {
          cursor.classList.add("cursor-icons");
          gsap.to(cursor, { x: rect.left, y: rect.top, duration: 0.12, ease: "power2.out" });
          cursor.style.setProperty("--cursorH", `${rect.height}px`);
          hover = true;
        }
      });
      element.addEventListener("mouseout", () => {
        cursor.classList.remove("cursor-icons");
        hover = false;
      });
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return createPortal(
    <div className="cursor-main" ref={cursorRef}>
      <span className="cursor-coffee" aria-hidden="true">
        <span className="cursor-coffee__steam" />
        <span className="cursor-coffee__cup" />
        <span className="cursor-coffee__handle" />
      </span>
    </div>,
    document.body,
  );
};

export default Cursor;
