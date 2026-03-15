import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://okm-kazakhstan.kz",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}