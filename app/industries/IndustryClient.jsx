"use client";
import React from "react";
import Image from "next/image";
import CTA from "@/components/Landingpage/Cta";

const industries = [
  { image: "/industry/1.webp", name: "Agriculture" },
  // { image: "/industry/3.webp", name: "Oil & Gas Industry" },
  { image: "/industry/4.webp", name: "Plastics & Polymers" },
  { image: "/industry/5.webp", name: "Building And Homes" },
  { image: "/industry/8.webp", name: "Laminates" },
  { image: "/industry/6.webp", name: "Medical/Personal Care" },
  { image: "/industry/7.webp", name: "Footwear & Apparel" },
];

export default function IndustriesSection() {
  return (
    <>

       <div
        className="relative w-full px-8 bg-cover bg-center h-[50vh] md:h-[90vh] flex flex-col items-start justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/industries.webp')",
        }}
      >
     

     
      </div>
    
    <section className="mt-8 py-10 bg-gradient-to-b from-white to-blue-50">


      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#004C91] tracking-tight mb-3">
            Industries We Serve
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Delivering reliable solutions across diverse industries with unmatched quality and expertise.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2
         gap-8 mb-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg group bg-white hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Text */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#004C91] group-hover:text-[#00e5ff] transition-colors duration-300">
                  {industry.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTA></CTA>
    </section>
    </>


  );
}
