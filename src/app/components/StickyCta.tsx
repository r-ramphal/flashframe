"use client";

import { useEffect, useRef, useState } from "react";
import WhatsAppButton from "./WhatsAppButton";
import BookButton from "./BookButton";
import { loadGsap, prefersReducedMotion } from "../lib/gsap";

// Vaste "Boek nu"-balk onderaan het scherm op mobiel. Verschijnt zodra de
// bezoeker voorbij de hero scrolt en verdwijnt zodra het boekingsformulier of
// de footer in beeld is (daar staan de CTA's zelf al).
//
// De zichtbaarheid wordt bepaald door scroll + IntersectionObserver; de in-/uit-
// beweging gaat via GSAP (subtiele slide + fade). Bij prefers-reduced-motion
// schakelt de balk direct (geen animatie). Animeert alleen transform/opacity →
// geen layout shift.
export default function StickyCta() {
  const ref = useRef<HTMLDivElement>(null);
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

  // Animeer de balk in/uit zodra `show` verandert.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.style.transform = show ? "translateY(0%)" : "translateY(100%)";
      el.style.opacity = show ? "1" : "0";
      return;
    }

    let cancelled = false;
    loadGsap().then(({ gsap }) => {
      if (cancelled || !ref.current) return;
      gsap.to(ref.current, {
        yPercent: show ? 0 : 100,
        autoAlpha: show ? 1 : 0,
        duration: show ? 0.45 : 0.3,
        ease: show ? "power3.out" : "power2.in",
      });
    });
    return () => {
      cancelled = true;
    };
  }, [show]);

  return (
    <div
      ref={ref}
      // Begint verborgen (translate + onzichtbaar) tot JS de balk overneemt;
      // zo flitst hij niet bij de eerste paint.
      className="md:hidden fixed inset-x-0 bottom-0 z-40 translate-y-full opacity-0 invisible"
    >
      <div className="flex items-center gap-3 bg-surface/90 backdrop-blur-md border-t border-border-subtle px-5 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <WhatsAppButton variant="icon" className="shrink-0" />
        <BookButton
          href="#booking"
          className="btn-accent flex-1 text-center px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase"
        >
          Boek nu
        </BookButton>
      </div>
    </div>
  );
}
