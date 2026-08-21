"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants/brand";

export const ContactCTA: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-background overflow-hidden" aria-label="Call to action section">
      <div className="mx-auto max-w-7xl px-6 md:px-12 relative flex flex-col items-center justify-center text-center">
        
        {/* Title and copy */}
        <div className="max-w-3xl space-y-6 mb-12">
          <Reveal direction="up" delay={0.1}>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              05 / Initiation
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl uppercase leading-none tracking-tight">
              Let&apos;s Build <br />
              <span className="text-text-muted">Something Real.</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="font-sans text-base md:text-lg text-text-muted max-w-xl mx-auto leading-relaxed">
              Have a project, idea or collaboration in mind? Get in touch and let&apos;s discuss how we can turn concepts into stable digital realities.
            </p>
          </Reveal>
        </div>

        {/* CTAs */}
        <div className="flex flex-col items-center space-y-8">
          <Reveal direction="up" delay={0.4}>
            <Link href="/contact">
              <Button variant="primary" className="px-8 py-4 text-base">
                Get In Touch
              </Button>
            </Link>
          </Reveal>

          {/* Social connections */}
          <Reveal direction="up" delay={0.5}>
            <div className="flex items-center space-x-8 pt-4 border-t border-border-custom w-full justify-center">
              <Link href={BRAND.socials.github} variant="social" arrow="up-right" className="font-mono text-xs uppercase tracking-wider">
                GitHub
              </Link>
              <Link href={BRAND.socials.linkedin} variant="social" arrow="up-right" className="font-mono text-xs uppercase tracking-wider">
                LinkedIn
              </Link>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
