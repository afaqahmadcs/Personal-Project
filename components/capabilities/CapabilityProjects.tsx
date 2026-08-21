"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { PROJECTS } from "@/lib/constants/projects";

export const CapabilityProjects: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 border-t border-border-custom bg-surface-muted/10" aria-label="Projects verification links">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <Reveal direction="up" delay={0.1}>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              Real-World Execution
            </span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase mt-4 mb-4">
              Built Through <br />
              <span className="text-text-muted">Real Projects.</span>
            </h2>
            <p className="font-sans text-sm text-text-muted">
              Capabilities are validated through working deployments, catalog projects, and intermediate frameworks.
            </p>
          </Reveal>
        </div>

        {/* Project Links list */}
        <div className="border-t border-border-custom pt-8 mb-16">
          <div className="space-y-4">
            {PROJECTS.map((project, idx) => (
              <Reveal key={project.slug} direction="up" delay={idx * 0.08}>
                <div className="group border-b border-border-custom/50 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:border-accent transition-colors duration-300">
                  <div className="flex items-baseline space-x-6">
                    <span className="font-mono text-xs text-text-muted">{project.number}</span>
                    <Link href={`/work/${project.slug}`} className="group-hover:text-accent">
                      <h3 className="font-display text-2xl uppercase tracking-tight">
                        {project.title}
                      </h3>
                    </Link>
                  </div>
                  <div className="flex items-center space-x-4 pl-8 sm:pl-0">
                    <span className="font-mono text-[9px] uppercase tracking-wider border border-border-custom px-2 py-0.5 rounded bg-background text-text-muted">
                      {project.category}
                    </span>
                    {project.liveUrl && (
                      <Link href={project.liveUrl} variant="minimal" arrow="up-right" className="font-mono text-[9px] uppercase tracking-widest">
                        Live site
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-end pt-4">
          <Reveal direction="up" delay={0.2}>
            <Link href="/work">
              <Button variant="secondary">View All Work</Button>
            </Link>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
