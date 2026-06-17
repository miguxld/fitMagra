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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { href: "#about", key: "nav.about" },
    { href: "#method", key: "nav.method" },
    { href: "#transforms", key: "nav.results" },
    { href: "#pricing", key: "nav.plans" },
    { href: "#contact", key: "nav.contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[300] flex items-center justify-between gap-4 px-5 md:px-10 lg:px-20 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[var(--color-bg)]/95 backdrop-blur-md shadow-[0_1px_0_var(--color-card-border)] py-3"
            : "py-5"
        }`}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 no-underline group flex-shrink-0" onClick={closeMenu}>
          <img
            src="/img/logo-metal.png"
            alt="FitMagra"
            className="h-[28px] md:h-[36px] w-auto object-contain block transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105"
          />
          <img
            src="/img/logo-oficial.png"
            alt="FitMagra Systems"
            className="h-[20px] md:h-[26px] w-auto object-contain block"
          />
        </a>

        {/* Desktop links */}
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

        {/* Right controls */}
        <div className="flex items-center gap-2.5">
          {/* CTA — hidden on small */}
          <a
            href="https://wa.me/573153614260"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex bg-[var(--color-text-primary)] text-[var(--color-bg)] px-5 py-2.5 rounded-full text-[0.74rem] font-medium no-underline transition-all hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] hover:-translate-y-0.5"
          >
            {t("nav.cta")}
          </a>

          {/* Theme + lang — always visible */}
          <button
            onClick={toggleTheme}
            className="w-[34px] h-[34px] rounded-full border border-[var(--color-card-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] inline-flex items-center justify-center cursor-pointer transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] p-0"
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

          <div className="hidden sm:inline-flex items-center bg-[var(--color-surface)] border border-[var(--color-card-border)] rounded-full p-[2px]">
            {(["es", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`border-none rounded-full text-[0.66rem] font-semibold tracking-wider px-3 py-1.5 cursor-pointer transition-all ${
                  lang === l
                    ? "bg-[var(--color-accent)] text-[var(--color-bg)]"
                    : "bg-transparent text-[var(--color-text-muted)]"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            className="lg:hidden flex flex-col justify-center items-center w-[38px] h-[38px] rounded-full border border-[var(--color-card-border)] bg-[var(--color-surface)] cursor-pointer transition-all hover:border-[var(--color-accent)] gap-1.5 p-0"
          >
            <span
              className={`block h-[1.5px] bg-[var(--color-text-primary)] rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "w-4 rotate-45 translate-y-[5px]" : "w-4"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-[var(--color-text-primary)] rounded-full transition-all duration-300 ${
                menuOpen ? "w-4 opacity-0" : "w-3"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-[var(--color-text-primary)] rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "w-4 -rotate-45 -translate-y-[5px]" : "w-4"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile menu drawer ── */}
      <div
        className={`fixed inset-0 z-[290] lg:hidden transition-all duration-300 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        {/* Drawer panel */}
        <div
          ref={menuRef}
          className={`absolute top-0 right-0 h-full w-[min(320px,88vw)] bg-[var(--color-surface)] border-l border-[var(--color-card-border)] shadow-[-20px_0_60px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-card-border)]">
            <div className="flex items-center gap-2">
              <img src="/img/logo-metal.png" alt="FitMagra" className="h-[28px] w-auto object-contain" />
              <img src="/img/logo-oficial.png" alt="FitMagra Systems" className="h-[20px] w-auto object-contain" />
            </div>
            <button
              onClick={closeMenu}
              className="w-[32px] h-[32px] rounded-full border border-[var(--color-card-border)] bg-[var(--color-surface-2)] text-[var(--color-text-muted)] flex items-center justify-center cursor-pointer hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all p-0"
              aria-label="Cerrar menú"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M1 1l12 12M13 1L1 13" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-6 py-6">
            <ul className="list-none space-y-1">
              {navLinks.map((link, idx) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center gap-3 py-3.5 px-4 rounded-xl text-[0.9rem] font-medium text-[var(--color-text-secondary)] no-underline transition-all hover:bg-[var(--color-surface-2)] hover:text-[var(--color-text-primary)] group"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile lang */}
            <div className="mt-6 pt-5 border-t border-[var(--color-card-border)]">
              <div className="text-[0.6rem] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-3 font-medium">
                Idioma
              </div>
              <div className="flex gap-2">
                {(["es", "en"] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); }}
                    className={`flex-1 py-2.5 rounded-xl text-[0.78rem] font-semibold tracking-wider cursor-pointer border transition-all ${
                      lang === l
                        ? "bg-[var(--color-accent)] text-[var(--color-bg)] border-[var(--color-accent)]"
                        : "bg-transparent text-[var(--color-text-muted)] border-[var(--color-card-border)] hover:text-[var(--color-text-secondary)]"
                    }`}
                  >
                    {l === "es" ? "🇨🇴 ES" : "🇺🇸 EN"}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA bottom */}
          <div className="px-6 py-6 border-t border-[var(--color-card-border)]">
            <a
              href="https://wa.me/573153614260"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2.5 w-full bg-[var(--color-accent)] text-[var(--color-bg)] py-4 rounded-full text-[0.84rem] font-semibold no-underline transition-all hover:bg-[var(--color-accent-hover)] shadow-[0_8px_24px_rgba(126,217,87,0.3)] active:scale-[0.98]"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
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
