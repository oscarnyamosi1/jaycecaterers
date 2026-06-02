import React, { createContext, useContext, useState, useEffect } from "react";

export const THEMES = ["light", "dark", "warm"];

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
  cycleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    try { return localStorage.getItem("jc-theme") || "light"; } catch { return "light"; }
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try { localStorage.setItem("jc-theme", theme); } catch {}
  }, [theme]);

  const setTheme = (t) => setThemeState(t);
  const cycleTheme = () =>
    setThemeState((prev) => THEMES[(THEMES.indexOf(prev) + 1) % THEMES.length]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
