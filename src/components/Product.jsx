import React from "react";
import { Candy, Wheat, Salad } from "lucide-react";
 

const categories = [
    {
    name: "Sandwiches",
    image: "/images/sandwiches.png",
    desc: "Fresh gourmet sandwiches made to satisfy every craving.",
  },
  {
    name: "Arabic Sweets",
    image: "/images/sweets.png",
    desc: "Traditional Middle Eastern desserts crafted with pistachio, honey, and fine pastry.",
  },

  {
    name: "Premium Chocolates",
    image: "/images/cho.png",
    desc: "Luxury handcrafted chocolates made with the finest cocoa.",
  },

  {
    name: "Cakes & Pastries",
    image: "/images/cake2.png",
    desc: "Freshly baked cakes and delicate pastries for every celebration.",
  },

  {
    name: "Macaroons & Brownies",
    image: "/images/macrons.png",
    desc: "Soft French macaroons and rich chocolate brownies.",
  },
  {
    name: "Croissants & Snacks",
    image: "/images/cros.png",
    desc: "Flaky croissants and savory snacks baked daily.",
  },
  {
    name: "Arabic Fatayers",
    image: "/images/fatayir1.png",
    desc: "Traditional Arabic pastries filled with cheese, spinach, and meats.",
  },
  {
    name: "Manakishes",
    image: "/images/manakish.png",
    desc: "Authentic Levantine flatbreads topped with zaatar and cheese.",
  },
  

 
];

export default function Product() {
  const imageCategories = categories.filter((c) => c.image);
  const iconCategories = categories.filter((c) => c.icon && !c.image);

  return (
   <div className="  py-20 px-20 md:px-40">
    
  <div className="border-4 border-[#d4af37] p-4">
    <div className="bg-gradient-to-b from-[#fafafa] to-[#f3efe7] px-8 md:px-16 py-16 md:py-24">
         <div className="absolute inset-0 flex justify-center">
        <img
          src="/images/cake8.jpeg"
          alt="background"
          className="w-4/5 h-full object-cover"
        />
      </div>
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-Jim text-[#134739]">
          Our Signature Categories
        </h2>
        <p className="text-[#7f4248]/60 mt-4 max-w-2xl mx-auto">
          Discover our carefully curated selection of artisan bakery delights, premium chocolates, traditional Arabic sweets, and freshly baked breads crafted with passion and heritage.
        </p>
      </div>

      {/* Image Categories */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
        {imageCategories.map((cat, index) => (
          <div
            key={index}
            className="border-2 border-[#d4af37] p-4 bg-white shadow-md group cursor-pointer
              transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative h-52 overflow-hidden rounded-md">
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover
                  group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>
            </div>
            <div className="mt-4">
              <h3 className="text-md font-semibold text-[#134739]">{cat.name}</h3>
              <p className="text-sm text-[#134739]/70 mt-1">{cat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Icon Categories */}
      <div className="flex flex-wrap justify-center gap-8">
        {iconCategories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <div
              key={index}
              className="border-2 border-[#d4af37] p-6 max-w-[180px] text-center
                bg-white shadow-sm group cursor-pointer transition duration-300 hover:shadow-xl"
            >
              <div className="w-12 h-12 flex items-center justify-center
                bg-white border border-gray-200 group-hover:bg-[#d4af37] transition mx-auto rounded-full"
              >
                <Icon size={34} className="text-[#134739] group-hover:text-white transition" />
              </div>
              <h4 className="mt-4 text-sm font-semibold text-[#134739]">{cat.name}</h4>
              <p className="text-xs text-[#134739]/70 mt-1">{cat.desc}</p>
            </div>
          );
        })}
      </div>

 
    </div>
  </div>
</div>
  );
}
