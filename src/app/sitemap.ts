import type { MetadataRoute } from "next";
import { SITE_URL } from "./site";
import { cities } from "./data/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...cities.map((city) => ({
      url: `${SITE_URL}/fotobooth-huren/${city.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
