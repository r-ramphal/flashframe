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
- [x] Bij verzenden gaat de aanvraag via **Web3Forms** naar de e-mail van de
      eigenaar.
- [x] Bevestigingsbericht voor de bezoeker na succesvol verzenden.
- [ ] **Web3Forms access key** moet nog ingesteld worden (zie sectie 7).

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
| Formulier-afhandeling | Web3Forms (stuurt e-mail naar eigenaar) |
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
│  └─ components/
│     ├─ Navbar.tsx        # navigatiebalk + mobiel menu
│     ├─ BoothImage.tsx    # fotoblok met placeholder-fallback
│     └─ BookingForm.tsx   # boekingsformulier (Web3Forms)
├─ .env.local              # Web3Forms key (niet in Git)
└─ REQUIREMENTS.md         # dit document
```

---

## 7. Nog te doen (open punten)

- [ ] **Web3Forms key** aanmaken op web3forms.com en instellen:
      - Lokaal in `.env.local` → `NEXT_PUBLIC_WEB3FORMS_KEY=...`
      - In Vercel onder Settings → Environment Variables → daarna Redeploy.
- [ ] **Echte foto's** toevoegen in `public/images/`:
      `spinnerbooth.jpg` en `fotobooth.jpg`.
- [ ] **Definitieve teksten** van de eigenaar verwerken.
- [ ] **Echte contactgegevens** (e-mailadres in de footer is nu een placeholder).
- [ ] (Later) Reviews / ervaringen sectie.
- [ ] (Later) Domeinnaam koppelen aan Vercel.
```
