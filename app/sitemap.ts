import type { MetadataRoute } from "next";
import { getAllCitySlugs } from "@/lib/cities";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rustemersoyleyen.github.io/ingilizce-kurslari";
  const citySlugs = getAllCitySlugs();

  const rootRoute = {
    url: `${baseUrl}/`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 1.0,
  };

  const cityRoutes = citySlugs.map((slug) => ({
    url: `${baseUrl}/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  return [rootRoute, ...cityRoutes];
}
