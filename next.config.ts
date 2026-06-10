import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF eerst (20-30% kleiner), WebP als fallback voor oudere browsers.
    formats: ["image/avif", "image/webp"],
    // 60 = hero (groot, met overlay eroverheen — mag steviger gecomprimeerd),
    // 75 = default voor de overige foto's.
    qualities: [60, 75],
    // Foto's wijzigen zelden; houd geoptimaliseerde varianten 31 dagen in de
    // edge-cache zodat ze niet steeds opnieuw gegenereerd worden.
    minimumCacheTTL: 2678400,
  },
  async headers() {
    return [
      {
        // Video's en posters: een dag hard cachen, daarna een week stale
        // serveren tijdens hervalidatie. Bestandsnamen zijn niet gehasht,
        // dus geen "immutable" — bij vervanging is de cache binnen een dag bij.
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
