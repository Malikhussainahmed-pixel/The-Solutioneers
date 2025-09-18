"use client";
import React from "react";
import { motion } from "framer-motion";
import { Line, Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);

export default function Analyticsdashboard() {
  // Pie Chart Data (Project Distribution)
  const pieData = {
    labels: [
      "Web Development",
      "AI Solutions",
      "Mobile Apps",
      "Cloud Services",
    ],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: ["#B69F72", "#39364A", "#DCC492", "#858391"],
        hoverOffset: 8,
      },
    ],
  };

  // Line Chart Data (Revenue Growth)
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Revenue Growth",
        data: [12000, 19000, 15000, 22000, 28000, 35000, 42000],
        borderColor: "#B69F72",
        backgroundColor: "rgba(182, 159, 114, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Bar Chart Data (Performance Metrics)
  const barData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Projects",
        data: [12, 14, 16, 15],
        backgroundColor: "#B69F72",
      },
      {
        label: "Retention",
        data: [90, 92, 93, 95],
        backgroundColor: "#39364A",
      },
    ],
  };

  return (
    <>
      <section className="relative overflow-hidden py-15 lg:py-32 md:py-24">
        <motion.img
          src="/blob.svg"
          alt="Background Shape"
          className="absolute left-[-100px] top-20 w-120 h-120 -z-10 "
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        />
        <motion.img
          src="/blob.svg"
          alt="Background Shape"
          className="absolute left-[100px] top-150 w-120 h-120 -z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        />
        <motion.img
          src="/blob.svg"
          alt="Background Shape"
          className="absolute right-[-100px] top-100 w-120 h-120 -z-10 "
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        />
        <motion.div
          className="absolute right-[-100px] top-100 w-96 h-96 rounded-full bg-[#b69f721c] -z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        />
        {/* Title + Subtitle */}
        <div className="mx-auto text-center mb-12 px-4 z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-7xl mx-auto text-4xl sm:text-7xl font-bold text-[#39364A]"
          >
            Analytics <span className="text-[#B69F72]">Dashboard</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-4 mx-auto text-[#39364A] max-w-4xl z-10"
          >
            We help startups, businesses, tech companies and agencies scale
            teams, accelerate projects, and bring ideas to life—all without the
            cost and complexity of permanent hiring.
          </motion.p>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-3 grid-cols-1 min-h-40 max-w-7xl mx-auto gap-6 px-6">
          <div className=" bg-white flex flex-col justify-around rounded-2xl shadow-2xl border-t-4 border-t-[#b89756] p-6">
            <div className="flex justify-between">
              <div className="text-xl font-semibold text-[#39364A]">
                Total Revenue
              </div>
              <div>Icon</div>
            </div>
            <div className="font-bold text-2xl lg:text-4xl text-[#39364A]">
              $257,000
            </div>
            <div className="flex justify-between pt-2">
              <div className="text-[#00C950] font-semibold">+15%</div>
              <div className="text-[#39364A] font-semibold">Vs last month</div>
            </div>
          </div>

          <div className="bg-white flex flex-col justify-around rounded-2xl shadow-2xl border-t-4 border-t-[#39364A]  p-6 ">
            <div className="flex justify-between">
              <div className="text-xl font-semibold text-[#39364A]">
                Active Projects
              </div>
              <div>Icon</div>
            </div>
            <div className="font-bold text-2xl lg:text-4xl py-2 text-[#39364A]">
              120
            </div>
            <div className="flex justify-between pt-2">
              <div className="text-[#00C950] font-semibold">+15%</div>
              <div className="text-[#39364A] font-semibold">New this month</div>
            </div>
          </div>

          <div className="bg-white flex flex-col justify-around rounded-2xl shadow-2xl border-t-4 border-t-[#b89756]  p-6">
            <div className="flex justify-between">
              <div className="text-xl font-semibold text-[#39364A]">
                Client Satisfaction
              </div>
              <div>Icon</div>
            </div>
            <div className="font-bold text-2xl lg:text-4xl py-2 text-[#39364A]">
              96%
            </div>
            <div className="flex justify-between pt-2">
              <div className="text-[#00C950] font-semibold">+2%</div>
              <div className="text-[#39364A] font-semibold">vs last month</div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 mt-12">
          {/* Pie Chart */}
          <div className="rounded-2xl shadow-2xl border-t-4 border-t-[#b89756] p-6 bg-white">
            <h3 className="text-xl font-semibold text-[#39364A] mb-4">
              Project Distribution
            </h3>
            <div className="h-64">
              {" "}
              {/* same height */}
              <Pie data={pieData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
          {/* Line Chart */}
          <div className="rounded-2xl shadow-2xl border-t-4 border-t-[#39364A] p-6 bg-white">
            <h3 className="text-xl font-semibold text-[#39364A] mb-4">
              Revenue Growth
            </h3>
            <div className="h-64">
              {" "}
              {/* same height */}
              <Line data={lineData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="max-w-7xl mx-auto mt-6 px-6">
          <div className="rounded-2xl shadow-2xl border-t-4 border-t-[#b89756] p-6 bg-white">
            <h3 className="text-xl font-semibold text-[#39364A] mb-4">
              Performance Metrics
            </h3>

            <Bar data={barData} />
          </div>
        </div>
      </section>
    </>
  );
}
