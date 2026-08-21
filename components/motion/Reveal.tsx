"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export interface RevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  width?: "fit-content" | "full";
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  width = "full",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();

  const getVariants = () => {
    if (shouldReduceMotion || direction === "none") {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    }

    const offsets = {
      up: { y: 24 },
      down: { y: -24 },
      left: { x: 24 },
      right: { x: -24 },
    };

    return {
      hidden: {
        opacity: 0,
        ...offsets[direction],
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
      },
    };
  };

  return (
    <div
      ref={ref}
      className={width === "full" ? "w-full" : "w-fit"}
      style={{ position: "relative", overflow: "visible" }}
    >
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.16, 1, 0.3, 1], // Custom premium easeOutExpo
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
