"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { PROJECTS } from "@/lib/constants/projects";

interface ProjectNavigationProps {
  currentSlug: string;
}

export const ProjectNavigation: React.FC<ProjectNavigationProps> = ({ currentSlug }) => {
  const currentIndex = PROJECTS.findIndex((p) => p.slug === currentSlug);

  // Safely find previous/next with wrap-around
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <section className="relative w-full py-12 md:py-16 border-t border-border-custom bg-surface-muted/10 overflow-hidden" aria-label="Case Study Page Navigation">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          
          {/* Previous link */}
          <div className="text-left">
            <Reveal direction="none" delay={0.05}>
              <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">
                &larr; Previous Project
              </span>
              <Link href={`/work/${prevProject.slug}`} className="block hover:text-accent mt-1">
                <h4 className="font-display text-sm sm:text-base uppercase truncate">
                  {prevProject.title}
                </h4>
              </Link>
            </Reveal>
          </div>

          {/* Central Back to Work button (Desktop only) */}
          <div className="hidden lg:flex justify-center">
            <Reveal direction="none" delay={0.1}>
              <Link href="/work">
                <Button variant="secondary">Back To Work Archive</Button>
              </Link>
            </Reveal>
          </div>

          {/* Next link */}
          <div className="text-right">
            <Reveal direction="none" delay={0.15}>
              <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">
                Next Project &rarr;
              </span>
              <Link href={`/work/${nextProject.slug}`} className="block hover:text-accent mt-1">
                <h4 className="font-display text-sm sm:text-base uppercase truncate">
                  {nextProject.title}
                </h4>
              </Link>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
