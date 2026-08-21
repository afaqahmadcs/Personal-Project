"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/components/ui/Link";
import { JOURNEY_STAGES } from "@/lib/constants/journey";

export const JourneyTimeline: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStage = JOURNEY_STAGES[activeIdx];

  // Render project-specific SVG blueprint indicators per stage
  const renderStageVisual = (id: string) => {
    switch (id) {
      case "stage-01":
        return (
          // Foundation: simple geometric cube structure
          <svg className="w-40 h-40 text-text-muted/40" viewBox="0 0 100 100" fill="none">
            <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="50" cy="50" r="3" fill="var(--color-accent)" />
          </svg>
        );
      case "stage-02":
        return (
          // Web building: horizontal interface blueprint layers
          <svg className="w-40 h-40 text-foreground" viewBox="0 0 100 100" fill="none">
            <line x1="15" y1="30" x2="85" y2="30" stroke="currentColor" strokeWidth="1" />
            <line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="0.75" />
            <line x1="15" y1="70" x2="85" y2="70" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          </svg>
        );
      case "stage-03":
        return (
          // Modern stack: layered visual structure maps
          <svg className="w-40 h-40 text-accent" viewBox="0 0 100 100" fill="none">
            <polygon points="50,15 85,35 50,55 15,35" fill="var(--color-surface)" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.75" />
            <polygon points="50,45 85,65 50,85 15,65" fill="var(--color-surface)" fillOpacity="0.4" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="50" cy="50" r="2" fill="var(--color-accent)" />
          </svg>
        );
      case "stage-04":
        return (
          // Backend: Client -> Server -> Database pipeline
          <svg className="w-40 h-40 text-text-muted/60" viewBox="0 0 100 100" fill="none">
            <rect x="15" y="35" width="20" height="30" stroke="currentColor" strokeWidth="0.75" />
            <rect x="45" y="35" width="20" height="30" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="75" cy="50" r="10" stroke="currentColor" strokeWidth="0.75" />
            <path d="M35 50 H45 M65 50 H75" stroke="var(--color-accent)" strokeWidth="0.75" strokeDasharray="2 2" />
          </svg>
        );
      case "stage-05":
        return (
          // AI: prompt connection flows
          <svg className="w-40 h-40 text-accent" viewBox="0 0 100 100" fill="none">
            <path d="M20 50 Q50 20 80 50" stroke="currentColor" strokeWidth="0.75" />
            <path d="M20 50 Q50 80 80 50" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="50" cy="50" r="2.5" fill="currentColor" className="animate-pulse" />
          </svg>
        );
      case "stage-06":
        return (
          // Projects: connected matrix shapes
          <svg className="w-40 h-40 text-foreground" viewBox="0 0 100 100" fill="none">
            <rect x="20" y="20" width="25" height="25" stroke="currentColor" strokeWidth="0.75" />
            <rect x="55" y="20" width="25" height="25" stroke="currentColor" strokeWidth="0.75" />
            <rect x="37.5" y="55" width="25" height="25" stroke="currentColor" strokeWidth="0.75" />
            <line x1="32.5" y1="45" x2="37.5" y2="55" stroke="var(--color-accent)" strokeWidth="0.5" />
            <line x1="67.5" y1="45" x2="62.5" y2="55" stroke="var(--color-accent)" strokeWidth="0.5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-background overflow-hidden" aria-label="Development milestones timeline">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Reveal direction="up" delay={0.05}>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              01 / Progression
            </span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase mt-4 mb-4">
              Development Path
            </h2>
            <p className="font-sans text-sm text-text-muted">
              Visualizing the transition from intermediate academic foundations to self-taught full-stack building paradigms.
            </p>
          </Reveal>
        </div>

        {/* Desktop Chronological Index Row */}
        {/* Layout: 01 ─────── 02 ─────── 03 ─────── 04 ─────── 05 ─────── 06 */}
        <div className="hidden lg:block relative mb-16">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-border-custom" aria-hidden="true" />
          
          <div className="relative flex justify-between">
            {JOURNEY_STAGES.map((stage, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`relative z-10 w-10 h-10 rounded-full border transition-all duration-300 cursor-pointer flex items-center justify-center font-mono text-xs ${
                    isActive
                      ? "border-accent bg-accent-soft text-accent font-bold scale-110"
                      : "border-border-custom bg-background hover:border-text-muted text-text-muted"
                  }`}
                >
                  {stage.num}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Display Panel for Desktop */}
        <div className="hidden lg:block border border-border-custom bg-surface-muted/30 p-12 rounded-lg min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-12 gap-8 items-center"
            >
              {/* Left Side: Custom visual shape representation */}
              <div className="col-span-5 flex justify-center">
                {renderStageVisual(activeStage.id)}
              </div>

              {/* Right Side: Narrative */}
              <div className="col-span-7 space-y-4">
                <span className="font-mono text-xs text-accent font-bold" dangerouslySetInnerHTML={{ __html: activeStage.year }} />
                
                <h3 className="font-display text-3xl uppercase tracking-tight">
                  {activeStage.title}
                </h3>
                
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">Focus Area:</span>
                  <span className="font-sans text-xs font-semibold text-foreground">{activeStage.focus}</span>
                </div>

                <p className="font-sans text-sm text-text-muted leading-relaxed max-w-xl">
                  {activeStage.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-4">
                  {activeStage.technologies.map((tech) => (
                    <span key={tech} className="font-mono text-[9px] uppercase border border-border-custom/80 px-2 py-0.5 rounded bg-background text-text-muted">
                      {tech}
                    </span>
                  ))}
                </div>

                {activeStage.relatedPage && (
                  <div className="pt-4">
                    <Link href={activeStage.relatedPage} variant="minimal" arrow="right" className="font-mono text-xs uppercase tracking-widest font-bold">
                      Explore this aspect
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Chronological Stack (Vertical Timeline) */}
        <div className="block lg:hidden space-y-12 pl-6 relative before:absolute before:left-[11px] before:top-2 before:h-full before:w-[1px] before:bg-border-custom">
          {JOURNEY_STAGES.map((stage) => (
            <Reveal key={stage.id} direction="up" delay={0.05}>
              <div className="relative space-y-3">
                {/* Timeline node dot */}
                <span className="absolute -left-[20px] top-1 w-2.5 h-2.5 rounded-full bg-background border-2 border-accent" />
                
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-accent font-bold" dangerouslySetInnerHTML={{ __html: stage.year }} />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">{stage.category}</span>
                </div>

                <h3 className="font-display text-2xl uppercase tracking-tight">
                  {stage.title}
                </h3>

                <p className="font-sans text-xs text-text-muted leading-relaxed">
                  {stage.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {stage.technologies.map((tech) => (
                    <span key={tech} className="font-mono text-[8px] uppercase border border-border-custom px-1.5 py-0.5 rounded bg-surface-muted text-text-muted">
                      {tech}
                    </span>
                  ))}
                </div>

                {stage.relatedPage && (
                  <div className="pt-2">
                    <Link href={stage.relatedPage} variant="minimal" arrow="right" className="font-mono text-[9px] uppercase tracking-widest font-bold">
                      View details
                    </Link>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
