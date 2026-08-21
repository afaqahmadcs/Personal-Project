"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { CustomImage } from "@/components/media/CustomImage";

export const AboutHero: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-background overflow-hidden" aria-label="About Hero Section">
      {/* Subtle background glow representing 3D studio lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Metadata tag */}
        <div className="border-b border-border-custom pb-6 mb-12">
          <Reveal direction="none" delay={0.05}>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
              ABOUT / 01 &bull; Biography & Studio Profile
            </span>
          </Reveal>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Typography Column */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal direction="up" delay={0.1}>
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-none tracking-tighter">
                ABOUT <br />
                <span className="text-text-muted">AFAQ</span>
              </h1>
            </Reveal>
            
            <Reveal direction="up" delay={0.2}>
              <p className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                AI & FULL STACK DEVELOPER
              </p>
            </Reveal>
            
            <Reveal direction="up" delay={0.3}>
              <p className="font-sans text-lg text-text-muted leading-relaxed max-w-lg">
                Crafting digital experiences through coding, custom software configurations, and practical AI explorations.
              </p>
            </Reveal>
          </div>

          {/* Portrait & Abstract 3D Sculpture Column */}
          <div className="lg:col-span-6 flex flex-col md:flex-row items-center gap-8 justify-center lg:justify-end">
            
            {/* Abstract 3D Sculpture (SVG + CSS 3D Glassmorphism Sculpture) */}
            <Reveal direction="up" delay={0.35}>
              <div className="relative w-48 h-48 border border-border-custom bg-surface/30 rounded-xl flex items-center justify-center shadow-lg group overflow-hidden">
                {/* 3D structural visual details (Dark metal lines, glass face, blue lights) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,89,255,0.08)_0%,transparent_70%)]" />
                
                <svg className="w-32 h-32 text-text-muted/40 transition-transform duration-1000 group-hover:rotate-12" viewBox="0 0 100 100" fill="none">
                  {/* Isometric cube structure (Dark metal) */}
                  <path d="M50 15 L80 32 L80 68 L50 85 L20 68 L20 32 Z" stroke="currentColor" strokeWidth="0.75" />
                  <path d="M50 15 L50 85" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  <path d="M20 32 L50 50 L80 32" stroke="currentColor" strokeWidth="0.75" />
                  <path d="M20 68 L50 50 L80 68" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  
                  {/* Glass elements */}
                  <polygon points="50,15 80,32 50,50 20,32" fill="var(--color-surface)" fillOpacity="0.4" stroke="currentColor" strokeWidth="0.5" />
                  
                  {/* Blue light sources (Glowing nodes) */}
                  <circle cx="50" cy="50" r="2.5" fill="var(--color-accent)" className="animate-pulse" />
                  <circle cx="50" cy="15" r="1.5" fill="var(--color-accent)" />
                  <circle cx="80" cy="32" r="1.5" fill="var(--color-accent)" />
                  <circle cx="20" cy="32" r="1.5" fill="var(--color-accent)" />
                </svg>

                <div className="absolute bottom-3 left-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">AA / STR-3D</span>
                </div>
              </div>
            </Reveal>

            {/* Profile Image Portrait */}
            <Reveal direction="up" delay={0.4}>
              <div className="relative w-full max-w-xs border border-border-custom bg-surface-muted p-2 shadow-2xl rounded-lg group">
                <CustomImage
                  src="/images/profile/afaq-ahmad-profile.png"
                  alt="Afaq Ahmad Portrait"
                  aspectRatio="portrait"
                  hoverZoom={true}
                  className="rounded-md"
                />
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
};
