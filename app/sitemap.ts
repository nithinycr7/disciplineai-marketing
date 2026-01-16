import { MetadataRoute } from "next";
import { siteConfig, VERTICALS } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        "",
        "/contact",
        "/privacy",
        "/terms",
        "/refunds",
        "/shipping",
    ].map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    const verticalRoutes = Object.values(VERTICALS).map((vertical) => ({
        url: `${siteConfig.url}${vertical.href}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    return [...routes, ...verticalRoutes];
}
