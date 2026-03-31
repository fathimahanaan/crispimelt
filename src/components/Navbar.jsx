import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaTwitter } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const NAV_ITEMS = [
  { name: "Home", id: "home" },
  { name: "Custom Cakes", id: "cake-collections" },
  { name: "About", id: "about" },
  { name: "Signature Dishes", id: "featured-products" },
  { name: "Contact", id: "send-us-message" },
];

const SOCIAL_LINKS = [
  { icon: <FaFacebookF size={16} />, href: "https://www.facebook.com/crispimelts" },
  { icon: <FaInstagram size={16} />, href: "https://www.instagram.com/crispimelts" },
  { icon: <FaYoutube size={16} />, href: "https://www.youtube.com/@crispimelts" },
  { icon: <FaPinterestP size={16} />, href: "https://pin.it/3d2bscJ3Q" },
  { icon: <FaTwitter size={16} />, href: "https://www.twitter.com/crispimelts" },
  { icon: <SiTiktok size={16} />, href: "https://www.tiktok.com/@crispimelts" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

const handleScroll = (id) => {
  if (location.pathname !== "/") {
    window.location.href = `/#${id}`;
    return;
  }

  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${id}`);
  }

  setMenuOpen(false);
};
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      
      {/* Top Social Bar */}
      <div className="bg-[#9dbbd5] text-[#4e8bbf] text-sm py-2 font-fjalla px-6 md:px-12 flex justify-center items-center">
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((social, idx) => (
            <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer">
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 bg-white/80 backdrop-blur-lg">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Crispimelts Logo"
            className="h-20 w-auto md:h-12"
          />
          <span className="text-2xl md:text-xl  font-semibold  text-green-900">
            Crispimelts
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden xl:flex gap-10 text-sm font-semibold text-green-900/90">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.id}
              className="relative cursor-pointer group"
              onClick={() => handleScroll(item.id)}
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#134739] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}

          <li className="relative cursor-pointer group">
            <Link to="/cake-gallery">
              Gallery
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#134739] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden xl:flex items-center gap-6   text-green-900 text-sm font-semibold">
          
          <a
            href="https://www.instagram.com/crispimelts"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            @crispimelts
          </a>

          <a href="tel:+971525657667" className="flex items-center gap-1 hover:underline">
            +971 52 565 7667
          </a>

          <a
            href="https://wa.me/971525657667"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#9dbbd5] text-white rounded-lg hover:bg-[#134739] transition"
          >
            Order Cake
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="xl:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl rounded-b-3xl px-8 pb-10 pt-6 text-[#134739] transition-all duration-300">

          <ul className="flex flex-col gap-7 text-sm font-semibold">

            {NAV_ITEMS.map((item) => (
              <li
                key={item.id}
                className="border-b pb-3 cursor-pointer hover:text-[#9dbbd5] transition"
                onClick={() => handleScroll(item.id)}
              >
                {item.name}
              </li>
            ))}

            <li className="border-b pb-3">
              <Link
                to="/cake-gallery"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#9dbbd5]"
              >
                Cake Gallery
              </Link>
            </li>

          </ul>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4">

            <a
              href="https://wa.me/971525657667"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-[#9dbbd5] text-white rounded-xl font-Jim text-lg hover:bg-[#134739] transition"
            >
              Order Cake
            </a>

            <a
              href="tel:+971525657667"
              className="w-full text-center py-3 border border-[#134739] rounded-xl font-Jim text-lg hover:bg-[#134739] hover:text-white transition"
            >
              Call +971 52 565 7667
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mt-8 text-[#134739] text-lg">
            {SOCIAL_LINKS.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#9dbbd5] transition"
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>
      )}
    </header>
  );
}