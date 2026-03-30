import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-12 py-16">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Privacy Policy
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          Effective Date:  March 29, 2026
        </p>

        <p className="mb-6 leading-relaxed">
          At <strong>Crispimelts General Trading LLC</strong>, your privacy is
          important to us. This Privacy Policy explains how we handle the
          information you provide when contacting us through our website,
          WhatsApp, Instagram, or email.
        </p>

        <p className="mb-8 leading-relaxed">
          Our website mainly provides information about our cakes, desserts,
          and services. Customers can contact us for inquiries or orders
          through messaging platforms. We only collect information that you
          voluntarily provide and we do not track your browsing activity.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl font-semibold mb-3">
          1. Information We Collect
        </h2>

        <p className="mb-4">
          We only collect information that you voluntarily provide through
          WhatsApp, Instagram, email, or website contact forms.
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Message or inquiry content</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold mb-3">
          2. How We Use Your Information
        </h2>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Respond to inquiries about our cakes, desserts, and services</li>
          <li>Communicate with you regarding orders or requests</li>
          <li>Forward your messages through WhatsApp, Instagram, or email</li>
          <li>Provide assistance related to our products</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold mb-3">
          3. Sharing Your Information
        </h2>

        <p className="mb-8 leading-relaxed">
          Crispimelts does not sell, rent, or trade your personal information.
          We may only share your information with trusted service providers who
          help operate our communication services or when required by law.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold mb-3">
          4. Third-Party Services
        </h2>

        <p className="mb-8 leading-relaxed">
          Messages sent through WhatsApp, Instagram, or email may be processed
          by those platforms in order to deliver your message. Crispimelts is
          not responsible for the privacy practices of these third-party
          platforms. Please review their privacy policies separately.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold mb-3">
          5. Data Security
        </h2>

        <p className="mb-8 leading-relaxed">
          We take reasonable measures to protect the information you provide
          from unauthorized access, misuse, or loss.
        </p>

        {/* Section 6 */}
        <h2 className="text-xl font-semibold mb-3">
          6. Your Rights
        </h2>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Access the personal information you shared with us</li>
          <li>Request correction of incorrect information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt-out of promotional communications</li>
        </ul>

        {/* Section 7 */}
        <h2 className="text-xl font-semibold mb-3">
          7. Contact Us
        </h2>

        <p className="mb-4">
          If you have questions about this Privacy Policy, you can contact us:
        </p>

        <div className="mb-8 space-y-2">
          <p><strong>Crispimelts General Trading LLC</strong></p>
          <p>United Arab Emirates</p>

          <a
            href="mailto:info@crispimelts.ae"
            className="text-blue-600 hover:underline block"
          >
            info@crispimelts.ae
          </a>

          <a
            href="tel:+971525657667"
            className="text-blue-600 hover:underline block"
          >
            +971 52 565 7667 (WhatsApp)
          </a>

          <a
            href="https://www.instagram.com/crispimelts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline block"
          >
            Instagram: @crispimelts
          </a>
        </div>

        {/* Section 8 */}
        <h2 className="text-xl font-semibold mb-3">
          8. Changes to This Privacy Policy
        </h2>

        <p className="mb-8 leading-relaxed">
          We may update this Privacy Policy from time to time. Any updates will
          be posted on this page with the updated effective date.
        </p>

        {/* Section 9 */}
        <h2 className="text-xl font-semibold mb-3">
          9. Delete My Data
        </h2>

        <p className="leading-relaxed">
          If you would like us to delete your messages or contact information,
          please contact us through the same platform you used (WhatsApp,
          Instagram, or email). Once we receive your request, we will delete
          your information within a reasonable time.
        </p>

      </div>
    </div>
  );
}