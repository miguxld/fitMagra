"use client";

import { useEffect, useState } from "react";
import { type Lang } from "@/app/lib/data";

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export default function Navbar({ lang, setLang, t, theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", key: "nav.about" },
    { href: "#method", key: "nav.method" },
    { href: "#transforms", key: "nav.results" },
    { href: "#pricing", key: "nav.plans" },
    { href: "#contact", key: "nav.contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[300] flex items-center justify-between gap-4 px-5 md:px-10 lg:px-20 py-5 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/92 backdrop-blur-md shadow-[0_1px_0_var(--color-card-border)] py-3.5"
          : ""
      }`}
    >
      <a href="#hero" className="flex items-center gap-2.5 no-underline group">
        <img
          src="/img/logo-metal.png"
          alt="FitMagra"
          className="h-[30px] md:h-[38px] w-auto object-contain block transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105"
        />
        <img
          src="/img/logo-oficial.png"
          alt="FitMagra Systems"
          className="h-[22px] md:h-[28px] w-auto object-contain block"
        />
      </a>

      <ul className="hidden lg:flex gap-7 list-none">
        {navLinks.map((link) => (
          <li key={link.key}>
            <a
              href={link.href}
              className="relative text-[0.78rem] tracking-widest text-[var(--color-text-secondary)] no-underline transition-colors hover:text-[var(--color-text-primary)] group"
            >
              {t(link.key)}
              <span className="absolute left-0 right-full -bottom-1.5 h-[1.5px] bg-[var(--color-accent)] transition-[right] duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:right-0" />
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <a
          href="https://wa.me/573153614260"
          target="_blank"
          className="hidden sm:inline-flex bg-[var(--color-text-primary)] text-[var(--color-bg)] px-5 py-2.5 rounded-full text-[0.74rem] font-medium no-underline transition-all hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] hover:-translate-y-0.5"
        >
          {t("nav.cta")}
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-[34px] h-[34px] rounded-full border border-[var(--color-card-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] inline-flex items-center justify-center cursor-pointer transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-0.5 p-0"
            title={theme === "dark" ? "Modo claro" : "Modo oscuro"}
            aria-label={theme === "dark" ? "Modo claro" : "Modo oscuro"}
          >
            {theme === "dark" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <div className="inline-flex items-center bg-[var(--color-surface)] border border-[var(--color-card-border)] rounded-full p-[2px]">
            <button
              onClick={() => setLang("es")}
              className={`border-none rounded-full text-[0.66rem] font-semibold tracking-wider px-3 py-1.5 cursor-pointer transition-all ${
                lang === "es"
                  ? "bg-[var(--color-accent)] text-[var(--color-bg)]"
                  : "bg-transparent text-[var(--color-text-muted)]"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={`border-none rounded-full text-[0.66rem] font-semibold tracking-wider px-3 py-1.5 cursor-pointer transition-all ${
                lang === "en"
                  ? "bg-[var(--color-accent)] text-[var(--color-bg)]"
                  : "bg-transparent text-[var(--color-text-muted)]"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
