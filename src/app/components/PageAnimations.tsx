"use client";

import { useEffect, useRef } from "react";

// Subtiele animatielaag over de (server-rendered) pagina. Werkt via
// data-attributen, zodat de secties zelf server components blijven:
//   data-hero-image    → lichte parallax op de hero-foto (scrub)
//   data-reveal        → element fadet eenmalig in zodra het in beeld scrolt
//   data-reveal-group  → idem, maar de kinderen verschijnen gestaggerd
// De hero-entrance is bewust púúr CSS (.hero-enter in globals.css): die start
// direct bij de eerste paint en wacht niet op hydration.
//
// GSAP wordt dynamisch geïmporteerd ná een idle-moment, zodat het niet
// meeweegt in de hydration van de pagina (Total Blocking Time). Cleanup loopt
// via gsap.context().revert(), conform de officiële gsap-react-richtlijnen.
// Bij prefers-reduced-motion gebeurt er niets en is alles direct zichtbaar.
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
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled || !ref.current) return;
      gsap.registerPlugin(ScrollTrigger);

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

          // Secties faden eenmalig in zodra ze in beeld komen.
          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
            gsap.from(el, {
              autoAlpha: 0,
              y: 24,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            });
          });

          // Kaarten binnen een groep (prijzen, waarom) verschijnen na elkaar.
          gsap.utils
            .toArray<HTMLElement>("[data-reveal-group]")
            .forEach((group) => {
              gsap.from(group.children, {
                autoAlpha: 0,
                y: 24,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: { trigger: group, start: "top 88%", once: true },
              });
            });
        });
      }, ref);
    };

    // Wachten op een idle-moment zodat hydration eerst kan afronden.
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(() => void init());
      return () => {
        cancelled = true;
        window.cancelIdleCallback(id);
        ctx?.revert();
      };
    }
    const t = setTimeout(() => void init(), 200);
    return () => {
      cancelled = true;
      clearTimeout(t);
      ctx?.revert();
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
