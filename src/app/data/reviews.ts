// Klantreviews voor de reviews-sectie.
//
// LET OP: nog leeg. Vul deze lijst pas met ECHTE reviews (met toestemming om de
// naam te tonen). Zolang de lijst leeg is rendert de sectie niets (zie
// Reviews.tsx). Voeg pas AggregateRating/Review JSON-LD toe zodra hier echte
// reviews staan — nooit met verzonnen content (misleidend + SEO-risico).

export type Review = {
  name: string;
  text: string;
  /** Korte context, bv. "Bruiloft · Zaandam". */
  context?: string;
  /** 1–5; alleen tonen als bekend. */
  rating?: number;
};

export const reviews: Review[] = [];
