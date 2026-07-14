import { useEffect, useState, type RefObject } from "react";

function measureHorizontalOverflow(el: HTMLElement) {
  const children = Array.from(el.children).filter(
    (node): node is HTMLElement => node instanceof HTMLElement,
  );

  if (children.length === 0) {
    return false;
  }

  if (children.length === 1) {
    return children[0].scrollWidth > el.clientWidth + 12;
  }

  const style = getComputedStyle(el);
  const gap = parseFloat(style.columnGap || style.gap || "0") || 0;
  const paddingLeft = parseFloat(style.paddingLeft) || 0;
  const paddingRight = parseFloat(style.paddingRight) || 0;
  const contentWidth =
    children.reduce((sum, child) => sum + child.getBoundingClientRect().width, 0) +
    gap * Math.max(0, children.length - 1) +
    paddingLeft +
    paddingRight;

  return contentWidth > el.clientWidth + 12;
}

export function useHorizontalOverflow(
  ref: RefObject<HTMLElement | null>,
  deps: unknown[] = [],
) {
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const check = () => {
      setHasOverflow(measureHorizontalOverflow(el));
    };

    const scheduleCheck = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(check);
      });
    };

    scheduleCheck();

    const resizeObserver = new ResizeObserver(scheduleCheck);
    resizeObserver.observe(el);

    Array.from(el.children).forEach((child) => {
      if (child instanceof HTMLElement) {
        resizeObserver.observe(child);
        Array.from(child.children).forEach((grandchild) => {
          if (grandchild instanceof HTMLElement) {
            resizeObserver.observe(grandchild);
          }
        });
      }
    });

    window.addEventListener("resize", scheduleCheck);
    el.addEventListener("scroll", scheduleCheck, { passive: true });
    document.fonts?.ready.then(scheduleCheck).catch(() => undefined);

    const delayed = window.setTimeout(scheduleCheck, 200);
    const delayedAgain = window.setTimeout(scheduleCheck, 600);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", scheduleCheck);
      el.removeEventListener("scroll", scheduleCheck);
      window.clearTimeout(delayed);
      window.clearTimeout(delayedAgain);
    };
  }, deps);

  return hasOverflow;
}
