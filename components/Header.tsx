import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" aria-label="Kaptsure home">
          <Image
            className="brand-logo"
            src="/images/kaptsure-logo.svg"
            alt="Kaptsure"
            width={512}
            height={120}
            priority
          />
        </Link>
        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="button button-primary mobile-quote" href="/contact">
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
