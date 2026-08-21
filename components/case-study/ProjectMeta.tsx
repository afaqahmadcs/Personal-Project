"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Project } from "@/lib/constants/projects";

interface ProjectMetaProps {
  project: Project;
}

export const ProjectMeta: React.FC<ProjectMetaProps> = ({ project }) => {
  return (
    <section className="relative w-full py-8 border-t border-b border-border-custom bg-surface-muted/20" aria-label="Project Case Study Metadata">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Metadata: Role */}
          <Reveal direction="up" delay={0.05}>
            <div className="space-y-1">
              <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">My Role</span>
              <p className="font-sans text-sm font-semibold">{project.role}</p>
            </div>
          </Reveal>

          {/* Metadata: Year */}
          {project.year && (
            <Reveal direction="up" delay={0.1}>
              <div className="space-y-1">
                <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">Year</span>
                <p className="font-sans text-sm font-semibold">{project.year}</p>
              </div>
            </Reveal>
          )}

          {/* Metadata: Status */}
          <Reveal direction="up" delay={0.15}>
            <div className="space-y-1">
              <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">Project Status</span>
              <p className="font-sans text-sm font-semibold uppercase">{project.status}</p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="space-y-1">
              <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">06 / Technology</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="font-mono text-[8px] uppercase border border-border-custom px-1.5 py-0.5 rounded bg-surface">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
