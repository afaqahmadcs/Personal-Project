"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Link } from "../ui/Link";
import { useTheme } from "./ThemeProvider";
import { MobileMenu } from "./MobileMenu";
import { Sun, Moon, Menu } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "AI × Creative", href: "/ai-creative" },
  { label: "Journey", href: "/journey" },
  { label: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border-custom bg-background/80 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex h-20 items-center justify-between">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center space-x-2 focus:outline-none">
            <span className="font-display text-base font-black tracking-tighter uppercase">
              Afaq Ahmad
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  variant="editorial"
                  className={`font-mono text-xs uppercase tracking-wider transition-colors duration-300 ${
                    isActive ? "text-accent font-bold" : "text-text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Controls: Theme Switcher & Menu toggler */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 border border-border-custom hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-1 focus-visible:ring-accent cursor-pointer transition-colors duration-300"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Mobile Hamburguer Toggler */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2.5 border border-border-custom hover:border-accent hover:text-accent focus:outline-none lg:hidden cursor-pointer transition-colors duration-300"
              aria-label="Open navigation menu"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
};
Navbar.displayName = "Navbar";
