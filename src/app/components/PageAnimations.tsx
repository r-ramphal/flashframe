"use client";

import { useEffect, useRef } from "react";
import { loadGsap, runWhenIdle } from "../lib/gsap";

// Subtiele animatielaag over de (server-rendered) pagina. Werkt via
// data-attributen, zodat de secties zelf server components blijven:
//   data-hero-image    → lichte parallax op de hero-foto (scrub)
//   data-reveal        → element fadet eenmalig in zodra het in beeld scrolt
//   data-reveal-group  → idem, maar de kinderen verschijnen gestaggerd
// De hero-entrance is bewust púúr CSS (.hero-enter in globals.css): die start
// direct bij de eerste paint en wacht niet op hydration.
//
// GSAP komt via de centrale lazy loader (lib/gsap.ts) ná een idle-moment, zodat
// het niet meeweegt in de hydration (Total Blocking Time). Cleanup loopt via
// gsap.context().revert(), conform de officiële gsap-react-richtlijnen.
//
// CLS-garantie: alle reveal-/parallax-tweens animeren UITSLUITEND transform (y/
// yPercent/scale) en opacity. Dat zijn compositor-only eigenschappen die de
// layout nooit verschuiven → 0 Cumulative Layout Shift. Animeer hier dus nooit
// width/height/top/left/margin e.d. Bij prefers-reduced-motion gebeurt er niets
// en is alles direct zichtbaar.
export default function PageAnimations({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    const init = async () => {
      const { gsap } = await loadGsap();
      if (cancelled || !ref.current) return;

      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        mm.add("(prefers-reduced-motion: no-preference)", () => {
          // Parallax: de hero-foto scrolt iets langzamer mee dan de pagina.
          // De lichte scale voorkomt dat de randen van de foto in beeld komen.
          // Let op: de fromTo-beginstand (yPercent -3, scale 1.06) staat óók
          // als CSS-transform op [data-hero-image] in page.tsx — houd die twee
          // gelijk, anders springt de foto zodra GSAP laadt.
          gsap.fromTo(
            "[data-hero-image]",
            { yPercent: -3, scale: 1.06 },
            {
              yPercent: 3,
              scale: 1.06,
              ease: "none",
              scrollTrigger: {
                trigger: "[data-hero-section]",
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            }
          );

          // Secties faden eenmalig in zodra ze in beeld komen. clearProps haalt
          // de inline transform ná de reveal weg, zodat CSS-hovers/lifts op die
          // elementen daarna gewoon werken.
          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
            gsap.from(el, {
              autoAlpha: 0,
              y: 24,
              duration: 0.5,
              ease: "power2.out",
              clearProps: "transform",
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            });
          });

          // Kaarten binnen een groep (prijzen, waarom, galerij) verschijnen na
          // elkaar.
          gsap.utils
            .toArray<HTMLElement>("[data-reveal-group]")
            .forEach((group) => {
              gsap.from(group.children, {
                autoAlpha: 0,
                y: 24,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.1,
                clearProps: "transform",
                scrollTrigger: { trigger: group, start: "top 88%", once: true },
              });
            });
        });
      }, ref);
    };

    // Wachten op een idle-moment zodat hydration eerst kan afronden.
    const cancelIdle = runWhenIdle(() => void init());
    return () => {
      cancelled = true;
      cancelIdle();
      ctx?.revert();
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
