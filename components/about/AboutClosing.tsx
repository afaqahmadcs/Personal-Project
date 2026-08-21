"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";

export const AboutClosing: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 border-t border-border-custom bg-surface-muted/20 overflow-hidden" aria-label="About closing section">
      {/* Background visual detail */}
      <div className="absolute -bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Journey Teaser */}
          <div className="border border-border-custom bg-background p-8 rounded-lg space-y-6 shadow-sm hover:border-accent transition-colors duration-300">
            <Reveal direction="up" delay={0.1}>
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted">Journey Teaser</span>
              <h3 className="font-display text-3xl uppercase tracking-tight mt-2 mb-4">
                From Learning <br />
                To Building
              </h3>
              <p className="font-sans text-xs text-text-muted leading-relaxed">
                My software journey is driven by practical execution. From college lessons in Peshawar to self-taught frameworks, I focus on building functional code structures and studying AI integrations.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="pt-2">
                <Link href="/journey">
                  <Button variant="secondary">View My Journey</Button>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Closing & CTA */}
          <div className="space-y-6 lg:pl-8">
            <Reveal direction="up" delay={0.15}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                06 / Objective
              </span>
              <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tight mt-2 mb-4">
                Still Building.
              </h3>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                I am continuing to expand my knowledge base, experiment with new libraries, and write code bases aimed at starting a career in modern software development and AI engineering.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <div className="pt-4">
                <Link href="/work">
                  <Button variant="primary" className="px-6 py-3">
                    Explore What I Build
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
