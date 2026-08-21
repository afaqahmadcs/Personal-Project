import React from "react";
import { Metadata } from "next";
import { generateSEO } from "@/lib/metadata/seo";
import { Reveal } from "@/components/motion/Reveal";
import { PageTransition } from "@/components/motion/PageTransition";
import { Button } from "@/components/ui/Button";
import { Link } from "@/components/ui/Link";
import { BRAND } from "@/lib/constants/brand";
import { PROJECTS } from "@/lib/constants/projects";
import { CustomImage } from "@/components/media/CustomImage";

export const metadata: Metadata = generateSEO({
  path: "/",
});

export default function Home() {
  return (
    <PageTransition>
      <section className="relative w-full py-16 md:py-28" aria-label="Afaq Ahmad Brand Introduction">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Main Hero Header Layout (Editorial layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Reveal direction="up" delay={0.1}>
                <p className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                  {BRAND.title}
                </p>
              </Reveal>
              
              <Reveal direction="up" delay={0.2}>
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase leading-none">
                  Engineering <br />
                  <span className="text-text-muted">Digital Artistry</span>
                </h1>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <p className="font-sans text-lg md:text-xl text-text-muted max-w-2xl mt-4 leading-relaxed">
                  Bespoke digital architecture crafted by Afaq Ahmad. Building reliable full stack software 
                  and exploring practical artificial intelligence applications from Peshawar, Pakistan.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5 flex flex-col space-y-6">
              <Reveal direction="up" delay={0.4}>
                <CustomImage
                  src="/images/profile/navy-arms-crossed.jpg"
                  alt="Afaq Ahmad — AI & Full Stack Developer"
                  aspectRatio="editorial"
                  hoverZoom={true}
                  className="w-full max-w-sm mx-auto shadow-2xl rounded-lg"
                  priority={true}
                />
              </Reveal>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <Reveal direction="up" delay={0.5}>
                  <div className="border-l-2 border-border-custom pl-6 py-1">
                    <h3 className="font-mono text-[10px] uppercase tracking-wider text-text-muted">Current Studies</h3>
                    <p className="font-sans text-sm font-semibold mt-1">FSc Computer Science</p>
                    <p className="font-mono text-[10px] text-text-muted">The Superior Group of Colleges, Peshawar</p>
                  </div>
                </Reveal>
                <Reveal direction="up" delay={0.6}>
                  <div className="border-l-2 border-border-custom pl-6 py-1">
                    <h3 className="font-mono text-[10px] uppercase tracking-wider text-text-muted">Location</h3>
                    <p className="font-sans text-sm font-semibold mt-1">{BRAND.location}</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <Reveal direction="up" delay={0.6}>
            <div className="flex flex-wrap items-center gap-4 mt-12">
              <Link href="/work">
                <Button variant="primary">Explore Projects</Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary">Get In Touch</Button>
              </Link>
            </div>
          </Reveal>

          {/* Projects Teaser Grid */}
          <div className="mt-28 md:mt-40 border-t border-border-custom pt-12">
            <Reveal direction="up">
              <div className="flex items-baseline justify-between mb-12">
                <h2 className="font-display text-2xl uppercase tracking-tight">
                  Selected Work
                </h2>
                <Link href="/work" variant="editorial" arrow="right" className="font-mono text-xs uppercase tracking-wider">
                  View All Index
                </Link>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {PROJECTS.slice(0, 2).map((project, idx) => (
                <Reveal key={project.slug} direction="up" delay={idx * 0.15}>
                  <div className="group border border-border-custom bg-surface-muted/50 p-8 flex flex-col justify-between aspect-video transition-all duration-300 hover:border-accent">
                    <div>
                      <div className="flex justify-between items-baseline mb-6">
                        <span className="font-mono text-xs text-text-muted">{project.number}</span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted border border-border-custom px-2 py-0.5">{project.category}</span>
                      </div>
                      <h3 className="font-display text-xl uppercase group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="font-sans text-sm text-text-muted mt-2 line-clamp-2">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border-custom/50 flex justify-between items-center">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted truncate max-w-[200px]">
                        {project.technologies.slice(0, 3).join(" • ")}
                      </span>
                      {project.liveUrl && (
                        <Link href={project.liveUrl} variant="minimal" arrow="up-right" className="font-mono text-[10px] uppercase tracking-wider">
                          Visit Site
                        </Link>
                      )}
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
