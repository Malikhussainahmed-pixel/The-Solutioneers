"use client";
import { motion } from "framer-motion";

export default function ServiceCards() {
  return (
    <>
    <motion.div
        className="text-center mb-2 sm:mb-20 mt-54 sm:mt-90"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-black text-6xl sm:text-8xl lg:text-9xl 
               bg-gradient-to-r  from-orange-700 via-orange-400 to-orange-200 
               bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.9)">Services</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Explore our range of cutting-edge IT solutions designed to boost your business.
        </p>
      </motion.div>
    <div className="">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-12 md:p-10 lg:p-8 mt-0 sm:mt-10 sm:mb-20">
        
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}   // start hidden and down
          whileInView={{ opacity: 1, y: 0 }} // animate in when visible
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="min-h-80 overflow-hidden bg-white/20 backdrop-blur-lg border border-white/30 
                     rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out hover:scale-105"
        >
          <div className="top section bg-gradient-to-r from-orange-700 to-orange-400 min-h-40 p-4 flex justify-between">
            <div className="p-6 my-auto rounded-2xl shadow-lg bg-white/20 backdrop-blur-lg ">
              <div className="text-white text-2xl font-bold">{"</>"}</div>
            </div>
            <div><div className="text-gray-400 text-2xl"></div></div>
          </div>
          <div className="mid section wrapper grid grid-cols-1 gap-2 p-5">
            <div className="mid section grid grid-cols-1 gap-2">
              <div><p className="font-black text-xl">Cloud Computing</p></div>
              <div><p className="text-md">Scalable cloud solutions to optimize your IT infrastructure and reduce costs.</p></div>
            </div>
            <div className="button mt-1.5 text-sm text-center text-white bg-amber-500 shadow-lg/20 max-w-25 p-2 rounded-2xl">Learn More</div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="min-h-85 overflow-hidden bg-white/20 backdrop-blur-lg border border-white/30 
                     rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out hover:scale-105"
        >
          <div className="topp section bg-blue-500 min-h-40 "></div>
           <div className="mid section wrapper grid grid-cols-1 gap-2 p-5">
            <div className="mid section grid grid-cols-1 gap-2">
              <div><p className="font-black text-xl">Cloud Computing</p></div>
              <div><p className="text-md">Scalable cloud solutions to optimize your IT infrastructure and reduce costs.</p></div>
            </div>
            <div className="button mt-1.5 text-sm text-center text-white bg-amber-500 shadow-lg/20 max-w-25 p-2 rounded-2xl">Learn More</div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="min-h-85 overflow-hidden bg-white/20 backdrop-blur-lg border border-white/30 
                     rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out hover:scale-105"
        >
          <div className="topp section bg-blue-500 min-h-40 "></div>
           <div className="mid section wrapper grid grid-cols-1 gap-2 p-5">
            <div className="mid section grid grid-cols-1 gap-2">
              <div><p className="font-black text-xl">Cloud Computing</p></div>
              <div><p className="text-md">Scalable cloud solutions to optimize your IT infrastructure and reduce costs.</p></div>
            </div>
            <div className="button mt-1.5 text-sm text-center text-white bg-amber-500 shadow-lg/20 max-w-25 p-2 rounded-2xl">Learn More</div>
          </div>
        </motion.div>




         {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}   // start hidden and down
          whileInView={{ opacity: 1, y: 0 }} // animate in when visible
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6,delay: 0.2, ease: "easeOut" }}
          className="min-h-80 overflow-hidden bg-white/20 backdrop-blur-lg border border-white/30 
                     rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out hover:scale-105"
        >
          <div className="top section bg-gradient-to-r from-orange-700 to-orange-400 min-h-40 p-4 flex justify-between">
            <div className="p-6 my-auto rounded-2xl shadow-lg bg-white/20 backdrop-blur-lg ">
              <div className="text-white text-2xl font-bold">{"</>"}</div>
            </div>
            <div><div className="text-gray-400 text-2xl"></div></div>
          </div>
          <div className="mid section wrapper grid grid-cols-1 gap-2 p-5">
            <div className="mid section grid grid-cols-1 gap-2">
              <div><p className="font-black text-xl">Cloud Computing</p></div>
              <div><p className="text-md">Scalable cloud solutions to optimize your IT infrastructure and reduce costs.</p></div>
            </div>
            <div className="button mt-1.5 text-sm text-center text-white bg-amber-500 shadow-lg/20 max-w-25 p-2 rounded-2xl">Learn More</div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="min-h-85 overflow-hidden bg-white/20 backdrop-blur-lg border border-white/30 
                     rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out hover:scale-105"
        >
          <div className="topp section bg-blue-500 min-h-40 "></div>
           <div className="mid section wrapper grid grid-cols-1 gap-2 p-5">
            <div className="mid section grid grid-cols-1 gap-2">
              <div><p className="font-black text-xl">Cloud Computing</p></div>
              <div><p className="text-md">Scalable cloud solutions to optimize your IT infrastructure and reduce costs.</p></div>
            </div>
            <div className="button mt-1.5 text-sm text-center text-white bg-amber-500 shadow-lg/20 max-w-25 p-2 rounded-2xl">Learn More</div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="min-h-85 overflow-hidden bg-white/20 backdrop-blur-lg border border-white/30 
                     rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out hover:scale-105"
        >
          <div className="topp section bg-blue-500 min-h-40 "></div>
           <div className="mid section wrapper grid grid-cols-1 gap-2 p-5">
            <div className="mid section grid grid-cols-1 gap-2">
              <div><p className="font-black text-xl">Cloud Computing</p></div>
              <div><p className="text-md">Scalable cloud solutions to optimize your IT infrastructure and reduce costs.</p></div>
            </div>
            <div className="button mt-1.5 text-sm text-center text-white bg-amber-500 shadow-lg/20 max-w-25 p-2 rounded-2xl">Learn More</div>
          </div>
        </motion.div>


      </div>
    </div>
    </>
  );
}
