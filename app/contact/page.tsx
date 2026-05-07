import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description:
    "Request a quote from Kaptsure for drone roof inspections, real estate media, insurance documentation, and property imaging on the Mississippi Gulf Coast."
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Request a Quote</p>
          <h1>Tell us what you need documented from the air.</h1>
          <p>
            Share the property address, service needed, project details, and preferred date. Kaptsure
            will follow up to confirm flight details and scheduling.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-card">
            <div className="contact-card-image">
              <Image
                src="/images/coastal-property-aerial.jpg"
                alt="Aerial view of waterfront property for quote request planning"
                fill
                sizes="(min-width: 720px) 42vw, 100vw"
              />
            </div>
            <h2>Fast, professional aerial service.</h2>
            <p>
              Serving Gautier, Ocean Springs, Pascagoula, Biloxi, Gulfport, and the surrounding
              Mississippi Gulf Coast with FAA Part 107 certified drone services.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
