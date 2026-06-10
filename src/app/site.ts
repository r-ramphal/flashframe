// Centrale contactgegevens. Pas hier aan en het verandert overal op de site.

// Publieke site-URL voor SEO (canonical, sitemap, Open Graph, structured data).
// Op Vercel kun je NEXT_PUBLIC_SITE_URL als environment variable zetten; die wint dan.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.photoboothflashframe.com";

// Telefoon/WhatsApp in internationaal formaat (zonder + of spaties).
export const WHATSAPP_NUMBER = "31681193292";

// Net leesbaar telefoonnummer voor weergave.
export const PHONE_DISPLAY = "06 8119 3292";
export const PHONE_TEL = "+31681193292";

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hoi Flashframe! Ik heb een vraag over het huren van een photobooth."
)}`;

// Social
export const INSTAGRAM_URL = "https://www.instagram.com/photoboothflashframe1";
export const INSTAGRAM_HANDLE = "@photoboothflashframe1";

// E-mail (TODO: vervangen zodra het definitieve adres bekend is)
export const EMAIL = "info@flashframe.nl";

// Bedrijfsgegevens (voor footer / legal)
export const COMPANY_NAME = "Flashframe Photobooth";
export const ADDRESS_STREET = "Saendelverlaan 161";
export const ADDRESS_POSTAL_CODE = "1567 JE";
export const ADDRESS_LOCALITY = "Assendelft";
export const ADDRESS_CITY = `${ADDRESS_POSTAL_CODE} ${ADDRESS_LOCALITY}`;
export const KVK = "34384037";
export const BTW = "NL189130921B01";
