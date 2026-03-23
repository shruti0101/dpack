"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";

export default function PremiumFAQ() {
  const faqs = [
    {
      question: "What are Dunnage Bags and why are they used?",
      answer: `Dunnage Bags, also known as air bags or cargo securing bags, are inflatable packaging solutions used to fill voids between cargo during transportation. They prevent movement, absorb shocks, and reduce the risk of damage in transit.

These bags are widely used in shipping containers, trucks, railcars, and vessels to ensure load stability and safety, especially for fragile or high-value goods.`,
    },
    {
      question: "What types of Dunnage Bags do you manufacture?",
      answer: `We manufacture a wide range of Dunnage Bags suitable for different load types and transport conditions:
• Paper Dunnage Bags – Ideal for dry container shipments and cost-effective applications.
• Woven Polypropylene Dunnage Bags – Strong, moisture-resistant, and reusable.
• Kraft Dunnage Bags – High strength with multiple layers for heavy-duty use.
• Laminated Dunnage Bags – Enhanced durability and air retention for long-distance shipping.`,
    },
    {
      question: "What industries use Dunnage Bags?",
      answer: `Dunnage Bags are widely used across various industries, including:
• Logistics & Freight Forwarding
• Automotive
• FMCG & Retail
• Chemicals & Pharmaceuticals
• Food & Agriculture`,
    },
    {
      question: "How do Dunnage Bags improve cargo safety?",
      answer: `Dunnage Bags fill empty spaces between cargo units, preventing movement caused by vibration or sudden braking.

They distribute pressure evenly and absorb shocks, reducing product damage and improving load stability.`,
    },
    {
      question: "Are your Dunnage Bags compliant with international standards?",
      answer: `Yes, our bags comply with global standards including:
• AAR Certification
• ISO Quality Standards
• SGS Tested Materials`,
    },
    {
      question: "What sizes and strengths are available?",
      answer: `We offer various sizes and strengths:
• Level 1 to Level 5 ratings
• Custom sizes
• High and standard pressure options.`,
    },
    {
      question: "Are Dunnage Bags reusable and eco-friendly?",
      answer: `Yes. Many woven polypropylene bags are reusable and we focus on sustainable materials and eco-friendly manufacturing.`,
    },
    {
      question: "Do you provide customization and branding?",
      answer: `Yes we offer:
• Custom sizes
• Private labeling
• Logo printing on bags.`,
    },
    {
      question: "How can I select the right Dunnage Bag?",
      answer: `Our experts help with load analysis, gap assessment, and recommend the correct bag strength and size.`,
    },
    {
      question: "How can I request samples or place an order?",
      answer: `Contact our team via phone, email, or website form. We provide samples, competitive pricing, and fast delivery.`,
    },
  ];

  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative py-16 md:py-20 px-6 lg:px-16 overflow-hidden">
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 left-0 hidden md:block opacity-50"
      >
        <Image src="/fagimg.png" width={260} height={260} alt="" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-10 right-0 hidden md:block opacity-50"
      >
        <Image src="/aboutimg.png" width={260} height={260} alt="" />
      </motion.div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-14 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Everything you need to know about Dunnage Bags
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 relative z-10">
        {faqs.map((faq, index) => {
          const id = `faq-${index}`;
          const isOpen = openId === id;

          return (
            <motion.div
              key={id}
              layout
              className={`rounded-2xl border backdrop-blur-xl transition-all duration-300
${
  isOpen
    ? "bg-orange-50 border-orange-300 shadow-xl"
    : "bg-white/70 border-white/40 hover:shadow-xl"
}`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(id)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span
                  className={`text-lg font-semibold transition ${
                    isOpen ? "text-orange-600" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`ml-4 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-orange-500" : "text-gray-500"
                  }`}
                />
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-6 text-gray-600 leading-relaxed"
                  >
                    {faq.answer.split("\n").map((line, i) => (
                      <p
                        key={i}
                        className={`mb-2 ${
                          line.includes("•")
                            ? "pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-orange-500 before:rounded-full"
                            : ""
                        }`}
                      >
                        {line.replace("•", "")}
                      </p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
