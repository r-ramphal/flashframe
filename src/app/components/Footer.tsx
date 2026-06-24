import Link from "next/link";
import {
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  COMPANY_NAME,
  ADDRESS_STREET,
  ADDRESS_CITY,
  KVK,
  BTW,
} from "../site";
import { cities } from "../data/cities";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// Gedeelde footer voor de homepage én de lokale stadspagina's. De "Links"-kolom
// wijst naar de homepage-secties (/#...) zodat ze op elke pagina kloppen. De
// regio-band linkt naar alle stadspagina's: goed voor vindbaarheid én voor de
// interne linkstructuur (crawlbaarheid) van de lokale SEO-pagina's.
export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full py-16 md:py-24 bg-surface border-t border-border-subtle"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4">
          <span className="brand-font text-lg font-bold text-primary">
            Flashframe{" "}
            <span className="font-medium text-on-surface-variant">
              Photobooth
            </span>
          </span>
          <p className="text-base text-on-surface-variant opacity-60">
            Photobooth-verhuur voor bruiloften, bedrijfsfeesten en evenementen.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xs font-semibold tracking-wider uppercase text-primary">
            Links
          </h2>
          <div className="flex flex-col gap-2">
            <Link
              href="/#products"
              className="text-base text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity"
            >
              De fotobooth
            </Link>
            <Link
              href="/#pricing"
              className="text-base text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity"
            >
              Prijzen
            </Link>
            <Link
              href="/#booking"
              className="text-base text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xs font-semibold tracking-wider uppercase text-primary">
            Contact
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-base text-on-surface-variant opacity-60">
              {ADDRESS_STREET}
              <br />
              {ADDRESS_CITY}
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-base text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-base text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity"
            >
              {EMAIL}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity"
            >
              <InstagramIcon className="w-4 h-4" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:items-end md:text-right">
          <h2 className="text-xs font-semibold tracking-wider uppercase text-primary">
            Volg ons
          </h2>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open onze Instagram"
            className="image-card bg-surface-bright p-2 w-32 h-32"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/instagram-qr.svg"
              alt="QR-code naar de Instagram van Flashframe"
              className="w-full h-full"
            />
          </a>
          <p className="text-xs text-on-surface-variant opacity-60">
            Scan voor onze Instagram
          </p>
        </div>
      </div>

      {/* Regio: fotobooth huren per plaats — vindbaarheid + interne links. */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 mt-12 pt-8 border-t border-border-subtle">
        <h2 className="text-xs font-semibold tracking-wider uppercase text-primary mb-3">
          Fotobooth huren in Noord-Holland
        </h2>
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          {cities.map((city) => (
            <li key={city.slug}>
              <Link
                href={`/fotobooth-huren/${city.slug}`}
                className="text-sm text-on-surface-variant opacity-60 hover:opacity-100 hover:text-secondary transition-colors"
              >
                {city.naam}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-on-surface-variant opacity-60">
          Staat jouw plaats er niet bij? Geen probleem — we komen door heel
          Noord-Holland (en daarbuiten in overleg).{" "}
          <Link
            href="/#booking"
            className="text-secondary font-medium hover:underline opacity-100"
          >
            Vraag vrijblijvend je datum aan
          </Link>
          .
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-8 mt-12 pt-8 border-t border-border-subtle flex flex-col md:flex-row md:justify-between gap-2">
        <p className="text-sm text-on-surface-variant opacity-60">
          © {new Date().getFullYear()} {COMPANY_NAME}. Alle rechten
          voorbehouden.
        </p>
        <p className="text-sm text-on-surface-variant opacity-60">
          KvK {KVK} · BTW {BTW}
        </p>
      </div>
    </footer>
  );
}
