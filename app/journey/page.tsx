import React from "react";
import { Metadata } from "next";
import { generateSEO } from "@/lib/metadata/seo";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import { JOURNEY } from "@/lib/constants/journey";
import { CustomImage } from "@/components/media/CustomImage";

export const metadata: Metadata = generateSEO({
  title: "Journey",
  description: "Timeline details and milestones of Afaq Ahmad's development career.",
  path: "/journey",
});

export default function JourneyPage() {
  return (
    <PageTransition>
      <section className="py-16 md:py-24" aria-label="Development Timeline Journey">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Reveal direction="up">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">06 / Chronology</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase mt-4 mb-8">
              Development Journey
            </h1>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-start">
            {/* Timeline listing */}
            <div className="lg:col-span-8 space-y-12 relative before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-border-custom pl-8">
              {JOURNEY.map((item, idx) => (
                <Reveal key={idx} direction="up" delay={idx * 0.1}>
                  <div className="relative">
                    {/* Timeline dot */}
                    <span className="absolute -left-[37px] top-1.5 w-4 h-4 bg-background border-2 border-accent rounded-full" />
                    
                    <span className="font-mono text-xs text-accent font-bold">{item.year}</span>
                    <h2 className="font-display text-2xl uppercase mt-1 mb-2">
                      {item.title}
                    </h2>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-4">
                      {item.institution} &bull; {item.location}
                    </p>
                    <p className="font-sans text-sm text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Sidebar Portrait column */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <Reveal direction="up" delay={0.2}>
                <div className="border border-border-custom bg-surface-muted/30 p-6 rounded-lg space-y-6">
                  <CustomImage
                    src="/images/profile/podium-portrait.jpg"
                    alt="Afaq Ahmad Presenting at Event"
                    aspectRatio="portrait"
                    hoverZoom={true}
                    className="w-full shadow-lg rounded-lg"
                  />
                  <div>
                    <h3 className="font-display text-lg uppercase mb-1">Keynote & Presentation</h3>
                    <p className="font-sans text-xs text-text-muted leading-relaxed">
                      Representing projects and sharing technical achievements at events, fostering community dialogue and collaboration.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
