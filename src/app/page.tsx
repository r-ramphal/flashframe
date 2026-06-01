import Navbar from "./components/Navbar";
import BookingForm from "./components/BookingForm";
import Photo from "./components/Photo";

const booths = [
  {
    title: "Fotobooth met directe print",
    description:
      "Hoogwaardige kwaliteit in seconden. Creëer tastbare herinneringen met professionele belichting en directe fysieke prints voor je gasten.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2pyartU19EqJGuP1oPVBryyn8nwtaTfRAcBZPxcdkCUYXP1aSWhltLO54Io-HcRSndR832H8mGO5__EfD8M1aufcI9mmywjWixDQe27-qSvR2M330flNvhmgak3b6yColk8ZJKsQ59mUTzrDyOBCHW0fB2TAzSqX6P37kpE3coSckPMlL3Scud_s77Q036I27vZ0_Mo420ZaAJIC-cc2yR3lSwInLDYn41SeKXPP28S9ryrODyMf0q0mox_BTh5TohokZ5x_qiGRj",
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9UsmpUfufNQYk8o7v2IXo5AxS5Z3kfXFcutZp3lCqW_7vRjWetbkmFNfPve7jTQQbDhWb6qUhlOH8fLbEC8SXMRXx50tu-LFk8v3v_0OuMP20564FPommtQYojjBD8e3SnAmSGu_Vf9pmYv2dqQ-qiHPJmnfOQB-eRejEAq1t_SNVfqP5_YaTeKOqJoK0TkhpSqG1gmvOwM0oDi1MKZ4eLh-2voEEkb2_cnXo0V46rb6-0YvCAopBfKxpMK8gCyR-LZzpq2922R5w",
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
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7LDEds087AxUPpF1yU4vx0bSWMzTPsei5eAFHQy6Ou_pc1HlnlAZWPHMKPeh4u3L3N93prHXxHTmbi3RdcdQ-hRXiy5E2srdfsDNZT8MWJyReMS-E3_TdUPhjtiGkKYX8DLqJWeGS8e4o7hUw7CLUrH79twiHetwkmSNgvLJi8GdVz2qKZqqBWMt9XfogH_roFzBkgYvz5yMNs6y5AGvx4CoHcPTHPED95KoOmv5Ys4ERgu7uqBZsB5YNo5RMbKy7OYrHaOUxeqj9",
    alt: "Lachende mensen bij photobooth",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5UdmVX7VN-cYehL1uA5FWRqNzTB3tuyA1IlpcEshDlMMa510zwhulWBlMVZcydo2_21K5_2TL0RBnRwNl74-Iy4CHJCRubIJaOoLoKw5XpywdVWSUiSWgkVvityDfvPgBAUQs4jqySsUwJfBpDeuvChRx0GNIUAUhSQ2SuvgW_M3Hq0yesIIURywb4Rgxj1laUCmCz1yjpxUTKDxmtwlCBDY-wVlF8sWkg3RQ2JzObO9-ScTS0K8rjO__26LfvuGc6jhKkDVH1Qtg",
    alt: "Geprinte fotostrips",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGByV8bGuDcqUmskEzkgFj0XXl22vpDHng2dYjP-By7CGXkfjU6cmmp5inSRqFrV_Zhfp6NynbiH2FxvftCqFylg2v-H5xVvuphhqY4YGRjm0WIZnsRo8jbUNu9Kt_pILNd3GSIrImnyPv3bHUw3bTBjrayslJfiLpGOxybEdlRWxprr6ggJWZmrtMfY8XKjnyS0OiT1lN7DqmipR5W-IiKSpGbSUmivZymX60fZhMGWiYFEAUh0ZZAYhCx13xDCqtAk3fysEuBOCI",
    alt: "Photobooth scherm met neon verlichting",
  },
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
                  <Photo
                    src={booth.image}
                    alt={booth.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
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
            {gallery.map((img) => (
              <div
                key={img.src}
                className="image-card aspect-[3/4] bg-surface-container relative shadow-sm"
              >
                <Photo
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>

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
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
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
                href="#booking"
                className="text-base text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity"
              >
                Beschikbaarheid
              </a>
              <a
                href="mailto:info@flashframe.nl"
                className="text-base text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity"
              >
                info@flashframe.nl
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-end md:text-right">
            <p className="text-base text-on-surface-variant opacity-60 mt-auto">
              © {new Date().getFullYear()} Flashframe. Premium Photobooth
              Rentals.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
