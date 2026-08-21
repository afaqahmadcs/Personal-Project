import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/constants/projects";
import { generateSEO } from "@/lib/metadata/seo";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) return {};

  return generateSEO({
    title: project.title,
    description: project.shortDescription,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <PageTransition>
      <section className="py-16 md:py-24" aria-label={`Project detail for ${project.title}`}>
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Back button */}
          <Reveal direction="none">
            <Link href="/work" variant="minimal" className="font-mono text-xs uppercase tracking-wider mb-8">
              &larr; Back to all work
            </Link>
          </Reveal>

          {/* Title and Category */}
          <Reveal direction="up" delay={0.1}>
            <div className="flex flex-wrap items-baseline gap-4 mb-4">
              <span className="font-mono text-xs text-text-muted">{project.number}</span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase">
                {project.title}
              </h1>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              {project.category}
            </span>
          </Reveal>

          {/* Details layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 border-t border-border-custom pt-12">
            {/* Description context */}
            <div className="lg:col-span-8 space-y-8">
              <Reveal direction="up" delay={0.2}>
                <h2 className="font-sans text-lg font-semibold text-text-muted">Overview</h2>
                <p className="font-sans text-base leading-relaxed mt-2 text-foreground">
                  {project.shortDescription}
                </p>
              </Reveal>
            </div>

            {/* Meta column */}
            <div className="lg:col-span-4 space-y-6">
              <Reveal direction="up" delay={0.3}>
                <div className="border-b border-border-custom pb-4">
                  <h3 className="font-mono text-[10px] uppercase tracking-wider text-text-muted">My Role</h3>
                  <p className="font-sans text-sm font-semibold mt-1">{project.role}</p>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.4}>
                <div className="border-b border-border-custom pb-4">
                  <h3 className="font-mono text-[10px] uppercase tracking-wider text-text-muted">Technologies</h3>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="font-mono text-[9px] uppercase border border-border-custom px-2 py-0.5 bg-surface-muted text-text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.5}>
                <div className="pt-4 flex flex-col gap-3">
                  {project.liveUrl && (
                    <Link href={project.liveUrl}>
                      <Button variant="primary" className="w-full">Visit Live Website</Button>
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link href={project.githubUrl}>
                      <Button variant="secondary" className="w-full">View GitHub Repository</Button>
                    </Link>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
