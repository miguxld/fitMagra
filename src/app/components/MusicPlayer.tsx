"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const aud = audioRef.current;
    if (!aud) return;
    if (aud.paused) {
      const p = aud.play();
      if (p) p.catch(() => {});
      setPlaying(true);
    } else {
      aud.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/fitmagra-vibes.mp3" type="audio/mpeg" />
      </audio>
      <button
        onClick={toggle}
        aria-label={playing ? "Pause FitMagra Vibes" : "Play FitMagra Vibes"}
        aria-pressed={playing}
        className="fixed bottom-5 right-5 z-[500] flex items-center gap-2.5 rounded-full border border-[var(--color-card-border)] bg-[var(--color-surface)] px-3.5 py-3 shadow-[0_6px_22px_rgba(0,0,0,0.35)] cursor-pointer transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(126,217,87,0.22)]"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent)] text-[0.62rem] font-bold text-[var(--color-bg)]">
          {playing ? "⏸" : "▶"}
        </span>
        <span className="text-[0.7rem] text-[var(--color-text-secondary)] whitespace-nowrap tracking-wide">
          FitMagra Vibes
        </span>
        <div className="flex items-end gap-[2px] h-3.5">
          {[5, 11, 7, 13].map((h, i) => (
            <span
              key={i}
              className="w-[2.5px] rounded-sm bg-[var(--color-accent)] animate-mb"
              style={{
                height: `${h}px`,
                animationDelay: `${i * 0.15}s`,
                animationPlayState: playing ? "running" : "paused",
                opacity: playing ? 1 : 0.3,
              }}
            />
          ))}
        </div>
      </button>
    </>
  );
}
