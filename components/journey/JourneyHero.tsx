"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export const JourneyHero: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-background overflow-hidden" aria-label="Journey Page Hero">
      {/* Cobalt background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Metadata tag */}
        <div className="border-b border-border-custom pb-6 mb-12 flex justify-between items-baseline">
          <Reveal direction="none" delay={0.05}>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
              JOURNEY / 06 &bull; History & Milestones
            </span>
          </Reveal>
          <Reveal direction="none" delay={0.05}>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              PESHAWAR, PAKISTAN / 2025 &mdash; PRESENT
            </span>
          </Reveal>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Typography Column */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="up" delay={0.1}>
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-none tracking-tighter">
                STILL <br />
                <span className="text-text-muted">BUILDING.</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <p className="font-sans text-lg md:text-xl text-foreground font-semibold leading-relaxed max-w-lg mt-4">
                A personal journey through computer science, web development, AI and creative experimentation.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="font-sans text-sm text-text-muted max-w-md">
                Tracking self-taught web milestones, FSc intermediate classes, API experiments, and deployments from Peshawar.
              </p>
            </Reveal>
          </div>

          {/* Growth 3D architectural visual Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal direction="up" delay={0.35}>
              <div className="relative w-80 h-96 border border-border-custom bg-surface-muted/30 rounded-xl flex items-center justify-center p-6 shadow-2xl group overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,89,255,0.06)_0%,transparent_75%)]" />
                
                {/* 3D Growth architectural sculpture SVG */}
                <svg className="w-48 h-72 text-text-muted/40 transition-transform duration-1000 group-hover:scale-105" viewBox="0 0 100 150" fill="none">
                  {/* Bottom Foundation (Simple block) */}
                  <rect x="35" y="110" width="30" height="25" stroke="currentColor" strokeWidth="0.75" fill="var(--color-surface)" fillOpacity="0.2" />
                  
                  {/* Middle Experimentation (Complex layout grid) */}
                  <rect x="40" y="70" width="20" height="30" stroke="currentColor" strokeWidth="0.75" fill="var(--color-surface)" fillOpacity="0.4" />
                  <line x1="40" y1="85" x2="60" y2="85" stroke="currentColor" strokeWidth="0.5" />
                  
                  {/* Top Unfinished Future Structure (Unfinished open wireframes extending upwards) */}
                  <line x1="45" y1="20" x2="45" y2="60" stroke="var(--color-accent)" strokeWidth="0.75" />
                  <line x1="55" y1="20" x2="55" y2="60" stroke="var(--color-accent)" strokeWidth="0.75" />
                  <line x1="45" y1="35" x2="55" y2="35" stroke="var(--color-accent)" strokeWidth="0.5" strokeDasharray="2 2" />
                  
                  {/* Cobalt illuminated nodes (electric blue highlights) */}
                  <circle cx="50" cy="110" r="1.5" fill="var(--color-accent)" />
                  <circle cx="50" cy="70" r="1.5" fill="var(--color-accent)" />
                  <circle cx="45" cy="20" r="2.5" fill="var(--color-accent)" className="animate-pulse" />
                  <circle cx="55" cy="20" r="2.5" fill="var(--color-accent)" className="animate-pulse" />
                </svg>

                <div className="absolute bottom-4 left-5">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">JNY / GRW-3D</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
