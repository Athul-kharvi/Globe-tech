'use client'

import React from 'react'
import CustomHeader from '../components/customHeader'

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-white font-inter text-customBlack overflow-hidden">
      <CustomHeader />

      <div className="px-4 py-10 mt-20 animate-fadeIn transition-all duration-700 ease-in-out">
        {/* Sub Heading */}
        <p className="text-sm font-ftregolaneue font-bold text-center text-customBlack mb-2">
          JOIN WITH US
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-inter font-normal text-center mb-10">
          Open Positions
        </h1>

        {/* Job Card */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl md:text-2xl font-semibold text-[#333]">Lathe Operator</h2>
            <p className="text-gray-600 mt-2">
              We are looking for a passionate Operator with experience in Industry.
            </p>

            {/* Details */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-sm text-gray-500">
              <span className="mb-2 sm:mb-0">🕒 Type: Full-time</span>
              <span>💼 Experience: 2 years</span>
            </div>

            {/* Apply Button */}
            <button className="mt-6 bg-customYellow text-customBlack py-2 px-6 rounded-full hover:bg-[#a8642b] transition-colors duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareerPage
