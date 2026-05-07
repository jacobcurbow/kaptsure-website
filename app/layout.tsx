import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
