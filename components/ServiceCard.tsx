import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function ServiceCard({ title, description, imageSrc, imageAlt }: ServiceCardProps) {
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
      </div>
      <span className="card-accent" aria-hidden="true" />
    </article>
  );
}
