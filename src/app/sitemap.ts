import { MetadataRoute } from "next";
import { SITE_URL } from "@/utils/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceSlugs = [
    "haircut",
    "hair-colour",
    "balayage",
    "highlights",
    "keratin-treatment",
    "hair-botox",
    "cysteine-treatment",
    "hair-spa",
    "hydrafacial",
    "facial",
    "d-tan",
    "bridal-makeup",
    "event-makeup",
  ];

  const routes = [
    { path: "", changeFrequency: "daily" as const, priority: 1.0 },
    { path: "/services", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/about", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/offers", changeFrequency: "weekly" as const, priority: 0.8 },
    ...serviceSlugs.map((slug) => ({
      path: `/services/${slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  // Fixed last modified date to avoid artificially updating on every build
  const lastMod = new Date("2026-08-16");

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: lastMod,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
