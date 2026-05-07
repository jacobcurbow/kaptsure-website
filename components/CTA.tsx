import Link from "next/link";

type CTAProps = {
  title?: string;
};

export function CTA({ title = "Need a drone flight? Let’s get it scheduled." }: CTAProps) {
  return (
    <section
      className="cta-section cta-with-image"
      aria-labelledby="cta-title"
      style={{ backgroundImage: "url('/images/coastal-homes-cta.jpg')" }}
    >
      <div className="container cta-inner">
        <h2 id="cta-title">{title}</h2>
        <Link className="button" href="/contact">
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
