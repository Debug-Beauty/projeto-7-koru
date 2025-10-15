import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T)
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const isBrowser =
    typeof window !== "undefined" && typeof window.localStorage !== "undefined";

  const getInitial = (): T => {
    const base =
      typeof initialValue === "function"
        ? (initialValue as () => T)()
        : initialValue;

    if (!isBrowser) return base;

    try {
      const raw = window.localStorage.getItem(key);
      return raw !== null ? (JSON.parse(raw) as T) : base;
    } catch {
      return base;
    }
  };

  const [value, setValue] = useState<T>(getInitial);

  useEffect(() => {
    if (!isBrowser) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      void e;
    }
  }, [isBrowser, key, value]);

  return [value, setValue];
}
