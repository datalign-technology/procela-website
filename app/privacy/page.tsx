import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy — Procela",
  description:
    "How Datalign Technology LLC (DBA Procela.ai) collects, uses, shares, and protects information collected through the Procela.ai website.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />

      <article className="prose">
        <h1>Privacy Policy</h1>
        <p className="prose-meta">Effective date: July 19, 2026 · Last updated: July 19, 2026</p>

        <p>
          Datalign Technology LLC, doing business as Procela.ai
          (&ldquo;Procela,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;), respects your privacy. This Privacy Policy explains what
          information we collect through the Procela.ai website and related web pages
          (the &ldquo;Site&rdquo;), how we use and share it, and the choices you have.
          It applies to information collected through the Site and not to any separate
          product environment governed by a written agreement.
        </p>

        <h2>1. Information we collect</h2>
        <p>
          <strong>Information you provide.</strong> When you request a demo or
          otherwise contact us, we collect the information you submit — typically your
          name, work email address, company, industry, and any message you include.
          Providing this information is voluntary, but some of it is necessary for us to
          respond to your request.
        </p>
        <p>
          <strong>Information collected automatically.</strong> When you visit the
          Site, we and our service providers may automatically collect certain
          technical information, such as your IP address, browser type and settings,
          device information, referring URLs, pages viewed, and the dates and times of
          your visits. Some of this information is collected using cookies and similar
          technologies.
        </p>

        <h2>2. Cookies and similar technologies</h2>
        <p>
          We use cookies and similar technologies to operate the Site, remember your
          preferences, and understand how the Site is used so we can improve it. You
          can set your browser to refuse some or all cookies or to alert you when
          cookies are being sent; however, some parts of the Site may not function
          properly without them.
        </p>

        <h2>3. How we use information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your requests and provide the demos, materials, or information you ask for;</li>
          <li>Communicate with you about Procela&apos;s products, services, and events;</li>
          <li>Operate, maintain, secure, and improve the Site and our services;</li>
          <li>Analyze usage and trends to understand and enhance the user experience;</li>
          <li>Detect, prevent, and address fraud, security issues, and misuse; and</li>
          <li>Comply with our legal obligations and enforce our agreements.</li>
        </ul>

        <h2>4. Legal bases for processing</h2>
        <p>
          Where the General Data Protection Regulation (GDPR) or similar laws apply, we
          process personal information on the following legal bases: your consent; our
          legitimate interests in operating and promoting our business (balanced
          against your rights); the performance of a contract or steps taken at your
          request prior to entering into one; and compliance with legal obligations.
        </p>

        <h2>5. How we share information</h2>
        <p>
          <strong>We do not sell your personal information.</strong> We may share it in
          the following circumstances:
        </p>
        <ul>
          <li>
            <strong>Service providers.</strong> With vendors who process information on
            our behalf — for example, hosting, email delivery, and analytics providers
            — under obligations to use it only to provide services to us.
          </li>
          <li>
            <strong>Legal and safety.</strong> When required by law, regulation, legal
            process, or governmental request, or to protect the rights, property, or
            safety of Procela, our users, or others.
          </li>
          <li>
            <strong>Business transfers.</strong> In connection with a merger,
            acquisition, financing, or sale of assets, subject to this Policy.
          </li>
        </ul>

        <h2>6. International data transfers</h2>
        <p>
          Procela is based in the United States, and the information we collect may be
          processed in the United States or other countries that may have data
          protection laws different from those in your country. Where required, we take
          steps to ensure appropriate safeguards are in place for such transfers.
        </p>

        <h2>7. Data retention</h2>
        <p>
          We retain personal information for as long as necessary to fulfill the
          purposes described in this Policy, including to respond to your inquiries and
          maintain business records, unless a longer retention period is required or
          permitted by law. When information is no longer needed, we take reasonable
          steps to delete or de-identify it.
        </p>

        <h2>8. Data security</h2>
        <p>
          We maintain administrative, technical, and physical safeguards designed to
          protect the information we collect. However, no method of transmission or
          storage is completely secure, and we cannot guarantee absolute security.
        </p>

        <h2>9. Your rights and choices</h2>
        <p>
          Depending on your location, you may have the right to access, correct,
          update, delete, or receive a copy of your personal information; to object to
          or restrict certain processing; and to withdraw consent where processing is
          based on consent. If you are a California resident, you may have additional
          rights under the California Consumer Privacy Act (CCPA/CPRA), including the
          right to know, delete, and opt out of the &ldquo;sale&rdquo; or
          &ldquo;sharing&rdquo; of personal information — which, as noted above, we do
          not do. To exercise any of these rights, contact us using the details below.
          We will not discriminate against you for exercising them.
        </p>
        <p>
          You can also opt out of marketing emails at any time by using the unsubscribe
          link in the email or by contacting us.
        </p>

        <h2>10. Children&apos;s privacy</h2>
        <p>
          The Site is intended for business users and is not directed to children under
          16. We do not knowingly collect personal information from children. If you
          believe a child has provided us personal information, please contact us and
          we will take appropriate steps to delete it.
        </p>

        <h2>11. Third-party links</h2>
        <p>
          The Site may contain links to third-party websites and services that we do
          not control. This Policy does not apply to those third parties, and we
          encourage you to review their privacy policies.
        </p>

        <h2>12. Changes to this Policy</h2>
        <p>
          We may update this Policy from time to time. When we do, we will revise the
          &ldquo;Last updated&rdquo; date above and, where appropriate, provide
          additional notice. Your continued use of the Site after changes take effect
          constitutes acceptance of the updated Policy.
        </p>

        <h2>13. Contact us</h2>
        <p>
          If you have questions about this Policy or our privacy practices, contact
          Datalign Technology LLC at{" "}
          <a href="mailto:privacy@procela.ai">privacy@procela.ai</a>, through our{" "}
          <a href="/demo">contact page</a>, or by mail at:
        </p>
        <p>
          Datalign Technology LLC
          <br />
          25546 High Hampton Circle
          <br />
          Sorrento, FL 32776
        </p>
      </article>

      <SiteFooter />
    </>
  );
}
