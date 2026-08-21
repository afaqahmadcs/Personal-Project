"use client";

import React, { useEffect, useState, useRef } from "react";

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isMobile, setIsMobile] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Detect environment criteria (reduced-motion / touch-screen)
    const mediaQueryMobile = window.matchMedia("(max-width: 1024px)");
    const mediaQueryTouch = window.matchMedia("(pointer: coarse)");
    const mediaQueryMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    setIsMobile(mediaQueryMobile.matches || mediaQueryTouch.matches);
    setReducedMotion(mediaQueryMotion.matches);

    const handleMobileChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);

    mediaQueryMobile.addEventListener("change", handleMobileChange);
    mediaQueryMotion.addEventListener("change", handleMotionChange);

    return () => {
      mediaQueryMobile.removeEventListener("change", handleMobileChange);
      mediaQueryMotion.removeEventListener("change", handleMotionChange);
    };
  }, []);

  useEffect(() => {
    if (isMobile || reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    // Dynamic selectors listener setup
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("a, button, [role='button'], input, textarea, select");
      const projectRowEl = target.closest("[data-cursor='view']");
      const imageFrameEl = target.closest("[data-cursor='explore']");

      if (interactiveEl) {
        setHovered(true);
      } else {
        setHovered(false);
      }

      if (projectRowEl) {
        setCursorText("VIEW");
        setHovered(true);
      } else if (imageFrameEl) {
        setCursorText("EXPLORE");
        setHovered(true);
      } else {
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile, reducedMotion]);

  if (isMobile || reducedMotion || hidden) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${hovered ? 1.5 : 1})`,
      }}
    >
      {cursorText ? (
        /* Text label pill cursor (VIEW/EXPLORE) */
        <div className="bg-accent text-background font-mono text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg scale-90">
          {cursorText}
        </div>
      ) : (
        /* Minimal Dot Cursor */
        <div
          className={`w-3 h-3 rounded-full border transition-all duration-300 ${
            hovered
              ? "bg-accent/10 border-accent scale-150"
              : "bg-accent border-accent"
          }`}
        />
      )}
    </div>
  );
};
