import React from "react";
import { Metadata } from "next";
import { generateSEO } from "@/lib/metadata/seo";
import { PageTransition } from "@/components/motion/PageTransition";
import { AICreativeHero } from "@/components/ai-creative/AICreativeHero";
import { AIWorkflow } from "@/components/ai-creative/AIWorkflow";
import { AICode } from "@/components/ai-creative/AICode";
import { AIDesign } from "@/components/ai-creative/AIDesign";
import { AIImage } from "@/components/ai-creative/AIImage";
import { AIMotion } from "@/components/ai-creative/AIMotion";
import { AIContent } from "@/components/ai-creative/AIContent";
import { HumanVsAI } from "@/components/ai-creative/HumanVsAI";
import { ExperimentArchive } from "@/components/ai-creative/ExperimentArchive";
import { CreativeLab } from "@/components/ai-creative/CreativeLab";
import { AICreativeCTA } from "@/components/ai-creative/AICreativeCTA";

export const metadata: Metadata = generateSEO({
  title: "AI × Creative — Afaq Ahmad",
  description: "Explore Afaq Ahmad's personal lab tracking how AI is used as a tool to augment programming logic, visual interface design, and creative media editing workflows.",
  path: "/ai-creative",
});

export default function AiCreativePage() {
  return (
    <PageTransition>
      <div className="relative w-full flex flex-col">
        <AICreativeHero />
        <AIWorkflow />
        <AICode />
        <AIDesign />
        <AIImage />
        <AIMotion />
        <AIContent />
        <HumanVsAI />
        <ExperimentArchive />
        <CreativeLab />
        <AICreativeCTA />
      </div>
    </PageTransition>
  );
}
