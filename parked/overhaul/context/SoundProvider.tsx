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
const STORAGE_KEY = "portfolio-sound-muted";

export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const [muted, setMuted] = useState(() => localStorage.getItem(STORAGE_KEY) === "true");
  const [enabled, setEnabled] = useState(false);
  const ambientRef = useRef<HTMLAudioElement | null>(null);
  const clickRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    ambientRef.current = new Audio("/audio/ambient.m4a");
    ambientRef.current.loop = true;
    ambientRef.current.volume = 0.22;

    clickRef.current = new Audio("/audio/click.wav");
    clickRef.current.volume = 0.35;

    return () => {
      ambientRef.current?.pause();
      ambientRef.current = null;
      clickRef.current = null;
    };
  }, []);

  useEffect(() => {
    const ambient = ambientRef.current;
    if (!ambient || !enabled || muted) {
      ambient?.pause();
      return;
    }
    ambient.play().catch(() => undefined);
  }, [enabled, muted]);

  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) ambientRef.current?.pause();
      else if (enabled && !muted) ambientRef.current?.play().catch(() => undefined);
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [enabled, muted]);

  const enableSound = useCallback(() => {
    setEnabled(true);
    setMuted(false);
    localStorage.setItem(STORAGE_KEY, "false");
  }, []);

  const toggleMute = useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, String(next));
      if (!next) setEnabled(true);
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
