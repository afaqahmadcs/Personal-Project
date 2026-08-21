"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

const TECH_GROUPS = [
  {
    name: "Web Foundation",
    techs: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    name: "Modern Frontend",
    techs: ["TypeScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    name: "Backend",
    techs: ["Node.js", "Express.js", "MongoDB"]
  },
  {
    name: "Programming",
    techs: ["Python"]
  },
  {
    name: "Tools",
    techs: ["Git", "Figma", "AI Tools"]
  }
];

export const Education: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 border-t border-border-custom bg-background" aria-label="Education and Tech Stack">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Academics (CURRENTLY LEARNING) */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal direction="up" delay={0.1}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                02 / Academics
              </span>
              <h2 className="font-display text-3xl uppercase mt-4 mb-8">
                Currently Learning
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="border border-border-custom bg-surface-muted/50 p-8 rounded-lg space-y-4">
                <span className="font-mono text-xs text-accent font-bold">2025 &mdash; Present</span>
                <h3 className="font-display text-2xl uppercase tracking-tight">
                  FSc Computer Science
                </h3>
                <p className="font-sans text-sm font-semibold">
                  The Superior Group of Colleges
                </p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                  Peshawar, Pakistan
                </p>
                <p className="font-sans text-xs text-text-muted leading-relaxed pt-2 border-t border-border-custom/50">
                  Focusing on core intermediate curriculum: computer architecture, system software, logical reasoning, and basic coding paradigms.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Technology Stack (WHAT I WORK WITH) */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="up" delay={0.1}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                03 / Technology Stack
              </span>
              <h2 className="font-display text-3xl uppercase mt-4 mb-8">
                What I Work With
              </h2>
            </Reveal>

            <div className="space-y-6">
              {TECH_GROUPS.map((group, idx) => (
                <Reveal key={group.name} direction="up" delay={idx * 0.08}>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 border-b border-border-custom/50 pb-4 items-baseline">
                    <span className="sm:col-span-4 font-mono text-xs uppercase tracking-wider text-text-muted">
                      {group.name}
                    </span>
                    <div className="sm:col-span-8 flex flex-wrap gap-1.5">
                      {group.techs.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] uppercase border border-border-custom px-2.5 py-0.5 rounded bg-surface-muted text-foreground font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
