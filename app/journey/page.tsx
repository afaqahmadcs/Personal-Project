import React from "react";
import { Metadata } from "next";
import { generateSEO } from "@/lib/metadata/seo";
import { PageTransition } from "@/components/motion/PageTransition";
import { JourneyHero } from "@/components/journey/JourneyHero";
import { JourneyPhilosophy } from "@/components/journey/JourneyPhilosophy";
import { JourneyTimeline } from "@/components/journey/JourneyTimeline";
import { CurrentFocus } from "@/components/journey/CurrentFocus";
import { LearningLoop } from "@/components/journey/LearningLoop";
import { FutureDirection } from "@/components/journey/FutureDirection";

export const metadata: Metadata = generateSEO({
  title: "Journey — Afaq Ahmad",
  description: "Explore the development journey of Afaq Ahmad: FSc Computer Science studies in Peshawar, vanilla web milestones, modern typescript tools, and next projects.",
  path: "/journey",
});

export default function JourneyPage() {
  return (
    <PageTransition>
      <div className="relative w-full flex flex-col">
        <JourneyHero />
        <JourneyPhilosophy />
        <JourneyTimeline />
        <CurrentFocus />
        <LearningLoop />
        <FutureDirection />
      </div>
    </PageTransition>
  );
}
