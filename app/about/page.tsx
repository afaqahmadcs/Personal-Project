import React from "react";
import { Metadata } from "next";
import { generateSEO } from "@/lib/metadata/seo";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import { BRAND } from "@/lib/constants/brand";
import { CustomImage } from "@/components/media/CustomImage";

export const metadata: Metadata = generateSEO({
  title: "About",
  description: "Learn about Afaq Ahmad's background, education, and development approach.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="py-16 md:py-24" aria-label="About Afaq Ahmad">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Reveal direction="up">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">02 / Profile</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase mt-4 mb-8">
              Afaq Ahmad
            </h1>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mt-12 items-start">
            {/* Portrait headshot column */}
            <div className="md:col-span-4 lg:col-span-4">
              <Reveal direction="up" delay={0.1}>
                <CustomImage
                  src="/images/profile/navy-headshot.jpg"
                  alt="Afaq Ahmad Portrait Headshot"
                  aspectRatio="portrait"
                  hoverZoom={true}
                  className="w-full shadow-lg rounded-lg"
                />
              </Reveal>
            </div>

            {/* About text column */}
            <div className="md:col-span-5 lg:col-span-5 space-y-6">
              <Reveal direction="up" delay={0.2}>
                <h2 className="font-sans text-xl md:text-2xl font-bold leading-normal">
                  Building responsive websites and automating flows utilizing full-stack development and modern AI strategies.
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.3}>
                <p className="font-sans text-base text-text-muted leading-relaxed">
                  Based in Peshawar, Pakistan, Afaq Ahmad is a programmer dedicated to translating 
                  complex logic into clear, aesthetic, and functional user interfaces. Currently pursuing studies in FSc Computer Science, 
                  he spends his time learning modern web architectures, building full stack projects, and experimenting with AI integration tools.
                </p>
              </Reveal>
            </div>

            {/* Sidebar metadata column */}
            <div className="md:col-span-3 lg:col-span-3 space-y-6 border-t md:border-t-0 md:border-l border-border-custom pt-8 md:pt-0 md:pl-6 lg:pl-8">
              <Reveal direction="up" delay={0.4}>
                <div>
                  <h3 className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-2">Education</h3>
                  <p className="font-sans text-sm font-semibold">{BRAND.location}</p>
                  <p className="font-sans text-sm">FSc Computer Science</p>
                  <p className="font-mono text-[10px] text-text-muted">The Superior Group of Colleges, Peshawar (2025 – Present)</p>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.5}>
                <div>
                  <h3 className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-2">Core Tech</h3>
                  <div className="flex flex-wrap gap-2">
                    {BRAND.techStack.slice(0, 8).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] uppercase tracking-wider border border-border-custom px-2 py-0.5 bg-surface-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Keynote Speaking Section */}
          <div className="mt-20 pt-16 border-t border-border-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <Reveal direction="up">
                  <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">Thought Leadership</span>
                  <h2 className="font-display text-3xl uppercase mt-2">
                    Keynote Speaking & Presentation
                  </h2>
                  <p className="font-sans text-base text-text-muted leading-relaxed mt-4">
                    Active communicator who enjoys presenting concepts, debating technology ethics, and 
                    sharing developer insights. Engaging at events helps bridge technical implementation details with community-driven solutions.
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Reveal direction="up" delay={0.2}>
                  <CustomImage
                    src="/images/profile/podium-landscape.png"
                    alt="Afaq Ahmad speaking at event podium"
                    aspectRatio="video"
                    hoverZoom={true}
                    className="w-full shadow-xl rounded-lg"
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
