import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";

const siteUrl = "https://www.kaptsure.com";
const pageUrl = `${siteUrl}/services/construction-progress-photography`;

export const metadata: Metadata = {
  title: "Construction Progress Photography | Mississippi Gulf Coast",
  description:
    "Recurring aerial construction progress photography for milestones, roofing, exterior work, commercial sites, and project reporting on the Mississippi Gulf Coast.",
  alternates: { canonical: "/services/construction-progress-photography" },
  openGraph: {
    url: pageUrl,
    title: "Construction Progress Aerial Imaging | Kaptsure",
    description:
      "Consistent aerial overview, milestone, and before-during-after imagery for Gulf Coast contractors, owners, and project teams.",
    images: ["/images/coastal-property-aerial.jpg"]
  }
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Construction Progress Aerial Imaging",
    serviceType: "Recurring aerial construction and project progress photography",
    url: pageUrl,
    provider: { "@id": `${siteUrl}/#localbusiness` },
    areaServed: { "@type": "Place", name: "Mississippi Gulf Coast" },
    description:
      "Recurring aerial overview, milestone, and before-during-after photography for commercial construction, roofing, exterior work, property development, and project reporting."
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Construction Progress Photography", item: pageUrl }
    ]
  }
];

export default function ConstructionProgressPhotographyPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol className="container">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li aria-current="page">Construction Progress Photography</li>
        </ol>
      </nav>

      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Mississippi Gulf Coast Project Documentation</p>
            <h1>Construction progress photography built for reporting.</h1>
            <p>
              Recurring aerial imagery gives contractors, owners, and project teams a clear visual
              record of milestones, site changes, exterior work, and progress over time.
            </p>
            <div className="service-actions">
              <Link className="button button-primary" href="/contact">Plan a Progress Series</Link>
              <Link className="button button-secondary" href="/services">View All Services</Link>
            </div>
          </div>
          <div className="page-hero-image">
            <Image src="/images/coastal-property-aerial.jpg" alt="Aerial property overview for construction progress photography on the Mississippi Gulf Coast" fill priority sizes="(min-width: 720px) 42vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container service-content">
          <div className="service-content-block">
            <h2>Show what changed without requiring everyone on site.</h2>
            <p>
              Project leaders often need to communicate progress to owners, stakeholders, remote
              team members, lenders, or internal management. A current aerial overview can show site
              organization and visible progress in a way that isolated ground photos cannot.
            </p>
            <p>
              Kaptsure plans progress photography around the business question the images need to
              answer. That may be a concise milestone update, an archive of exterior work, a recurring
              owner report, or a consistent visual history from mobilization through completion.
            </p>
          </div>

          <div className="service-content-block">
            <h2>Consistent viewpoints make progress easier to compare.</h2>
            <p>
              For recurring projects, Kaptsure can repeat practical flight paths, camera directions,
              elevations, and key viewpoints when weather, airspace, site activity, and safety allow.
              Comparable images help viewers recognize changes instead of first having to determine
              where each photograph was taken.
            </p>
            <h3>Milestone documentation</h3>
            <p>
              Flights can align with meaningful phases such as site preparation, structural progress,
              roofing, exterior enclosure, paving, coatings, landscaping, or substantial completion.
              The schedule should follow decisions and reporting needs—not an arbitrary volume of flights.
            </p>
            <h3>Before, during, and after imagery</h3>
            <p>
              A baseline flight records the visible starting point. Progress visits show how the site
              changes. Completion imagery provides a clear final overview that can support handoff,
              internal records, owner communication, and future marketing when appropriate.
            </p>
          </div>

          <div className="service-content-block">
            <h2>Useful across commercial and exterior projects.</h2>
            <p>
              Progress aerials can support commercial construction, property development, roofing,
              coatings, exterior renovation, site improvements, and other work where project scale or
              building access makes ground-only documentation incomplete.
            </p>
            <ul>
              <li>Whole-site aerial overviews for fast stakeholder orientation</li>
              <li>Recurring views of priority buildings, work zones, or exterior areas</li>
              <li>Milestone image sets organized by capture date</li>
              <li>High-resolution photographs and video when motion adds useful context</li>
              <li>Files prepared for project updates, meetings, reports, and records</li>
            </ul>
            <p>
              Kaptsure documents visible progress; project managers, contractors, engineers, and other
              responsible professionals determine completion, quality, compliance, and payment status.
            </p>
          </div>

          <div className="service-content-block">
            <h2>A practical flight plan for Gulf Coast job sites.</h2>
            <p>
              Kaptsure serves projects in Gautier, Ocean Springs, Pascagoula, Biloxi, Gulfport, and
              surrounding Mississippi Gulf Coast communities. Recurring work is coordinated around site
              access, active operations, weather, airspace, and the project’s reporting calendar.
            </p>
            <p>
              Share the site address, project type, expected duration, key milestones, reporting audience,
              and preferred delivery rhythm. We will recommend a scope that produces useful comparisons
              without creating unnecessary media.
            </p>
            <div className="service-actions">
              <Link className="button button-primary" href="/contact">Request a Quote</Link>
              <Link className="service-link" href="/services/drone-roof-inspections">For a roof-focused project, explore drone roof imagery →</Link>
            </div>
          </div>
        </div>
      </section>
      <CTA title="Need a reliable visual record from one milestone to the next?" />
    </main>
  );
}
