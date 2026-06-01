"use client";

import { useState } from "react";

const fieldClass =
  "input-field w-full px-0 py-3 text-base text-primary bg-transparent focus:ring-0";
const labelClass = "block text-xs font-semibold tracking-wider uppercase text-primary mb-2";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        subject: "Nieuwe boekingsaanvraag via Flashframe",
        ...data,
      }),
    });

    if (response.ok) {
      setSubmitted(true);
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
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className={labelClass} htmlFor="booth-choice">
            Welke booth zoek je?
          </label>
          <select
            id="booth-choice"
            name="booth"
            required
            defaultValue=""
            className={`${fieldClass} cursor-pointer`}
          >
            <option disabled value="">
              Kies een optie
            </option>
            <option value="Fotobooth met directe print">
              Fotobooth met directe print
            </option>
            <option value="360 Spinnerbooth">360° Spinnerbooth</option>
            <option value="Advies nodig">Weet ik nog niet / advies nodig</option>
          </select>
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
            <option value="Afstudeerfeest">Afstudeerfeest</option>
            <option value="Overig">Overig</option>
          </select>
        </div>
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

      <div className="pt-4 flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full md:w-auto px-12 py-4 rounded-full text-xs font-semibold tracking-wider uppercase disabled:opacity-50"
        >
          {loading ? "Versturen..." : "Aanvraag versturen"}
        </button>
      </div>
    </form>
  );
}
