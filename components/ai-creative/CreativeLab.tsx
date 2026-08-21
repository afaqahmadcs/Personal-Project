"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export const CreativeLab: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 border-t border-b border-border-custom bg-surface-muted/10 overflow-hidden" aria-label="Afaq Ahmad Creative Laboratory">
      {/* Subtle light guides */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(10,89,255,0.04)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Laboratory Abstract 3D Scene Column (Left on Desktop) */}
          <div className="lg:col-span-7 flex justify-center order-2 lg:order-1">
            <Reveal direction="up" delay={0.15}>
              <div className="w-full max-w-lg aspect-video border border-border-custom bg-background rounded-lg shadow-2xl overflow-hidden flex items-center justify-center p-8 relative group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,89,255,0.04)_0%,transparent_75%)]" />
                
                {/* 3D wireframe laboratory visual mapping */}
                <svg className="w-64 h-64 text-text-muted/30 transition-transform duration-1000 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
                  {/* Floating panels */}
                  <rect x="15" y="15" width="40" height="30" rx="2" stroke="currentColor" strokeWidth="0.5" fill="var(--color-surface)" fillOpacity="0.2" />
                  <rect x="45" y="45" width="40" height="30" rx="2" stroke="currentColor" strokeWidth="0.5" fill="var(--color-surface)" fillOpacity="0.3" />
                  {/* Connection vector coordinates */}
                  <path d="M35 45 L45 45 M55 15 L55 45" stroke="var(--color-accent)" strokeWidth="0.5" strokeDasharray="2 2" />
                  <circle cx="55" cy="45" r="2" fill="var(--color-accent)" className="animate-ping" />
                  <circle cx="55" cy="45" r="1.5" fill="var(--color-accent)" />
                </svg>

                <div className="absolute bottom-3 left-4">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-text-muted">
                    LAB / SCENE-3D
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Details Column (Right on Desktop) */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <Reveal direction="up" delay={0.05}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                06 / Physical Studio
              </span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase mt-2">
                Creative Lab
              </h2>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                A physical-looking digital canvas representing the trajectory of abstract concepts as they transform from initial ideas, through generative iterations, to fully structured digital modules.
              </p>
            </Reveal>

            {/* Steps list */}
            <div className="space-y-4 pt-4 border-t border-border-custom/50">
              <Reveal direction="up" delay={0.1}>
                <div className="flex items-center space-x-4 font-mono text-[9px] uppercase tracking-wider text-text-muted select-none">
                  <span>IDEA</span>
                  <span>&rarr;</span>
                  <span className="text-accent font-bold">EXPERIMENT</span>
                  <span>&rarr;</span>
                  <span className="text-foreground font-bold">RESULT</span>
                </div>
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
