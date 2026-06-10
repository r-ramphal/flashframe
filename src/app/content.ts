// Gedeelde site-content voor álle ontwerpvarianten.
// De ontwerpen (/, /ontwerp-2, /ontwerp-3, /ontwerp-4) verschillen alleen in
// vormgeving — de inhoud hieronder is overal hetzelfde, zodat de eigenaar puur
// het design kiest. Pas tekst/prijzen hier aan en het verandert in elk ontwerp.

export type Booth = {
  title: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
};

export type Step = { n: string; title: string; desc: string };

export type WhyCard = { title: string; desc: string };

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  type: "image" | "video";
  src: string;
  // Alleen voor video's: stilstaand eerste frame dat direct zichtbaar is
  // terwijl de video zelf nog (lazy) laadt.
  poster?: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  unit: string;
  desc: string;
  features: string[];
  highlighted: boolean;
};

export const hero = {
  titleTop: "Leg elk moment",
  titleBottom: "vast in stijl.",
  subtitle:
    "Een professionele photobooth met directe prints voor bruiloften, bedrijfsfeesten en andere evenementen. Wij regelen alles, jij geniet van het moment.",
  primaryCta: { label: "Boek nu", href: "#booking" },
  secondaryCta: { label: "Bekijk de fotobooth", href: "#products" },
};

export const booths: Booth[] = [
  {
    title: "Fotobooth met directe print",
    description:
      "Je gasten maken zelf foto's via het touchscreen en houden binnen enkele seconden een geprinte fotostrip in handen. Het startscherm wordt vooraf aangepast aan jouw feest, en props liggen klaar voor wie durft.",
    // De echte productfoto wordt nog aangeleverd door de eigenaar; tot die tijd
    // wordt er geen afbeelding getoond in de product-sectie (zie page.tsx).
    image: "/images/fotobooth.jpg",
    alt: "Fotobooth met directe print",
    features: [
      "Onbeperkte fysieke prints",
      "Studio-kwaliteit ringlamp",
      "Gepersonaliseerd startscherm",
      "Props inbegrepen",
    ],
  },
];

export const steps: Step[] = [
  {
    n: "1",
    title: "Vraag je datum aan",
    desc: "Vul het formulier in en je hoort binnen 24 uur of je datum nog vrij is.",
  },
  {
    n: "2",
    title: "Wij bouwen alles op",
    desc: "Op de dag zelf staan we ruim op tijd klaar, inclusief props en startscherm.",
  },
  {
    n: "3",
    title: "Jij geniet van je feest",
    desc: "Gasten printen onbeperkt. Na afloop bouwen wij alles weer af.",
  },
];

export const whyCards: WhyCard[] = [
  {
    title: "Persoonlijk contact",
    desc: "Flashframe is een klein bedrijf uit Assendelft. Je schakelt rechtstreeks met ons, ook via WhatsApp, zonder tussenpersonen.",
  },
  {
    title: "Professionele kwaliteit",
    desc: "We fotograferen met een professionele DSLR-camera en studio-belichting, en printen op premium fotopapier. Digitale foto's leveren we in hoge resolutie.",
  },
  {
    title: "Alles inbegrepen",
    desc: "Op- en afbouw, props en een gepersonaliseerd startscherm zitten bij elk pakket. Je hebt er geen omkijken naar.",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "groep",
    title: "Samen voor de lens",
    description: "Gasten die volop genieten tijdens een bedrijfsborrel.",
    type: "image",
    src: "/images/sfeer-1.jpg",
  },
  {
    id: "props",
    title: "Props en plezier",
    description: "Maskers, hoeden en accessoires zorgen voor spontane reacties.",
    type: "video",
    src: "/videos/sfeer-1.mp4",
    poster: "/videos/sfeer-1-poster.jpg",
  },
  {
    id: "print",
    title: "Direct geprint",
    description:
      "Een fotostrip als tastbare herinnering, binnen seconden klaar.",
    type: "image",
    src: "/images/sfeer-2.jpg",
  },
  {
    id: "vloer",
    title: "Sfeer op de vloer",
    description: "De booth als middelpunt van het feest.",
    type: "video",
    src: "/videos/sfeer-2.mp4",
    poster: "/videos/sfeer-2-poster.jpg",
  },
  {
    id: "herinnering",
    title: "Mee naar huis",
    description: "Iedere gast gaat met een eigen afdruk de deur uit.",
    type: "image",
    src: "/images/sfeer-3.jpg",
  },
  {
    id: "gezelschap",
    title: "Voor elk gezelschap",
    description: "Van collega's tot vrienden, iedereen doet mee.",
    type: "image",
    src: "/images/sfeer-4.jpg",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "€250",
    unit: "per evenement",
    desc: "Alles wat je nodig hebt voor een geslaagde fotobooth-ervaring.",
    features: [
      "2 uur fotoboothservice",
      "Onbeperkte prints",
      "Gepersonaliseerd startscherm",
      "Props inbegrepen",
      "Inclusief op- en afbouw",
    ],
    highlighted: false,
  },
  {
    name: "Basic Plus",
    price: "€350",
    unit: "per evenement",
    desc: "De Basic, maar langer én met rode loper voor extra sfeer.",
    features: [
      "4 uur fotoboothservice",
      "Onbeperkte prints",
      "Gepersonaliseerd startscherm",
      "Props inbegrepen",
      "Rode loper",
      "Foto's direct delen via QR-code",
      "Inclusief op- en afbouw",
    ],
    highlighted: true,
  },
  {
    name: "Complete Pakket",
    price: "€450",
    unit: "per evenement",
    desc: "Het complete plaatje, inclusief digitale foto's en assistentie.",
    features: [
      "4 uur fotoboothservice",
      "Onbeperkte prints",
      "Gepersonaliseerd startscherm",
      "Props inbegrepen",
      "Rode loper",
      "Foto's direct delen via QR-code",
      "Alle foto's achteraf digitaal",
      "Persoonlijke assistentie aanwezig",
      "Inclusief op- en afbouw",
    ],
    highlighted: false,
  },
];

// Extra uren zijn bij elk pakket mogelijk (op aanvraag).
export const extraHoursNote =
  "Meer tijd nodig? Bij elk pakket zijn extra uren mogelijk — vraag gerust naar de mogelijkheden.";

// Reiskosten buiten de regio. De eerste 15 km vanaf Assendelft zijn gratis,
// daarna geldt een kilometervergoeding.
export const travelCostNote =
  "Reiskosten: de eerste 15 km vanaf Assendelft zijn gratis, daarna €0,30 per kilometer.";
