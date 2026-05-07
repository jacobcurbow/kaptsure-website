import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { ServiceCard } from "@/components/ServiceCard";
import { phoneHref } from "@/lib/contact";

const services = [
  {
    title: "Drone Roof Inspections",
    description:
      "Document roof conditions quickly and safely with high-resolution aerial imaging for homes, commercial buildings, and storm-affected properties.",
    imageSrc: "/images/residential-roofs.jpg",
    imageAlt: "Aerial view of residential rooftops used for drone roof inspection planning"
  },
  {
    title: "Real Estate Aerial Media",
    description:
      "Showcase listings, land, waterfront access, neighborhood context, and property scale with polished aerial photos and video.",
    imageSrc: "/images/waterfront-real-estate.jpg",
    imageAlt: "Aerial view of waterfront homes and canals for real estate marketing"
  },
  {
    title: "Insurance & Claims Documentation",
    description:
      "Capture clear condition records for adjusters, homeowners, contractors, and property owners after storms or property damage.",
    imageSrc: "/images/roofing-documentation.jpg",
    imageAlt: "Roofer documenting a residential roof during exterior repair work"
  },
  {
    title: "Coastal Property Imaging",
    description:
      "Professional aerial views for coastal, waterfront, rural, and commercial properties across the Mississippi Gulf Coast.",
    imageSrc: "/images/coastal-property-aerial.jpg",
    imageAlt: "Aerial view of a sunny waterfront neighborhood with homes and boats"
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Mississippi Gulf Coast Drone Services</p>
            <h1>Drone Inspections & Aerial Imaging for the Mississippi Gulf Coast</h1>
            <p>
              Fast, reliable aerial services for roofing, real estate, insurance documentation, and
              property evaluations—without the risk of climbing.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">
                Request a Quote
              </Link>
              <Link className="button button-secondary" href={phoneHref}>
                Call Now
              </Link>
            </div>
          </div>
          <div className="hero-visual" aria-label="Kaptsure aerial inspection dashboard">
            <div className="hero-photo">
              <Image
                src="/images/drone-roof-hero.jpg"
                alt="Modern DJI Mavic-style drone flying during an aerial property inspection"
                fill
                priority
                sizes="(min-width: 980px) 48vw, 100vw"
              />
              <div className="photo-badge">Inspection Flight</div>
              <div className="photo-card">
                <strong>Aerial Documentation</strong>
                <span>Roof, property, claims, progress, and coastal imaging delivered clearly.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar" aria-label="Kaptsure trust signals">
        <div className="container">
          <ul className="trust-list">
            <li>FAA Part 107 Certified</li>
            <li>Locally Owned</li>
            <li>Fast Turnaround</li>
            <li>Fully Insured</li>
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="services-preview">
        <div className="container">
          <div className="section-header">
            <h2 id="services-preview">Aerial services built for property decisions.</h2>
            <p>
              Kaptsure provides inspection-ready visuals for contractors, agents, adjusters,
              homeowners, and property owners.
            </p>
          </div>
          <div className="card-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="why-kaptsure">
        <div className="container why-grid">
          <div>
            <p className="eyebrow">Why Kaptsure</p>
            <h2 id="why-kaptsure">Practical aerial data, not just pretty pictures.</h2>
            <div className="why-image">
              <Image
                src="/images/drone-operator.jpg"
                alt="Professional drone controller with built-in screen showing live aerial footage"
                fill
                sizes="(min-width: 720px) 48vw, 100vw"
              />
            </div>
          </div>
          <div>
            <p className="why-copy">
              Kaptsure combines drone technology with real-world experience in real estate, roofing,
              and property services. We don’t just take pictures—we deliver aerial data that helps
              clients make decisions, document conditions, close deals, and reduce risk.
            </p>
            <ul className="check-list">
              <li>FAA Part 107 Certified</li>
              <li>Real Estate & Roofing Background</li>
              <li>Clear Aerial Documentation</li>
              <li>Fast, Professional Service</li>
            </ul>
          </div>
        </div>
      </section>

      <CTA />

      <section className="service-area">
        <div className="container">
          Serving Gautier, Ocean Springs, Pascagoula, Biloxi, Gulfport, and the surrounding
          Mississippi Gulf Coast.
        </div>
      </section>
    </main>
  );
}
