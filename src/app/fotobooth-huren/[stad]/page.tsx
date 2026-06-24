import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import BookButton from "../../components/BookButton";
import BookingForm from "../../components/BookingForm";
import Pricing from "../../components/Pricing";
import ExampleCarousel from "../../components/ExampleCarousel";
import Reviews from "../../components/Reviews";
import Footer from "../../components/Footer";
import StickyCta from "../../components/StickyCta";
import PageAnimations from "../../components/PageAnimations";
import Icon from "../../components/Icon";
import { citySlugs, getCity } from "../../data/cities";
import { booths, pricingPlans } from "../../content";
import {
  SITE_URL,
  COMPANY_NAME,
  PHONE_TEL,
  EMAIL,
  ADDRESS_STREET,
  ADDRESS_POSTAL_CODE,
  ADDRESS_LOCALITY,
  INSTAGRAM_URL,
} from "../../site";

// Alleen de bekende steden statisch prerenderen; een onbekende stad → 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return citySlugs.map((stad) => ({ stad }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stad: string }>;
}): Promise<Metadata> {
  const { stad } = await params;
  const city = getCity(stad);
  if (!city) return {};

  const title = `Fotobooth huren in ${city.naam} | Flashframe Photobooth`;
  const path = `/fotobooth-huren/${city.slug}`;
  return {
    title,
    description: city.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: "Flashframe Photobooth",
      locale: "nl_NL",
      title,
      description: city.metaDescription,
      images: [
        {
          url: "/images/sfeer-1.jpg",
          alt: `Flashframe fotobooth bij een evenement in ${city.naam}`,
        },
      ],
    },
  };
}

// Reisnote afgeleid van de afstand (eerste 15 km gratis, zie content.ts).
function reisnote(afstandKm: number): string {
  if (afstandKm === 0) return "Wij zijn hier gevestigd — dus geen reiskosten.";
  if (afstandKm <= 15) {
    return `Op zo'n ${afstandKm} km vanaf onze basis in Assendelft — binnen onze gratis reisregio (de eerste 15 km zijn gratis).`;
  }
  return `Op zo'n ${afstandKm} km vanaf Assendelft. De eerste 15 km zijn gratis, daarna geldt €0,30 per kilometer.`;
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ stad: string }>;
}) {
  const { stad } = await params;
  const city = getCity(stad);
  if (!city) notFound();
  const booth = booths[0];

  // Stad-specifieke LocalBusiness met areaServed op de plaats.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${COMPANY_NAME} — ${city.naam}`,
    description: city.metaDescription,
    url: `${SITE_URL}/fotobooth-huren/${city.slug}`,
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
    areaServed: { "@type": "City", name: city.naam },
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <PageAnimations>
        <main id="top" className="pt-[80px]">
          {/* HERO */}
          <section
            data-hero-section
            className="min-h-[60svh] flex items-center justify-center px-5 md:px-8 py-24 md:py-28 relative overflow-hidden"
          >
            <div
              data-hero-image
              className="absolute inset-0 z-0 [transform:translateY(-3%)_scale(1.06)]"
            >
              <Image
                src="/images/sfeer-1.jpg"
                alt=""
                fill
                priority
                quality={60}
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-surface/70 via-surface/65 to-surface" />
            <div className="hero-enter relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
              <h1 className="text-[34px] sm:text-[44px] md:text-[60px] text-primary leading-[1.1] tracking-[-0.03em] md:tracking-[-0.04em] font-semibold">
                Fotobooth huren in {city.naam}
              </h1>
              <p className="text-lg leading-relaxed text-on-surface-variant max-w-2xl">
                {city.lead}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
                <a
                  href="#pricing"
                  className="btn-outline px-8 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-center w-full sm:w-auto"
                >
                  Bekijk de pakketten
                </a>
                <BookButton
                  href="#booking"
                  className="btn-accent inline-block px-8 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-center w-full sm:w-auto"
                >
                  Boek nu
                </BookButton>
              </div>
              <p className="text-sm text-on-surface-variant">
                {reisnote(city.afstandKm)}
              </p>
            </div>
          </section>

          {/* INTRO / LOKALE CONTEXT */}
          <section className="py-20 md:py-28 px-5 md:px-8 max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div data-reveal>
                <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-primary mb-4">
                  Jouw feest in {city.naam}, wij regelen de fotobooth
                </h2>
                <p className="text-base text-on-surface-variant mb-4">
                  {city.context}
                </p>
                <p className="text-base text-on-surface-variant mb-8">
                  {booth.description}
                </p>
                <BookButton
                  href="#booking"
                  className="btn-accent inline-flex px-8 py-3 rounded-full text-xs font-semibold tracking-wider uppercase"
                >
                  Vraag je datum aan
                </BookButton>
              </div>
              <ul
                data-reveal
                className="bg-surface-faint rounded-2xl p-8 md:p-10 flex flex-col gap-4"
              >
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

          {/* SFEERIMPRESSIE */}
          <ExampleCarousel />

          {/* PAKKETTEN & PRIJZEN */}
          <Pricing />

          {/* REVIEWS — rendert pas zodra er echte reviews zijn */}
          <Reviews />

          {/* BOEKEN */}
          <section
            id="booking"
            className="py-24 md:py-32 px-5 md:px-8 max-w-[1280px] mx-auto border-t border-border-subtle"
          >
            <div className="max-w-3xl mx-auto">
              <div data-reveal className="text-center mb-12">
                <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-primary mb-4">
                  Fotobooth boeken in {city.naam}
                </h2>
                <p className="text-base text-on-surface-variant">
                  Een aanvraag is geheel vrijblijvend — we reageren binnen 24 uur
                  met een voorstel op maat.
                </p>
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
