import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const SOCIAL_LINKS = [
  { icon: <FaFacebookF />, href: "https://www.facebook.com/crispimelts" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/crispimelts" },
  { icon: <FaYoutube />, href: "https://www.youtube.com/@crispimelts" },
  { icon: <FaPinterestP />, href: "https://pin.it/3d2bscJ3Q" },
  { icon: <FaTwitter />, href: "https://www.twitter.com/crispimelts" },
  { icon: <SiTiktok />, href: "https://www.tiktok.com/@crispimelts" },
];

export default function Footer() {

  const scrollToSection = (id) => {

    // If not on homepage, redirect to homepage section
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    // If already on homepage, scroll smoothly
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#e0f1f3] via-[#31707f]/20 to-[#ffffff]   pt-14 pb-6 px-6 md:px-12">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/logo.png"
              alt="Crispimelts Logo"
              className="h-12"
            />
            <span className="text-3xl font-Jim text-green-900">
              Crispimelts
            </span>
          </div>

          <p className="text-sm leading-relaxed opacity-90 text-[#246b75] font-semibold">
            Premium custom cakes and signature desserts crafted with passion.
            Making every celebration sweeter.
          </p>
        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-lg font-semibold mb-4 text-green-900">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm text-[#246b75] font-semibold">

            <li
              onClick={() => scrollToSection("home")}
              className="cursor-pointer hover:opacity-70 transition"
            >
              Home
            </li>

            <li
              onClick={() => scrollToSection("cake-collections")}
              className="cursor-pointer hover:opacity-70 transition"
            >
              Custom Cakes
            </li>
                <li
              onClick={() => scrollToSection("about")}
              className="cursor-pointer hover:opacity-70 transition"
            >
              About
            </li>

            <li
              onClick={() => scrollToSection("featured-products")}
              className="cursor-pointer hover:opacity-70 transition"
            >
              Signature Dishes
            </li>

            <li
              onClick={() => scrollToSection("send-us-message")}
              className="cursor-pointer hover:opacity-70 transition"
            >
              Contact
            </li>

            <li>
              <Link
                to="/cake-gallery"
                className="hover:opacity-70 transition"
              >
                Cake Gallery
              </Link>
            </li>

            {/* Legal Pages */}
            <li>
              <Link
                to="/privacy-policy"
                className="hover:opacity-70 transition"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                to="/terms-conditions"
                className="hover:opacity-70 transition"
              >
                Terms & Conditions
              </Link>
            </li>

          </ul>

        </div>

        {/* Contact Section */}
        <div>

          <h3 className="text-lg font-semibold mb-4 text-green-900">
            Contact
          </h3>

          <div className="space-y-2 text-sm text-[#246b75] font-semibold">

            <p>Crispimelts General Trading LLC</p>

            <p>United Arab Emirates</p>

            <a
              href="mailto:info@crispimelts.ae"
              className="block hover:opacity-70 transition"
            >
              info@crispimelts.ae
            </a>

            <a
              href="tel:+971525657667"
              className="block hover:opacity-70 transition"
            >
              +971 52 565 7667
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-lg text-green-900">

            {SOCIAL_LINKS.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                {social.icon}
              </a>
            ))}

          </div>

        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="text-green-900 border-t border-[#134739]/30 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Crispimelts. All rights reserved.
      </div>

    </footer>
  );
}