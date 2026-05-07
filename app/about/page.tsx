import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kaptsure is a locally owned professional drone services company serving Gautier, Ocean Springs, Pascagoula, Biloxi, Gulfport, and the Mississippi Gulf Coast."
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">About Kaptsure</p>
            <h1>Local drone services with property experience behind the camera.</h1>
            <p>
              Kaptsure is a professional drone services company serving the Mississippi Gulf Coast,
              including Gautier, Ocean Springs, Pascagoula, Biloxi, Gulfport, and surrounding areas.
            </p>
          </div>
          <div className="page-hero-image">
            <Image
              src="/images/drone-operator.jpg"
              alt="Professional drone controller with built-in screen showing live aerial footage"
              fill
              sizes="(min-width: 720px) 42vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container about-layout">
          <div>
            <div className="section-header">
              <h2>Built for inspections, documentation, and confident decisions.</h2>
              <p>
                Kaptsure is not just a drone photography company. It provides aerial inspections,
                real estate media, insurance documentation, and property imaging for contractors,
                agents, adjusters, homeowners, and property owners.
              </p>
            </div>
            <p className="why-copy">
              The work is practical: reduce climbing risk, capture hard-to-see details, document
              current conditions, and deliver clean visuals that help move a project, claim, listing,
              or property evaluation forward.
            </p>
          </div>
          <div className="stat-strip" aria-label="Kaptsure service strengths">
            <div className="stat">
              <strong>FAA Part 107</strong>
              <span>Certified commercial drone operations.</span>
            </div>
            <div className="stat">
              <strong>Gulf Coast</strong>
              <span>Serving local property owners and professionals.</span>
            </div>
            <div className="stat">
              <strong>Property First</strong>
              <span>Real estate, roofing, claims, and documentation focus.</span>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
