"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Services", "Projects", "Clients", "About Us", "Contact Us"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent py-6 px-6">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="font-black text-2xl text-white cursor-pointer hover:scale-110 transition-transform duration-300">
          The Solutioneers
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-white font-semibold">
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
          className="md:hidden text-white"
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
              <div className="font-black  text-2xl bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-transparent bg-clip-text">
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
    </nav>
  );
}
