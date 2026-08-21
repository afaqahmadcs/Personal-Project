"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export const WorkStatement: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-surface-muted/30 border-t border-b border-border-custom overflow-hidden" aria-label="Work Philosophy Statement">
      {/* Grid details */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12 relative flex flex-col items-center justify-center text-center">
        <Reveal direction="none" delay={0.1}>
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-6 block">
            Quality Standard
          </span>
        </Reveal>

        {/* Large Typography Statement */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full max-w-4xl font-display text-4xl sm:text-6xl md:text-8xl uppercase tracking-tighter mb-8 leading-none">
          <Reveal direction="up" delay={0.15}>
            <span>BUILT.</span>
          </Reveal>
          <Reveal direction="none" delay={0.25}>
            <span className="text-text-muted font-mono select-none">&bull;</span>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <span>TESTED.</span>
          </Reveal>
          <Reveal direction="none" delay={0.4}>
            <span className="text-text-muted font-mono select-none">&bull;</span>
          </Reveal>
          <Reveal direction="up" delay={0.45}>
            <span className="text-text-muted">REFINED.</span>
          </Reveal>
        </div>

        <Reveal direction="none" delay={0.6}>
          <p className="font-sans text-sm text-text-muted max-w-md leading-relaxed mt-4">
            Every project is part of the process of learning, experimenting, and becoming a better builder. I strive to refine code standards, structural design alignment, and build digital tools that work.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
