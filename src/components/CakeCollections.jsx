// components/CakeCollections.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CakeCollections() {
  
  const categories = [
 
    { name: "Milk Cakes", image: "/images/coll10.png" },
    { name: "Custom Cakes", image: "/images/coll8.png" },
    { name: "Birthday Cakes", image: "/images/coll1.png" },
    { name: "Custom Cakes", image: "/images/coll11.png" },
    { name: "Special Occasion Cakes", image: "/images/coll12.png" },
     { name: "Kefaya Cakes", image: "/images/coll14.png" },
    { name: "Halloween Cakes", image: "/images/coll3.png" },
 
        { name: "Wedding Cakes", image: "/images/coll2.png" },
    { name: "Special Occasion Cakes", image: "/images/coll5.png" },
    { name: "Cake", image: "/images/coll6.png" },
    { name: "Cakes", image: "/images/coll7.png" },
 
  ];

  // Start from middle
  const [active, setActive] = useState(Math.floor(categories.length / 2));

  const next = () => {
    setActive((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setActive((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  return (
    <section className="py-28 px-6 md:px-16 lg:px-28 bg-gradient-to-br from-[#e0f1f3] via-[#31707f]/20 to-[#ffffff] overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-16">
 <h2 className="text-3xl md:text-4xl font-Jim text-green-900 border-b-2 border-[#9dbbd5] w-fit pb-2 mx-auto">
  Cake Collections
</h2>
  <p className="mt-4 max-w-xl mx-auto text-[#31707f]/90 text-lg md:text-xl">
  Discover our delicious collection of handcrafted cakes perfect for birthdays,
  weddings, anniversaries, and special moments. 
   
</p>
      </div>

      {/* Carousel */}
      <div className="relative flex justify-center items-center h-[420px] perspective-[1200px]">

        {categories.map((cake, index) => {
          const offset = index - active;
          const abs = Math.abs(offset);

          const scale = offset === 0 ? 1 : 0.75;
          const rotateY = offset * -35;
          const x = offset * 260;
          const opacity = abs > 3 ? 0 : 1;
          const zIndex = categories.length - abs;

          return (
            <motion.div
              key={index}
              className="absolute cursor-pointer"
              animate={{
                x,
                scale,
                rotateY,
                opacity,
                zIndex
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              onClick={() => setActive(index)}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="w-[250px] h-[360px] rounded-3xl backdrop-blur-xl bg-white/20 border border-white/30 shadow-xl p-4 flex flex-col items-center">

                <div className="bg-white p-2 rounded-2xl shadow-md w-full h-[75%]">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <h3 className="mt-4 text-center text-[#246b75]   font-semibold text-sm">
                  {cake.name}
                </h3>

              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-12">
        <button
          onClick={prev}
          className="px-6 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-[#246b75] hover:bg-[#246b75] hover:text-white transition-all shadow-lg"
        >
          Prev
        </button>

        <button
          onClick={next}
          className="px-6 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-[#246b75] hover:bg-[#246b75] hover:text-white transition-all shadow-lg"
        >
          Next
        </button>
      </div>

    </section>
  );
}