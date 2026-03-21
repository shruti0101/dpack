"use client";

import { motion } from "framer-motion";

export default function PremiumSVG() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      className="absolute right-0 top-1/2 -translate-y-1/2 w-[520px] h-[520px] pointer-events-none"
    >
      <motion.svg
        viewBox="0 0 600 600"
        className="w-full h-full"
        animate={{
          rotate: [0, 2, -2, 0],
          scale: [1, 1.03, 0.98, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <defs>
          {/* 🌿 Animated Gradient */}
          <linearGradient id="premiumGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%">
              <animate
                attributeName="stop-color"
                values="#22c55e; #4ade80; #16a34a; #22c55e"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%">
              <animate
                attributeName="stop-color"
                values="#bbf7d0; #86efac; #4ade80; #bbf7d0"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          {/* 🌫 Glass Blur */}
          <filter id="glassBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="25" />
          </filter>
        </defs>

        {/* 🔺 MAIN TRIANGLE */}
        <motion.path
          d="M120 300 L440 120 L440 480 Z"
          fill="url(#premiumGradient)"
          opacity="0.25"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* 🔺 INNER LAYER */}
        <motion.path
          d="M200 300 L400 200 L400 400 Z"
          fill="#22c55e"
          opacity="0.15"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* 🔺 GLASS SHAPE */}
        <motion.path
          d="M260 300 L370 240 L370 360 Z"
          fill="#ffffff"
          opacity="0.2"
          filter="url(#glassBlur)"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.svg>
    </motion.div>
  );
}