"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import type { Lang } from "@/app/lib/data";

interface StatsProps {
  t: (key: string) => string;
  lang: Lang;
}

export default function Stats({ t, lang }: StatsProps) {
  const headRef = useScrollReveal();

  const statsList = [
    { num: "+450", label: lang === "es" ? "Vidas transformadas" : "Lives transformed", desc: lang === "es" ? "Casos documentados y medibles." : "Documented and measurable cases." },
    { num: "4", label: lang === "es" ? "Ecuaciones científicas" : "Scientific equations", desc: lang === "es" ? "Precisión metabólica sin margen de error." : "Metabolic precision with no margin for error." },
    { num: "14", label: lang === "es" ? "Países alcanzados" : "Countries reached", desc: lang === "es" ? "Un sistema funcional en cualquier cultura." : "A functional system in any culture." },
    { num: "8", label: lang === "es" ? "Años de desarrollo" : "Years of development", desc: lang === "es" ? "Evolucionando el protocolo FitMagra." : "Evolving the FitMagra protocol." },
  ];

  return (
    <section className="py-20 md:py-28 px-5 md:px-10 lg:px-20 bg-[var(--color-bg)]">
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div ref={headRef} className="reveal text-center md:text-left mb-12 md:mb-16">
          <div className="section-label mb-4">{t("stats.label")}</div>
          <h2
            className="font-display text-[clamp(1.9rem,4.2vw,3.2rem)] font-medium leading-[1.05] tracking-tight"
            dangerouslySetInnerHTML={{ __html: t("stats.title") }}
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {statsList.map((st, i) => (
            <div key={i} className="group flex flex-col items-center md:items-start text-center md:text-left">
              {/* Animated line */}
              <div className="w-full h-px bg-[var(--color-card-border)] mb-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-0 bg-[var(--color-accent)] group-hover:w-full transition-all duration-700 ease-out" />
              </div>
              
              <div className="font-display text-[clamp(3rem,6vw,4.5rem)] font-medium leading-none tracking-tight text-[var(--color-text-primary)] mb-3 transition-transform duration-300 group-hover:scale-105 origin-left">
                {st.num}
              </div>
              <div className="text-[0.7rem] font-semibold tracking-[.14em] uppercase text-[var(--color-accent)] mb-2">
                {st.label}
              </div>
              <div className="text-[0.8rem] text-[var(--color-text-secondary)] leading-relaxed max-w-[200px]">
                {st.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
