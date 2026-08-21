import React, { forwardRef } from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils/cn";

export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  variant?: "editorial" | "minimal" | "social";
  arrow?: "none" | "up-right" | "right";
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, href, variant = "editorial", arrow = "none", children, ...props }, ref) => {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    
    const content = (
      <>
        <span className="relative py-0.5">
          {children}
          {/* Subtle editorial underline reveal animation */}
          {variant === "editorial" && (
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent transform scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
          )}
        </span>
        {arrow === "right" && (
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1 text-xs">
            →
          </span>
        )}
        {arrow === "up-right" && (
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-1 text-xs">
            ↗
          </span>
        )}
      </>
    );

    const classes = cn(
      "group inline-flex items-center transition-colors duration-300 font-sans cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-accent",
      variant === "editorial" && "text-foreground hover:text-accent",
      variant === "minimal" && "text-text-muted hover:text-foreground",
      variant === "social" && "font-mono text-xs uppercase tracking-wider text-text-muted hover:text-accent",
      className
    );

    if (isExternal) {
      return (
        <a
          ref={ref}
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {content}
        </a>
      );
    }

    return (
      <NextLink ref={ref} href={href} className={classes} {...props}>
        {content}
      </NextLink>
    );
  }
);

Link.displayName = "Link";
