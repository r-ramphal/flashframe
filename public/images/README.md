# Afbeeldingen

Plaats hier je eigen foto's met deze exacte bestandsnamen om de placeholders te
vervangen. Zolang een bestand ontbreekt, toont de site automatisch een nette
placeholder (de site gaat dus nooit "stuk").

## Collectie (productkaarten)
- `fotobooth.jpg` — de fotobooth met directe print ✅ aanwezig
  (de photobooth-kaart toont nu de video `/videos/booth-showcase.mp4`;
  deze foto is de poster/fallback)
- `spinnerbooth.jpg` — de 360° spinnerbooth ⬅️ NOG NODIG (nu placeholder)

Aanbevolen: **verticaal**, verhouding **4:5** (bijv. 1200×1500 px).

## Sfeerimpressie (carousel)
- `sfeer-1.jpg`, `sfeer-2.jpg`, `sfeer-3.jpg`, `sfeer-4.jpg`
- Video's in `/public/videos/`: `sfeer-1.mp4`, `sfeer-2.mp4`
- Worden getoond in de carousel (ExampleCarousel.tsx). Titels/teksten staan
  daar in de `items`-array.

Aanbevolen: **verticaal**, verhouding **4:5** (bijv. 1200×1500 px).

## Tips
- Minimaal ~1200 px breed, hoge kwaliteit, goed licht.
- Gebruik eigen foto's of rechtenvrije stock (Unsplash/Pexels). Geen Google
  Images i.v.m. auteursrecht.
- Na het toevoegen: `git add`, `git commit` en `git push` — Vercel zet het
  automatisch live.
