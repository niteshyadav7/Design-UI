"use client";
import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark"); // Start with dark by default

  useEffect(() => {
    // Sync initial theme state with the html class list
    const root = document.documentElement;
    const initialTheme = root.classList.contains("dark") ? "dark" : "light";
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex size-9 items-center justify-center rounded-lg border border-neutral-200 bg-white/80 text-neutral-800 backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer hover:bg-neutral-100 dark:border-white/20 dark:bg-black/80 dark:text-neutral-200 dark:hover:bg-neutral-900"
      aria-label="Toggle dark mode"
    >
      <div className="relative size-5 flex items-center justify-center overflow-hidden">
        {/* Sun Icon */}
        <svg
          className={`absolute size-5 transition-transform duration-500 ease-out ${
            theme === "dark" ? "translate-y-0 rotate-0 opacity-100" : "-translate-y-8 rotate-90 opacity-0"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>

        {/* Moon Icon */}
        <svg
          className={`absolute size-5 transition-transform duration-500 ease-out ${
            theme === "light" ? "translate-y-0 rotate-0 opacity-100" : "translate-y-8 -rotate-90 opacity-0"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </div>
    </button>
  );
}
