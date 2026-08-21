"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

const FOCI = [
  { name: "LEARNING", desc: "FSc Computer Science foundations, algorithm logic models, and new backend patterns." },
  { name: "BUILDING", desc: "Responsive commercial web interfaces, database configurations, and UI canvases." },
  { name: "EXPLORING", desc: "Agentic prompts, automation script structures, and creative AI imagery workflows." }
];

const STACK_GROUPS = [
  {
    name: "Frontend",
    techs: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    name: "Backend",
    techs: ["Node.js", "Express.js", "MongoDB"]
  },
  {
    name: "Other",
    techs: ["Python", "Git", "Figma", "AI Tools"]
  }
];

export const CurrentFocus: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 border-t border-border-custom bg-surface-muted/10" aria-label="Current focus areas and stack">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Focus areas */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal direction="up" delay={0.05}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                02 / Current Directives
              </span>
              <h2 className="font-display text-3xl uppercase mt-4 mb-8">
                What I&apos;m Focused On Now
              </h2>
            </Reveal>

            <div className="space-y-6">
              {FOCI.map((f, idx) => (
                <Reveal key={f.name} direction="up" delay={idx * 0.08}>
                  <div className="border border-border-custom bg-background p-6 rounded hover:border-accent transition-colors duration-300">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold block mb-1">
                      Status &bull; {f.name}
                    </span>
                    <p className="font-sans text-xs text-text-muted leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Stack */}
          <div className="lg:col-span-7 space-y-6 lg:pl-8">
            <Reveal direction="up" delay={0.05}>
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
                03 / Competency Framework
              </span>
              <h2 className="font-display text-3xl uppercase mt-4 mb-8">
                Current Stack
              </h2>
            </Reveal>

            <div className="space-y-6">
              {STACK_GROUPS.map((group, idx) => (
                <Reveal key={group.name} direction="up" delay={idx * 0.08}>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 border-b border-border-custom/50 pb-4 items-baseline">
                    <span className="sm:col-span-4 font-mono text-xs uppercase tracking-wider text-text-muted">
                      {group.name}
                    </span>
                    <div className="sm:col-span-8 flex flex-wrap gap-1.5">
                      {group.techs.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[9px] uppercase border border-border-custom px-2 py-0.5 rounded bg-background text-foreground font-semibold"
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
