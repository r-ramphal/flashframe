import Navbar from "./components/Navbar";
import BookingForm from "./components/BookingForm";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-violet-700/20 rounded-full blur-[80px] sm:blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-purple-900/20 rounded-full blur-[60px] sm:blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center pt-24 pb-12">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6">
              Maak jouw feest{" "}
              <span className="text-violet-400 glow-text">onvergetelijk</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Flashframe brengt professionele photobooth-ervaringen naar jouw
              evenement. Van spectaculaire 360° spinnerclips tot direct
              geprinte foto&apos;s — voor elk feest iets memorabels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#boeken"
                className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-8 py-4 rounded-full text-center transition-all duration-200 pulse-glow"
              >
                Beschikbaarheid checken
              </a>
              <a
                href="#booths"
                className="border border-white/20 hover:border-violet-500/50 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-full text-center transition-all duration-200"
              >
                Bekijk onze booths
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative float-animation">
              <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-violet-800/40 to-purple-900/40 border border-violet-500/30 glow-purple flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl sm:text-8xl mb-3">📸</div>
                  <p className="text-violet-300 font-semibold text-base sm:text-lg">Flashframe Booths</p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">Foto volgt nog</p>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-violet-400 rounded-full" />
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-purple-600 rounded-full opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* BOOTHS */}
      <section id="booths" className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Onze <span className="text-violet-400">booths</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
              Kies de booth die bij jouw evenement past.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                icon: "🌀",
                title: "360° Spinnerbooth",
                description:
                  "Gasten stappen op het platform terwijl een arm met camera een volledige cirkel draait. Het resultaat: een cinematic slowmotion clip die direct gedeeld kan worden.",
                tags: ["360° video", "Slowmotion", "Direct delen"],
              },
              {
                icon: "🖨️",
                title: "Fotobooth met print",
                description:
                  "Klassieke photobooth ervaring met een moderne twist. Gasten maken foto's en ontvangen binnen seconden een hoge kwaliteit afdruk als tastbare herinnering.",
                tags: ["Directe print", "Hoge kwaliteit", "Fysieke foto"],
              },
            ].map((booth) => (
              <div
                key={booth.title}
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 sm:p-8 hover:border-violet-500/40 transition-all duration-300 group"
              >
                <div className="text-4xl sm:text-5xl mb-5">{booth.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                  {booth.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-5 text-sm sm:text-base">
                  {booth.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {booth.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="hoe-het-werkt" className="py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Hoe werkt het?
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
              In een paar stappen hebben jouw gasten iets om nooit te vergeten.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Boek jouw datum",
                description:
                  "Check beschikbaarheid via het formulier. We bevestigen snel en regelen de rest.",
                icon: "📅",
              },
              {
                step: "02",
                title: "Wij verzorgen alles",
                description:
                  "De booth wordt opgebouwd en klaargesteld op jouw locatie. Jij hoeft niets te doen.",
                icon: "🔧",
              },
              {
                step: "03",
                title: "Gasten genieten",
                description:
                  "Foto's, clips en prints — jouw gasten gaan naar huis met een herinnering voor altijd.",
                icon: "🎉",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 sm:p-8 hover:border-violet-500/40 transition-all duration-300 group"
              >
                <div className="text-3xl sm:text-4xl mb-4">{item.icon}</div>
                <div className="text-violet-500 text-xs sm:text-sm font-bold tracking-widest mb-2">
                  STAP {item.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FLASHFRAME */}
      <section className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Waarom <span className="text-violet-400">Flashframe</span>?
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: "✨", title: "Professioneel resultaat", desc: "Hoge kwaliteit beelden en prints direct klaar" },
              { icon: "⚡", title: "Snelle levering", desc: "Gasten ontvangen hun content dezelfde avond nog" },
              { icon: "🎨", title: "Aanpasbaar", desc: "Overlay, tekst en branding op maat mogelijk" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 sm:p-6 text-center hover:border-violet-500/30 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white mb-2 text-sm sm:text-base">{item.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="boeken" className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Check <span className="text-violet-400">beschikbaarheid</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Vul het formulier in en we nemen binnen 24 uur contact op.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08] py-8 sm:py-10 px-4 sm:px-6 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xl font-bold tracking-widest uppercase text-white">
            Flash<span className="text-violet-500">frame</span>
          </span>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Flashframe. Alle rechten voorbehouden.
          </p>
        </div>
      </footer>
    </main>
  );
}
