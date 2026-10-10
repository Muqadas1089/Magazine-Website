
import React from "react";
import {
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f8f6f1] font-bold">

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}
      <div className="max-w-[1400px] mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* =================================================
              BRAND
          ================================================= */}
          <div className="md:col-span-1">

            <Link to="/">
              <img
                src={logo}
                alt="Eklipse Magazine"
                className="w-[220px] h-auto mb-6"
              />
            </Link>

            <p className="text-gray-600 text-sm leading-7 max-w-[300px]">
              Your daily source of beauty, fashion, lifestyle,
              food and inspiration. Discover stories that make
              everyday life more beautiful.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3 mt-7">

              <button className="w-10 h-10 rounded-full border border-[#555] flex items-center justify-center hover:bg-[#c98779] hover:border-[#c98779] transition">
                <FaInstagram />
              </button>

              <button className="w-10 h-10 rounded-full border border-[#555] flex items-center justify-center hover:bg-[#c98779] hover:border-[#c98779] transition">
                <FaPinterestP />
              </button>

              <button className="w-10 h-10 rounded-full border border-[#555] flex items-center justify-center hover:bg-[#c98779] hover:border-[#c98779] transition">
                <FaYoutube />
              </button>

              <button className="w-10 h-10 rounded-full border border-[#555] flex items-center justify-center hover:bg-[#c98779] hover:border-[#c98779] transition">
                <FaTwitter />
              </button>

            </div>

          </div>


          {/* =================================================
              EXPLORE
          ================================================= */}
          <div>

            <h3 className="text-lg  font-serif mb-6">
              Explore
            </h3>

            <div className="w-10 h-[2px] bg-[#c98779] mb-6"></div>

            <div className="flex flex-col gap-4">

              <Link
                to="/"
                className="text-gray-600 hover:text-[#c98779] transition"
              >
                Home
              </Link>

              <Link
                to="/beauty"
                className="text-gray-600 hover:text-[#c98779] transition"
              >
                Beauty
              </Link>

              <Link
                to="/fashion"
                className="text-gray-600 hover:text-[#c98779] transition"
              >
                Fashion
              </Link>

              <Link
                to="/in-out"
                className="text-gray-600 hover:text-[#c98779] transition"
              >
                In & Out
              </Link>

              <Link
                to="/food"
                className="text-gray-600 hover:text-[#c98779] transition"
              >
                Food
              </Link>

              <Link
                to="/lifestyle"
                className="text-gray-600 hover:text-[#c98779] transition"
              >
                Lifestyle
              </Link>

            </div>

          </div>


          {/* =================================================
              QUICK LINKS
          ================================================= */}
          <div>

            <h3 className="text-lg font-serif mb-6">
              Quick Links
            </h3>

            <div className="w-10 h-[2px] bg-[#c98779] mb-6"></div>

            <div className="flex flex-col gap-4">

              <Link
                to="/about"
                className="text-gray-600 hover:text-[#c98779] transition"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="text-gray-600 hover:text-[#c98779] transition"
              >
                Contact
              </Link>

              <Link
                to="/privacy"
                className="text-gray-600 hover:text-[#c98779] transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-gray-600 hover:text-[#c98779] transition"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>


          {/* =================================================
              NEWSLETTER
          ================================================= */}
          <div>

            <h3 className="text-lg font-serif mb-6">
              Stay Inspired
            </h3>

            <div className="w-10 h-[2px] bg-[#c98779] mb-6"></div>

            <p className="text-gray-600 text-sm leading-6 mb-6">
              Get the latest stories, trends and inspiration
              delivered straight to your inbox.
            </p>

            {/* EMAIL INPUT */}
            <div className="flex items-center border border-[#555] rounded-full p-1">

              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent outline-none px-4 py-3 w-full text-sm text-white placeholder:text-[#999]"
              />

              <button className="w-11 h-11 rounded-full bg-[#c98779] flex items-center justify-center hover:bg-[#d99a8b] transition">

                <FaArrowRight className="text-sm" />

              </button>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}
      <div className="border-t border-[#333]">

        <div className="max-w-[1400px] mx-auto px-6 py-5">

          <div className="flex flex-col md:flex-row items-center justify-between gap-3">

            <p className="text-[#999] text-sm">
              © 2026 Eklipse Magazine. All rights reserved.
            </p>

            <p className="text-[#999] text-sm italic">
              Stay Inspired ✦ Live Beautifully
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

