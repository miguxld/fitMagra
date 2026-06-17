"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import type { Lang } from "@/app/lib/data";
import Reveal from "./Reveal";

interface HeroProps {
  t: (key: string) => string;
  lang: Lang;
}

export default function Hero({ t, lang }: HeroProps) {
  const ref = useScrollReveal();

  const heroStats = [
    { v: lang === "es" ? "+8 años" : "+8 years", l: lang === "es" ? "Coaching de élite" : "Elite coaching" },
    { v: "Oxford CEBM", l: lang === "es" ? "Evidencia clínica" : "Clinical evidence" },
    { v: "24/7", l: "MagraMind AI" },
  ];

  return (
    <section className="relative min-h-[100dvh] pt-[120px] pb-16 px-5 md:px-10 lg:px-20 overflow-hidden flex flex-col justify-center bg-[var(--color-bg)]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glow left */}
        <div 
          className="absolute top-1/4 left-[-10%] w-[50%] max-w-[600px] aspect-square rounded-full blur-[100px] opacity-[0.15] mix-blend-screen"
          style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
        />
        {/* Glow right */}
        <div 
          className="absolute bottom-1/4 right-[-10%] w-[60%] max-w-[700px] aspect-square rounded-full blur-[120px] opacity-[0.1] mix-blend-screen"
          style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
        />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: 'linear-gradient(var(--color-text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)', 
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
          }} 
        />
      </div>

      <div className="max-w-[1240px] w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-8 items-center">
          
          {/* Content Column */}
          <div ref={ref} className="reveal max-w-2xl">
            <Reveal delay={100}>
              <div
                className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[var(--color-card-border)] bg-[var(--color-surface)] text-[0.7rem] font-semibold tracking-wider text-[var(--color-text-secondary)] uppercase mb-8 shadow-sm"
                dangerouslySetInnerHTML={{ __html: t("hero.trust") }}
              />
            </Reveal>

            <Reveal delay={200}>
              <h1 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.05] tracking-tight text-[var(--color-text-primary)] font-medium mb-6">
                <span className="block opacity-90">{t("hero.title.l1")}</span>
                <span className="block opacity-90">{t("hero.title.l2")}</span>
                <span 
                  className="block text-[var(--color-accent)] italic pr-4"
                  dangerouslySetInnerHTML={{ __html: t("hero.title.l3") }}
                />
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-[1.05rem] md:text-[1.15rem] text-[var(--color-text-secondary)] leading-relaxed max-w-xl mb-10 border-l-2 border-[var(--color-accent)] pl-5">
                {t("hero.sub")}
              </p>
            </Reveal>

            <Reveal delay={400} className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/573153614260?text=Hola%2C%20quiero%20agendar%20mi%20valoraci%C3%B3n%20gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {t("hero.cta")}
              </a>
              <a href="#method" className="btn-secondary">
                {t("hero.cta2")}
              </a>
            </Reveal>
            
            {/* Trust Badges / Mini Stats */}
            <Reveal delay={500} className="mt-12 pt-8 border-t border-[var(--color-card-border)] flex flex-wrap gap-x-8 gap-y-4">
              {heroStats.map((item, i) => (
                <div key={i}>
                  <div className="font-display text-[1.4rem] font-medium text-[var(--color-text-primary)] mb-0.5">{item.v}</div>
                  <div className="text-[0.65rem] uppercase tracking-widest text-[var(--color-text-muted)] font-semibold">{item.l}</div>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Visual/Image Column */}
          <div className="relative hidden lg:block h-[700px]">
            <Reveal delay={300} className="absolute inset-0 h-full w-full">
              <div className="w-full h-full rounded-[2.5rem] bg-[var(--color-surface)] border border-[var(--color-card-border)] overflow-hidden relative shadow-[var(--shadow-elevation)]">
                {/* We use an abstract gradient or the actual image if preferred. For an elegant look, a stylized image with an overlay is best. */}
                <img 
                  src="/img/mau.jpeg" 
                  alt="FitMagra System" 
                  className="w-full h-full object-cover object-center filter contrast-[1.1] grayscale-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-[var(--color-accent)] mix-blend-overlay opacity-20" />
                
                {/* Floating UI Element representing the "System" */}
                <div className="absolute bottom-8 right-8 bg-[var(--color-surface)]/90 backdrop-blur-md border border-[var(--color-card-border)] p-5 rounded-2xl shadow-xl max-w-[240px] animate-float">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                    <div className="text-[0.7rem] uppercase tracking-widest text-[var(--color-text-primary)] font-bold">{lang === "es" ? "Ajuste Clínico" : "Clinical Adjustment"}</div>
                  </div>
                  <div className="h-1.5 w-full bg-[var(--color-card-bg)] rounded-full mb-2 overflow-hidden">
                    <div className="h-full bg-[var(--color-accent)] w-[85%]" />
                  </div>
                  <div className="h-1.5 w-[70%] bg-[var(--color-card-bg)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--color-accent)] w-[60%]" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
