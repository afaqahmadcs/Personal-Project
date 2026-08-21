"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

const PROCESS_STEPS = ["DISCOVER", "PLAN", "DESIGN", "BUILD", "REFINE", "SHIP"];

export const BuildProcess: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 border-t border-border-custom bg-surface-muted/10" aria-label="Development process overview">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <Reveal direction="up" delay={0.05}>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              Engineering Path
            </span>
            <h2 className="font-display text-3xl uppercase mt-4 mb-4">
              How We Build
            </h2>
            <p className="font-sans text-sm text-text-muted">
              A streamlined, sequential process focusing on logic translation, layout balances, and solid performance outputs.
            </p>
          </Reveal>
        </div>

        {/* Process nodes grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {PROCESS_STEPS.map((step, idx) => (
            <Reveal key={step} direction="up" delay={idx * 0.05}>
              <div className="border border-border-custom bg-background p-6 rounded text-center hover:border-accent transition-colors duration-300">
                <span className="font-mono text-[10px] text-accent font-bold block mb-1">0{idx + 1}</span>
                <span className="font-mono text-xs uppercase font-bold tracking-wider">{step}</span>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
