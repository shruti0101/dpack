"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const tabs = [
  {
    id: 1,
    mainTitle: "Driving ",
    subTitle: "Securing Global Cargo Movement",
    description: `As a leading Dunnage Bag Manufacturer, we are committed to supporting the global logistics and transportation industry with reliable and high-performance cargo securing solutions. We understand the challenges of modern supply chains and provide solutions that ensure safety, efficiency, and cost-effectiveness.

Our goal is to deliver high-quality dunnage bags that help industries minimize damage, improve load stability, and maintain operational excellence across global markets.`,
    points: [
      "Timely Deliveries – Strong logistics network ensures consistent and on-time supply across regions.",
      "Tailored Solutions – Multiple sizes, strengths, and materials to match different cargo requirements.",
      "Global Standards – Products designed to meet international safety and performance norms.",
      "Strong Partnerships – Long-term relationships with logistics, shipping, and manufacturing industries.",
    ],
    image: "/pigment-wave-1.webp",
  },
  {
    id: 2,
    mainTitle: " Sustainability  ",
    subTitle: "Commitment to Sustainable Logistics",
    description: `As a responsible Dunnage Bag Manufacturer, sustainability is at the core of our operations. We focus on eco-friendly materials, efficient production processes, and safe transportation practices to reduce environmental impact while maintaining high performance.

Our commitment ensures that businesses can secure their cargo while also contributing to a more sustainable supply chain ecosystem.`,
    points: [
      "Eco-Friendly Materials – Use of recyclable and reusable materials wherever possible.",
      "Compliance Standards – Products aligned with global safety and environmental regulations.",
      "Safe Handling & Transport – Designed for safe usage across industries and transport modes.",
      "Reduced Waste – Efficient designs that minimize packaging waste and damage losses.",
    ],
    image: "/pigment-wave-2.webp",
  },
  {
    id: 3,
    mainTitle: "Commitment ",
    subTitle: "Building Strong Industry Partnerships",
    description: `We believe that long-term success comes from strong partnerships. As a trusted Dunnage Bag Manufacturer, we work closely with our clients to understand their cargo challenges and provide reliable, customized solutions.

Our focus is not just on supplying products but on delivering value, improving efficiency, and ensuring cargo safety across every shipment.`,
    points: [
      "Customer-Centric Approach – Solutions tailored to specific logistics and cargo needs.",
      "Reliable Supply Chain – Consistent availability for uninterrupted operations.",
      "Technical Support – Expert guidance on product selection and usage.",
      "Flexible Solutions – Custom sizes, strengths, and branding options available.",
      "Long-Term Growth – Partnerships built on trust, quality, and performance.",
    ],
    image: "/pigment-wave-3.webp",
  },
];

export default function PremiumTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-6 md:py-20 overflow-hidden">

      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tabs[activeIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 -z-10"
        >
          <Image
            src={tabs[activeIndex].image}
            alt={tabs[activeIndex].subTitle}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 relative z-10">

        {/* LEFT */}
        <div className="flex flex-col">

          {/* Tabs */}
          <div className="flex flex-wrap border-b border-[#2F4FA2]/30 mb-8">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveIndex(index)}
                className={`relative px-4 py-2 text-lg md:text-xl font-semibold transition-all ${
                  index === activeIndex
                    ? "text-[#2F4FA2]"
                    : "text-gray-600 hover:text-[#59B347]"
                }`}
              >
                {tab.mainTitle}
                {index === activeIndex && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#59B347] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tabs[activeIndex].id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#2F4FA2] mb-5">
                {tabs[activeIndex].subTitle}
              </h2>

              <p
                className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html: tabs[activeIndex].description,
                }}
              ></p>

              <ul className="space-y-3">
                {tabs[activeIndex].points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#59B347] text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-800 text-base md:text-lg leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}