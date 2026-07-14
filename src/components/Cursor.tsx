import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./styles/Cursor.css";
import gsap from "gsap";

const CURSOR_SMOOTH = 0.42;

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hover = false;
    const cursor = cursorRef.current!;
    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    document.addEventListener("mousemove", onMove);

    requestAnimationFrame(function loop() {
      if (!hover) {
        cursorPos.x += (mousePos.x - cursorPos.x) * CURSOR_SMOOTH;
        cursorPos.y += (mousePos.y - cursorPos.y) * CURSOR_SMOOTH;
        gsap.set(cursor, { x: cursorPos.x, y: cursorPos.y });
      }
      requestAnimationFrame(loop);
    });

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

    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return createPortal(<div className="cursor-main" ref={cursorRef} />, document.body);
};

export default Cursor;
