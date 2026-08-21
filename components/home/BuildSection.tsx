"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { PROJECTS } from "@/lib/constants/projects";

export const BuildSection: React.FC = () => {
  // We feature the first project from the constants: Afaq Ahmad Real Estate
  const featuredProject = PROJECTS[0];
  
  return (
    <section className="relative w-full py-16 md:py-28 bg-surface-muted/30 border-t border-border-custom" aria-label="Selected Projects section">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <Reveal direction="up" delay={0.1}>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">01 / Creation</span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase mt-4 mb-6">
              I BUILD.
            </h2>
            <p className="font-sans text-lg md:text-xl text-text-muted leading-relaxed">
              Modern websites and digital experiences built through code, design and experimentation.
            </p>
          </Reveal>
        </div>

        {/* Featured Project - Large Visual Layout */}
        <div className="border border-border-custom bg-background/50 p-6 md:p-12 rounded-xl mb-16 md:mb-24 hover:border-accent/40 transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Project Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal direction="up" delay={0.1}>
                <div className="flex items-center justify-between border-b border-border-custom pb-4">
                  <span className="font-mono text-xs text-text-muted">{featuredProject.number}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold px-2.5 py-0.5 border border-accent/20 rounded bg-accent-soft">
                    {featuredProject.category}
                  </span>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight">
                  {featuredProject.title}
                </h3>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <p className="font-sans text-sm text-text-muted leading-relaxed">
                  {featuredProject.shortDescription}
                </p>
              </Reveal>

              {/* Technologies */}
              <Reveal direction="up" delay={0.4}>
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">Technologies</span>
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.technologies.map((tech) => (
                      <span key={tech} className="font-mono text-[9px] uppercase border border-border-custom px-2 py-0.5 bg-surface-muted text-text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.5}>
                <div className="pt-4">
                  {featuredProject.liveUrl && (
                    <Link href={featuredProject.liveUrl}>
                      <Button variant="primary">View Project</Button>
                    </Link>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Project Visual Placeholder Column */}
            <div className="lg:col-span-7">
              <Reveal direction="up" delay={0.3}>
                <div className="relative aspect-video w-full border border-border-custom bg-surface rounded-lg overflow-hidden flex flex-col items-center justify-center p-8 group cursor-pointer shadow-lg">
                  {/* Subtle Grid Pattern Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
                  
                  <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-2">
                    Media Placeholder
                  </span>
                  <span className="font-display text-lg sm:text-xl text-center uppercase tracking-tight max-w-sm">
                    {featuredProject.title}
                  </span>
                  <span className="font-mono text-[9px] uppercase text-accent font-bold mt-4 tracking-wider border border-accent/20 px-2 py-1 rounded bg-accent-soft/20 group-hover:scale-105 transition-transform duration-300">
                    Screenshots Incoming
                  </span>
                </div>
              </Reveal>
            </div>

          </div>
        </div>

        {/* Project Index list (Remaining projects) */}
        <div className="border-t border-border-custom pt-12">
          <Reveal direction="up" delay={0.1}>
            <div className="flex justify-between items-baseline mb-8">
              <h3 className="font-display text-xl uppercase tracking-tight">More Projects</h3>
              <Link href="/work" variant="editorial" arrow="right" className="font-mono text-xs uppercase tracking-wider">
                Explore All Work
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.slice(1, 5).map((project, idx) => (
              <Reveal key={project.slug} direction="up" delay={idx * 0.1}>
                <div className="border border-border-custom bg-surface-muted/50 p-6 rounded-lg flex flex-col justify-between h-48 hover:border-accent transition-colors duration-300 group">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-mono text-xs text-text-muted">{project.number}</span>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">{project.category.split(" ")[0]}</span>
                    </div>
                    <h4 className="font-display text-base uppercase tracking-tight group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h4>
                  </div>

                  <div className="pt-4 border-t border-border-custom/50 flex justify-between items-center">
                    <span className="font-mono text-[9px] text-text-muted truncate max-w-[120px]">
                      {project.technologies.slice(0, 2).join(" • ")}
                    </span>
                    <Link href={`/work/${project.slug}`} variant="minimal" arrow="right" className="font-mono text-[9px] uppercase tracking-widest">
                      Detail
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
