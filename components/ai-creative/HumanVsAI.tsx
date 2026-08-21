"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export const HumanVsAI: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 border-t border-b border-border-custom bg-surface-muted/30 overflow-hidden" aria-label="Human intelligence statement">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(10,89,255,0.02)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12 text-center flex flex-col items-center justify-center">
        <Reveal direction="none" delay={0.05}>
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-8 block">
            Core Philosophy
          </span>
        </Reveal>

        {/* Large Typography Statement */}
        <div className="w-full max-w-4xl space-y-4 sm:space-y-6">
          <Reveal direction="up" delay={0.1}>
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-none">
              AI DOESN&apos;T <br />
              <span className="text-text-muted">REPLACE</span> THE THINKING.
            </h2>
          </Reveal>
          
          <Reveal direction="up" delay={0.2}>
            <p className="font-display text-3xl sm:text-5xl md:text-7xl uppercase tracking-tighter leading-none text-accent font-bold">
              IT EXPANDS THE EXPERIMENT.
            </p>
          </Reveal>
        </div>

        <Reveal direction="none" delay={0.35}>
          <p className="font-sans text-xs text-text-muted max-w-md mt-10 leading-relaxed">
            The power of modern models is not to automate away the engineer, but to accelerate exploration cycles, allowing us to build faster, test deeper, and refine with higher visual precision.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
