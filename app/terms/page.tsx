import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of Service — Procela",
  description:
    "The terms governing use of the Procela.ai website, operated by Datalign Technology LLC.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />

      <article className="prose">
        <h1>Terms of Service</h1>
        <p className="prose-meta">Effective date: July 19, 2026 · Last updated: July 19, 2026</p>

        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of
          the Procela.ai website and related web pages (the &ldquo;Site&rdquo;),
          operated by Datalign Technology LLC, doing business as Procela.ai
          (&ldquo;Procela,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;). By accessing or using the Site, you agree to be bound by
          these Terms. If you do not agree, do not use the Site. These Terms govern the
          Site only; use of any Procela product or service is governed by a separate
          written agreement.
        </p>

        <h2>1. Eligibility</h2>
        <p>
          The Site is intended for business users who are at least 18 years old and
          able to form a binding contract. By using the Site, you represent that you
          meet these requirements and that any information you provide is accurate.
        </p>

        <h2>2. Use of the Site</h2>
        <p>
          You may use the Site only for lawful purposes and in accordance with these
          Terms. You agree not to:
        </p>
        <ul>
          <li>Use the Site in any way that violates applicable law or regulation;</li>
          <li>
            Attempt to gain unauthorized access to the Site, its systems, or related
            networks, or interfere with or disrupt their operation;
          </li>
          <li>
            Introduce malware or any other material that is malicious or technologically
            harmful;
          </li>
          <li>
            Scrape, harvest, or collect information from the Site through automated means
            except as permitted by our robots directives;
          </li>
          <li>
            Reproduce, duplicate, copy, sell, or resell any part of the Site except as
            expressly permitted; or
          </li>
          <li>Use the Site to transmit unsolicited or unauthorized advertising.</li>
        </ul>

        <h2>3. Intellectual property</h2>
        <p>
          The Site and its contents — including text, graphics, logos, design, and
          software — are owned by or licensed to Datalign Technology LLC and are
          protected by copyright, trademark, and other laws. Except as expressly
          permitted, you may not reproduce, distribute, modify, or create derivative
          works from any part of the Site without our prior written consent.
        </p>

        <h2>4. Trademarks</h2>
        <p>
          &ldquo;Procela,&rdquo; the Procela logo, and other Procela marks are
          trademarks of Datalign Technology LLC. Other names and logos appearing on the
          Site are the property of their respective owners and are used for
          identification purposes only; their use does not imply endorsement.
        </p>

        <h2>5. Submissions</h2>
        <p>
          If you submit information or content to us through the Site — for example, a
          demo request or other message — you represent that you have the right to do
          so, and you grant us permission to use that information to respond to you and
          for the purposes described in our{" "}
          <a href="/privacy">Privacy Policy</a>. Please do not submit confidential or
          sensitive information through the Site&apos;s public forms.
        </p>

        <h2>6. Third-party links and services</h2>
        <p>
          The Site may contain links to third-party websites or services that we do not
          own or control. We are not responsible for the content, policies, or
          practices of any third party, and providing a link does not imply endorsement.
        </p>

        <h2>7. Disclaimer of warranties</h2>
        <p>
          The Site is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo;
          without warranties of any kind, whether express, implied, or statutory,
          including implied warranties of merchantability, fitness for a particular
          purpose, title, and non-infringement. We do not warrant that the Site will be
          uninterrupted, secure, error-free, or free of harmful components, or that any
          information on the Site is accurate or complete.
        </p>

        <h2>8. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, in no event will Datalign Technology
          LLC or its officers, employees, or agents be liable for any indirect,
          incidental, special, consequential, or punitive damages, or for any loss of
          profits, revenue, data, or goodwill, arising out of or in connection with your
          use of, or inability to use, the Site — whether based on warranty, contract,
          tort, or any other legal theory, and whether or not we have been advised of
          the possibility of such damages. In no event will our total aggregate
          liability arising out of or relating to the Site exceed one hundred U.S.
          dollars (US $100).
        </p>

        <h2>9. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Datalign Technology LLC and its
          affiliates from any claims, liabilities, damages, and expenses (including
          reasonable attorneys&apos; fees) arising out of your use of the Site or your
          violation of these Terms.
        </p>

        <h2>10. Governing law and disputes</h2>
        <p>
          These Terms are governed by the laws of the State of Florida, without regard
          to its conflict-of-laws principles. You agree that any dispute arising out of
          or relating to these Terms or the Site will be subject to the exclusive
          jurisdiction of the state and federal courts located in Lake County,
          Florida, and you consent to their personal jurisdiction.
        </p>

        <h2>11. Changes to these Terms</h2>
        <p>
          We may modify these Terms from time to time. When we do, we will revise the
          &ldquo;Last updated&rdquo; date above. Changes are effective when posted. Your
          continued use of the Site after changes take effect constitutes acceptance of
          the revised Terms.
        </p>

        <h2>12. Severability and entire agreement</h2>
        <p>
          If any provision of these Terms is found unenforceable, the remaining
          provisions will remain in full effect. These Terms, together with our Privacy
          Policy, constitute the entire agreement between you and Procela regarding your
          use of the Site.
        </p>

        <h2>13. Contact us</h2>
        <p>
          Questions about these Terms can be directed to Datalign Technology LLC at{" "}
          <a href="mailto:legal@procela.ai">legal@procela.ai</a>, through our{" "}
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
