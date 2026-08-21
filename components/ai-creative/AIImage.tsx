"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

const VISUAL_EXPERIMENTS = [
  {
    num: "01",
    title: "Visual Exploration",
    desc: "Testing complex isometric geometries, glass refraction paths, and cobalt accent illuminations.",
    visual: (
      <svg className="w-16 h-16 text-accent group-hover:scale-105 transition-transform duration-500" viewBox="0 0 100 100" fill="none">
        <polygon points="50,15 85,35 85,65 50,85 15,65 15,35" stroke="currentColor" strokeWidth="0.75" />
        <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="3" fill="currentColor" />
      </svg>
    )
  },
  {
    num: "02",
    title: "Style Study",
    desc: "Evaluating typographic contrast rules, dark UI layouts, and deep graphite background values.",
    visual: (
      <svg className="w-16 h-16 text-foreground group-hover:rotate-12 transition-transform duration-500" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.75" />
        <rect x="35" y="35" width="30" height="30" stroke="currentColor" strokeWidth="0.5" />
        <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
      </svg>
    )
  },
  {
    num: "03",
    title: "Concept Exploration",
    desc: "Drafting layout wireframes, dynamic dashboard slots, and component connection points.",
    visual: (
      <svg className="w-16 h-16 text-text-muted/60 group-hover:-translate-y-1 transition-transform duration-500" viewBox="0 0 100 100" fill="none">
        <rect x="20" y="20" width="60" height="60" rx="4" stroke="currentColor" strokeWidth="0.75" />
        <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="35" r="8" stroke="currentColor" strokeWidth="0.75" />
      </svg>
    )
  }
];

export const AIImage: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 border-t border-border-custom bg-background" aria-label="Generative AI image exploration">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Reveal direction="up" delay={0.05}>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              03 / Aesthetics Gallery
            </span>
            <h2 className="font-display text-4xl uppercase mt-4 mb-4">
              Generative Exploration
            </h2>
            <p className="font-sans text-sm text-text-muted">
              A curated digital art archive investigating stylistic compositions, lighting, and geometric constraints.
            </p>
          </Reveal>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VISUAL_EXPERIMENTS.map((exp, idx) => (
            <Reveal key={exp.num} direction="up" delay={idx * 0.08}>
              <div className="border border-border-custom bg-surface-muted/30 p-8 rounded-lg flex flex-col justify-between aspect-square group hover:border-accent hover:shadow-xl transition-all duration-300">
                <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
                  EXPERIMENT {exp.num} &bull; {exp.title}
                </span>

                {/* Central Visual geometry placeholder */}
                <div className="my-auto flex justify-center">
                  {exp.visual}
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-base uppercase tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="font-sans text-xs text-text-muted leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
