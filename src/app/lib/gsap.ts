// Centrale GSAP-basis voor de hele site.
//
// Eén plek die `gsap` + `ScrollTrigger` DYNAMISCH (lazy) importeert en de plugin
// precies één keer registreert. Daarmee:
//   - blijft GSAP buiten het hydration-pad (kleinere first-load JS → lagere TBT);
//   - wordt de plugin nooit dubbel geregistreerd (anders waarschuwt GSAP);
//   - delen PageAnimations én de losse client-interactiecomponenten (BookButton,
//     StickyCta) exact dezelfde gsap-instance en cache.
//
// Gebruik:
//   const { gsap, ScrollTrigger } = await loadGsap();
// of in een useGSAP/useEffect: roep loadGsap() aan na een idle-moment.

type Gsap = (typeof import("gsap"))["gsap"];
type ScrollTriggerStatic = (typeof import("gsap/ScrollTrigger"))["ScrollTrigger"];

export type GsapBundle = {
  gsap: Gsap;
  ScrollTrigger: ScrollTriggerStatic;
};

let bundle: Promise<GsapBundle> | null = null;

/** Laadt gsap + ScrollTrigger één keer (gememoïseerd) en registreert de plugin. */
export function loadGsap(): Promise<GsapBundle> {
  if (bundle) return bundle;
  bundle = (async () => {
    const [{ gsap }, { ScrollTrigger }] = await Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]);
    gsap.registerPlugin(ScrollTrigger);
    return { gsap, ScrollTrigger };
  })();
  return bundle;
}

/** True als de bezoeker bewegingsreductie heeft aangevraagd (SSR-veilig). */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Voert `init` pas uit na een idle-moment, zodat hydration eerst kan afronden.
 * Geeft een cleanup-functie terug die het geplande werk annuleert.
 */
export function runWhenIdle(init: () => void): () => void {
  if (typeof window === "undefined") return () => {};

  if (typeof window.requestIdleCallback === "function") {
    const id = window.requestIdleCallback(init);
    return () => window.cancelIdleCallback(id);
  }
  const t = window.setTimeout(init, 200);
  return () => window.clearTimeout(t);
}
