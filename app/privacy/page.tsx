'use client';

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-base">
            Last updated: January 15, 2025
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-gray-300 leading-relaxed">
            County Medic ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and interact with our services.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We collect information you voluntarily provide when you:
          </p>
          <ul className="space-y-3 text-gray-300 leading-relaxed ml-4">
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span><strong>Sign up for updates:</strong> Email address and optional contact information</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span><strong>Request a demo:</strong> Name, organization, email, and phone number</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span><strong>Contact us:</strong> Any information you provide in correspondence</span>
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            We do not automatically collect sensitive data such as health information or protected health information (PHI) through our website. If you choose to share health-related information in communications with us, we handle it with the highest level of care and in compliance with applicable regulations.
          </p>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="space-y-3 text-gray-300 leading-relaxed ml-4">
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span>Send product updates and improvements relevant to County Medic</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span>Respond to your inquiries and provide customer support</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span>Communicate about new features and services (with your consent)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span>Conduct research and development for our platform</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span>Comply with legal obligations and regulations</span>
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            We will never sell your personal information to third parties or use it for purposes other than those stated in this policy.
          </p>
        </section>

        {/* Data Storage & Security */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Data Storage & Security
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            County Medic takes the security of your information very seriously:
          </p>
          <ul className="space-y-3 text-gray-300 leading-relaxed ml-4">
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span>All data is encrypted in transit using industry-standard TLS/SSL protocols</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span>Sensitive data is encrypted at rest using AES-256 encryption</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span>Access to your information is restricted to authorized personnel only</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span>We regularly conduct security assessments and updates</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span>Data is stored on secure, SOC 2 Type II compliant servers</span>
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            While we implement robust security measures, no method of transmission over the Internet is 100% secure. We encourage you to use strong passwords and practice safe browsing habits.
          </p>
        </section>

        {/* HIPAA Compliance */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            HIPAA Compliance
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            County Medic is designed with HIPAA (Health Insurance Portability and Accountability Act) compliance in mind. Our platform is built to:
          </p>
          <ul className="space-y-3 text-gray-300 leading-relaxed ml-4">
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span>Protect and secure Protected Health Information (PHI)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span>Maintain strict access controls and audit logs</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span>Comply with HIPAA Security Rule requirements</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span>Provide Business Associate Agreements (BAAs) as required</span>
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            For customers handling PHI, we maintain full HIPAA compliance and can execute Business Associate Agreements upon request.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Your Rights
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="space-y-3 text-gray-300 leading-relaxed ml-4">
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span><strong>Right to Access:</strong> Request a copy of the data we hold about you</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span><strong>Right to Rectification:</strong> Correct inaccurate or incomplete information</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal obligations)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span><strong>Right to Withdraw Consent:</strong> Unsubscribe from communications at any time</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red flex-shrink-0">•</span>
              <span><strong>Right to Object:</strong> Object to processing of your information</span>
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            To exercise any of these rights, please contact us using the information provided in the Contact Us section below.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            If you have questions about this Privacy Policy, our privacy practices, or wish to exercise your rights, please contact us at:
          </p>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <p className="text-white font-medium mb-2">County Medic</p>
            <p className="text-gray-300">
              Email:{" "}
              <a
                href="mailto:contact@thefiredev.com"
                className="text-red hover:text-red-light transition-colors"
              >
                contact@thefiredev.com
              </a>
            </p>
          </div>
          <p className="text-gray-300 leading-relaxed mt-6">
            We will respond to your request within 30 days or as required by applicable law.
          </p>
        </section>

        {/* Changes to Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or applicable laws. We will notify you of any material changes by updating the "Last updated" date at the top of this policy. Your continued use of our website and services following the posting of changes constitutes your acceptance of those changes.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="border-t border-gray-400/20 pt-8">
          <p className="text-gray-400 text-sm leading-relaxed">
            This Privacy Policy is effective as of the date first written above. County Medic reserves the right to modify this policy at any time. We encourage you to review this policy periodically to stay informed about how we protect your privacy.
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}
