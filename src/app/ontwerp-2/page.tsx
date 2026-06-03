// Ontwerp 2 — "Bold": donker, dramatisch, met Aceternity Spotlight + 3D-cards
// + bento-grid. Zelfde content als de andere ontwerpen (uit content.ts).
import Photo from "../components/Photo";
import BookingForm from "../components/BookingForm";
import DesignSwitcher from "../components/DesignSwitcher";
import { Spotlight } from "../../components/ui/spotlight-new";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../components/ui/3d-card";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import { hero, booths, whyCards, galleryItems, pricingPlans } from "../content";
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
  { label: "Booths", href: "#products" },
  { label: "Prijzen", href: "#pricing" },
  { label: "Sfeer", href: "#gallery" },
  { label: "Boeken", href: "#booking" },
];

export default function OntwerpBold() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <DesignSwitcher current={2} />

      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="text-lg font-bold tracking-tight text-white">
            Flashframe
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-semibold uppercase tracking-wider text-white/50 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#booking"
            className="rounded-full bg-[#712edd] px-6 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-transform active:scale-95"
          >
            Boek nu
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO met Spotlight */}
        <section className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-neutral-950 px-5 pt-24">
          {/* subtiel grid + spotlight */}
          <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:44px_44px]" />
          <Spotlight />
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#712edd]" />
              Photobooth-verhuur · Assendelft
            </span>
            <h1 className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-[44px] font-semibold leading-[1.05] tracking-tight text-transparent sm:text-6xl md:text-7xl">
              {hero.titleTop}
              <br />
              vast in stijl.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/60">
              {hero.subtitle}
            </p>
            <div className="mt-2 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <a
                href={hero.primaryCta.href}
                className="rounded-full bg-[#712edd] px-8 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white transition-transform hover:scale-[1.02] active:scale-95"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="rounded-full border border-white/20 px-8 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </section>

        {/* BOOTHS — 3D cards */}
        <section id="products" className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 md:py-28">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Onze collectie
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/50">
              Twee manieren om je gasten te verrassen — beweeg over een kaart.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {booths.map((booth) => (
              <CardContainer key={booth.title} className="inter-var w-full">
                <CardBody className="group/card relative h-auto w-full rounded-2xl border border-white/10 bg-neutral-900 p-6 [transform-style:preserve-3d]">
                  <CardItem
                    translateZ={50}
                    className="text-xl font-semibold text-white"
                  >
                    {booth.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ={60}
                    className="mt-2 max-w-sm text-sm text-white/60"
                  >
                    {booth.description}
                  </CardItem>
                  <CardItem translateZ={100} className="mt-5 w-full">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                      <Photo
                        src={booth.image}
                        alt={booth.alt}
                        label={booth.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover/card:scale-105"
                      />
                    </div>
                  </CardItem>
                  <CardItem translateZ={40} className="mt-5 w-full">
                    <ul className="flex flex-col gap-2.5">
                      {booth.features.map((f) => (
                        <li
                          key={f.label}
                          className="flex items-center gap-3 text-sm text-white/80"
                        >
                          <span className="material-symbols-outlined text-[20px] text-[#9b6cf0]">
                            {f.icon}
                          </span>
                          {f.label}
                        </li>
                      ))}
                    </ul>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </section>

        {/* WAAROM — bento grid */}
        <section className="mx-auto max-w-[1280px] px-5 py-20 md:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Waarom Flashframe?
            </h2>
          </div>
          <BentoGrid className="mx-auto max-w-5xl md:auto-rows-[16rem]">
            {whyCards.map((card, i) => (
              <BentoGridItem
                key={card.title}
                title={<span className="text-white">{card.title}</span>}
                description={<span className="text-white/60">{card.desc}</span>}
                header={
                  <div className="flex h-full min-h-[6rem] w-full items-center justify-center rounded-xl bg-gradient-to-br from-[#712edd]/30 via-neutral-800 to-neutral-900">
                    <span className="material-symbols-outlined text-[40px] text-[#b694f5]">
                      {card.icon}
                    </span>
                  </div>
                }
                className={`border-white/10 bg-neutral-900 ${
                  i === whyCards.length - 1 ? "md:col-span-2" : ""
                }`}
              />
            ))}
          </BentoGrid>
        </section>

        {/* SFEER — galerij */}
        <section id="gallery" className="mx-auto max-w-[1280px] px-5 py-20 md:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Sfeerimpressie
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {galleryItems.map((item, i) => (
              <div
                key={item.id}
                className={`group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-neutral-900 ${
                  i === 0 ? "col-span-2 row-span-2 md:aspect-auto" : ""
                }`}
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    aria-label={item.title}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <Photo
                    src={item.src}
                    alt={item.title}
                    label={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-sm font-medium text-white">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* PRIJZEN */}
        <section id="pricing" className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 md:py-28">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Pakketten &amp; prijzen
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/50">
              Transparante pakketten voor elk evenement.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl p-8 ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-[#712edd]/20 to-neutral-900 ring-2 ring-[#712edd]"
                    : "border border-white/10 bg-neutral-900"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#712edd] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                    Meest gekozen
                  </span>
                )}
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-white/40">{plan.unit}</span>
                </div>
                <p className="mt-3 text-sm text-white/50">{plan.desc}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                      <span className="material-symbols-outlined text-[18px] text-[#9b6cf0]">
                        check
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className={`mt-8 rounded-full px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider transition-transform active:scale-95 ${
                    plan.highlighted
                      ? "bg-[#712edd] text-white"
                      : "border border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  Aanvragen
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* BOEKEN */}
        <section id="booking" className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Check beschikbaarheid
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/50">
              Vul het formulier in en we nemen binnen 24 uur contact met je op.
            </p>
          </div>
          <BookingForm />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-neutral-950 px-5 py-14 md:px-8">
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-xs">
            <span className="text-lg font-bold text-white">Flashframe</span>
            <p className="mt-3 text-sm text-white/50">
              Photobooth-verhuur voor bruiloften, bedrijfsfeesten en evenementen.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-white/60">
            <p className="text-white/80">{ADDRESS_STREET}, {ADDRESS_CITY}</p>
            <a href={`tel:${PHONE_TEL}`} className="hover:text-white">
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="hover:text-white">
              {EMAIL}
            </a>
            <div className="mt-1 flex gap-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Instagram
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-[1280px] flex-col justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. Alle rechten voorbehouden.</p>
          <p>KvK {KVK} · BTW {BTW}</p>
        </div>
      </footer>
    </div>
  );
}
