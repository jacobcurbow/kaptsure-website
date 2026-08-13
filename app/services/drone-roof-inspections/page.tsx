import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";

const siteUrl = "https://kaptsure.com";
const pageUrl = `${siteUrl}/services/drone-roof-inspections`;

export const metadata: Metadata = {
  title: "Drone Roof Inspections | Mississippi Gulf Coast",
  description:
    "High-resolution drone roof imagery for contractors, property owners, storm documentation, and residential or commercial properties on the Mississippi Gulf Coast.",
  alternates: { canonical: "/services/drone-roof-inspections" },
  openGraph: {
    url: pageUrl,
    title: "Drone Roof Inspections | Kaptsure",
    description:
      "Clear aerial roof documentation for residential and commercial properties across the Mississippi Gulf Coast.",
    images: ["/images/residential-roofs.jpg"]
  }
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Drone Roof Inspections",
    serviceType: "Drone roof imagery and property-condition documentation",
    url: pageUrl,
    provider: { "@id": `${siteUrl}/#localbusiness` },
    areaServed: { "@type": "Place", name: "Mississippi Gulf Coast" },
    description:
      "High-resolution aerial roof imagery for contractors, property owners, storm documentation, estimates, and residential or commercial property-condition records."
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Drone Roof Inspections", item: pageUrl }
    ]
  }
];

export default function DroneRoofInspectionsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol className="container">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li aria-current="page">Drone Roof Inspections</li>
        </ol>
      </nav>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Mississippi Gulf Coast Roof Documentation</p>
            <h1>Drone roof inspections without the ladder risk.</h1>
            <p>
              Kaptsure captures high-resolution aerial images that help contractors and property
              owners see and document roof conditions from useful angles—without unnecessary roof access.
            </p>
            <div className="service-actions">
              <Link className="button button-primary" href="/contact">Request a Roof Flight</Link>
              <Link className="button button-secondary" href="/services">View All Services</Link>
            </div>
          </div>
          <div className="page-hero-image">
            <Image src="/images/residential-roofs.jpg" alt="Aerial imagery of residential roofs on the Mississippi Gulf Coast" fill priority sizes="(min-width: 720px) 42vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container service-content">
          <div className="service-content-block">
            <h2>A clear visual record of the roof and surrounding property.</h2>
            <p>
              A drone flight can document roof planes, ridgelines, valleys, penetrations, edges,
              flashing areas, drainage paths, and other visible exterior details. The result is a
              practical set of images that can be reviewed from the ground, shared with a project
              team, or retained as a dated property-condition record.
            </p>
            <p>
              This service is especially useful when a roof is steep, elevated, fragile, wet, or
              otherwise difficult to access safely. Drone imagery does not replace a licensed
              engineer, insurance adjuster, roofing professional, or hands-on inspection when one
              is required. It gives those professionals and property owners better visual information
              for the next step.
            </p>
          </div>

          <div className="service-content-block">
            <h2>Useful for planning, estimates, and documentation.</h2>
            <h3>Contractor estimates and project planning</h3>
            <p>
              Roofers and contractors can use current aerial imagery to understand access, roof
              geometry, visible conditions, and surrounding obstacles before an on-site evaluation
              or estimate. Images can also document progress or completed exterior work.
            </p>
            <h3>Storm and insurance documentation</h3>
            <p>
              After wind, hail, or severe weather, a timely flight can create a visual record of
              visible roof and property conditions. Kaptsure supplies the imagery; claim coverage,
              damage determinations, and repair recommendations remain with the appropriate licensed
              professionals and insurance representatives. Learn more about our focused
              {" "}<Link className="service-link" href="/services/insurance-storm-documentation">
                insurance and storm documentation service
              </Link>.
            </p>
            <h3>Property-condition records</h3>
            <p>
              Owners, property managers, buyers, and commercial teams may need an exterior record
              before a transaction, repair, lease period, maintenance cycle, or construction project.
              Repeat flights can provide consistent visual documentation over time.
            </p>
          </div>

          <div className="service-content-block">
            <h2>Residential and commercial roof imagery.</h2>
            <p>
              Kaptsure works with homes, multifamily properties, offices, retail buildings, and other
              commercial sites where safe aerial access is practical and permitted. Before the flight,
              we confirm the property location, the areas that matter most, and how the images will be used.
            </p>
            <ul>
              <li>High-resolution overview and detail images from useful aerial angles</li>
              <li>Coverage planned around the roof, site access, airspace, and weather</li>
              <li>Organized digital files that are easy to review and share</li>
              <li>Optional broader property context when it supports the project</li>
            </ul>
          </div>

          <div className="service-content-block">
            <h2>Serving the Mississippi Gulf Coast.</h2>
            <p>
              Kaptsure provides drone roof documentation in Gautier, Ocean Springs, Pascagoula,
              Biloxi, Gulfport, and surrounding Gulf Coast communities. Coastal weather can change
              flight timing, so scheduling accounts for wind, rain, site conditions, and applicable
              airspace requirements.
            </p>
            <p>
              Tell us the property address, the purpose of the flight, and the areas you need captured.
              We will confirm whether drone imagery is a good fit and outline the next step.
            </p>
            <div className="service-actions">
              <Link className="button button-primary" href="/contact">Request a Quote</Link>
              <Link className="service-link" href="/services/real-estate-drone-photography">Need listing media instead? Explore real estate aerial media →</Link>
            </div>
          </div>
        </div>
      </section>
      <CTA title="Need clear roof imagery for a property or project?" />
    </main>
  );
}
