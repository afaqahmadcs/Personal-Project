import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/constants/projects";
import { generateSEO } from "@/lib/metadata/seo";
import { PageTransition } from "@/components/motion/PageTransition";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { ProjectMeta } from "@/components/case-study/ProjectMeta";
import { NarrativeSections } from "@/components/case-study/NarrativeSections";
import { VisualShowcase } from "@/components/case-study/VisualShowcase";
import { BuildSection } from "@/components/case-study/BuildSection";
import { ProjectNavigation } from "@/components/case-study/ProjectNavigation";

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
    title: `Afaq Ahmad — ${project.title}`,
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
      <div className="relative w-full flex flex-col">
        <CaseStudyHero project={project} />
        <ProjectMeta project={project} />
        <NarrativeSections project={project} />
        <VisualShowcase project={project} />
        <BuildSection project={project} />
        <ProjectNavigation currentSlug={project.slug} />
      </div>
    </PageTransition>
  );
}
