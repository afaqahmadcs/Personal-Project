"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";

export const ContactCTA: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-background overflow-hidden" aria-label="Contact page closure CTA">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(10,89,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12 text-center flex flex-col items-center justify-center space-y-16">
        
        {/* Large editorial statement */}
        {/* GOOD PROJECTS START WITH A GOOD CONVERSATION. */}
        <div className="max-w-4xl border-b border-border-custom pb-12 w-full">
          <Reveal direction="up" delay={0.05}>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4 block">
              Editorial Note
            </span>
            <h3 className="font-display text-4xl sm:text-5xl md:text-7xl uppercase tracking-tighter leading-none">
              Good Projects <br />
              Start With A <br />
              <span className="text-accent font-bold">Good Conversation.</span>
            </h3>
          </Reveal>
        </div>

        {/* 3D Finished structure scene representation */}
        <Reveal direction="up" delay={0.15}>
          <div className="relative w-64 h-64 border border-border-custom bg-surface-muted/30 rounded-xl flex items-center justify-center p-6 shadow-xl group overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,89,255,0.05)_0%,transparent_75%)]" />
            
            {/* SVG Complete connection sculpture */}
            <svg className="w-48 h-48 text-accent transition-transform duration-1000 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
              <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="0.75" />
              <polygon points="50,25 75,50 50,75 25,50" fill="var(--color-accent-soft)" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="3.5" fill="var(--color-accent)" className="animate-pulse" />
              <circle cx="25" cy="50" r="1.5" fill="var(--color-accent)" />
              <circle cx="75" cy="50" r="1.5" fill="var(--color-accent)" />
            </svg>

            <div className="absolute bottom-4 left-5">
              <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">SYS / COMP-3D</span>
            </div>
          </div>
        </Reveal>

        {/* CTA triggers */}
        <div className="space-y-6">
          <Reveal direction="up" delay={0.2}>
            <h4 className="font-display text-2xl uppercase tracking-tight text-foreground">
              Let&apos;s Build Something Real.
            </h4>
            <p className="font-sans text-xs text-text-muted max-w-sm mx-auto leading-relaxed mt-2">
              Not sure where to start? Explore existing projects and generative experiments first.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.25}>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center">
              <Link href="/work">
                <Button variant="primary">View My Work</Button>
              </Link>
              <Link href="/ai-creative">
                <Button variant="secondary">Explore AI &times; Creative</Button>
              </Link>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
