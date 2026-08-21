"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export const AIContent: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 border-t border-border-custom bg-background" aria-label="AI and Content generation strategy">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Split Column */}
          <div className="lg:col-span-7 order-2">
            <Reveal direction="up" delay={0.15}>
              <div className="border border-border-custom bg-surface-muted/30 rounded-lg p-8 grid grid-cols-2 gap-8 items-center text-center shadow-sm select-none">
                {/* Left side: AI Assists */}
                <div className="border-r border-border-custom/50 py-8 pr-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted mb-2 block">
                    Automation Level
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tighter text-text-muted">
                    AI <br />
                    <span className="text-accent font-bold">ASSISTS</span>
                  </h3>
                </div>

                {/* Right side: Human Decides */}
                <div className="py-8 pl-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted mb-2 block">
                    Control Level
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tighter text-foreground font-bold">
                    HUMAN <br />
                    <span className="text-foreground">DECIDES</span>
                  </h3>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-5 order-1">
            <Reveal direction="up" delay={0.05}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                05 / Judgment
              </span>
              <h2 className="font-display text-4xl uppercase mt-2">
                AI &times; CONTENT
              </h2>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                Using prompt pipelines to summarize research notes, draft script layouts, and catalog design configurations. The cognitive decision loop remains fully human to ensure visual and editorial credibility.
              </p>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
