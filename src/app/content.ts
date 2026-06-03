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
      { icon: "print", label: "Directe fysieke prints" },
      { icon: "lightbulb", label: "Studio-kwaliteit ringlamp" },
      { icon: "palette", label: "Eigen branding mogelijk" },
    ],
  },
  {
    title: "360° Spinnerbooth",
    description:
      "Deze booth beschikt over een roterende arm waaraan je je eigen mobiele telefoon kunt bevestigen om cinematografische 360° video's te maken. Direct klaar om te delen en perfect voor social media.",
    image: "/images/spinnerbooth.jpg",
    alt: "360° Spinnerbooth",
    features: [
      { icon: "360", label: "Volledige 360° capture" },
      { icon: "share", label: "Direct digitaal delen" },
      { icon: "movie", label: "Slow-motion effecten" },
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
    name: "Fotobooth",
    price: "€295",
    unit: "per evenement",
    desc: "De klassieker met directe fysieke prints.",
    features: [
      "3 uur huur",
      "Onbeperkt fysieke prints",
      "Professionele belichting (ringlamp)",
      "Diverse props inbegrepen",
      "Op- en afbouw inbegrepen",
    ],
    highlighted: false,
  },
  {
    name: "360° Spinnerbooth",
    price: "€395",
    unit: "per evenement",
    desc: "Cinematische 360° video's, klaar voor social media.",
    features: [
      "3 uur huur",
      "Onbeperkte 360° video-opnames",
      "Direct digitaal delen",
      "Slow-motion & effecten",
      "Custom overlay met jouw naam/logo",
      "Op- en afbouw inbegrepen",
    ],
    highlighted: true,
  },
  {
    name: "Compleet pakket",
    price: "€650",
    unit: "per evenement",
    desc: "Beide booths voor de ultieme ervaring.",
    features: [
      "Fotobooth én 360° Spinnerbooth",
      "4 uur huur",
      "Professionele host aanwezig",
      "Onbeperkt prints én video's",
      "Online galerij achteraf",
    ],
    highlighted: false,
  },
];
