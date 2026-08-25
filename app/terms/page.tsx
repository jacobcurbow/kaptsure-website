import type { Metadata } from "next";
import Link from "next/link";
import { emailAddress, emailHref } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing the Kaptsure website, professional services, and Kaptsure Marketing Dashboard.",
  alternates: {
    canonical: "/terms"
  },
  openGraph: {
    url: "https://kaptsure.com/terms",
    title: "Terms of Service | Kaptsure",
    description:
      "Terms governing the Kaptsure website, professional services, and Marketing Dashboard."
  }
};

export default function TermsPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="container legal-container">
          <p className="eyebrow">Legal</p>
          <h1>Terms of Service</h1>
          <p className="legal-updated">Effective August 24, 2026</p>
          <p className="legal-intro">
            These Terms of Service (“Terms”) govern access to kaptsure.com, Kaptsure’s professional
            services, and the Kaptsure Marketing Dashboard (collectively, the “Services”).
          </p>
        </div>
      </section>

      <article className="container legal-container legal-content">
        <section aria-labelledby="acceptance">
          <h2 id="acceptance">1. Acceptance of these Terms</h2>
          <p>
            By accessing or using the Services, requesting or purchasing Kaptsure services, or creating
            or using a Dashboard account, you agree to these Terms. If you use the Services for a
            company or other organization, you represent that you have authority to accept these Terms
            on its behalf. If you do not agree, do not use the Services.
          </p>
          <p>
            A proposal, order, statement of work, or other written agreement may include additional
            terms for a specific engagement. If those terms conflict with these Terms, the specific
            written agreement controls for that engagement.
          </p>
        </section>

        <section aria-labelledby="services">
          <h2 id="services">2. Services</h2>
          <p>
            Kaptsure provides drone, aerial, imaging, documentation, and related professional services.
            Kaptsure is also developing the Marketing Dashboard, a multi-tenant platform intended to
            help authorized client users view and evaluate marketing information from connected
            services. Features, integrations, and availability may change as the Dashboard develops.
          </p>
          <p>
            The scope, schedule, deliverables, and client-specific requirements for professional
            services may be described in a quote, proposal, order, or other written communication.
            Operational conditions, safety requirements, weather, airspace restrictions, property
            access, and legal requirements may affect drone-service timing or feasibility.
          </p>
        </section>

        <section aria-labelledby="accounts-integrations">
          <h2 id="accounts-integrations">3. Accounts and authorized integrations</h2>
          <p>
            You must provide accurate account information, protect your sign-in credentials, and
            promptly notify us of suspected unauthorized access. You are responsible for activity under
            your account to the extent permitted by law and for ensuring that users you authorize have
            appropriate roles and permissions.
          </p>
          <p>
            You may connect third-party accounts only when you have authority to access the account and
            authorize Kaptsure to process its data. By connecting an account, you direct Kaptsure to
            retrieve and use authorized data to provide Dashboard features. You may disconnect an
            integration through available controls, through the provider, or by contacting us. The
            provider’s own terms and policies also govern your use of that provider.
          </p>
        </section>

        <section aria-labelledby="client-responsibilities">
          <h2 id="client-responsibilities">4. Client responsibilities</h2>
          <p>You are responsible for:</p>
          <ul>
            <li>having the rights and permissions needed for information you provide or connect;</li>
            <li>complying with laws, platform policies, contracts, and notice or consent obligations;</li>
            <li>maintaining accurate billing, contact, account, and integration information;</li>
            <li>reviewing deliverables, analytics, reports, and recommendations before relying on them;</li>
            <li>
              making final business, advertising, marketing, SEO, property, insurance, and safety
              decisions; and
            </li>
            <li>using deliverables and the Dashboard only for lawful, authorized purposes.</li>
          </ul>
        </section>

        <section aria-labelledby="acceptable-use">
          <h2 id="acceptable-use">5. Acceptable use</h2>
          <p>You may not:</p>
          <ul>
            <li>use the Services unlawfully, fraudulently, or to infringe another person’s rights;</li>
            <li>access data, accounts, systems, or tenant environments without authorization;</li>
            <li>share credentials in a way that defeats access controls or impersonate another person;</li>
            <li>
              probe, disrupt, overload, introduce malicious code into, or circumvent security or usage
              controls of the Services;
            </li>
            <li>
              reverse engineer or attempt to extract source code except where a restriction is
              prohibited by law;
            </li>
            <li>scrape or use automated means to access the Services except as Kaptsure authorizes; or</li>
            <li>use the Services to create, distribute, or support harmful or deceptive material.</li>
          </ul>
        </section>

        <section aria-labelledby="intellectual-property">
          <h2 id="intellectual-property">6. Intellectual property</h2>
          <p>
            Kaptsure and its licensors retain all rights in the website, Dashboard, software, branding,
            designs, documentation, and other materials Kaptsure provides, except for client materials
            and rights expressly granted in a written agreement. Subject to these Terms and payment of
            applicable fees, Kaptsure grants authorized users a limited, non-exclusive,
            non-transferable, revocable right to use the Dashboard for the client’s internal business
            purposes while access is active.
          </p>
          <p>
            You retain rights you have in data, content, and materials you provide. You grant Kaptsure
            permission to host, process, reproduce, and display those materials as reasonably necessary
            to provide, secure, support, and improve the Services and fulfill your instructions. Rights
            in professional-service deliverables may be further addressed in the applicable proposal or
            written agreement.
          </p>
        </section>

        <section aria-labelledby="third-party-services">
          <h2 id="third-party-services">7. Third-party services</h2>
          <p>
            The Services may integrate with or link to third-party platforms such as Google products,
            analytics providers, advertising platforms, authentication providers, and other business
            tools. Kaptsure does not control those services and is not responsible for their content,
            availability, security, data accuracy, policy changes, API changes, or acts and omissions.
            A third party may limit or revoke access, change its features, or discontinue an integration.
          </p>
        </section>

        <section aria-labelledby="analytics-disclaimer">
          <h2 id="analytics-disclaimer">8. Analytics and recommendations</h2>
          <p>
            Dashboard data, reports, alerts, and recommendations depend on information supplied by
            clients and third-party providers. That information may be delayed, incomplete, sampled,
            changed, or inaccurate. Kaptsure does not independently verify every data point.
            Recommendations are informational and require human review. The initial Dashboard does not
            automatically make website or advertising changes.
          </p>
          <p>
            Kaptsure does not guarantee search rankings, traffic, impressions, leads, conversions,
            revenue, advertising performance, return on investment, or any other marketing or business
            result. Results depend on many factors outside Kaptsure’s control, including markets,
            competition, budgets, client decisions, provider systems, and platform policies.
          </p>
        </section>

        <section aria-labelledby="fees">
          <h2 id="fees">9. Fees and payment</h2>
          <p>
            Fees, payment timing, and any recurring charges will be described in the applicable quote,
            proposal, order, subscription selection, or written agreement. You agree to pay authorized
            charges and applicable taxes according to those terms. Unless a written agreement states
            otherwise, access to paid Services may be limited or suspended when amounts are overdue.
            Nothing in these Terms creates a refund right or payment commitment not stated in the
            applicable agreement.
          </p>
        </section>

        <section aria-labelledby="suspension-termination">
          <h2 id="suspension-termination">10. Suspension and termination</h2>
          <p>
            You may stop using the Services at any time, subject to payment and other obligations in an
            applicable agreement. Kaptsure may suspend or terminate access when reasonably necessary to
            address a security risk, unlawful or unauthorized use, material breach, nonpayment, harm to
            the Services or others, or a third-party provider restriction. When practical, Kaptsure may
            provide notice and an opportunity to resolve the issue.
          </p>
          <p>
            Upon termination, your right to use the affected Services ends. Provisions that by their
            nature should survive will remain in effect, including provisions concerning fees,
            intellectual property, disclaimers, liability, and disputes. Data handling after termination
            is described in the <Link href="/privacy">Privacy Policy</Link> and any applicable written
            agreement.
          </p>
        </section>

        <section aria-labelledby="warranties">
          <h2 id="warranties">11. Disclaimer of warranties</h2>
          <p>
            To the fullest extent permitted by law, the website and Dashboard are provided “as is” and
            “as available.” Kaptsure disclaims implied warranties of merchantability, fitness for a
            particular purpose, title, and non-infringement. Kaptsure does not warrant that the Services
            will be uninterrupted, error-free, or completely secure, or that third-party data will be
            complete or accurate. These disclaimers do not limit any express commitments in a signed
            written agreement or rights that cannot lawfully be waived.
          </p>
        </section>

        <section aria-labelledby="liability">
          <h2 id="liability">12. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, Kaptsure will not be liable for indirect, incidental,
            special, consequential, exemplary, or punitive damages, or for lost profits, revenue, data,
            goodwill, or business opportunities, arising from or related to the Services, even if advised
            of the possibility of those damages.
          </p>
          <p>
            To the fullest extent permitted by law, Kaptsure’s total liability arising from or related to
            the Services will not exceed the amount you paid Kaptsure for the specific Service giving
            rise to the claim during the twelve months before the event giving rise to liability. If you
            paid nothing for that Service, the total liability will not exceed one hundred U.S. dollars.
            These limitations do not apply where prohibited by law and do not limit obligations expressly
            accepted in a signed written agreement.
          </p>
        </section>

        <section aria-labelledby="indemnification">
          <h2 id="indemnification">13. Indemnification</h2>
          <p>
            To the extent permitted by law, you agree to defend, indemnify, and hold harmless Kaptsure
            from third-party claims, damages, and reasonable costs arising from your unlawful use of the
            Services, your violation of these Terms, or data or materials you provide without required
            rights or authorization. Kaptsure will provide reasonable notice of a covered claim and
            reasonable cooperation at your expense. You may not settle a claim in a way that admits
            wrongdoing by or imposes obligations on Kaptsure without Kaptsure’s written consent.
          </p>
        </section>

        <section aria-labelledby="changes">
          <h2 id="changes">14. Changes to the Services or Terms</h2>
          <p>
            Kaptsure may update the Services and these Terms as its offerings, integrations, or legal
            obligations change. Updated Terms will be posted on this page with a revised effective date.
            If a change is material, Kaptsure may provide additional notice through the Services or by
            other appropriate means. Your continued use after updated Terms take effect means you accept
            them. If you do not agree, you must stop using the Services.
          </p>
        </section>

        <section aria-labelledby="general">
          <h2 id="general">15. General terms</h2>
          <p>
            If a provision of these Terms is found unenforceable, it will be modified only as much as
            necessary, and the remaining provisions will remain in effect. A failure to enforce a
            provision is not a waiver. You may not assign these Terms without Kaptsure’s consent; Kaptsure
            may assign them in connection with a merger, acquisition, reorganization, or sale of assets.
            These Terms and any applicable written agreement are the entire agreement concerning their
            subject matter. Nothing here creates a partnership, joint venture, employment, or agency
            relationship.
          </p>
        </section>

        <section aria-labelledby="contact-us">
          <h2 id="contact-us">16. Contact us</h2>
          <p>
            Questions about these Terms may be sent to Kaptsure at <a href={emailHref}>{emailAddress}</a>.
            You can also use our <Link href="/contact">contact page</Link>.
          </p>
        </section>
      </article>
    </main>
  );
}
