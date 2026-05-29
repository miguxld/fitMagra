"use client";

import { useEffect, useState } from "react";

interface HeroProps {
  t: (key: string) => string;
}

export default function Hero({ t }: HeroProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-[100svh] pt-32 pb-12 px-5 md:px-10 lg:px-20 max-w-[calc(1240px+160px)] mx-auto relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-14 items-end min-h-[calc(100svh-12rem)]">
        <div className="z-10">
          <div className="inline-flex items-center gap-2.5 py-2 px-4 bg-[var(--color-surface)] border border-[var(--color-card-border)] rounded-full text-[0.7rem] text-[var(--color-text-secondary)] mb-6">
            <span className="relative w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_0_4px_rgba(126,217,87,0.2)]">
              <span className="absolute inset-[-3px] rounded-full bg-[var(--color-accent)] opacity-40 animate-[trustpulse_2.2s_ease-out_infinite]" />
            </span>
            <span dangerouslySetInnerHTML={{ __html: t("hero.trust") }} />
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.6rem,6.5vw,5.4rem)] font-normal leading-none tracking-tight">
            {[
              t("hero.title.l1"),
              t("hero.title.l2"),
              t("hero.title.l3"),
            ].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <span
                  className={`block transition-transform duration-700 ${
                    loaded
                      ? "translate-y-0"
                      : "translate-y-[105%]"
                  }`}
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                    transitionDelay: `${0.05 + i * 0.13}s`,
                  }}
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              </span>
            ))}
          </h1>

          <p
            className={`mt-7 text-base leading-relaxed text-[var(--color-text-secondary)] max-w-[480px] transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            {t("hero.sub")}
          </p>

          <div
            className={`mt-9 flex gap-3.5 flex-wrap items-center transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "0.8s" }}
          >
            <a
              href="https://wa.me/573153614260"
              target="_blank"
              className="inline-flex items-center gap-2 bg-[var(--color-text-primary)] text-[var(--color-bg)] px-7 py-4 rounded-full text-[0.8rem] font-medium no-underline transition-all hover:bg-[var(--color-accent)] hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(126,217,87,0.4)]"
            >
              {t("hero.cta")}
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a
              href="#method"
              className="text-[var(--color-text-primary)] text-[0.8rem] no-underline border-b border-[var(--color-card-border)] pb-[3px] transition-colors hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]"
            >
              {t("hero.cta2")}
            </a>
          </div>

          <div
            className={`mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 border-t border-[var(--color-card-border)] pt-7 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "1s" }}
          >
            {[
              { v: "+8 años", l: "Coaching de élite" },
              { v: "Oxford CEBM", l: "Evidencia clínica" },
              { v: "24/7", l: "MagraMind AI" },
            ].map((item) => (
              <div key={item.l}>
                <div className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-text-primary)] leading-none">
                  {item.v}
                </div>
                <div className="text-[0.62rem] tracking-[0.14em] uppercase text-[var(--color-text-secondary)] mt-1.5">
                  {item.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`relative transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <div className="relative rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-surface)] aspect-[4/5] lg:aspect-[4/5] md:aspect-[16/10]">
            <img
              src="/img/coach-black.jpg"
              alt="Mauricio Sánchez · FitMagra"
              className="w-full h-full object-cover object-top block transition-transform duration-500 hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.5)] pointer-events-none" />
          </div>

          {/* Floating chips */}
          <div className="absolute top-[14%] left-2 md:left-2 bg-[var(--color-surface)] border border-[var(--color-card-border)] rounded-[14px] py-3 px-4 flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)] animate-float z-10">
            <div>
              <div className="font-[family-name:var(--font-display)] text-2xl font-normal text-[var(--color-text-primary)] leading-none">
                450<span className="text-[var(--color-accent)]">+</span>
              </div>
              <div className="text-[0.62rem] tracking-[0.1em] uppercase text-[var(--color-text-secondary)] leading-tight mt-1">
                Clientes
                <br />
                transformados
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-[18%] right-2 md:right-2 bg-[var(--color-surface)] border border-[var(--color-card-border)] rounded-[14px] py-3 px-4 flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)] animate-float z-10"
            style={{ animationDelay: "1.5s" }}
          >
            <div>
              <div className="font-[family-name:var(--font-display)] text-2xl font-normal text-[var(--color-text-primary)] leading-none">
                14
              </div>
              <div className="text-[0.62rem] tracking-[0.1em] uppercase text-[var(--color-text-secondary)] leading-tight mt-1">
                Países
                <br />
                asesorados
              </div>
            </div>
          </div>

          <div
            className="hidden md:flex absolute bottom-[38%] -left-10 bg-[var(--color-surface)] border border-[var(--color-card-border)] rounded-[14px] py-3 px-4 flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)] animate-float z-10"
            style={{ animationDelay: "3s" }}
          >
            <div>
              <div className="font-[family-name:var(--font-display)] text-2xl font-normal text-[var(--color-text-primary)] leading-none">
                4.8<span className="text-[#FFD27A] text-[0.7em] ml-0.5">★</span>
              </div>
              <div className="text-[0.62rem] tracking-[0.1em] uppercase text-[var(--color-text-secondary)] leading-tight mt-1">
                Calificación
                <br />
                promedio
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
