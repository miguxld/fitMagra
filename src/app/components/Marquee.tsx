"use client";

import { flagSVG, getCountryNames, countryCodes } from "@/app/lib/data";
import type { Lang } from "@/app/lib/data";

interface MarqueeProps {
  lang: Lang;
}

export default function Marquee({ lang }: MarqueeProps) {
  const names = getCountryNames(lang);

  const content = countryCodes.map((code) => (
    <div key={code} className="flex items-center gap-2.5 px-6 whitespace-nowrap">
      <span
        className="w-6 h-[17px] rounded-[3px] overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,0.3)] bg-[var(--color-bg)] inline-flex flex-shrink-0"
        dangerouslySetInnerHTML={{ __html: flagSVG(code) }}
      />
      <span className="text-[0.68rem] font-medium tracking-wider text-[var(--color-bg)]/80 uppercase">
        {names[code]}
      </span>
      <span className="text-[var(--color-accent)] opacity-60 text-sm">✦</span>
    </div>
  ));

  return (
    <div className="bg-[var(--color-text-primary)] py-3.5 overflow-hidden relative">
      <div className="flex animate-mq w-max hover:[animation-play-state:paused]">
        {content}
        {content}
      </div>
    </div>
  );
}
