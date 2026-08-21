import React, { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text" | "icon";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
          // Primary Variant: Solid graphite / off-white border
          variant === "primary" &&
            "px-6 py-3 bg-foreground text-background hover:bg-accent hover:text-white border border-transparent active:scale-[0.98]",
          // Secondary Variant: Outlined, thin borders
          variant === "secondary" &&
            "px-6 py-3 bg-transparent text-foreground border border-border-custom hover:border-accent hover:text-accent active:scale-[0.98]",
          // Text Variant: Underline and slide hover
          variant === "text" &&
            "p-0 bg-transparent text-foreground hover:text-accent border-b border-transparent hover:border-accent",
          // Icon Variant: Minimal padding, square/circle
          variant === "icon" &&
            "p-2 bg-transparent text-foreground border border-border-custom rounded-none hover:border-accent hover:text-accent active:scale-95",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
