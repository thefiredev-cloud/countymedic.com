import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service - County Medic",
  description: "Terms of Service for County Medic, an enterprise clinical decision support system for fire department EMS.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <article>
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms of Service</h1>
              <p className="text-gray-400">Last updated: January 15, 2025</p>
            </div>

            {/* Introduction */}
            <section className="mb-10">
              <p className="text-gray-300 leading-relaxed mb-4">
                Welcome to County Medic (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website and services. By accessing or using County Medic, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use our services.
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                By accessing and using County Medic, you accept and agree to be bound by and comply with these Terms of Service and our Privacy Policy. We reserve the right to modify these Terms at any time. Your continued use of the service following any changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            {/* Pre-Release Product Disclaimer */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Pre-Release Product Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                County Medic is currently in development and offered as a pre-release product. The service is provided on an &quot;as-is&quot; basis without any warranty or guarantee of any kind. Features, functionality, and performance may change without notice. We do not guarantee that:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-2">
                <li>The service will be error-free or uninterrupted</li>
                <li>All features will be available or function as intended</li>
                <li>The service will meet your specific requirements or expectations</li>
                <li>The service will be suitable for production use without additional validation</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Use of pre-release features is at your own risk. County Medic should not be used as the sole basis for clinical decision-making until the product reaches general availability.
              </p>
            </section>

            {/* Beta Program Terms */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">3. Beta Program Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you are participating in County Medic's beta program, you acknowledge that:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-2">
                <li>The service is in active development and subject to significant change</li>
                <li>Your feedback and data may be used to improve the product</li>
                <li>Access to the beta program may be revoked at any time without notice</li>
                <li>Data stored during the beta period may not be preserved after the beta ends</li>
                <li>Beta features are not subject to the same security and compliance standards as released products</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                We appreciate your participation in testing County Medic and welcome your feedback.
              </p>
            </section>

            {/* No Warranty */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">4. No Warranty</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. TO THE FULLEST EXTENT PERMITTED BY LAW, COUNTY MEDIC DISCLAIMS ALL WARRANTIES AND CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-2">
                <li>Any warranty that the service will meet your requirements</li>
                <li>Any warranty regarding availability, accuracy, or completeness of information</li>
                <li>Any warranty that defects will be corrected</li>
                <li>Any warranty regarding the security or reliability of the service</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, COUNTY MEDIC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, EVEN IF COUNTY MEDIC HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                IN NO EVENT SHALL COUNTY MEDIC'S TOTAL LIABILITY ARISING OUT OF OR IN CONNECTION WITH THESE TERMS AND THE SERVICE EXCEED ONE HUNDRED DOLLARS (USD $100).
              </p>
              <p className="text-gray-300 leading-relaxed">
                This limitation applies to all claims, whether based on warranty, contract, tort, strict liability, or any other legal theory, even if County Medic has been advised of the possibility of such damages.
              </p>
            </section>

            {/* Healthcare Disclaimer */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Healthcare Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                County Medic is a clinical decision support tool and is NOT a substitute for professional medical judgment, training, or experience. The information and recommendations provided by County Medic are intended to supplement, not replace, the clinical decision-making process of qualified healthcare professionals.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Users of County Medic are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-2">
                <li>Applying their own clinical judgment and expertise</li>
                <li>Verifying the accuracy and appropriateness of information provided by the system</li>
                <li>Ensuring compliance with all applicable medical standards, protocols, and regulations</li>
                <li>Maintaining appropriate medical oversight and quality assurance processes</li>
                <li>Ensuring all users are adequately trained and qualified to use the system</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                County Medic does not provide medical diagnosis or treatment recommendations. All clinical decisions must be made by qualified healthcare professionals who are responsible for their own clinical judgment.
              </p>
              <p className="text-gray-300 leading-relaxed">
                In the event of a medical emergency, always follow your organization's protocols and seek immediate professional medical assistance.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                County Medic reserves the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the service after any modifications constitute your acceptance of the updated Terms. We will make reasonable efforts to notify users of significant changes, but it is your responsibility to review these Terms periodically.
              </p>
            </section>

            {/* Intellectual Property Rights */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Intellectual Property Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                All content on County Medic, including but not limited to text, graphics, logos, images, audio, video, and software, is the property of County Medic or its content suppliers and is protected by international copyright and other intellectual property laws.
              </p>
              <p className="text-gray-300 leading-relaxed">
                You may not reproduce, distribute, transmit, modify, or create derivative works of any content without our prior written permission.
              </p>
            </section>

            {/* User Responsibilities */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">9. User Responsibilities</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree to use County Medic in compliance with all applicable laws and regulations. You further agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on any third-party intellectual property rights</li>
                <li>Transmit malware, viruses, or harmful code</li>
                <li>Engage in unauthorized access or hacking</li>
                <li>Use the service for any unlawful or fraudulent purpose</li>
                <li>Attempt to disrupt or overload the service infrastructure</li>
              </ul>
            </section>

            {/* Privacy and Data */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">10. Privacy and Data</h2>
              <p className="text-gray-300 leading-relaxed">
                Your use of County Medic is governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding the collection and use of your information.
              </p>
            </section>

            {/* Termination */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">11. Termination</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                County Medic may terminate your access to the service at any time, with or without cause, and with or without notice. Sections of these Terms that by their nature should survive termination will continue in effect after termination.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">12. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any legal action or proceeding related to these Terms shall be exclusively brought in the courts located in Los Angeles County, California.
              </p>
            </section>

            {/* Contact Us */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">13. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <p className="text-white font-semibold mb-2">County Medic</p>
                <p className="text-gray-400">Email: <a href="mailto:contact@thefiredev.com" className="text-red hover:text-red-light transition-colors">contact@thefiredev.com</a></p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="pt-8 border-t border-gray-400/20">
              <p className="text-sm text-gray-400">
                By using County Medic, you acknowledge that you have read these Terms of Service, understand them, and agree to be bound by them.
              </p>
            </section>
          </article>
        </div>
      </div>

      <Footer />
    </main>
  );
}
