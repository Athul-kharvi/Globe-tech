'use client'

import { motion } from 'framer-motion'
import React from 'react'
import CustomHeader from '../components/customHeader'

const AboutUs = () => {
  return (
    <div >
      <CustomHeader />
      <motion.div
      className="max-w-4xl mx-auto p-6 mt-60 bg-white rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-3xl font-bold text-brown-700 mb-4">About Us</h2>
      <p className="text-lg text-gray-700 mb-4">
        Fortune Group of Industries is a fully equipped group for Cold Forging, CNC Machining, Heat Treatment, and In-House Fabrication.
      </p>
      <p className="text-lg text-gray-700">
        With the “Under One Roof” concept, Fortune is one of the most precise suppliers to its customers by focusing on global supplies.
        Our strength and focus are on maintaining ZERO Complaints and Excellence in Delivery.
      </p>
    </motion.div>
    </div>
  )
}

export default AboutUs


