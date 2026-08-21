"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export const CapabilitiesHero: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-background overflow-hidden" aria-label="Capabilities Page Hero">
      {/* Subtle blue light background grid */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Metadata tag */}
        <div className="border-b border-border-custom pb-6 mb-12">
          <Reveal direction="none" delay={0.05}>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
              CAPABILITIES / 02 &bull; Professional Developer Services
            </span>
          </Reveal>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl space-y-6">
          <Reveal direction="up" delay={0.1}>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-none tracking-tighter">
              WHAT I <br />
              <span className="text-text-muted">BUILD.</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.25}>
            <p className="font-sans text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed mt-4">
              Digital experiences created through development, design, AI-assisted workflows and creative technology.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
