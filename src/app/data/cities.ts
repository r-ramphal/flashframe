// Steden/regio voor de lokale SEO-landingspagina's (/fotobooth-huren/[stad]).
//
// Spreiding over heel Noord-Holland. Elke plaats heeft EIGEN, unieke teksten
// (lead + context + meta) zodat de pagina's geen dunne duplicaten zijn — Google
// straft "doorway pages" af. De afstand is bij benadering vanaf de thuisbasis in
// Assendelft; daaruit leidt de pagina de reisnote af (eerste 15 km gratis, zie
// travelCostNote in content.ts). We sluiten niemand uit: ook plaatsen die hier
// niet staan bedienen we (zie de uitnodiging in Footer.tsx).
//
// Nieuwe plaats toevoegen: voeg een item toe; de route, sitemap en footerlinks
// pakken het automatisch op.

export type City = {
  /** URL-segment, bv. "koog-aan-de-zaan" → /fotobooth-huren/koog-aan-de-zaan */
  slug: string;
  /** Weergavenaam, bv. "Koog aan de Zaan" */
  naam: string;
  /** Afstand bij benadering vanaf Assendelft (km). */
  afstandKm: number;
  /** Meta-description (≈150 tekens), uniek per plaats. */
  metaDescription: string;
  /** Eerste paragraaf op de pagina (uniek). */
  lead: string;
  /** Tweede paragraaf met lokale context (uniek). */
  context: string;
};

