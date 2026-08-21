import React from "react";
import { Metadata } from "next";
import { generateSEO } from "@/lib/metadata/seo";
import { PageTransition } from "@/components/motion/PageTransition";
import { WorkHero } from "@/components/work/WorkHero";
import { ProjectIndex } from "@/components/work/ProjectIndex";
import { FeaturedProject } from "@/components/work/FeaturedProject";
import { ProjectList } from "@/components/work/ProjectList";
import { WorkStatement } from "@/components/work/WorkStatement";
import { WorkCTA } from "@/components/work/WorkCTA";

export const metadata: Metadata = generateSEO({
  title: "Selected Work — Afaq Ahmad",
  description: "A premium portfolio archive showcasing developer platforms, business landing concepts, and client gemstone catalog designs built by Afaq Ahmad.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <PageTransition>
      <div className="relative w-full flex flex-col">
        <WorkHero />
        <ProjectIndex />
        <FeaturedProject />
        <ProjectList />
        <WorkStatement />
        <WorkCTA />
      </div>
    </PageTransition>
  );
}
