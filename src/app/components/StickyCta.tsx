"use client";

import { useEffect, useState } from "react";
import WhatsAppButton from "./WhatsAppButton";

// Vaste "Boek nu"-balk onderaan het scherm op mobiel. Verschijnt zodra de
// bezoeker voorbij de hero scrolt en verdwijnt zodra het boekingsformulier of
// de footer in beeld is (daar staan de CTA's zelf al).
export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const targets = ["booking", "contact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const inView = new Set<Element>();

    const update = () => {
      setShow(window.scrollY > window.innerHeight * 0.6 && inView.size === 0);
    };

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) inView.add(entry.target);
        else inView.delete(entry.target);
      }
      update();
    });
    targets.forEach((t) => observer.observe(t));

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3 bg-surface/90 backdrop-blur-md border-t border-border-subtle px-5 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <WhatsAppButton variant="icon" className="shrink-0" />
        <a
          href="#booking"
          className="btn-accent flex-1 text-center px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase"
        >
          Boek nu
        </a>
      </div>
    </div>
  );
}
