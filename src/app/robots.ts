import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "Bingbot",
          "Applebot-Extended",
        ],
        allow: ["/", "/llms.txt"],
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://mookoop.studio/sitemap.xml",
  };
}
