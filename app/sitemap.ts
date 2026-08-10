import type { MetadataRoute } from "next";

const baseUrl = "https://www.kaptsure.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/services/drone-roof-inspections`,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/services/real-estate-drone-photography`,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/services/insurance-storm-documentation`,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/services/construction-progress-photography`,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "yearly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.8
    }
  ];
}
