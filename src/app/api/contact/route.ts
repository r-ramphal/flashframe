// Server-side route die boekingsaanvragen via Resend als e-mail naar de
// eigenaar stuurt. De Resend API-key is een SECRET en blijft hier server-side —
// nooit in de client (anders dan de oude Web3Forms-key).
//
// Vereiste env-vars (zie .env.example / REQUIREMENTS.md):
//   RESEND_API_KEY    – verplicht, secret van resend.com
//   BOOKING_TO_EMAIL  – optioneel, inbox waar aanvragen heen gaan (default = EMAIL)
//   RESEND_FROM       – optioneel, geverifieerd afzenderadres
//                       (default "Flashframe <onboarding@resend.dev>" voor testen)
import { Resend } from "resend";
import { EMAIL } from "../../site";

export async function POST(request: Request) {
  let data: Record<string, string>;
  try {
    data = await request.json();
  } catch {
    return Response.json(
      { success: false, error: "Ongeldige aanvraag." },
      { status: 400 }
    );
  }

  // Honeypot: door bots ingevuld. Stilletjes als 'succes' afdoen zonder mail.
  if (data.botcheck) {
    return Response.json({ success: true });
  }

  // Zelfde verplichte velden als in het formulier (BookingForm.tsx); de
  // browser-`required` is te omzeilen, dus hier nogmaals controleren.
  const veld = (naam: string) =>
    typeof data[naam] === "string" ? data[naam].trim() : "";

  const naam = veld("naam");
  const email = veld("email");
  const telefoon = veld("telefoon");
  const datum = veld("datum");
  const evenement = veld("evenement");
  const pakket = veld("pakket");
  const opmerkingen = veld("opmerkingen");

  if (!naam || !email || !datum) {
    return Response.json(
      { success: false, error: "Vul alle verplichte velden in." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { success: false, error: "Vul een geldig e-mailadres in." },
      { status: 400 }
    );
  }

  if (Number.isNaN(Date.parse(datum))) {
    return Response.json(
      { success: false, error: "Vul een geldige datum in." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { success: false, error: "E-mailservice is nog niet geconfigureerd." },
      { status: 500 }
    );
  }

  const to = process.env.BOOKING_TO_EMAIL || EMAIL;
  const from = process.env.RESEND_FROM || "Flashframe <onboarding@resend.dev>";

  const lines = [
    ["Naam", naam],
    ["E-mail", email],
    ["Telefoon", telefoon || "—"],
    ["Datum evenement", datum],
    ["Type evenement", evenement || "—"],
    ["Pakket", pakket || "Geen voorkeur"],
    ["Opmerkingen", opmerkingen || "—"],
  ];

  const text = lines.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#1a1c1c;max-width:560px">
      <h2 style="margin:0 0 16px">Nieuwe boekingsaanvraag</h2>
      <table style="border-collapse:collapse;width:100%">
        ${lines
          .map(
            ([k, v]) =>
              `<tr>
                 <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;white-space:nowrap;vertical-align:top">${k}</td>
                 <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb">${String(
                   v
                 ).replace(/\n/g, "<br>")}</td>
               </tr>`
          )
          .join("")}
      </table>
    </div>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nieuwe boekingsaanvraag — ${naam}`,
      text,
      html,
    });

    if (error) {
      return Response.json(
        { success: false, error: "Versturen mislukt. Probeer het later opnieuw." },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { success: false, error: "Versturen mislukt. Probeer het later opnieuw." },
      { status: 502 }
    );
  }
}
