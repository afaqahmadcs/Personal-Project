"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";

const CREATIVE_AREAS = [
  {
    num: "01",
    field: "Video Production",
    desc: "Crafting technical guides and logs on YouTube, covering code layouts, project walkthroughs, and developer tips. Focusing on pacing, clear audio, and structural editing.",
  },
  {
    num: "02",
    field: "Visual Design",
    desc: "Designing high-click rate YouTube thumbnails, custom Figma banners, and brand vectors focusing on typography balance, contrast rules, and aesthetic grid lines.",
  },
  {
    num: "03",
    field: "AI Creative Assets",
    desc: "Experimenting with text-to-image prompting layers like Stable Diffusion and Midjourney to create layout backgrounds, concept mockups, and custom site art assets.",
  },
  {
    num: "04",
    field: "Tech Storytelling",
    desc: "Structuring visual notes, intermediate documentation, and programming cheatsheets to share my learning journey, making complex logic accessible to students.",
  }
];

export const CreateSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-28 border-t border-border-custom bg-surface-muted/20" aria-label="Creative Works section">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <Reveal direction="up" delay={0.1}>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">03 / Expression</span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase mt-4 mb-6">
              I CREATE.
            </h2>
            <p className="font-sans text-lg md:text-xl text-text-muted leading-relaxed">
              Beyond code, I explore content, visual design, video and digital storytelling. I believe that technical work is most powerful when combined with engaging visual explanations and community logs.
            </p>
          </Reveal>
        </div>

        {/* Creative Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {CREATIVE_AREAS.map((area, idx) => (
            <Reveal key={area.field} direction="up" delay={idx * 0.1}>
              <div className="border border-border-custom bg-background p-8 rounded-lg flex flex-col justify-between hover:border-accent transition-colors duration-300 h-64 shadow-sm group">
                <div className="flex justify-between items-baseline mb-6 border-b border-border-custom/50 pb-4">
                  <span className="font-mono text-xs text-text-muted">{area.num}</span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold">Creative Media</span>
                </div>
                
                <div>
                  <h3 className="font-display text-xl uppercase tracking-tight mb-3 group-hover:text-accent transition-colors duration-300">
                    {area.field}
                  </h3>
                  <p className="font-sans text-xs text-text-muted leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Action Link */}
        <div className="flex justify-end pt-4">
          <Reveal direction="up" delay={0.2}>
            <Link href="/ai-creative">
              <Button variant="secondary">See Creative Work</Button>
            </Link>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
