"use client"; 

import LineComponent from "./LineComponent";

import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section className="bg-customYellow py-20 px-6 md:px-12 lg:px-20 h-auto">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-7xl font-semibold text-black mb-16">
          Who We Are & What We Stand For
        </h2>

        {/* Row Layout for Cards */}
        <div className="flex flex-wrap justify-center gap-6">




          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start hidden and lower
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is in view
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
            className="max-w-80 p-6 bg-customBlack border border-gray-200 rounded-3xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            {/* Eye Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 mb-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Vision Heading */}
            <a href="#">
              <motion.h5
                initial={{ opacity: 0, y: 20 }} // Text starts lower
                whileInView={{ opacity: 1, y: 0 }} // Moves up and fades in
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-2 text-2xl font-semibold tracking-tight text-white"
              >
                Vision
              </motion.h5>
            </a>

            <LineComponent />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-3 font-normal text-gray-500 dark:text-gray-400"
            >
              To improve as World class Manufacturing unit focusing on Global supply
            </motion.p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start hidden and lower
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is in view
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
            className="max-w-80 p-6 bg-customBlack border border-gray-200 rounded-3xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 mb-3"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>

            <a href="#">
              <motion.h5
                initial={{ opacity: 0, y: 20 }} // Text starts lower
                whileInView={{ opacity: 1, y: 0 }} // Moves up and fades in
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-2 text-2xl font-semibold tracking-tight text-white"
              >
                Mission

              </motion.h5>
            </a>
            <LineComponent />


            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-3 font-normal text-gray-500 dark:text-gray-400"
            >
              Develop a team of technical experts Encourage continual improvement process Developing 5S, Kaizen and 6 Sigma discipline
              Practicing integrity and diligent activities
            </motion.p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start hidden and lower
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is in view
            transition={{ duration: 0.8, ease: "easeOut" }}

            className="max-w-96 p-6 bg-customBlack  border border-gray-200 rounded-3xl shadow-sm dark:bg-gray-800 dark:border-gray-700">


            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mb-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
            </svg>

            <a href="#">
              <motion.h5
                initial={{ opacity: 0, y: 20 }} // Text starts lower
                whileInView={{ opacity: 1, y: 0 }} // Moves up and fades in
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-2 text-2xl font-semibold tracking-tight text-white"
              >
                Quality Policy
              </motion.h5>
            </a>
            <LineComponent />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-3 font-normal text-gray-500 dark:text-gray-400"
            >
              To Avoid Rejection at customer End. Extend Excellent Customer Support and Service at all time. Effectively implement the Quality Management System by controlling cost of Quality.
            </motion.p>
          </motion.div>




        </div>
      </div>
    </section>
  );
}

