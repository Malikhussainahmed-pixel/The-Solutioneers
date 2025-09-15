"use client";
import { motion } from "framer-motion";
import { ChevronsLeftRightEllipsis,Workflow,TabletSmartphone ,Figma ,Server,Bot    } from "lucide-react";
export default function ServiceCards() {
  const services = [
    {
      title: "Web Development",
      description:
        "Scalable cloud solutions to optimize your IT infrastructure and reduce costs.",
      gradient: "bg-gradient-to-r from-orange-700 to-orange-400",
      icon: <ChevronsLeftRightEllipsis size={72} />,
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
    <section id="services" className="bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center mb-2 sm:mb-10 mt-54 sm:mt-40"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-8xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
          Services
        </h2>
        <p className="mt-2 text-lg text-black max-w-2xl mx-auto">
          Explore our range of cutting-edge IT solutions designed to boost your
          business.
        </p>
      </motion.div>

      {/* Cards */}
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-12 md:p-10 lg:p-8 mt-0 sm:mt-10 sm:mb-20">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: "easeOut",
            }}
            className=" min-h-80 overflow-hidden bg-white/100 backdrop-blur-xl border border-white/30 
                       rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out hover:scale-105"
          >
            {/* Top section */}
           <div className="text-white mt-15 flex justify-center  ">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-2xl">
             {service.icon}
             </div>
           </div>

            {/* Middle section */}
            <div className="text-black grid gap-1 p-5 text-center mt-2">
              <p className="font-black text-xl">{service.title}</p>
              <p className="text-md ">{service.description}</p>
              
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
