"use client";

import { useState, useRef } from "react";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { testimonials } from "@/app/lib/data";

interface TestimonialsProps {
  t: (key: string) => string;
}

export default function Testimonials({ t }: TestimonialsProps) {
  const headRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    const el = vid as HTMLVideoElement & {
      webkitRequestFullscreen?: () => void;
      webkitEnterFullscreen?: () => void;
    };
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.webkitEnterFullscreen) el.webkitEnterFullscreen();
  };

  return (
    <section id="testi" className="py-20 md:py-24 px-5 md:px-10 lg:px-20 bg-[var(--color-surface)]">
      <div className="max-w-[1240px] mx-auto">
        <div ref={headRef} className="reveal">
          <div className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.22em] uppercase text-[var(--color-text-muted)] mb-3">
            <span className="w-[18px] h-[1px] bg-[var(--color-accent)] inline-block" />
            {t("testi.label")}
          </div>
          <h2
            className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-tight"
            dangerouslySetInnerHTML={{ __html: t("testi.title") }}
          />
          <div className="w-12 h-0.5 bg-[var(--color-accent)] rounded-full mt-4 mb-10" />
        </div>

        <div ref={gridRef} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-[var(--color-card-bg)] rounded-[var(--radius-md)] p-7 relative border border-[var(--color-card-border)] transition-all hover:-translate-y-1 hover:border-[var(--color-accent)]"
            >
              <span className="absolute top-2 right-5 font-[family-name:var(--font-display)] text-[4rem] text-[var(--color-accent)] opacity-15 leading-none select-none">
                &ldquo;
              </span>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[42px] h-[42px] rounded-full bg-[var(--color-accent)] flex items-center justify-center text-[0.82rem] font-medium text-white flex-shrink-0">
                  {item.initials}
                </div>
                <div>
                  <div className="text-[0.82rem] font-medium text-[var(--color-text-primary)]">
                    {item.name}
                  </div>
                  <div className="text-[0.66rem] text-[var(--color-text-muted)]">
                    {item.role}
                  </div>
                </div>
              </div>
              <div className="text-[var(--color-star)] text-[0.72rem] tracking-widest mb-3">
                ★★★★★
              </div>
              <p className="text-[0.83rem] leading-[1.7] text-[var(--color-text-secondary)]">
                {item.text}
              </p>
            </div>
          ))}

          {/* Video testimonial */}
          <div
            className="bg-[var(--color-card-bg)] rounded-[var(--radius-md)] relative border border-[var(--color-card-border)] transition-all overflow-hidden flex flex-col"
          >
            <div
              className={`relative w-full overflow-hidden bg-black cursor-pointer ${
                playing ? "aspect-video max-h-[45vh]" : "aspect-[4/3]"
              }`}
              onClick={handlePlay}
              tabIndex={0}
              role="button"
              aria-label="Reproducir video testimonial"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handlePlay();
                }
              }}
            >
              <video
                ref={videoRef}
                src="/testimonial-video.mp4"
                muted
                playsInline
                preload="metadata"
                className={`w-full h-full block bg-black ${
                  playing ? "object-contain max-h-[45vh]" : "object-cover"
                }`}
              />
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                  playing ? "opacity-0 pointer-events-none" : "bg-black/15"
                }`}
              >
                <svg width="48" height="48" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.6)" />
                  <polygon points="10,8 18,12 10,16" fill="white" />
                </svg>
              </div>
              {playing && (
                <button
                  onClick={handleFullscreen}
                  aria-label="Pantalla completa"
                  className="absolute top-3 right-3 bg-black/55 border-none rounded-lg p-2 flex items-center justify-center z-10"
                  title="Pantalla completa"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M3 3h7v2H5v5H3V3zm11 0h7v7h-2V5h-5V3zM3 14h2v5h5v2H3v-7zm16 0h2v7h-7v-2h5v-5z" />
                  </svg>
                </button>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-[42px] h-[42px] rounded-full bg-[var(--color-accent)] flex items-center justify-center text-[0.82rem] font-medium text-white flex-shrink-0">
                  CL
                </div>
                <div>
                  <div className="text-[0.82rem] font-medium text-[var(--color-text-primary)]">
                    Asesorada FitMagra
                  </div>
                  <div className="text-[0.66rem] text-[var(--color-text-muted)]">
                    Video testimonial · transformación real
                  </div>
                </div>
              </div>
              <div className="text-[#FFD27A] text-[0.72rem] tracking-widest mb-2">
                ★★★★★
              </div>
              <p className="text-[0.83rem] leading-[1.7] text-[var(--color-text-secondary)]">
                Toca para reproducir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
