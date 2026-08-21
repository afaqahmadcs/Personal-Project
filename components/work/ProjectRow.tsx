"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { ProjectVisual } from "./ProjectVisual";
import { Project } from "@/lib/constants/projects";

interface ProjectRowProps {
  project: Project;
}

export const ProjectRow: React.FC<ProjectRowProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="border-b border-border-custom py-6 md:py-8 transition-colors duration-300 hover:border-accent"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Row Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
        
        {/* Number & Title (Dominant Typography) */}
        <div className="lg:col-span-5 flex items-baseline space-x-4">
          <span className="font-mono text-xs text-text-muted select-none">{project.number}</span>
          <div className="space-y-1">
            <Link href={`/work/${project.slug}`} className="hover:text-accent focus:outline-none">
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight transition-colors duration-300">
                {project.title}
              </h3>
            </Link>
            <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted block lg:hidden">
              {project.category}
            </span>
          </div>
        </div>

        {/* Category (Desktop only) */}
        <div className="hidden lg:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
            {project.category}
          </span>
        </div>

        {/* Technologies Stack */}
        <div className="lg:col-span-2 pl-6 lg:pl-0">
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="font-mono text-[8px] uppercase border border-border-custom px-1.5 py-0.5 rounded bg-surface text-text-muted">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions (View site / Case study) */}
        <div className="lg:col-span-2 flex flex-wrap items-center gap-4 pl-6 lg:pl-0 lg:justify-end">
          {project.liveUrl && (
            <Link href={project.liveUrl} variant="minimal" arrow="up-right" className="font-mono text-[9px] uppercase tracking-widest text-text-muted hover:text-accent">
              Live Site
            </Link>
          )}
          <Link href={`/work/${project.slug}`} variant="minimal" arrow="right" className="font-mono text-[9px] uppercase tracking-widest font-bold">
            Study
          </Link>
        </div>

      </div>

      {/* Visual Preview Drawer (Framer Motion Drawer) */}
      <AnimatePresence>
        {(isHovered || typeof window !== "undefined" && window.innerWidth < 1024) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden mt-6 lg:mt-8 px-6 lg:px-12"
          >
            <div className="max-w-2xl mx-auto">
              <ProjectVisual
                slug={project.slug}
                title={project.title}
                liveUrl={project.liveUrl}
                status={project.status}
              />
              <p className="font-sans text-xs text-text-muted leading-relaxed mt-4">
                {project.shortDescription}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
