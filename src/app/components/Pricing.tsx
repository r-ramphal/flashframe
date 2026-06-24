// Data staat centraal in content.ts (pricingPlans) zodat alle ontwerpen gelijk blijven.
import {
  pricingPlans as plans,
  extraHoursNote,
  travelCostNote,
} from "../content";
import PlanCta from "./PlanCta";
import Icon from "./Icon";

export default function Pricing() {
  const single = plans.length === 1;

  return (
    <section
      id="pricing"
      className="py-24 md:py-32 px-5 md:px-8 max-w-[1280px] mx-auto"
    >
      <div data-reveal className="mx-auto max-w-2xl text-center mb-12 md:mb-16">
        <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-primary mb-4">
          Prijzen
        </h2>
        <p className="text-base text-on-surface-variant">
          Kies het pakket dat bij jouw evenement past. Op zoek naar maatwerk?
          Vraag gerust een voorstel op maat aan.
        </p>
      </div>

      <div
        data-reveal-group
        className={
          single ? "max-w-md mx-auto" : "grid gap-6 md:grid-cols-3"
        }
      >
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex h-full flex-col rounded-2xl bg-surface-bright shadow-sm transition-transform duration-300 ease-out hover:-translate-y-1.5 ${
              plan.highlighted
                ? "border-2 border-secondary md:-translate-y-2 md:hover:-translate-y-3"
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
              <PlanCta
                plan={`${plan.name} (${plan.price})`}
                className={`flex items-center justify-center w-full px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase ${
                  plan.highlighted || single ? "btn-accent" : "btn-outline"
                }`}
              >
                Aanvragen
              </PlanCta>
            </div>

            <ul role="list" className="space-y-3 p-8">
              {plan.features.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-base text-on-surface"
                >
                  <Icon
                    name="check"
                    className="w-[18px] h-[18px] text-secondary shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-3">
        <p className="flex items-center gap-2 rounded-full bg-surface-faint px-4 py-2 text-sm font-medium text-on-surface">
          <Icon
            name="clock"
            className="w-[18px] h-[18px] text-secondary shrink-0"
          />
          {extraHoursNote}
        </p>
        <p className="text-center text-sm text-text-muted max-w-xl">
          {travelCostNote}
        </p>
      </div>
    </section>
  );
}
