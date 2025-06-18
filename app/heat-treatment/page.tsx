"use client";

import React from "react";
import { motion } from "framer-motion";
import DefaultPage from "../components/DefaultPage";
import FeatureHeader from "../components/FeatureHeader";

const HeatTreatment = () => {
  const machineryList = [
    {
      title: "Sealed Quench Furnace - 4nos",
      description:
        "Tempering Furnaces of 650Kgs/batch capacity- 4Nos : 650 Width X 610 HeightX1250 length Make : Elegant Furnaces",
    },
    {
      title: "Quench oil tanks - 2nos",
      description: "Capacity 8000ltrs \nCapacity 8000ltrs",
    },
    {
      title: "Pit type gas carburizing furnaces - 3nos",
      description:
        "Dia 680mm X 1700 mm Length : 1no \n Dia 680mm X 1400 mm Length : 1no \nDia 600mm X 1000 mm Length : 1no",
    },
    {
      title: "Pit type Tempering Furnaces - 2nos",
      description:
        "Dia 680mm X 1800 mm Length : 1no \n Dia 600mm X 1000 mm Length : 1no",
    },
    {
      title: "Pit type furnace - 2no",
      description:
        "Capacity : 2.5 Ton/day. \nPlanned to install 1 more furnace of 2Ton capacity before Dec 2024.",
    },
    {
      title: "Critical Measuring Instruments",
      description:
        "Contour Tracer Make – Carl Zeiss & Model 1600G Contura.\nProfile Projector Make – Dynascan \nRockwell Hardness Tester\nEddy Current Tester - Vibrant",
    },
    {
      title: "Alkali washing machine",
      description: "1nos",
    },
  ];
  return (
    <div className="w-full h-full bg-orange-400 text-black font-inter overflow-x-hidden">
      <FeatureHeader />

      {/* Hero Section */}
      <section className="relative text-center pt-32 pb-12 px-4 sm:pt-40 sm:pb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-semibold"
        >
          Heat Treatment Solutions
        </motion.h1>
        <p className="font-ftregolaneue fmt-2 text-slate-950 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-normal tracking-wide leading-normal">
          Enhancing material properties with precision heat treatment processes.
        </p>
      </section>

      {/* Process Section */}
      <section className="py-5 px-4 sm:py-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-5xl md:text-6xl font-normal tracking-normal leading-normal"
        >
          Our Process
        </motion.h2>
        <p className="font-ftregolaneue mt-2 text-black-800 max-w-xl mx-auto text-base sm:text-lg md:text-xl font-normal tracking-wide leading-normal">
          Using advanced techniques like annealing, hardening, and tempering, we
          ensure optimal material properties.
        </p>

        {/* Animated Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-6">
          {[
            {
              title: "Annealing",
              desc: "Softens metal for machining & forming.",
              img: "../annealing.webp",
            },
            {
              title: "Hardening",
              desc: "Increases material strength & durability.",
              img: "../hardening.webp",
            },
            {
              title: "Tempering",
              desc: "Balances hardness & toughness.",
              img: "../tempering.webp",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 h-72 sm:h-80 md:h-96"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white rounded-lg p-3 shadow-md">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base mt-1">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl  font-normal tracking-normal leading-normal my-10"
        >
          Heat Treatment Facility
        </motion.h1>

        <ul className="font-ftregolaneue list-disc list-inside space-y-2 text-black text-lg bg-slate-300 rounded-3xl min-w-[300px] px-20 py-10 ">
          <li>Carburizing & Hardening (case depth 0.2 to 4.0mm)</li>
          <li>Carburizing & Annealing (case depth 0.2 to 4.0mm)</li>
          <li>Through Hardening</li>
          <li>Carbo Nitriding</li>
          <li>Normalizing</li>
          <li>Annealing</li>
          <li>Stress Relieving</li>
          <li>Stabilizing</li>
        </ul>
        <div className="font-ftregolaneue mt-4 p-3 bg-blue-200 text-blue-800 rounded-lg font-semibold">
          SCADA Controlled Facility: Software to Maintain the Above Operations
        </div>

        {/* Machinery Details Section */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl  font-normal tracking-normal leading-normal my-10"
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
                <div className="relative flex h-[260px] flex-col justify-between rounded-2xl p-6 overflow-hidden about-card">
                  {/* Animated Blob and Frosted Background */}
                  <div className="about-card-blob"></div>
                  <div className="about-card-bg"></div>

                  {/* Your Content */}
                  <div className="relative z-10 space-y-2">
                    <h3 className="font-ftregolaneue font-medium text-2xl text-left uppercase text-black">
                      {machine.title}
                    </h3>
                    <div className="w-16 h-1 bg-orange-500 mb-4 rounded-full"></div>

                    <p className="text-xs text-muted-foreground whitespace-pre-line tracking-normal leading-normal text-left text-black">
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
              src="/pit-type1.jpg"
              alt="Pit Type Small"
              className="w-64 h-auto object-contain rounded-2xl"
            />
            <img
              src="/pit-type.jpg"
              alt="Pit Type Large"
              className="w-64 h-auto object-contain mt-5 rounded-2xl "
            />
          </div>
        </div>
      </section>

      <DefaultPage />
    </div>
  );
};

export default HeatTreatment;
