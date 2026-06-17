"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { getTransformations, type Lang } from "@/app/lib/data";
import Reveal from "./Reveal";

interface TransformsProps {
  t: (key: string) => string;
  lang: Lang;
}

export default function Transforms({ t, lang }: TransformsProps) {
  const headRef = useScrollReveal();
  const transformations = getTransformations(lang);

  return (
    <section id="results" className="py-20 md:py-28 px-5 md:px-10 lg:px-20 bg-[var(--color-bg)]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div ref={headRef} className="reveal text-center mb-10 md:mb-16">
          <div className="section-label mb-4">{t("transforms.label")}</div>
          <h2
            className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-tight"
            dangerouslySetInnerHTML={{ __html: t("transforms.title") }}
          />
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {transformations.map((tr, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="break-inside-avoid relative rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-surface)] border border-[var(--color-card-border)] group">
                <div className="relative w-full aspect-[4/5] sm:aspect-auto">
                  <img
                    src={tr.src}
                    alt={tr.label}
                    className={`w-full ${
                      tr.type === "cover" ? "h-full object-cover" : "h-auto object-contain bg-black/5"
                    } transition-transform duration-500 group-hover:scale-105`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <span className="text-white text-[0.7rem] font-medium tracking-wider uppercase px-4 py-3">
                      {tr.label}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Global statement */}
        <Reveal className="mt-16 text-center">
          <p className="text-[0.9rem] text-[var(--color-text-secondary)] max-w-2xl mx-auto italic font-display">
            {lang === "es" ? "Estos resultados no son magia. Son la consecuencia lógica de alinear tu bioquímica con un estímulo diseñado específicamente para ti." : "These results are not magic. They are the logical consequence of aligning your biochemistry with a stimulus designed specifically for you."}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
