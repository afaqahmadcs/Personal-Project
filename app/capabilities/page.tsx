import React from "react";
import { Metadata } from "next";
import { generateSEO } from "@/lib/metadata/seo";
import { PageTransition } from "@/components/motion/PageTransition";
import { CapabilitiesHero } from "@/components/capabilities/CapabilitiesHero";
import { CapabilityBlock } from "@/components/capabilities/CapabilityBlock";
import { WorkProcess } from "@/components/capabilities/WorkProcess";
import { CapabilityProjects } from "@/components/capabilities/CapabilityProjects";
import { CapabilitiesClosing } from "@/components/capabilities/CapabilitiesClosing";

export const metadata: Metadata = generateSEO({
  title: "Capabilities — Afaq Ahmad",
  description: "Explore the technical capabilities of Afaq Ahmad: Full stack software design, modern frontends, backends, AI workflow integrations, and video editing.",
  path: "/capabilities",
});

export default function CapabilitiesPage() {
  return (
    <PageTransition>
      <div className="relative w-full flex flex-col">
        <CapabilitiesHero />
        <CapabilityBlock />
        <WorkProcess />
        <CapabilityProjects />
        <CapabilitiesClosing />
      </div>
    </PageTransition>
  );
}
