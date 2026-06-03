// Ontwerp 3 — "Editorial": magazine-stijl, serif-display, veel witruimte,
// asymmetrische rijen en een Apple-cards-galerij. Zelfde content uit content.ts.
import Photo from "../components/Photo";
import BookingForm from "../components/BookingForm";
import DesignSwitcher from "../components/DesignSwitcher";
import EditorialGallery from "../components/EditorialGallery";
import { hero, booths, whyCards, pricingPlans } from "../content";
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
  { label: "Prijzen", href: "#pricing" },
  { label: "Sfeer", href: "#gallery" },
  { label: "Boeken", href: "#booking" },
];

export default function OntwerpEditorial() {
  return (
    <div className="min-h-screen bg-[#faf8f5] font-serif text-neutral-900 antialiased">
      <DesignSwitcher current={3} />

      {/* NAV */}
      <header className="border-b border-neutral-900/10">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-5 md:px-8">
          <a href="#top" className="text-xl font-bold tracking-tight">
            Flashframe
          </a>
          <nav className="hidden items-center gap-8 font-sans md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] uppercase tracking-[0.15em] text-neutral-500 transition-colors hover:text-neutral-900"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#booking"
            className="font-sans text-[13px] uppercase tracking-[0.15em] underline decoration-[#712edd] decoration-2 underline-offset-4 hover:text-[#712edd]"
          >
            Boek nu
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO — editorial split */}
        <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
          <div className="md:col-span-6">
            <p className="font-sans text-[13px] uppercase tracking-[0.2em] text-[#712edd]">
              Photobooth-verhuur · Assendelft
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight md:text-[5.5rem]">
              Leg elk moment vast in stijl.
            </h1>
            <p className="mt-8 max-w-md font-sans text-lg leading-relaxed text-neutral-600">
              {hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6 font-sans">
              <a
                href={hero.primaryCta.href}
                className="rounded-none bg-neutral-900 px-8 py-4 text-[13px] uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#712edd]"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="text-[13px] uppercase tracking-[0.15em] text-neutral-900 underline underline-offset-4"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Photo
                src="/images/sfeer-1.jpg"
                alt="Sfeerbeeld photobooth"
                label="Sfeerbeeld"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* BOOTHS — grote alternerende rijen */}
        <section id="products" className="border-t border-neutral-900/10">
          <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
            <h2 className="mb-16 text-4xl font-semibold tracking-tight md:text-5xl">
              Onze collectie
            </h2>
            <div className="flex flex-col gap-20 md:gap-28">
              {booths.map((booth, i) => (
                <div
                  key={booth.title}
                  className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16"
                >
                  <div className={`relative aspect-[4/5] w-full overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <Photo
                      src={booth.image}
                      alt={booth.alt}
                      label={booth.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-sans text-sm uppercase tracking-[0.2em] text-[#712edd]">
                      0{i + 1} / 0{booths.length}
                    </span>
                    <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                      {booth.title}
                    </h3>
                    <p className="mt-5 font-sans text-lg leading-relaxed text-neutral-600">
                      {booth.description}
                    </p>
                    <ul className="mt-7 flex flex-col gap-3 border-t border-neutral-900/10 pt-7 font-sans">
                      {booth.features.map((f) => (
                        <li key={f.label} className="flex items-center gap-3 text-base text-neutral-800">
                          <span className="material-symbols-outlined text-[20px] text-[#712edd]">
                            {f.icon}
                          </span>
                          {f.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WAAROM — editorial kolommen */}
        <section className="border-t border-neutral-900/10 bg-white">
          <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
            <h2 className="mb-14 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
              Een moeiteloze ervaring, van boeking tot afbouw.
            </h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {whyCards.map((card, i) => (
                <div key={card.title} className="border-t-2 border-neutral-900 pt-6">
                  <span className="font-sans text-sm tabular-nums text-neutral-400">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-4 font-sans text-base leading-relaxed text-neutral-600">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SFEER — apple cards carousel */}
        <section id="gallery" className="border-t border-neutral-900/10">
          <div className="mx-auto max-w-[1200px] px-5 pt-16 md:px-8 md:pt-24">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Sfeerimpressie
            </h2>
            <p className="mt-4 max-w-xl font-sans text-lg text-neutral-600">
              Een indruk van eerdere evenementen — klik op een kaart voor meer.
            </p>
          </div>
          <EditorialGallery />
        </section>

        {/* PRIJZEN — editorial lijst */}
        <section id="pricing" className="border-t border-neutral-900/10 bg-white">
          <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
            <h2 className="mb-14 text-4xl font-semibold tracking-tight md:text-5xl">
              Pakketten &amp; prijzen
            </h2>
            <div className="flex flex-col">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="grid grid-cols-1 items-start gap-6 border-t border-neutral-900/10 py-10 md:grid-cols-12"
                >
                  <div className="md:col-span-4">
                    <h3 className="flex items-center gap-3 text-2xl font-semibold tracking-tight">
                      {plan.name}
                      {plan.highlighted && (
                        <span className="font-sans text-[11px] uppercase tracking-wider text-[#712edd]">
                          · Meest gekozen
                        </span>
                      )}
                    </h3>
                    <p className="mt-2 font-sans text-base text-neutral-600">
                      {plan.desc}
                    </p>
                  </div>
                  <ul className="font-sans md:col-span-5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 py-1 text-base text-neutral-700">
                        <span className="material-symbols-outlined text-[18px] text-[#712edd]">
                          check
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-baseline gap-2 md:col-span-3 md:justify-end">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="font-sans text-sm text-neutral-400">
                      {plan.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOEKEN */}
        <section id="booking" className="border-t border-neutral-900/10">
          <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Check beschikbaarheid
              </h2>
              <p className="mt-4 font-sans text-lg text-neutral-600">
                Vul het formulier in en we nemen binnen 24 uur contact met je op.
              </p>
            </div>
            <div className="font-sans">
              <BookingForm />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-900/10 bg-white">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-8 px-5 py-14 font-sans md:flex-row md:px-8">
          <div className="max-w-xs">
            <span className="font-serif text-xl font-bold">Flashframe</span>
            <p className="mt-3 text-sm text-neutral-500">
              Photobooth-verhuur voor bruiloften, bedrijfsfeesten en evenementen.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-neutral-600">
            <p className="text-neutral-900">{ADDRESS_STREET}, {ADDRESS_CITY}</p>
            <a href={`tel:${PHONE_TEL}`} className="hover:text-[#712edd]">{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="hover:text-[#712edd]">{EMAIL}</a>
            <div className="mt-1 flex gap-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#712edd]">Instagram</a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#712edd]">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-2 border-t border-neutral-900/10 px-5 py-6 font-sans text-xs text-neutral-400 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. Alle rechten voorbehouden.</p>
          <p>KvK {KVK} · BTW {BTW}</p>
        </div>
      </footer>
    </div>
  );
}
