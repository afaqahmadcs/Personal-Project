"use client";

import React, { useState } from "react";
import { ProjectFilters } from "./ProjectFilters";
import { ProjectRow } from "./ProjectRow";
import { PROJECTS } from "@/lib/constants/projects";
import { Reveal } from "@/components/motion/Reveal";

export const ProjectList: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "WEB") return true; // all projects in our list are web development
    if (activeFilter === "BUSINESS") return project.category.includes("BUSINESS WEBSITE");
    if (activeFilter === "CLIENT") return project.status === "CLIENT";
    if (activeFilter === "EXPERIMENTS") return project.status === "EXPERIMENT";
    return true;
  });

  return (
    <section className="relative w-full py-12 md:py-20 bg-background" aria-label="Projects list archive">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Dynamic Project Filtering Bar */}
        <Reveal direction="none" delay={0.1}>
          <ProjectFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </Reveal>

        {/* List of dynamic rows */}
        <div className="mt-8 space-y-2">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))
          ) : (
            <Reveal direction="up" delay={0.15}>
              <div className="border border-border-custom border-dashed p-12 text-center text-text-muted font-mono text-xs uppercase tracking-widest rounded-lg">
                No matching projects found.
              </div>
            </Reveal>
          )}
        </div>

      </div>
    </section>
  );
};
