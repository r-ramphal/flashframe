"use client";

import { useState } from "react";

const inputClass =
  "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all";
const labelClass = "block text-sm font-medium text-white/70 mb-1.5";

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
      <div className="text-center py-16">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-semibold text-white mb-2">
          Aanvraag ontvangen!
        </h3>
        <p className="text-muted">
          We nemen zo snel mogelijk contact met je op om de boeking te
          bevestigen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Naam</label>
          <input
            type="text"
            name="naam"
            required
            placeholder="Jouw naam"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Telefoonnummer</label>
          <input
            type="tel"
            name="telefoon"
            required
            placeholder="+31 6 ..."
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>E-mailadres</label>
        <input
          type="email"
          name="email"
          required
          placeholder="jouw@email.nl"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Datum evenement</label>
          <input type="date" name="datum" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Welke booth?</label>
          <select
            name="booth"
            required
            className={`${inputClass} bg-black`}
          >
            <option value="">Selecteer booth</option>
            <option value="360 Spinnerbooth">360° Spinnerbooth</option>
            <option value="Fotobooth met print">Fotobooth met print</option>
            <option value="Weet ik nog niet">Weet ik nog niet</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Soort evenement</label>
        <select name="evenement" required className={`${inputClass} bg-black`}>
          <option value="">Selecteer type</option>
          <option value="Verjaardag">Verjaardag</option>
          <option value="Bruiloft">Bruiloft</option>
          <option value="Bedrijfsfeest">Bedrijfsfeest</option>
          <option value="Afstuderen">Afstuderen</option>
          <option value="Anders">Anders</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Opmerkingen (optioneel)</label>
        <textarea
          name="opmerkingen"
          rows={3}
          placeholder="Locatie, tijdstip, of andere wensen..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-white text-black font-semibold py-4 rounded-full hover:bg-white/90 disabled:opacity-50 transition-all text-base"
      >
        {loading ? "Versturen..." : "Beschikbaarheid aanvragen"}
      </button>
    </form>
  );
}
