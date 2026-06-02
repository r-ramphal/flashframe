import Navbar from "./components/Navbar";
import BookingForm from "./components/BookingForm";
import Photo from "./components/Photo";
import Pricing from "./components/Pricing";
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
} from "./site";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const booths = [
  {
    title: "Fotobooth met directe print",
    description:
      "Hoogwaardige kwaliteit in seconden. Creëer tastbare herinneringen met professionele belichting en directe fysieke prints voor je gasten.",
    image: "/images/fotobooth.jpg",
    video: "/videos/booth-showcase.mp4",
    alt: "Fotobooth met directe print",
    features: [
      { icon: "print", label: "Directe premium prints" },
      { icon: "lightbulb", label: "Studio-kwaliteit ringlamp" },
      { icon: "palette", label: "Custom branding mogelijk" },
    ],
    offset: false,
  },
  {
    title: "360° Spinnerbooth",
    description:
      "Deze booth beschikt over een roterende arm waaraan je je eigen mobiele telefoon kunt bevestigen om cinematografische 360° video's te maken. Direct klaar om te delen en perfect voor social media.",
    image: "/images/spinnerbooth.jpg",
    video: "",
    alt: "360° Spinnerbooth",
    features: [
      { icon: "360", label: "Volledige 360° capture" },
      { icon: "share", label: "Direct digitaal delen" },
      { icon: "movie", label: "Slow-motion effecten" },
    ],
    offset: true,
  },
];

const steps = [
  {
    n: "1",
    title: "Kies je booth",
    desc: "Selecteer de booth die perfect bij jouw visie past.",
  },
  {
    n: "2",
    title: "Wij regelen de setup",
    desc: "Ons team arriveert ruim op tijd voor een vlekkeloze installatie.",
  },
  {
    n: "3",
    title: "Maak onvergetelijke herinneringen",
    desc: "Geniet van het moment, wij zorgen voor de rest.",
  },
];

