"use client";

import { useEffect, useState } from "react";

import type { Lang } from "@/app/lib/data";

interface HeroProps {
  t: (key: string) => string;
  lang: Lang;
}

export default function Hero({ t, lang }: HeroProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-[100svh] pt-28 md:pt-32 pb-12 px-5 md:px-10 lg:px-20 max-w-[calc(1240px+160px)] mx-auto relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center min-h-[calc(100svh-10rem)]">

        {/* ── Left column ── */}
        <div className="z-10 flex flex-col justify-center">
          {/* Trust badge */}
          <div
            className={`inline-flex items-center gap-2.5 py-2 px-4 bg-[var(--color-surface)] border border-[var(--color-card-border)] rounded-full text-[0.7rem] text-[var(--color-text-secondary)] mb-7 self-start transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
            style={{ transitionDelay: "0s" }}
          >
            <span className="relative w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]">
              <span className="absolute inset-[-4px] rounded-full bg-[var(--color-accent)] opacity-35 animate-[trustpulse_2.2s_ease-out_infinite]" />
            </span>
            <span dangerouslySetInnerHTML={{ __html: t("hero.trust") }} />
          </div>

          {/* Heading */}
          <h1 className="font-display text-[clamp(2.6rem,6.5vw,5.2rem)] font-normal leading-[1.04] tracking-[-0.03em]">
            {[t("hero.title.l1"), t("hero.title.l2"), t("hero.title.l3")].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <span
                  className={`block transition-transform duration-700 ${loaded ? "translate-y-0" : "translate-y-[110%]"}`}
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                    transitionDelay: `${0.06 + i * 0.12}s`,
                  }}
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              </span>
            ))}
          </h1>

          {/* Sub */}
          <p
            className={`mt-7 text-[0.96rem] leading-[1.72] text-[var(--color-text-secondary)] max-w-[480px] transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0.55s", transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
          >
            {t("hero.sub")}
          </p>

          {/* CTAs */}
          <div
            className={`mt-9 flex gap-3 flex-wrap items-center transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0.72s", transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
          >
            <a
              href="https://wa.me/573153614260"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-[var(--color-bg)] px-7 py-3.5 rounded-full text-[0.82rem] font-semibold no-underline transition-all hover:bg-[var(--color-accent-hover)] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(126,217,87,0.45)] active:scale-95"
            >
              {t("hero.cta")}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a
              href="#method"
              className="text-[var(--color-text-primary)] text-[0.82rem] font-medium no-underline border-b border-[var(--color-card-border)] pb-[2px] transition-all hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]"
            >
              {t("hero.cta2")} →
            </a>
          </div>

          {/* Mini stats */}
          <div className="mt-8 pt-8 border-t border-[var(--color-card-border)] flex flex-wrap gap-x-8 gap-y-4 reveal reveal-delay-4">
            {[
              { v: lang === "es" ? "+8 años" : "+8 years", l: lang === "es" ? "Coaching de élite" : "Elite coaching" },
              { v: "Oxford CEBM", l: lang === "es" ? "Evidencia clínica" : "Clinical evidence" },
              { v: "24/7", l: "MagraMind AI" },
            ].map((item, i) => (
              <div key={item.l}>
                <div className="font-display text-xl md:text-2xl text-[var(--color-text-primary)] leading-none mb-1.5">
                  {item.v}
                </div>
                <div className="text-[0.6rem] tracking-[.14em] uppercase text-[var(--color-text-muted)]">
                  {item.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column — photo ── */}
        <div
          className={`relative transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "0.35s", transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
        >
          <div className="relative rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-surface)] aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5]">
            <img
              src="/img/coach-black.jpg"
              alt="Mauricio Sánchez · FitMagra"
              className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,.45)] pointer-events-none" />
          </div>

          {/* Floating chip — clients */}
          <div className="absolute top-[12%] -left-2 md:-left-5 bg-[var(--color-surface)] border border-[var(--color-card-border)] rounded-[14px] py-3 px-4 shadow-[0_10px_30px_rgba(0,0,0,.25)] animate-float z-10 backdrop-blur-sm">
            <div className="font-display text-[1.6rem] font-normal text-[var(--color-text-primary)] leading-none">
              450<span className="text-[var(--color-accent)]">+</span>
            </div>
            <div className="text-[0.58rem] tracking-[.1em] uppercase text-[var(--color-text-secondary)] mt-1 leading-tight">
              Clientes<br />transformados
            </div>
          </div>

          {/* Floating chip — rating */}
          <div
            className="absolute bottom-6 right-6 bg-[var(--color-surface)]/90 backdrop-blur-md border border-[var(--color-card-border)] p-4 rounded-2xl shadow-xl max-w-[200px]"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <div className="text-[0.6rem] uppercase tracking-widest text-[var(--color-text-primary)] font-bold">{lang === "es" ? "Ajuste Clínico" : "Clinical Adjustment"}</div>
            </div>
            <div className="font-display text-[1.6rem] font-normal text-[var(--color-text-primary)] leading-none">
              4.8<span className="text-[#FFD27A] text-[0.7em] ml-0.5">★</span>
            </div>
            <div className="text-[0.58rem] tracking-[.1em] uppercase text-[var(--color-text-secondary)] mt-1 leading-tight">
              Calificación<br />promedio
            </div>
          </div>

          {/* Floating chip — countries (desktop only) */}
          <div
            className="hidden md:flex absolute bottom-[38%] -left-10 bg-[var(--color-surface)] border border-[var(--color-card-border)] rounded-[14px] py-3 px-4 items-center shadow-[0_10px_30px_rgba(0,0,0,.25)] animate-float z-10"
            style={{ animationDelay: "3s" }}
          >
            <div>
              <div className="font-display text-[1.6rem] font-normal text-[var(--color-text-primary)] leading-none">14</div>
              <div className="text-[0.58rem] tracking-[.1em] uppercase text-[var(--color-text-secondary)] mt-1 leading-tight">
                Países<br />asesorados
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
