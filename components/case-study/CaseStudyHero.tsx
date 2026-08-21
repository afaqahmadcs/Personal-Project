"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { Project } from "@/lib/constants/projects";

interface CaseStudyHeroProps {
  project: Project;
}

export const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ project }) => {
  // Render specific 3D SVG sculpture based on the project slug
  const render3DObject = () => {
    switch (project.slug) {
      case "afaq-ahmad-real-estate":
        return (
          // Architectural Structure
          <svg className="w-56 h-56 text-accent group-hover:rotate-6 transition-transform duration-1000" viewBox="0 0 100 100" fill="none">
            {/* Ground grid lines */}
            <line x1="10" y1="80" x2="90" y2="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            {/* Columns and glass planes */}
            <rect x="25" y="20" width="15" height="60" stroke="currentColor" strokeWidth="0.75" fill="var(--color-surface)" fillOpacity="0.2" />
            <rect x="60" y="30" width="15" height="50" stroke="currentColor" strokeWidth="0.75" fill="var(--color-surface)" fillOpacity="0.3" />
            <polygon points="25,20 60,30 75,30 40,20" fill="var(--color-surface)" fillOpacity="0.1" stroke="currentColor" strokeWidth="0.5" />
            {/* Glowing nodes */}
            <circle cx="25" cy="20" r="1.5" fill="var(--color-accent)" />
            <circle cx="60" cy="30" r="1.5" fill="var(--color-accent)" />
            <circle cx="40" cy="80" r="2.5" fill="var(--color-accent)" className="animate-pulse" />
          </svg>
        );
      case "luxury-car-business-website":
        return (
          // Precision Metallic Automotive-inspired Geometry
          <svg className="w-56 h-56 text-foreground group-hover:scale-105 transition-transform duration-1000" viewBox="0 0 100 100" fill="none">
            {/* Aerodynamic curves and wheel indicators */}
            <path d="M15 65 C 25 35, 75 35, 85 65" stroke="currentColor" strokeWidth="1" />
            <path d="M20 70 H 80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="30" cy="65" r="10" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="70" cy="65" r="10" stroke="currentColor" strokeWidth="0.75" />
            {/* Metallic shine line */}
            <path d="M30 40 L70 45" stroke="var(--color-accent)" strokeWidth="0.75" />
            <circle cx="50" cy="42.5" r="2" fill="var(--color-accent)" />
          </svg>
        );
      case "business-website":
        return (
          // Structured Digital Architecture
          <svg className="w-56 h-56 text-text-muted/50 group-hover:rotate-3 transition-transform duration-1000" viewBox="0 0 100 100" fill="none">
            {/* Floating content blocks */}
            <rect x="20" y="20" width="30" height="25" stroke="currentColor" strokeWidth="0.75" fill="var(--color-surface)" fillOpacity="0.2" />
            <rect x="55" y="35" width="30" height="25" stroke="currentColor" strokeWidth="0.75" fill="var(--color-surface)" fillOpacity="0.3" />
            <rect x="35" y="65" width="30" height="15" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 1" />
            {/* Flow lines */}
            <path d="M35 45 V 65 M70 60 V 65" stroke="var(--color-accent)" strokeWidth="0.75" />
            <circle cx="35" cy="65" r="1.5" fill="var(--color-accent)" />
          </svg>
        );
      case "premium-luxury-car-business-website":
        return (
          // Premium Metallic Geometric Sculpture
          <svg className="w-56 h-56 text-foreground group-hover:-rotate-3 transition-transform duration-1000" viewBox="0 0 100 100" fill="none">
            {/* Concentric rings */}
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5" />
            <polygon points="50,20 65,50 50,80 35,50" fill="var(--color-surface)" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="2.5" fill="var(--color-accent)" className="animate-ping" />
          </svg>
        );
      case "gemstone-project":
        return (
          // Abstract Sapphire/Crystal Structure
          <svg className="w-56 h-56 text-accent group-hover:rotate-12 transition-transform duration-1000" viewBox="0 0 100 100" fill="none">
            {/* Gem cut wireframes with deep sapphire lighting nodes */}
            <polygon points="50,15 80,35 80,65 50,85 20,65 20,35" stroke="currentColor" strokeWidth="0.75" fill="var(--color-accent-soft)" fillOpacity="0.2" />
            <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="0.5" />
            <line x1="20" y1="35" x2="80" y2="35" stroke="currentColor" strokeWidth="0.5" />
            <line x1="20" y1="65" x2="80" y2="65" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="3" fill="var(--color-accent)" className="animate-pulse" />
          </svg>
        );
      default:
        return (
          <svg className="w-56 h-56 text-text-muted/30" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.75" />
          </svg>
        );
    }
  };

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-center py-16 md:py-24 bg-background overflow-hidden" aria-label="Case study page hero">
      {/* Background glow specific to project */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12 w-full">
        {/* Dynamic metadata top */}
        <div className="border-b border-border-custom pb-6 mb-12 flex items-center justify-between">
          <Reveal direction="none" delay={0.05}>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
              Project / {project.number}
            </span>
          </Reveal>
          <Reveal direction="none" delay={0.05}>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              {project.category}
            </span>
          </Reveal>
        </div>

        {/* Hero split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Typographic details */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="up" delay={0.1}>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none">
                {project.title}
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="font-sans text-lg text-text-muted max-w-xl leading-relaxed">
                {project.shortDescription}
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal direction="up" delay={0.28}>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                {project.liveUrl && (
                  <Link href={project.liveUrl}>
                    <Button variant="primary" className="px-6 py-3">
                      View Live Project &rarr;
                    </Button>
                  </Link>
                )}
                {project.githubUrl && (
                  <Link href={project.githubUrl}>
                    <Button variant="secondary" className="px-6 py-3">
                      View GitHub &rarr;
                    </Button>
                  </Link>
                )}
              </div>
            </Reveal>
          </div>

          {/* 3D Visual Sculpture */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal direction="up" delay={0.35}>
              <div className="relative w-80 h-80 border border-border-custom bg-surface-muted/30 rounded-xl flex items-center justify-center p-6 shadow-2xl group overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,89,255,0.04)_0%,transparent_75%)]" />
                {render3DObject()}
                <div className="absolute bottom-4 left-5">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">AA / 3D-MODEL</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
