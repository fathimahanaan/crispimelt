import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FeaturedProducts from "./components/FeaturedProducts";
import CakeCollections from "./components/CakeCollections";
import ProductMenu from "./components/ProductMenu";
import SendUsMessage from "./components/SendUsMessage";
import CakeGallery from "./components/CakeGallery";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import About from "./components/About";
import FloatingWhatsapp from "./components/FloatingWhatsapp";

import TermsCondition from "./components/TermsCondition";
import Map from "./components/Map";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [hash, pathname]);

  return null;
}

export default function App() {
  return (
    <main className="relative">
      {/* Scroll handler for hash links */}
      <ScrollToHash />

      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Navbar />

              <div className="pt-[65px]">
                <section id="home" className="scroll-mt-32">
                  <Home />
                </section>

                <section id="cake-collections" className="scroll-mt-32">
                  <CakeCollections />
                </section>

                <section id="about" className="scroll-mt-32">
                  <About />
                </section>

                <section id="featured-products" className="scroll-mt-32">
                  <FeaturedProducts />
                </section>

                <section id="product-menu" className="scroll-mt-32">
                  <ProductMenu />
                </section>

                <section id="cake-gallery" className="scroll-mt-32">
                  <CakeGallery />
                </section>

                <section id="send-us-message" className="scroll-mt-32">
                  <SendUsMessage />
                </section>
               <Map/>
              </div>

              <FloatingWhatsapp />
              <Footer />
            </>
          }
        />

        {/* Gallery Page */}
        <Route
          path="/cake-gallery"
          element={
            <>
              <Navbar />
              <CakeGallery />
              <FloatingWhatsapp />
              <Footer />
            </>
          }
        />

        {/* Privacy Policy */}
        <Route
          path="/privacy-policy"
          element={
            <>
              <PrivacyPolicy />
              <Footer />
            </>
          }
        />

        {/* Terms & Conditions */}
        <Route
          path="/terms-conditions"
          element={
            <>
              <TermsCondition />
              <Footer />
            </>
          }
        />
      </Routes>
    </main>
  );
}
