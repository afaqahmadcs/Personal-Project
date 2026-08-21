"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Project } from "@/lib/constants/projects";

interface BuildSectionProps {
  project: Project;
}

export const BuildSection: React.FC<BuildSectionProps> = ({ project }) => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-background" aria-label="Project engineering and code details">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Tech Stack & Specs */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal direction="up" delay={0.05}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">05 / Build</span>
              <h2 className="font-display text-4xl uppercase mt-2 mb-4">Engineering</h2>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                Technologies utilized during platform implementation. Every package dependency, modular class structure, and static route generation were aligned for optimal performance checks.
              </p>
            </Reveal>

            {/* Structured stack list */}
            <div className="space-y-4 pt-4 border-t border-border-custom/50">
              <Reveal direction="up" delay={0.1}>
                <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block">
                  Integrated Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="font-mono text-[9px] uppercase border border-border-custom px-2.5 py-0.5 rounded bg-surface-muted text-foreground font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Code pipeline diagram & Technical metadata */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal direction="up" delay={0.15}>
              <div className="border border-border-custom bg-surface-muted/40 p-8 rounded-lg relative overflow-hidden">
                <div className="absolute top-2 right-4">
                  <span className="font-mono text-[9px] text-text-muted">AA / BLD-PIPELINE</span>
                </div>

                {/* Technical visual flow title */}
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 font-display text-base uppercase tracking-widest text-text-muted/40 mb-8 border-b border-border-custom/50 pb-4 select-none">
                  <span className="text-foreground">CODE</span>
                  <span>&rarr;</span>
                  <span>COMPONENTS</span>
                  <span>&rarr;</span>
                  <span>INTERACTION</span>
                  <span>&rarr;</span>
                  <span>RESPONSIVE UI</span>
                </div>

                {/* Illustrative technical layout schematic */}
                <div className="font-mono text-[10px] text-text-muted space-y-2 select-none">
                  <div>// Technical Metadata Schema</div>
                  <div className="text-accent">const config = &#123;</div>
                  <div className="pl-4">engine: &quot;Next.js Turbopack&quot;,</div>
                  <div className="pl-4">styling: &quot;Tailwind CSS v4&quot;,</div>
                  <div className="pl-4">staticPrerender: true,</div>
                  <div className="pl-4">responsiveBreakpoints: [320, 768, 1280]</div>
                  <div className="text-accent">&#125;;</div>
                </div>

                {/* Grid guidelines overlay */}
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10 pointer-events-none">
                  <svg className="w-full h-full text-foreground" viewBox="0 0 100 100">
                    <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
