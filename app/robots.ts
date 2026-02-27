import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const base = "https://example.com" // твой домен
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: [`${base}/sitemap.xml`],
    host: base
  }
}
