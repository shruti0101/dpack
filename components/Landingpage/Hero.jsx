"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Industrial Plastic Product",
    highlightBlue: "Manufacturer",
    highlightGreen: "& Supplier",
    desc: "Supplying reliable Material Handling & Industrial Packaging Solutions across the UAE & GCC",
    img1: "/check/background.webp",
    img2: "/check/bg1.webp",
  },
  {
    id: 2,
    title: "High Quality Plastic Solutions",
    highlightBlue: "Durable",
    highlightGreen: "& Efficient",
    desc: "Engineered for performance, built for long-term industrial usage",
    img1: "/check/background.webp",
    img2: "/check/bg2.webp",
  },

    {
    id: 3,
    title: "High Quality Plastic Solutions",
    highlightBlue: "Durable",
    highlightGreen: "& Efficient",
    desc: "Engineered for performance, built for long-term industrial usage",
    img1: "/check/background.webp",
    img2: "/check/bg3.webp",
  },

    {
    id: 4,
    title: "High Quality Plastic Solutions",
    highlightBlue: "Durable",
    highlightGreen: "& Efficient",
    desc: "Engineered for performance, built for long-term industrial usage",
    img1: "/check/background.webp",
    img2: "/check/bg4.webp",
  },

     {
    id: 5,
    title: "High Quality Plastic Solutions",
    highlightBlue: "Durable",
    highlightGreen: "& Efficient",
    desc: "Engineered for performance, built for long-term industrial usage",
    img1: "/check/background.webp",
    img2: "/check/bg5.webp",
  },

     {
    id: 6,
    title: "High Quality Plastic Solutions",
    highlightBlue: "Durable",
    highlightGreen: "& Efficient",
    desc: "Engineered for performance, built for long-term industrial usage",
    img1: "/check/background.webp",
    img2: "/check/bg6.webp",
  },
];

