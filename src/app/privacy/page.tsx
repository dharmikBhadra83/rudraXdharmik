import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Rudrx.dev",
  description: "Privacy Policy for Rudrx.dev",
};

export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString('en-GB', { 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-neutral-400 mb-8">Last updated: {currentDate}</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <p className="text-neutral-300 leading-relaxed">
            Rudrx.dev (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect information when you visit our website or interact with our services.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">a. Information You Provide</h3>
            <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
              <li>Name, email address, company name</li>
              <li>Information submitted via contact forms or booking forms</li>
              <li>Details shared during project discussions or inquiries</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">b. Automatically Collected Information</h3>
            <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on the site</li>
              <li>Device and usage data (via cookies or analytics tools)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
              <li>Respond to inquiries and schedule discussions</li>
              <li>Evaluate potential engagements</li>
              <li>Provide and improve our services</li>
              <li>Communicate project-related updates</li>
              <li>Maintain website security and performance</li>
            </ul>
            <p className="text-neutral-300 leading-relaxed mt-4">
              We do not sell or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Cookies & Analytics</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Our website may use cookies or similar technologies to:
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
              <li>Understand how visitors interact with the site</li>
              <li>Improve content, usability, and performance</li>
              <li>Maintain basic functionality</li>
            </ul>
            <p className="text-neutral-300 leading-relaxed mt-4">
              You can control or disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Information Sharing</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              We may share information only in the following cases:
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
              <li>With trusted service providers (e.g. hosting, analytics) strictly for operational purposes</li>
              <li>When required by law or legal process</li>
              <li>With your explicit consent</li>
            </ul>
            <p className="text-neutral-300 leading-relaxed mt-4">
              All third-party providers are expected to maintain appropriate data protection standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
            <p className="text-neutral-300 leading-relaxed">
              We take reasonable technical and organizational measures to protect your information against unauthorized access, loss, or misuse.
            </p>
            <p className="text-neutral-300 leading-relaxed mt-4">
              However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Data Retention</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              We retain personal information only for as long as necessary to:
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
              <li>Fulfill the purposes outlined in this policy</li>
              <li>Comply with legal, accounting, or contractual obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Your Rights</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Depending on applicable laws, you may have the right to:
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
              <li>Request access to your personal information</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent for certain uses</li>
            </ul>
            <p className="text-neutral-300 leading-relaxed mt-4">
              Requests can be made by contacting us at the email address below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Third-Party Links</h2>
            <p className="text-neutral-300 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to This Policy</h2>
            <p className="text-neutral-300 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated revision date.
            </p>
            <p className="text-neutral-300 leading-relaxed mt-4">
              Continued use of the website constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Us</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or how your information is handled, you can contact us at:
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

