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
• Laminated Dunnage Bags – Enhanced durability and air retention for long-distance shipping.

All our bags are designed to meet international safety and performance standards.`,
  },
  {
    question: "What industries use Dunnage Bags?",
    answer: `Dunnage Bags are widely used across various industries, including:
• Logistics & Freight Forwarding – Secure cargo in containers and trucks.
• Automotive – Protect parts and components during transit.
• FMCG & Retail – Prevent shifting of packaged goods.
• Chemicals & Pharmaceuticals – Ensure safe transport of sensitive materials.
• Food & Agriculture – Maintain product integrity during long journeys.`,
  },
  {
    question: "How do Dunnage Bags improve cargo safety?",
    answer: `Dunnage Bags fill empty spaces between cargo units, preventing movement caused by vibration, sudden braking, or impact. They distribute pressure evenly and absorb shocks, reducing product damage and improving load stability.

This not only protects goods but also minimizes claims, losses, and operational risks during transportation.`,
  },
  {
    question: "Are your Dunnage Bags compliant with international standards?",
    answer: `Yes, all our Dunnage Bags are manufactured in compliance with global quality and safety standards:
• AAR (Association of American Railroads) Certification
• ISO Quality Standards
• SGS Tested Materials

We ensure consistent quality, durability, and performance across all our products.`,
  },
  {
    question: "What sizes and strengths are available?",
    answer: `We offer Dunnage Bags in a wide range of sizes and load-bearing capacities to suit different cargo requirements:
• Level 1 to Level 5 strength ratings
• Custom sizes based on container gaps
• High-pressure and standard-pressure options

Our team can help you choose the right size and strength based on your shipment type.`,
  },
  {
    question: "Are Dunnage Bags reusable and eco-friendly?",
    answer: `Yes, many of our Dunnage Bags, especially woven polypropylene types, are reusable and designed for multiple uses. We also focus on eco-friendly materials and manufacturing processes to minimize environmental impact.

Our products support sustainable logistics while maintaining high performance.`,
  },
  {
    question: "Do you provide customization and branding?",
    answer: `Absolutely. We offer customization options including:
• Custom sizes and specifications
• Private labeling and branding
• Printing logos and instructions on bags

This helps businesses maintain brand identity while ensuring effective cargo protection.`,
  },
  {
    question: "How can I select the right Dunnage Bag for my cargo?",
    answer: `Selecting the right Dunnage Bag depends on factors like cargo weight, gap size, transport mode, and environmental conditions.

Our experts provide complete guidance including:
• Load analysis and gap assessment
• Recommended bag type and strength level
• Inflation guidelines and best practices

We ensure you get the most effective and safe solution for your shipments.`,
  },
  {
    question: "How can I request samples or place an order?",
    answer: `You can easily request samples or place orders by contacting our team via phone, email, or website inquiry form.

We provide:
• Product samples for testing
• Competitive pricing based on quantity
• Fast production and reliable delivery

Our team ensures a smooth and hassle-free ordering experience from start to finish.`,
  },
];


   const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };


  





 
  return (
    <section className="relative py-16 md:py-24 px-6 lg:px-16 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">

      {/* ORANGE GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,115,0,0.15),transparent_60%)] pointer-events-none"></div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 left-0 hidden md:block opacity-50"
      >
        <Image src="/atoms.webp" width={260} height={260} alt="" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-10 right-0 hidden md:block opacity-50"
      >
        <Image src="/atoms.webp" width={260} height={260} alt="" />
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
  const isOpen = openIndex === index;

  return (
    <motion.div
      key={faq.question} // ✅ FIXED (IMPORTANT)
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
                onClick={() => toggleFAQ(index)}
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
                    isOpen
                      ? "rotate-180 text-orange-500"
                      : "text-gray-500"
                  }`}
                />
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
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