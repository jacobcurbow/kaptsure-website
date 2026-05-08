import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const googleAnalyticsId = "G-7WQTTPZDX6";

export const metadata: Metadata = {
  metadataBase: new URL("https://kaptsure.com"),
  title: {
    default: "Kaptsure | Drone Inspections & Aerial Imaging | Mississippi Gulf Coast",
    template: "%s | Kaptsure"
  },
  description:
    "FAA Part 107 certified drone services for roof inspections, real estate media, insurance documentation, and property imaging across the Mississippi Gulf Coast.",
  openGraph: {
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
