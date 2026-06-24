import { faqs } from "../content";

// Veelgestelde vragen als toegankelijke native <details>-accordion: geen
// client-JS nodig, werkt met toetsenbord en zonder JavaScript. Data staat in
// content.ts; de bijbehorende FAQPage-structured-data zit in page.tsx.
export default function Faq() {
  return (
    <section
      id="faq"
      className="py-24 md:py-32 px-5 md:px-8 max-w-3xl mx-auto"
    >
      <div data-reveal className="text-center mb-12 md:mb-16">
        <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-primary mb-4">
          Veelgestelde vragen
        </h2>
        <p className="text-base text-on-surface-variant">
          Staat jouw vraag er niet bij? Stel hem gerust via het formulier of
          WhatsApp — we reageren snel.
        </p>
      </div>

      <div data-reveal className="flex flex-col gap-3">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-border-subtle bg-surface-bright px-6 shadow-sm"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 list-none [&::-webkit-details-marker]:hidden">
              <span className="text-base font-semibold text-primary">
                {item.q}
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
                className="w-5 h-5 shrink-0 text-secondary transition-transform duration-300 group-open:rotate-180"
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <p className="pb-5 -mt-1 text-base leading-relaxed text-on-surface-variant">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
