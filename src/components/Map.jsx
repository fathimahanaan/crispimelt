import React from "react";

export default function Map() {
  return (
    <div className="w-full flex justify-center mt-10 mb-5">
      <div className="rounded-md overflow-hidden shadow-lg w-full max-w-6xl">
        <iframe
          title="Crispimelts Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.123456789!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43423456789%3A0xabcdef123456789!2sCrispimelts%2C%20UAE!5e0!3m2!1sen!2sen!4v1698765432100!5m2!1sen!2sen"
          width="100%"
          height="400"
          className="w-full h-64 sm:h-80 md:h-96"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}