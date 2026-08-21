"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { CustomImage } from "@/components/media/CustomImage";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants/brand";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full py-12 md:py-24 overflow-hidden" aria-label="Afaq Ahmad Introduction">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Top Metadata Bar */}
        <div className="flex justify-between items-center border-b border-border-custom pb-6 mb-12">
          <Reveal direction="none" delay={0.05}>
            <div className="flex space-x-6">
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                Peshawar, Pakistan
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                / 2026
              </span>
            </div>
          </Reveal>
          <Reveal direction="none" delay={0.05}>
            <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
              AA / 001 &bull; Personal Studio
            </span>
          </Reveal>
        </div>

        {/* Hero Main Body: Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text / Typography Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <Reveal direction="up" delay={0.1}>
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-none tracking-tighter">
                Afaq <br />
                <span className="text-text-muted">Ahmad</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                AI &amp; Full Stack Developer
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="font-sans text-lg md:text-xl text-text-muted max-w-xl leading-relaxed">
                Building modern digital experiences at the intersection of web, AI, design, and creative technology.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link href="/work">
                  <Button variant="primary">VIEW MY WORK &rarr;</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary">START A PROJECT &rarr;</Button>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Image / Portrait Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal direction="up" delay={0.3}>
              <div className="relative w-full max-w-sm border-2 border-border-custom bg-surface-muted p-3 shadow-2xl rounded-lg group">
                <CustomImage
                  src="/images/profile/afaq-ahmad-profile.png"
                  alt="Afaq Ahmad profile photo"
                  aspectRatio="editorial"
                  hoverZoom={true}
                  className="rounded-md"
                  priority={true}
                />
                
                {/* Visual tension micro details */}
                <div className="absolute top-6 left-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-mono text-[9px] uppercase tracking-widest bg-background/90 text-text-muted px-2 py-1 border border-border-custom rounded">
                    Creative Logic
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Narrative Brand Line Transition */}
        <div className="mt-20 md:mt-32 pt-8 border-t border-border-custom">
          <Reveal direction="none" delay={0.5}>
            <div className="flex flex-wrap justify-between items-center gap-4 py-4">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted">Brand Direction</span>
              <p className="font-mono text-sm sm:text-base md:text-lg tracking-wider text-accent font-bold">
                {BRAND.pillars.join(" \u00d7 ")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
