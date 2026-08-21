"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Project } from "@/lib/constants/projects";

interface VisualShowcaseProps {
  project: Project;
}

export const VisualShowcase: React.FC<VisualShowcaseProps> = ({ project }) => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-surface-muted/20 border-t border-b border-border-custom overflow-hidden" aria-label="Project Visual Showcase">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(10,89,255,0.02)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-24">
        
        {/* SECTION 04: DESIGN SHOWCASE */}
        <div>
          <div className="max-w-3xl mb-12">
            <Reveal direction="up" delay={0.05}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">04 / Design</span>
              <h2 className="font-display text-4xl uppercase mt-2 mb-4">Interface Canvas</h2>
              <p className="font-sans text-sm text-text-muted">
                Visual structure designed around semantic balance, bold typographies, and spacious grid borders.
              </p>
            </Reveal>
          </div>

          {/* Large Desktop Mockup Placeholder */}
          <Reveal direction="up" delay={0.15}>
            <div className="w-full border border-border-custom bg-background rounded-lg shadow-2xl overflow-hidden aspect-video flex flex-col p-6 items-center justify-center relative group">
              {/* Browser bar top */}
              <div className="absolute top-0 left-0 w-full h-8 border-b border-border-custom bg-surface px-4 flex items-center justify-between">
                <div className="flex space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-border-custom" />
                  <span className="w-2 h-2 rounded-full bg-border-custom" />
                  <span className="w-2 h-2 rounded-full bg-border-custom" />
                </div>
                <span className="font-mono text-[9px] text-text-muted truncate max-w-[250px]">
                  {project.liveUrl || "http://localhost:3000"}
                </span>
                <span className="w-3 h-3" />
              </div>

              {/* Central canvas visual placeholder */}
              <div className="flex flex-col items-center justify-center space-y-3 text-center">
                <svg className="w-16 h-16 text-text-muted/30" viewBox="0 0 100 100" fill="none">
                  <rect x="10" y="20" width="80" height="60" stroke="currentColor" strokeWidth="0.75" />
                  <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 1" />
                </svg>
                <div className="space-y-1">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-accent font-bold">
                    SCREENSHOT REQUIRED
                  </span>
                  <h3 className="font-display text-xs uppercase tracking-tight text-text-muted">
                    {project.title} &bull; Main Interface Canvas
                  </h3>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* SECTION: DESIGNED TO ADAPT (Responsive) */}
        <div>
          <div className="max-w-3xl mb-12">
            <Reveal direction="up" delay={0.05}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">Responsive</span>
              <h2 className="font-display text-4xl uppercase mt-2 mb-4">Designed To Adapt</h2>
              <p className="font-sans text-sm text-text-muted">
                Engineered to respond dynamically across desktop, tablet, and mobile layouts.
              </p>
            </Reveal>
          </div>

          {/* Overlapping Laptop + Tablet + Phone mockups layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            
            {/* Tablet Mockup (md:col-span-8) */}
            <div className="md:col-span-8">
              <Reveal direction="up" delay={0.1}>
                <div className="w-full border border-border-custom bg-background rounded-lg shadow-xl aspect-[4/3] flex flex-col p-4 items-center justify-center relative">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 rounded-full bg-border-custom" />
                  <div className="text-center space-y-2">
                    <svg className="w-12 h-12 text-text-muted/20 mx-auto" viewBox="0 0 100 100" fill="none">
                      <rect x="20" y="10" width="60" height="80" rx="3" stroke="currentColor" strokeWidth="0.75" />
                    </svg>
                    <span className="font-mono text-[7px] uppercase tracking-widest text-text-muted block">
                      TABLET PREVIEW SLOT
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Mobile Smartphone Mockup (md:col-span-4) */}
            <div className="md:col-span-4 max-w-xs mx-auto w-full">
              <Reveal direction="up" delay={0.18}>
                <div className="w-full border-4 border-border-custom bg-background rounded-[24px] shadow-xl aspect-[9/16] flex flex-col p-4 items-center justify-center relative overflow-hidden">
                  {/* Smartphone dynamic notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-border-custom rounded-b-xl" />
                  <div className="text-center space-y-2">
                    <svg className="w-10 h-10 text-text-muted/20 mx-auto" viewBox="0 0 100 100" fill="none">
                      <rect x="25" y="5" width="50" height="90" rx="5" stroke="currentColor" strokeWidth="0.75" />
                    </svg>
                    <span className="font-mono text-[7px] uppercase tracking-widest text-text-muted block">
                      MOBILE PREVIEW SLOT
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
