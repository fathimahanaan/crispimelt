import React from "react";

export default function TermsCondition() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-[#246b75]">

      <h1 className="text-4xl font-bold text-green-900 mb-6">
        Terms and Conditions
      </h1>

      <p className="mb-6 text-sm">
        <strong>Effective Date:</strong> March 29, 2026
      </p>

      <p className="mb-8">
        Welcome to <strong>Crispimelts</strong>. By accessing or using our
        website, you agree to be bound by these Terms and Conditions. Please
        read them carefully.
      </p>

      {/* Section 1 */}
      <h2 className="text-xl font-semibold text-green-900 mb-2">
        1. Use of Website
      </h2>
      <p className="mb-6">
        You may use this website for lawful purposes only. You agree not to use
        it for any illegal or unauthorized purpose.
      </p>

      {/* Section 2 */}
      <h2 className="text-xl font-semibold text-green-900 mb-2">
        2. Intellectual Property
      </h2>
      <p className="mb-6">
        All content on this website, including images, logos, text, product
        photos, and designs, is owned by Crispimelts and protected by
        intellectual property laws. You may not copy, reproduce, distribute, or
        use any content without our written permission.
      </p>

      {/* Section 3 */}
      <h2 className="text-xl font-semibold text-green-900 mb-2">
        3. Orders and Custom Products
      </h2>
      <p className="mb-6">
        All custom cakes and desserts are handmade and may vary slightly from
        the images shown on the website. Orders are subject to availability and
        confirmation. We reserve the right to refuse or cancel any order if
        necessary.
      </p>

      {/* Section 4 */}
      <h2 className="text-xl font-semibold text-green-900 mb-2">
        4. Contact and Messages
      </h2>
      <p className="mb-6">
        Any messages you send through our contact form, email, WhatsApp,
        Instagram, or other platforms must be respectful and lawful. We reserve
        the right to ignore or refuse messages that are inappropriate,
        abusive, or spam.
      </p>

      {/* Section 5 */}
      <h2 className="text-xl font-semibold text-green-900 mb-2">
        5. Third-Party Services
      </h2>
      <p className="mb-6">
        Our website may use third-party services such as email platforms,
        payment services, or social media applications (for example WhatsApp or
        Instagram). We are not responsible for the policies or practices of
        these third-party services.
      </p>

      {/* Section 6 */}
      <h2 className="text-xl font-semibold text-green-900 mb-2">
        6. Limitation of Liability
      </h2>
      <p className="mb-6">
        Crispimelts shall not be liable for any direct, indirect, incidental, or
        consequential damages resulting from the use of our website, services,
        or products.
      </p>

      {/* Section 7 */}
      <h2 className="text-xl font-semibold text-green-900 mb-2">
        7. Changes to Terms
      </h2>
      <p className="mb-6">
        We may update or modify these Terms and Conditions at any time. Any
        changes will be posted on this page with the updated effective date.
      </p>

      {/* Section 8 */}
      <h2 className="text-xl font-semibold text-green-900 mb-2">
        8. Contact
      </h2>
      <p className="mb-2">
        Crispimelts General Trading LLC
      </p>
      <p className="mb-2">
        United Arab Emirates
      </p>

      <p className="mb-2">
        Email:{" "}
        <a
          href="mailto:info@crispimelts.ae"
          className="text-green-900 underline"
        >
          info@crispimelts.ae
        </a>
      </p>

      <p>
        Phone/WhatsApp:{" "}
        <a
          href="tel:+971525657667"
          className="text-green-900 underline"
        >
          +971 52 565 7667
        </a>
      </p>
    </div>
  );
}