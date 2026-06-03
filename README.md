# Flashframe — Photobooth-verhuur

Website voor **Flashframe Photobooth** (Assendelft): presentatie van de booths en
een boekingsformulier dat aanvragen per e-mail naar de eigenaar stuurt.

Zie [`REQUIREMENTS.md`](./REQUIREMENTS.md) voor de volledige functionele uitleg.

## Stack
- **Next.js** (App Router, TypeScript) + **Tailwind CSS v4**
- **Resend** voor het versturen van boekingsaanvragen (via `/api/contact`)
- Hosting op **Vercel** (auto-deploy bij push naar `main`)

## Lokaal draaien
```bash
npm install
cp .env.example .env.local   # vul daarna RESEND_API_KEY in
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

## Omgevingsvariabelen
Kopieer `.env.example` naar `.env.local` en vul in:

| Variabele | Verplicht | Uitleg |
|---|---|---|
| `RESEND_API_KEY` | ja | Secret API-key van [resend.com](https://resend.com). Server-side only. |
| `BOOKING_TO_EMAIL` | nee | Inbox voor aanvragen (default: `EMAIL` uit `src/app/site.ts`). |
| `RESEND_FROM` | nee | Geverifieerd afzenderadres (default: `onboarding@resend.dev` voor testen). |

> Het formulier verstuurt via de server-side route `src/app/api/contact/route.ts`.
> De Resend-key blijft daardoor geheim en komt nooit in de browser.

Zet dezelfde variabelen ook in **Vercel → Settings → Environment Variables** en
doe daarna een redeploy.

## Belangrijkste mappen
```
src/app/
  page.tsx                # homepage (ontwerp 1)
  content.ts              # gedeelde content (booths, prijzen, galerij, teksten)
  api/contact/route.ts    # boekingsaanvraag → Resend
  components/             # Navbar, BookingForm, Photo, Pricing, ...
public/images/            # eigen foto's (fotobooth.jpg, spinnerbooth.jpg, sfeer-*.jpg)
```
