"use client";

import { useEffect, useState, useRef } from "react";
import { type Lang } from "@/app/lib/data";

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export default function Navbar({ lang, setLang, t, theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close on outside click */
  useEffect(() => {
    if (!menuOpen) return;
    const h = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [menuOpen]);

  /* body scroll lock */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { href: "#about",      label: t("nav.about") },
    { href: "#method",     label: t("nav.method") },
    { href: "#transforms", label: t("nav.results") },
    { href: "#pricing",    label: t("nav.plans") },
    { href: "#contact",    label: t("nav.contact") },
  ];

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* ── Main bar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[300] flex items-center justify-between gap-4 px-5 md:px-10 lg:px-20 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[var(--color-bg)]/96 backdrop-blur-xl shadow-[0_1px_0_var(--color-card-border)] py-3"
            : "py-5"
        }`}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={close}
          className="flex items-center gap-2.5 no-underline group flex-shrink-0"
        >
          <img
            src="/img/logo-metal.png"
            alt="FitMagra"
            className="h-[28px] md:h-[34px] w-auto object-contain transition-all duration-300 group-hover:-rotate-3 group-hover:scale-105"
          />
          <img
            src="/img/logo-oficial.png"
            alt="FitMagra Systems"
            className="h-[19px] md:h-[24px] w-auto object-contain"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-8 list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-[0.75rem] font-medium tracking-[.08em] uppercase text-[var(--color-text-secondary)] no-underline transition-colors duration-200 hover:text-[var(--color-text-primary)] group"
              >
                {link.label}
                <span className="absolute left-0 right-full -bottom-1 h-[1.5px] bg-[var(--color-accent)] transition-[right] duration-300 ease-out group-hover:right-0" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/573153614260"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[var(--color-accent)] text-[var(--color-bg)] px-4 py-2 rounded-full text-[0.72rem] font-semibold no-underline transition-all hover:bg-[var(--color-accent-hover)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(126,217,87,0.4)]"
          >
            {t("nav.cta")}
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-[34px] h-[34px] rounded-full border border-[var(--color-card-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] inline-flex items-center justify-center cursor-pointer transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] p-0"
            aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {theme === "dark" ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Language switcher — desktop */}
          <div className="hidden sm:flex items-center bg-[var(--color-surface)] border border-[var(--color-card-border)] rounded-full p-[2px]">
            {(["es", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-label={l === "es" ? "Cambiar a Español" : "Switch to English"}
                className={`rounded-full text-[0.65rem] font-bold tracking-widest px-3 py-1.5 cursor-pointer transition-all duration-200 border-0 ${
                  lang === l
                    ? "bg-[var(--color-accent)] text-[var(--color-bg)] shadow-[0_2px_8px_rgba(126,217,87,0.35)]"
                    : "bg-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            className="lg:hidden flex flex-col justify-center items-center w-[38px] h-[38px] rounded-full border border-[var(--color-card-border)] bg-[var(--color-surface)] cursor-pointer transition-all hover:border-[var(--color-accent)] gap-[5px] p-0 flex-shrink-0"
          >
            <span className={`block h-[1.5px] w-4 bg-[var(--color-text-primary)] rounded-full transition-all duration-250 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block h-[1.5px] bg-[var(--color-text-primary)] rounded-full transition-all duration-250 ${menuOpen ? "w-4 opacity-0" : "w-3"}`} />
            <span className={`block h-[1.5px] w-4 bg-[var(--color-text-primary)] rounded-full transition-all duration-250 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div className={`fixed inset-0 z-[290] lg:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/55 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={close}
        />

        {/* Panel */}
        <div
          ref={menuRef}
          className={`absolute top-0 right-0 h-full w-[min(300px,85vw)] bg-[var(--color-surface)] border-l border-[var(--color-card-border)] shadow-[-20px_0_60px_rgba(0,0,0,.5)] transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)] flex flex-col ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-card-border)]">
            <div className="flex items-center gap-2">
              <img src="/img/logo-metal.png" alt="FitMagra" className="h-[26px] w-auto" />
              <img src="/img/logo-oficial.png" alt="FitMagra Systems" className="h-[18px] w-auto" />
            </div>
            <button
              onClick={close}
              className="w-[30px] h-[30px] rounded-full border border-[var(--color-card-border)] bg-[var(--color-surface-2)] text-[var(--color-text-muted)] flex items-center justify-center cursor-pointer hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all p-0"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M1 1l10 10M11 1L1 11" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-5">
            <ul className="list-none space-y-0.5">
              {links.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={close}
                    className="flex items-center gap-3 py-3 px-3.5 rounded-xl text-[0.88rem] font-medium text-[var(--color-text-secondary)] no-underline transition-all hover:bg-[var(--color-surface-2)] hover:text-[var(--color-text-primary)] group"
                    style={{ animationDelay: `${i * 0.04}s` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Language — mobile */}
            <div className="mt-5 pt-5 border-t border-[var(--color-card-border)]">
              <p className="text-[0.6rem] font-semibold tracking-[.2em] uppercase text-[var(--color-text-muted)] mb-3 px-1">
                {lang === "es" ? "Idioma" : "Language"}
              </p>
              <div className="flex gap-2">
                {(["es", "en"] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`flex-1 py-2.5 rounded-xl text-[0.8rem] font-semibold tracking-wider cursor-pointer border transition-all ${
                      lang === l
                        ? "bg-[var(--color-accent)] text-[var(--color-bg)] border-[var(--color-accent)] shadow-[0_4px_12px_rgba(126,217,87,0.3)]"
                        : "bg-transparent text-[var(--color-text-muted)] border-[var(--color-card-border)] hover:text-[var(--color-text-secondary)]"
                    }`}
                  >
                    {l === "es" ? "🇨🇴 ES" : "🇺🇸 EN"}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme — mobile */}
            <div className="mt-4">
              <button
                onClick={toggleTheme}
                className="w-full flex items-center gap-3 py-2.5 px-3.5 rounded-xl text-[0.84rem] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-2)] hover:text-[var(--color-text-primary)] transition-all cursor-pointer border-0 bg-transparent"
              >
                {theme === "dark" ? (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
                {theme === "dark" ? (lang === "es" ? "Modo claro" : "Light mode") : (lang === "es" ? "Modo oscuro" : "Dark mode")}
              </button>
            </div>
          </nav>

          {/* CTA */}
          <div className="px-5 py-5 border-t border-[var(--color-card-border)]">
            <a
              href="https://wa.me/573153614260"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex items-center justify-center gap-2.5 w-full bg-[var(--color-accent)] text-[var(--color-bg)] py-3.5 rounded-full text-[0.82rem] font-semibold no-underline transition-all hover:bg-[var(--color-accent-hover)] shadow-[0_6px_20px_rgba(126,217,87,0.3)] active:scale-[.98]"
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0a8 8 0 00-6.93 11.99L0 16l4.16-1.05A8 8 0 108 0zm4.69 11.31c-.2.56-1.18 1.07-1.62 1.13-.41.06-.93.08-1.5-.09-.34-.1-.79-.25-1.36-.5-2.4-1.04-3.96-3.46-4.08-3.62-.12-.16-.97-1.29-.97-2.46 0-1.17.62-1.75.84-1.99.22-.24.48-.3.64-.3l.46.01c.15.01.35-.06.55.42.2.49.7 1.69.76 1.81.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.24.61 1 1.31 1.62.9.8 1.66 1.05 1.9 1.17.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.41.66 1.65.78.24.12.4.18.46.28.06.1.06.58-.14 1.14z" />
              </svg>
              {t("nav.cta")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
