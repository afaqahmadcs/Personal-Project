"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { ProjectVisual } from "./ProjectVisual";
import { PROJECTS } from "@/lib/constants/projects";

export const FeaturedProject: React.FC = () => {
  // We feature Project 01: Afaq Ahmad Real Estate
  const featured = PROJECTS[0];

  return (
    <section className="relative w-full py-12 md:py-20 bg-background overflow-hidden" aria-label="Featured project showcase">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="border-t border-border-custom pt-12">
          <Reveal direction="up" delay={0.1}>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              01 / Featured Project
            </span>
          </Reveal>

          {/* Heading layout */}
          <div className="flex flex-col md:flex-row md:items-baseline justify-between mt-4 mb-12 gap-4">
            <Reveal direction="up" delay={0.15}>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter">
                {featured.title}
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted px-2.5 py-0.5 border border-border-custom rounded bg-surface-muted">
                {featured.category}
              </span>
            </Reveal>
          </div>

          {/* Large Project Visual Viewport (Major space allocation) */}
          <div className="mb-12">
            <Reveal direction="up" delay={0.3}>
              <ProjectVisual
                slug={featured.slug}
                title={featured.title}
                liveUrl={featured.liveUrl}
                status={featured.status}
              />
            </Reveal>
          </div>

          {/* Bottom detail action row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-8 border-t border-border-custom/50">
            <div className="md:col-span-8">
              <Reveal direction="up" delay={0.1}>
                <p className="font-sans text-base text-text-muted leading-relaxed max-w-2xl">
                  {featured.shortDescription}
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-4 flex flex-wrap gap-4 md:justify-end">
              {featured.liveUrl && (
                <Reveal direction="up" delay={0.2}>
                  <Link href={featured.liveUrl}>
                    <Button variant="primary">View Live Project</Button>
                  </Link>
                </Reveal>
              )}
              <Reveal direction="up" delay={0.25}>
                <Link href={`/work/${featured.slug}`}>
                  <Button variant="secondary">View Case Study</Button>
                </Link>
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
