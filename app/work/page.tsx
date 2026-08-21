import React from "react";
import { Metadata } from "next";
import { generateSEO } from "@/lib/metadata/seo";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import { Link } from "@/components/ui/Link";
import { PROJECTS } from "@/lib/constants/projects";

export const metadata: Metadata = generateSEO({
  title: "Work",
  description: "Browse selected portfolio projects built by Afaq Ahmad.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <PageTransition>
      <section className="py-16 md:py-24" aria-label="Portfolio Work Index">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Reveal direction="up">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">03 / Work</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase mt-4 mb-8">
              Selected Work
            </h1>
          </Reveal>

          {/* Project List layout */}
          <div className="mt-16 space-y-6">
            {PROJECTS.map((project, idx) => (
              <Reveal key={project.slug} direction="up" delay={idx * 0.1}>
                <div className="group border-b border-border-custom pb-6 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 transition-colors hover:border-accent">
                  <div className="flex items-baseline space-x-6">
                    <span className="font-mono text-xs text-text-muted select-none">{project.number}</span>
                    <Link href={`/work/${project.slug}`} className="group-hover:text-accent">
                      <h2 className="font-display text-2xl uppercase tracking-tight">
                        {project.title}
                      </h2>
                    </Link>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 pl-8 md:pl-0">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted px-2 py-0.5 border border-border-custom bg-surface-muted">
                      {project.category}
                    </span>
                    {project.liveUrl && (
                      <Link href={project.liveUrl} variant="minimal" arrow="up-right" className="font-mono text-[10px] uppercase tracking-wider">
                        Live site
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
