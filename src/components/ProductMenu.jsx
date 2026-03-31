import React from "react";
import { Candy, Wheat, Salad } from "lucide-react";

// All categories
const categories = [
  { 
    name: "Healthy Breads, Toasts & Rusks", 
    icon: Wheat, 
    desc: "Crispy golden toasts and rusks perfect for tea and coffee moments." 
  },
  { 
    name: "Chocodates", 
    icon: Candy, 
    desc: "Delicious dates coated with rich premium chocolate." 
  },
  { 
    name: "Chocolate Nuts", 
    icon: Candy, 
    desc: "Premium roasted nuts covered in smooth chocolate." 
  },
 
  { 
    name: "Cookies and Biscuits",  
    icon: Wheat, 
    desc: "Crispy and delicious cookies for any moment." 
  },
];

export default function ProductMenu() {
  return (
    <div className="px-10  pb-10 md:px-15 xl:px-60 ">
      <div
        className="px-7 py-12 min-h-[500px] bg-gradient-to-br from-[#e0f1f3] via-[#31707f]/20 to-[#ffffff] bg-center border-5 border-[#9dbbd5] bg-no-repeat relative"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 "></div>

        {/* Title */}
        <div className="relative z-10 text-center">
 <h2 className="text-xl md:text-3xl font-[Inter]   tracking-tight text-[#134739] border-b-2 border-[#9dbbd5] pb-2 inline-block">
  Explore Our Delicious Treats
</h2>
          <p className="  mt-4 max-w-2xl mx-auto text-green-900">
            Enjoy a variety of breads, chocolates, cookies, nuts, and fresh salads made with care to delight your taste buds.
          </p>
        </div>

        {/* Icon Grid */}
        <div className="relative z-10 flex flex-wrap justify-center gap-12 mt-12">
          {categories.map((cat, index) => {
            const Icon = cat.icon;

            return (
              <div
                key={index}
                className="border-4 border-[#9dbbd5] p-4 max-w-[180px] text-center
                  bg-white shadow-md group cursor-pointer transition duration-300
                  hover:shadow-xl hover:-translate-y-1 rounded-lg"
              >
                {/* Icon circle with blue gradient on hover */}
               <div
  className="w-20 h-20 flex items-center justify-center
  bg-gradient-to-r from-[#246b75] via-[#31707f] to-[#4ca1af]
  border border-gray-200
  group-hover:bg-white
  transition-all duration-300
  mx-auto rounded-full"
>
                  <Icon
                    size={34}
                    className=" text-white group-hover:text-green-900 transition"
                  />
                </div>

                {/* Title */}
                <h4 className="mt-4 text-sm font-semibold text-[#134739] group-hover:text-[#a1bcbf] transition">
                  {cat.name}
                </h4>

                {/* Description */}
                <p className="text-xs text-[#134739]/70 mt-1 group-hover:text-green-900 transition">
                  {cat.desc}
                </p>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}