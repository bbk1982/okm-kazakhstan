import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://okm-kazakhstan.kz/sitemap.xml",
    host: "https://okm-kazakhstan.kz",
  };
}