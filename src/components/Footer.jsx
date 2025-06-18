import React from "react";
import playStore from "../assets/images/playstore.png";
import appStore from "../assets/images/appstore.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerColor = "#15803d"; // Shared wave and footer color

  return (
    <div className="relative">
      {/* WAVE SHAPE ABOVE FOOTER */}
      <div className="w-full overflow-hidden leading-none rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[100px]"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,
              158,28,70.36-5.37,136.33-33.31,
              206.8-37.5C438.64,32.43,512.34,53.67,
              583,72.05c69.27,18,138.3,24.88,
              209.4,13.08,36.15-6,69.85-17.84,
              104.45-29.34C989.49,25,1113-14.29,
              1200,52.47V0Z"
            opacity=".25"
            fill={footerColor}
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,
              47.69,72.05,99.41,111.27,165,111,
              224.58,91.58c31.15-10.15,60.09-26.07,
              89.67-39.8,40.92-19,84.73-46,
              130.83-49.67,36.26-2.85,70.9,
              9.42,98.6,31.56,31.77,25.39,62.32,
              62,103.63,73,40.44,10.79,81.35-6.69,
              119.13-24.28s75.16-39,116.92-43.05,
              59.73-5.85,113.28,22.88,
              168.9,38.84,30.2,8.66,
              59,6.17,87.09-7.5,22.43-10.89,
              48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill={footerColor}
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,
              475.83,42.57c43-7.64,84.23-20.12,
              127.61-26.46,59-8.63,112.48,12.24,
              165.56,35.4C827.93,77.22,886,95.24,
              951.2,90c86.53-7,172.46-45.71,
              248.8-84.81V0Z"
            fill={footerColor}
          />
        </svg>
      </div>

      {/* FOOTER BODY */}
      <footer className="bg-[#15803d] text-white pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
  
  {/* Quick Links */}
  <div>
    <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
    <ul className="space-y-2 text-gray-300">
      <li><Link to="/" className="hover:text-white">Home</Link></li>
      <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
      <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
      <li><Link to="/brand-sponsorship" className="hover:text-white">Brand Sponsorship</Link></li>
      <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
    </ul>
  </div>

  {/* Description Centered */}
  <div className="max-w-md text-center md:text-left text-gray-300">
    <h2 className="text-xl font-semibold mb-4">About GoodFoot</h2>
    <p className="text-sm leading-relaxed">
      GoodFoot is your companion in climate action — enabling individuals, communities, and organizations
      to track, challenge, and grow greener together. From eco-challenges to impact tracking, we simplify sustainability.
    </p>
  </div>

  {/* App Download Buttons */}
  <div>
    <h2 className="text-xl font-semibold mb-4">Get the App</h2>
    <div className="flex gap-4 items-center">
      <img
        src={playStore}
        alt="Google Play"
        className="h-12 hover:scale-105 transition-transform duration-200 cursor-pointer"
      />
      <img
        src={appStore}
        alt="App Store"
        className="h-12 hover:scale-105 transition-transform duration-200 cursor-pointer"
      />
    </div>
  </div>

</div>


        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 mt-12">
          © {new Date().getFullYear()} GoodFoot Sustainability Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;


