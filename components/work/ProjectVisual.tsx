"use client";

import React from "react";

interface ProjectVisualProps {
  slug: string;
  title: string;
  liveUrl?: string;
  status: "LIVE" | "CLIENT" | "EXPERIMENT";
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ slug, title, liveUrl, status }) => {
  // We customize the visual sculpture / geometry per project slug
  const getSculpture = () => {
    switch (slug) {
      case "afaq-ahmad-real-estate":
        return (
          // Architectural/real estate geometry
          <svg className="w-32 h-32 text-accent" viewBox="0 0 100 100" fill="none">
            <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="0.75" />
            <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="0.5" />
            <line x1="80" y1="20" x2="20" y2="80" stroke="currentColor" strokeWidth="0.5" />
            <polygon points="50,20 80,50 50,80 20,50" fill="var(--color-surface)" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="3" fill="var(--color-accent)" />
          </svg>
        );
      case "luxury-car-business-website":
      case "premium-luxury-car-business-website":
        return (
          // Smooth metallic curves representing aerodynamic contours
          <svg className="w-32 h-32 text-foreground" viewBox="0 0 100 100" fill="none">
            <path d="M20 60 C 35 30, 65 30, 80 60" stroke="currentColor" strokeWidth="1" />
            <path d="M25 65 C 35 45, 65 45, 75 65" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="35" cy="60" r="8" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="65" cy="60" r="8" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="50" cy="45" r="2" fill="var(--color-accent)" className="animate-pulse" />
          </svg>
        );
      case "business-website":
        return (
          // Clean structural column / bar grids representing corporate structure
          <svg className="w-32 h-32 text-text-muted/60" viewBox="0 0 100 100" fill="none">
            <line x1="20" y1="80" x2="80" y2="80" stroke="currentColor" strokeWidth="1" />
            <rect x="25" y="30" width="10" height="50" stroke="currentColor" strokeWidth="0.75" fill="var(--color-surface)" fillOpacity="0.2" />
            <rect x="45" y="20" width="10" height="60" stroke="currentColor" strokeWidth="0.75" fill="var(--color-surface)" fillOpacity="0.4" />
            <rect x="65" y="40" width="10" height="40" stroke="currentColor" strokeWidth="0.75" fill="var(--color-surface)" fillOpacity="0.2" />
            <line x1="20" y1="20" x2="80" y2="20" stroke="var(--color-accent)" strokeWidth="0.5" strokeDasharray="3 2" />
          </svg>
        );
      case "gemstone-project":
        return (
          // Gemstone crystal glass geometry (with subtle sapphire blue accent)
          <svg className="w-32 h-32 text-accent" viewBox="0 0 100 100" fill="none">
            {/* Emerald/Diamond cuts shape */}
            <polygon points="50,15 80,35 80,65 50,85 20,65 20,35" stroke="currentColor" strokeWidth="1" fill="var(--color-accent-soft)" fillOpacity="0.2" />
            <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="0.5" />
            <line x1="20" y1="35" x2="80" y2="35" stroke="currentColor" strokeWidth="0.5" />
            <line x1="20" y1="65" x2="80" y2="65" stroke="currentColor" strokeWidth="0.5" />
            <line x1="20" y1="35" x2="50" y2="85" stroke="currentColor" strokeWidth="0.5" />
            <line x1="80" y1="35" x2="50" y2="85" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="3.5" fill="var(--color-accent)" />
          </svg>
        );
      default:
        return (
          // Default minimal dynamic wireframe
          <svg className="w-32 h-32 text-text-muted/40" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.75" />
            <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5" />
            <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        );
    }
  };

  return (
    <div className="w-full relative group border border-border-custom bg-surface rounded-lg overflow-hidden flex flex-col p-6 shadow-xl aspect-video justify-center items-center">
      {/* Top Browser Bar Frame Simulation (Editorial browser mockup) */}
      <div className="absolute top-0 left-0 w-full h-8 border-b border-border-custom bg-surface-muted px-4 flex items-center justify-between select-none">
        <div className="flex space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-border-custom" />
          <span className="w-2.5 h-2.5 rounded-full bg-border-custom" />
          <span className="w-2.5 h-2.5 rounded-full bg-border-custom" />
        </div>
        <div className="font-mono text-[9px] text-text-muted truncate max-w-[200px]">
          {liveUrl || "http://localhost:3000"}
        </div>
        <span className="w-3 h-3 block" />
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_20px] pointer-events-none" />

      {/* Real-time Visual geometry center */}
      <div className="flex flex-col items-center justify-center space-y-4 pt-6 select-none group-hover:scale-105 transition-transform duration-500 ease-out">
        {getSculpture()}
        <div className="text-center space-y-1">
          <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold">
            {status} / Showcase
          </span>
          <h4 className="font-display text-sm uppercase tracking-tight text-foreground">
            {title}
          </h4>
        </div>
      </div>
    </div>
  );
};
