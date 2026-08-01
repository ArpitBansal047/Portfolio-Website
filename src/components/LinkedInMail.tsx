import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdArrowOutward, MdClose } from "react-icons/md";
import {
  getStackFocusId,
  timelineLinkedInLetters,
  type LinkedInLetter,
} from "../data/linkedinPosts";
import { site } from "../data/portfolio";
import { lockPageScroll, unlockPageScroll } from "../utils/lightboxScroll";
import { playMailScrollSound, unlockMailScrollSound } from "../utils/mailScrollSound";
import { scrollToSection } from "./utils/scrollToSection";
import "./styles/LinkedInMail.css";
import "./styles/SectionTitle.css";
import "./styles/ProjectsHub.css";

const SCROLL_MS = 130;

const animateScrollLeft = (
  node: HTMLElement,
  target: number,
  duration: number,
  onDone?: () => void,
) => {
  const from = node.scrollLeft;
  const delta = target - from;
  if (Math.abs(delta) < 1) {
    node.scrollLeft = target;
    onDone?.();
    return;
  }
  const start = performance.now();
  const step = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const ease = 1 - (1 - t) ** 3;
    node.scrollLeft = from + delta * ease;
    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      onDone?.();
    }
  };
  requestAnimationFrame(step);
};

const EnvelopeCard = ({
  letter,
  open,
  focused,
  stackIndex,
  focusIndex,
  total,
  onOpen,
}: {
  letter: LinkedInLetter;
  open: boolean;
  focused: boolean;
  stackIndex: number;
  focusIndex: number;
  total: number;
  onOpen: () => void;
}) => {
  const distance = Math.abs(stackIndex - focusIndex);
  const z = focused ? total + 3 : Math.max(1, total - distance);

  return (
    <button
      type="button"
      className={`mail-envelope${open ? " mail-envelope--active" : ""}${
        focused ? " mail-envelope--focus" : ""
      }${letter.status === "scheduled" ? " mail-envelope--scheduled" : " mail-envelope--live"}`}
      style={{ zIndex: z }}
      onClick={onOpen}
      data-cursor="disable"
      aria-expanded={open}
      aria-controls={`postcard-${letter.id}`}
    >
      <span className="mail-envelope__flap" aria-hidden="true" />
      <span className="mail-envelope__body">
        <span className="mail-envelope__status">
          {letter.status === "live" ? "Live" : "Upcoming"}
        </span>
        <span className="mail-envelope__title">{letter.flapTitle}</span>
        <span className="mail-envelope__teaser">{letter.hook}</span>
        <span className="mail-envelope__date">
          {letter.status === "scheduled"
            ? `Drops ${letter.mailDate}`
            : letter.mailDate}
        </span>
      </span>
    </button>
  );
};

