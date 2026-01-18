import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { cn } from "@/utils/cn";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppSticky } from "@/components/WhatsAppSticky";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "DISCIPLINE.AI – AI-Powered Study Discipline & UPSC/NEET Tracking",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  verification: {
    google: "google-site-verification=YOUR_CODE", //TODO: Add actual code
  },
  keywords: ["disciplineAI", "discipline ai", "discipline - ai", "upsc", "study tracker", "preparation mirror", "competitive exams", "test prep", "productivity"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.variable, "min-h-screen font-sans antialiased bg-background text-foreground flex flex-col")}>
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
        <WhatsAppSticky />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "DISCIPLINE.AI",
                "url": "https://discipline-ai.in",
                "logo": "https://discipline-ai.in/logo.png",
                "description": "AI-powered WhatsApp study discipline tracking system for UPSC, NEET and JEE aspirants.",
                "sameAs": [
                  "https://www.linkedin.com/company/discipline-ai",
                  "https://twitter.com/discipline_ai"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "DISCIPLINE.AI",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "WhatsApp",
                "offers": {
                  "@type": "Offer",
                  "price": "99",
                  "priceCurrency": "INR"
                }
              }
            ])
          }}
        />
      </body>
    </html>
  );
}
