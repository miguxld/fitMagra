"use client";

export default function MarqueeCTA() {
  const items = [
    "Renueva tu mente",
    "Cambia tu destino",
    "FitMagra Systems",
    "+450 clientes",
    "14 países",
    "Ciencia real",
  ];

  const content = items.flatMap((text, i) => [
    <span
      key={`t-${i}`}
      className="font-[family-name:var(--font-display)] text-[clamp(1.6rem,3vw,2.5rem)] font-normal px-7 text-[var(--color-text-muted)] whitespace-nowrap tracking-tight"
    >
      {text}
    </span>,
    <span
      key={`s-${i}`}
      className="text-[var(--color-accent)] text-2xl opacity-50 px-2"
    >
      ✦
    </span>,
  ]);

  return (
    <div className="bg-[var(--color-surface)] rounded-[var(--radius-lg)] mx-5 md:mx-10 lg:mx-20 my-8 overflow-hidden py-10">
      <div className="flex animate-mq w-max hover:[animation-play-state:paused]">
        {content}
        {content}
      </div>
    </div>
  );
}
