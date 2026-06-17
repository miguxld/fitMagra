"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { getCredentials, getTimeline, type Lang } from "@/app/lib/data";
import Reveal from "./Reveal";

interface AboutProps {
  t: (key: string) => string;
  lang: Lang;
}

export default function About({ t, lang }: AboutProps) {
  const headRef = useScrollReveal();
  const credentials = getCredentials(lang);
  const timeline = getTimeline(lang);

  return (
    <section id="about" className="py-20 md:py-28 px-5 md:px-10 lg:px-20 bg-[var(--color-bg)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          {/* Image col */}
          <div className="relative">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[400px] rounded-full bg-gradient-to-tr from-[var(--color-accent-dim)] to-transparent blur-3xl opacity-50" />
            
            <Reveal className="relative z-10 mx-auto max-w-[460px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-[var(--color-card-border)] bg-[var(--color-surface)]">
              <img
                src="/img/mau.jpeg"
                alt="Mauricio Sánchez"
                className="w-full h-full object-cover object-top filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="font-display text-[2.2rem] font-medium leading-none text-[var(--color-text-primary)] mb-1">
                  Mauricio Sánchez
                </div>
                <div className="text-[0.75rem] uppercase tracking-widest text-[var(--color-accent)] font-semibold">
                  Founder & Head Coach
                </div>
              </div>
            </Reveal>

            {/* Floating badge */}
            <div className="absolute -right-4 top-1/4 hidden md:flex items-center gap-3 bg-[var(--color-surface)] border border-[var(--color-card-border)] p-3 rounded-2xl shadow-[var(--shadow-elevation)] animate-float">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent-dim)] flex items-center justify-center text-[var(--color-accent)] font-bold text-[0.8rem]">
                14
              </div>
              <div className="text-[0.65rem] font-semibold text-[var(--color-text-secondary)] uppercase tracking-wide leading-tight">
                {lang === "es" ? "Países" : "Countries"}<br />{lang === "es" ? "activos" : "active"}
              </div>
            </div>
          </div>

          {/* Text col */}
          <div>
            <div ref={headRef} className="reveal mb-8">
              <div className="section-label mb-4">{t("about.label")}</div>
              <h2
                className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-medium leading-[1.05] tracking-tight mb-6"
                dangerouslySetInnerHTML={{ __html: t("about.title") }}
              />
              <div className="space-y-4 text-[0.95rem] leading-relaxed text-[var(--color-text-secondary)]">
                <p>
                  {lang === "es"
                    ? "Durante años, la industria del fitness ha vendido rutinas genéricas que ignoran cómo funciona realmente el cuerpo humano. Empecé FitMagra Systems para cambiar eso."
                    : "For years, the fitness industry has sold generic routines that ignore how the human body really works. I started FitMagra Systems to change that."}
                </p>
                <p>
                  {lang === "es"
                    ? "Mi enfoque no se basa en lo que 'creo' que funciona, sino en lo que la evidencia científica (Oxford CEBM) y 4 ecuaciones metabólicas dictan para tu fisiología única."
                    : "My approach is not based on what I 'think' works, but on what scientific evidence (Oxford CEBM) and 4 metabolic equations dictate for your unique physiology."}
                </p>
              </div>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {credentials.map((c, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="bg-[var(--color-surface)] border border-[var(--color-card-border)] p-4 rounded-2xl h-full transition-all hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-accent-sm)]">
                    <div className="text-[0.65rem] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-1">
                      {c.inst}
                    </div>
                    <div className="text-[0.85rem] font-medium text-[var(--color-text-primary)] leading-tight mb-2">
                      {c.title}
                    </div>
                    <div className="text-[0.7rem] text-[var(--color-text-muted)]">
                      {c.meta}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Timeline mini */}
            <Reveal>
              <div className="border-l border-[var(--color-card-border)] ml-2 pl-6 py-2 space-y-6 relative">
                {timeline.slice(-3).map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[29px] top-1 w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]" />
                    <div className="text-[0.7rem] text-[var(--color-accent)] font-bold mb-0.5">{item.year}</div>
                    <div className="text-[0.8rem] font-medium text-[var(--color-text-primary)] mb-1">{item.title}</div>
                    <div className="text-[0.75rem] text-[var(--color-text-muted)] leading-snug max-w-[400px]">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
