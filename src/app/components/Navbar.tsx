"use client";

import { useState, useEffect } from "react";
import WhatsAppButton from "./WhatsAppButton";
import Icon from "./Icon";
import { INSTAGRAM_URL } from "../site";

const links = [
  { label: "De fotobooth", href: "#products" },
  { label: "Prijzen", href: "#pricing" },
  { label: "Hoe het werkt", href: "#how-it-works" },
  { label: "Contact", href: "#booking" },
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
          className="text-base sm:text-lg font-bold tracking-tight text-primary whitespace-nowrap"
        >
          Flashframe{" "}
          <span className="font-medium text-on-surface-variant">Photobooth</span>
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

        <div className="flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Flashframe"
            className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full text-primary hover:bg-surface-faint transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          {/* Op mobiel zit WhatsApp al in de sticky balk onderaan; hier verbergen
              zodat logo + Boek nu + menu naast elkaar passen zonder te wrappen. */}
          <span className="hidden sm:flex">
            <WhatsAppButton variant="icon" />
          </span>
          <a
            href="#booking"
            className="btn-accent px-5 sm:px-6 py-2 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap"
          >
            Boek nu
          </a>
          <button
            aria-label={open ? "Sluit menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden text-primary flex items-center"
          >
            <Icon name={open ? "close" : "menu"} className="w-6 h-6" />
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
