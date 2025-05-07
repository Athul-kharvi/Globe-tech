"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DefaultPage from "./components/DefaultPage";
import Carousel from "./components/Carousel";
import VisionMission from "./components/VisionMission";
import EmployeeCount from "./components/EmployeeCount";



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
    <main className="min-h-screen w-screen overflow-hidden">
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
            Fortune Group of Industries Pvt Ltd
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
        <div className="absolute bottom-0 left-0 w-screen h-10 sm:h-28 bg-gradient-to-b from-black/10 via-black/40 to-white backdrop-blur-[10px] z-10"></div>
      </section>



    

      {/* Service Section */}
      <section id="services" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-customBlack">
            Fortune Group of Industries
          </h2>
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
                image: "/mini-hero.webp",
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
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <div className="w-16 h-1 bg-orange-500 mb-4 rounded-full"></div>

                  <p className="text-gray-400">{project.description}</p>
                  {/* Button for navigation */}
                  <Link
                    href={project.link}
                    className="mt-4 inline-block px-6 py-3 bg-orange-500 text-black font-bold rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* about us  */}

      <section id="about" className="py-20 bg-white relative">
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
              className="w-screen md:w-1/2 p-10 h-auto md:h-[450px] rounded-2xl border-4 border-white bg-slate-100 shadow-lg"
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
                Fortune Group of Industries is a fully equipped group for Cold
                Forging, CNC Machining, Heat Treatment, and In-House
                Fabrication. It is supplying engineering components for various
                industries. Specialized in the manufacturing of precise Jigs and
                fixtures, Tools & Dies, Automobile components, components for
                Machine manufacturers, jigs and fixtures for aerospace
                components. With, "Under One Roof" Concept, Fortune is one of
                the precise Supplier to its customers by focusing on global
                supplies. Our strength and focus is on maintaining ZERO
                Complaints & Excellent in Delivery
              </motion.p>
              <a
                href="/aboutus"
                rel="noopener noreferrer"
                className="md:ml-48 md:bg-orange-500 md:text-customBlack ml-20  inline-block px-6 py-3 mt-10 bg-customBlack text-orange-500 font-bold rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </section>

       {/* Leadership Section */}
       <section id="leadership" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-inter font-semibold leading-normal tracking-normal mb-12 text-center text-orange-500">
            Our Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Ganesh Hegde", "Sharath Hegde", "Narayan Hegde"].map(
              (name, index) => (
                <div key={name} className="text-center">
                  <div className="mb-4 relative w-40 h-40 mx-auto">
                    <div className="absolute inset-0 rounded-full border-4 border-orange-400 z-50"  />
                    <Image
                      src={`/image/leader${index + 1}.jpg`}
                      alt={name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full z-10"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold mb-2 text-customBlack">
                    {name}
                  </h3>
                  <p className="text-customBlack">
                    {["Managing Director", "CEO", "Technical Director"][index]}
                  </p>
                  {index === 0 && (
                    <a
                      href="https://iconsofindianbusiness.com/article/Successful%20entrepreneur%20Ganesh%20Hegde's%20Hard%20work%20brings%20Fortune"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block px-6 py-3 bg-customBlack text-white font-bold rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    >
                      Learn More
                    </a>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </section>


            {/* certificate section? */}
      <section id="certificate" className="py-20 bg-slate-50">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-ftregolaneue leading-normal tracking-normal mb-12 text-center text-customBlack">
      Our Certificates
    </h2>

    {/* Certificate Grid - Centered for 2 items */}
    <div className="flex flex-wrap justify-center gap-56">
      {certificates.map((certificate) => (
        <div
          key={certificate.id}
          className="flex flex-col items-center text-center"
        >
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full max-w-xs h-auto rounded-lg shadow-md object-contain"
          />
          <h3 className="text-xl font-semibold mt-4 text-customBlack">
            {certificate.title}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* Awards Section */}
      <section
  id="awards"
  className="py-20 bg-slate-50 bg-[url('/image/awards-bck.jpg')] bg-cover bg-center bg-no-repeat"
>
  <div className=" bg-opacity-30 py-10 px-4 rounded-lg">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-ftregolaneue leading-normal tracking-normal mb-12 text-center text-customBlack">
        Our Awards
      </h2>

      <div className="flex justify-center">
        <div className="flex flex-col items-center text-center">
          <img
            src="/bosch_achivement.jpg"
            alt="Award"
            className="w-full max-w-xs h-auto rounded-lg shadow-md object-contain"
          />
          <h3 className="text-xl font-semibold mt-4 text-customBlack">
            Best Innovation Award
          </h3>
        </div>
      </div>
    </div>
  </div>
</section>


     

      {/* Brand logos  */}
      <Carousel />

      {/* Vision Missino section  */}
      <VisionMission />

      {/* Service Section */}
     

     

      <div className="absolute bottom-0 left-0 w-screen h-12 sm:h-28 bg-gradient-to-b from-black/10 via-black/40 to-white backdrop-blur-[4px] z-10"></div>


      {/* Careers Section */}
      <section
        id="careers"
        className="relative py-20 bg-gradient-to-b from-zinc-50 to-orange-50 overflow-hidden"
        >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('/image/background-image.webp')] bg-cover bg-center opacity-70 z-0"
          aria-hidden="true"
          ></div>

        {/* Employee count */}


        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <EmployeeCount/>
          <h2 className="text-4xl font-bold mb-6 text-customBlack">
            Join Our Team
          </h2>
          <p className="text-xl text-customBlack mb-8">
            We're always looking for talented individuals to join our innovative
            team.
          </p>
          <Link
            href="/career"
            className="inline-block py-3 px-8 bg-orange-500 text-black rounded-full text-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors duration-300 shadow-md"
          >
            View Opportunities
          </Link>
        </div>
      </section>

      {/* Contact Form and Information */}
      <DefaultPage />

      <footer className="bg-background py-8 text-center">
        <p className="text-gray-300">
          &copy; 2023 CNC Machining Specialists. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
