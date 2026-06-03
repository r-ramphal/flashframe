// Gedeelde site-content voor álle ontwerpvarianten.
// De ontwerpen (/, /ontwerp-2, /ontwerp-3, /ontwerp-4) verschillen alleen in
// vormgeving — de inhoud hieronder is overal hetzelfde, zodat de eigenaar puur
// het design kiest. Pas tekst/prijzen hier aan en het verandert in elk ontwerp.

export type Booth = {
  title: string;
  description: string;
  image: string;
  alt: string;
  features: { icon: string; label: string }[];
};

export type Step = { n: string; title: string; desc: string };

export type WhyCard = { icon: string; title: string; desc: string };

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  type: "image" | "video";
  src: string;
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
    "Premium photobooths voor bruiloften, bedrijfsfeesten en evenementen. Wij regelen alles, jij geniet van het moment.",
  primaryCta: { label: "Boek nu", href: "#booking" },
  secondaryCta: { label: "Bekijk booths", href: "#products" },
};

export const booths: Booth[] = [
  {
    title: "Fotobooth met directe print",
    description:
      "Hoogwaardige kwaliteit in seconden. Creëer tastbare herinneringen met professionele belichting en directe fysieke prints voor je gasten.",
    image: "/images/fotobooth.jpg",
    alt: "Fotobooth met directe print",
    features: [
      { icon: "print", label: "Onbeperkte fysieke prints" },
      { icon: "lightbulb", label: "Studio-kwaliteit ringlamp" },
      { icon: "tv_options_edit_channels", label: "Gepersonaliseerd startscherm" },
      { icon: "celebration", label: "Props inbegrepen" },
    ],
  },
];

export const steps: Step[] = [
  {
    n: "1",
    title: "Kies je booth",
    desc: "Selecteer de booth die perfect bij jouw visie past.",
  },
  {
    n: "2",
    title: "Wij regelen de setup",
    desc: "Ons team arriveert ruim op tijd voor een vlekkeloze installatie.",
  },
  {
    n: "3",
    title: "Maak onvergetelijke herinneringen",
    desc: "Geniet van het moment, wij zorgen voor de rest.",
  },
];

export const whyCards: WhyCard[] = [
  {
    icon: "verified",
    title: "Zorgeloze ervaring",
    desc: "Van begin tot eind geregeld. Geen technische stress tijdens je evenement.",
  },
  {
    icon: "support_agent",
    title: "Begeleiding op aanvraag",
    desc: "Desgewenst een host aanwezig om je gasten op weg te helpen.",
  },
  {
    icon: "high_quality",
    title: "Hoogwaardige kwaliteit",
    desc: "Wij gebruiken uitsluitend professionele DSLR-camera's en studio-belichting voor het beste resultaat, afgedrukt op premium fotopapier of in hoge resolutie digitaal geleverd.",
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
