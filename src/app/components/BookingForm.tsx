"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { whatsappUrl } from "../site";
import { pricingPlans } from "../content";
import Icon from "./Icon";

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

const Optional = () => (
  <span className="normal-case font-normal text-text-muted"> (optioneel)</span>
);

const eventTypes = [
  "Bruiloft",
  "Bedrijfsfeest",
  "Verjaardag",
  "Babyshower",
  "Afstudeerfeest",
  "Overig",
];

// Naam van het event waarmee de pakketknoppen bij "Prijzen" dit formulier
// voorinvullen (zie PlanCta.tsx).
export const SELECT_PLAN_EVENT = "flashframe:select-plan";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pakket, setPakket] = useState("");
  // Stap voor de mobiele flow (op sm+ zijn beide stappen altijd zichtbaar).
  const [step, setStep] = useState<1 | 2>(1);
  const step1Ref = useRef<HTMLDivElement>(null);

  // Datum van vandaag (YYYY-MM-DD) om data in het verleden te blokkeren.
  const today = new Date().toISOString().split("T")[0];

  // Klik op "Aanvragen" bij een pakket → dat pakket staat hier voorgeselecteerd.
  useEffect(() => {
    const handler = (e: Event) => setPakket((e as CustomEvent<string>).detail);
    window.addEventListener(SELECT_PLAN_EVENT, handler);
    return () => window.removeEventListener(SELECT_PLAN_EVENT, handler);
  }, []);

  // True als we op een smal scherm (< sm) staan en de stapsgewijze flow geldt.
  const isMobile = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 639px)").matches;

  // Valideer stap 1 (native required/format) en ga door naar stap 2.
  function goNext() {
    const container = step1Ref.current;
    if (container) {
      const fields = Array.from(
        container.querySelectorAll<HTMLInputElement>("input, select, textarea")
      );
      const firstInvalid = fields.find((f) => !f.checkValidity());
      if (firstInvalid) {
        firstInvalid.reportValidity();
        return;
      }
    }
    setStep(2);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Op mobiel is stap 1 nog niet de verzendstap (en stap-2-velden zijn dan
    // verborgen → native required-validatie zou op een onzichtbaar veld vallen).
    if (isMobile() && step === 1) {
      goNext();
      return;
    }

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
        // Conversie-event voor Vercel Analytics (geen persoonsgegevens).
        track("booking_request", { pakket: pakket || "geen voorkeur" });
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
        <Icon
          name="check-circle"
          className="w-12 h-12 text-secondary mx-auto mb-4"
        />
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
      className="space-y-8 bg-surface-bright p-6 sm:p-8 md:p-12 rounded-2xl border border-border-subtle shadow-sm"
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

      {/* Voortgang — alleen mobiel (stapsgewijze flow) */}
      <div className="sm:hidden">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-text-muted">
          <span>Stap {step} van 2</span>
          <span className="text-secondary">
            {step === 1 ? "Jouw gegevens" : "Het evenement"}
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-faint">
          <div
            className="h-full rounded-full bg-secondary transition-all duration-300"
            style={{ width: step === 1 ? "50%" : "100%" }}
          />
        </div>
      </div>

      {/* Stap 1: contactgegevens */}
      <div
        ref={step1Ref}
        className={`space-y-5 sm:block ${step === 1 ? "block" : "hidden"}`}
      >
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
              enterKeyHint="next"
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
              inputMode="email"
              enterKeyHint="next"
              placeholder="jouw@email.nl"
              className={fieldClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="phone">
              Telefoonnummer
              <Optional />
            </label>
            <input
              id="phone"
              name="telefoon"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="+31 6 12345678"
              className={fieldClass}
            />
          </div>
        </div>
      </div>

      {/* Stap 2: het evenement */}
      <div className={`space-y-5 sm:block ${step === 2 ? "block" : "hidden"}`}>
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
            <label className={labelClass} htmlFor="package">
              Pakket
              <Optional />
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
          <fieldset className="sm:col-span-2">
            <legend className={labelClass}>
              Type evenement
              <Optional />
            </legend>
            <div className="flex flex-wrap gap-2">
              {eventTypes.map((t) => (
                <label key={t} className="cursor-pointer">
                  <input
                    type="radio"
                    name="evenement"
                    value={t}
                    className="peer sr-only"
                  />
                  <span className="inline-flex px-4 py-2 rounded-full border border-border-subtle bg-surface-faint text-sm text-on-surface transition-colors hover:border-secondary/50 peer-checked:bg-secondary peer-checked:border-secondary peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-secondary/40">
                    {t}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="comments">
              Opmerkingen of wensen
              <Optional />
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
        {error && (
          <p className="text-sm text-error font-medium" role="alert">
            {error}
          </p>
        )}

        {/* Mobiel: stapsgewijze knoppen */}
        <div className="sm:hidden space-y-3">
          {step === 1 ? (
            <button
              type="button"
              onClick={goNext}
              className="btn-accent w-full px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase"
            >
              Volgende
            </button>
          ) : (
            <>
              <button
                type="submit"
                disabled={loading}
                className="btn-accent w-full px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase disabled:opacity-50"
              >
                {loading ? "Versturen..." : "Aanvraag versturen"}
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn-outline w-full px-8 py-3 rounded-full text-xs font-semibold tracking-wider uppercase"
              >
                Vorige
              </button>
            </>
          )}
        </div>

        {/* Desktop: alles in één keer */}
        <div className="hidden sm:flex flex-row-reverse items-center gap-4 justify-between">
          <button
            type="submit"
            disabled={loading}
            className="btn-accent px-12 py-4 rounded-full text-xs font-semibold tracking-wider uppercase disabled:opacity-50"
          >
            {loading ? "Versturen..." : "Aanvraag versturen"}
          </button>
          <span className="text-sm text-text-muted">
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

        <p className="sm:hidden text-center text-sm text-text-muted">
          Liever direct contact?{" "}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary font-medium hover:underline"
          >
            WhatsApp ons
          </a>
        </p>

        <p className="text-xs text-text-muted text-center sm:text-left">
          Door te versturen ga je ermee akkoord dat we je gegevens gebruiken om
          je aanvraag te behandelen.
        </p>
      </div>
    </form>
  );
}
