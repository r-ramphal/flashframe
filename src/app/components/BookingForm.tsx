"use client";

import { useState } from "react";
import { whatsappUrl } from "../site";

const fieldClass =
  "input-field w-full px-0 py-3 text-base text-primary bg-transparent focus:ring-0";
const labelClass = "block text-xs font-semibold tracking-wider uppercase text-primary mb-2";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Datum van vandaag (YYYY-MM-DD) om data in het verleden te blokkeren.
  const today = new Date().toISOString().split("T")[0];

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
      className="space-y-8 bg-surface-bright p-8 md:p-12 rounded-2xl border border-border-subtle shadow-sm"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className={labelClass} htmlFor="name">
            Naam
          </label>
          <input
            id="name"
            name="naam"
            type="text"
            required
            placeholder="Jouw volledige naam"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            E-mailadres
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jouw@email.nl"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Telefoonnummer
          </label>
          <input
            id="phone"
            name="telefoon"
            type="tel"
            required
            placeholder="+31 6 12345678"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="date">
            Datum evenement
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
      </div>

      <div>
        <label className={labelClass} htmlFor="event-type">
          Type evenement
        </label>
        <select
          id="event-type"
          name="evenement"
          required
          defaultValue=""
          className={`${fieldClass} cursor-pointer`}
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

      <div>
        <label className={labelClass} htmlFor="comments">
          Extra opmerkingen of wensen
        </label>
        <textarea
          id="comments"
          name="opmerkingen"
          rows={4}
          placeholder="Locatie, speciale wensen, etc."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-on-surface-variant">
        <input
          type="checkbox"
          name="privacy_akkoord"
          required
          className="mt-1 h-4 w-4 accent-secondary flex-shrink-0"
        />
        <span>
          Ik ga ermee akkoord dat mijn gegevens worden gebruikt om mijn aanvraag
          te behandelen.
        </span>
      </label>

      {error && (
        <p className="text-sm text-error font-medium" role="alert">
          {error}
        </p>
      )}

      <div className="pt-2 flex flex-col sm:flex-row-reverse sm:items-center gap-4 sm:justify-between">
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full sm:w-auto px-12 py-4 rounded-full text-xs font-semibold tracking-wider uppercase disabled:opacity-50"
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
    </form>
  );
}
