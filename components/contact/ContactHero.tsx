"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export const ContactHero: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-background overflow-hidden animate-fade-in" aria-label="Contact page hero">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Metadata */}
        <div className="border-b border-border-custom pb-6 mb-12">
          <Reveal direction="none" delay={0.05}>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
              CONTACT / 08 &bull; Start A Project
            </span>
          </Reveal>
        </div>

        {/* Typographic layout */}
        <div className="max-w-4xl space-y-6">
          <Reveal direction="up" delay={0.1}>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-none tracking-tighter">
              HAVE AN <br />
              <span className="text-text-muted">IDEA?</span>
            </h1>
          </Reveal>
          
          <Reveal direction="up" delay={0.2}>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase text-accent font-bold tracking-tight">
              LET&apos;S BUILD IT.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="font-sans text-lg text-text-muted max-w-xl leading-relaxed mt-4">
              Have a website, digital product or creative idea in mind? Tell me what you&apos;re building.
            </p>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
