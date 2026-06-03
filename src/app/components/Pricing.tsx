// Prijzen zijn indicatief en gebaseerd op gangbare NL photobooth-verhuurtarieven.
// Data staat centraal in content.ts (pricingPlans) zodat alle ontwerpen gelijk blijven.
import { pricingPlans as plans } from "../content";

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

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex h-full flex-col rounded-2xl bg-surface-bright shadow-sm ${
              plan.highlighted
                ? "border-2 border-secondary"
                : "border border-border-subtle"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-on-primary">
                Meest gekozen
              </span>
            )}
            <div className="p-8">
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
