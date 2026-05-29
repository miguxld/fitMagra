"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";

interface ContactProps {
  t: (key: string) => string;
}

export default function Contact({ t }: ContactProps) {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="contact" className="py-20 md:py-24 px-5 md:px-10 lg:px-20 max-w-[calc(1240px+160px)] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div ref={leftRef} className="reveal">
          <h2
            className="font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight mb-5"
            dangerouslySetInnerHTML={{ __html: t("contact.title") }}
          />
          <p className="text-[0.95rem] leading-relaxed text-[var(--color-text-secondary)] mb-8 max-w-[440px]">
            {t("contact.sub")}
          </p>
          <a
            href="https://wa.me/573153614260?text=Hola%2C%20quiero%20agendar%20mi%20valoraci%C3%B3n%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[var(--color-accent)] text-[var(--color-bg)] px-7 py-4 rounded-full text-[0.82rem] font-medium no-underline transition-all hover:bg-[var(--color-accent-hover)] hover:-translate-y-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0a8 8 0 00-6.93 11.99L0 16l4.16-1.05A8 8 0 108 0zm4.69 11.31c-.2.56-1.18 1.07-1.62 1.13-.41.06-.93.08-1.5-.09-.34-.1-.79-.25-1.36-.5-2.4-1.04-3.96-3.46-4.08-3.62-.12-.16-.97-1.29-.97-2.46 0-1.17.62-1.75.84-1.99.22-.24.48-.3.64-.3l.46.01c.15.01.35-.06.55.42.2.49.7 1.69.76 1.81.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.24.61 1 1.31 1.62.9.8 1.66 1.05 1.9 1.17.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.41.66 1.65.78.24.12.4.18.46.28.06.1.06.58-.14 1.14z" />
            </svg>
            {t("contact.cta")}
          </a>
        </div>

        <div ref={rightRef} className="reveal reveal-delay-2 flex flex-col">
          {[
            { label: "WhatsApp", val: "+57 315 361 4260", href: "https://wa.me/573153614260" },
            { label: "Email", val: "Fitmagrasystems@gmail.com", href: "mailto:Fitmagrasystems@gmail.com" },
            { label: "LinkedIn", val: "linkedin.com/in/mauriciofitmagra", href: "https://www.linkedin.com/in/mauriciofitmagra/" },
            { label: "FACEBOOK", val: "facebook.com/FitmagraOficial", href: "https://www.facebook.com/FitmagraOficial/" },
            { label: "Ubicación", val: "Bogotá, Colombia ·" },
            { label: "Entrega", val: "Plan en 1-3 días hábiles" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex gap-4 py-4 border-b border-[var(--color-card-border)] last:border-b-0"
            >
              <span className="text-[0.6rem] tracking-[0.15em] uppercase text-[var(--color-accent)] min-w-[90px] pt-1 font-medium flex-shrink-0">
                {item.label}
              </span>
              <span className="text-[0.85rem] text-[var(--color-text-secondary)] leading-relaxed">
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[var(--color-text-primary)] no-underline border-b border-[var(--color-card-border)] transition-colors hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]"
                  >
                    {item.val}
                  </a>
                ) : (
                  item.val
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
