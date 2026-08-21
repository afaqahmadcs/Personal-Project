"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export const AICode: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 border-t border-border-custom bg-background" aria-label="AI and Programming integration">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal direction="up" delay={0.05}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                01 / Automation
              </span>
              <h2 className="font-display text-4xl uppercase mt-2">
                AI &times; CODE
              </h2>
              <p className="font-mono text-xs text-accent font-bold uppercase tracking-wider">
                Build Faster. Think Deeper.
              </p>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                Coordinating AI assistants to speed up boilerplate setup, generate types, and inspect layout logic. This allows more cognitive space to focus on overall user experience structure and performance optimizations.
              </p>
            </Reveal>

            {/* Conceptual chain */}
            <div className="pt-4 border-t border-border-custom/50">
              <Reveal direction="up" delay={0.1}>
                <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-text-muted select-none">
                  <span>IDEA</span>
                  <span>&rarr;</span>
                  <span className="text-accent font-bold">AI ASSIST</span>
                  <span>&rarr;</span>
                  <span>CODE</span>
                  <span>&rarr;</span>
                  <span>TEST</span>
                  <span>&rarr;</span>
                  <span className="text-foreground font-bold">HUMAN REFINE</span>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Abstract Code visual Column */}
          <div className="lg:col-span-7">
            <Reveal direction="up" delay={0.15}>
              <div className="border border-border-custom bg-surface-muted/30 p-6 rounded-lg relative overflow-hidden font-mono text-[10px] text-text-muted space-y-2 select-none shadow-md">
                <div className="absolute top-2 right-4">
                  <span className="text-[8px] uppercase tracking-widest text-text-muted">AA / IDE-SCHEMATIC</span>
                </div>
                
                <div>// Abstract TypeScript helper class</div>
                <div><span className="text-accent">export class</span> <span className="text-foreground">PromptCompiler</span> &#123;</div>
                <div className="pl-4"><span className="text-accent">private</span> schemaVersion = <span className="text-foreground">&quot;1.0.0&quot;</span>;</div>
                <div className="pl-4"><span className="text-accent">constructor</span>(private config: Config) &#123;&#125;</div>
                <div className="pl-4"><span className="text-accent">compile</span>(input: string): CompiledNode &#123;</div>
                <div className="pl-8"><span className="text-accent">return</span> this.validator.validate(input);</div>
                <div className="pl-4">&#125;</div>
                <div>&#125;</div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