export const cities: City[] = [
  // ── Zaanstreek & directe regio ──────────────────────────────────────────
  {
    slug: "assendelft",
    naam: "Assendelft",
    afstandKm: 0,
    metaDescription:
      "Fotobooth huren in Assendelft? Flashframe is hier gevestigd — directe prints, props en op- en afbouw inbegrepen. Vraag vrijblijvend je datum aan.",
    lead: "Flashframe Photobooth is gevestigd in Assendelft, dus voor feesten in ons eigen dorp zijn we letterlijk om de hoek. Of je nu trouwt, een verjaardag viert of een bedrijfsborrel organiseert: wij staan ruim op tijd klaar met een fotobooth die direct fotostrips print.",
    context: "Als lintdorp in de gemeente Zaanstad heeft Assendelft tal van zalen, boerderijen en feestlocaties langs de Dorpsstraat en daarbuiten. We kennen de regio op ons duimpje en bouwen de booth op vrijwel elke locatie probleemloos op.",
  },
  {
    slug: "zaandam",
    naam: "Zaandam",
    afstandKm: 7,
    metaDescription:
      "Fotobooth huren in Zaandam voor bruiloft, bedrijfsfeest of verjaardag. Onbeperkte prints, props en QR-foto's. Flashframe komt naar je toe — vraag je datum aan.",
    lead: "Zaandam is de grootste stad van de Zaanstreek en het bruisende hart van de regio. Van een trouwfeest bij de Zaanse Schans tot een bedrijfsevenement in het centrum: Flashframe brengt de fotobooth naar je locatie, inclusief gepersonaliseerd startscherm.",
    context: "Met de vele hotels, restaurants en zalen rond de Gedempte Gracht en het Hembrugterrein is Zaandam een populaire feeststad. We rijden vanuit Assendelft in een kwartiertje naar je toe.",
  },
  {
    slug: "wormerveer",
    naam: "Wormerveer",
    afstandKm: 5,
    metaDescription:
      "Fotobooth huren in Wormerveer? Flashframe levert directe prints, props en een persoonlijk startscherm. Vrijblijvend aanvragen, reactie binnen 24 uur.",
    lead: "Wormerveer ligt aan de Zaan en staat bekend om zijn industriële erfgoed en sfeervolle pakhuizen. Geef je feest in een van die karakteristieke locaties extra cachet met een fotobooth die er onbeperkt fotostrips uit laat rollen.",
    context: "Of het nu een bruiloft, jubileum of personeelsfeest is: vanuit het naburige Assendelft zijn we zo bij je in Wormerveer en zorgen we dat je gasten met een tastbare herinnering naar huis gaan.",
  },
  {
    slug: "krommenie",
    naam: "Krommenie",
    afstandKm: 3,
    metaDescription:
      "Fotobooth huren in Krommenie voor je feest. Onbeperkte prints, props en op- en afbouw inbegrepen. Flashframe zit vlakbij — vraag vrijblijvend je datum aan.",
    lead: "Krommenie grenst direct aan Assendelft, dus dit is bijna thuiswedstrijd voor ons. Voor bruiloften, verjaardagen en bedrijfsfeesten in Krommenie staat de fotobooth in een handomdraai opgesteld en draait hij de hele avond op volle toeren.",
    context: "Van zalen langs de Zuiderhoofdstraat tot feesten thuis in de tuin: we denken graag mee over de beste plek voor de booth, zodat hij het middelpunt van het feest wordt.",
  },
  {
    slug: "koog-aan-de-zaan",
    naam: "Koog aan de Zaan",
    afstandKm: 6,
    metaDescription:
      "Fotobooth huren in Koog aan de Zaan? Directe fotostrips, props en QR-foto's via Flashframe. Komt naar je toe — vrijblijvend aanvragen.",
    lead: "Koog aan de Zaan ligt centraal in de Zaanstreek, op een steenworp van de Zaanse Schans. Een fotobooth maakt elk feest hier compleet, of je nu een intieme verjaardag of een grote bruiloft viert.",
    context: "Dankzij de korte rit vanuit Assendelft zijn we ruim op tijd aanwezig om alles op te bouwen, zodat jij je nergens zorgen over hoeft te maken.",
  },
  {
    slug: "wormer",
    naam: "Wormer",
    afstandKm: 7,
    metaDescription:
      "Fotobooth huren in Wormer voor bruiloft of feest. Onbeperkte prints, props en persoonlijk startscherm. Flashframe komt naar je toe — vraag je datum aan.",
    lead: "Wormer ligt aan de rand van het prachtige Wormer- en Jisperveld, een van de grootste aaneengesloten natuurgebieden van Noord-Holland. Vier je hier een bruiloft of feest, dan zorgt onze fotobooth voor spontane kiekjes die je gasten meteen mee naar huis nemen.",
    context: "Vanuit Assendelft rijden we vlot naar Wormer en omgeving. We stemmen het startscherm af op jouw feest en zorgen dat de prints non-stop blijven komen.",
  },
  {
    slug: "purmerend",
    naam: "Purmerend",
    afstandKm: 15,
    metaDescription:
      "Fotobooth huren in Purmerend voor je bruiloft, bedrijfsfeest of verjaardag. Directe prints, props en op- en afbouw inbegrepen via Flashframe.",
    lead: "Purmerend is de grootste stad van Waterland, net ten oosten van de Zaanstreek. Voor feesten in en rond Purmerend brengt Flashframe de complete fotobooth-ervaring naar je toe, met onbeperkte prints en een vrolijke kist vol props.",
    context: "Met de vele zalen en evenementlocaties in Purmerend is er altijd een mooie plek voor de booth. We komen vanuit Assendelft naar je toe en bouwen alles vakkundig voor je op.",
  },

  // ── Breder Noord-Holland ────────────────────────────────────────────────
  {
    slug: "amsterdam",
    naam: "Amsterdam",
    afstandKm: 17,
    metaDescription:
      "Fotobooth huren in Amsterdam voor bruiloft of bedrijfsfeest. Onbeperkte prints, props en QR-foto's. Flashframe komt naar je toe — vrijblijvend aanvragen.",
    lead: "Van een bruiloft in een grachtenpand tot een bedrijfsfeest op een evenementlocatie: in Amsterdam is elk feest anders, en onze fotobooth past zich er met een eigen startscherm op aan. Je gasten gaan met een geprinte fotostrip naar huis.",
    context: "We komen vanuit de Zaanstreek de stad in, hoe groot of klein het feest ook is. Laat ons weten waar en wanneer, dan zorgen wij voor de rest — inclusief op- en afbouw.",
  },
  {
    slug: "haarlem",
    naam: "Haarlem",
    afstandKm: 16,
    metaDescription:
      "Fotobooth huren in Haarlem? Directe fotostrips, props en een persoonlijk startscherm via Flashframe. Komt naar je toe — reactie binnen 24 uur.",
    lead: "Haarlem, de hoofdstad van Noord-Holland, heeft met zijn monumentale binnenstad en de Grote Markt sfeervolle feestlocaties te over. Onze fotobooth maakt jouw evenement daar compleet met onbeperkte prints.",
    context: "Of het nu een bruiloft, jubileum of personeelsfeest is: we rijden naar Haarlem en omgeving en draaien de hele avond op volle toeren, zodat niemand zonder fotostrip naar huis gaat.",
  },
  {
    slug: "alkmaar",
    naam: "Alkmaar",
    afstandKm: 20,
    metaDescription:
      "Fotobooth huren in Alkmaar voor je feest. Onbeperkte prints, props en op- en afbouw inbegrepen. Flashframe komt naar de kaasstad toe — vraag je datum aan.",
    lead: "In de historische kaasstad Alkmaar, met zijn grachten en gezellige binnenstad, brengt Flashframe de complete fotobooth-ervaring naar je feest. Props en een gepersonaliseerd startscherm horen daar standaard bij.",
    context: "We komen vanuit Assendelft naar Alkmaar toe, bouwen alles vakkundig op en zorgen dat de fotobooth het middelpunt van je bruiloft, verjaardag of bedrijfsfeest wordt.",
  },
  {
    slug: "hoorn",
    naam: "Hoorn",
    afstandKm: 30,
    metaDescription:
      "Fotobooth huren in Hoorn voor bruiloft, verjaardag of bedrijfsfeest. Directe prints en props via Flashframe. We komen naar West-Friesland toe.",
    lead: "Hoorn is een West-Friese havenstad aan het Markermeer met een rijk VOC-verleden en prachtige feestlocaties aan het water. Onze fotobooth zorgt voor blijvende herinneringen op jouw feest.",
    context: "Een stukje verder rijden vinden we niet erg — we komen graag naar Hoorn en omgeving. De eerste 15 km vanaf Assendelft zijn gratis, de rest rekenen we transparant per kilometer.",
  },
  {
    slug: "beverwijk",
    naam: "Beverwijk",
    afstandKm: 12,
    metaDescription:
      "Fotobooth huren in Beverwijk? Flashframe levert directe fotostrips, props en QR-foto's. Binnen onze gratis reisregio — vrijblijvend aanvragen.",
    lead: "Beverwijk ligt in de IJmond, vlak bij de kust en bekend om de Bazaar. Voor feesten in Beverwijk staat onze fotobooth in een handomdraai klaar, met onbeperkte prints en een vrolijke kist props.",
    context: "Vanuit Assendelft zijn we zo bij je — ruim binnen onze gratis reisregio — en zorgen we dat je gasten de hele avond door blijven poseren.",
  },
  {
    slug: "heemskerk",
    naam: "Heemskerk",
    afstandKm: 10,
    metaDescription:
      "Fotobooth huren in Heemskerk voor je feest. Onbeperkte prints, props en persoonlijk startscherm. Flashframe zit vlakbij — vraag je datum aan.",
    lead: "Heemskerk, gelegen in de IJmond tussen de duinen en Slot Assumburg, is een mooie plek voor een feest met een fotobooth die direct fotostrips print. Wij wonen praktisch om de hoek.",
    context: "Dankzij die korte afstand staan we ruim op tijd klaar om alles voor je op te bouwen, of het nu een bruiloft, verjaardag of bedrijfsfeest is.",
  },
  {
    slug: "castricum",
    naam: "Castricum",
    afstandKm: 14,
    metaDescription:
      "Fotobooth huren in Castricum? Directe prints, props en QR-foto's via Flashframe. Binnen onze gratis reisregio — reactie binnen 24 uur.",
    lead: "Castricum, bekend om zijn strand en het Noord-Hollands Duinreservaat, is een geliefde plek voor bruiloften en feesten. Onze fotobooth maakt het plaatje compleet met onbeperkte fotostrips.",
    context: "De korte rit vanuit Assendelft betekent dat we ruim op tijd aanwezig zijn, klaar om je gasten te laten poseren met een kist vol props.",
  },
  {
    slug: "uitgeest",
    naam: "Uitgeest",
    afstandKm: 8,
    metaDescription:
      "Fotobooth huren in Uitgeest voor bruiloft of feest. Onbeperkte prints, props en op- en afbouw inbegrepen. Flashframe komt naar je toe.",
    lead: "Uitgeest ligt aan het Uitgeestermeer, een fijne watersport- en feestplek pal naast onze thuisbasis. De fotobooth is dus zo opgesteld, klaar voor een avond vol spontane kiekjes.",
    context: "Voor bruiloften, verjaardagen en bedrijfsfeesten in Uitgeest zorgen we dat de prints de hele avond blijven komen, met een gepersonaliseerd startscherm op maat.",
  },
  {
    slug: "volendam",
    naam: "Volendam",
    afstandKm: 20,
    metaDescription:
      "Fotobooth huren in Volendam voor je feest. Directe fotostrips, props en QR-foto's via Flashframe. We komen naar Edam-Volendam toe — vraag je datum aan.",
    lead: "Het pittoreske vissersdorp Volendam, met zijn haven, klederdracht en gezellige dijk, is een unieke plek voor een feest. Onze fotobooth voegt daar spontane kiekjes aan toe die je gasten meteen mee naar huis nemen.",
    context: "We komen vanuit de Zaanstreek naar Volendam en omgeving en stemmen het startscherm af op jouw feest, of het nu een bruiloft of een bedrijfsuitje is.",
  },
];

export const citySlugs = cities.map((c) => c.slug);

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
