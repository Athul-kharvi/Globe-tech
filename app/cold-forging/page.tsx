"use client";

import { motion } from "framer-motion";
import DefaultPage from "../components/DefaultPage";
import FeatureHeader from "../components/FeatureHeader";

const cards = [
  {
    title: "350T Hydraulic Press",
    imgSrc: "/cold-forging/350t.jpg",
  },
  {
    title: "400T Hydraulic Press",
    imgSrc: "/cold-forging/400t.jpg",
  },
  {
    title: "650T Hydraulic Press",
    imgSrc: "/cold-forging/650t.jpg",
  },
  {
    title: "400T Mechanical Press",
    imgSrc: "/cold-forging/400t-mechanical.jpg",
  },
];

// cold forging parts 

const forgingParts = [
  { name: "Bag Hook Pin", imgSrc: "/cold-forging/bag-hook.jpg" },
  { name: "Adapter Holder", imgSrc: "/cold-forging/adapter-holder.jpg" },
  { name: "Coupler", imgSrc: "/cold-forging/coupler.jpg" },
  { name: "Driven Gear", imgSrc: "/cold-forging/driven-gear.jpg" },
  { name: "Front Axie Gland Bush", imgSrc: "/cold-forging/front-axle.jpg" },
  { name: "Grenade Body", imgSrc: "/cold-forging/grenade-body.jpg" },
  { name: "Piston Cylinder", imgSrc: "/cold-forging/piston-cylinder.jpg" },
  { name: "Roller Tappet Body", imgSrc: "/cold-forging/roller-tapet-body.jpg" },
  { name: "Single Projectile Bottom", imgSrc: "/cold-forging/single-projectile-bottom.jpg" },
  { name: "Square Block", imgSrc: "/cold-forging/square-block.jpg" },
  { name: "Drive Shaft", imgSrc: "/cold-forging/drive-shaft.jpg" },
];

export default function ColdForgingPage() {
  const text = "Cold Forging";

  return (
    <div className="w-full h-full bg-[#614C4F] text-white font-inter overflow-x-hidden">
      <FeatureHeader />

      {/* Hero Section */}
      <section className="text-center mt-40 px-6 h-full">
        <div className="w-full flex justify-start md:justify-center text-center">
          <h1 className="text-6xl text-center sm:text-7xl md:text-8xl lg:text-9xl font-semibold whitespace-nowrap tracking-tight max-w-[90%] pl-0 md:pl-0 mt-12">
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
        </div>

        <p className="mt-20 text-xl sm:text-2xl max-w-2xl mx-auto  font-ftregolaneue font-normal">
          With over 25 years of expertise in forging, Fortune Indocorp has built
          a reputation for excellence. We collaborate with top technology
          experts to stay at the forefront of innovation.
        </p>
      </section>

      {/* Cold Forging Machinary Section */}
      <section className="mt-20 bg-white text-black py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-ftregolaneue tracking-tight leading-normal text-center">
            Cold Forging Press
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5 my-9">
            {cards.map((card, index) => (
              <div
                key={index}
                className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg 
                     dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform duration-300"
              >
                <a className="block overflow-hidden rounded-t-xl">
                  <img
                    className="w-full h-60 object-cover rounded-t-xl transition-transform duration-300 hover:scale-110"
                    src={card.imgSrc}
                    alt="Card Image"
                  />
                </a>
                <div className="p-5 text-center">
                  <a>
                    <h5 className="mb-3 text-xl  font-normal leading-normal tracking-normal text-gray-900 dark:text-white">
                      {card.title}
                    </h5>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cold Forging Parts Section */}

        <div className="py-10 bg-gray">
      <h2 className="text-5xl font-ftregolaneue font-normla tracking-tight leading-normal text-center text-customBlack mb-8">
        Cold Forging Parts
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-5">
        {forgingParts.map((part, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-4 rounded-xl shadow-lg hover:scale-105 
                       transition-transform duration-300 "
          >
            <img
              className=" object-cover rounded-lg"
              src={part.imgSrc}
              alt={part.name}
            />
            <h3 className="mt-3 text-lg font-medium text-customBlack">
              {part.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <DefaultPage />
      </motion.div>
    </div>
  );
}
