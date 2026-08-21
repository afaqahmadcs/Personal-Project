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
      <div className="space-y-6 pt-6 border-t border-border-custom/50">
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

        {/* Contact links block */}
        <Reveal direction="up" delay={0.3}>
          <div className="space-y-4">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block mb-1">WhatsApp</span>
              <a
                href="https://wa.me/923189798577"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Afaq Ahmad on WhatsApp"
                className="font-mono text-sm font-semibold text-accent hover:underline"
              >
                +92 318 9798577
              </a>
            </div>

            <div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block mb-1">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/afaqahmadcs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Afaq Ahmad on LinkedIn"
                className="font-sans text-sm font-semibold text-foreground hover:text-accent transition-colors duration-300"
              >
                linkedin.com/in/afaqahmadcs/
              </a>
            </div>

            <div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block mb-1">GitHub</span>
              <a
                href="https://github.com/afaqahmadcs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Afaq Ahmad on GitHub"
                className="font-sans text-sm font-semibold text-foreground hover:text-accent transition-colors duration-300"
              >
                github.com/afaqahmadcs
              </a>
            </div>
          </div>
        </Reveal>

        {/* Direct WhatsApp Action trigger button */}
        <Reveal direction="up" delay={0.35}>
          <div className="pt-2">
            <a
              href="https://wa.me/923189798577"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Afaq Ahmad on WhatsApp"
              className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider border border-accent bg-accent-soft text-accent px-6 py-3 rounded hover:bg-accent hover:text-background transition-all duration-300 w-full text-center"
            >
              CHAT ON WHATSAPP &rarr;
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
