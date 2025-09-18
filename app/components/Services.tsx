"use client";
import { motion } from "framer-motion";
import { ChevronsLeftRightEllipsis,Workflow,TabletSmartphone ,Figma ,Server,Bot ,Check    } from "lucide-react";
export default function ServiceCards() {
  const services = [
    {
      title: "Front Development",
      description:
        "Scalable cloud solutions to optimize your IT infrastructure and reduce costs.",
      gradient: "bg-gradient-to-r from-orange-700 to-orange-400",
      icon: <ChevronsLeftRightEllipsis size={28} />,
    },
    {
      title: "AI & Automation",
      description:
        "Automate workflows and integrate AI agents to save time and reduce human error.",
      gradient: "bg-blue-500",
      icon: <Workflow size={72}/>,
    },
    {
      title: "Mobile Apps",
      description:
        "Protect your business with modern security strategies and risk management.",
      gradient: "bg-gradient-to-r from-purple-700 to-indigo-500",
      icon:  <TabletSmartphone size={72}/>,
    },
    {
      title: "Web Designs",
      description:
        "High-performing, scalable web applications tailored to your business needs.",
      gradient: "bg-gradient-to-r from-teal-500 to-green-400",
      icon: <Figma size={72}/>,
    },
    {
      title: "Dev Ops",
      description:
        "Build intuitive and powerful mobile apps for iOS and Android.",
      gradient: "bg-pink-500",
      icon:  <Server size={72}/>,
    },
    {
      title: "Amazon Virtual Assistant",
      description:
        "Leverage data insights to make informed, smarter business decisions.",
      gradient: "bg-gradient-to-r from-yellow-500 to-orange-400",
      icon: <Bot size={72}/>,
    },
  ];

  return (
    <section id="services" className="services-section   relative overflow-hidden py-10 lg:py-32 md:py-24">
       {/* Right Circle */}
            <motion.img
  src="/blob.svg"
  alt="Background Shape"
  className="absolute left-[-100px] top-20 w-120 h-120 "
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
/>
  <motion.img
  src="/blob.svg"
  alt="Background Shape"
  className="absolute left-[100px] top-150 w-120 h-120 "
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
/>
     <motion.img
  src="/blob.svg"
  alt="Background Shape"
  className="absolute right-[-100px] top-100 w-120 h-120 "
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
/>
             {/* Right Circle */}
            <motion.div
              className="absolute right-[-100px] top-100 w-96 h-96 rounded-full bg-[#b69f721c]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            /> 
            
      {/* Header */}
      <motion.div
        className="text-center mb-8 "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl sm:text-7xl font-bold text-[#39364A]">
          Our <span className="text-[#B69F72]">Services</span>
        </h2>
        <p className="mt-4 text-md sm:text-lg text-[#39364A] max-w-2xl mx-auto px-4">
          Explore our range of cutting-edge IT solutions designed to boost your
          business.
        </p>
      </motion.div>

      {/* Cards */}
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl px-6 md:px-10 mx-auto ">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.2,
              delay: i * 0.1,
              ease: "easeIn",
            }}
            className=" p-5 min-h-80 overflow-hidden bg-white/100 backdrop-blur-xl border border-white/30 
                       rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out hover:scale-105"
          >
            
           <div className="flex  items-center ">
            <div className="icon mr-4 bg-[#b69f7231] text-[#b4975ee5] p-2.5 rounded-md"><ChevronsLeftRightEllipsis size={35} /></div>
            <div className="heading text-xl font-semibold text-[#39364A]">Front Development</div>
           </div>
           
           <div className="tracking-wide max-w-sm text-left mt-4"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero natus, sequi nam corrupti nemo debitis eos laboriosa</div>
           <div>
            <ul className="list-inside flex flex-col gap-2 pt-6">
              <li className="max-w-xs">
                 <Check size={20}  className="inline mr-2 text-[#B69F72]" />sdfsddddddddddddddfs
              </li>
              <li className="max-w-xs">
                 <Check size={20}  className="inline mr-2 text-[#B69F72]" />sdfsddddddddddddddfs
              </li>
              <li className="max-w-xs">
                 <Check size={20}  className="inline mr-2 text-[#B69F72]" />sdfsddddddddddddddfs
              </li>
            </ul>
           </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
