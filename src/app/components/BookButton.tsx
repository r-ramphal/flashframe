"use client";

import { useEffect, useRef } from "react";
import { loadGsap, prefersReducedMotion, runWhenIdle } from "../lib/gsap";

// Herbruikbare conversie-CTA met een subtiel "magnetic" hover-effect: de knop
// volgt de cursor een klein beetje en veert terug bij vertrek. Bewust beperkt:
//   - alleen op apparaten met een fijne pointer + hover (desktop), nooit op touch;
//   - niet bij prefers-reduced-motion;
//   - GSAP laadt lazy via de centrale loader (lib/gsap.ts), ná idle → geen TBT-
//     kosten en geen gsap in het first-load-pad.
// Het effect animeert uitsluitend transform (x/y) → geen layout shift (CLS).
// Op touch (of reduced-motion) is dit gewoon een <a> met de aangeleverde
// styling; de press-feedback komt dan van `.btn-accent:active` in globals.css.
type Props = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  /** Sterkte van de magnetische trek (fractie van de cursor-offset). */
  strength?: number;
};

export default function BookButton({
  href = "#booking",
  children,
  className = "",
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    if (!canHover || prefersReducedMotion()) return;

    let cancelled = false;
    let teardown: (() => void) | undefined;

    const cancelIdle = runWhenIdle(async () => {
      const { gsap } = await loadGsap();
      if (cancelled || !ref.current) return;
      const target = ref.current;

      // quickTo geeft een soepele, interruptible tween zonder per beweging een
      // nieuwe tween aan te maken.
      const xTo = gsap.quickTo(target, "x", { duration: 0.4, ease: "power3.out" });
      const yTo = gsap.quickTo(target, "y", { duration: 0.4, ease: "power3.out" });

      const onMove = (e: MouseEvent) => {
        const r = target.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * strength);
        yTo((e.clientY - (r.top + r.height / 2)) * strength);
      };
      const onLeave = () => {
        xTo(0);
        yTo(0);
      };

      target.addEventListener("mousemove", onMove);
      target.addEventListener("mouseleave", onLeave);
      teardown = () => {
        target.removeEventListener("mousemove", onMove);
        target.removeEventListener("mouseleave", onLeave);
        gsap.set(target, { x: 0, y: 0 });
      };
    });

    return () => {
      cancelled = true;
      cancelIdle();
      teardown?.();
    };
  }, [strength]);

  return (
    <a ref={ref} href={href} className={className}>
      {children}
    </a>
  );
}
