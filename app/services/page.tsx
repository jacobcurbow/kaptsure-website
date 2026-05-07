import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Drone Services",
  description:
    "Drone roof inspections, real estate aerial media, insurance documentation, coastal property imaging, contractor progress photos, and before and after project documentation."
};

const serviceDetails = [
  {
    title: "Drone Roof Inspections",
    copy:
      "Kaptsure helps document roof conditions without sending someone up a ladder. High-resolution aerial images can support roofing estimates, maintenance planning, storm assessments, and property evaluations."
  },
  {
    title: "Real Estate Aerial Photos & Video",
    copy:
      "Aerial media helps buyers understand the full property, not just the front door. Kaptsure captures listing visuals for residential, commercial, land, waterfront, and investment properties across the Gulf Coast."
  },
  {
    title: "Insurance / Storm Damage Documentation",
    copy:
      "After severe weather, clear documentation matters. Kaptsure provides aerial images and video that help homeowners, adjusters, contractors, and property owners record visible damage and property conditions."
  },
  {
    title: "Coastal, Waterfront & Property Imaging",
    copy:
      "Coastal properties need context. Kaptsure captures waterfront access, shoreline features, surrounding land, structures, elevation context, and property layout for owners, agents, and project teams."
  },
  {
    title: "Contractor Progress Photos",
    copy:
      "Track job progress from a consistent aerial perspective. Kaptsure supports contractors with professional documentation for roofing, construction, exterior improvements, and site updates."
  },
  {
    title: "Before & After Project Documentation",
    copy:
      "Before and after aerial imaging creates a clear record of completed work, property improvements, repairs, cleanup, or storm recovery. It is useful for owners, contractors, agents, and insurers."
  }
];

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Drone Services</p>
            <h1>Drone inspections and aerial documentation for real property.</h1>
            <p>
              Kaptsure serves contractors, agents, adjusters, homeowners, and property owners with
              fast, clear aerial imaging across the Mississippi Gulf Coast.
            </p>
          </div>
          <div className="page-hero-image">
            <Image
              src="/images/waterfront-real-estate.jpg"
              alt="Aerial view of waterfront residential properties used for real estate imaging"
              fill
              sizes="(min-width: 720px) 42vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container service-detail-list">
          {serviceDetails.map((service) => (
            <article className="service-detail" key={service.title}>
              <h2>{service.title}</h2>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
