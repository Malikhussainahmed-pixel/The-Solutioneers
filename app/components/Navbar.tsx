"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

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
    { label: "Book A Call", id: "book-meeting", isButton: true }, // mark as button
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

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

  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: [0.42, 0, 0.58, 1] },
    }),
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: showNavbar ? 0 : -100, opacity: showNavbar ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative w-full z-50 px-6 py-8 transition-colors duration-300 bg-transparent`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-black text-3xl sm:text-4xl cursor-pointer hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-[#B69F72] to-black bg-clip-text text-transparent"
          onClick={() => scrollToSection("services")}
        >
          Solutioneers
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 font-bold text-lg items-center">
          {navItems.map((item, i) =>
            item.isButton ? (
              <motion.button
                key={i}
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-2 px-3 py-2 rounded-full font-semibold text-md text-white bg-gradient-to-r from-[#B69F72] to-black hover:from-black hover:to-[#B69F72] transition-all duration-300 shadow-lg hover:scale-105"
              >
                {item.label}
                <ArrowRight size={18} />
              </motion.button>
            ) : (
              <motion.div
                key={i}
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer transition-all text-xl duration-300 hover:scale-110 bg-gradient-to-r from-[#B69F72] to-black bg-clip-text text-transparent"
              >
                {item.label}
              </motion.div>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          whileHover={{ rotate: 90 }}
          className="lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} className="text-[#B69F72]" />
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
              <div className="font-black text-3xl bg-gradient-to-r from-[#B69F72] to-black bg-clip-text text-transparent">
                The Solutioneers
              </div>
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.85 }}
                className="text-[#B69F72]"
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </motion.button>
            </div>

            <div className="mt-4 border-b border-gray-300"></div>

            {/* Drawer Links */}
            <div className="flex flex-col gap-6 mt-6 font-bold">
              {navItems.map((item, i) =>
                item.isButton ? (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#B69F72] to-black hover:from-black hover:to-[#B69F72] transition-all duration-300 shadow-md"
                  >
                    {item.label}
                    <ArrowRight size={18} />
                  </motion.button>
                ) : (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, x: 5 }}
                    onClick={() => scrollToSection(item.id)}
                    className="cursor-pointer text-lg font-bold bg-gradient-to-r from-[#B69F72] to-black bg-clip-text text-transparent transition-all duration-250"
                  >
                    {item.label}
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
