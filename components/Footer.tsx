import Image from "next/image";
import Link from "next/link";
import { emailAddress, emailHref, phoneDisplay, phoneHref } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Image
            className="footer-logo"
            src="/images/kaptsure-logo.svg"
            alt="Kaptsure"
            width={512}
            height={120}
          />
          <p className="footer-copy">
            Professional drone inspections, real estate media, insurance documentation, and property
            imaging across the Mississippi Gulf Coast.
          </p>
          <div className="footer-contact" aria-label="Kaptsure contact information">
            <a href={phoneHref}>{phoneDisplay}</a>
            <a href={emailHref}>{emailAddress}</a>
          </div>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <div className="container">© 2026 Kaptsure. FAA Part 107 certified drone services.</div>
      </div>
    </footer>
  );
}
