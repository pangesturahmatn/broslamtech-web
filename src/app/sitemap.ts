import type { MetadataRoute } from "next";
import articlesData from "../data/news-articles.json";

const BASE_URL = "https://broslamtech.com";

interface NewsArticle {
  id: string;
  slug?: string;
  date?: string;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/tentang-kami`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = (articlesData as NewsArticle[]).map(
    (article) => ({
      url: `${BASE_URL}/blog/${article.slug || article.id}`,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  return [...staticRoutes, ...blogRoutes];
}
