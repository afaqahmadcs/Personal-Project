import React from "react";
import { Metadata } from "next";
import { generateSEO } from "@/lib/metadata/seo";
import { PageTransition } from "@/components/motion/PageTransition";
import { Hero } from "@/components/home/Hero";
import { BuildSection } from "@/components/home/BuildSection";
import { ExploreSection } from "@/components/home/ExploreSection";
import { CreateSection } from "@/components/home/CreateSection";
import { JourneyPreview } from "@/components/home/JourneyPreview";
import { Philosophy } from "@/components/home/Philosophy";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = generateSEO({
  title: "Afaq Ahmad — AI & Full Stack Developer",
  description: "Afaq Ahmad is an AI & Full Stack Developer in Peshawar, Pakistan, designing premium websites, custom digital tools, and automated generative workflows.",
  path: "/",
  image: "/images/profile/afaq-ahmad-profile.png",
});

export default function Home() {
  return (
    <PageTransition>
      <div className="relative w-full flex flex-col">
        {/* Narrated Page Sections */}
        <Hero />
        <BuildSection />
        <Philosophy />
        <ExploreSection />
        <CreateSection />
        <JourneyPreview />
        <ContactCTA />
      </div>
    </PageTransition>
  );
}
