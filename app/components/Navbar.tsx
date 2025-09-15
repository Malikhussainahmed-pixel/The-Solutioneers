"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = ["Services", "Projects", "Clients", "About Us", "Contact Us"];

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      // change background on scroll
      setIsScrolled(currentScrollY > 50);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div
          className={`font-black text-2xl cursor-pointer hover:scale-110 transition-transform duration-300 ${
            isScrolled
              ? "bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-700 bg-clip-text text-transparent"
              : "text-white"
          }`}
        >
          The Solutioneers
        </div>

        {/* Desktop Nav */}
        <div
          className={`hidden md:flex gap-8 font-semibold ${
            isScrolled
              ? "text-purple-900"
              : "text-white"
          }`}
        >
          {navItems.map((item, i) => (
            <div
              key={i}
              className="relative cursor-pointer transition-all duration-300 hover:scale-110"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${
            isScrolled
              ? "bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-700 bg-clip-text text-transparent"
              : "text-white"
          }`}
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Drawer (Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 p-6"
          >
            {/* Drawer Header */}
            <div className="flex justify-between items-center">
              <div className="font-black text-2xl bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-700 text-transparent bg-clip-text">
                The Solutioneers
              </div>
              <button
                className="text-gray-500 hover:text-purple-900 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </button>
            </div>

            {/* Divider */}
            <div className="mt-4 border-b border-gray-300"></div>

            {/* Drawer Links */}
            <div className="flex flex-col gap-6 mt-6 font-bold">
              {navItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="cursor-pointer text-gray-800 hover:bg-clip-text hover:text-transparent
                             hover:bg-gradient-to-r hover:from-indigo-900 hover:via-purple-900 hover:to-indigo-700 transition-all duration-250"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
