// Ontwerp 4 — "Minimal / zakelijk": strak, monochroom, veel witruimte,
// hairline-borders, grid-gebaseerd, weinig animatie. Zelfde content uit content.ts.
import Photo from "../components/Photo";
import BookingForm from "../components/BookingForm";
import DesignSwitcher from "../components/DesignSwitcher";
import { hero, booths, steps, whyCards, galleryItems, pricingPlans } from "../content";
import {
  whatsappUrl,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  COMPANY_NAME,
  ADDRESS_STREET,
  ADDRESS_CITY,
  KVK,
  BTW,
} from "../site";

const navLinks = [
  { label: "Collectie", href: "#products" },
  { label: "Werkwijze", href: "#how" },
  { label: "Prijzen", href: "#pricing" },
  { label: "Contact", href: "#booking" },
];

const kicker = "text-[11px] uppercase tracking-[0.25em] text-neutral-400";

export default function OntwerpMinimal() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
      <DesignSwitcher current={4} />

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-5">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.2em]">
            Flashframe
          </a>
          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 transition-colors hover:text-neutral-900"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#booking"
            className="text-[11px] uppercase tracking-[0.2em] text-neutral-900"
          >
            Boek&nbsp;→
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO — tekst-gedreven */}
        <section className="border-b border-neutral-200">
          <div className="mx-auto max-w-[1100px] px-6 py-24 md:py-36">
            <p className={kicker}>Photobooth-verhuur — Assendelft</p>
            <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
              {hero.titleTop} {hero.titleBottom}
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-500">
              {hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-px">
              <a
                href={hero.primaryCta.href}
                className="border border-neutral-900 bg-neutral-900 px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-neutral-700"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="border border-neutral-900 border-l-0 px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] text-neutral-900 transition-colors hover:bg-neutral-50"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </section>

        {/* BOOTHS — strak raster */}
        <section id="products" className="border-b border-neutral-200">
          <div className="mx-auto max-w-[1100px] px-6 py-20 md:py-28">
            <div className="mb-14 flex items-baseline justify-between">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Collectie
              </h2>
              <span className={kicker}>02 — booths</span>
            </div>
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-neutral-200 md:grid-cols-2">
              {booths.map((booth) => (
                <div key={booth.title} className="bg-white p-8 md:p-10">
                  <div className="relative mb-8 aspect-[4/3] w-full overflow-hidden bg-neutral-50">
                    <Photo
                      src={booth.image}
                      alt={booth.alt}
                      label={booth.title}
                      className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                    />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {booth.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {booth.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2 border-t border-neutral-200 pt-6">
                    {booth.features.map((f) => (
                      <li key={f.label} className="flex items-center gap-3 text-sm text-neutral-700">
                        <span className="h-1 w-1 rounded-full bg-[#712edd]" />
                        {f.label}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WERKWIJZE */}
        <section id="how" className="border-b border-neutral-200">
          <div className="mx-auto max-w-[1100px] px-6 py-20 md:py-28">
            <div className="mb-14 flex items-baseline justify-between">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Werkwijze
              </h2>
              <span className={kicker}>03 — zo werkt het</span>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.n}>
                  <span className="text-5xl font-light tabular-nums text-neutral-200">
                    {step.n}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-20 grid grid-cols-1 divide-y divide-neutral-200 border-t border-neutral-200 md:grid-cols-3 md:divide-x md:divide-y-0">
              {whyCards.map((card) => (
                <div key={card.title} className="px-0 py-8 md:px-8 md:py-2">
                  <span className="material-symbols-outlined text-[22px] text-[#712edd]">
                    {card.icon}
                  </span>
                  <h4 className="mt-3 text-base font-semibold tracking-tight">
                    {card.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SFEER — monochroom raster */}
        <section className="border-b border-neutral-200">
          <div className="mx-auto max-w-[1100px] px-6 py-20 md:py-28">
            <div className="mb-14 flex items-baseline justify-between">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Sfeerimpressie
              </h2>
              <span className={kicker}>04 — werk</span>
            </div>
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-neutral-200 md:grid-cols-3">
              {galleryItems.map((item) => (
                <div key={item.id} className="relative aspect-square overflow-hidden bg-neutral-50">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      aria-label={item.title}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                    />
                  ) : (
                    <Photo
                      src={item.src}
                      alt={item.title}
                      label={item.title}
                      className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRIJZEN — minimal tabel */}
        <section id="pricing" className="border-b border-neutral-200">
          <div className="mx-auto max-w-[1100px] px-6 py-20 md:py-28">
            <div className="mb-14 flex items-baseline justify-between">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Prijzen
              </h2>
              <span className={kicker}>05 — pakketten</span>
            </div>
            <div className="border-t border-neutral-900">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="grid grid-cols-1 items-center gap-4 border-b border-neutral-200 py-8 md:grid-cols-12"
                >
                  <div className="md:col-span-4">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {plan.name}
                      {plan.highlighted && (
                        <span className="ml-3 align-middle text-[10px] uppercase tracking-[0.2em] text-[#712edd]">
                          Aanrader
                        </span>
                      )}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">{plan.desc}</p>
                  </div>
                  <p className="text-sm text-neutral-500 md:col-span-5">
                    {plan.features.join(" · ")}
                  </p>
                  <div className="flex items-baseline gap-1 md:col-span-3 md:justify-end">
                    <span className="text-2xl font-semibold tabular-nums">
                      {plan.price}
                    </span>
                    <span className="text-xs text-neutral-400">{plan.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOEKEN */}
        <section id="booking" className="border-b border-neutral-200">
          <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
            <div className="mb-10">
              <p className={kicker}>06 — contact</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                Check beschikbaarheid
              </h2>
              <p className="mt-3 text-sm text-neutral-500">
                Vul het formulier in en we nemen binnen 24 uur contact met je op.
              </p>
            </div>
            <BookingForm />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 px-6 py-14 md:grid-cols-3">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              Flashframe
            </span>
            <p className="mt-3 max-w-xs text-sm text-neutral-500">
              Photobooth-verhuur voor bruiloften, bedrijfsfeesten en evenementen.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 text-sm text-neutral-500">
            <p className="text-neutral-900">{ADDRESS_STREET}</p>
            <p>{ADDRESS_CITY}</p>
            <a href={`tel:${PHONE_TEL}`} className="hover:text-neutral-900">{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="hover:text-neutral-900">{EMAIL}</a>
          </div>
          <div className="flex flex-col gap-1.5 text-sm text-neutral-500 md:items-end">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900">Instagram</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900">WhatsApp</a>
          </div>
        </div>
        <div className="border-t border-neutral-200">
          <div className="mx-auto flex max-w-[1100px] flex-col justify-between gap-2 px-6 py-6 text-xs text-neutral-400 md:flex-row">
            <p>© {new Date().getFullYear()} {COMPANY_NAME}. Alle rechten voorbehouden.</p>
            <p>KvK {KVK} · BTW {BTW}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
