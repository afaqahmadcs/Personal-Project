"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

const LOOP_STEPS = [
  { num: "01", name: "LEARN", detail: "Absorb logic rules and theoretical specifications." },
  { num: "02", name: "BUILD", detail: "Inject concepts directly into functional web modules." },
  { num: "03", name: "TEST", detail: "Deploy live configurations to verify system stability." },
  { num: "04", name: "EXPERIMENT", detail: "Fiddle with variables, custom plugins, and APIs." },
  { num: "05", name: "IMPROVE", detail: "Refactor performance metrics and clean structural files." }
];

export const LearningByBuilding: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-surface-muted/30 border-t border-b border-border-custom overflow-hidden" aria-label="Learning Loop Philosophy">
      {/* Editorial grid visual details */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(10,89,255,0.03)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Large Statement Heading */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <Reveal direction="up" delay={0.1}>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              04 / Philosophy
            </span>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter leading-none mt-4">
              I LEARN <br />
              <span className="text-text-muted">BY BUILDING.</span>
            </h2>
            <p className="font-sans text-lg text-text-muted max-w-2xl mt-6 leading-relaxed">
              For me, building software is not just about expanding a catalogue of links. It is my primary method of study, translation, and improvement.
            </p>
          </Reveal>
        </div>

        {/* Structural vertical flow sequence */}
        <div className="space-y-8 max-w-3xl relative before:absolute before:left-3 before:top-2 before:h-full before:w-[1px] before:bg-border-custom pl-12">
          {LOOP_STEPS.map((step, idx) => (
            <Reveal key={step.name} direction="up" delay={idx * 0.1}>
              <div className="relative group">
                {/* Timeline flow circle */}
                <span className="absolute -left-[45px] top-1.5 w-2.5 h-2.5 bg-background border-2 border-accent rounded-full group-hover:bg-accent transition-colors duration-300" />
                
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <span className="font-mono text-[10px] text-text-muted font-bold block">{step.num}</span>
                  <h3 className="font-display text-2xl uppercase tracking-tight group-hover:text-accent transition-colors duration-300">
                    {step.name}
                  </h3>
                  <p className="font-sans text-xs text-text-muted max-w-md leading-relaxed sm:ml-auto">
                    {step.detail}
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
