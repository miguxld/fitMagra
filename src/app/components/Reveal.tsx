"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
}

export default function Reveal({ children, className, delay }: RevealProps) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={cn("reveal", delay && `reveal-delay-${delay}`, className)}
    >
      {children}
    </div>
  );
}
