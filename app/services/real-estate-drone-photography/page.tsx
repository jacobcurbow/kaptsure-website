import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";

const siteUrl = "https://www.kaptsure.com";
const pageUrl = `${siteUrl}/services/real-estate-drone-photography`;

export const metadata: Metadata = {
  title: "Real Estate Drone Photography | Mississippi Gulf Coast",
  description:
    "Aerial photos and video for homes, waterfront listings, land, and commercial properties across the Mississippi Gulf Coast.",
  alternates: { canonical: "/services/real-estate-drone-photography" },
  openGraph: {
    url: pageUrl,
    title: "Real Estate Drone Photography & Aerial Media | Kaptsure",
    description:
      "Professional aerial photos and video that show property scale, setting, access, and Gulf Coast location context.",
    images: ["/images/waterfront-real-estate.jpg"]
  }
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Real Estate Drone Photography and Aerial Media",
    serviceType: "Real estate aerial photography and video",
    url: pageUrl,
    provider: { "@id": `${siteUrl}/#localbusiness` },
    areaServed: { "@type": "Place", name: "Mississippi Gulf Coast" },
    description:
      "Aerial photos and video for residential listings, waterfront property, land, acreage, and commercial real estate on the Mississippi Gulf Coast."
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Real Estate Drone Photography", item: pageUrl }
    ]
  }
];

export default function RealEstateDronePhotographyPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol className="container">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li aria-current="page">Real Estate Drone Photography</li>
        </ol>
      </nav>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Mississippi Gulf Coast Aerial Media</p>
            <h1>Real estate drone photography that shows the whole property.</h1>
            <p>
              Professional aerial photos and video help buyers understand scale, setting, access,
              waterfront features, land, and location context that ground-level images cannot show alone.
            </p>
            <div className="service-actions">
              <Link className="button button-primary" href="/contact">Plan a Listing Flight</Link>
              <Link className="button button-secondary" href="/services">View All Services</Link>
            </div>
          </div>
          <div className="page-hero-image">
            <Image src="/images/waterfront-real-estate.jpg" alt="Aerial real estate photography of waterfront homes on the Mississippi Gulf Coast" fill priority sizes="(min-width: 720px) 42vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container service-content">
          <div className="service-content-block">
            <h2>Give buyers the context they need before a showing.</h2>
            <p>
              Traditional listing photography explains rooms and finishes. Aerial media explains how
              the property fits together: the home’s position on the lot, driveway and access, nearby
              water, outdoor features, adjacent land, and the relationship between buildings.
            </p>
            <p>
              Kaptsure plans each flight around the property’s strongest visual story rather than using
              the same shot list everywhere. The final media is designed to complement—not replace—the
              interior and ground-level photography used in a complete listing package.
            </p>
          </div>

          <div className="service-content-block">
            <h2>Aerial media for different property types.</h2>
            <h3>Homes and waterfront listings</h3>
            <p>
              Aerial views can show yard size, pools, docks, shoreline context, nearby waterways, and
              the property’s overall setting. For Gulf Coast listings, that broader perspective often
              answers location questions that are hard to communicate from the street.
            </p>
            <h3>Land and acreage</h3>
            <p>
              Elevated imagery helps buyers understand shape, access points, existing improvements,
              vegetation, and surrounding land. Flights can be coordinated with maps or listing details,
              but imagery should not be treated as a survey or boundary determination.
            </p>
            <h3>Commercial and investment property</h3>
            <p>
              Commercial aerial media can show building placement, parking, access, neighboring uses,
              and the scale of the site. It is useful for listing presentations, marketing packages,
              owner updates, and property overviews.
            </p>
          </div>

          <div className="service-content-block">
            <h2>Photos, video, and marketing-ready delivery.</h2>
            <p>
              The right deliverables depend on where the property will be marketed. Kaptsure can capture
              polished still images for MLS and listing pages, short aerial video sequences for websites
              and social media, or a coordinated set that gives agents flexibility across channels.
            </p>
            <ul>
              <li>High-resolution aerial photographs from varied elevations and directions</li>
              <li>Video movements that establish the property and surrounding area</li>
              <li>Waterfront, land, neighborhood, or commercial-site context where relevant</li>
              <li>Digital files prepared for straightforward marketing use</li>
            </ul>
            <p>
              Agents should confirm current MLS rules, platform specifications, and any required
              disclosures before publication. We can coordinate framing and file needs in advance so
              the flight supports the intended campaign.
            </p>
          </div>

          <div className="service-content-block">
            <h2>Local coverage across the Mississippi Gulf Coast.</h2>
            <p>
              Kaptsure serves real estate professionals, property owners, and marketing teams in
              Gautier, Ocean Springs, Pascagoula, Biloxi, Gulfport, and surrounding communities.
              Flights are scheduled around weather, light, site access, and applicable airspace rules.
            </p>
            <p>
              Send the property address, target listing date, and the features that matter most. We will
              recommend a practical aerial scope and coordinate timing with your broader marketing plan.
            </p>
            <div className="service-actions">
              <Link className="button button-primary" href="/contact">Request a Quote</Link>
              <Link className="service-link" href="/services/drone-roof-inspections">Need condition documentation? Explore drone roof inspections →</Link>
            </div>
          </div>
        </div>
      </section>
      <CTA title="Ready to show the full story of a Gulf Coast property?" />
    </main>
  );
}
