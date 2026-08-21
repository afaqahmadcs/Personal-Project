"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export const ContentHero: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-background overflow-hidden" aria-label="Content Page Hero">
      {/* Background visual detail */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Metadata tag */}
        <div className="border-b border-border-custom pb-6 mb-12 flex justify-between items-baseline">
          <Reveal direction="none" delay={0.05}>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
              CONTENT / 07 &bull; Editorial Log
            </span>
          </Reveal>
          <Reveal direction="none" delay={0.05}>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              BUILD & LEARN IN PUBLIC
            </span>
          </Reveal>
        </div>

        {/* Hero split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Typography Column */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="up" delay={0.1}>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-none tracking-tighter">
                THOUGHTS, <br />
                EXPERIMENTS <br />
                <span className="text-text-muted">&amp; BUILDS.</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <p className="font-sans text-lg md:text-xl text-foreground font-semibold leading-relaxed max-w-lg mt-4">
                Notes from the intersection of web development, AI, design and creative technology.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="font-sans text-sm text-text-muted max-w-md">
                Documenting self-taught programming lessons, workflow structures, and UI visual iterations.
              </p>
            </Reveal>
          </div>

          {/* Abstract Digital Workbench Sculpture Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal direction="up" delay={0.35}>
              <div className="relative w-80 h-80 border border-border-custom bg-surface-muted/30 rounded-xl flex items-center justify-center p-6 shadow-2xl group overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,89,255,0.06)_0%,transparent_75%)]" />
                
                {/* 3D SVG Digital Workbench */}
                <svg className="w-56 h-56 text-text-muted/40 transition-transform duration-1000 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
                  {/* Notebook-like geometric panels */}
                  <polygon points="15,25 55,20 55,75 15,80" fill="var(--color-surface)" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.75" />
                  
                  {/* Layered glass structures */}
                  <rect x="40" y="40" width="45" height="35" rx="2" stroke="currentColor" strokeWidth="0.75" fill="var(--color-surface)" fillOpacity="0.4" />
                  
                  {/* Floating typography / data lines */}
                  <line x1="45" y1="50" x2="70" y2="50" stroke="var(--color-accent)" strokeWidth="0.75" />
                  <line x1="45" y1="60" x2="60" y2="60" stroke="currentColor" strokeWidth="0.5" />
                  
                  {/* Glowing node lights */}
                  <circle cx="45" cy="50" r="1.5" fill="var(--color-accent)" />
                  <circle cx="70" cy="50" r="1.5" fill="var(--color-accent)" />
                  <circle cx="55" cy="20" r="2" fill="var(--color-accent)" className="animate-pulse" />
                </svg>

                <div className="absolute bottom-4 left-5">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">WKB / WRK-BENCH</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
