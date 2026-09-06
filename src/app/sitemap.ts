import type { MetadataRoute } from "next";
import { routes, site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${site.baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: route.priority,
  }));
}
