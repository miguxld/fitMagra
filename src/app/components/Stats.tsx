"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import Reveal from "./Reveal";

import type { Lang } from "@/app/lib/data";

interface StatsProps {
  t: (key: string) => string;
  lang: Lang;
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
            const dur = 1600;
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
      { threshold: 0.3 }
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

export default function Stats({ t, lang }: StatsProps) {
  const headRef = useScrollReveal();

  const stats = [
    {
      target: 450, suffix: "+", label: lang === "es" ? "Clientes" : "Clients",
      desc: lang === "es" ? "Asesorados con protocolo doctoral — desde post-operatorios hasta atletas de élite." : "Advised with doctoral protocol — from post-surgery to elite athletes.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
    },
    {
      target: 14, suffix: "", label: lang === "es" ? "Países" : "Countries",
      desc: lang === "es" ? "Colombia, México, USA, España, Argentina, Chile, Ecuador y más." : "Colombia, Mexico, USA, Spain, Argentina, Chile, Ecuador and more.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
        </svg>
      ),
    },
    {
      target: 8, suffix: "+", label: lang === "es" ? "Años" : "Years",
      desc: lang === "es" ? "Bioquímica + nutrición clínica + entrenamiento periodizado de élite." : "Biochemistry + clinical nutrition + elite periodized training.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      target: 4, suffix: "", label: lang === "es" ? "Ecuaciones TMB" : "BMR Equations",
      desc: lang === "es" ? "Harris-Benedict, Mifflin-St Jeor, Cunningham y Oxford — cruce científico real." : "Harris-Benedict, Mifflin-St Jeor, Cunningham and Oxford — real scientific cross.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="stats"
      className="py-20 md:py-24 px-5 md:px-10 lg:px-20 max-w-[calc(1240px+160px)] mx-auto"
    >
      <div ref={headRef} className="reveal mb-14 max-w-[620px]">
        <div className="section-label mb-4">{t("stats.label")}</div>
        <h2
          className="font-display text-[clamp(1.9rem,4.2vw,3.2rem)] font-medium leading-[1.05] tracking-tight"
          dangerouslySetInnerHTML={{ __html: t("stats.title") }}
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-card-border)] rounded-[var(--radius-lg)] overflow-hidden">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
            className="bg-[var(--color-surface)] p-8 lg:p-9 relative group cursor-default"
          >
            {/* Icon */}
            <div className="text-[var(--color-accent)] opacity-60 mb-5 group-hover:opacity-100 transition-opacity duration-300">
              {stat.icon}
            </div>

            {/* Number */}
            <div className="font-display text-[clamp(3rem,6vw,4.5rem)] font-medium leading-none tracking-tight text-[var(--color-text-primary)] mb-3 transition-transform duration-300 group-hover:scale-105 origin-left">
              <Counter target={stat.target} suffix={stat.suffix} />
            </div>

            <div className="text-[0.7rem] font-semibold tracking-[.14em] uppercase text-[var(--color-accent)] mb-2">
              {stat.label}
            </div>
            <div className="text-[0.78rem] text-[var(--color-text-secondary)] leading-relaxed">
              {stat.desc}
            </div>

            {/* Bottom accent line on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-accent)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-[400ms] origin-left" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
