// components/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function About () {
  return (
    <section className="py-24 px-6 md:px-15 lg:px-20 xl:px-60 bg-white">

      <div className="border-4 border-[#9dbbd5] rounded-sm p-10">

        {/* Heading */}
        <div className="text-center mb-16 p-6 rounded-md bg-gradient-to-r from-[#9dbbd5]/30 via-[#7fa8c9]/30 to-[#9dbbd5]/30">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-[Inter] text-[#246b75] border-b-2 border-[#9dbbd5] pb-2 inline-block"
          >
            About Crispimelts
          </motion.h2>
        </div>

        {/* Story + Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <img
              src="/images/tres.png"
              alt="Crispimelts Bakery"
              className="shadow-lg w-[320px] md:w-[360px] object-cover rounded-md"
            />
          </motion.div>

          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >

            <div>
              

              <p className="text-gray-600 leading-relaxed text-lg">
                At <span className="font-semibold text-[#246b75]">Crispimelts</span>, 
                we are passionate about creating fresh, flavorful bakery products 
                that bring joy to everyday moments. With a focus on quality ingredients 
                and expert baking, we craft each item to deliver the perfect balance 
                of crispness and softness.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg mt-3">
                From our ovens to your table, every product reflects our commitment 
                to taste, freshness, and consistency. At Crispimelts, we don’t just 
                bake, we create moments to enjoy and remember.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#246b75] mb-2">
                Our Bakery Industry Experience
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
                With over 20–30 years of experience in the bakery industry, 
               <span className="font-semibold text-[#246b75]"> Crispimelts </span> is built on a strong foundation of expertise, innovation, 
                and dedication. Our journey spans large-scale bakery production, 
                product development, and deep market understanding across the region.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg mt-3">
                By combining traditional baking knowledge with modern technology, 
                we consistently deliver products that meet the highest standards 
                of quality, taste, and reliability.
              </p>
            </div>
  
          <a
            href="https://wa.me/971525657667"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#9dbbd5] text-white rounded-sm font-[Inter] text-sm hover:bg-[#134739] transition"
          >
            Order Cake
          </a>
        
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center">

          {/* Passion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 border border-[#9dbbd5]/40 rounded-md hover:shadow-md transition"
          >
            <h4 className="text-xl font-semibold text-[#246b75] mb-2">
              Led by Passion
            </h4>

            <p className="text-gray-600 text-lg leading-relaxed">
              Baking is more than a process at <span className="font-semibold text-[#246b75]"> Crispimelts, </span>it’s our passion. 
              We pour care and dedication into every product to create flavors 
              that bring comfort, joy, and lasting memories.
            </p>
          </motion.div>

          {/* Inspiration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 border border-[#9dbbd5]/40 rounded-md hover:shadow-md transition"
          >
            <h4 className="text-xl font-semibold text-[#246b75] mb-2">
              Led by Inspiration
            </h4>

            <p className="text-gray-600 text-lg leading-relaxed">
              Inspiration drives our creativity. We continuously explore new 
              ideas and flavors to craft bakery products that delight our 
              customers every day.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 border border-[#9dbbd5]/40 rounded-md hover:shadow-md transition"
          >
            <h4 className="text-xl font-semibold text-[#246b75] mb-2">
              Our Vision
            </h4>

            <p className="text-gray-600 text-lg leading-relaxed">
              To become a leading bakery brand recognized for excellence, 
              innovation, and delivering a superior taste experience.
            </p>
          </motion.div>

        </div>

        {/* CTA */}
       

      </div>
    </section>
  );
}