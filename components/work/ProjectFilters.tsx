"use client";

import React from "react";

interface ProjectFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FILTERS = ["ALL", "WEB", "BUSINESS", "CLIENT", "EXPERIMENTS"];

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap items-center gap-3 py-6 border-b border-border-custom/50">
      <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted mr-4">
        Filter Archive:
      </span>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`font-mono text-[10px] uppercase tracking-wider px-3 py-1 border transition-colors duration-300 cursor-pointer rounded ${
                isActive
                  ? "border-accent bg-accent-soft text-accent font-bold"
                  : "border-border-custom hover:border-text-muted text-text-muted"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
};