const categories = [
  "Dunnage Bags",

  "Gap Fillers",
  "Aircolumn Rolls",
  "Courier Bags",
  "Air Bags",
  "other products"
 
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[110vh] overflow-hidden bg-white">

      {/* LIGHT BG SHAPE */}
     <motion.div
  className="absolute right-[-180px] top-[-100px] w-[1000px] h-[800px] bg-[#E7F4F1] opacity-60 "
  
  animate={{
    borderRadius: [
      "60% 40% 30% 70% / 60% 30% 70% 40%",
      "30% 60% 70% 40% / 50% 60% 30% 60%",
      "50% 50% 30% 70% / 30% 40% 70% 60%",
      "60% 40% 30% 70% / 60% 30% 70% 40%",
    ],
    x: [0, 40, -30, 0],
    y: [0, -30, 40, 0],
    rotate: [0, 5, -5, 0],
  }}

  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

      {/* SVG (SLIDER + DELAYED) */}
   <AnimatePresence mode="wait">
  <motion.div
    key={active}
    initial={{ x: 200, opacity: 0, scale: 0.95 }}
    animate={{ x: 0, opacity: 0.5, scale: 1 }}
    exit={{ x: -200, opacity: 0, scale: 0.95 }}
    transition={{
      duration: 0.8,
      delay: 0.2, 
      ease: "easeInOut",
    }}
    className="absolute z-30 right-35 top-1/2 -translate-y-1/2 opacity-50 w-[350px]"
  >
    {/* ✅ YOUR SVG EXACT SAME — DO NOT TOUCH */}
     
      <svg fill="" viewBox="0 0 557.898 506.596">
                                                    <g fill="#EFEFEF " id="Group_657" data-name="Group 657" transform="translate(-1058.001 -304.218)">
                                                        <g id="Group_90" data-name="Group 90" transform="translate(1220.906 304.718)">
                                                            <path id="Path_225" data-name="Path 225" className="cls-1" d="M277.271,14.016l-75.25,134.859,14.213,24.987a66.853,66.853,0,0,0,58.417,34.2H385.744Z" transform="translate(9.249 1.328)"></path>
                                                            <path id="Path_224" data-name="Path 224" className="cls-1" d="M277.271,269.178l-75.25-134.869,14.213-24.982a66.843,66.843,0,0,1,58.417-34.2H385.744Z" transform="translate(9.249 212.011)"></path>
                                                            <path fill="#A8B7A3" id="Path_226" data-name="Path 226" className="cls-2" d="M412.587,7.925H311.1a61.082,61.082,0,0,0-53.363,31.224L166.89,201.98a120.455,120.455,0,0,0,0,117.482L257.737,482.3A61.077,61.077,0,0,0,311.1,513.521H412.587L296.123,304.78a90.381,90.381,0,0,1,0-88.113Z" transform="translate(-151.596 -7.925)"></path>
                                                        </g>
                                                        <path fill="#DAEED4" id="Path_229" data-name="Path 229" className="cls-3" d="M412.587,7.925H311.1a61.082,61.082,0,0,0-53.363,31.224L166.89,201.98a120.455,120.455,0,0,0,0,117.482L257.737,482.3A61.077,61.077,0,0,0,311.1,513.521H412.587L296.123,304.78a90.381,90.381,0,0,1,0-88.113Z" transform="translate(1070.248 296.793)"></path>
                                                        <path fill="" id="Path_230" data-name="Path 230" className="cls-4" d="M412.587,7.925H311.1a61.082,61.082,0,0,0-53.363,31.224L166.89,201.98a120.455,120.455,0,0,0,0,117.482L257.737,482.3A61.077,61.077,0,0,0,311.1,513.521H412.587L296.123,304.78a90.381,90.381,0,0,1,0-88.113Z" transform="translate(906.404 296.793)"></path>
                                                    </g>
                                                </svg>
      
  </motion.div>
</AnimatePresence>

      <div className="w-full mx-auto px-6 md:px-20 mt-5 h-full flex items-center">

        {/* LEFT CONTENT */}
        <div className="w-1/2 space-y-6 z-20">
          <motion.h2
            key={slides[active].id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-black text-2xl"
          >
            {slides[active].title}
          </motion.h2>

          <motion.h1
            key={"title" + slides[active].id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[68px] font-bold leading-tight"
          >
            <span className="text-[#2F4FA2]">
              {slides[active].highlightBlue}
            </span>{" "}
            <span className="text-[#59B347]">
              {slides[active].highlightGreen}
            </span>
          </motion.h1>

          <motion.p
            key={"desc" + slides[active].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-black max-w-md"
          >
            {slides[active].desc}
          </motion.p>


<div className="flex gap-3">


          <button className="bg-gradient-to-r from-[#2F4FA2] to-[#59B347] text-white px-4 py-3 rounded-full flex items-center gap-3">
            DOWNLOAD CATALOGUE
            <span className="bg-white text-[#2F4FA2] w-8 h-8 flex items-center justify-center rounded-full">
              →
            </span>
          </button>

              <button className="border-green-600 border-2 text-black px-4 py-3 rounded-full flex items-center gap-3">
           CONTACT US
            <span className="bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-full">
              →
            </span>
          </button>
</div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="w-1/2 mr-28 relative flex justify-center items-center">

          {/* OVAL MASK (IMPORTANT FOR PIXEL MATCH) */}
          <div className="w-[420px] h-[520px] rounded-[23%] overflow-hidden relative">

            <AnimatePresence mode="wait">

              {/* MAIN IMAGE */}
              <motion.div
                key={slides[active].img1}
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -150, opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }} // 🔥 DELAY 2
                className="absolute inset-0"
              >
                <Image
                  src={slides[active].img1}
                  fill
                  className="object-cover"
                  alt=""
                />
              </motion.div>

            </AnimatePresence>
          </div>

          {/* FLOATING PRODUCT IMAGE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[active].img2}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 80, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }} // 🔥 DELAY 3
              className="absolute z-30"
            >
              <Image
                src={slides[active].img2}
                width={560}
                height={460}
                alt=""
                className="object-cover drop-shadow-xl"
              />
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* RIGHT CATEGORY BAR */}
    <div className="absolute right-10 top-1/2 -translate-y-1/2">

  <div className="relative flex flex-col gap-5">

    {/* 🔥 VERTICAL LINE (BASE) */}
    <div className="absolute left-[calc(100%-6px)] top-0 h-full w-[2px] bg-gray-200"></div>

    {/* 🔥 ACTIVE PROGRESS LINE */}
    <div
      className="absolute left-[calc(100%-6px)] top-0 w-[2px] bg-[#59B347] transition-all duration-500"
      style={{
        height: `${(active / (categories.length - 1)) * 100}%`,
      }}
    />

    {categories.map((item, index) => (
   <div
  key={index}
  onClick={() => setActive(index)}
  className="flex items-center uppercase justify-end gap-3 space-y-5 cursor-pointer relative"
>
        {/* TEXT */}
        <span
          className={`text-md ${
            index === active
              ? "text-[#59B347] font-semibold"
              : "text-gray-400"
          }`}
        >
          {item}
        </span>

        {/* DOT */}
        <div
          className={`w-3 h-3 rounded-full border-2 z-10 ${
            index === active
              ? " bg-[#59B347] "
              : "border-[#59B347] bg-white"
          }`}
        />
      </div>
    ))}
  </div>
</div>

    </section>
  );
}