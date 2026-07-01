import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#ff6421",
    lang: "en",
    icons: [
      {
        src: siteConfig.ogImage,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
