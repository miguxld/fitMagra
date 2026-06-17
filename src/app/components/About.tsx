"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { getCredentials, getTimeline, type Lang } from "@/app/lib/data";

interface AboutProps {
  t: (key: string) => string;
  lang: Lang;
}

export default function About({ t, lang }: AboutProps) {
  const imgRef = useScrollReveal();
  const textRef = useScrollReveal();
  const credentials = getCredentials(lang);
  const timeline = getTimeline(lang);

  return (
    <section id="about" className="py-20 md:py-24 px-5 md:px-10 lg:px-20 max-w-[calc(1240px+160px)] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1fr] gap-10 lg:gap-16 items-start">
        <div ref={imgRef} className="reveal lg:sticky lg:top-24">
          <div className="rounded-[var(--radius-lg)] overflow-hidden aspect-[3/4] bg-[var(--color-surface)]">
            <img
              src="/img/coach-pilates.jpg"
              alt="Mauricio Sánchez · Coach FitMagra"
              className="w-full h-full object-cover object-top block"
            />
          </div>
          <div className="mt-4 text-[0.7rem] text-[var(--color-text-muted)] tracking-wider flex justify-between items-center">
            <span>Mauricio Sánchez · CEO FitMagra</span>
            <a
              href="https://www.linkedin.com/in/mauriciofitmagra/"
              target="_blank"
              className="text-[var(--color-text-primary)] no-underline border-b border-[var(--color-card-border)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </div>

        <div ref={textRef} className="reveal reveal-delay-1">
          <div className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.22em] uppercase text-[var(--color-text-muted)] mb-3">
            <span className="w-[18px] h-[1px] bg-[var(--color-accent)] inline-block" />
            {t("about.label")}
          </div>
          <h2
            className="font-display text-[clamp(2rem,4.2vw,3.3rem)] font-bold leading-[1.05] tracking-tight mb-5"
            dangerouslySetInnerHTML={{ __html: t("about.title") }}
          />
          <div className="w-12 h-0.5 bg-[var(--color-accent)] rounded-full mb-8" />

          <p className="text-[0.95rem] leading-[1.75] text-[var(--color-text-secondary)] mb-4">
            {lang === "es" ? (
              <>Soy <strong className="text-[var(--color-text-primary)] font-medium">Mauricio Sánchez</strong>, Magíster en Actividad Física y Salud por la Universidad del Rosario, entrenador certificado y creador de <strong className="text-[var(--color-text-primary)] font-medium">FitMagra Systems</strong> — un método que simula un equipo multidisciplinario real: fisiólogo, dietista clínico y bioquímico, todo en un solo protocolo.</>
            ) : (
              <>I am <strong className="text-[var(--color-text-primary)] font-medium">Mauricio Sánchez</strong>, M.Sc. in Physical Activity and Health from Universidad del Rosario, certified trainer and creator of <strong className="text-[var(--color-text-primary)] font-medium">FitMagra Systems</strong> — a method that simulates a real multidisciplinary team: physiologist, clinical dietitian and biochemist, all in a single protocol.</>
            )}
          </p>
          <p className="text-[0.95rem] leading-[1.75] text-[var(--color-text-secondary)] mb-4">
            {lang === "es" ? (
              <>He asesorado a <strong className="text-[var(--color-text-primary)] font-medium">+450 personas en 14 países</strong> — desde clientes post-operatorios hasta médicos preparando OceanMan. Cada caso recibe el mismo rigor: ecuaciones científicas reales, evidencia Oxford CEBM y ajuste clínico semanal.</>
            ) : (
              <>I have advised <strong className="text-[var(--color-text-primary)] font-medium">+450 people in 14 countries</strong> — from post-surgery clients to doctors preparing for OceanMan. Every case receives the same rigor: real scientific equations, Oxford CEBM evidence and weekly clinical adjustment.</>
            )}
          </p>

          {/* Credentials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
            {credentials.map((cred, i) => (
              <div
                key={i}
                className="relative border border-[var(--color-card-border)] rounded-[var(--radius-md)] p-5 bg-[var(--color-surface)] transition-all hover:border-[var(--color-accent)] hover:-translate-y-0.5 overflow-hidden group"
              >
                {cred.logo && (
                  <div className="w-12 h-12 rounded-[10px] overflow-hidden bg-[var(--color-surface-2)] mb-3">
                    <img
                      src={cred.logo}
                      alt={cred.inst}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                )}
                <div className="text-[0.6rem] tracking-[0.15em] uppercase text-[var(--color-accent)] font-medium mb-1">
                  {cred.inst}
                </div>
                <div className="text-[0.86rem] font-medium text-[var(--color-text-primary)] leading-snug mb-1">
                  {cred.title}
                </div>
                <div className="text-[0.7rem] text-[var(--color-text-muted)]">
                  {cred.meta}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mt-10 relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-card-border)]" />
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-8 pb-6 last:pb-0">
                <div className="absolute left-[3px] top-1.5 w-[9px] h-[9px] rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-accent)] z-10" />
                <div className="font-mono text-[0.7rem] text-[var(--color-accent)] tracking-wider mb-1">
                  {item.year}
                </div>
                <div className="text-[0.88rem] font-medium text-[var(--color-text-primary)] mb-1">
                  {item.title}
                </div>
                <div className="text-[0.78rem] text-[var(--color-text-secondary)] leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
