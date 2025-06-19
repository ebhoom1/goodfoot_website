import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import goodfootLogo from "../assets/images/goodfootlogo.png";

const Header = () => {
  const navigate=useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Brand Sponsorship", path: "/brand-sponsorship" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms", path: "/terms" },
  ];

  return (
    <header className="w-full bg-black py-4 px-6">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-black via-green-900 to-black rounded-full px-6 py-3 flex items-center justify-between shadow-md relative">

        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={()=>{navigate("/")}}>
          <img src={goodfootLogo} alt="GoodFoot Logo" className="h-12" />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-white text-md font-large">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative pb-1 transition-all duration-300
                ${isActive ? "text-green-400" : ""}
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
                after:bg-green-400 after:transition-all after:duration-300
                hover:after:w-full hover:text-green-300`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Navigation Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black rounded-b-xl md:hidden z-50">
            <nav className="flex flex-col items-center py-4 text-white text-sm font-medium space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `relative pb-1 transition-all duration-300
                    ${isActive ? "text-green-400" : ""}
                    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
                    after:bg-green-400 after:transition-all after:duration-300
                    hover:after:w-full hover:text-green-300`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;
