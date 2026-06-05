"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "@/lib/scroll";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Classes", href: "/#classes" },
  { label: "Stories", href: "/#stories" },
  { label: "Founder", href: "/#founder" },
  { label: "Contact", href: "/#contact" },
  { label: "Workshops", href: "/workshops/" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isHomePage =
      window.location.pathname === "/" || window.location.pathname === "";
    const isAnchorOnHome = href.includes("#") && isHomePage;

    if (isAnchorOnHome) {
      e.preventDefault();
      setIsOpen(false);
      const hash = "#" + href.split("#")[1];
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 350);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-parchment/95 backdrop-blur-md shadow-[0_1px_0_rgba(201,169,110,0.15)]"
          : "bg-parchment/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              const isHomePage =
                window.location.pathname === "/" ||
                window.location.pathname === "";
              if (isHomePage) {
                e.preventDefault();
                setIsOpen(false);
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 350);
              }
            }}
            className="relative flex items-center gap-1.5 sm:gap-2"
            aria-label="Vatsalyam Yoga — Home"
          >
            <Image
              src="/logo-icon.png"
              alt="Vatsalyam Yoga icon"
              width={40}
              height={32}
              className="h-7 sm:h-8 lg:h-9 w-auto object-contain flex-none"
              preload
            />
            <Image
              src="/logo-name.png"
              alt="Vatsalyam Yoga"
              width={130}
              height={32}
              className="h-7 sm:h-8 lg:h-9 w-auto object-contain flex-none translate-y-[2px]"
              preload
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-body text-[13px] tracking-[0.08em] uppercase text-charcoal/80 hover:text-terracotta transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-terracotta transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-charcoal"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <div className="w-5 h-3.5 relative flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-full h-px bg-charcoal origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-full h-px bg-charcoal"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-full h-px bg-charcoal origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden bg-parchment/98 backdrop-blur-md border-t border-gold/10 overflow-hidden"
          >
            <nav className="flex flex-col px-5 sm:px-8 py-6 gap-1" aria-label="Mobile navigation">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-body text-sm tracking-[0.08em] uppercase text-charcoal/80 hover:text-terracotta transition-colors duration-200 py-3 border-b border-gold/5"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
