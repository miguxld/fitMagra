"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { getTransformations, type Lang } from "@/app/lib/data";

interface TransformsProps {
  t: (key: string) => string;
  lang: Lang;
}

export default function Transforms({ t, lang }: TransformsProps) {
  const headRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const transformations = getTransformations(lang);

  return (
    <section id="transforms" className="py-20 md:py-24 px-5 md:px-10 lg:px-20 max-w-[calc(1240px+160px)] mx-auto">
      <div ref={headRef} className="reveal flex flex-wrap justify-between items-end gap-4 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.22em] uppercase text-[var(--color-text-muted)] mb-3">
            <span className="w-[18px] h-[1px] bg-[var(--color-accent)] inline-block" />
            {t("transforms.label")}
          </div>
          <h2
            className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-tight"
            dangerouslySetInnerHTML={{ __html: t("transforms.title") }}
          />
          <div className="w-12 h-0.5 bg-[var(--color-accent)] rounded-full mt-4" />
        </div>
        <p className="text-[0.68rem] text-[var(--color-text-muted)] max-w-[280px] leading-relaxed">
          {lang === "es" ? "Resultados reales. Los resultados individuales varían según adherencia y condición inicial." : "Real results. Individual results vary based on adherence and starting condition."}
        </p>
      </div>

      <div
        ref={gridRef}
        className="reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5"
      >
        {transformations.map((item, i) => (
          <div
            key={i}
            className={`relative rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-surface)] group ${
              item.wide ? "col-span-2 aspect-[3/2]" : "aspect-[3/4]"
            }`}
          >
            <img
              src={item.src}
              alt={`${item.label} - Transformación FitMagra`}
              loading="lazy"
              className={`w-full h-full transition-transform duration-500 group-hover:scale-[1.04] ${
                item.type === "contain"
                  ? "object-contain bg-[var(--color-bg)]"
                  : "object-cover"
              } ${item.wide ? "object-center" : "object-top"}`}
            />
            <div className="absolute bottom-2.5 left-3 text-[0.6rem] tracking-[0.1em] uppercase text-white bg-black/55 px-2.5 py-1.5 rounded-full backdrop-blur-sm pointer-events-none transition-all group-hover:-translate-y-0.5 group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-bg)]">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
