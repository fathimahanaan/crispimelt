// components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";

<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center"> </div>

export default function Home() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 px-6 sm:px-12 md:px-16 lg:px-24 pt-[80px] ">

      {/* Main Hero container */}

      <div className="relative w-full max-w-6xl h-[80vh]  border-4 border-[#9dbbd5] shadow-2xl overflow-hidden   ">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/coll10.png')",
          }}
        ></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center text-center px-8 py-16 h-full justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-Jim mb-6 text-white leading-tight">
            Luxury <span className="text-[#9dbbd5]">Custom Cakes</span>
          </h1>

          <p className="text-white text-base sm:text-lg md:text-xl mb-10 max-w-3xl">
            Beautiful handcrafted cakes made fresh daily for birthdays, weddings, and unforgettable celebrations.
          </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center">

  {/* WhatsApp Order */}
  <a
    href="https://wa.me/971525657667"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-4 w-full sm:w-auto bg-[#9dbbd5] font-Jim text-white rounded-lg hover:bg-[#0f352b] transition text-center"
  >
    Order Custom Cake
  </a>

  {/* Gallery Page */}
  <Link
    to="/cake-gallery"
    className="px-8 py-4 w-full sm:w-auto font-Jim border border-white text-white rounded-lg hover:bg-white hover:text-black transition text-center"
  >
    View Gallery
  </Link>

</div>
        </div>
      </div>
    </section>
  );
}