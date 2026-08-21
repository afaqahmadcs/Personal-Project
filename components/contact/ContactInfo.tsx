"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { CustomImage } from "@/components/media/CustomImage";
import { Link } from "@/components/ui/Link";

export const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Profile portrait frame */}
      <Reveal direction="up" delay={0.15}>
        <div className="relative w-full max-w-sm border border-border-custom bg-surface p-2 shadow-xl rounded-lg group mx-auto lg:mx-0">
          <CustomImage
            src="/images/profile/indoor-lobby.jpg"
            alt="Afaq Ahmad inside lobby — Build the future"
            aspectRatio="editorial"
            hoverZoom={true}
            className="rounded"
          />
        </div>
      </Reveal>

      {/* Direct Contact Metadata */}
      <div className="space-y-4 pt-6 border-t border-border-custom/50">
        <Reveal direction="up" delay={0.2}>
          <div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">Identity</span>
            <h4 className="font-display text-lg uppercase mt-1 text-foreground">Afaq Ahmad</h4>
            <p className="font-mono text-[10px] uppercase text-accent font-bold mt-0.5">
              AI &amp; Full Stack Developer
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.25}>
          <div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">Location</span>
            <p className="font-sans text-sm font-semibold mt-1">Peshawar, Pakistan</p>
          </div>
        </Reveal>

        {/* Online socials */}
        <Reveal direction="up" delay={0.3}>
          <div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block mb-2">Find Me Online</span>
            <div className="flex flex-col space-y-2">
              <Link href="https://github.com/afaqahmadcs" variant="editorial" arrow="up-right">
                GitHub Profile
              </Link>
              <Link href="https://www.linkedin.com/in/afaqahmadcs/" variant="editorial" arrow="up-right">
                LinkedIn Professional
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
