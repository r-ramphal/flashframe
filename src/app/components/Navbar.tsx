"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Producten", href: "#producten" },
  { label: "Hoe het werkt", href: "#hoe-het-werkt" },
  { label: "Beschikbaarheid", href: "#boeken" },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled || open
          ? "bg-black/70 backdrop-blur-xl border-white/10"
          : "bg-black/30 backdrop-blur-md border-white/5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          className="text-base font-semibold tracking-tight-apple text-white"
        >
          Flash<span className="text-accent-soft">frame</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#boeken"
          className="hidden md:inline-flex items-center bg-white text-black text-sm font-medium px-4 py-1.5 rounded-full hover:bg-white/90 transition-colors duration-200"
        >
          Boek nu
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80 border-t border-white/10" : "max-h-0"
        }`}
      >
        <ul className="px-5 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#boeken"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center w-full bg-white text-black text-sm font-medium px-4 py-3 rounded-full"
            >
              Boek nu
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
