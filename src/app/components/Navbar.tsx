"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Producten", href: "#products" },
  { label: "Prijzen", href: "#pricing" },
  { label: "Hoe het werkt", href: "#how-it-works" },
  { label: "Beschikbaarheid", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "shadow-sm border-b border-transparent" : "border-b border-border-subtle"
      }`}
    >
      <div className="flex justify-between items-center px-5 md:px-8 py-4 max-w-[1280px] mx-auto">
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-primary"
        >
          Flashframe
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity duration-300 text-xs font-semibold tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#booking"
            className="btn-primary px-6 py-2 rounded-full text-xs font-semibold tracking-wider uppercase active:scale-90 transition-transform"
          >
            Boek nu
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
            className="md:hidden text-primary flex items-center"
          >
            <span className="material-symbols-outlined">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80 border-t border-border-subtle" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-5 py-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
