"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { EXPERIMENTS } from "@/lib/constants/experiments";

export const ExperimentArchive: React.FC = () => {
  const [activeExp, setActiveExp] = useState<string | null>(null);

  // Return icons per category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "UI":
        return (
          <svg className="w-8 h-8 text-accent" viewBox="0 0 100 100" fill="none">
            <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="1" />
            <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        );
      case "IMAGE":
        return (
          <svg className="w-8 h-8 text-foreground" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" />
            <polygon points="50,25 65,50 35,50" fill="var(--color-surface)" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        );
      case "CODE":
        return (
          <svg className="w-8 h-8 text-text-muted/60" viewBox="0 0 100 100" fill="none">
            <path d="M30 40 L20 50 L30 60 M70 40 L80 50 L70 60" stroke="currentColor" strokeWidth="1" />
            <line x1="45" y1="65" x2="55" y2="35" stroke="currentColor" strokeWidth="0.75" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-text-muted/40" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1" />
          </svg>
        );
    }
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-background" aria-label="Afaq Ahmad AI experiments archive">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <Reveal direction="up" delay={0.05}>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
              Interactive Catalog
            </span>
            <h2 className="font-display text-4xl uppercase mt-4 mb-4">
              Experiments Archive
            </h2>
            <p className="font-sans text-sm text-text-muted">
              A list of minor scripts, layouts, and style parameters exploring interactive technologies.
            </p>
          </Reveal>
        </div>

        {/* List of experiments */}
        <div className="border-t border-border-custom pt-8 space-y-4">
          {EXPERIMENTS.map((exp, idx) => {
            const isExpanded = activeExp === exp.id;
            return (
              <Reveal key={exp.id} direction="up" delay={idx * 0.05}>
                <div
                  onClick={() => setActiveExp(isExpanded ? null : exp.id)}
                  onMouseEnter={() => setActiveExp(exp.id)}
                  onMouseLeave={() => setActiveExp(null)}
                  className="group border-b border-border-custom/50 pb-4 cursor-pointer hover:border-accent transition-colors duration-300"
                >
                  {/* Row header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-2">
                    <div className="flex items-center space-x-6">
                      <span className="font-mono text-xs text-text-muted select-none">{exp.number}</span>
                      <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight group-hover:text-accent transition-colors duration-300">
                        {exp.title}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-4 pl-8 sm:pl-0">
                      <span className="font-mono text-[9px] uppercase tracking-widest border border-border-custom px-2 py-0.5 rounded bg-surface-muted text-text-muted">
                        {exp.category}
                      </span>
                      <span className="font-mono text-[8px] uppercase tracking-wider text-accent font-bold">
                        {exp.status}
                      </span>
                    </div>
                  </div>

                  {/* Expanding Drawer Content */}
                  <AnimatePresence>
                    {(isExpanded || typeof window !== "undefined" && window.innerWidth < 1024) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden mt-4 pl-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                      >
                        {/* Icon/Visual slot */}
                        <div className="md:col-span-3 border border-border-custom bg-surface-muted p-6 rounded flex items-center justify-center">
                          {getCategoryIcon(exp.category)}
                        </div>

                        {/* Details */}
                        <div className="md:col-span-9 space-y-3">
                          <p className="font-sans text-xs text-text-muted leading-relaxed max-w-xl">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {exp.tools.map((tool) => (
                              <span key={tool} className="font-mono text-[8px] uppercase text-foreground font-semibold px-2">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
