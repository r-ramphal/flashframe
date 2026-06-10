import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "./site";

const inter = Inter({
  variable: "--font-inter",
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
    <html lang="nl" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-surface text-on-surface selection:bg-secondary/20">
        {children}
      </body>
    </html>
  );
}
