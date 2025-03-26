'use client'

import { motion } from 'framer-motion'
import DefaultPage from "../components/DefaultPage"
import FeatureHeader from "../components/FeatureHeader"

export default function ColdForgingPage() {
  const text = "Cold Forging";

  return (
    <div className="w-full h-full bg-[#614C4F] text-white font-inter overflow-x-hidden">
      <FeatureHeader/>

      {/* Hero Section */}
      <section className="text-center mt-40 px-6">
      <div className="w-full flex justify-start md:justify-center overflow-hidden">
  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold whitespace-nowrap tracking-tight max-w-[90%] pl-0 md:pl-0">
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




        <p className="mt-10 text-lg sm:text-xl max-w-2xl mx-auto font-normal">
          With over 25 years of expertise in forging, Fortune Indocorp has built a reputation for excellence. 
          We collaborate with top technology experts to stay at the forefront of innovation. 
        </p>
      </section>

      {/* Capabilities Section */}
      <section className="mt-20 bg-white text-black py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Capabilities</h2>
          {/* <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Hot and Cold Aluminum Forging", details: "600-4000T" },
              { title: "Complex Geometric Shapes", details: "Precision engineering for intricate designs" },
              { title: "Class “A” Surfaces", details: "Superior finish and quality assurance" },
              { title: "T6 Heat Treatment", details: "Enhanced material properties and durability" },
              { title: "Shot Blasting", details: "Smooth surface finishing for industrial applications" },
              { title: "In-Line Dye Penetrant", details: "Advanced defect detection techniques" },
              { title: "Hot and Cold Steel Forging", details: "600-6000T capacity for robust applications" },
              { title: "Lightweight Solutions", details: "Optimized material usage for efficiency" }
            ].map((capability, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold">{capability.title}</h3>
                <p className="mt-2 text-gray-700">{capability.details}</p>
              </motion.div>
            ))}
          </div> */}
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
