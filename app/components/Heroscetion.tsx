"use client"
import React from 'react'
import { motion } from "framer-motion";

export default function Heroscetion() {
  return (
    <>
    
    <div className='text-center grid gap-6 mt-35 sm:gap-7 sm:p-4 md:mt-40 lg:mt-55 grid-cols-1 '>
     <motion.div
      initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    className="font-black text-6xl sm:text-8xl lg:text-9xl 
               bg-gradient-to-r  from-orange-700 via-orange-400 to-orange-200 
               bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.9)"
  >
    The Solutioneers
  </motion.div>

  {/* <div
    className="font-black sm:text-6xl 
               bg-gradient-to-r from-red-600 via-orange-300 to-cyan-500
               bg-clip-text text-transparent"
  >
    WE Have A Solution To Your Every Problem
  </div> */}
    < motion.div 
    initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6,delay: 0.2 }}
         className=' font-black md:text-lg lg:text-lg max-w-4xl mx-auto bg-gradient-to-r from-orange-700 via-orange-400 to-orange-400  bg-clip-text text-transparent
             drop-shadow-[0_0_8px_rgba(34,211,238,0.9)'>We automate business processes that won't require you handing off paychecks and benefits on a monthly basis, an AI Agent will do that for you. 
     </motion.div>

        <motion.div 
    initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6,delay: 0.4 }} className='text-white font-bold text-sm sm:text-md hover:bg-orange-500 bg-orange-400 transition-colors duration-300 ease-in-out w-35 sm:w-45 m-auto p-3 sm:p-4 rounded-full   shadow-xl'>Let's Book A Call
        </motion.div>
    </div>
    
    </>
  )
}
