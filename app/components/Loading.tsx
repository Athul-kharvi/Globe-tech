import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Loading() {
  const texts = ["CNC", "Cold Forging", "Heat Treatment"];
  const [randomText, setRandomText] = useState("");

  useEffect(() => {
    setRandomText(texts[Math.floor(Math.random() * texts.length)]);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      {/* Gear Animation */}
      <motion.div
        className="relative w-32 h-32 mb-6"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      >
        {/* Proper Gear Shape */}
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 5 L60 15 L75 10 L80 25 L95 30 L90 45 L100 50 L90 55 L95 70 L80 75 L75 90 L60 85 L50 95 L40 85 L25 90 L20 75 L5 70 L10 55 L0 50 L10 45 L5 30 L20 25 L25 10 L40 15 Z"
            fill="orange"
          />
          <circle cx="50" cy="50" r="20" fill="black" stroke="orange" strokeWidth="4" />
        </svg>
      </motion.div>

      {/* Drill Machine Animation */}
      <motion.div
        className="relative w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center"
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
      >
        {/* Drill Machine Body */}
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="5" width="10" height="30" fill="gray" />
          <polygon points="20,35 30,35 25,50" fill="black" />
        </svg>
      </motion.div>

      {/* Animated Text Below */}
      {randomText && (
        <motion.span
          className="text-white text-2xl font-bold mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {randomText}
        </motion.span>
      )}
    </div>
  );
}
