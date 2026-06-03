# Flashframe — Website Requirements & Uitleg

## 1. Over het bedrijf

**Flashframe** verhuurt photobooths voor evenementen zoals verjaardagen,
bruiloften, bedrijfsfeesten en afstudeerfeesten. Het bedrijf richt zich op het
leveren van een complete, zorgeloze ervaring: de booth wordt opgebouwd,
klaargezet en begeleid, zodat de klant zelf nergens omkijken naar heeft.

Op dit moment biedt Flashframe **twee producten** aan. Het assortiment is
opgezet om in de toekomst eenvoudig uit te breiden (meer booths, extra opties).

---

## 2. De producten

### 2.1 Fotobooth met directe print
- Klassieke photobooth-ervaring in een modern jasje.
- Gasten maken foto's en ontvangen **binnen seconden een fysieke afdruk**.
- Levert een tastbare herinnering die gasten mee naar huis nemen.
- Kernwoorden: directe print, hoge kwaliteit, fysieke foto.

### 2.2 360° Spinnerbooth
- Gasten stappen op een platform terwijl een camera-arm een **volledige cirkel**
  om hen heen draait.
- Resultaat is een **cinematic slowmotion video**.
- De clip wordt **digitaal gedeeld via mobiel** (bijv. QR-code / e-mail), klaar
  om direct op social media te posten.
- Kernwoorden: 360° video, slowmotion, direct digitaal delen.

### Belangrijkste verschil
| | Fotobooth | 360° Spinnerbooth |
|---|---|---|
| Output | Fysieke print | Digitale video |
| Levering | Direct geprint ter plekke | Gedeeld via mobiel |
| Sfeer | Tastbare herinnering | Deelbare social content |

---

## 3. Doel van de website

De website is in de eerste plaats een **boekings- en presentatiekanaal**. De twee
hoofddoelen:

1. **Het product centraal zetten** — duidelijk laten zien wat de twee booths zijn
   en wat ze opleveren.
2. **Aanvragen genereren** — bezoekers laten hun gegevens invullen om
   beschikbaarheid aan te vragen. Deze aanvraag wordt per **e-mail naar de
   eigenaar** gestuurd.

Reviews, ervaringen en extra content komen in een later stadium.

---

## 4. Functionele requirements

### 4.1 Pagina-opbouw (one-page website)
- [x] **Navbar** — vaste balk bovenaan met links: Producten, Hoe het werkt,
      Beschikbaarheid, Contact + "Boek nu"-knop. Mobiel hamburgermenu.
- [x] **Hero** — pakkende titel, korte uitleg, call-to-action knoppen.
- [x] **Producten** — beide booths met foto, beschrijving en kenmerken.
- [x] **Hoe het werkt** — boeking in een paar stappen uitgelegd.
- [x] **Waarom Flashframe** — kernvoordelen.
- [x] **Beschikbaarheid / Boekingsformulier** — aanvraagformulier.
- [x] **Contact / Footer** — contactgegevens en bedrijfsinfo.

### 4.2 Boekingsformulier
Velden die de bezoeker invult:
- [x] Naam
- [x] Telefoonnummer
- [x] E-mailadres
- [x] Datum evenement
- [x] Keuze booth (Fotobooth / 360° Spinnerbooth / weet ik nog niet)
- [x] Soort evenement (verjaardag, bruiloft, bedrijfsfeest, etc.)
- [x] Opmerkingen (optioneel)

Gedrag:
- [x] Bij verzenden post het formulier naar een eigen **server-side API-route**
      (`/api/contact`), die de aanvraag via **Resend** als e-mail naar de
      eigenaar stuurt.
- [x] Honeypot-veld tegen spam (door bots ingevuld, voor mensen verborgen).
- [x] Bevestigingsbericht voor de bezoeker na succesvol verzenden.
- [ ] **Resend API-key + geverifieerd afzenddomein** moeten nog ingesteld worden
      (zie sectie 7).

### 4.3 Design
- [x] **Apple-achtige stijl**: strakke typografie, veel ruimte, rustige opbouw.
- [x] **Lettertype**: Inter.
- [x] **Kleurenpalet**: zwart als basis, wit voor primaire knoppen, paars als
      subtiel accent (op advies professioneler gehouden dan fel zwart/paars).
- [x] **Volledig responsive**: mobiel, tablet en desktop.

### 4.4 Schaalbaarheid
- [x] Producten staan in een lijst (array) in de code, zodat een **derde of
      vierde booth** eenvoudig toegevoegd kan worden zonder de layout te
      herbouwen.
- [x] Teksten generiek gehouden zodat uitbreiding van het aanbod geen herschrijf
      vereist.

---

## 5. Technische stack

| Onderdeel | Keuze |
|---|---|
| Framework | Next.js (App Router, TypeScript) |
| Styling | Tailwind CSS |
| Formulier-afhandeling | Resend (eigen `/api/contact`-route stuurt e-mail naar eigenaar) |
| Versiebeheer | GitHub (`r-ramphal/flashframe`, branch `main`) |
| Hosting | Vercel (automatische deploy bij elke push naar `main`) |

---

## 6. Projectstructuur

```
flashframe/
├─ public/
│  └─ images/              # spinnerbooth.jpg & fotobooth.jpg (eigen foto's)
├─ src/app/
│  ├─ layout.tsx           # lettertype, metadata
│  ├─ globals.css          # kleuren & basisstijl
│  ├─ page.tsx             # alle secties van de homepage
│  ├─ content.ts           # gedeelde content (booths, prijzen, galerij, copy)
│  ├─ api/contact/route.ts # server-side route: verstuurt aanvraag via Resend
│  └─ components/
│     ├─ Navbar.tsx        # navigatiebalk + mobiel menu
│     ├─ Photo.tsx         # fotoblok met placeholder-fallback
│     └─ BookingForm.tsx   # boekingsformulier (post naar /api/contact)
├─ .env.example            # voorbeeld-env (Resend-vars) — wél in Git
├─ .env.local              # echte Resend-key e.d. (niet in Git)
└─ REQUIREMENTS.md         # dit document
```

---

## 7. Nog te doen (open punten)

- [ ] **Resend opzetten** (zie `.env.example` voor alle variabelen):
      1. Account maken op resend.com en een **API-key** genereren.
      2. Een **domein verifiëren** (bijv. `flashframe.nl`) voor het afzenderadres,
         of tijdelijk `onboarding@resend.dev` gebruiken om te testen.
      3. Instellen in `.env.local` → `RESEND_API_KEY=...` (plus optioneel
         `BOOKING_TO_EMAIL` en `RESEND_FROM`).
      4. Dezelfde variabelen in Vercel onder Settings → Environment Variables →
         daarna Redeploy.
- [ ] **Echte foto's** toevoegen in `public/images/`:
      `spinnerbooth.jpg` en `fotobooth.jpg`.
- [ ] **Definitieve teksten** van de eigenaar verwerken.
- [ ] **Echte contactgegevens** (e-mailadres in de footer is nu een placeholder).
- [ ] (Later) Reviews / ervaringen sectie.
- [ ] (Later) Domeinnaam koppelen aan Vercel.
```
