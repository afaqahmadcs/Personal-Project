"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";

export const CapabilityBlock: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-surface-muted/20 border-t border-border-custom" aria-label="Afaq Ahmad Capabilities">
      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-24 md:space-y-36">
        
        {/* CAPABILITY 01: PORTFOLIO WEBSITES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-start order-2 lg:order-1">
            <Reveal direction="up" delay={0.1}>
              <div className="relative w-full max-w-md aspect-video border border-border-custom bg-background rounded-lg flex items-center justify-center shadow-lg group overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,89,255,0.05)_0%,transparent_75%)]" />
                <svg className="w-36 h-36 text-text-muted/30 transition-transform duration-1000 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
                  <path d="M15 20 H85 V70 H15 Z" stroke="currentColor" strokeWidth="0.75" />
                  <path d="M30 70 V80 H70 V70" stroke="currentColor" strokeWidth="0.75" />
                  <path d="M25 80 H75" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="25" y1="30" x2="75" y2="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="0.5" />
                </svg>
                <div className="absolute bottom-3 left-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">CAP-01 / PORTFOLIO</span>
                </div>
              </div>
            </Reveal>
          </div>
          
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 order-1 lg:order-2">
            <Reveal direction="up" delay={0.15}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">01 / Personal Branding</span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight mt-2">
                PORTFOLIO WEBSITES
              </h2>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                Bespoke, high-performance portfolio sites crafted to build personal authority and showcase developer proof. Custom-designed typography systems with highly fluid page transitions.
              </p>
            </Reveal>

            <div className="space-y-4 pt-4 border-t border-border-custom/50">
              <Reveal direction="up" delay={0.2}>
                <div className="flex flex-wrap gap-1.5">
                  {["Personal Sites", "Editorial Archives", "Interactive Portfolios", "Responsive Visuals"].map((val) => (
                    <span key={val} className="font-mono text-[9px] uppercase border border-border-custom/80 px-2 py-0.5 rounded bg-surface text-text-muted">
                      {val}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.25}>
                <Link href="/work">
                  <Button variant="secondary" className="text-xs">VIEW SELECTED PORTFOLIOS &rarr;</Button>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>

        {/* CAPABILITY 02: BUSINESS WEBSITES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 order-1">
            <Reveal direction="up" delay={0.15}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">02 / Corporate Showcase</span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight mt-2">
                BUSINESS WEBSITES
              </h2>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                Premium corporate interfaces designed to present services, showcase products, and optimize contact conversion metrics. Clean code structures engineered for fast loading speeds.
              </p>
            </Reveal>

            <div className="space-y-4 pt-4 border-t border-border-custom/50">
              <Reveal direction="up" delay={0.2}>
                <div className="flex flex-wrap gap-1.5">
                  {["Corporate Portals", "Showcase Sites", "Dynamic Catalogues", "Product Landing Pages"].map((val) => (
                    <span key={val} className="font-mono text-[9px] uppercase border border-border-custom/80 px-2 py-0.5 rounded bg-surface text-text-muted">
                      {val}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.25}>
                <Link href="/work">
                  <Button variant="secondary" className="text-xs">VIEW BUSINESS PROJECTS &rarr;</Button>
                </Link>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end order-2">
            <Reveal direction="up" delay={0.1}>
              <div className="relative w-full max-w-md aspect-video border border-border-custom bg-background rounded-lg flex items-center justify-center shadow-lg group overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,89,255,0.02)_0%,transparent_75%)]" />
                <svg className="w-36 h-36 text-text-muted/30 transition-transform duration-1000 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
                  <rect x="20" y="25" width="60" height="40" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="20" y1="35" x2="80" y2="35" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="28" cy="30" r="1.5" fill="currentColor" />
                  <circle cx="34" cy="30" r="1.5" fill="currentColor" />
                  <circle cx="40" cy="30" r="1.5" fill="currentColor" />
                  <line x1="30" y1="45" x2="70" y2="45" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="30" y1="53" x2="60" y2="53" stroke="currentColor" strokeWidth="0.5" />
                </svg>
                <div className="absolute bottom-3 left-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">CAP-02 / BUSINESS</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* CAPABILITY 03: AI INTEGRATION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-start order-2 lg:order-1">
            <Reveal direction="up" delay={0.1}>
              <div className="relative w-full max-w-md aspect-video border border-border-custom bg-background rounded-lg flex items-center justify-center shadow-lg group overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,89,255,0.08)_0%,transparent_75%)]" />
                <svg className="w-36 h-36 text-text-muted/30 transition-transform duration-1000 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
                  <path d="M30 50 A20 20 0 1 0 70 50 A20 20 0 1 0 30 50" stroke="currentColor" strokeWidth="0.75" />
                  <path d="M40 50 H60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  <path d="M50 40 V60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="3" fill="var(--color-accent)" className="animate-pulse" />
                </svg>
                <div className="absolute bottom-3 left-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">CAP-03 / AI-INTEG</span>
                </div>
              </div>
            </Reveal>
          </div>
          
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 order-1 lg:order-2">
            <Reveal direction="up" delay={0.15}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">03 / Intelligent Automation</span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight mt-2">
                AI INTEGRATION
              </h2>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                Implementing AI practically as an accelerator for content production and web automation. Utilizing structured prompt architectures and API layers to configure tools tailored for workflows.
              </p>
            </Reveal>

            <div className="space-y-4 pt-4 border-t border-border-custom/50">
              <Reveal direction="up" delay={0.2}>
                <div className="flex flex-wrap gap-1.5">
                  {["API Integrations", "Workflow Automation", "LLM Configurations", "Prompt Engineering"].map((val) => (
                    <span key={val} className="font-mono text-[9px] uppercase border border-border-custom/80 px-2 py-0.5 rounded bg-surface text-text-muted">
                      {val}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.25}>
                <Link href="/ai-creative">
                  <Button variant="secondary" className="text-xs">EXPLORE AI &times; CREATIVE &rarr;</Button>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>

        {/* CAPABILITY 04: UI/UX DESIGN */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 order-1">
            <Reveal direction="up" delay={0.15}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">04 / Interface Balance</span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight mt-2">
                UI/UX DESIGN
              </h2>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                Structuring digital interface grids and wireframe maps in Figma before writing code. Aligning components around typography scales, fluid spaces, and stable layouts.
              </p>
            </Reveal>

            <div className="space-y-4 pt-4 border-t border-border-custom/50">
              <Reveal direction="up" delay={0.2}>
                <div className="flex flex-wrap gap-1.5">
                  {["Figma Mapping", "Typography Scales", "Responsive Grids", "Component Systems"].map((val) => (
                    <span key={val} className="font-mono text-[9px] uppercase border border-border-custom/80 px-2 py-0.5 rounded bg-surface text-text-muted">
                      {val}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.25}>
                <Link href="/work">
                  <Button variant="secondary" className="text-xs">VIEW DESIGN SAMPLES &rarr;</Button>
                </Link>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end order-2">
            <Reveal direction="up" delay={0.1}>
              <div className="relative w-full max-w-md aspect-video border border-border-custom bg-background rounded-lg flex items-center justify-center shadow-lg group overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,89,255,0.02)_0%,transparent_75%)]" />
                <svg className="w-36 h-36 text-text-muted/30 transition-transform duration-1000 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.75" />
                  <rect x="35" y="35" width="30" height="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                  <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" />
                </svg>
                <div className="absolute bottom-3 left-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">CAP-04 / UIUX-DSN</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* CAPABILITY 05: CREATIVE TECHNOLOGY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-start order-2 lg:order-1">
            <Reveal direction="up" delay={0.1}>
              <div className="relative w-full max-w-md aspect-video border border-border-custom bg-background rounded-lg flex items-center justify-center shadow-lg group overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,89,255,0.08)_0%,transparent_75%)]" />
                <svg className="w-36 h-36 text-text-muted/30 transition-transform duration-1000 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
                  <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="25" y1="25" x2="75" y2="75" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="75" y1="25" x2="25" y2="75" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="10" stroke="var(--color-accent)" strokeWidth="1" fill="var(--color-surface)" />
                </svg>
                <div className="absolute bottom-3 left-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">CAP-05 / CREATIVE</span>
                </div>
              </div>
            </Reveal>
          </div>
          
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 order-1 lg:order-2">
            <Reveal direction="up" delay={0.15}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">05 / Interactive Labs</span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight mt-2">
                CREATIVE TECHNOLOGY
              </h2>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                Exploring three-dimensional models, rich visual components, and custom CSS setups to bring interfaces to life. Combining technical scripts with web layouts.
              </p>
            </Reveal>

            <div className="space-y-4 pt-4 border-t border-border-custom/50">
              <Reveal direction="up" delay={0.2}>
                <div className="flex flex-wrap gap-1.5">
                  {["WebGL Explorations", "CSS Sculptures", "Rich Animations", "Interactive Prototypes"].map((val) => (
                    <span key={val} className="font-mono text-[9px] uppercase border border-border-custom/80 px-2 py-0.5 rounded bg-surface text-text-muted">
                      {val}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.25}>
                <Link href="/ai-creative">
                  <Button variant="secondary" className="text-xs">EXPLORE EXPERIMENTS &rarr;</Button>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
