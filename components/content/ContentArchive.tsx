"use client";

import React, { useState } from "react";
import { ContentFilters } from "./ContentFilters";
import { ARTICLES } from "@/lib/constants/content";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";

export const ContentArchive: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredArticles = ARTICLES.filter((article) => {
    if (activeFilter === "ALL") return true;
    return article.category === activeFilter;
  });

  return (
    <section className="relative w-full py-12 md:py-20 bg-background" aria-label="Content publication archive">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Category filtering bar */}
        <Reveal direction="none" delay={0.1}>
          <ContentFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </Reveal>

        {/* Archive Display */}
        <div className="mt-12">
          {filteredArticles.length > 0 ? (
            <div className="space-y-6">
              {/* Dynamic row loop if articles existed */}
              {filteredArticles.map((art) => (
                <div key={art.slug} className="border-b border-border-custom pb-6 hover:border-accent transition-colors duration-300">
                  <span className="font-mono text-xs text-accent font-bold mb-2 block">{art.date}</span>
                  <Link href={`/content/${art.slug}`}>
                    <h3 className="font-display text-2xl uppercase hover:text-accent transition-colors duration-300">
                      {art.title}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            // Polish Editorial Empty State (Truthful and custom-tailored)
            <Reveal direction="up" delay={0.15}>
              <div className="border border-border-custom border-dashed rounded-lg p-12 md:p-20 text-center flex flex-col items-center justify-center space-y-6 relative overflow-hidden">
                <div className="absolute top-4 right-6">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-text-muted">AA / LOG-INIT</span>
                </div>

                {/* Abstract Glass Accent Geometry */}
                <svg className="w-16 h-16 text-text-muted/30" viewBox="0 0 100 100" fill="none">
                  <polygon points="50,20 80,45 80,75 50,90 20,75 20,45" stroke="currentColor" strokeWidth="0.75" />
                  <rect x="35" y="35" width="30" height="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 2" fill="var(--color-surface)" fillOpacity="0.2" />
                </svg>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-foreground">
                    Building The <br />
                    <span className="text-text-muted">First Chapter.</span>
                  </h3>
                  <p className="font-sans text-xs text-text-muted max-w-sm mx-auto leading-relaxed">
                    New experiments, programming notes, and creative logs are currently in drafting. Once compiled, technical briefs will be catalogued here.
                  </p>
                </div>

                <div className="pt-4">
                  <Link href="/work">
                    <Button variant="secondary">Explore My Work &rarr;</Button>
                  </Link>
                </div>
              </div>
            </Reveal>
          )}
        </div>

      </div>
    </section>
  );
};
