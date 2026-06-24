// Branded, responsive e-mailtemplates voor de boekingsflow.
//
// Twee mails: een notificatie naar de eigenaar en een bevestiging naar de
// aanvrager. Beide zijn table-based met inline styles (de enige betrouwbare
// manier voor e-mailclients), max 600px breed en met een platte-tekstvariant.
// Alle bezoekersinvoer wordt hier ge-escaped, zodat de route zich daar niet om
// hoeft te bekommeren.
import {
  COMPANY_NAME,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_URL,
  whatsappUrl,
} from "../../site";

export type BookingData = {
  naam: string;
  email: string;
  telefoon: string;
  datum: string;
  evenement: string;
  pakket: string;
  opmerkingen: string;
};

export type Email = { subject: string; html: string; text: string };

const BRAND = "#712edd";
const INK = "#1a1c1c";
const MUTED = "#6b7280";
const BORDER = "#e5e7eb";
const SOFT = "#f5f5f7";
const FONT =
  "Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

// Escapen voor HTML-context (tekst én attribuutwaarden tussen dubbele quotes).
const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// Datum (YYYY-MM-DD) leesbaar maken; valt terug op de ruwe waarde.
function formatDatum(datum: string): string {
  const d = new Date(datum);
  if (Number.isNaN(d.getTime())) return datum;
  return new Intl.DateTimeFormat("nl-NL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

function firstName(naam: string): string {
  return naam.trim().split(/\s+/)[0] || naam;
}

// Buitenste opmaak: gekleurde header + witte kaart + footer.
function shell(preheader: string, inner: string): string {
  return `<!DOCTYPE html>
<html lang="nl"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light only">
<title>${esc(COMPANY_NAME)}</title>
</head>
<body style="margin:0;padding:0;background:${SOFT};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${esc(
    preheader
  )}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${SOFT};">
  <tr><td align="center" style="padding:24px 12px;">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border:1px solid ${BORDER};border-radius:16px;overflow:hidden;font-family:${FONT};">
      <tr><td style="background:${BRAND};padding:22px 32px;">
        <span style="font-size:20px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;">Flashframe <span style="font-weight:500;color:#ffffff;opacity:0.85;">Photobooth</span></span>
      </td></tr>
      ${inner}
      <tr><td style="padding:22px 32px;border-top:1px solid ${BORDER};">
        <p style="margin:0;font-size:12px;line-height:1.7;color:${MUTED};">
          ${esc(COMPANY_NAME)} · <a href="${SITE_URL}" style="color:${BRAND};text-decoration:none;">photoboothflashframe.com</a><br>
          ${esc(PHONE_DISPLAY)}
        </p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;
}

function detailsTable(rows: [string, string][]): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
${rows
  .map(
    ([k, v]) => `<tr>
  <td style="padding:10px 0;border-bottom:1px solid ${BORDER};color:${MUTED};font-size:14px;width:140px;vertical-align:top;">${esc(
      k
    )}</td>
  <td style="padding:10px 0;border-bottom:1px solid ${BORDER};color:${INK};font-size:14px;line-height:1.5;">${esc(
      v
    ).replace(/\n/g, "<br>")}</td>
</tr>`
  )
  .join("")}
</table>`;
}

function button(href: string, label: string, bg = BRAND): string {
  return `<a href="${esc(
    href
  )}" style="display:inline-block;background:${bg};color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 22px;border-radius:999px;">${esc(
    label
  )}</a>`;
}

/** Notificatie naar de eigenaar — reply-to wordt door de route op de aanvrager gezet. */
export function ownerNotificationEmail(d: BookingData): Email {
  const rows: [string, string][] = [
    ["Naam", d.naam],
    ["E-mail", d.email],
    ["Telefoon", d.telefoon || "—"],
    ["Datum", formatDatum(d.datum)],
    ["Type evenement", d.evenement || "—"],
    ["Pakket", d.pakket || "Geen voorkeur"],
    ["Opmerkingen", d.opmerkingen || "—"],
  ];

  const inner = `<tr><td style="padding:32px;">
  <h1 style="margin:0 0 8px;font-size:22px;color:${INK};">Nieuwe boekingsaanvraag</h1>
  <p style="margin:0 0 24px;font-size:14px;line-height:1.6;color:${MUTED};">Binnengekomen via het formulier op de website. Antwoord rechtstreeks op deze mail om ${esc(
    firstName(d.naam)
  )} te bereiken.</p>
  ${detailsTable(rows)}
  <div style="margin-top:24px;">${button(
    `mailto:${d.email}`,
    `Beantwoord ${firstName(d.naam)}`
  )}</div>
</td></tr>`;

  const text = [
    "Nieuwe boekingsaanvraag",
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
  ].join("\n");

  return {
    subject: `Nieuwe boekingsaanvraag — ${d.naam}`,
    html: shell(`Nieuwe aanvraag van ${d.naam}`, inner),
    text,
  };
}

/** Bevestiging naar de aanvrager — reply-to wordt door de route op de eigenaar gezet. */
export function customerConfirmationEmail(d: BookingData): Email {
  const summary: [string, string][] = [
    ["Datum", formatDatum(d.datum)],
    ["Type evenement", d.evenement || "—"],
    ["Pakket", d.pakket || "Nog te bepalen — we adviseren je graag"],
  ];

  const inner = `<tr><td style="padding:32px;">
  <h1 style="margin:0 0 16px;font-size:22px;color:${INK};">Bedankt, ${esc(
    firstName(d.naam)
  )}!</h1>
  <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:${INK};">
    We hebben je aanvraag bij <strong>Flashframe Photobooth</strong> goed ontvangen en nemen
    <strong>binnen 24 uur</strong> contact met je op met een voorstel op maat. Je aanvraag is geheel vrijblijvend.
  </p>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${SOFT};border-radius:12px;margin:8px 0 4px;">
    <tr><td style="padding:18px 22px;">
      <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.05em;text-transform:uppercase;font-weight:600;color:${MUTED};">Jouw aanvraag</p>
      ${detailsTable(summary)}
    </td></tr>
  </table>
  <p style="margin:24px 0 14px;font-size:15px;line-height:1.7;color:${INK};">Heb je in de tussentijd een vraag? We zijn snel bereikbaar:</p>
  <div>
    ${button(whatsappUrl, "WhatsApp ons", "#25D366")}
    &nbsp;&nbsp;
    ${button(`tel:${PHONE_TEL}`, `Bel ${PHONE_DISPLAY}`)}
  </div>
  <p style="margin:28px 0 0;font-size:15px;line-height:1.6;color:${INK};">Tot snel!<br><strong>Flashframe Photobooth</strong></p>
</td></tr>`;

  const text = [
    `Hoi ${firstName(d.naam)},`,
    "",
    "Bedankt voor je aanvraag bij Flashframe Photobooth! We hebben je gegevens goed ontvangen en nemen binnen 24 uur contact met je op met een voorstel op maat. Je aanvraag is geheel vrijblijvend.",
    "",
    "Jouw aanvraag:",
    ...summary.map(([k, v]) => `- ${k}: ${v}`),
    "",
    `Vragen? Stuur ons een WhatsApp via ${whatsappUrl} of bel ${PHONE_DISPLAY}.`,
    "",
    "Tot snel!",
    "Flashframe Photobooth",
  ].join("\n");

  return {
    subject: "We hebben je aanvraag ontvangen — Flashframe Photobooth",
    html: shell(
      "Bedankt voor je aanvraag — we reageren binnen 24 uur.",
      inner
    ),
    text,
  };
}
