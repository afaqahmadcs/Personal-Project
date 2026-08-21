"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";

export const AICreativeCTA: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-background overflow-hidden" aria-label="Creative closure call to action">
      {/* Cobalt glow */}
      <div className="absolute -bottom-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12 text-center flex flex-col items-center justify-center">
        
        {/* Main headline */}
        <div className="max-w-3xl space-y-4 mb-12">
          <Reveal direction="up" delay={0.05}>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2 block">
              Exploration Closure
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl uppercase leading-none tracking-tight">
              The Best Ideas <br />
              <span className="text-text-muted">Start As Experiments.</span>
            </h2>
            <p className="font-sans text-sm text-text-muted max-w-md mx-auto leading-relaxed mt-6">
              Keep learning. Keep building. Keep experimenting. The cycle repeats to refine developer execution.
            </p>
          </Reveal>
        </div>

        {/* Buttons */}
        <Reveal direction="up" delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-border-custom w-full max-w-xl justify-center">
            <Link href="/work">
              <Button variant="primary" className="px-6 py-3">
                Explore My Work &rarr;
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="secondary" className="px-6 py-3">
                About Afaq &rarr;
              </Button>
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
