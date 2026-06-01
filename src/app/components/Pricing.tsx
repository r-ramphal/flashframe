// Prijzen zijn indicatief en gebaseerd op gangbare NL photobooth-verhuurtarieven.
// De eigenaar kan namen, prijzen en inbegrepen items hier eenvoudig aanpassen.
const plans = [
  {
    name: "Fotobooth",
    price: "€295",
    unit: "per evenement",
    desc: "De klassieker met directe fysieke prints.",
    features: [
      "3 uur huur",
      "Onbeperkt fysieke prints",
      "Professionele belichting (ringlamp)",
      "Diverse props inbegrepen",
      "Op- en afbouw inbegrepen",
    ],
    highlighted: false,
  },
  {
    name: "360° Spinnerbooth",
    price: "€395",
    unit: "per evenement",
    desc: "Cinematische 360° video's, klaar voor social media.",
    features: [
      "3 uur huur",
      "Onbeperkte 360° video-opnames",
      "Direct digitaal delen",
      "Slow-motion & effecten",
      "Custom overlay met jouw naam/logo",
      "Op- en afbouw inbegrepen",
    ],
    highlighted: true,
  },
  {
    name: "Compleet pakket",
    price: "€650",
    unit: "per evenement",
    desc: "Beide booths voor de ultieme ervaring.",
    features: [
      "Fotobooth én 360° Spinnerbooth",
      "4 uur huur",
      "Professionele host aanwezig",
      "Onbeperkt prints én video's",
      "Online galerij achteraf",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 md:py-32 px-5 md:px-8 max-w-[1280px] mx-auto"
    >
      <div className="mx-auto max-w-2xl text-center mb-12 md:mb-20">
        <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-primary mb-4">
          Pakketten &amp; prijzen
        </h2>
        <p className="text-base text-on-surface-variant">
          Transparante pakketten voor elk evenement. Op zoek naar maatwerk? Vraag
          gerust een voorstel op maat aan.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 items-start">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-2xl bg-surface-bright shadow-sm ${
              plan.highlighted
                ? "border-2 border-secondary md:-mt-4 md:mb-4"
                : "border border-border-subtle"
            }`}
          >
            <div className="p-8">
              {plan.highlighted && (
                <span className="inline-block mb-4 text-[11px] font-semibold tracking-wider uppercase text-on-primary bg-secondary px-3 py-1 rounded-full">
                  Meest gekozen
                </span>
              )}
              <h3 className="text-xl font-semibold text-primary">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-primary">
                  {plan.price}
                </span>
                <span className="text-sm text-text-muted">{plan.unit}</span>
              </div>
              <p className="mt-3 text-sm text-on-surface-variant">{plan.desc}</p>
            </div>

            <div className="border-y border-border-subtle px-8 py-4">
              <a
                href="#booking"
                className={`flex items-center justify-center w-full px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase ${
                  plan.highlighted ? "btn-primary" : "btn-outline"
                }`}
              >
                Aanvragen
              </a>
            </div>

            <ul role="list" className="space-y-3 p-8">
              {plan.features.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-base text-on-surface"
                >
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    check
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-text-muted mt-10">
        Genoemde prijzen zijn indicatief. Definitieve tarieven kunnen variëren op
        basis van locatie, datum en wensen.
      </p>
    </section>
  );
}