const gallery = [
  {
    type: "video",
    src: "/videos/sfeer-1.mp4",
    alt: "Gasten poseren met props bij de photobooth",
  },
  {
    type: "image",
    src: "/images/sfeer-1.jpg",
    alt: "Lachende gasten bij de photobooth",
  },
  { type: "image", src: "/images/sfeer-2.jpg", alt: "Geprinte fotostrips" },
  {
    type: "video",
    src: "/videos/sfeer-2.mp4",
    alt: "Lachende gasten op de borrel",
  },
  { type: "image", src: "/images/sfeer-3.jpg", alt: "Gast met zijn fotostrip" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="pt-[80px]">
        {/* HERO */}
        <section className="min-h-[80vh] flex items-center justify-center px-5 md:px-8 py-24 md:py-32 max-w-[1280px] mx-auto relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10" />
          <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-8">
            <h1 className="text-[40px] sm:text-[48px] md:text-[72px] text-primary leading-[1.1] tracking-[-0.03em] md:tracking-[-0.04em] font-semibold">
              Leg elk moment <br />
              vast in stijl.
            </h1>
            <p className="text-lg leading-relaxed text-on-surface-variant max-w-2xl">
              Premium photobooths voor bruiloften, bedrijfsfeesten en
              evenementen. Wij regelen alles, jij geniet van het moment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <a
                href="#products"
                className="btn-outline px-8 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-center w-full sm:w-auto"
              >
                Bekijk booths
              </a>
              <a
                href="#booking"
                className="btn-primary px-8 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-center w-full sm:w-auto"
              >
                Boek nu
              </a>
            </div>
          </div>
        </section>

        {/* PRODUCTEN */}
        <section
          id="products"
          className="py-24 md:py-32 px-5 md:px-8 max-w-[1280px] mx-auto"
        >
          <div className="mb-16 md:mb-24 text-center md:text-left">
            <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-primary mb-4">
              Onze collectie
            </h2>
            <p className="text-base text-on-surface-variant max-w-xl">
              Ontworpen om naadloos op te gaan in elk premium evenement. Ontdek
              onze hoogwaardige photobooths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {booths.map((booth) => (
              <div
                key={booth.title}
                className={`group flex flex-col gap-6 ${
                  booth.offset ? "md:mt-24" : ""
                }`}
              >
                <div className="image-card aspect-[4/5] bg-surface-container relative">
                  {booth.video ? (
                    <video
                      src={booth.video}
                      poster={booth.image}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <Photo
                      src={booth.image}
                      alt={booth.alt}
                      label={booth.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    {booth.title}
                  </h3>
                  <p className="text-base text-on-surface-variant mb-4">
                    {booth.description}
                  </p>
                  <ul className="flex flex-col gap-2 text-xs font-semibold tracking-wider uppercase text-primary opacity-80">
                    {booth.features.map((f) => (
                      <li key={f.label} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">
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
        </section>

        {/* WAAROM / BENTO */}
        <section
          id="how-it-works"
          className="py-16 md:py-24 px-5 md:px-8 max-w-[1280px] mx-auto bg-surface-faint rounded-3xl my-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-16">
            <div className="lg:col-span-4 flex flex-col gap-6">
              <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-primary">
                Waarom Flashframe?
              </h2>
              <p className="text-base text-on-surface-variant">
                Een moeiteloze ervaring van boeking tot afbouw. Wij streven naar
                perfectie op elk evenement.
              </p>
              <div className="flex flex-col gap-4 mt-4">
                {steps.map((step, i) => (
                  <div key={step.n}>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                        {step.n}
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold tracking-wider uppercase text-primary mb-1">
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

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-surface p-8 rounded-2xl border border-border-subtle flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-[32px] text-secondary">
                  verified
                </span>
                <h4 className="text-xl font-semibold text-primary">
                  Zorgeloze ervaring
                </h4>
                <p className="text-base text-on-surface-variant">
                  Van begin tot eind geregeld. Geen technische stress tijdens je
                  evenement.
                </p>
              </div>
              <div className="bg-surface p-8 rounded-2xl border border-border-subtle flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-[32px] text-secondary">
                  support_agent
                </span>
                <h4 className="text-xl font-semibold text-primary">
                  Professionele begeleiding
                </h4>
                <p className="text-base text-on-surface-variant">
                  Altijd een getrainde host aanwezig om gasten te assisteren.
                </p>
              </div>
              <div className="bg-surface p-8 rounded-2xl border border-border-subtle flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow sm:col-span-2">
                <span className="material-symbols-outlined text-[32px] text-secondary">
                  high_quality
                </span>
                <h4 className="text-xl font-semibold text-primary">
                  Hoogwaardige kwaliteit
                </h4>
                <p className="text-base text-on-surface-variant">
                  Wij gebruiken uitsluitend professionele DSLR-camera&apos;s en
                  studio-belichting voor het beste resultaat, afgedrukt op
                  premium fotopapier of in hoge resolutie digitaal geleverd.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SFEERIMPRESSIE */}
        <section
          id="gallery"
          className="py-24 md:py-32 px-5 md:px-8 max-w-[1280px] mx-auto"
        >
          <div className="mb-12 text-center">
            <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-primary mb-4">
              Sfeerimpressie
            </h2>
            <p className="text-base text-on-surface-variant max-w-xl mx-auto">
              Beleef de magie van een Flashframe photobooth op jouw evenement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gallery.map((item) => (
              <div
                key={item.src}
                className="image-card aspect-[3/4] bg-surface-container relative shadow-sm"
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    aria-label={item.alt}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <Photo
                    src={item.src}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* PAKKETTEN & PRIJZEN */}
        <Pricing />

        {/* BOEKEN */}
        <section
          id="booking"
          className="py-24 md:py-32 px-5 md:px-8 max-w-[1280px] mx-auto border-t border-border-subtle"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-primary mb-4">
                Check beschikbaarheid
              </h2>
              <p className="text-base text-on-surface-variant">
                Vul het formulier in en we nemen binnen 24 uur contact met je op
                met een voorstel op maat.
              </p>
            </div>
            <BookingForm />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        id="contact"
        className="w-full py-16 md:py-24 bg-surface border-t border-border-subtle"
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-lg font-bold text-primary">Flashframe</span>
            <p className="text-base text-on-surface-variant opacity-60">
              Premium photobooth-ervaringen voor onvergetelijke evenementen.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-primary">
              Links
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="#products"
                className="text-base text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity"
              >
                Producten
              </a>
              <a
                href="#pricing"
                className="text-base text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity"
              >
                Prijzen
              </a>
              <a
                href="#booking"
                className="text-base text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity"
              >
                Beschikbaarheid
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-primary">
              Contact
            </h4>
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
            <h4 className="text-xs font-semibold tracking-wider uppercase text-primary">
              Volg ons
            </h4>
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
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 mt-12 pt-8 border-t border-border-subtle flex flex-col md:flex-row md:justify-between gap-2">
          <p className="text-sm text-on-surface-variant opacity-60">
            © {new Date().getFullYear()} {COMPANY_NAME}. Premium Photobooth
            Rentals.
          </p>
          <p className="text-sm text-on-surface-variant opacity-60">
            KvK {KVK} · BTW {BTW}
          </p>
        </div>
      </footer>
    </>
  );
}