const Postcard = ({
  letter,
  onClose,
}: {
  letter: LinkedInLetter;
  onClose: () => void;
}) => {
  const isLive = letter.status === "live" && Boolean(letter.url);

  const goToSiteAnchor = () => {
    if (!letter.siteAnchor) return;
    onClose();
    window.setTimeout(() => {
      window.history.replaceState(null, "", letter.siteAnchor);
      scrollToSection(letter.siteAnchor);
    }, 80);
  };

  return (
    <article
      id={`postcard-${letter.id}`}
      className="mail-postcard"
      role="dialog"
      aria-modal="true"
      aria-label={letter.title}
    >
      <button
        type="button"
        className="mail-postcard__close"
        onClick={onClose}
        data-cursor="disable"
        aria-label="Close postcard"
      >
        <MdClose aria-hidden="true" />
      </button>

      <span className="mail-postcard__li-stamp" aria-hidden="true">
        <FaLinkedinIn />
      </span>

      <section
        className={`mail-postcard__visual${
          letter.id === "portfolio-launch" ? " mail-postcard__visual--as-is" : ""
        }`}
      >
        {letter.postcardImage ? (
          <img
            src={letter.postcardImage}
            alt=""
            loading="eager"
            className={
              letter.id === "portfolio-launch"
                ? "mail-postcard__img mail-postcard__img--as-is"
                : "mail-postcard__img"
            }
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <span className="mail-postcard__visual-fallback" aria-hidden="true">
            {letter.flapTitle}
          </span>
        )}
      </section>

      <section className="mail-postcard__copy">
        <p className="mail-postcard__lined mail-postcard__meta">
          <span>{letter.topic}</span>
          <span>{letter.status === "live" ? "Live" : "Upcoming"}</span>
        </p>
        <h3 className="mail-postcard__lined">{letter.title}</h3>
        <p
          className={`mail-postcard__lined mail-postcard__hook${
            letter.boldHook ? " mail-postcard__lined--bold" : ""
          }`}
        >
          {letter.hook}
        </p>
        {letter.body.map((line, index) => (
          <p
            key={`${letter.id}-body-${index}`}
            className={`mail-postcard__lined mail-postcard__body${
              letter.boldBody?.includes(index) ? " mail-postcard__lined--bold" : ""
            }`}
          >
            {line}
          </p>
        ))}
        <p className="mail-postcard__lined mail-postcard__fun">{letter.stampLine}</p>

        {isLive ? (
          <a
            href={letter.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mail-postcard__cta"
            data-cursor="disable"
          >
            Read on LinkedIn <MdArrowOutward aria-hidden="true" />
          </a>
        ) : (
          <p className="mail-postcard__soon">
            <span className="mail-postcard__lined">Drops {letter.mailDate}.</span>
            {letter.siteAnchor ? (
              <button
                type="button"
                className="mail-postcard__cta"
                onClick={goToSiteAnchor}
                data-cursor="disable"
              >
                See YOU on this site <MdArrowOutward aria-hidden="true" />
              </button>
            ) : (
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mail-postcard__soon-link"
                data-cursor="disable"
              >
                Follow on LinkedIn <FaLinkedinIn aria-hidden="true" />
              </a>
            )}
          </p>
        )}

        {isLive && letter.siteAnchor ? (
          <button
            type="button"
            className="mail-postcard__soon-link"
            onClick={goToSiteAnchor}
            data-cursor="disable"
          >
            Jump to project on this site <MdArrowOutward aria-hidden="true" />
          </button>
        ) : null}
      </section>
    </article>
  );
};

const LinkedInMail = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [focusId, setFocusId] = useState(() => getStackFocusId());
  const stackRef = useRef<HTMLDivElement>(null);
  const stackHot = useRef(false);
  const dragRef = useRef<{ active: boolean; startX: number; scrollLeft: number }>({
    active: false,
    startX: 0,
    scrollLeft: 0,
  });
  const draggedRef = useRef(false);
  const wheelLock = useRef(false);
  const lastSoundId = useRef<string | null>(null);

  const letters = timelineLinkedInLetters;
  const focusIndex = Math.max(
    0,
    letters.findIndex((l) => l.id === focusId),
  );

  const openLetter = useMemo(
    () => letters.find((l) => l.id === openId) ?? null,
    [openId, letters],
  );

  const scrollToIndex = useCallback(
    (index: number, withSound = true) => {
      const node = stackRef.current;
      if (!node) return;
      const clamped = Math.max(0, Math.min(letters.length - 1, index));
      const nextId = letters[clamped]?.id ?? focusId;
      const slot = node.querySelectorAll<HTMLElement>(".mail-stack__slot")[clamped];
      if (!slot) return;
      const target = slot.offsetLeft - (node.clientWidth - slot.clientWidth) / 2;
      animateScrollLeft(node, Math.max(0, target), SCROLL_MS);
      setFocusId(nextId);
      if (withSound && nextId !== lastSoundId.current) {
        lastSoundId.current = nextId;
        playMailScrollSound();
      }
    },
    [letters, focusId],
  );

  const handleOpen = useCallback((id: string) => {
    setFocusId(id);
    setOpenId(id);
  }, []);

  const handleClose = useCallback(() => setOpenId(null), []);

  useEffect(() => {
    scrollToIndex(focusIndex, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- initial center only
  }, []);

  useEffect(() => {
    const node = stackRef.current;
    if (!node) return;

    const onWheel = (e: WheelEvent) => {
      if (openId) return;
      unlockMailScrollSound();
      const dominant = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(dominant) < 4) return;
      e.preventDefault();
      if (wheelLock.current) return;
      wheelLock.current = true;
      const dir = dominant > 0 ? 1 : -1;
      scrollToIndex(focusIndex + dir);
      window.setTimeout(() => {
        wheelLock.current = false;
      }, SCROLL_MS + 20);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      unlockMailScrollSound();
      draggedRef.current = false;
      dragRef.current = {
        active: true,
        startX: e.clientX,
        scrollLeft: node.scrollLeft,
      };
      node.classList.add("mail-stack--dragging");
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragRef.current.active) return;
      const dx = e.clientX - dragRef.current.startX;
      if (Math.abs(dx) > 6) draggedRef.current = true;
      node.scrollLeft = dragRef.current.scrollLeft - dx;
    };

    const endDrag = () => {
      if (!dragRef.current.active) return;
      dragRef.current.active = false;
      node.classList.remove("mail-stack--dragging");
      const center = node.scrollLeft + node.clientWidth / 2;
      let best = 0;
      let bestDist = Number.POSITIVE_INFINITY;
      node.querySelectorAll<HTMLElement>(".mail-stack__slot").forEach((slot, i) => {
        const mid = slot.offsetLeft + slot.clientWidth / 2;
        const dist = Math.abs(mid - center);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      scrollToIndex(best);
    };

    const onClickCapture = (e: MouseEvent) => {
      if (!draggedRef.current) return;
      e.preventDefault();
      e.stopPropagation();
      draggedRef.current = false;
    };

    const onEnter = () => {
      stackHot.current = true;
    };
    const onLeave = () => {
      stackHot.current = false;
    };

    node.addEventListener("wheel", onWheel, { passive: false });
    node.addEventListener("pointerdown", onPointerDown);
    node.addEventListener("click", onClickCapture, true);
    node.addEventListener("pointerenter", onEnter);
    node.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);

    return () => {
      node.removeEventListener("wheel", onWheel);
      node.removeEventListener("pointerdown", onPointerDown);
      node.removeEventListener("click", onClickCapture, true);
      node.removeEventListener("pointerenter", onEnter);
      node.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
    };
  }, [focusIndex, openId, scrollToIndex]);

  useEffect(() => {
    if (!openId) return;

    lockPageScroll();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      unlockPageScroll();
    };
  }, [openId, handleClose]);

  useEffect(() => {
    if (openId) return;
    const onKey = (e: KeyboardEvent) => {
      if (!stackHot.current) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollToIndex(focusIndex + 1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollToIndex(focusIndex - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openId, focusIndex, scrollToIndex]);

  const stage =
    openLetter &&
    createPortal(
      <section className="mail-stage" onClick={handleClose} role="presentation">
        <section className="mail-stage__sheet" onClick={(e) => e.stopPropagation()}>
          <Postcard letter={openLetter} onClose={handleClose} />
        </section>
      </section>,
      document.body,
    );

  return (
    <section className="mail-section section-container">
      <header className="mail-header">
        <h3
          id="infeed"
          className="section-title section-title--sub section-title--feed nav-scroll-target"
        >
          <span className="section-title__feed-in" aria-label="in">
            <FaLinkedinIn aria-hidden="true" />
          </span>
          Feed
        </h3>
      </header>

      <section className="mail-stack-wrap">
        <section
          ref={stackRef}
          className="mail-stack"
          aria-label="LinkedIn letter stack"
        >
          {letters.map((letter, index) => (
            <section
              key={letter.id}
              className="mail-stack__slot"
              data-letter-id={letter.id}
            >
              <EnvelopeCard
                letter={letter}
                open={openId === letter.id}
                focused={letter.id === focusId}
                stackIndex={index}
                focusIndex={focusIndex}
                total={letters.length}
                onOpen={() => handleOpen(letter.id)}
              />
            </section>
          ))}
        </section>
      </section>

      {stage}
    </section>
  );
};

export default LinkedInMail;
