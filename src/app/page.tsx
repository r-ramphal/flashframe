import Image from "next/image";
// Static import zodat Next bij de build een blur-placeholder genereert: de
// hero toont direct een wazige versie i.p.v. een leeg vlak tot de foto er is.
import heroImage from "../../public/images/sfeer-1.jpg";
import Navbar from "./components/Navbar";
import BookButton from "./components/BookButton";
import BookingForm from "./components/BookingForm";
import Pricing from "./components/Pricing";
import ExampleCarousel from "./components/ExampleCarousel";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import StickyCta from "./components/StickyCta";
import PageAnimations from "./components/PageAnimations";
import Icon from "./components/Icon";
import {
  INSTAGRAM_URL,
  EMAIL,
  PHONE_TEL,
  COMPANY_NAME,
  ADDRESS_STREET,
  ADDRESS_POSTAL_CODE,
  ADDRESS_LOCALITY,
  SITE_URL,
} from "./site";
import { booths, steps, whyCards, pricingPlans } from "./content";

// Structured data (schema.org LocalBusiness) zodat Google het bedrijf,
// de regio en de pakketprijzen begrijpt en kan tonen in zoekresultaten.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY_NAME,
  description:
    "Verhuur van een fotobooth met directe prints voor bruiloften, bedrijfsfeesten en evenementen in heel Noord-Holland, met als thuisbasis Assendelft/Zaanstreek.",
  url: SITE_URL,
  telephone: PHONE_TEL,
  email: EMAIL,
  image: `${SITE_URL}/images/sfeer-1.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS_STREET,
    postalCode: ADDRESS_POSTAL_CODE,
    addressLocality: ADDRESS_LOCALITY,
    addressCountry: "NL",
  },
  areaServed: "Noord-Holland",
  sameAs: [INSTAGRAM_URL],
  priceRange: "€250 - €450",
  makesOffer: pricingPlans.map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    description: plan.desc,
    price: plan.price.replace("€", ""),
    priceCurrency: "EUR",
  })),
};

export default function Home() {
  const booth = booths[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <PageAnimations>
      <main id="top" className="pt-[80px]">
        {/* HERO — full-bleed: de foto loopt door tot de schermranden */}
        <section
          data-hero-section
          className="min-h-[80svh] flex items-center justify-center px-5 md:px-8 py-24 md:py-32 relative overflow-hidden"
        >
          {/* De transform is de beginstand van de GSAP-parallax (PageAnimations):
              door hem al in CSS te zetten "springt" de foto niet zodra GSAP
              na het idle-moment inhaakt. */}
          <div
            data-hero-image
            className="absolute inset-0 z-0 [transform:translateY(-3%)_scale(1.06)]"
          >
            <Image
              src={heroImage}
              alt=""
              fill
              priority
              placeholder="blur"
              quality={60}
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-surface/70 via-surface/65 to-surface" />
          <div className="hero-enter relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-8">
            <h1 className="text-[40px] sm:text-[48px] md:text-[72px] text-primary leading-[1.1] tracking-[-0.03em] md:tracking-[-0.04em] font-semibold">
              Leg elk moment <br />
              vast in stijl.
            </h1>
            <p className="text-lg leading-relaxed text-on-surface-variant max-w-2xl">
              Een professionele photobooth met directe prints voor bruiloften,
              bedrijfsfeesten en andere evenementen. Wij regelen alles, jij
              geniet van het moment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <a
                href="#products"
                className="btn-outline px-8 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-center w-full sm:w-auto"
              >
                Bekijk de fotobooth
              </a>
              <BookButton
                href="#booking"
                className="btn-accent inline-block px-8 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-center w-full sm:w-auto"
              >
                Boek nu
              </BookButton>
            </div>
            <p className="text-sm text-on-surface-variant">
              Vrijblijvende aanvraag · Reactie binnen 24 uur
            </p>
          </div>
        </section>

        {/* PRODUCT */}
        <section
          id="products"
          className="py-24 md:py-32 px-5 md:px-8 max-w-[1280px] mx-auto"
        >
          {/* Productfoto volgt nog van de eigenaar; tot die tijd tekst + kenmerken. */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div data-reveal>
              <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-primary mb-4">
                De fotobooth
              </h2>
              <p className="text-base text-on-surface-variant mb-8">
                {booth.description}
              </p>
              <BookButton
                href="#booking"
                className="btn-accent inline-flex px-8 py-3 rounded-full text-xs font-semibold tracking-wider uppercase"
              >
                Boek de fotobooth
              </BookButton>
            </div>
            <ul data-reveal className="bg-surface-faint rounded-2xl p-8 md:p-10 flex flex-col gap-4">
              {booth.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 text-base text-on-surface"
                >
                  <Icon
                    name="check"
                    className="w-[18px] h-[18px] text-secondary shrink-0"
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WAAROM / BENTO */}
        <section
          id="how-it-works"
          className="py-16 md:py-24 px-5 md:px-8 max-w-[1280px] mx-auto bg-surface-faint rounded-3xl my-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-8 md:p-16">
            <div data-reveal className="lg:col-span-4 flex flex-col gap-6">
              <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-primary">
                Waarom Flashframe?
              </h2>
              <p className="text-base text-on-surface-variant">
                Van aanvraag tot afbouw heb je één aanspreekpunt. Zo werkt het:
              </p>
              <div className="flex flex-col gap-4 mt-4">
                {steps.map((step, i) => (
                  <div key={step.n}>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                        {step.n}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-primary mb-1">
                          {step.title}
                        </h4>
                        <p className="text-sm text-on-surface-variant">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px h-6 bg-border-subtle ml-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div
              data-reveal-group
              className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {whyCards.map((card, i) => (
                <div
                  key={card.title}
                  className={`bg-surface p-8 rounded-2xl border border-border-subtle flex flex-col gap-3 shadow-sm ${
                    i === whyCards.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <h4 className="text-xl font-semibold text-primary">
                    {card.title}
                  </h4>
                  <p className="text-base text-on-surface-variant">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SFEERIMPRESSIE */}
        <ExampleCarousel />

        {/* PAKKETTEN & PRIJZEN */}
        <Pricing />

        {/* REVIEWS — rendert pas zodra er echte reviews zijn (data/reviews.ts) */}
        <Reviews />

        {/* BOEKEN */}
        <section
          id="booking"
          className="py-24 md:py-32 px-5 md:px-8 max-w-[1280px] mx-auto border-t border-border-subtle"
        >
          <div className="max-w-3xl mx-auto">
            <div data-reveal className="text-center mb-12">
              <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-primary mb-4">
                Neem contact op
              </h2>
              <p className="text-base text-on-surface-variant">
                Een aanvraag is geheel vrijblijvend. Zo werkt het:
              </p>
              <ol className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-8 text-sm text-on-surface-variant">
                {[
                  "Wij checken je datum",
                  "Binnen 24 uur een voorstel",
                  "Pas definitief als jij bevestigt",
                ].map((stap, i) => (
                  <li
                    key={stap}
                    className="flex items-center justify-center sm:justify-start gap-3"
                  >
                    <span className="bg-primary text-on-primary w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold shrink-0">
                      {i + 1}
                    </span>
                    {stap}
                  </li>
                ))}
              </ol>
            </div>
            <div data-reveal>
              <BookingForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      </PageAnimations>

      <StickyCta />
    </>
  );
}
