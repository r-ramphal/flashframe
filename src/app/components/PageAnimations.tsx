"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Subtiele animatielaag over de (server-rendered) pagina. Werkt via
// data-attributen, zodat de secties zelf server components blijven:
//   data-hero          → kinderen faden na elkaar in bij het laden
//   data-hero-image    → lichte parallax op de hero-foto (scrub)
//   data-reveal        → element fadet eenmalig in zodra het in beeld scrolt
//   data-reveal-group  → idem, maar de kinderen verschijnen gestaggerd
// Bij prefers-reduced-motion gebeurt er niets en is alles direct zichtbaar.
export default function PageAnimations({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Hero-entrance: titel, subtekst en knoppen na elkaar.
        gsap.from("[data-hero] > *", {
          autoAlpha: 0,
          y: 24,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
        });

        // Parallax: de hero-foto scrolt iets langzamer mee dan de pagina.
        // De lichte scale voorkomt dat de randen van de foto in beeld komen.
        gsap.fromTo(
          "[data-hero-image]",
          { yPercent: -6, scale: 1.12 },
          {
            yPercent: 6,
            scale: 1.12,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-hero-section]",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        // Secties faden eenmalig in zodra ze in beeld komen.
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: 28,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          });
        });

        // Kaarten binnen een groep (prijzen, waarom) verschijnen na elkaar.
        gsap.utils
          .toArray<HTMLElement>("[data-reveal-group]")
          .forEach((group) => {
            gsap.from(group.children, {
              autoAlpha: 0,
              y: 28,
              duration: 0.6,
              ease: "power2.out",
              stagger: 0.12,
              scrollTrigger: { trigger: group, start: "top 85%", once: true },
            });
          });
      });
    },
    { scope: ref }
  );

  return <div ref={ref}>{children}</div>;
}
