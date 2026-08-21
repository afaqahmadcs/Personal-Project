"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";

const INTERACTIVE_OBJECTS = [
  {
    name: "BUILD",
    tag: "OBJ-01",
    svg: (
      <svg className="w-16 h-16 text-accent group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 ease-out" viewBox="0 0 100 100" fill="none">
        <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="1" />
        <line x1="25" y1="25" x2="75" y2="75" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="4" fill="currentColor" />
      </svg>
    )
  },
  {
    name: "DESIGN",
    tag: "OBJ-02",
    svg: (
      <svg className="w-16 h-16 text-foreground group-hover:-rotate-12 group-hover:scale-110 transition-all duration-500 ease-out" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        <rect x="35" y="35" width="30" height="30" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    )
  },
  {
    name: "AI",
    tag: "OBJ-03",
    svg: (
      <svg className="w-16 h-16 text-accent group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 ease-out" viewBox="0 0 100 100" fill="none">
        <path d="M50 20 L80 50 L50 80 L20 50 Z" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" fill="var(--color-surface)" fillOpacity="0.2" />
        <circle cx="50" cy="50" r="3" fill="currentColor" className="animate-pulse" />
      </svg>
    )
  },
  {
    name: "CREATE",
    tag: "OBJ-04",
    svg: (
      <svg className="w-16 h-16 text-foreground group-hover:-rotate-6 group-hover:scale-110 transition-all duration-500 ease-out" viewBox="0 0 100 100" fill="none">
        <rect x="20" y="30" width="40" height="25" stroke="currentColor" strokeWidth="1" />
        <rect x="35" y="45" width="45" height="25" stroke="currentColor" strokeWidth="0.5" />
        <line x1="60" y1="20" x2="60" y2="80" stroke="var(--color-accent)" strokeWidth="1" />
      </svg>
    )
  }
];

export const CapabilitiesClosing: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-background overflow-hidden" aria-label="Closing interactive panel">
      {/* Background visual detail */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(10,89,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12 text-center flex flex-col items-center">
        {/* Subtitle */}
        <Reveal direction="up" delay={0.1}>
          <span className="font-mono text-xs uppercase tracking-widest text-text-muted mb-6 block">
            Capabilities Matrix
          </span>
          <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight mb-8">
            Interactive Sculptures
          </h2>
          <p className="font-sans text-xs text-text-muted max-w-md mx-auto leading-relaxed mb-16">
            Hover over the 3D abstract models to engage subtle depth changes, soft rotations, and lighting node feedback.
          </p>
        </Reveal>

        {/* 3D Interactive grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mb-16">
          {INTERACTIVE_OBJECTS.map((obj, idx) => (
            <Reveal key={obj.name} direction="up" delay={idx * 0.08}>
              <div className="border border-border-custom bg-surface-muted/30 p-8 rounded-lg aspect-square flex flex-col justify-between items-center group cursor-pointer hover:border-accent hover:shadow-2xl transition-all duration-500 ease-out select-none">
                <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted self-start">
                  {obj.tag}
                </span>
                
                {/* SVG Visual shape */}
                <div className="my-auto">
                  {obj.svg}
                </div>

                <span className="font-display text-base uppercase tracking-widest group-hover:text-accent transition-colors duration-300">
                  {obj.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing CTA buttons */}
        <Reveal direction="up" delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-border-custom w-full max-w-xl justify-center">
            <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
              Ready to start?
            </span>
            <Link href="/contact">
              <Button variant="primary">Get In Touch</Button>
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
