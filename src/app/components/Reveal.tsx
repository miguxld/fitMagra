"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({ children, className, delay }: RevealProps) {
  const ref = useScrollReveal();
  
  // Apply delay as inline style if provided
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={style}
    >
      {children}
    </div>
  );
}
