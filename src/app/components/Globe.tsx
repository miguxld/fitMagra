"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { countryCoords, getCountryNames, flagSVG, countryCodes } from "@/app/lib/data";
import type { Lang } from "@/app/lib/data";
import Reveal from "./Reveal";

interface GlobeProps {
  lang: Lang;
}

export default function Globe({ lang }: GlobeProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const globe3dRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const [ry, setRy] = useState(-60);
  const [rx, setRx] = useState(-12);
  const [radius, setRadius] = useState(226);
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateRadius = () => {
      const w = stageRef.current?.offsetWidth;
      if (w) setRadius(w * 0.42);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    const globe3d = globe3dRef.current;
    if (!globe3d) return;

    const tick = () => {
      if (!isDragging.current) {
        setRy((prev) => prev + 0.1);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    const globe3d = globe3dRef.current;
    if (!globe3d) return;
    globe3d.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  }, [rx, ry]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
    e.preventDefault();
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    setRy((prev) => prev + dx * 0.45);
    setRx((prev) => Math.max(-65, Math.min(65, prev - dy * 0.4)));
    lastPos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const names = getCountryNames(lang);

  return (
    <section id="globe-sec" className="py-20 md:py-24 px-5 md:px-10 lg:px-20 max-w-[calc(1240px+160px)] mx-auto relative overflow-hidden">
      <Reveal className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.22em] uppercase text-[var(--color-text-muted)] mb-3">
          <span className="w-[18px] h-[1px] bg-[var(--color-accent)] inline-block" />
          {lang === "es" ? "Alcance global" : "Global reach"}
        </div>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
          14 países,
          <br />
          <em className="text-shimmer">un solo sistema.</em>
        </h2>
        <div className="w-12 h-0.5 bg-[var(--color-accent)] rounded-full mx-auto mt-6 mb-6" />
        <p className="text-[0.92rem] text-[var(--color-text-secondary)] max-w-[520px] mx-auto leading-relaxed">
          {lang === "es"
            ? "Coaching científico aplicado en personas reales. Arrastra el globo para explorar."
            : "Scientific coaching applied to real people. Drag the globe to explore."}
        </p>
      </Reveal>

      {/* Inner marquee */}
      <Reveal className="bg-[var(--color-surface)] rounded-[60px] mx-auto max-w-[920px] py-3.5 overflow-hidden relative mb-8" aria-hidden="true">
        <div className="flex animate-mq w-max hover:[animation-play-state:paused]">
          {[...countryCodes, ...countryCodes].map((code, i) => (
            <div key={`${code}-${i}`} className="flex items-center gap-2.5 px-6 whitespace-nowrap">
              <span
                className="w-6 h-[17px] rounded-[3px] overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,0.3)] bg-[var(--color-bg)] inline-flex flex-shrink-0"
                dangerouslySetInnerHTML={{ __html: flagSVG(code) }}
              />
              <span className="text-[0.68rem] font-medium tracking-wider text-[var(--color-text-secondary)] uppercase">
                {names[code]}
              </span>
              <span className="text-[var(--color-accent)] opacity-60 text-sm">✦</span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Globe */}
      <Reveal className="flex flex-col items-center gap-6">
        <div
          ref={stageRef}
          className="relative w-full aspect-square max-w-[560px] mx-auto cursor-grab active:cursor-grabbing select-none"
          style={{ perspective: "1400px", perspectiveOrigin: "50% 45%" }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={handlePointerUp}
          tabIndex={0}
          role="img"
          aria-label={lang === "es" ? "Globo interactivo - Arrastra para rotar" : "Interactive globe - Drag to rotate"}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setRy((prev) => prev - 10);
            if (e.key === "ArrowRight") setRy((prev) => prev + 10);
            if (e.key === "ArrowUp") setRx((prev) => Math.max(-65, prev - 10));
            if (e.key === "ArrowDown") setRx((prev) => Math.min(65, prev + 10));
          }}
        >
          <div className="globe-bg" />
          <div className="globe-dots" />
          <div className="absolute inset-0 pointer-events-none">
            <span className="absolute border border-dashed border-[rgba(126,217,87,0.22)] rounded-full" style={{ inset: "-22px" }} />
            <span className="absolute border border-dashed border-[rgba(126,217,87,0.22)] rounded-full opacity-50" style={{ inset: "-50px" }} />
            <span className="absolute border border-dashed border-[rgba(126,217,87,0.22)] rounded-full opacity-[0.22]" style={{ inset: "-80px" }} />
          </div>
          <div
            ref={globe3dRef}
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d" }}
          >
            {Object.entries(countryCoords).map(([code, [lat, lon]], i) => (
              <div
                key={code}
                className="absolute top-1/2 left-1/2 w-3.5 h-3.5 -ml-1.5 -mt-1.5"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${lon}deg) rotateX(${-lat}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                <span
                  className="block w-full h-full rounded-full bg-[var(--color-accent)] animate-gp"
                  style={{ animationDelay: `${i * 0.17}s` }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 text-[0.7rem] text-[var(--color-text-muted)] tracking-wide">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round">
            <path d="M5 9l-3 3 3 3M19 9l3 3-3 3M9 5l3-3 3 3M9 19l3 3 3-3" />
          </svg>
          {lang === "es"
            ? "Toca y arrastra para rotar el mundo"
            : "Touch and drag to rotate the world"}
        </div>
      </Reveal>

      {/* Stats */}
      <Reveal className="flex justify-center gap-8 md:gap-10 mt-12 pt-8 border-t border-[var(--color-card-border)] flex-wrap">
        {[
          { num: "14", lbl: lang === "es" ? "Países" : "Countries" },
          { num: "+450", lbl: lang === "es" ? "Clientes" : "Clients" },
          { num: "+8 años", lbl: lang === "es" ? "Experiencia" : "Experience" },
          { num: "4", lbl: lang === "es" ? "Continentes" : "Continents" },
        ].map((s) => (
          <div key={s.lbl} className="text-center">
            <div className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--color-accent)] font-semibold leading-none">
              {s.num}
            </div>
            <div className="text-[0.65rem] tracking-[0.14em] uppercase text-[var(--color-text-muted)] mt-1.5 font-medium">
              {s.lbl}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
