// Centrale contactgegevens. Vervang het WhatsApp-nummer door het echte nummer
// (internationaal formaat, zonder + of spaties), bijv. 31612345678.
export const WHATSAPP_NUMBER = "31600000000"; // TODO: vervang door echt nummer

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hoi Flashframe! Ik heb een vraag over het huren van een photobooth."
)}`;
