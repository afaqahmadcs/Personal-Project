"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

const ENGINE_LAYERS = [
  { name: "IDEA", num: "01", color: "text-foreground", desc: "A core problem, visual direction, or interface goal." },
  { name: "PROMPT", num: "02", color: "text-text-muted", desc: "Translating thoughts into structured inputs." },
  { name: "GENERATE", num: "03", color: "text-accent", desc: "Coordinating LLM or image nodes." },
  { name: "REFINE", num: "04", color: "text-text-muted", desc: "Applying human judgment to prune outputs." },
  { name: "BUILD", num: "05", color: "text-foreground", desc: "Deploying code files into solid assets." }
];

export const AICreativeHero: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <section className="relative w-full py-16 md:py-24 bg-background overflow-hidden" aria-label="AI Creative Hero Section">
      {/* Immersive background cobalt light nodes */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Metadata tag */}
        <div className="border-b border-border-custom pb-6 mb-12 flex justify-between items-center">
          <Reveal direction="none" delay={0.05}>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
              AI &times; CREATIVE / 05 &bull; Personal Lab
            </span>
          </Reveal>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Typography Column */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal direction="up" delay={0.1}>
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-none tracking-tighter">
                AI <br />
                <span className="text-text-muted">&times; CREATIVE</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <h2 className="font-sans text-xl md:text-2xl text-foreground font-semibold leading-tight max-w-lg">
                Experimenting at the edge of code, design and AI.
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="font-sans text-base text-text-muted leading-relaxed max-w-md">
                Exploring how modern generative tools, automated script loaders, and neural models augment full-stack engineering logic and visual creation workflows.
              </p>
            </Reveal>
          </div>

          {/* Interactive Multi-Layer 3D Creative Engine Column */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <Reveal direction="up" delay={0.35}>
              <div className="relative w-80 h-96 border border-border-custom bg-surface-muted/30 rounded-xl flex flex-col justify-center items-center p-6 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,89,255,0.06)_0%,transparent_75%)]" />
                
                {/* 3D Glass Layer engine stack */}
                <div className="w-full space-y-4 relative z-10">
                  {ENGINE_LAYERS.map((layer, idx) => {
                    const isHovered = activeLayer === idx;
                    return (
                      <div
                        key={layer.name}
                        onMouseEnter={() => setActiveLayer(idx)}
                        onMouseLeave={() => setActiveLayer(null)}
                        className="relative border border-border-custom bg-surface/50 p-4 rounded-lg cursor-pointer hover:border-accent hover:shadow-xl transition-all duration-300 select-none group/layer"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <span className="font-mono text-[9px] text-text-muted">{layer.num}</span>
                            <span className={`font-display text-lg tracking-wider uppercase ${layer.color} group-hover/layer:text-accent transition-colors duration-300`}>
                              {layer.name}
                            </span>
                          </div>
                          {/* Small neon node */}
                          <span className={`w-1.5 h-1.5 rounded-full bg-border-custom transition-colors duration-300 ${
                            isHovered ? "bg-accent animate-pulse" : ""
                          }`} />
                        </div>
                        {isHovered && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="font-sans text-[10px] text-text-muted mt-2 leading-relaxed"
                          >
                            {layer.desc}
                          </motion.p>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="absolute bottom-3 left-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">ENG / GEN-3D</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
