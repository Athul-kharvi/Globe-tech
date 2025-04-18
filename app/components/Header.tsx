"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface HeaderProps {
  disableLinks?: boolean; // Prop to disable links
}

const Header: React.FC<HeaderProps> = ({ disableLinks = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4 w-auto">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <img
              src="/image/logo_cnc.webp"
              alt="CNC Specialists Logo"
              width={200}
              height={80}
              className="h-14 w-auto scale-100 transition-transform duration-300 hover:scale-110  sm:h-20 sm:w-auto"
              loading="lazy"
              decoding="async"
            />
          </Link>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-white text-black p-2 rounded-full shadow-md transition-transform transform hover:scale-100"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Menu */}
          <ul
            className={`md:flex md:space-x-12 rounded-md border border-white border-opacity-10
            ${
              isMenuOpen
                ? "absolute top-full left-6 right-4 px-4 py-5 rounded-3xl space-y-4 border border-white/10 shadow-full text-center transition-all duration-300 ease-in-out bg-white/10 backdrop-blur-lg"
                : "hidden"
            }
            md:relative md:bg-slate-50 md:backdrop-blur-xl md:px-12 md:py-4 md:border border-white border-opacity-10 md:rounded-full`}
          >


            {[
              "Certificate",
              "About",
              "Services",
              "Leadership",
              "Careers",
              "Blogs",
            ].map((item) => (
              <li key={item} className="text-lg md:text-l font-medium">
                {disableLinks ? (
                  <span className="block md:inline-block py-2 md:py-0 text-gray-400 cursor-not-allowed">
                    {item}
                  </span>
                ) : (
                  <Link
                    href={item === "Blogs" ? "/blogs" : `#${item.toLowerCase()}`}
                    className="block md:inline-block py-2 md:py-0 text-customBlack hover:text-customOrange transition-colors duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <Link
            href="#contact"
            onClick={scrollToContact}
            className="hidden md:inline-flex items-center justify-center gap-x-4 py-4 px-6 bg-orange-500 text-black rounded-full hover:bg-white transition-colors duration-300 font-semibold"
          >
            Contact
            <img
              src="/image/arrow_button.png"
              alt="Arrow"
              className="w-5 h-5"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
