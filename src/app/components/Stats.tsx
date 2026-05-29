"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import Reveal from "./Reveal";

interface StatsProps {
  t: (key: string) => string;
}

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const dur = 1400;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / dur);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(Math.floor(eased * target));
              if (t < 1) requestAnimationFrame(tick);
              else setValue(target);
            };
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function Stats({ t }: StatsProps) {
  const headRef = useScrollReveal();

  return (
    <section id="stats" className="py-20 md:py-24 px-5 md:px-10 lg:px-20 max-w-[calc(1240px+160px)] mx-auto">
      <div ref={headRef} className="reveal mb-12 max-w-[680px]">
        <div className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.22em] uppercase text-[var(--color-text-muted)] mb-3">
          <span className="w-[18px] h-[1px] bg-[var(--color-accent)] inline-block" />
          {t("stats.label")}
        </div>
        <h2
          className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.2vw,3.3rem)] font-bold leading-[1.05] tracking-tight"
          dangerouslySetInnerHTML={{ __html: t("stats.title") }}
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-[var(--color-card-border)]">
        {[
          { target: 450, suffix: "+", label: "Clientes", desc: "Asesorados con protocolo doctoral, desde post-operatorios hasta atletas de élite." },
          { target: 14, suffix: "", label: "Países", desc: "Colombia, México, USA, España, Argentina, Chile, Ecuador y más." },
          { target: 8, suffix: "+", label: "Años de coaching", desc: "Más de 8 años aplicando bioquímica + nutrición clínica + entrenamiento periodizado." },
          { target: 4, suffix: "", label: "Ecuaciones TMB", desc: "Harris-Benedict, Mifflin-St Jeor, Cunningham y Oxford — cruce científico." },
        ].map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
            className={`p-8 lg:p-9 relative group border-r border-[var(--color-card-border)] last:border-r-0 ${
              i < 2 ? "border-b lg:border-b-0" : ""
            }`}
          >
            <div className="font-[family-name:var(--font-display)] text-[clamp(3rem,6vw,4.5rem)] font-normal leading-none tracking-tight text-[var(--color-text-primary)] transition-transform group-hover:scale-105">
              <Counter target={stat.target} suffix={stat.suffix} />
            </div>
            <div className="text-[0.72rem] tracking-[0.12em] uppercase text-[var(--color-text-muted)] mt-4 font-medium">
              {stat.label}
            </div>
            <div className="text-[0.78rem] text-[var(--color-text-secondary)] mt-2 leading-relaxed">
              {stat.desc}
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-[60%]" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
