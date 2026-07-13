import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type SoundContextValue = {
  muted: boolean;
  enabled: boolean;
  toggleMute: () => void;
  enableSound: () => void;
  playUiClick: () => void;
};

const SoundContext = createContext<SoundContextValue | null>(null);
const MUTED_KEY = "portfolio-sound-muted";
const ENABLED_KEY = "portfolio-sound-enabled";

const readBool = (key: string, fallback: boolean) => {
  try {
    const value = localStorage.getItem(key);
    if (value === "true") return true;
    if (value === "false") return false;
  } catch {
    /* ignore */
  }
  return fallback;
};

export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const [muted, setMuted] = useState(() => readBool(MUTED_KEY, true));
  const [enabled, setEnabled] = useState(() => readBool(ENABLED_KEY, false));
  const ambientRef = useRef<HTMLAudioElement | null>(null);
  const clickRef = useRef<HTMLAudioElement | null>(null);
  const shouldPlayRef = useRef(false);

  useEffect(() => {
    const ambient = new Audio("/audio/ambient.m4a");
    ambient.loop = true;
    ambient.volume = 0.72;
    ambient.preload = "auto";

    const click = new Audio("/audio/click.wav");
    click.volume = 0.4;
    click.preload = "auto";

    ambientRef.current = ambient;
    clickRef.current = click;

    const keepPlaying = () => {
      if (!shouldPlayRef.current || !ambientRef.current) return;
      if (ambientRef.current.paused) {
        ambientRef.current.play().catch(() => undefined);
      }
    };

    ambient.addEventListener("ended", keepPlaying);
    ambient.addEventListener("pause", keepPlaying);

    const watchdog = window.setInterval(keepPlaying, 2500);

    return () => {
      window.clearInterval(watchdog);
      ambient.removeEventListener("ended", keepPlaying);
      ambient.removeEventListener("pause", keepPlaying);
      ambient.pause();
      ambientRef.current = null;
      clickRef.current = null;
    };
  }, []);

  useEffect(() => {
    shouldPlayRef.current = enabled && !muted;
    const ambient = ambientRef.current;
    if (!ambient) return;

    if (!shouldPlayRef.current) {
      ambient.pause();
      return;
    }

    ambient.play().catch(() => undefined);
  }, [enabled, muted]);

  const enableSound = useCallback(() => {
    setEnabled(true);
    setMuted(false);
    localStorage.setItem(ENABLED_KEY, "true");
    localStorage.setItem(MUTED_KEY, "false");
  }, []);

  const toggleMute = useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      localStorage.setItem(MUTED_KEY, String(next));
      if (!next) {
        setEnabled(true);
        localStorage.setItem(ENABLED_KEY, "true");
      }
      return next;
    });
  }, []);

  const playUiClick = useCallback(() => {
    if (muted || !enabled || !clickRef.current) return;
    clickRef.current.currentTime = 0;
    clickRef.current.play().catch(() => undefined);
  }, [muted, enabled]);

  const value = useMemo(
    () => ({ muted, enabled, toggleMute, enableSound, playUiClick }),
    [muted, enabled, toggleMute, enableSound, playUiClick]
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
};

export const useSound = () => {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within SoundProvider");
  return ctx;
};
