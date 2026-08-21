import React from "react";
import { Metadata } from "next";
import { generateSEO } from "@/lib/metadata/seo";
import { PageTransition } from "@/components/motion/PageTransition";
import { ContentHero } from "@/components/content/ContentHero";
import { ContentArchive } from "@/components/content/ContentArchive";
import { ContentCTA } from "@/components/content/ContentCTA";

export const metadata: Metadata = generateSEO({
  title: "Insights — Afaq Ahmad",
  description: "Articles, experiments and notes from Afaq Ahmad on web development, AI, design and creative technology.",
  path: "/content",
});

export default function ContentPage() {
  return (
    <PageTransition>
      <div className="relative w-full flex flex-col">
        <ContentHero />
        <ContentArchive />
        <ContentCTA />
      </div>
    </PageTransition>
  );
}
