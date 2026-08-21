import React from "react";
import { Metadata } from "next";
import { generateSEO } from "@/lib/metadata/seo";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import { CustomImage } from "@/components/media/CustomImage";

export const metadata: Metadata = generateSEO({
  title: "AI & Creative",
  description: "Experiments and implementations by Afaq Ahmad in AI and creative media.",
  path: "/ai-creative",
});

export default function AiCreativePage() {
  return (
    <PageTransition>
      <section className="py-16 md:py-24" aria-label="AI and Creative Experiments">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Reveal direction="up">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">05 / Innovation</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase mt-4 mb-8">
              AI × Creative
            </h1>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-center">
            {/* Context column */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal direction="up" delay={0.1}>
                <h2 className="font-sans text-xl md:text-2xl font-bold leading-normal">
                  Fusing Artificial Intelligence with Human Artistry
                </h2>
                <p className="font-sans text-base text-text-muted leading-relaxed mt-4">
                  Exploring the boundaries of generative AI, prompt architecture, and custom integrations. 
                  My work is centered around building workflows that harness advanced models to solve real-world problems 
                  and automate software tasks.
                </p>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <Reveal direction="up" delay={0.2}>
                  <div className="border border-border-custom bg-surface-muted/30 p-6 rounded-lg">
                    <h3 className="font-display text-lg uppercase mb-2">Agentic Frameworks</h3>
                    <p className="font-sans text-xs text-text-muted leading-relaxed">
                      Designing state machines and agent loops using tools like LangChain and custom Python interfaces for automation.
                    </p>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.3}>
                  <div className="border border-border-custom bg-surface-muted/30 p-6 rounded-lg">
                    <h3 className="font-display text-lg uppercase mb-2">Generative Media</h3>
                    <p className="font-sans text-xs text-text-muted leading-relaxed">
                      Integrating text-to-image and LLM APIs to create dynamic user experiences that adapt in real time.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* AI Portrait column */}
            <div className="lg:col-span-5">
              <Reveal direction="up" delay={0.4}>
                <CustomImage
                  src="/images/profile/grey-arms-crossed.jpg"
                  alt="Afaq Ahmad AI Lab Profile"
                  aspectRatio="editorial"
                  hoverZoom={true}
                  className="w-full max-w-sm mx-auto shadow-2xl rounded-lg border-2 border-accent/20"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
