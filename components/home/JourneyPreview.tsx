"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";

const TIMELINE_PREVIEW = [
  {
    year: "2024",
    title: "FOUNDATIONS",
    desc: "Acquiring programming fundamentals, semantic HTML5, custom CSS styling, Git version control, and scripting basics.",
  },
  {
    year: "2025",
    title: "FSc COMPUTER SCIENCE & WEB PROJECTS",
    desc: "Entering formal computer science academics at college while building custom React interfaces, business websites, and styling systems.",
  },
  {
    year: "2025–PRESENT",
    title: "LEARNING + BUILDING",
    desc: "Exploring advanced full-stack systems, Next.js page routers, server-side data, and complex state management workflows.",
  },
  {
    year: "2026",
    title: "REAL PROJECTS & AI INTEGRATION",
    desc: "Structuring commercial catalogues, client projects, and interfacing APIs with artificial intelligence interfaces.",
  }
];

export const JourneyPreview: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-28 border-t border-border-custom bg-background" aria-label="Journey timeline preview">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <Reveal direction="up" delay={0.1}>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">04 / Chronology</span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase mt-4 mb-6">
              STILL BUILDING.
            </h2>
            <p className="font-sans text-lg md:text-xl text-text-muted leading-relaxed">
              I am actively learning, building, experimenting, and expanding my development skills day by day. Here is a brief look at my milestones:
            </p>
          </Reveal>
        </div>

        {/* Minimal compact timeline grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-border-custom md:before:hidden pl-8 md:pl-0">
          {TIMELINE_PREVIEW.map((item, idx) => (
            <Reveal key={item.year} direction="up" delay={idx * 0.1}>
              <div className="relative space-y-3 md:border-t md:border-border-custom md:pt-6">
                {/* Mobile timeline dot */}
                <span className="absolute -left-[41px] top-1.5 w-4 h-4 bg-background border-2 border-accent rounded-full md:hidden" />
                
                {/* Year tag */}
                <span className="font-mono text-xs text-accent font-bold block">{item.year}</span>
                
                <h3 className="font-display text-lg uppercase tracking-tight">
                  {item.title}
                </h3>
                
                <p className="font-sans text-xs text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Action Link */}
        <div className="flex justify-end pt-12 md:pt-16 border-t border-border-custom mt-12 md:mt-16">
          <Reveal direction="up" delay={0.2}>
            <Link href="/journey">
              <Button variant="secondary">View My Journey</Button>
            </Link>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
