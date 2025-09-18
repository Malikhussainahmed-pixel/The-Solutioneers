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
    
    <div className=" infinit-caraousel w-full  overflow-hidden bg-transparent py-2">
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
