import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { emailAddress, phoneHref } from "@/lib/contact";

const googleAnalyticsId = "G-7WQTTPZDX6";
const siteUrl = "https://kaptsure.com";
const phoneNumber = phoneHref.replace("tel:", "");

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "Kaptsure",
  url: siteUrl,
  logo: `${siteUrl}/images/kaptsure-logo.png`,
  image: `${siteUrl}/images/drone-roof-hero.jpg`,
  description:
    "FAA Part 107 certified drone services for roof inspections, real estate media, insurance documentation, and property imaging across the Mississippi Gulf Coast.",
  telephone: phoneNumber,
  email: emailAddress,
  priceRange: "$$",
  areaServed: [
    "Gautier, MS",
    "Ocean Springs, MS",
    "Pascagoula, MS",
    "Biloxi, MS",
    "Gulfport, MS",
    "Mississippi Gulf Coast"
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Drone roof inspections"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Real estate aerial media"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Insurance documentation"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Property evaluation imaging"
      }
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kaptsure | Drone Inspections & Aerial Imaging | Mississippi Gulf Coast",
    template: "%s | Kaptsure"
  },
  description:
    "FAA Part 107 certified drone services for roof inspections, real estate media, insurance documentation, and property imaging across the Mississippi Gulf Coast.",
  applicationName: "Kaptsure",
  alternates: {
    canonical: "/"
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    url: siteUrl,
    title: "Kaptsure | Drone Inspections & Aerial Imaging",
    description:
      "Professional drone inspections, real estate media, insurance documentation, and property imaging across the Mississippi Gulf Coast.",
    images: ["/images/kaptsure-logo.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
        <script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
