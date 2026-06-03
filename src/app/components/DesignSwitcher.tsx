"use client";

// Tijdelijke ontwerp-kiezer voor de demo-branch (layout-2). Hiermee kan de
// eigenaar tussen de ontwerpvarianten klikken op één localhost. Zodra er een
// winnend ontwerp is gekozen, kan dit component + de extra routes verwijderd
// worden en verhuist het gekozen ontwerp naar `/` op main.

import { useState } from "react";
import Link from "next/link";

export const designs = [
  { n: 1, name: "Huidig", tag: "Clean & licht", href: "/" },
  { n: 2, name: "Bold", tag: "Donker & dramatisch", href: "/ontwerp-2" },
  { n: 3, name: "Editorial", tag: "Magazine-stijl", href: "/ontwerp-3" },
  { n: 4, name: "Minimal", tag: "Strak & zakelijk", href: "/ontwerp-4" },
];

export default function DesignSwitcher({ current }: { current: number }) {
  const [open, setOpen] = useState(false);
  const active = designs.find((d) => d.n === current) ?? designs[0];
  const prev = designs[(current - 2 + designs.length) % designs.length];
  const next = designs[current % designs.length];

  return (
    <div className="fixed bottom-5 left-1/2 z-[100] -translate-x-1/2 print:hidden">
      {/* Uitklapmenu met alle ontwerpen */}
      {open && (
        <div className="absolute bottom-full left-1/2 mb-3 w-72 -translate-x-1/2 rounded-2xl border border-white/10 bg-neutral-900/95 p-2 text-white shadow-2xl backdrop-blur-md">
          <p className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Kies een ontwerp
          </p>
          {designs.map((d) => (
            <Link
              key={d.n}
              href={d.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors ${
                d.n === current ? "bg-white/10" : "hover:bg-white/5"
              }`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                  d.n === current
                    ? "bg-[#712edd] text-white"
                    : "bg-white/10 text-white/70"
                }`}
              >
                {d.n}
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-medium leading-tight">
                  {d.name}
                </span>
                <span className="text-xs text-white/50">{d.tag}</span>
              </span>
              {d.n === current && (
                <span className="material-symbols-outlined ml-auto text-[18px] text-white/60">
                  visibility
                </span>
              )}
            </Link>
          ))}
        </div>
      )}

      {/* Vaste balk */}
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-neutral-900/95 p-1.5 text-white shadow-2xl backdrop-blur-md">
        <Link
          href={prev.href}
          aria-label={`Vorige ontwerp: ${prev.name}`}
          className="flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <span className="material-symbols-outlined text-[20px]">
            chevron_left
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 rounded-full px-3 py-1.5 transition-colors hover:bg-white/10"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#712edd] text-xs font-semibold">
            {active.n}
          </span>
          <span className="flex flex-col items-start leading-none">
            <span className="text-[10px] uppercase tracking-wider text-white/40">
              Ontwerp {current} / {designs.length}
            </span>
            <span className="text-sm font-medium">{active.name}</span>
          </span>
          <span
            className={`material-symbols-outlined text-[18px] text-white/50 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          >
            expand_less
          </span>
        </button>

        <Link
          href={next.href}
          aria-label={`Volgende ontwerp: ${next.name}`}
          className="flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <span className="material-symbols-outlined text-[20px]">
            chevron_right
          </span>
        </Link>
      </div>
    </div>
  );
}
