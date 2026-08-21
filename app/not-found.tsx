import React from "react";
import { PageTransition } from "@/components/motion/PageTransition";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageTransition>
      <section className="min-h-[70vh] flex flex-col items-center justify-center bg-background px-6 text-center" aria-label="Page not found fallback">
        <div className="space-y-6 flex flex-col items-center">
          
          {/* Missing Component visual sculpture */}
          <Reveal direction="none" delay={0.05}>
            <div className="relative w-40 h-40 border border-border-custom bg-surface-muted/30 rounded-xl flex items-center justify-center p-4">
              <svg className="w-24 h-24 text-text-muted/40" viewBox="0 0 100 100" fill="none">
                <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="0.75" />
                {/* One corner dot floating off representing the missing component */}
                <circle cx="25" cy="25" r="2.5" fill="var(--color-accent)" />
                <circle cx="75" cy="75" r="2.5" fill="currentColor" />
                <circle cx="25" cy="75" r="2.5" fill="currentColor" />
                {/* Floating corner */}
                <circle cx="85" cy="15" r="3.5" fill="var(--color-accent)" className="animate-pulse" />
                <path d="M75 25 L85 15" stroke="var(--color-accent)" strokeWidth="0.5" strokeDasharray="2 2" />
              </svg>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest block mb-2">Error / 404</span>
            <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-tighter leading-none">
              PAGE NOT FOUND.
            </h1>
            <p className="font-sans text-xs text-text-muted max-w-xs mx-auto leading-relaxed mt-4">
              The segment or documentation page you are trying to access does not exist or has been shifted.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="pt-6">
              <Link href="/">
                <Button variant="primary">Back Home &rarr;</Button>
              </Link>
            </div>
          </Reveal>

        </div>
      </section>
    </PageTransition>
  );
}
