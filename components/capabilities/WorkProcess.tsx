"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

const PROCESS_STEPS = [
  { num: "01", name: "UNDERSTAND", desc: "Define functional scopes and client requirements." },
  { num: "02", name: "PLAN", desc: "Map architecture, data shapes, and route targets." },
  { num: "03", name: "DESIGN", desc: "Flesh out UI components and layout wireframes in Figma." },
  { num: "04", name: "BUILD", desc: "Write strict, structured frontend and backend codebase." },
  { num: "05", name: "TEST", desc: "Compile production bundles and evaluate responsive layouts." },
  { num: "06", name: "REFINE", desc: "Tune animations, load times, and refactor files." }
];

export const WorkProcess: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 border-t border-border-custom bg-background" aria-label="Work Process Timeline">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <Reveal direction="up" delay={0.1}>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              Process Methodology
            </span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase mt-4 mb-4">
              How I Work
            </h2>
            <p className="font-sans text-sm text-text-muted">
              A structured roadmap from core definition to final production delivery, ensuring clean styling variables and reliable system compiles.
            </p>
          </Reveal>
        </div>

        {/* Timeline representation */}
        {/* Desktop timeline: horizontal (lg:flex), Mobile timeline: vertical (grid) */}
        <div className="relative mt-12">
          {/* Horizontal line across desktop cards */}
          <div className="hidden lg:block absolute left-0 top-[26px] w-full h-[1px] bg-border-custom" aria-hidden="true" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative">
            {PROCESS_STEPS.map((step, idx) => (
              <Reveal key={step.name} direction="up" delay={idx * 0.08}>
                <div className="relative space-y-4 pt-6 lg:pt-10 group">
                  {/* Timeline Node Point for Desktop */}
                  <div className="hidden lg:flex absolute left-0 top-5 w-3 h-3 bg-background border-2 border-accent rounded-full group-hover:bg-accent transition-colors duration-300" aria-hidden="true" />
                  
                  {/* Number Tag */}
                  <span className="font-mono text-xs text-accent font-bold block">{step.num}</span>
                  
                  {/* Step Title */}
                  <h3 className="font-display text-lg uppercase tracking-tight group-hover:text-accent transition-colors duration-300">
                    {step.name}
                  </h3>
                  
                  {/* Step Description */}
                  <p className="font-sans text-xs text-text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
