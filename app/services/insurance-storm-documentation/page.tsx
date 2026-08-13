import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";

const siteUrl = "https://kaptsure.com";
const pageUrl = `${siteUrl}/services/insurance-storm-documentation`;

export const metadata: Metadata = {
  title: "Insurance & Storm Documentation | Mississippi Gulf Coast",
  description:
    "High-resolution aerial and ground-level photos and video for storm, roof, exterior, pre-repair, and post-repair documentation on the Mississippi Gulf Coast.",
  alternates: { canonical: "/services/insurance-storm-documentation" },
  openGraph: {
    url: pageUrl,
    title: "Insurance & Storm Documentation | Kaptsure",
    description:
      "Clear visual documentation of roofs, exteriors, property conditions, and repair progress across the Mississippi Gulf Coast.",
    images: ["/images/roofing-documentation.jpg"]
  }
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Insurance and Storm Documentation",
    serviceType: "Aerial and ground-level property imagery and visual documentation",
    url: pageUrl,
    provider: { "@id": `${siteUrl}/#localbusiness` },
    areaServed: { "@type": "Place", name: "Mississippi Gulf Coast" },
    description:
      "High-resolution aerial and ground-level photos and video documenting visible roof, exterior, storm, and repair conditions for property owners, contractors, and insurance-support records."
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Insurance and Storm Documentation", item: pageUrl }
    ]
  }
];

export default function InsuranceStormDocumentationPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol className="container">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li aria-current="page">Insurance &amp; Storm Documentation</li>
        </ol>
      </nav>

      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Mississippi Gulf Coast Property Documentation</p>
            <h1>Clear visual documentation before and after the work.</h1>
            <p>
              Kaptsure captures high-resolution aerial and ground-level photos and video that help
              property owners, contractors, and insurance professionals maintain an organized visual
              record after storms, before repairs, and when work is complete.
            </p>
            <div className="service-actions">
              <Link className="button button-primary" href="/contact">Request Documentation</Link>
              <Link className="button button-secondary" href="/services">View All Services</Link>
            </div>
          </div>
          <div className="page-hero-image">
            <Image src="/images/roofing-documentation.jpg" alt="Exterior roof documentation during repair work on a Gulf Coast home" fill priority sizes="(min-width: 720px) 42vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container service-content">
          <div className="service-content-block">
            <h2>Visual evidence, delivered without making the determination.</h2>
            <p>
              Good documentation shows what was visible at a particular time. Kaptsure can capture
              roof surfaces, exterior elevations, site conditions, debris, affected areas, and the
              broader relationship between structures and the property. Ground-level images can be
              added when they provide useful detail or context.
            </p>
            <p>
              Kaptsure provides imagery and organized visual records. We are not an insurance or
              public adjuster, engineer, licensed home inspector, or claim decision-maker. We do not
              determine cause of loss, coverage, repair scope, structural condition, or claim value.
              Those conclusions belong to the appropriate licensed professionals and insurance parties.
            </p>
          </div>

          <div className="service-content-block">
            <h2>Documentation for each stage of the response.</h2>
            <h3>Post-storm and visible-condition imagery</h3>
            <p>
              A prompt flight can create an overview of visible roof and exterior conditions after
              wind, hail, heavy rain, or another weather event. Wide views establish property context;
              closer aerial angles and ground-level images document specific areas that can be safely captured.
            </p>
            <h3>Pre-repair documentation</h3>
            <p>
              Before roofing or exterior work begins, dated imagery can preserve a visual record of
              the accessible conditions and project area. Contractors and owners can use it to support
              estimating conversations, project files, and communication with other professionals.
            </p>
            <h3>During- and post-repair documentation</h3>
            <p>
              Follow-up photography can show work in progress and the visible result after completion.
              A before-and-after set helps teams communicate what changed without relying on memory or
              inconsistent phone photos from different viewpoints.
            </p>
          </div>

          <div className="service-content-block">
            <h2>Useful files for owners, contractors, and insurance support.</h2>
            <p>
              The most valuable deliverable is one that the people involved can review quickly.
              Before the flight, Kaptsure confirms the property, priority areas, intended audience,
              and whether aerial photos, ground photos, video, or a combination will be most useful.
            </p>
            <ul>
              <li>High-resolution roof, exterior, and site overview photographs</li>
              <li>Ground-level details where access is safe and the view adds context</li>
              <li>Aerial or ground video when movement and spatial context are helpful</li>
              <li>Pre-repair, progress, and post-repair image sets</li>
              <li>Organized digital files suitable for sharing with project and insurance professionals</li>
            </ul>
            <p>
              If a specialist needs a specific angle or area documented, their shot requirements can
              be incorporated when flight conditions, access, safety, and regulations allow.
            </p>
          </div>

          <div className="service-content-block">
            <h2>Serving coastal Mississippi when conditions allow.</h2>
            <p>
              Kaptsure serves Gautier, Ocean Springs, Pascagoula, Biloxi, Gulfport, and surrounding
              Mississippi Gulf Coast communities. Storm response can involve wind, rain, restricted
              access, emergency operations, and changing airspace. Safety and legal flight conditions
              determine when and how the property can be documented.
            </p>
            <p>
              Share the address, the event or project timeline, the areas that need coverage, and who
              will use the files. We will recommend a practical documentation scope and explain what
              can be captured.
            </p>
            <div className="service-actions">
              <Link className="button button-primary" href="/contact">Request a Quote</Link>
              <Link className="service-link" href="/services/drone-roof-inspections">Need roof-focused imagery? Explore drone roof inspections →</Link>
            </div>
          </div>
        </div>
      </section>
      <CTA title="Need an organized visual record of a property or repair?" />
    </main>
  );
}
