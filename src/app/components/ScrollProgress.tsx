"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      setWidth(Math.min(100, scrolled * 100));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-[400] pointer-events-none bg-gradient-to-r from-[var(--color-accent)] to-[color-mix(in_oklab,var(--color-accent)_60%,#fff)]"
      style={{ width: `${width}%`, transition: "width 0.1s linear" }}
    />
  );
}
