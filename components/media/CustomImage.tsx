"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils/cn";

export interface CustomImageProps extends Omit<ImageProps, "onLoad"> {
  aspectRatio?: "square" | "video" | "editorial" | "portrait" | "wide" | "auto";
  hoverZoom?: boolean;
}

export const CustomImage: React.FC<CustomImageProps> = ({
  className,
  aspectRatio = "auto",
  hoverZoom = false,
  alt,
  src,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const aspectClass = {
    square: "aspect-square",
    video: "aspect-video",
    editorial: "aspect-[4/5]",
    portrait: "aspect-[2/3]",
    wide: "aspect-[21/9]",
    auto: "",
  }[aspectRatio];

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-surface-muted transition-colors duration-300 border border-border-custom",
        aspectClass,
        className
      )}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 z-10 animate-pulse bg-surface flex items-center justify-center">
          <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">Loading</span>
        </div>
      )}

      <Image
        className={cn(
          "w-full h-full object-cover transition-all duration-700 ease-out",
          isLoading ? "scale-105 blur-md" : "scale-100 blur-0",
          hoverZoom && "hover:scale-105",
          props.fill ? "absolute inset-0" : ""
        )}
        src={src}
        alt={alt || "Afaq Ahmad — AI & Full Stack Developer"}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
};

CustomImage.displayName = "CustomImage";
