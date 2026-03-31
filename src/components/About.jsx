// components/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function About () {
  return (
    <section className="py-24 px-6  md:px-15 lg:px-20 xl:px-60 bg-white">

      <div className="border-4 border-[#9dbbd5] rounded-sm p-10 ">

        {/* Heading */}
        <div className="text-center mb-16 p-6 rounded-md bg-gradient-to-r from-[#9dbbd5]/30 via-[#7fa8c9]/30 to-[#9dbbd5]/30">
<motion.h2
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-3xl md:text-4xl font-sans font-semibold tracking-tight text-[#246b75] border-b-2 border-[#9dbbd5] pb-2 inline-block"
>
  About Crispimelts
</motion.h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/images/im12.jpeg"
              alt="Crispimelts Bakery"
              className="  shadow-lg w-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-gray-600 leading-relaxed text-lg">
              At <span className="font-semibold text-[#246b75]">Crispimelts</span>, 
              we believe every bite should be a delightful experience. 
              Our bakery is dedicated to crafting fresh, delicious treats 
              inspired by traditional recipes and modern flavors.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              From handcrafted pastries and buttery croissants to flavorful 
              Arabic sweets, macarons, and signature dishes, every item is 
              prepared with high-quality ingredients and a passion for baking.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Whether you're celebrating a special moment or simply craving 
              something sweet, <span className="font-semibold text-[#246b75]">Crispimelts </span> 
              brings warmth, flavor, and creativity to every creation.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="https://wa.me/971525657667"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#9dbbd5] text-white rounded-lg font-Jim text-lg hover:bg-[#134739] transition"
              >
                Order Your Cake
              </a>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}