import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Rudrx.dev",
  description: "Terms and Conditions for Rudrx.dev",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-neutral-400 mb-8">Last updated: 15/12/2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <p className="text-neutral-300 leading-relaxed">
            These Terms & Conditions (&quot;Terms&quot;) govern your use of the Rudrx.dev website and any related services provided by Rudrx.dev (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using our website or services, you agree to be bound by these Terms.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. About Rudrx.dev</h2>
            <p className="text-neutral-300 leading-relaxed">
              Rudrx.dev provides custom software services including (but not limited to) SaaS development, ERP systems, internal tools, workflow automation, integrations, and ongoing system maintenance for businesses.
            </p>
            <p className="text-neutral-300 leading-relaxed mt-4">
              All services are delivered on a custom, project-specific basis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Use of Website</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              You agree to use this website only for lawful purposes. You must not:
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the website&apos;s functionality or security</li>
              <li>Use the website to transmit harmful, misleading, or illegal content</li>
            </ul>
            <p className="text-neutral-300 leading-relaxed mt-4">
              We reserve the right to restrict or terminate access if misuse is detected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Services & Engagements</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              All services provided by Rudrx.dev are subject to:
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
              <li>Written agreements, proposals, or scopes of work</li>
              <li>Defined timelines, deliverables, and pricing</li>
              <li>Mutually agreed terms specific to each engagement</li>
            </ul>
            <p className="text-neutral-300 leading-relaxed mt-4">
              Information shared on this website does not constitute a binding offer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Unless otherwise agreed in writing:
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
              <li>All pre-existing tools, frameworks, methodologies, and internal libraries remain the intellectual property of Rudrx.dev</li>
              <li>Client-specific deliverables may be transferred as defined in the project agreement</li>
              <li>Website content, branding, and visuals are owned by Rudrx.dev and may not be reused without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Confidentiality</h2>
            <p className="text-neutral-300 leading-relaxed">
              Any business, technical, or operational information shared during discussions or engagements will be treated as confidential.
            </p>
            <p className="text-neutral-300 leading-relaxed mt-4">
              Both parties agree not to disclose confidential information to third parties unless required by law or explicitly permitted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Payments & Fees</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Payment terms, pricing, and billing schedules are defined in individual agreements.
            </p>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Late or non-payment may result in:
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
              <li>Paused work</li>
              <li>Withheld deliverables</li>
              <li>Termination of the engagement</li>
            </ul>
            <p className="text-neutral-300 leading-relaxed mt-4">
              All fees are exclusive of applicable taxes unless stated otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
              <li>Rudrx.dev shall not be liable for indirect, incidental, or consequential damages</li>
              <li>We do not guarantee uninterrupted or error-free operation of delivered software</li>
              <li>Liability, if any, is limited to the amount paid for the specific service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Third-Party Services</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Projects may involve third-party tools, APIs, hosting providers, or platforms.
            </p>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Rudrx.dev is not responsible for:
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
              <li>Downtime or failures caused by third-party services</li>
              <li>Changes in third-party pricing, terms, or availability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Termination</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Either party may terminate an engagement as per the terms defined in the project agreement.
            </p>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Upon termination:
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
              <li>Outstanding invoices remain payable</li>
              <li>Access to work or systems may be revoked as applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Governing Law</h2>
            <p className="text-neutral-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to These Terms</h2>
            <p className="text-neutral-300 leading-relaxed">
              We may update these Terms from time to time. Any changes will be reflected on this page with an updated revision date.
            </p>
            <p className="text-neutral-300 leading-relaxed mt-4">
              Continued use of the website after changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Contact</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              For questions regarding these Terms, please contact:
            </p>
            <div className="text-neutral-300 space-y-2">
              <p className="font-semibold">Rudrx.dev</p>
              <p>
                📧 <a href="mailto:dharmik@rudrx.dev" className="text-blue-400 hover:text-blue-300 transition-colors">dharmik@rudrx.dev</a>
              </p>
              <p>
                🌐 <a href="https://rudrx.dev" className="text-blue-400 hover:text-blue-300 transition-colors">https://rudrx.dev</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}





