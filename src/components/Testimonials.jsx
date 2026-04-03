// components/Testimonials.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID;

const CACHE_KEY = "google_reviews";
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour
const GOOGLE_MAPS_URL = `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`;

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(null); // Track which review is expanded

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    const now = Date.now();

    if (cached) {
      const { timestamp, data } = JSON.parse(cached);
      if (now - timestamp < CACHE_DURATION) {
        setReviews(data);
        setLoading(false);
        return;
      }
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    window.initMap = () => {
      const map = new window.google.maps.Map(document.createElement("div"));
      const service = new window.google.maps.places.PlacesService(map);

      service.getDetails(
        { placeId: PLACE_ID, fields: ["name", "rating", "reviews"] },
        (place, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            const fetchedReviews = place.reviews || [];
            setReviews(fetchedReviews);
            localStorage.setItem(
              CACHE_KEY,
              JSON.stringify({ timestamp: now, data: fetchedReviews })
            );
          } else {
            console.error("Failed to fetch reviews", status);
          }
          setLoading(false);
        }
      );
    };

    return () => {
      document.body.removeChild(script);
      delete window.initMap;
    };
  }, []);

  const truncateText = (text, length = 120) =>
    text.length > length ? text.slice(0, length) + "..." : text;

  const handleExpand = (index) => setExpandedIndex(expandedIndex === index ? null : index);

  return (
    <section className="py-24 px-6 md:px-20 xl:px-60 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold font-[Inter] text-[#246b75] border-b-2 border-[#9dbbd5] inline-block pb-2"
        >
          What Our Customers Say
        </motion.h2>
      </div>

      {loading && <p className="text-center text-gray-500">Loading reviews...</p>}
      {!loading && reviews.length === 0 && (
        <p className="text-center text-gray-500">No reviews found.</p>
      )}

      <motion.div
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {reviews.map((review, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
              className="bg-white rounded-md p-6 shadow-lg border border-gray-200 transition cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <p className="text-yellow-500 font-semibold mb-3">
                  {"⭐".repeat(review.rating)}
                </p>

                {/* Review Text */}
                <p className="text-gray-700 mb-4 italic">
                  {isExpanded ? review.text : truncateText(review.text)}
                </p>
              </div>

              <div className="flex justify-between items-center">
                {/* Author */}
                <h3 className="text-[#246b75] font-semibold">
                  - {review.author_name}
                </h3>

                {/* Read More / Google Link */}
                {review.text.length > 120 && (
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#246b75] hover:underline ml-2"
                  >
                    Read More
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* See All Reviews Button */}
      {!loading && reviews.length > 0 && (
        <div className="text-center mt-12">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-[#246b75] font-semibold  hover:text-amber-300 transition"
          >
            See All Reviews..
          </a>
        </div>
      )}
    </section>
  );
}