"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { getMethodCards, type Lang } from "@/app/lib/data";
import Reveal from "./Reveal";

interface MethodProps {
  t: (key: string) => string;
  lang: Lang;
}

export default function Method({ t, lang }: MethodProps) {
  const headRef = useScrollReveal();
  const methodCards = getMethodCards(lang);

  return (
    <section id="method" className="py-20 md:py-28 px-5 md:px-10 lg:px-20 bg-[var(--color-surface)] relative overflow-hidden">
      {/* Abstract lines background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--color-card-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-card-border) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1240px] mx-auto relative z-10">
        <div ref={headRef} className="reveal text-center mb-12 md:mb-16">
          <div className="section-label mb-4">{t("method.label")}</div>
          <h2
            className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-medium leading-[1.05] tracking-tight"
            dangerouslySetInnerHTML={{ __html: t("method.title") }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {methodCards.map((card, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group relative p-6 lg:p-8 rounded-[1.5rem] bg-[var(--color-card-bg)] border border-[var(--color-card-border)] overflow-hidden transition-all duration-300 hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-elevation)] h-full flex flex-col">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-dim)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="text-[0.65rem] uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-3">
                    {card.num}
                  </div>
                  <h3 className="text-[1.1rem] font-medium text-[var(--color-text-primary)] leading-tight mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[0.8rem] text-[var(--color-text-secondary)] leading-relaxed flex-1">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
