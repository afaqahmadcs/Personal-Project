"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { PROJECTS } from "@/lib/constants/projects";

export const ProjectIndex: React.FC = () => {
  return (
    <section className="relative w-full py-8 bg-background overflow-hidden" aria-label="Projects Editorial Index">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal direction="none" delay={0.1}>
          <div className="border border-border-custom bg-surface-muted/30 p-6 md:p-8 rounded-lg">
            <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted mb-4 block">
              EDITORIAL ARCHIVE INDEX
            </span>
            <div className="flex flex-col space-y-3">
              {PROJECTS.map((project) => (
                <div key={project.slug} className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-text-muted hover:text-accent transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <span>{project.number}</span>
                    <span className="text-border-custom font-normal">&mdash;&mdash;&mdash;</span>
                    <span className="font-bold text-foreground hover:text-accent transition-colors duration-300">
                      {project.title}
                    </span>
                  </div>
                  <span className="hidden sm:inline text-[10px] text-text-muted/60">{project.category}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
