"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";

export const ContentCTA: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-background overflow-hidden" aria-label="Closing publications call to action">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(10,89,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12 text-center flex flex-col items-center justify-center">
        
        {/* Main headline */}
        <div className="max-w-2xl space-y-4 mb-12">
          <Reveal direction="up" delay={0.05}>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2 block">
              Exploration
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl uppercase leading-none tracking-tight">
              Keep <br />
              <span className="text-text-muted">Exploring.</span>
            </h2>
            <p className="font-sans text-sm text-text-muted max-w-xs mx-auto leading-relaxed mt-6">
              The work changes. The tools change. The learning continues.
            </p>
          </Reveal>
        </div>

        {/* Buttons */}
        <Reveal direction="up" delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-border-custom w-full max-w-xl justify-center">
            <Link href="/work">
              <Button variant="primary" className="px-6 py-3">
                View Work &rarr;
              </Button>
            </Link>
            <Link href="/ai-creative">
              <Button variant="secondary" className="px-6 py-3">
                AI &times; Creative &rarr;
              </Button>
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
