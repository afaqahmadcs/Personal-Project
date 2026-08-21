"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export const JourneyPhilosophy: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-surface-muted/20 border-t border-b border-border-custom overflow-hidden" aria-label="Journey quote philosophy">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(10,89,255,0.01)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12 text-center flex flex-col items-center justify-center">
        <Reveal direction="none" delay={0.05}>
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-8 block">
            Objective Quote
          </span>
        </Reveal>

        {/* Large Statement Typography */}
        <div className="max-w-4xl space-y-4 sm:space-y-6">
          <Reveal direction="up" delay={0.1}>
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-none">
              I DON&apos;T WANT <br />
              TO JUST <span className="text-text-muted">LEARN</span> TECHNOLOGY.
            </h2>
          </Reveal>
          
          <Reveal direction="up" delay={0.2}>
            <p className="font-display text-3xl sm:text-5xl md:text-7xl uppercase tracking-tighter leading-none text-accent font-bold">
              I WANT TO BUILD WITH IT.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
