"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-purple-900/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <span className="text-lg sm:text-xl font-bold tracking-widest uppercase text-white">
          Flash<span className="text-violet-500">frame</span>
        </span>
        <a
          href="#boeken"
          className="bg-violet-600 hover:bg-violet-500 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full transition-colors duration-200 whitespace-nowrap"
        >
          Beschikbaarheid checken
        </a>
      </div>
    </nav>
  );
}
