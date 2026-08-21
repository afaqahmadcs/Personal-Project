"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export const AIDesign: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 border-t border-border-custom bg-surface-muted/20" aria-label="AI and Design exploration">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal direction="up" delay={0.15}>
              <div className="w-full border border-border-custom bg-background rounded-lg shadow-lg p-8 aspect-video flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,89,255,0.02)_0%,transparent_75%)]" />
                
                {/* Visual design grid nodes layout */}
                <div className="space-y-4 text-center select-none group-hover:scale-105 transition-transform duration-500 ease-out">
                  <svg className="w-16 h-16 text-text-muted/30 mx-auto" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.75" />
                    <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="2" fill="var(--color-accent)" />
                  </svg>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted block">
                    Aesthetic Structure Schema
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <Reveal direction="up" delay={0.05}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                02 / Aesthetics
              </span>
              <h2 className="font-display text-4xl uppercase mt-2">
                AI &times; DESIGN
              </h2>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                Utilizing Midjourney and Figma workflows to brainstorm style directions, layout options, and spacing proportions. AI accelerates the initial exploratory canvas, leaving the selection and final detailing to standard design laws.
              </p>
            </Reveal>

            {/* Sequence list */}
            <div className="pt-4 border-t border-border-custom/50">
              <Reveal direction="up" delay={0.1}>
                <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-text-muted select-none">
                  <span>CONCEPT</span>
                  <span>&rarr;</span>
                  <span className="text-accent font-bold">EXPERIMENT</span>
                  <span>&rarr;</span>
                  <span>SELECT</span>
                  <span>&rarr;</span>
                  <span className="text-foreground font-bold">REFINE</span>
                </div>
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
