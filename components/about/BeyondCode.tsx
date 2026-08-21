"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

const CREATIVE_PILLARS = [
  {
    title: "Video Editing",
    description: "Structuring programming logs and technical walkthroughs, focusing on clear audio layout and logical narrative pacing."
  },
  {
    title: "Thumbnail & Vector Design",
    description: "Designing graphic thumbnails and banners in Figma, applying grid laws, color contrast rules, and distinct typography."
  },
  {
    title: "AI Creative Tools",
    description: "Utilizing generative image tools practically to sketch layout ideas, mockup backgrounds, and discover unique design patterns."
  }
];

export const BeyondCode: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-background" aria-label="Creative skills beyond coding">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <Reveal direction="up" delay={0.1}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                05 / Expression
              </span>
              <h2 className="font-display text-3xl uppercase mt-4 mb-6">
                Beyond The Code.
              </h2>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                Programming is only one channel of creation. I explore technical content production, video structures, thumbnail graphics, and vector designs. This helps bridge engineering logic with clear visual explanations.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Creative pillars */}
          <div className="lg:col-span-8 space-y-6">
            {CREATIVE_PILLARS.map((pillar, idx) => (
              <Reveal key={pillar.title} direction="up" delay={idx * 0.1}>
                <div className="border border-border-custom bg-surface-muted/30 p-8 rounded-lg hover:border-accent transition-colors duration-300 group">
                  <div className="flex justify-between items-baseline mb-3">
                    <h3 className="font-display text-xl uppercase tracking-tight group-hover:text-accent transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">Creative Work</span>
                  </div>
                  <p className="font-sans text-xs text-text-muted leading-relaxed max-w-2xl">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
