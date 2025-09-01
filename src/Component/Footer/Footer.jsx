import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#2c3e50] text-white py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Location */}
            <div>
              <h3 className="text-lg font-bold uppercase mb-3">Location</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>

            {/* Around the web */}
            <div>
              <h3 className="text-lg font-bold uppercase mb-3">
                Around the Web
              </h3>
              <div className="flex">
                <a
                  href="#"
                  className="w-10 h-10 flex ms-5 items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#2c3e50] transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#2c3e50] transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#2c3e50] transition"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#2c3e50] transition"
                >
                  <FaGlobe />
                </a>
              </div>
            </div>

            {/* About Freelancer */}
            <div>
              <h3 className="text-lg font-bold uppercase mb-3">
                About Freelancer
              </h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
