"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Variants } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Benefits", id: "benefits" },
    { label: "About Us", id: "about" },
    { label: "Book A Call", id: "book-meeting" },
  ];
 

  // Scroll to section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Animation variants
   const navItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1], // cubic-bezier (easeInOut)
    },
  }),
};

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: showNavbar ? 0 : -100, opacity: showNavbar ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`font-black text-2xl cursor-pointer hover:scale-110 transition-transform duration-300 ${
            isScrolled
              ? "bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-700 bg-clip-text text-transparent"
              : "text-white"
          }`}
          onClick={() => scrollToSection("services")}
        >
          The Solutioneers
        </motion.div>

        {/* Desktop Nav */}
        <div
          className={`hidden md:flex gap-8 font-semibold ${
            isScrolled ? "text-purple-900" : "text-white"
          }`}
        >
          {navItems.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              onClick={() => scrollToSection(item.id)}
              className="relative cursor-pointer transition-all duration-300 hover:scale-110"
            >
              {item.label}
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          whileHover={{ rotate: 90 }}
          className="md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu
            size={28}
            className={isScrolled ? "text-purple-900" : "text-white"}
          />
        </motion.button>
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
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.85 }}
                className="text-gray-500 hover:text-purple-900 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </motion.button>
            </div>

            <div className="mt-4 border-b border-gray-300"></div>

            {/* Drawer Links */}
            <div className="flex flex-col gap-6 mt-6 font-bold">
              {navItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, x: 5 }}
                  onClick={() => scrollToSection(item.id)}
                  className="cursor-pointer text-gray-800 hover:bg-clip-text hover:text-transparent
                             hover:bg-gradient-to-r hover:from-indigo-900 hover:via-purple-900 hover:to-indigo-700 transition-all duration-250"
                >
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
