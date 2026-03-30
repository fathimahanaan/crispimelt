import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaTwitter, FaTumblr } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const CONTACT_IMAGE = "/images/shop.png";

const SOCIAL_LINKS = [
  { icon: <FaFacebookF size={20} />, href: "https://www.facebook.com/crispimelts", label: "Facebook" },
  { icon: <FaInstagram size={20} />, href: "https://www.instagram.com/crispimelts", label: "Instagram" },
  { icon: <FaYoutube size={20} />, href: "https://www.youtube.com/@crispimelts", label: "YouTube" },
  { icon: <FaPinterestP size={20} />, href: "https://pin.it/3d2bscJ3Q", label: "Pinterest" },
  { icon: <FaTwitter size={20} />, href: "https://www.twitter.com/crispimelts", label: "Twitter" },
  { icon: <FaTumblr size={20} />, href: "https://www.tumblr.com/blog/crispimelts", label: "Tumblr" },
  { icon: <SiTiktok size={20} />, href: "https://www.tiktok.com/@crispimelts", label: "TikTok" },
];

export default function SendUsMessage() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const whatsappMessage =
      `Hello, my name is ${name} (${email}).\n\n${message}`;

    const whatsappNumber = "+971525657667";

    const whatsappURL =
      `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

    e.target.reset();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f0f4f5] to-[#ffffff] p-4 sm:p-6 ">
<div className="flex flex-col lg:flex-row  bg-white shadow-2xl overflow-hidden w-full max-w-6xl  lg:border-0">

        {/* LEFT SIDE */}
        <div className="lg:w-1/2 w-full p-6 sm:p-8 lg:p-10 flex flex-col items-center text-center lg:justify-between gap-6 bg-[#fefefe]">

          <div>

            <h2 className="text-3xl sm:text-5xl font-Jim text-[#134739] tracking-wide mb-3">
              Contact
            </h2>

            <p className="text-[#134739]/90 text-xs sm:text-md mb-5">
              Crispimelts General Trading LLC, United Arab Emirates
            </p>

            <img
              src={CONTACT_IMAGE}
              alt="Crispimelts Contact"
              className="w-full max-w-[180px] sm:max-w-xs border-2 border-green-900 shadow-lg mb-5 object-cover mx-auto"
            />

            {/* SOCIAL ICONS */}
            <div className="flex justify-center gap-3 flex-wrap mb-6">
              {SOCIAL_LINKS.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-br from-[#ce959b]/20 to-[#a1bcbf]/20 text-[#134739]  hover:from-[#ce959b] hover:to-[#a1bcbf] hover:text-white shadow-md hover:shadow-lg transition transform hover:scale-110"
                  aria-label={`Visit our ${social.label}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>

          {/* CONTACT LINKS */}
         <div className="w-full max-w-sm grid grid-cols-2 gap-3 text-sm text-gray-700">

  {/* Email */}
  <a
    href="mailto:info@crispimelts.ae"
    className="flex items-center gap-2 p-3 rounded-lg bg-[#f4f8f6] hover:bg-[#e6f1ed] transition text-[#134739] font-semibold"
  >
    <span>📧</span>
    <span className="truncate">Email</span>
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/971525657667"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 p-3 rounded-lg bg-[#f4f8f6] hover:bg-[#e6f1ed] transition text-[#134739] font-semibold"
  >
    <span>💬</span>
    <span>WhatsApp</span>
  </a>

  {/* Phone */}
  <a
    href="tel:+971525657667"
    className="flex items-center gap-2 p-3 rounded-lg bg-[#f4f8f6] hover:bg-[#e6f1ed] transition text-[#134739] font-semibold"
  >
    <span>📞</span>
    <span>Call</span>
  </a>

  {/* Google Maps */}
  <a
    href="https://share.google/bmthdvWosOj88CUxJ"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 p-3 rounded-lg bg-[#f4f8f6] hover:bg-[#e6f1ed] transition text-[#134739] font-semibold"
  >
    <span>📍</span>
    <span>Location</span>
  </a>

</div>

        </div>

        {/* DIVIDER */}
     <div className="bg-gray-300 w-full h-px lg:w-px lg:h-auto"></div>

        {/* RIGHT SIDE FORM */}
        <div className="lg:w-1/2 w-full p-6 sm:p-8 lg:p-10 flex flex-col justify-center items-center bg-[#fefefe]">

          <h2 className="text-3xl sm:text-4xl font-Jim text-[#134739] tracking-wide mb-6 text-center">
            Send Us a Message
          </h2>

          <form
            className="w-full max-w-md flex flex-col gap-4 sm:gap-5"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9dbbd5] transition shadow-sm"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9dbbd5] transition shadow-sm"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9dbbd5] transition shadow-sm"
              required
            />

            <button
              type="submit"
              className="px-6 py-3 bg-[#9dbbd5] text-white hover:bg-[#134739] transition shadow-lg font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}