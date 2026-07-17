import { useSyncExternalStore } from "react";

const subscribe = (query: MediaQueryList, callback: () => void) => {
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};

export const useMaxWidth = (maxWidth: number) => {
  const getSnapshot = () =>
    typeof window !== "undefined" &&
    window.matchMedia(`(max-width: ${maxWidth}px)`).matches;

  const getServerSnapshot = () => false;

  return useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") {
        return () => undefined;
      }
      const query = window.matchMedia(`(max-width: ${maxWidth}px)`);
      return subscribe(query, callback);
    },
    getSnapshot,
    getServerSnapshot,
  );
};
