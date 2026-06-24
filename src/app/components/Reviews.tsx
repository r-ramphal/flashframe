import { reviews } from "../data/reviews";

// Reviews-sectie. Rendert UITSLUITEND als er echte reviews zijn (data/reviews.ts).
// Zolang die lijst leeg is komt er niets in beeld — de structuur staat klaar,
// zonder placeholder/nep-content. De scroll-reveal loopt via de bestaande
// data-reveal/data-reveal-group-haken (PageAnimations.tsx).
//
// TODO bij echte reviews: voeg hier Review/AggregateRating JSON-LD toe.
const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5" aria-label={`${rating} van 5 sterren`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 24 24"
        className={`w-4 h-4 ${i < rating ? "text-secondary" : "text-border-subtle"}`}
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

export default function Reviews() {
  if (reviews.length === 0) return null;

  return (
    <section
      id="reviews"
      className="py-24 md:py-32 px-5 md:px-8 max-w-[1280px] mx-auto"
    >
      <div data-reveal className="mx-auto max-w-2xl text-center mb-12 md:mb-16">
        <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-primary mb-4">
          Wat klanten zeggen
        </h2>
        <p className="text-base text-on-surface-variant">
          Ervaringen van mensen die Flashframe op hun feest hadden.
        </p>
      </div>

      <div
        data-reveal-group
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {reviews.map((review, i) => (
          <figure
            key={i}
            className="flex h-full flex-col gap-4 rounded-2xl border border-border-subtle bg-surface-bright p-8 shadow-sm"
          >
            {typeof review.rating === "number" && (
              <Stars rating={review.rating} />
            )}
            <blockquote className="flex-1 text-base leading-relaxed text-on-surface">
              “{review.text}”
            </blockquote>
            <figcaption className="text-sm font-medium text-primary">
              {review.name}
              {review.context && (
                <span className="font-normal text-text-muted">
                  {" "}
                  · {review.context}
                </span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
