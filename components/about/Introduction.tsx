"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export const Introduction: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 border-t border-border-custom bg-surface-muted/20" aria-label="Afaq Ahmad Biography Introduction">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline">
          {/* Section Indicator */}
          <div className="lg:col-span-4">
            <Reveal direction="up" delay={0.1}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                01 / Background
              </span>
              <h2 className="font-display text-3xl uppercase mt-4">
                Biography
              </h2>
            </Reveal>
          </div>

          {/* Description copy */}
          <div className="lg:col-span-8 space-y-6">
            <Reveal direction="up" delay={0.2}>
              <p className="font-sans text-xl md:text-2xl text-foreground font-semibold leading-relaxed">
                Building responsive web platforms and exploring practical integrations of artificial intelligence.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="font-sans text-base text-text-muted leading-relaxed">
                Based in Peshawar, Pakistan, Afaq Ahmad is an independent programmer focused on creating modern user interfaces and backend integrations. Currently pursuing studies in FSc Computer Science at The Superior Group of Colleges, Peshawar (2025 – Present), he organizes his time around coding, designing, and experimenting with emerging tech tools.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <p className="font-sans text-base text-text-muted leading-relaxed">
                Rather than relying on abstract theory, his development style relies on a hands-on learning-by-doing method. Every project represents an opportunity to test modern tools, refine styling workflows, and deploy solid digital products.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
