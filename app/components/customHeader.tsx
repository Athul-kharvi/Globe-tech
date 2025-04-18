'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const CustomHeader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Scroll visibility effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`fixed top-0 left-0 w-screen z-50 shadow-md transition-transform duration-300 bg-slate-50 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <img 
              src="/image/logo_cnc.webp" 
              alt="CNC Specialists Logo" 
              width={200}
              height={80}
              className="h-14 w-auto scale-100 transition-transform duration-300 hover:scale-110 sm:h-20 sm:w-auto"
              loading="lazy"
              decoding="async"
            />
          </Link>

          {/* Contact Button */}
          <Link 
            href="../" 
            className="inline-flex items-center justify-center gap-x-4 py-3 px-6 bg-orange-500 text-black rounded-full hover:bg-white transition-colors duration-300 font-semibold"
          >
            Back To Home
            <img src="/image/arrow_button.png" alt="Arrow" className="w-5 h-5" />
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default CustomHeader
