"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export const AIMotion: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 border-t border-border-custom bg-surface-muted/20" aria-label="AI and Motion exploration">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal direction="up" delay={0.05}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                04 / Cinematic
              </span>
              <h2 className="font-display text-4xl uppercase mt-2">
                AI &times; MOTION
              </h2>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                Structuring motion sequences by generating style references and storyboard outlines. Connecting programmatic scripting with visual flow curves, timeline structures, and editorial video cuts.
              </p>
            </Reveal>

            {/* Sequence block */}
            <div className="pt-4 border-t border-border-custom/50">
              <Reveal direction="up" delay={0.1}>
                <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-text-muted select-none">
                  <span>IDEA</span>
                  <span>&rarr;</span>
                  <span>SCRIPT</span>
                  <span>&rarr;</span>
                  <span className="text-accent font-bold">VISUAL</span>
                  <span>&rarr;</span>
                  <span>MOTION</span>
                  <span>&rarr;</span>
                  <span className="text-foreground font-bold">EDIT</span>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Timeline storyboard schematic Column */}
          <div className="lg:col-span-7">
            <Reveal direction="up" delay={0.15}>
              <div className="border border-border-custom bg-background p-6 rounded-lg relative overflow-hidden shadow-sm flex flex-col justify-center items-center aspect-video group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,89,255,0.01)_0%,transparent_75%)]" />
                
                {/* Storyboard frames vector */}
                <svg className="w-48 h-48 text-text-muted/20 transition-transform duration-1000 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
                  <rect x="10" y="30" width="22" height="40" stroke="currentColor" strokeWidth="0.75" />
                  <rect x="39" y="30" width="22" height="40" stroke="currentColor" strokeWidth="0.75" />
                  <rect x="68" y="30" width="22" height="40" stroke="currentColor" strokeWidth="0.75" />
                  {/* Timeline playhead line */}
                  <line x1="50" y1="20" x2="50" y2="80" stroke="var(--color-accent)" strokeWidth="1" />
                </svg>

                <div className="absolute bottom-3 left-4">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-text-muted">AA / MTN-TIMELINE</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
