import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function  FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/971525657667?text=Hello%20I%20would%20like%20to%20order%20a%20custom%20cake"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-900 text-white p-4 rounded-sm  shadow-lg hover:scale-110 transition duration-300 z-50"
    >
      <FaWhatsapp size={38} />
    </a>
  );
}