import React from "react";
import { Metadata } from "next";
import { generateSEO } from "@/lib/metadata/seo";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import { BRAND } from "@/lib/constants/brand";
import { CustomImage } from "@/components/media/CustomImage";

export const metadata: Metadata = generateSEO({
  title: "Capabilities",
  description: "Browse the developer services and capabilities of Afaq Ahmad.",
  path: "/capabilities",
});

const CAPABILITY_DESCRIPTIONS = [
  "Crafting responsive, lightning-fast personal portfolios with bespoke interactive animations and clean layouts.",
  "Engineering robust, high-performance corporate platforms with structured architectures and optimal SEO structures.",
  "Connecting frontend systems with artificial intelligence models, building automated agentic scripts and dynamic flows.",
  "Creating user journeys and mockups in Figma, focusing on typographic balance, grid lines, and high responsiveness."
];

export default function CapabilitiesPage() {
  return (
    <PageTransition>
      <section className="py-16 md:py-24" aria-label="Capabilities and Services">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Reveal direction="up">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">04 / Services</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase mt-4 mb-8">
              Capabilities
            </h1>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
            {/* Portrait column */}
            <div className="lg:col-span-4">
              <Reveal direction="up" delay={0.1}>
                <CustomImage
                  src="/images/profile/outdoor-standing.jpg"
                  alt="Afaq Ahmad Professional Developer Services"
                  aspectRatio="portrait"
                  hoverZoom={true}
                  className="w-full shadow-lg rounded-lg"
                />
              </Reveal>
            </div>

            {/* Grid column */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {BRAND.capabilities.map((cap, idx) => (
                <Reveal key={cap} direction="up" delay={idx * 0.1}>
                  <div className="border border-border-custom bg-surface-muted p-8 aspect-video flex flex-col justify-between hover:border-accent transition-colors duration-300 rounded-lg">
                    <span className="font-mono text-xs text-text-muted">0{idx + 1}</span>
                    <div>
                      <h2 className="font-display text-2xl uppercase tracking-tight mb-2">
                        {cap}
                      </h2>
                      <p className="font-sans text-xs text-text-muted leading-relaxed">
                        {CAPABILITY_DESCRIPTIONS[idx] || "Tailored services focusing on design standards, performance metrics, and clean code layouts."}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
