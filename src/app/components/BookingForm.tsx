"use client";

import { useEffect, useState } from "react";
import { whatsappUrl } from "../site";
import { pricingPlans } from "../content";

const fieldClass =
  "input-field w-full px-4 py-3 text-base text-primary placeholder:text-text-muted";
const labelClass =
  "block text-xs font-semibold tracking-wider uppercase text-primary mb-2";
const groupTitleClass =
  "text-sm font-semibold tracking-wider uppercase text-secondary";

// Sterretje achter het label van een verplicht veld.
const Req = () => (
  <span className="text-error" aria-hidden>
    {" "}
    *
  </span>
);

// Naam van het event waarmee de pakketknoppen bij "Prijzen" dit formulier
// voorinvullen (zie PlanCta.tsx).
export const SELECT_PLAN_EVENT = "flashframe:select-plan";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pakket, setPakket] = useState("");

  // Datum van vandaag (YYYY-MM-DD) om data in het verleden te blokkeren.
  const today = new Date().toISOString().split("T")[0];

  // Klik op "Aanvragen" bij een pakket → dat pakket staat hier voorgeselecteerd.
  useEffect(() => {
    const handler = (e: Event) => setPakket((e as CustomEvent<string>).detail);
    window.addEventListener(SELECT_PLAN_EVENT, handler);
    return () => window.removeEventListener(SELECT_PLAN_EVENT, handler);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Verstuurt naar onze eigen server-side route, die via Resend mailt.
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setError(
          result.error ||
            "Er ging iets mis bij het versturen. Probeer het opnieuw of mail ons direct."
        );
      }
    } catch {
      setError(
        "Geen verbinding. Controleer je internet en probeer het opnieuw."
      );
    }

    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="bg-surface-bright p-8 md:p-12 rounded-2xl border border-border-subtle shadow-sm text-center">
        <span className="material-symbols-outlined text-secondary text-5xl mb-4">
          check_circle
        </span>
        <h3 className="text-2xl font-semibold text-primary mb-2">
          Aanvraag ontvangen!
        </h3>
        <p className="text-on-surface-variant">
          We nemen binnen 24 uur contact met je op met een voorstel op maat.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-10 bg-surface-bright p-6 sm:p-8 md:p-12 rounded-2xl border border-border-subtle shadow-sm"
    >
      {/* Honeypot tegen spam: door bots ingevuld, voor mensen verborgen */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Stap 1: contactgegevens */}
      <div className="space-y-5">
        <div className="flex items-baseline justify-between gap-4">
          <p className={groupTitleClass}>1 · Jouw gegevens</p>
          <p className="text-xs text-text-muted">
            <span className="text-error">*</span> = verplicht
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="name">
              Naam
              <Req />
            </label>
            <input
              id="name"
              name="naam"
              type="text"
              required
              autoComplete="name"
              placeholder="Jouw volledige naam"
              className={fieldClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="email">
              E-mailadres
              <Req />
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="jouw@email.nl"
              className={fieldClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="phone">
              Telefoonnummer
              <Req />
            </label>
            <input
              id="phone"
              name="telefoon"
              type="tel"
              required
              autoComplete="tel"
              placeholder="+31 6 12345678"
              className={fieldClass}
            />
          </div>
        </div>
      </div>

      {/* Stap 2: het evenement */}
      <div className="space-y-5">
        <p className={groupTitleClass}>2 · Het evenement</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass} htmlFor="date">
              Datum evenement
              <Req />
            </label>
            <input
              id="date"
              name="datum"
              type="date"
              required
              min={today}
              className={fieldClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="event-type">
              Type evenement
              <Req />
            </label>
            <select
              id="event-type"
              name="evenement"
              required
              defaultValue=""
              className={`${fieldClass} pr-10 cursor-pointer`}
            >
              <option disabled value="">
                Kies een optie
              </option>
              <option value="Bruiloft">Bruiloft</option>
              <option value="Bedrijfsfeest">Bedrijfsfeest</option>
              <option value="Verjaardag">Verjaardag</option>
              <option value="Babyshower">Babyshower</option>
              <option value="Afstudeerfeest">Afstudeerfeest</option>
              <option value="Overig">Overig</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="package">
              Pakket{" "}
              <span className="normal-case font-normal text-text-muted">
                (optioneel)
              </span>
            </label>
            <select
              id="package"
              name="pakket"
              value={pakket}
              onChange={(e) => setPakket(e.target.value)}
              className={`${fieldClass} pr-10 cursor-pointer`}
            >
              <option value="">Geen voorkeur — adviseer mij</option>
              {pricingPlans.map((plan) => (
                <option key={plan.name} value={`${plan.name} (${plan.price})`}>
                  {plan.name} — {plan.price} {plan.unit}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="comments">
              Opmerkingen of wensen{" "}
              <span className="normal-case font-normal text-text-muted">
                (optioneel)
              </span>
            </label>
            <textarea
              id="comments"
              name="opmerkingen"
              rows={4}
              placeholder="Locatie, speciale wensen, extra uren, etc."
              className={`${fieldClass} resize-none`}
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <label className="flex items-start gap-3 text-sm text-on-surface-variant">
          <input
            type="checkbox"
            name="privacy_akkoord"
            required
            className="mt-1 h-4 w-4 accent-secondary flex-shrink-0"
          />
          <span>
            Ik ga ermee akkoord dat mijn gegevens worden gebruikt om mijn
            aanvraag te behandelen.
            <Req />
          </span>
        </label>

        {error && (
          <p className="text-sm text-error font-medium" role="alert">
            {error}
          </p>
        )}

        <div className="flex flex-col sm:flex-row-reverse sm:items-center gap-4 sm:justify-between">
          <button
            type="submit"
            disabled={loading}
            className="btn-accent w-full sm:w-auto px-12 py-4 rounded-full text-xs font-semibold tracking-wider uppercase disabled:opacity-50"
          >
            {loading ? "Versturen..." : "Aanvraag versturen"}
          </button>
          <span className="text-sm text-text-muted text-center sm:text-left">
            Liever direct contact?{" "}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-medium hover:underline"
            >
              WhatsApp ons
            </a>
          </span>
        </div>
      </div>
    </form>
  );
}
