import React from "react";
import { Metadata } from "next";
import { generateSEO } from "@/lib/metadata/seo";
import { PageTransition } from "@/components/motion/PageTransition";
import { AboutHero } from "@/components/about/AboutHero";
import { Introduction } from "@/components/about/Introduction";
import { Education } from "@/components/about/Education";
import { LearningByBuilding } from "@/components/about/LearningByBuilding";
import { BeyondCode } from "@/components/about/BeyondCode";
import { AboutClosing } from "@/components/about/AboutClosing";

export const metadata: Metadata = generateSEO({
  title: "About Afaq Ahmad — AI & Full Stack Developer",
  description: "Learn about Afaq Ahmad's background, education, FSc Computer Science studies in Peshawar, technical stack, and learning philosophy.",
  path: "/about",
  image: "/images/profile/afaq-ahmad-profile.png",
});

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="relative w-full flex flex-col">
        <AboutHero />
        <Introduction />
        <Education />
        <LearningByBuilding />
        <BeyondCode />
        <AboutClosing />
      </div>
    </PageTransition>
  );
}
