"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export const WorkHero: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-background overflow-hidden" aria-label="Work Page Hero">
      {/* Subtle blue background grid details */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Top border and metadata */}
        <div className="border-b border-border-custom pb-6 mb-12">
          <Reveal direction="none" delay={0.05}>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
              WORK / 03 &bull; Projects & Client Catalogues
            </span>
          </Reveal>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Typography Column */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="up" delay={0.1}>
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-none tracking-tighter">
                SELECTED <br />
                <span className="text-text-muted">WORK.</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-wider text-accent font-bold">
                <span>&bull; REAL PROJECTS</span>
                <span>&bull; WEB DEVELOPMENT</span>
                <span>&bull; DESIGN</span>
                <span>&bull; AI &times; CREATIVE</span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="font-sans text-lg text-text-muted max-w-lg leading-relaxed mt-4">
                A collection of websites, digital experiences and experiments built through code, design and AI-assisted workflows.
              </p>
            </Reveal>
          </div>

          {/* 3D Modular Sculpture Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal direction="up" delay={0.35}>
              <div className="relative w-72 h-72 border border-border-custom bg-surface-muted/50 rounded-xl flex flex-col items-center justify-center p-6 shadow-2xl group overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,89,255,0.06)_0%,transparent_75%)]" />
                
                {/* Visual Connected Frames Sculpture */}
                <svg className="w-48 h-48 text-text-muted/40 transition-transform duration-1000 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
                  {/* Connected modular frames */}
                  <rect x="15" y="25" width="30" height="20" stroke="currentColor" strokeWidth="0.75" fill="var(--color-surface)" fillOpacity="0.2" />
                  <rect x="55" y="25" width="30" height="20" stroke="currentColor" strokeWidth="0.75" fill="var(--color-surface)" fillOpacity="0.2" />
                  <rect x="35" y="55" width="30" height="20" stroke="currentColor" strokeWidth="0.75" fill="var(--color-surface)" fillOpacity="0.4" />
                  
                  {/* Connecting lines representing pipeline iteration */}
                  <path d="M30 45 L35 55 M70 45 L65 55 M50 25 V55" stroke="var(--color-accent)" strokeWidth="0.75" strokeDasharray="2 2" />
                  
                  {/* Illuminated nodes */}
                  <circle cx="30" cy="45" r="1.5" fill="var(--color-accent)" />
                  <circle cx="70" cy="45" r="1.5" fill="var(--color-accent)" />
                  <circle cx="50" cy="55" r="2.5" fill="var(--color-accent)" className="animate-pulse" />
                </svg>

                <div className="absolute bottom-4 left-5">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">SYS / MOD-3D</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
