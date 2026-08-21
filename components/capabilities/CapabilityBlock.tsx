"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export const CapabilityBlock: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-surface-muted/20 border-t border-border-custom" aria-label="Afaq Ahmad Capabilities">
      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-28 md:space-y-40">
        
        {/* CAPABILITY 01: BUILD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual column (Architectural sculpture) */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-start order-2 lg:order-1">
            <Reveal direction="up" delay={0.1}>
              <div className="relative w-full max-w-md aspect-video border border-border-custom bg-background rounded-lg flex items-center justify-center shadow-lg group overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,89,255,0.05)_0%,transparent_75%)]" />
                <svg className="w-48 h-48 text-text-muted/30 transition-transform duration-1000 group-hover:rotate-6 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
                  {/* Wireframe grids representing architectural blueprint */}
                  <g className="opacity-20">
                    <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
                  </g>
                  {/* Isometric box wireframe */}
                  <path d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z" stroke="currentColor" strokeWidth="0.75" />
                  <path d="M50 20 L50 80" stroke="currentColor" strokeWidth="0.75" />
                  <path d="M20 35 L50 50 L80 35" stroke="currentColor" strokeWidth="0.75" />
                  {/* Translucent glass face */}
                  <polygon points="50,20 80,35 50,50 20,35" fill="var(--color-surface)" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.5" />
                  {/* Illuminated nodes */}
                  <circle cx="50" cy="50" r="2" fill="var(--color-accent)" className="animate-ping" />
                  <circle cx="50" cy="50" r="1.5" fill="var(--color-accent)" />
                  <circle cx="50" cy="20" r="1.5" fill="var(--color-accent)" />
                  <circle cx="80" cy="65" r="1.5" fill="var(--color-accent)" />
                  <circle cx="20" cy="65" r="1.5" fill="var(--color-accent)" />
                </svg>
                <div className="absolute bottom-3 left-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">CAP-01 / BUILD-STR</span>
                </div>
              </div>
            </Reveal>
          </div>
          
          {/* Content Column */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 order-1 lg:order-2">
            <Reveal direction="up" delay={0.15}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">01 / Code & Systems</span>
              <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight mt-2">
                BUILD
              </h2>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                Modern responsive websites and digital experiences built using clean full-stack logic. Interfacing databases with client frontends to deploy fast, reliable portals.
              </p>
            </Reveal>

            {/* List details */}
            <div className="space-y-4 pt-4 border-t border-border-custom/50">
              <Reveal direction="up" delay={0.2}>
                <div className="flex flex-wrap gap-1.5">
                  {["Portfolio Websites", "Business Websites", "Landing Pages", "Responsive Websites", "Frontend Development", "Full Stack Development", "AI-Assisted Development"].map((val) => (
                    <span key={val} className="font-mono text-[9px] uppercase border border-border-custom/80 px-2 py-0.5 rounded bg-surface-muted text-text-muted">
                      {val}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.25}>
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">Preferred Stack</span>
                  <div className="flex flex-wrap gap-1">
                    {["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"].map((tech) => (
                      <span key={tech} className="font-mono text-[9px] uppercase text-foreground font-semibold px-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* CAPABILITY 02: DESIGN */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 order-1">
            <Reveal direction="up" delay={0.15}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">02 / Interface & Balance</span>
              <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight mt-2">
                DESIGN
              </h2>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                Designing clean digital interfaces, custom layout files, and balanced visual designs. Structuring components with strict grid parameters and high responsiveness.
              </p>
            </Reveal>

            <div className="space-y-3 pt-4 border-t border-border-custom/50">
              <Reveal direction="up" delay={0.2}>
                <div className="flex flex-wrap gap-1.5">
                  {["UI/UX Design", "Figma Prototyping", "Responsive Interface Design", "Visual Direction", "Thumbnail Design"].map((val) => (
                    <span key={val} className="font-mono text-[9px] uppercase border border-border-custom/80 px-2 py-0.5 rounded bg-surface-muted text-text-muted">
                      {val}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Visual column (Geometric composition) */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end order-2">
            <Reveal direction="up" delay={0.1}>
              <div className="relative w-full max-w-md aspect-video border border-border-custom bg-background rounded-lg flex items-center justify-center shadow-lg group overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,89,255,0.02)_0%,transparent_75%)]" />
                <svg className="w-48 h-48 text-text-muted/30 transition-transform duration-1000 group-hover:-rotate-6" viewBox="0 0 100 100" fill="none">
                  {/* Overlapping lines & circle frames (Grid balance) */}
                  <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="80" y1="20" x2="20" y2="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
                  <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.75" />
                  <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 2" />
                  {/* Aesthetic grid markers */}
                  <rect x="35" y="35" width="30" height="30" stroke="currentColor" strokeWidth="0.75" />
                  <circle cx="50" cy="50" r="2" fill="var(--color-accent)" />
                </svg>
                <div className="absolute bottom-3 left-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">CAP-02 / DSN-GRID</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* CAPABILITY 03: AI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual column (Generative networks) */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-start order-2 lg:order-1">
            <Reveal direction="up" delay={0.1}>
              <div className="relative w-full max-w-md aspect-video border border-border-custom bg-background rounded-lg flex items-center justify-center shadow-lg group overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,89,255,0.08)_0%,transparent_75%)]" />
                <svg className="w-48 h-48 text-text-muted/30 transition-transform duration-1000 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
                  {/* Curved network layers */}
                  <path d="M20 50 Q50 20 80 50" stroke="currentColor" strokeWidth="0.75" />
                  <path d="M20 50 Q50 80 80 50" stroke="currentColor" strokeWidth="0.75" />
                  <path d="M20 50 H80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  <path d="M50 20 V80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  
                  {/* Glass shell circles */}
                  <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" fill="var(--color-surface)" fillOpacity="0.2" />
                  {/* Core glowing node */}
                  <circle cx="50" cy="50" r="3" fill="var(--color-accent)" className="animate-pulse" />
                  <circle cx="35" cy="35" r="1.5" fill="var(--color-accent)" />
                  <circle cx="65" cy="65" r="1.5" fill="var(--color-accent)" />
                </svg>
                <div className="absolute bottom-3 left-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">CAP-03 / AI-PROMPTS</span>
                </div>
              </div>
            </Reveal>
          </div>
          
          {/* Content Column */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 order-1 lg:order-2">
            <Reveal direction="up" delay={0.15}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">03 / Intelligent Automation</span>
              <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight mt-2">
                AI
              </h2>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                Integrating AI practically as an accelerator for development and content generation. Applying structured prompt engineering and LLM integrations to enhance real-world coding speed and automate creative workflows.
              </p>
            </Reveal>

            <div className="space-y-3 pt-4 border-t border-border-custom/50">
              <Reveal direction="up" delay={0.2}>
                <div className="flex flex-wrap gap-1.5">
                  {["AI-assisted development", "Prompt engineering", "AI image generation", "AI video experimentation", "AI creative workflows"].map((val) => (
                    <span key={val} className="font-mono text-[9px] uppercase border border-border-custom/80 px-2 py-0.5 rounded bg-surface-muted text-text-muted">
                      {val}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* CAPABILITY 04: CREATE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 order-1">
            <Reveal direction="up" delay={0.15}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">04 / Content & Media</span>
              <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight mt-2">
                CREATE
              </h2>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                Producing digital content and technical logs beyond coding files. Formatting thumbnail designs, script guides, video production pacing, and exploring creative AI models.
              </p>
            </Reveal>

            <div className="space-y-3 pt-4 border-t border-border-custom/50">
              <Reveal direction="up" delay={0.2}>
                <div className="flex flex-wrap gap-1.5">
                  {["YouTube Content", "Video Editing", "Thumbnail Design", "Visual Content", "Creative AI Experiments"].map((val) => (
                    <span key={val} className="font-mono text-[9px] uppercase border border-border-custom/80 px-2 py-0.5 rounded bg-surface-muted text-text-muted">
                      {val}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Visual column (Layered media composition) */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end order-2">
            <Reveal direction="up" delay={0.1}>
              <div className="relative w-full max-w-md aspect-video border border-border-custom bg-background rounded-lg flex items-center justify-center shadow-lg group overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,89,255,0.02)_0%,transparent_75%)]" />
                <svg className="w-48 h-48 text-text-muted/30 transition-transform duration-1000 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
                  {/* Layered stack rectangles representing video frames/timelines */}
                  <rect x="20" y="30" width="50" height="30" stroke="currentColor" strokeWidth="0.75" fill="var(--color-surface)" fillOpacity="0.2" />
                  <rect x="30" y="40" width="50" height="30" stroke="currentColor" strokeWidth="0.75" fill="var(--color-surface)" fillOpacity="0.4" />
                  <rect x="40" y="50" width="40" height="25" stroke="currentColor" strokeWidth="0.75" fill="var(--color-surface)" fillOpacity="0.6" />
                  {/* Timeline playhead */}
                  <line x1="60" y1="20" x2="60" y2="80" stroke="var(--color-accent)" strokeWidth="1" />
                  <polygon points="57,20 63,20 60,25" fill="var(--color-accent)" />
                </svg>
                <div className="absolute bottom-3 left-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">CAP-04 / CRT-STACK</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
};
