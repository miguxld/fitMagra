"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { methodCards } from "@/app/lib/data";
import Reveal from "./Reveal";

interface MethodProps {
  t: (key: string) => string;
}

export default function Method({ t }: MethodProps) {
  const ref = useScrollReveal();

  return (
    <div id="method" className="bg-[var(--color-surface)] rounded-[var(--radius-lg)] mx-5 md:mx-10 lg:mx-20 my-8 py-16 md:py-20 px-6 md:px-10 lg:px-16">
      <div ref={ref} className="reveal max-w-[1240px] mx-auto">
        <div className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.22em] uppercase text-[var(--color-text-muted)] mb-3">
          <span className="w-[18px] h-[1px] bg-[var(--color-accent)] inline-block" />
          {t("method.label")}
        </div>
        <h2
          className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-tight mb-5"
          dangerouslySetInnerHTML={{ __html: t("method.title") }}
        />
        <div className="w-12 h-0.5 bg-[var(--color-accent)] rounded-full mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-card-border)] rounded-[var(--radius-md)] overflow-hidden">
          {methodCards.map((card, i) => (
            <Reveal
              key={i}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="bg-[var(--color-bg)] p-8 relative overflow-hidden transition-colors hover:bg-[var(--color-surface)] group"
            >
              <div className="font-mono text-[0.72rem] text-[var(--color-accent)] tracking-[0.1em] mb-5 transition-all group-hover:tracking-[0.2em] group-hover:text-[var(--color-accent-hover)]">
                {card.num}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-[1.15rem] font-normal tracking-tight text-[var(--color-text-primary)] mb-2.5">
                {card.title}
              </h3>
              <p className="text-[0.82rem] leading-relaxed text-[var(--color-text-secondary)]">
                {card.desc}
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-[350ms] group-hover:w-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
