"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";

const FLOW_STEPS = [
  { num: "01", title: "IDEA", desc: "Formulate programmatic concept" },
  { num: "02", title: "PROMPT", desc: "Interface with models" },
  { num: "03", title: "BUILD", desc: "Inject output into components" },
  { num: "04", title: "REFINE", desc: "Debug and align variables" },
  { num: "05", title: "RESULT", desc: "Deploy reliable digital tools" }
];

export const ExploreSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-28 border-t border-border-custom bg-background" aria-label="AI Exploration section">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <Reveal direction="up" delay={0.1}>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">02 / Investigation</span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase mt-4 mb-6">
              I EXPLORE.
            </h2>
            <p className="font-sans text-lg md:text-xl text-text-muted leading-relaxed">
              AI is part of how I experiment, build, design and learn. I integrate API layers and models to automate workflows, build custom helper scripts, and design intelligent interfaces.
            </p>
          </Reveal>
        </div>

        {/* Visual Technical Flow Diagram */}
        <div className="border border-border-custom bg-surface-muted/50 p-8 md:p-12 rounded-xl mb-12 relative overflow-hidden">
          {/* Background grid details */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          <Reveal direction="none" delay={0.1}>
            <div className="flex justify-between items-center mb-8 border-b border-border-custom/50 pb-4">
              <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">Process Architecture</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">Afaq Ahmad AI pipeline</span>
            </div>
          </Reveal>

          {/* Flow list */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {FLOW_STEPS.map((step, idx) => (
              <Reveal key={step.title} direction="up" delay={idx * 0.1}>
                <div className="flex flex-col h-full justify-between relative group">
                  <div>
                    <span className="font-mono text-xs text-accent font-bold block mb-2">{step.num}</span>
                    <h3 className="font-display text-lg uppercase tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="font-sans text-xs text-text-muted leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  
                  {/* Arrow connectors in-between items for MD screens and up */}
                  {idx < FLOW_STEPS.length - 1 && (
                    <span className="hidden md:block absolute -right-3 top-6 text-border-custom select-none text-xs font-mono font-black" aria-hidden="true">
                      &rarr;
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <div className="flex justify-end pt-4">
          <Reveal direction="up" delay={0.2}>
            <Link href="/ai-creative">
              <Button variant="secondary">Explore AI × Creative</Button>
            </Link>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
