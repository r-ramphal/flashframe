import Navbar from "./components/Navbar";
import BookingForm from "./components/BookingForm";
import BoothImage from "./components/BoothImage";

const products = [
  {
    id: "spinnerbooth",
    eyebrow: "360° Spinnerbooth",
    title: "Een clip die iedereen wil delen.",
    description:
      "Gasten stappen op het platform terwijl een camera-arm een volledige cirkel om hen heen draait. Het resultaat is een cinematic slowmotion video — direct klaar om te delen op social media.",
    image: "/images/spinnerbooth.jpg",
    tags: ["360° video", "Slowmotion", "Direct delen"],
  },
  {
    id: "fotobooth",
    eyebrow: "Fotobooth met print",
    title: "Een herinnering om vast te houden.",
    description:
      "De klassieke photobooth in een modern jasje. Gasten maken foto's en ontvangen binnen seconden een hoogwaardige afdruk — een tastbare herinnering die ze mee naar huis nemen.",
    image: "/images/fotobooth.jpg",
    tags: ["Directe print", "Hoge kwaliteit", "Fysieke foto"],
  },
];

export default function Home() {
  return (
    <main id="top" className="flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 sm:px-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center pt-20 fade-up">
          <p className="text-accent-soft text-sm sm:text-base font-medium mb-5">
            Photobooth &amp; 360° Spinnerbooth verhuur
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight-apple leading-[1.05] mb-6">
            Maak elk moment
            <br />
            <span className="bg-gradient-to-r from-accent-soft to-accent bg-clip-text text-transparent">
              onvergetelijk.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Flashframe brengt premium photobooth-ervaringen naar jouw evenement.
            Van spectaculaire 360° clips tot direct geprinte foto&apos;s.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#boeken"
              className="bg-white text-black font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors"
            >
              Check beschikbaarheid
            </a>
            <a
              href="#producten"
              className="text-white font-medium px-7 py-3.5 rounded-full border border-white/20 hover:bg-white/5 transition-colors"
            >
              Bekijk de booths →
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTEN */}
      <section id="producten" className="py-24 sm:py-32 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight-apple mb-4">
              Onze booths
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Twee unieke ervaringen. Beide zorgen voor een avond die niemand
              vergeet.
            </p>
          </div>

          <div className="space-y-20 sm:space-y-32">
            {products.map((product, i) => (
              <div
                key={product.id}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <BoothImage
                    src={product.image}
                    alt={product.eyebrow}
                    label={product.eyebrow}
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-accent-soft text-sm font-medium mb-3">
                    {product.eyebrow}
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight-apple mb-5 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-muted text-lg leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm text-white/70 bg-white/[0.06] border border-white/10 px-3.5 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOE HET WERKT */}
      <section
        id="hoe-het-werkt"
        className="py-24 sm:py-32 px-5 sm:px-8 border-t border-white/[0.06]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight-apple mb-4">
              Hoe het werkt
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              In een paar stappen geregeld. Jij hoeft je nergens druk om te
              maken.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Boek jouw datum",
                description:
                  "Check beschikbaarheid via het formulier. We bevestigen snel en regelen de rest.",
              },
              {
                step: "02",
                title: "Wij verzorgen alles",
                description:
                  "De booth wordt opgebouwd en klaargezet op jouw locatie. Jij hoeft niets te doen.",
              },
              {
                step: "03",
                title: "Gasten genieten",
                description:
                  "Foto's, clips en prints — jouw gasten gaan naar huis met een herinnering voor altijd.",
              },
            ].map((item) => (
              <div key={item.step}>
                <div className="text-accent-soft text-sm font-semibold tracking-widest mb-3">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAAROM */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight-apple">
              Waarom Flashframe
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Professioneel resultaat",
                desc: "Hoogwaardige beelden en prints, direct klaar.",
              },
              {
                title: "Snelle levering",
                desc: "Gasten ontvangen hun content nog dezelfde avond.",
              },
              {
                title: "Volledig aanpasbaar",
                desc: "Overlay, tekst en branding volledig op maat.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.05] transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOEKEN */}
      <section
        id="boeken"
        className="py-24 sm:py-32 px-5 sm:px-8 border-t border-white/[0.06]"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight-apple mb-4">
              Check beschikbaarheid
            </h2>
            <p className="text-muted text-lg">
              Vul het formulier in en we nemen binnen 24 uur contact op.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-10">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer
        id="contact"
        className="border-t border-white/[0.08] py-16 px-5 sm:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between gap-10 mb-12">
            <div>
              <span className="text-lg font-semibold tracking-tight-apple">
                Flash<span className="text-accent-soft">frame</span>
              </span>
              <p className="text-muted text-sm mt-3 max-w-xs leading-relaxed">
                Premium photobooth- en 360° spinnerbooth-verhuur voor
                onvergetelijke evenementen.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm font-medium text-white/80">Contact</span>
              <a
                href="mailto:info@flashframe.nl"
                className="text-muted hover:text-white transition-colors text-sm"
              >
                info@flashframe.nl
              </a>
              <a
                href="#boeken"
                className="text-muted hover:text-white transition-colors text-sm"
              >
                Beschikbaarheid checken
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between gap-2 text-sm text-muted">
            <p>© {new Date().getFullYear()} Flashframe. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
