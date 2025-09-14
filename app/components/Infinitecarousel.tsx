"use client";
import React from "react";
import { motion } from "framer-motion";

const images = [
  "/images/react.png",
  "/images/nextjs.png",
  "/images/node.png",
  "/images/python.png",
  "/images/docker.png",
   "/images/googlecloud.png",
  "/images/aws.png",
  "/images/node.png",
  "/images/python.png",
  "/images/docker.png",
   "/images/react.png",
  "/images/nextjs.png",
  "/images/node.png",
  "/images/python.png",
  "/images/docker.png"
];

export default function InfiniteCarousel() {
  // Duplicate the images array for seamless scroll
  const allImages = [...images, ...images];

  return (
    <>
    <motion.div
        className="text-center mb-2 sm:mb-10 mt-20 sm:mt-50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-black  text-6xl sm:text-8xl lg:text-9xl 
               bg-gradient-to-r  from-orange-700 via-orange-400 to-orange-200 
               bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.9)">Frameworks</h2>
        
      </motion.div>
    <div className="w-full  overflow-hidden bg-transparent py-8">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15,
        }}
      >
        {allImages.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-15 h-15 sm:w-30 sm:h-20 mx-2 flex items-center justify-center"
          >
            <img src={src} alt="tool" className="object-contain h-full w-full" />
          </div>
        ))}
      </motion.div>
    </div>
    </>
  );
}
