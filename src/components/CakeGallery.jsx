import React from "react";

const sections = [
  {
    title: "Our Cakes & Treats",
    realItems: [
      { name: "Fruit Cake", image: "/images/hi1.jpeg" },
      { name: "Red Velvet Cake", image: "/images/hi10.png" },
      { name: "Chocolate Cake", image: "/images/hi11.png" },
      { name: "Cappuccino Cake", image: "/images/hi4.jpeg" },
      { name: "Pistachio Cake", image: "/images/hi5.jpeg" },
      { name: "Mango Cake", image: "/images/hi6.jpeg" },
      { name: "Mango Cheesecake Portion", image: "/images/w3.jpeg" },
    ],
    dummyItems: [
      { name: "Sugar Rush", image: "/images/im16.png" },
      { name: "Tasty Delight", image: "/images/im1.jpeg" },
      { name: "Sweet Temptation", image: "/images/im2.jpeg" },
      { name: "Heart-Melting Bliss", image: "/images/im3.jpeg" },
      { name: "Decadent Pleasure", image: "/images/im4.jpeg" },
      { name: "Yummy Surprise", image: "/images/im5.jpeg" },
      { name: "Sugary Magic", image: "/images/im6.jpeg" },
      { name: "Dreamy Indulgence", image: "/images/im7.jpeg" },
      { name: "Heavenly Treat", image: "/images/im8.jpeg" },
      { name: "Sweet Escape", image: "/images/im9.jpeg" },
      { name: "Melting Joy", image: "/images/im10.jpeg" },
      { name: "Divine Craving", image: "/images/im11.jpeg" },
      { name: "Blissful Bite", image: "/images/im12.jpeg" },
      { name: "Delicious Fantasy", image: "/images/im13.jpeg" },
      { name: "Tantalizing Pleasure", image: "/images/im14.jpeg" },
      { name: "Sugar Rush", image: "/images/im15.jpeg" },
      { name: "Sugar Rush", image: "/images/im17.png" },
      { name: "Crispy", image: "/images/im18.png" },
    ],
  },
];

export default function CakeGallery() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e3f2f9] to-[#f7fbfc] mt-30 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-60 xl:pt-30 py-16">
      <h1 className="text-2xl sm:text-2xl md:text-4xl font-[Inter] mb-6 sm:mb-10 text-[#134739] drop-shadow-lg border-b-2 border-[#9dbbd5] w-fit mx-auto tracking-tight">
        Our Gallery
      </h1>
      <p className="text-center text-[#134739] mb-12 max-w-3xl mx-auto text-sm sm:text-base">
        Discover a delightful range of sweets, chocolates, baked goods, and
        savory treats crafted with quality and care. From traditional Arabic
        flavors to modern favorites, every bite is a moment of indulgence.
      </p>

      {sections.map((section, idx) => (
        <div key={idx} className="mb-16">
          {section.title && (
            <h2 className="text-sm sm:text-3xl md:text-xl mb-6 text-[#134739] border-b-2 border-[#9dbbd5] w-fit pb-1">
              {section.title}
            </h2>
          )}

          {/* Real Items */}
          <h3 className="text-[#246b75] font-semibold mb-4 text-center">
            Featured Cakes
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
            {section.realItems.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer overflow-hidden bg-white/30 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition-transform hover:shadow-2xl rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover"
                  loading="lazy"
                />
                <h3 className="text-center text-sm sm:text-sm font-semibold p-3 text-[#246b75]">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Dummy Items */}
          <h3 className="text-[#246b75] font-semibold mb-4 text-center">
            Other Treats
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {section.dummyItems.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer overflow-hidden bg-white/30 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition-transform hover:shadow-2xl rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover"
                  loading="lazy"
                />
                <h3 className="text-center text-sm sm:text-sm font-semibold p-3 text-[#246b75]">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
