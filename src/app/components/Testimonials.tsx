"use client";

import { useState, useRef, useCallback } from "react";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { getTestimonials, type Lang } from "@/app/lib/data";

interface TestimonialsProps {
  t: (key: string) => string;
  lang: Lang;
}

export default function Testimonials({ t, lang }: TestimonialsProps) {
  const headRef = useScrollReveal();
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touchStartX = useRef<number | null>(null);

  const testimonials = getTestimonials(lang);

  const handlePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.muted = false;
      vid.controls = true;
      const p = vid.play();
      if (p) p.catch(() => { vid.muted = true; vid.play(); });
      setPlaying(true);
    } else {
      vid.pause();
      setPlaying(false);
    }
  };

  const prev = useCallback(() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length), [testimonials.length]);
  const next = useCallback(() => setActive((a) => (a + 1) % testimonials.length), [testimonials.length]);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <section id="testi" className="py-20 md:py-28 px-5 md:px-10 lg:px-20 bg-[var(--color-surface)]">
      <div className="max-w-[1200px] mx-auto">
        <div ref={headRef} className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="section-label mb-4">{t("testi.label")}</div>
            <h2
              className="font-display text-[clamp(1.9rem,4vw,3.1rem)] font-medium leading-[1.1] tracking-tight"
              dangerouslySetInnerHTML={{ __html: t("testi.title") }}
            />
          </div>
          {/* Navigation arrows */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[var(--color-card-border)] bg-[var(--color-card-bg)] text-[var(--color-text-muted)] flex items-center justify-center cursor-pointer transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-0.5 p-0"
              aria-label="Testimonio anterior"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M10 3L5 8l5 5" />
              </svg>
            </button>
            <span className="text-[0.72rem] text-[var(--color-text-muted)] font-medium min-w-[36px] text-center">
              {active + 1}/{testimonials.length}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[var(--color-card-border)] bg-[var(--color-card-bg)] text-[var(--color-text-muted)] flex items-center justify-center cursor-pointer transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-0.5 p-0"
              aria-label="Siguiente testimonio"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 3l5 5-5 5" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Desktop: 3-col grid ── */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-[var(--color-card-bg)] rounded-[var(--radius-md)] p-6 relative border border-[var(--color-card-border)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[0_8px_32px_rgba(0,0,0,.3)] group"
            >
              {/* Quote mark */}
              <span className="absolute top-4 right-5 font-display text-[3.5rem] text-[var(--color-accent)] opacity-10 leading-none select-none group-hover:opacity-20 transition-opacity">
                &ldquo;
              </span>

              {/* Stars */}
              <div className="text-[var(--color-star)] text-[0.78rem] tracking-widest mb-4">★★★★★</div>

              {/* Text */}
              <p className="text-[0.84rem] leading-[1.75] text-[var(--color-text-secondary)] mb-5 relative z-10">
                {item.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-[var(--color-card-border)] pt-4">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] flex items-center justify-center text-[0.75rem] font-bold text-[var(--color-bg)] flex-shrink-0">
                  {item.initials}
                </div>
                <div>
                  <div className="text-[0.82rem] font-semibold text-[var(--color-text-primary)]">{item.name}</div>
                  <div className="text-[0.66rem] text-[var(--color-text-muted)]">{item.role}</div>
                </div>
              </div>
            </div>
          ))}

          {/* Video testimonial card */}
          <div className="bg-[var(--color-card-bg)] rounded-[var(--radius-md)] border border-[var(--color-card-border)] overflow-hidden flex flex-col transition-all duration-300 hover:border-[var(--color-accent)]">
            <div
              className={`relative w-full overflow-hidden bg-black cursor-pointer flex-shrink-0 ${playing ? "aspect-video" : "aspect-[4/3]"}`}
              onClick={handlePlay}
              role="button"
              tabIndex={0}
              aria-label="Reproducir video testimonial"
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handlePlay(); } }}
            >
              <video
                ref={videoRef}
                src="/testimonial-video.mp4"
                muted playsInline preload="metadata"
                className={`w-full h-full block bg-black ${playing ? "object-contain" : "object-cover"}`}
              />
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity ${playing ? "opacity-0 pointer-events-none" : "bg-black/20"}`}>
                <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/90 flex items-center justify-center shadow-[0_0_0_8px_rgba(126,217,87,.2)] transition-all hover:scale-110">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-bg)">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-5 flex-1">
              <div className="text-[var(--color-star)] text-[0.78rem] tracking-widest mb-2">★★★★★</div>
              <p className="text-[0.8rem] text-[var(--color-text-secondary)] leading-relaxed">
                {lang === "es" ? "Testimonio en video — experiencia real con FitMagra Systems." : "Video testimonial — real experience with FitMagra Systems."}
              </p>
              <div className="flex items-center gap-2.5 mt-4">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] flex items-center justify-center text-[0.72rem] font-bold text-[var(--color-bg)] flex-shrink-0">CL</div>
                <div>
                  <div className="text-[0.8rem] font-semibold text-[var(--color-text-primary)]">Asesorada FitMagra</div>
                  <div className="text-[0.64rem] text-[var(--color-text-muted)]">{lang === "es" ? "Video testimonial · transformación real" : "Video testimonial · real transformation"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile: single card carousel ── */}
        <div
          className="md:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="bg-[var(--color-card-bg)] rounded-[var(--radius-md)] p-6 border border-[var(--color-card-border)] animate-card-in" key={active}>
            <div className="text-[var(--color-star)] text-[0.82rem] tracking-widest mb-4">★★★★★</div>
            <p className="text-[0.88rem] leading-[1.75] text-[var(--color-text-secondary)] mb-5">
              {testimonials[active].text}
            </p>
            <div className="flex items-center gap-3 border-t border-[var(--color-card-border)] pt-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] flex items-center justify-center text-[0.78rem] font-bold text-[var(--color-bg)] flex-shrink-0">
                {testimonials[active].initials}
              </div>
              <div>
                <div className="text-[0.86rem] font-semibold text-[var(--color-text-primary)]">{testimonials[active].name}</div>
                <div className="text-[0.68rem] text-[var(--color-text-muted)]">{testimonials[active].role}</div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full border-0 cursor-pointer transition-all duration-300 ${
                  i === active
                    ? "w-6 h-2 bg-[var(--color-accent)]"
                    : "w-2 h-2 bg-[var(--color-card-border)] hover:bg-[var(--color-text-muted)]"
                }`}
                aria-label={`Ver testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
