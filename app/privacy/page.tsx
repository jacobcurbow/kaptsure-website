import type { Metadata } from "next";
import Link from "next/link";
import { emailAddress, emailHref } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Kaptsure collects, uses, stores, and shares information through its website, services, and Marketing Dashboard.",
  alternates: {
    canonical: "/privacy"
  },
  openGraph: {
    url: "https://kaptsure.com/privacy",
    title: "Privacy Policy | Kaptsure",
    description:
      "How Kaptsure handles information through its website, services, and Marketing Dashboard."
  }
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="container legal-container">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Effective August 24, 2026</p>
          <p className="legal-intro">
            This Privacy Policy explains how Kaptsure collects, uses, discloses, and retains
            information when you use kaptsure.com, engage Kaptsure for services, or use the Kaptsure
            Marketing Dashboard (collectively, the “Services”).
          </p>
        </div>
      </section>

      <article className="container legal-container legal-content">
        <section aria-labelledby="information-we-collect">
          <h2 id="information-we-collect">1. Information we collect</h2>
          <h3>Information you provide</h3>
          <p>
            We may collect information you submit to us, such as your name, email address, phone
            number, company, property or project details, service requests, messages, and other
            information you choose to provide. If you use the Marketing Dashboard, we may also
            collect account details, user roles, company affiliation, and information needed to
            administer your organization’s access.
          </p>
          <h3>Authorized integrations and marketing data</h3>
          <p>
            At your or your organization’s direction, the Marketing Dashboard may connect to
            third-party platforms and receive authorized data from services such as Google Analytics
            4, Google Search Console, Google Ads, Google Keyword Planner, and website analytics
            providers. Depending on the integration and permissions granted, this may include
            campaign, keyword, advertising cost, conversion, traffic, search performance, account,
            and related reporting data. Future integrations may include other advertising, social,
            CRM, lead, and business-outcome providers.
          </p>
          <h3>Lead and contact information</h3>
          <p>
            If a client authorizes us to process lead or contact information, the data may include
            names, contact details, inquiry details, source or campaign attribution, status, and
            business-outcome information. Clients are responsible for having appropriate authority
            to provide this information to Kaptsure.
          </p>
          <h3>Website and technical information</h3>
          <p>
            When you use our website or Dashboard, we and our service providers may automatically
            receive information such as IP address, browser and device type, operating system,
            referring pages, pages viewed, approximate location derived from IP address, dates and
            times of access, and diagnostic or usage events. Authentication providers may also give
            us identifiers and basic account information needed to sign you in.
          </p>
        </section>

        <section aria-labelledby="google-user-data">
          <h2 id="google-user-data">2. Google user data and OAuth/API access</h2>
          <p>
            The Dashboard accesses Google user data only after an authorized user grants permission
            through Google’s OAuth consent process. The specific information available to Kaptsure
            depends on the Google services, accounts, properties, and permission scopes the user
            approves. Kaptsure uses this access to provide client-requested features such as displaying
            analytics, maintaining historical reports, identifying performance changes, preparing
            recurring reports, monitoring provider or data health, and generating evidence-backed
            recommendations for human review.
          </p>
          <p>
            Kaptsure does not use Google user data for unrelated purposes and does not sell Google
            user data, Google account credentials, or provider access tokens. Google OAuth credentials
            and access tokens are intended to be handled on server-side systems and are not intended
            to be exposed publicly or to other Dashboard tenants. We disclose Google user data only
            as described in this Policy, including to service providers that help us operate the
            Services, when directed by the authorized client, or when required by law.
          </p>
          <p>
            Kaptsure’s use and transfer of information received from Google APIs will adhere to the
            Google API Services User Data Policy, including its Limited Use requirements. You may
            disconnect a Google integration through available account controls, by revoking access in
            your Google account, or by contacting us. Disconnection stops future API access but does
            not automatically remove information already received and retained for legitimate service,
            security, legal, or recordkeeping purposes. You may request deletion as described below.
          </p>
        </section>

        <section aria-labelledby="how-we-use-information">
          <h2 id="how-we-use-information">3. How we use information</h2>
          <p>We may use information to:</p>
          <ul>
            <li>provide, maintain, secure, and improve the Services;</li>
            <li>respond to inquiries, prepare quotes, schedule work, and communicate with clients;</li>
            <li>authenticate users, manage roles, and provide access to the appropriate company data;</li>
            <li>connect authorized provider accounts and retrieve client-approved data;</li>
            <li>display analytics, preserve reporting history, and identify performance changes;</li>
            <li>prepare reports and evidence-backed recommendations for human review;</li>
            <li>monitor integration, provider, and data health and troubleshoot problems;</li>
            <li>understand website and product usage; and</li>
            <li>protect users, Kaptsure, and the Services and comply with applicable obligations.</li>
          </ul>
          <p>
            The initial Dashboard does not automatically make website or advertising changes.
            Recommendations require human review before a client or authorized operator acts on them.
          </p>
        </section>

        <section aria-labelledby="cookies-analytics">
          <h2 id="cookies-analytics">4. Cookies and analytics</h2>
          <p>
            We may use cookies and similar technologies that are necessary for authentication,
            security, preferences, and operation of the Services. We may also use analytics tools,
            including Google Analytics when configured, to understand website usage and improve the
            Services. Your browser may allow you to block or delete cookies, but doing so may affect
            features that depend on them. Where required, we will provide additional choices regarding
            non-essential cookies.
          </p>
        </section>

        <section aria-labelledby="sharing">
          <h2 id="sharing">5. How we share information</h2>
          <p>We may share information:</p>
          <ul>
            <li>
              with hosting, authentication, analytics, communications, database, and other service
              providers that process information for us to operate the Services;
            </li>
            <li>
              with the client organization and its authorized users, according to account permissions;
            </li>
            <li>with third parties when you or the authorized client directs or consents to sharing;</li>
            <li>
              when reasonably necessary to comply with law, legal process, or lawful requests, or to
              protect rights, safety, and the integrity of the Services; and
            </li>
            <li>
              in connection with a proposed or completed business transaction, subject to appropriate
              protections and applicable law.
            </li>
          </ul>
          <p>Kaptsure does not sell client Google account credentials or provider access tokens.</p>
        </section>

        <section aria-labelledby="storage-security">
          <h2 id="storage-security">6. Data storage and security</h2>
          <p>
            Kaptsure uses administrative, technical, and organizational measures intended to protect
            information in light of its nature and the Services provided. The Dashboard is designed to
            use authenticated accounts and tenant isolation so users access only the company data they
            are authorized to view. Provider credentials and tokens are intended to remain server-side.
            No method of storage or transmission is completely secure, and we cannot guarantee absolute
            security.
          </p>
          <p>
            Information may be processed by Kaptsure and its service providers in locations where they
            operate. Those locations may have data-protection laws different from those where you live.
          </p>
        </section>

        <section aria-labelledby="retention">
          <h2 id="retention">7. Retention and deletion</h2>
          <p>
            We retain information for as long as reasonably necessary to provide the Services,
            maintain historical reporting requested by a client, protect the Services, meet legal or
            accounting obligations, resolve disputes, and enforce agreements. Retention depends on the
            type of information, the client relationship, integration settings, and applicable
            requirements. When information is no longer needed, we may delete or de-identify it.
          </p>
          <p>
            An authorized user may disconnect a provider to stop future collection from that provider.
            To request deletion of an account or associated information, contact us at the address
            below. We will evaluate the request in light of the requester’s authority, the client’s
            instructions, and applicable obligations. Residual copies may remain temporarily in backups
            or where retention is required or permitted.
          </p>
        </section>

        <section aria-labelledby="choices-rights">
          <h2 id="choices-rights">8. Your choices and rights</h2>
          <p>
            You may choose not to provide certain information, although some Services may then be
            unavailable. You may request access to, correction of, or deletion of your personal
            information, or object to or restrict certain processing, where applicable. You may also
            opt out of non-essential marketing communications by using the instructions in the message
            or contacting us. We may need to verify your identity and authority before completing a
            request. Rights vary by location, and some exceptions may apply.
          </p>
        </section>

        <section aria-labelledby="children">
          <h2 id="children">9. Children’s privacy</h2>
          <p>
            The Services are intended for businesses and adults and are not directed to children under
            13. We do not knowingly collect personal information from children under 13. If you believe
            a child has provided personal information to us, please contact us so we can review and
            address it.
          </p>
        </section>

        <section aria-labelledby="changes">
          <h2 id="changes">10. Changes to this Policy</h2>
          <p>
            We may update this Policy as the Services, integrations, or applicable requirements change.
            We will post the updated version on this page and revise the effective date. If changes are
            material, we may provide additional notice through the Services or by other appropriate
            means.
          </p>
        </section>

        <section aria-labelledby="contact-us">
          <h2 id="contact-us">11. Contact us</h2>
          <p>
            For privacy questions or requests, email Kaptsure at <a href={emailHref}>{emailAddress}</a>.
            You can also use our <Link href="/contact">contact page</Link>.
          </p>
        </section>
      </article>
    </main>
  );
}
