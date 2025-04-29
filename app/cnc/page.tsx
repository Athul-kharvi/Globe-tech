"use client";

import { motion } from "framer-motion";
import DefaultPage from "../components/DefaultPage";
import FeatureHeader from "../components/FeatureHeader";
import { useState } from "react";

const text = "Precision CNC Machining";

const industries = [
  { name: "Automotive", image: "/cnc-image/automotive.webp" },
  { name: "Aerospace", image: "/cnc-image/aerospace.webp" },
  { name: "Medical Devices", image: "/cnc-image/medical.webp" },
  { name: "Hydraullic Division", image: "/cnc-image/hydraullic.webp" },
  { name: "Heavy Engineering", image: "/cnc-image/engineering.webp" },
  { name: "Defense ", image: "/cnc-image/tank-img.webp" },
];

export default function CNCPage() {
  const machineryList = [
    {
      title: "Cnc Turning Machine - 6nos (Ace Super Jobber XL)",
      description:
        "Capacity : Ø10 mm to 250 mm & length 500 mm \n SPM Machine for Keyway\nPlanned to install 3 more CNC Turning Machine before Dec 2025 CNC \nTURNING MACHINE ACE-JOBBER XL : Ø10 mm to 250 mm & length 400 mm - 4 No’s\nCNC TURNING MACHINE MAZZAK : Ø25 mm to 500 mm & length 1600 mm – 1No",
    },
    {
      title: "Sawing machine - 3nos ",
      description:
        "Capacity : Ø10 mm to 80 mm (Circular Saw) – 2 Nos\n  Capacity : Ø10 mm to 250 mm (Band Saw) – 1 No",
    },
    {
      title: "VERTICAL  MACHINING CENTRE(VMC) - BFW-BMV-45 AXIS.",
      description:
        "VERTICAL  MACHINING CENTRE(VMC) AMS-MCV-300 x-300 * Y-450* Z-300 MM WITH DOUBLE PALLET – 1No.\nCYLINDRICAL GRINDING MACHINE - ACE-ECO200E -  ONLY OD GRINDING Ø 75 * 200 long – 2 No’s.",
    },
  ];

  const [hoveredIndustry, setHoveredIndustry] = useState(null);

  return (
    <section className="w-full h-full bg-[rgb(213,205,196)] text-gray-900 font-inter overflow-x-hidden">
      <FeatureHeader />

      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
        <img
          src="../cnc-hero.webp"
          alt="CNC Precision Machining"
          className="absolute inset-0 w-full h-full object-cover brightness-75 scale-110"
        />

        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white px-6"
        >
          <h1 className="text-5xl md:text-8xl font-semibold text-center">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
          <p className="mt-4 text-xl max-w-2xl mx-auto">
            High-quality, accurate, and reliable CNC machining solutions for
            industrial applications.
          </p>
        </motion.div>
      </div>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 mt-12 text-center"
      >
        <p className="text-lg text-gray-800">
          At Fortune Indocorp, we specialize in{" "}
          <strong>high-precision CNC machining</strong>, providing top-notch
          components for various industries. Our cutting-edge technology ensures
          superior <strong>accuracy, efficiency, and durability</strong> in
          every project.
        </p>
      </motion.div>

      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {[
          {
            title: "CNC Milling",
            desc: "Advanced multi-axis milling for complex parts with high precision.",
          },
          {
            title: "CNC Turning",
            desc: "High-speed precision turning for cylindrical components.",
          },
          {
            title: "Prototype Machining",
            desc: "Rapid prototyping to validate designs before full production.",
          },
          {
            title: "Surface Finishing",
            desc: "Anodizing, powder coating, and polishing for premium finishing.",
          },
          {
            title: "Custom CNC Solutions",
            desc: "Tailored machining services to meet your specific needs.",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="p-6 border border-gray-600 rounded-xl text-center bg-[#EBFC41] shadow-lg"
          >
            <h3 className="text-3xl font-normal tracking-normal leading-normal text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-700 mt-2">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Industries Served */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 mt-16 text-center"
      >
        <h2 className="inter text-6xl font-normal tracking-normal leading-normal text-black shadow-xl">
          Industries we are serving
        </h2>
        <div className="relative mt-6 flex flex-wrap justify-center gap-6 text-lg text-gray-700">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndustry(industry)}
              onMouseLeave={() => setHoveredIndustry(null)}
              className="relative cursor-pointer rounded-2xl"
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="w-52 h-36 object-cover rounded-2xl shadow-lg"
              />
              {hoveredIndustry === industry && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-normal tracking-normal leading-normal rounded-lg"
                >
                  {industry.name}
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 mt-16 text-center"
      >
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
          Why Choose Indocorp?
        </h2>
        <ul className="mt-6 text-gray-700 text-lg tracking-wide leading-normal leading-loose">
          <li>✅ Experienced team ensuring quality control</li>
          <li>✅ Fast turnaround and bulk production capability</li>
          <li>✅ Competitive pricing with premium service</li>
        </ul>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-normal tracking-normal leading-normal my-10 text-center"
      >
        Machinery Details
      </motion.h1>

      <div className="flex justify-center items-start gap-10 mt-14 px-4">
        {/* Grid Section */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:max-w-[50rem] md:flex-row">
          {machineryList.map((machine, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-3xl border bg-white select-none hover:shadow hover:shadow-teal-200 p-2"
            >
              <div className="flex h-[400px] flex-col justify-between rounded-2xl p-6">
                <div className="space-y-2">
                  <h3 className="font-ftregolaneue font-medium text-xl text-left">
                    {machine.title}
                  </h3>
                  <div className="w-16 h-1 bg-black my-2 rounded-full"></div>
                  <p className="text-xs text-muted-foreground whitespace-pre-line tracking-normal leading-normal text-left">
                    {machine.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section (Right Side) */}
        <div className="hidden md:flex sm:flex flex-col items-center gap-6 bg-gray-50 py-5 px-8 rounded-xl ">
          <img
            src="/cnc-machine.jpg"
            alt="Pit Type Small"
            className="w-64 h-auto object-contain rounded-2xl"
          />
        </div>
      </div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <DefaultPage />
      </motion.div>
    </section>
  );
}
