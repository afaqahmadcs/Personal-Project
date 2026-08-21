"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

const STAGES = [
  { num: "01", name: "IDEA", desc: "Start with a problem, concept or visual direction." },
  { num: "02", name: "PROMPT", desc: "Translate the idea into a structured instruction." },
  { num: "03", name: "GENERATE", desc: "Use AI tools to explore possibilities." },
  { num: "04", name: "REFINE", desc: "Select, edit and improve the useful output." },
  { num: "05", name: "BUILD", desc: "Turn the useful idea into an actual digital product." },
  { num: "06", name: "SHIP", desc: "Move from experiment to usable result." }
];

export const AIWorkflow: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative w-full py-16 md:py-24 border-t border-border-custom bg-surface-muted/10 overflow-hidden" aria-label="AI creative workflow stages">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Reveal direction="up" delay={0.05}>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              Interaction Pipeline
            </span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase mt-4 mb-4">
              How I Use AI
            </h2>
            <p className="font-sans text-sm text-text-muted">
              AI output is not the final product. Human judgment remains central to refining logical structures and aesthetic choices.
            </p>
          </Reveal>
        </div>

        {/* Workflow steps */}
        {/* Horizontal connect lines on desktop, vertical on mobile */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute left-0 top-[28px] w-full h-[1px] bg-border-custom" aria-hidden="true" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {STAGES.map((stage, idx) => {
              const isActive = hoveredIdx === null || hoveredIdx === idx;
              return (
                <div
                  key={stage.name}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`relative p-6 border border-border-custom rounded bg-background shadow-sm hover:border-accent hover:shadow-xl transition-all duration-300 cursor-pointer select-none ${
                    isActive ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <span className="font-mono text-xs text-accent font-bold block mb-3">
                    {stage.num}
                  </span>
                  <h3 className="font-display text-lg uppercase tracking-tight mb-2">
                    {stage.name}
                  </h3>
                  <p className="font-sans text-xs text-text-muted leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
