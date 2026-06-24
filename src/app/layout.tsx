import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SITE_URL } from "./site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Display-font voor koppen + merknaam (premium-clean). Inter blijft de tekstfont.
const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "Photobooth huren in de Zaanstreek | Flashframe Photobooth";
const DESCRIPTION =
  "Huur een fotobooth met directe prints voor je bruiloft, bedrijfsfeest of verjaardag. Inclusief props, op- en afbouw en gepersonaliseerd startscherm. Vanaf €250, regio Assendelft/Zaanstreek.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Flashframe Photobooth",
    locale: "nl_NL",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/sfeer-1.jpg",
        alt: "Gasten poseren voor de Flashframe fotobooth tijdens een evenement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/sfeer-1.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f9f9f9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-on-surface selection:bg-secondary/20">
        {children}
        {/* Vercel Pro: real-user Core Web Vitals (Speed Insights) + bezoek-/
            conversiestatistieken (Analytics). Beide laden client-side ná de
            content en sturen géén persoonsgegevens mee. */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
