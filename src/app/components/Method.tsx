"use client";

import { useState } from "react";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { getMethodCards, type Lang } from "@/app/lib/data";
import Reveal from "./Reveal";

interface MethodProps {
  t: (key: string) => string;
  lang: Lang;
}

export default function Method({ t, lang }: MethodProps) {
  const ref = useScrollReveal();
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const methodCards = getMethodCards(lang);

  return (
    <div
      id="method"
      className="bg-[var(--color-surface)] rounded-[var(--radius-lg)] mx-3 md:mx-8 lg:mx-16 my-8 py-16 md:py-24 px-6 md:px-10 lg:px-16 overflow-hidden relative"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/4 w-1/2 h-40 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(126,217,87,.06), transparent 70%)" }}
      />

      <div ref={ref} className="reveal max-w-[1200px] mx-auto">
        <div className="section-label mb-4">{t("method.label")}</div>
        <h2
          className="font-display text-[clamp(1.9rem,4vw,3.2rem)] font-medium leading-[1.1] tracking-tight mb-3"
          dangerouslySetInnerHTML={{ __html: t("method.title") }}
        />
        <div className="w-10 h-[2px] bg-[var(--color-accent)] rounded-full mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {methodCards.map((card, i) => (
            <Reveal
              key={i}
              delay={((i % 3) + 1) as 1 | 2 | 3 | 4}
            >
              <div
                className={`relative bg-[var(--color-bg)] rounded-[var(--radius-md)] p-7 border transition-all duration-300 cursor-default group overflow-hidden ${
                  activeCard === i
                    ? "border-[var(--color-accent)] shadow-[0_0_0_1px_var(--color-accent),0_8px_32px_rgba(126,217,87,.18)]"
                    : "border-[var(--color-card-border)] hover:border-[var(--color-accent)] hover:shadow-[0_4px_24px_rgba(0,0,0,.35)]"
                }`}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Number pill */}
                <div className="inline-flex items-center gap-1.5 text-[0.65rem] font-semibold tracking-[.18em] uppercase text-[var(--color-accent)] mb-4">
                  <span className="w-6 h-6 rounded-full bg-[var(--color-accent-dim)] text-[var(--color-accent)] text-[0.6rem] font-bold flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {card.num.split("·")[1]?.trim()}
                </div>

                <h3 className="font-display text-[1.12rem] font-medium tracking-tight text-[var(--color-text-primary)] mb-2.5">
                  {card.title}
                </h3>
                <p className="text-[0.83rem] leading-relaxed text-[var(--color-text-secondary)]">
                  {card.desc}
                </p>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[var(--color-accent)] to-transparent transition-all duration-[400ms] w-0 group-hover:w-full" />

                {/* Corner glow on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle at top right, rgba(126,217,87,.08), transparent 70%)" }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
