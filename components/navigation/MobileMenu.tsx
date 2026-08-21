"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "../ui/Link";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

const MENU_ITEMS = [
  { label: "Home", href: "/", number: "01" },
  { label: "About", href: "/about", number: "02" },
  { label: "Capabilities", href: "/capabilities", number: "03" },
  { label: "Work", href: "/work", number: "04" },
  { label: "AI × Creative", href: "/ai-creative", number: "05" },
  { label: "Journey", href: "/journey", number: "06" },
  { label: "Content", href: "/content", number: "07" },
  { label: "Contact", href: "/contact", number: "08" },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, pathname }) => {
  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Listen for Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col bg-background px-6 py-5 md:px-12"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Header row */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm font-bold tracking-wider">AFAQ</span>
            <button
              onClick={onClose}
              className="p-2 border border-border-custom hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-1 focus-visible:ring-accent cursor-pointer"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Links container */}
          <div className="flex-grow flex flex-col justify-center">
            <nav className="flex flex-col space-y-6">
              {MENU_ITEMS.map((item, index) => {
                const isActive = pathname === item.href;

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.07,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-baseline space-x-4 text-left focus:outline-none"
                    >
                      <span className="font-mono text-xs text-text-muted select-none group-hover:text-accent">
                        {item.number}
                      </span>
                      <span
                        className={`font-display text-4xl uppercase sm:text-5xl transition-colors duration-300 ${
                          isActive ? "text-accent" : "text-foreground group-hover:text-accent"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </div>

          {/* Footer of the mobile menu */}
          <div className="border-t border-border-custom pt-6 pb-2">
            <p className="font-mono text-[10px] tracking-widest text-text-muted uppercase">
              Peshawar, Pakistan
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
MobileMenu.displayName = "MobileMenu";
