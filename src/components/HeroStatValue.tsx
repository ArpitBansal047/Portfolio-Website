import { useEffect, useRef, useState } from "react";
import type { HeroMetricAnimation } from "../data/portfolio";

const DURATION_MS = 1400;

const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

const formatMetric = (animation: HeroMetricAnimation, progress: number, fallback: string) => {
  if (progress >= 1) {
    return fallback;
  }

  switch (animation.kind) {
    case "percent":
      return `${Math.round(animation.target * progress)}%`;
    case "count-plus":
      return `${Math.max(0, Math.round(animation.target * progress))}+`;
    case "hours-compare": {
      if (progress >= 0.82) {
        return `${animation.from}h → ${animation.to}h`;
      }
      const hours = Math.round(
        animation.from + (animation.to - animation.from) * (progress / 0.82),
      );
      return `${hours}h`;
    }
    case "percent-range": {
      const span = animation.max - animation.min;
      const high = Math.round(animation.min + span * progress);
      if (progress < 0.35) {
        return `${Math.round(animation.min * progress / 0.35)}%`;
      }
      if (high <= animation.min) {
        return `${animation.min}%`;
      }
      return `${animation.min}–${high}%`;
    }
    default: {
      const _exhaustive: never = animation;
      return _exhaustive;
    }
  }
};

type HeroStatValueProps = {
  animation: HeroMetricAnimation;
  fallback: string;
};

const HeroStatValue = ({ animation, fallback }: HeroStatValueProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => formatMetric(animation, 0, fallback));
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasAnimatedRef.current) {
      return;
    }

    const runAnimation = () => {
      if (hasAnimatedRef.current) {
        return;
      }
      hasAnimatedRef.current = true;

      const start = performance.now();
      let raf = 0;

      const tick = (now: number) => {
        const progress = easeOutCubic(Math.min(1, (now - start) / DURATION_MS));
        setDisplay(formatMetric(animation, progress, fallback));
        if (progress < 1) {
          raf = requestAnimationFrame(tick);
        }
      };

      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    };

    if (typeof IntersectionObserver === "undefined") {
      return runAnimation();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          runAnimation();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [animation, fallback]);

  return (
    <span ref={ref} className="hero-stat-block__value">
      {display}
    </span>
  );
};

export default HeroStatValue;
