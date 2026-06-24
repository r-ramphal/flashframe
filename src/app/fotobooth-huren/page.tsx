import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import BookButton from "../components/BookButton";
import BookingForm from "../components/BookingForm";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import StickyCta from "../components/StickyCta";
import PageAnimations from "../components/PageAnimations";
import Icon from "../components/Icon";
import { cities } from "../data/cities";
import { SITE_URL } from "../site";

const TITLE = "Fotobooth huren in Noord-Holland | Flashframe Photobooth";
const DESCRIPTION =
  "Fotobooth huren in heel Noord-Holland — van de Zaanstreek tot Amsterdam, Haarlem, Alkmaar en Hoorn. Directe prints, props en op- en afbouw inbegrepen. Vraag je datum aan.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/fotobooth-huren" },
  openGraph: {
    type: "website",
    url: "/fotobooth-huren",
    siteName: "Flashframe Photobooth",
    locale: "nl_NL",
    title: TITLE,
    description: DESCRIPTION,
  },
};

// Korte tag per plaats op basis van de afstand.
function tagFor(afstandKm: number): string {
  if (afstandKm === 0) return "Thuisbasis";
  if (afstandKm <= 15) return "Gratis reisregio";
  return `± ${afstandKm} km`;
}

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Fotobooth huren in Noord-Holland",
        item: `${SITE_URL}/fotobooth-huren`,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: cities.map((city, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Fotobooth huren in ${city.naam}`,
      url: `${SITE_URL}/fotobooth-huren/${city.slug}`,
    })),
  },
];

export default function RegioHub() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <PageAnimations>
        <main id="top" className="pt-[80px]">
          {/* HERO / INTRO */}
          <section className="py-20 md:py-28 px-5 md:px-8 max-w-3xl mx-auto text-center">
            <nav
              aria-label="Kruimelpad"
              className="mb-6 text-sm text-text-muted"
            >
              <Link href="/" className="hover:text-secondary">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-on-surface">Fotobooth huren</span>
            </nav>
            <h1 className="text-[34px] sm:text-[44px] md:text-[56px] font-semibold tracking-[-0.03em] text-primary leading-[1.1]">
              Fotobooth huren in Noord-Holland
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">
              Van de Zaanstreek tot Amsterdam, Haarlem, Alkmaar en Hoorn: wij
              komen met onze fotobooth naar je toe. Kies je plaats voor de
              details, of vraag direct vrijblijvend je datum aan.
            </p>
            <div className="mt-8 flex justify-center">
              <BookButton
                href="#booking"
                className="btn-accent inline-block px-8 py-3 rounded-full text-xs font-semibold tracking-wider uppercase"
              >
                Vraag je datum aan
              </BookButton>
            </div>
          </section>

          {/* STEDENRASTER */}
          <section className="pb-8 px-5 md:px-8 max-w-[1280px] mx-auto">
            <div
              data-reveal-group
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/fotobooth-huren/${city.slug}`}
                  className="group flex flex-col rounded-2xl border border-border-subtle bg-surface-bright p-6 shadow-sm transition-transform duration-300 ease-out hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-lg font-semibold text-primary">
                      {city.naam}
                    </h2>
                    <span className="shrink-0 rounded-full bg-surface-faint px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                      {tagFor(city.afstandKm)}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-on-surface-variant">
                    {city.lead}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-secondary">
                    Bekijk
                    <Icon
                      name="arrow-forward"
                      className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-on-surface-variant">
              Staat jouw plaats er niet bij? Geen probleem — we komen door heel
              Noord-Holland (en daarbuiten in overleg).{" "}
              <a href="#booking" className="text-secondary font-medium hover:underline">
                Vraag het ons gerust
              </a>
              .
            </p>
          </section>

          {/* PAKKETTEN & PRIJZEN */}
          <Pricing />

          {/* BOEKEN */}
          <section
            id="booking"
            className="py-24 md:py-32 px-5 md:px-8 max-w-[1280px] mx-auto border-t border-border-subtle"
          >
            <div className="max-w-3xl mx-auto">
              <div data-reveal className="text-center mb-12">
                <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-primary mb-4">
                  Vraag je datum aan
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
