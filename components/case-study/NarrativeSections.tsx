"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Project } from "@/lib/constants/projects";

interface NarrativeSectionsProps {
  project: Project;
}

export const NarrativeSections: React.FC<NarrativeSectionsProps> = ({ project }) => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-background" aria-label="Project Case Study Narrative">
      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-20 md:space-y-28">
        
        {/* SECTION 01: CONTEXT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline">
          <div className="lg:col-span-4">
            <Reveal direction="up" delay={0.05}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">01 / Context</span>
              <h2 className="font-display text-2xl uppercase mt-2">The Background</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal direction="up" delay={0.1}>
              <p className="font-sans text-base text-text-muted leading-relaxed">
                {project.problem || `This platform was constructed to address clean visual showcase interfaces for ${project.title.toLowerCase()}. Built with strict component models and optimized asset configurations.`}
              </p>
            </Reveal>
          </div>
        </div>

        {/* SECTION 02: OBJECTIVE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline">
          <div className="lg:col-span-4">
            <Reveal direction="up" delay={0.05}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">02 / Objective</span>
              <h2 className="font-display text-2xl uppercase mt-2">The Intended Goal</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal direction="up" delay={0.1}>
              <p className="font-sans text-base text-text-muted leading-relaxed">
                {project.approach || `To deliver a high-performance web platform featuring modular CSS structure, optimal layout balance, and highly responsive page behaviors.`}
              </p>
            </Reveal>
          </div>
        </div>

        {/* SECTION 03: APPROACH */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline">
          <div className="lg:col-span-4">
            <Reveal direction="up" delay={0.05}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">03 / Approach</span>
              <h2 className="font-display text-2xl uppercase mt-2">The Execution Path</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            {/* Editorial process flow chart */}
            <div className="space-y-6">
              <Reveal direction="up" delay={0.1}>
                <p className="font-sans text-base text-text-muted leading-relaxed mb-6">
                  Structuring the code base following a sequential implementation protocol to ensure build integrity:
                </p>
              </Reveal>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {["UNDERSTAND", "STRUCTURE", "DESIGN", "BUILD", "REFINE"].map((step, idx) => (
                  <Reveal key={step} direction="up" delay={idx * 0.05}>
                    <div className="border border-border-custom bg-surface-muted/50 p-4 rounded text-center">
                      <span className="font-mono text-[9px] text-accent font-bold block mb-1">0{idx + 1}</span>
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider">{step}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 08: LEARNED */}
        {project.lessons && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline">
            <div className="lg:col-span-4">
              <Reveal direction="up" delay={0.05}>
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">08 / Lessons</span>
                <h2 className="font-display text-2xl uppercase mt-2">Key Takeaways</h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal direction="up" delay={0.1}>
                <div className="border border-border-custom bg-surface-muted p-6 rounded-lg">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-accent font-bold mb-2 block">
                    Building Through Practice
                  </span>
                  <p className="font-sans text-sm text-foreground leading-relaxed">
                    {project.lessons}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
