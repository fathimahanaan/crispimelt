// components/FeaturedCakes.jsx
import React from "react";
import { motion } from "framer-motion";

export default function FeaturedProducts() {
  const cakes = [
    { name: "Arabic Fatayers", image: "/images/fatayir.png" },
    { name: "Macarons", image: "/images/macrons.png" },
    { name: "Manakishes", image: "/images/manakish.png" },
    { name: "Sandwiches And Salads", image: "/images/sandwiches.png" },
    { name: "Croissants And Snacks", image: "/images/cros.png" },
    { name: "Arabic Sweets", image: "/images/sweets.png" },
    { name: "Cakes And Pastries", image: "/images/cake2.png" },
    { name: "Brownie", image: "/images/brownie.png" },
  ];

  // Variants for container and cards
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 px-6 md:px-15 lg:px-20 xl:px-60  ">
      <div className="border-4 border-[#9dbbd5] rounded-sm p-10">
        {/* Heading */}
        <div className="text-center mb-16 p-6 rounded-md bg-gradient-to-r from-[#9dbbd5]/30 via-[#7fa8c9]/30 to-[#9dbbd5]/30">
     <motion.h2
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-3xl md:text-4xl font-sans font-semibold tracking-tight text-[#246b75] border-b-2 border-[#9dbbd5] pb-2 inline-block"
>
  Our Signature Dishes
</motion.h2>
        </div>

        {/* Grid of cakes */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cakes.map((cake, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
              }}
              className="bg-white rounded-sm overflow-hidden shadow-sm border-3 border-[#a1bcbf] transition"
            >
              {/* Image */}
              <img
                src={cake.image}
                alt={cake.name}
                className="h-72 w-full object-cover"
              />

              {/* Title */}
              <div className="p-6 text-center">
                <h3 className="text-sm font-semibold text-[#246b75]  ">
                  {cake.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
