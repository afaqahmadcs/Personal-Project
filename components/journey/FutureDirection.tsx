"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";

const DIRECTIONS = [
  "Continue developing strong full-stack foundations.",
  "Explore practical AI integrations.",
  "Build increasingly sophisticated digital experiences.",
  "Continue learning through real projects.",
  "Prepare for future opportunities in software development and AI."
];

export const FutureDirection: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-background overflow-hidden" aria-label="Future developer goals">
      {/* Cobalt glow */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-24">
        
        {/* WHERE I'M GOING Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal direction="up" delay={0.05}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                05 / Trajectory
              </span>
              <h2 className="font-display text-4xl uppercase mt-4 mb-6">
                Where I&apos;m Going.
              </h2>
            </Reveal>

            <div className="space-y-4">
              {DIRECTIONS.map((dir, idx) => (
                <Reveal key={dir} direction="up" delay={idx * 0.08}>
                  <div className="flex items-start space-x-3 text-sm text-text-muted leading-relaxed">
                    <span className="font-mono text-xs text-accent mt-1 select-none">&bull;</span>
                    <p>{dir}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Unfinished 3D structure extending off-screen Column */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <Reveal direction="up" delay={0.15}>
              <div className="relative w-80 h-[450px] border border-border-custom bg-surface-muted/30 rounded-xl flex items-end justify-center p-6 shadow-2xl group overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,89,255,0.05)_0%,transparent_75%)]" />
                
                {/* SVG Unfinished structure extending off the top */}
                <svg className="w-48 h-full text-text-muted/40 transition-transform duration-1000 group-hover:scale-105" viewBox="0 0 100 200" fill="none">
                  {/* Bottom boxes (completed blocks) */}
                  <rect x="25" y="140" width="50" height="40" stroke="currentColor" strokeWidth="0.75" fill="var(--color-surface)" fillOpacity="0.2" />
                  <rect x="35" y="80" width="30" height="60" stroke="currentColor" strokeWidth="0.75" fill="var(--color-surface)" fillOpacity="0.4" />
                  
                  {/* Top unfinished coordinates extending past top boundary */}
                  <line x1="35" y1="0" x2="35" y2="80" stroke="var(--color-accent)" strokeWidth="0.75" />
                  <line x1="65" y1="0" x2="65" y2="80" stroke="var(--color-accent)" strokeWidth="0.75" />
                  <line x1="35" y1="40" x2="65" y2="40" stroke="var(--color-accent)" strokeWidth="0.5" strokeDasharray="3 3" />
                  
                  {/* Cobalt nodes at unfinished edge */}
                  <circle cx="35" cy="0" r="2.5" fill="var(--color-accent)" className="animate-pulse" />
                  <circle cx="65" cy="0" r="2.5" fill="var(--color-accent)" className="animate-pulse" />
                </svg>

                <div className="absolute bottom-4 left-5">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold">SYS / UNFINISHED-3D</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* PERSONAL STATEMENT QUOTE Section */}
        {/* Quote: I'M NOT FINISHED. I'M BUILDING. */}
        <div className="py-12 border-t border-b border-border-custom/50 text-center flex flex-col justify-center items-center">
          <Reveal direction="up" delay={0.05}>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted mb-6 block">
              Core Motto
            </span>
            <h3 className="font-display text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter leading-none">
              I&apos;M NOT FINISHED. <br />
              <span className="text-accent font-bold">I&apos;M BUILDING.</span>
            </h3>
          </Reveal>
        </div>

        {/* BRIDGES & CLOSING NEXT CHAPTER Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Bridge 01: Work */}
          <div className="border border-border-custom bg-surface-muted/30 p-8 rounded-lg flex flex-col justify-between hover:border-accent transition-colors duration-300">
            <Reveal direction="up" delay={0.05}>
              <span className="font-mono text-xs text-text-muted uppercase tracking-widest block mb-4">
                Bridge / 01
              </span>
              <h4 className="font-display text-2xl uppercase tracking-tight mb-4">
                The Journey <br />
                Becomes The Work.
              </h4>
              <p className="font-sans text-xs text-text-muted leading-relaxed mb-6">
                Milestones lead directly to solid deliverables. Browse all projects, business landing modules, and client gemstone directories.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <div className="pt-2">
                <Link href="/work">
                  <Button variant="secondary">Explore My Work &rarr;</Button>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Bridge 02: AI */}
          <div className="border border-border-custom bg-surface-muted/30 p-8 rounded-lg flex flex-col justify-between hover:border-accent transition-colors duration-300">
            <Reveal direction="up" delay={0.05}>
              <span className="font-mono text-xs text-text-muted uppercase tracking-widest block mb-4">
                Bridge / 02
              </span>
              <h4 className="font-display text-2xl uppercase tracking-tight mb-4">
                And The <br />
                Experiments Continue.
              </h4>
              <p className="font-sans text-xs text-text-muted leading-relaxed mb-6">
                Explore the AI &amp; Creative exploration logs, tracking how AI-assisted logic accelerates visual code designs.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <div className="pt-2">
                <Link href="/ai-creative">
                  <Button variant="secondary">Explore AI &times; Creative &rarr;</Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Final Chapter Close */}
        <div className="text-center pt-8 flex flex-col items-center">
          <Reveal direction="up" delay={0.05}>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2 block">
              Next Chapter
            </span>
            <p className="font-sans text-sm text-text-muted max-w-xs mx-auto leading-relaxed mb-8">
              Keep learning. Keep building. Keep experimenting.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-border-custom w-full max-w-md justify-center">
              <Link href="/work">
                <Button variant="primary">SEE WHAT I&apos;M BUILDING &rarr;</Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary">START A PROJECT &rarr;</Button>
              </Link>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
