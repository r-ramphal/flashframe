# Afbeeldingen & video's

Plaats hier eigen foto's met deze exacte bestandsnamen. Zolang een bestand
ontbreekt, toont de site automatisch een nette placeholder (de site gaat dus
nooit "stuk").

## Productfoto (sectie "De fotobooth")
- `fotobooth.jpg` — ⬅️ NOG NODIG; de eigenaar levert nog aan. De product-
  sectie toont nu alleen tekst + kenmerken. Zodra de foto er is: bestand hier
  plaatsen én de afbeelding weer renderen in `src/app/page.tsx`
  (pad staat al klaar in `src/app/content.ts` → `booths[0].image`).

## Sfeerimpressie (carrousel)
- `sfeer-1.jpg` … `sfeer-4.jpg` (hier) — `sfeer-1.jpg` is óók de hero- en
  Open Graph-afbeelding.
- Video's in `/public/videos/`: `sfeer-1.mp4`, `sfeer-2.mp4` met bijbehorende
  `*-poster.jpg` (eerste frame, direct zichtbaar terwijl de video lazy laadt).
- Titels/teksten staan in `src/app/content.ts` (`galleryItems`).

## Richtlijnen
- Foto's: **verticaal, 4:5** (bijv. 1200×1500 px), goed licht, minimaal
  ~1200 px breed. `next/image` schaalt en comprimeert verder automatisch.
- Video's: comprimeren vóór het committen — doel **4:5, 576×720, H.264,
  CRF ~30, zonder audio** (ffmpeg: `-vf "crop=iw:iw*5/4" -c:v libx264
  -crf 30 -preset slow -an -movflags +faststart`) en genereer een poster
  (`-frames:v 1 -q:v 4 naam-poster.jpg`). Houd ze kort (±10 s).
- Gebruik eigen foto's of rechtenvrije stock. Geen Google Images i.v.m.
  auteursrecht.
- Na het toevoegen: `git add`, `git commit`, `git push` — Vercel zet het
  automatisch live.
