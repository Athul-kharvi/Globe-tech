'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Loading from './components/Loading'
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DefaultPage from "./components/DefaultPage";
import Carousel from './components/Carousel'
import VisionMission from './components/VisionMission'


const sections = [
  {
    title: "CNC Machining",
    description: "Precision engineering for metal components.",
    image: "/cnc-machining.jpg",
  },
  {
    title: "Heat Treatment",
    description: "Enhancing material properties for durability.",
    image: "/heat-treatment.jpg",
  },
  {
    title: "Cold Forging",
    description: "High-strength metal forming with efficiency.",
    image: "/cold-forging.jpg",
  },
];




export default function Home() {

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }


  const certificates = [
    {
      id: 1,
      title: "IATF Certificate",
      description: "Precision parts with computer-controlled accuracy",
      image: "/image/cer1.jpg",
    },
    {
      id: 2,
      title: "ISO Certificate",
      description: "Enhancing material properties for optimal performance",
      image: "/image/cer2.webp",
    },
  ];

  return (
    <main className="min-h-screen w-screen overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="text-center h-screen relative overflow-hidden flex items-center justify-center w-screen"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"

          className="absolute inset-0 w-screen h-full object-cover z-10"
        >
          <source src="/video/fortune_hero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

        {/* Overlay Content */}
        <div className="container mx-auto px-4 relative z-20 text-white">
          {/* Adjust font size and spacing based on screen size */}
          <h1 className="text-lg sm:text-2xl md:text-5xl font-bold mb-2 sm:mb-4">
            Globe Tech Fortune Industries Pvt Ltd
          </h1>
          <p className="text-sm sm:text-lg md:text-2xl mb-4 sm:mb-8 text-gray-300">
            Specialists in CNC Machining, Heat Treatment, and Cold Forging
          </p>

          {/* Button Styling for Small Screens */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 py-2 sm:py-3 px-6 sm:px-8 bg-transparent border border-white text-white rounded-full text-sm sm:text-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Bottom Blurry Effect */}
        <div className="absolute bottom-0 left-0 w-screen h-16 sm:h-24 bg-gradient-to-t from-black via-black/40 to-transparent backdrop-blur-[2px] z-10"></div>
      </section>






      {/* Technology Section */}
      <section id="certificate" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#EBFC41]">
            Our Certificates
          </h2>

          {/* Certificate Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
            {certificates.map((certificate) => (
              <div key={certificate.id} className="relative flex flex-col items-center text-center">
                {/* Yellow Hover Circle */}
                <div
                  className="relative w-48 h-48 rounded-full bg-[#EBFC41] flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
                  onMouseEnter={() => setSelectedCertificate(certificate)}
                >
                  <span className="text-black font-bold text-lg">View</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mt-4">{certificate.title}</h3>
              </div>
            ))}
          </div>

          {/* Full-Screen Modal with Blur Effect */}
          <AnimatePresence>
            {selectedCertificate && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md z-50"
                onMouseLeave={() => setSelectedCertificate(null)} // Close when mouse leaves
              >
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white p-6 rounded-lg shadow-lg max-w-xl w-screen flex flex-col items-center"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
                  >
                    ✖
                  </button>

                  {/* Certificate Image */}
                  <Image
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    width={400}
                    height={600}
                    className="rounded-lg w-screen max-h-[80vh] object-contain"
                  />


                  {/* Certificate Title */}
                  <h2 className="text-2xl font-bold mt-4">{selectedCertificate.title}</h2>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>




      {/* <div className="min-h-screen flex items-center justify-center bg-gray-800"> */}
      {/* </div> */}


      {/* About Section */}
      <section id="about" className="py-20 bg-black relative">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-20 w-screen"></div>

        <div className="relative w-screen px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-16">

            {/* Video Section */}
            <div className="w-screen md:w-1/2 flex justify-center">
              <div className="relative w-screen h-[350px] md:h-[450px] rounded-lg overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="absolute inset-0 w-screen h-full object-cover z-0 rounded-2xl"
                >
                  <source src="/video/fortune_hero.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>


            <motion.div
              initial={{ opacity: 0, y: 50 }} // Start invisible and move up
              whileInView={{ opacity: 1, y: 0 }} // Animate when in view
              viewport={{ once: true }} // Only animate once
              transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
              className="w-screen md:w-1/2 p-10 h-auto md:h-[450px] rounded-2xl border-4 border-black bg-[#EAFD41] shadow-lg"
            >
              {/* Animated Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }} // Slight movement down
                whileInView={{ opacity: 1, y: 0 }} // Moves up smoothly
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} // Delayed effect
                className="text-4xl font-bold mb-6 text-black"
              >
                About Us
              </motion.h2>

              {/* Animated Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }} // Start lower
                whileInView={{ opacity: 1, y: 0 }} // Move up into place
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }} // Delayed for smooth effect
                viewport={{ once: true }}
                className="text-gray-800 leading-relaxed text-lg font-medium"
              >
                Fortune Group of Industries is a fully equipped group for Cold Forging, CNC Machining, Heat Treatment, and In-House Fabrication.
                It is supplying engineering components for various industries.
                Specialized in the manufacturing of precise Jigs and fixtures, Tools & Dies, Automobile components, components for Machine manufacturers, jigs and fixtures for aerospace components.
                With, "Under One Roof" Concept, Fortune is one of the precise Supplier to its customers by focusing on global supplies. Our strength and focus is on maintaining ZERO Complaints & Excellent in Delivery
              </motion.p>
            </motion.div>



          </div>
        </div>
      </section>


      {/* Brand logos  */}
      <Carousel />


      {/* Vision Missino section  */}
      <VisionMission />





      {/* Service Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#EBFC41]">Featured Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CNC Machining",
                description:
                  "High-precision CNC machining solutions for complex engineering parts, ensuring accuracy, efficiency, and superior surface finish.",
                image: "/cnc-machining.webp",
                link: "/cnc",
              },
              {
                title: "Heat Treatment",
                description:
                  "Advanced heat treatment processes to enhance the mechanical properties of metals, including hardening, tempering, and annealing.",
                image: "/heat-treatment.webp",
                link: "/heat-treatment",
              },
              {
                title: "Cold Forging",
                description:
                  "Innovative cold forging techniques to produce strong, lightweight components with minimal material waste and improved durability.",
                image: "/cold-forging.webp",
                link: "/cold-forging",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-black rounded-xl overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                  {/* Button for navigation */}
                  <Link
                    href={project.link}
                    className="mt-4 inline-block px-6 py-3 bg-[#EBFC41] text-black font-bold rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                  >
                    Learn More
                  </Link>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Leadership Section */}
      <section id="leadership" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#EBFC41]">
            Our Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Ganesh Hegde', 'Sharath Hegde', 'Narayan Hegde'].map((name, index) => (
              <div key={name} className="text-center">
                <div className="mb-4 relative w-40 h-40 mx-auto">
                  <Image
                    src={`/image/leader${index + 1}.jpg`}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                <p className="text-gray-300">
                  {['Managing Director', 'Director', 'Technical Director'][index]}
                </p>
                {index === 0 && (
                  <a
                    href="https://iconsofindianbusiness.com/article/Successful%20entrepreneur%20Ganesh%20Hegde's%20Hard%20work%20brings%20Fortune"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-6 py-3 bg-[#EBFC41] text-black font-bold rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                  >
                    Learn More
                  </a>


                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Careers Section */}
      <section id="careers" className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#EBFC41]">Join Our Team</h2>
          <p className="text-xl text-gray-300 mb-8">We're always looking for talented individuals to join our innovative team.</p>
          <a href="#" className="inline-block py-3 px-8 bg-[#EBFC41] text-black rounded-full text-lg font-semibold hover:bg-white transition-colors duration-300">
            View Opportunies
          </a>

        </div>
      </section>

      {/* Contact Form and Information */}
      <DefaultPage />

      <footer className="bg-background py-8 text-center">
        <p className="text-gray-300">&copy; 2023 CNC Machining Specialists. All rights reserved.</p>
      </footer>
    </main>
  )
}

