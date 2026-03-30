import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FeaturedProducts from "./components/FeaturedProducts";
import CakeCollections from "./components/CakeCollections";
import ProductMenu from "./components/ProductMenu";
import SendUsMessage from "./components/SendUsMessage";
import CakeGallery from "./components/CakeGallery";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
 

export default function App() {
  return (
    <main className="relative">

      <Routes>

        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Navbar />

              <div className="pt-5">
                <section id="home"><Home /></section>
              </div>

              <section id="cake-collections"><CakeCollections /></section>
              <section id="featured-products"><FeaturedProducts /></section>
              <section id="product-menu"><ProductMenu /></section>
              <section id="cake-gallery"><CakeGallery /></section>
              <section id="send-us-message"><SendUsMessage /></section>

              <Footer />
            </>
          }
        />

        {/* Gallery page */}
        <Route
          path="/cake-gallery"
          element={
            <>
              <Navbar />
              <CakeGallery />
              <Footer />
            </>
          }
        />

        {/* Privacy Policy WITHOUT Navbar */}
        <Route
          path="/privacy-policy"
          element={
            <>
              <PrivacyPolicy />
              <Footer />
            </>
          }
        />

        {/* Terms & Conditions WITHOUT Navbar */}
       

      </Routes>

    </main>
  );
}