import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
};

export function ServiceCard({ title, description, imageSrc, imageAlt, href }: ServiceCardProps) {
  return (
    <article className="service-card">
      {imageSrc ? (
        <div className="service-card-image">
          <Image src={imageSrc} alt={imageAlt ?? ""} fill sizes="(min-width: 980px) 25vw, (min-width: 720px) 50vw, 100vw" />
        </div>
      ) : null}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        {href ? (
          <Link className="service-link" href={href}>
            Learn more <span aria-hidden="true">→</span>
          </Link>
        ) : null}
      </div>
      <span className="card-accent" aria-hidden="true" />
    </article>
  );
}
