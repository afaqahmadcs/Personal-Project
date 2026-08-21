"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export const Philosophy: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-36 bg-surface-muted/30 border-t border-b border-border-custom overflow-hidden" aria-label="Afaq Ahmad Core Philosophy">
      {/* Background grid details */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12 relative flex flex-col items-center justify-center text-center">
        <Reveal direction="none" delay={0.1}>
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-8 block">
            Core Philosophy
          </span>
        </Reveal>

        {/* Editorial Statement Typography */}
        <div className="space-y-4 md:space-y-8 w-full max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <Reveal direction="up" delay={0.15}>
              <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter hover:text-accent transition-colors duration-300">
                LEARN
              </span>
            </Reveal>
            <Reveal direction="none" delay={0.25}>
              <span className="text-text-muted text-3xl sm:text-5xl font-mono hidden md:inline select-none">&rarr;</span>
              <span className="text-text-muted text-2xl font-mono md:hidden select-none">&darr;</span>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter hover:text-accent transition-colors duration-300">
                BUILD
              </span>
            </Reveal>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <Reveal direction="none" delay={0.4}>
              <span className="text-text-muted text-3xl sm:text-5xl font-mono hidden md:inline select-none">&rarr;</span>
              <span className="text-text-muted text-2xl font-mono md:hidden select-none">&darr;</span>
            </Reveal>
            <Reveal direction="up" delay={0.45}>
              <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter hover:text-accent transition-colors duration-300">
                EXPERIMENT
              </span>
            </Reveal>
            <Reveal direction="none" delay={0.55}>
              <span className="text-text-muted text-3xl sm:text-5xl font-mono hidden md:inline select-none">&rarr;</span>
              <span className="text-text-muted text-2xl font-mono md:hidden select-none">&darr;</span>
            </Reveal>
            <Reveal direction="up" delay={0.6}>
              <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter hover:text-accent transition-colors duration-300">
                IMPROVE
              </span>
            </Reveal>
          </div>
        </div>

        <Reveal direction="none" delay={0.75}>
          <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted max-w-md leading-relaxed mt-12">
            A constant, repeating loop of technical exploration and deliberate skill enhancement.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
