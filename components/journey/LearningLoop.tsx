"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

const LOOP_STEPS = ["LEARN", "BUILD", "BREAK", "FIX", "REFINE", "REPEAT"];

export const LearningLoop: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative w-full py-20 md:py-32 bg-background border-t border-b border-border-custom overflow-hidden" aria-label="Learning loop cycle">
      {/* Light glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(10,89,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Typographic Steps Column */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal direction="up" delay={0.05}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                04 / Methodology
              </span>
              <h2 className="font-display text-4xl uppercase mt-4 mb-4">
                The Learning Loop
              </h2>
              <p className="font-sans text-sm text-text-muted max-w-md">
                Studying technology is not a linear roadmap. It is a continuous loop of creation, degradation, repair, and code refactoring.
              </p>
            </Reveal>

            {/* Vertical progressive words */}
            <div className="space-y-3 pt-6 border-t border-border-custom/50">
              {LOOP_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step}
                    onMouseEnter={() => setActiveStep(idx)}
                    className="flex items-center space-x-6 cursor-pointer select-none group"
                  >
                    <span className={`font-mono text-xs transition-colors duration-300 ${
                      isActive ? "text-accent font-bold" : "text-text-muted/40"
                    }`}>
                      0{idx + 1}
                    </span>
                    <h3 className={`font-display text-3xl sm:text-4xl uppercase tracking-tighter transition-all duration-300 ${
                      isActive
                        ? "text-foreground font-bold scale-105"
                        : "text-text-muted/30 group-hover:text-text-muted"
                    }`}>
                      {step}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3D Circular Loop Sculpture Column */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <Reveal direction="up" delay={0.15}>
              <div className="relative w-80 h-80 border border-border-custom bg-surface-muted/30 rounded-full flex items-center justify-center p-6 shadow-2xl group overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,89,255,0.05)_0%,transparent_75%)]" />
                
                {/* Rotating Circular SVG loop */}
                <svg className="w-56 h-56 text-text-muted/30 transition-transform duration-1000 group-hover:rotate-45" viewBox="0 0 100 100" fill="none">
                  {/* Central Core */}
                  <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.75" />
                  <circle cx="50" cy="50" r="2" fill="var(--color-accent)" className="animate-pulse" />
                  
                  {/* Circular Orbit ring */}
                  <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
                  
                  {/* 6 nodes representing loop stages */}
                  {LOOP_STEPS.map((step, idx) => {
                    const angle = (idx * 360) / LOOP_STEPS.length;
                    const rad = (angle * Math.PI) / 180;
                    const x = 50 + 30 * Math.cos(rad);
                    const y = 50 + 30 * Math.sin(rad);
                    const isActive = activeStep === idx;
                    
                    return (
                      <g key={step}>
                        <circle
                          cx={x}
                          cy={y}
                          r={isActive ? 3.5 : 2}
                          fill={isActive ? "var(--color-accent)" : "currentColor"}
                          className="transition-all duration-300"
                        />
                        {isActive && (
                          <circle
                            cx={x}
                            cy={y}
                            r="6"
                            stroke="var(--color-accent)"
                            strokeWidth="0.5"
                            className="animate-ping"
                          />
                        )}
                      </g>
                    );
                  })}
                </svg>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">AA / LNY-LOOP</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
