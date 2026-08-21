"use client";

import React from "react";
import { Link } from "../ui/Link";
import { BRAND } from "@/lib/constants/brand";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border-custom bg-surface-muted py-12 md:py-20 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Identity column */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <span className="font-display text-lg font-black uppercase tracking-tighter">
              {BRAND.name}
            </span>
            <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
              {BRAND.title}
            </p>
            <p className="font-sans text-sm text-text-muted max-w-sm">
              Exploring the intersection of structured software engineering and custom AI implementations.
            </p>
          </div>

          {/* Location / Context Column */}
          <div className="flex flex-col space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
              Location
            </span>
            <p className="font-sans text-sm text-foreground">
              {BRAND.location}
            </p>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted pt-2">
              Philosophy
            </span>
            <p className="font-mono text-[10px] uppercase tracking-wider text-foreground">
              {BRAND.philosophy.join(" → ")}
            </p>
          </div>

          {/* Social connections column */}
          <div className="flex flex-col space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
              Connect
            </span>
            <div className="flex flex-col space-y-2">
              <Link href={BRAND.socials.github} variant="social" arrow="up-right">
                GitHub
              </Link>
              <Link href={BRAND.socials.linkedin} variant="social" arrow="up-right">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Closing row */}
        <div className="mt-16 md:mt-24 border-t border-border-custom pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
            &copy; {currentYear} Afaq Ahmad. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted font-bold">
            BUILD &bull; CREATE &bull; EXPLORE
          </p>
        </div>
      </div>
    </footer>
  );
};
Footer.displayName = "Footer";
