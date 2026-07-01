import type { MetadataRoute } from "next";
import { siteConfig, siteRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
