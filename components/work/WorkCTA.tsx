"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";

export const WorkCTA: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-background overflow-hidden" aria-label="Work Call to Action">
      <div className="mx-auto max-w-7xl px-6 md:px-12 text-center flex flex-col items-center">
        
        {/* Title */}
        <div className="max-w-2xl space-y-4 mb-12">
          <Reveal direction="up" delay={0.1}>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2 block">
              COLLABORATION
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl uppercase leading-none tracking-tight">
              Have An Idea? <br />
              <span className="text-text-muted">Let&apos;s Build It.</span>
            </h2>
          </Reveal>
        </div>

        {/* CTA buttons */}
        <Reveal direction="up" delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-border-custom w-full max-w-lg justify-center">
            <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
              Start a project:
            </span>
            <Link href="/contact">
              <Button variant="primary" className="px-6 py-3">
                Get In Touch &rarr;
              </Button>
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
