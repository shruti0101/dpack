import React from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/Landingpage/Cta";
const page = () => {
const industries = [
  {
    image: "/category/coating.webp",
    name: "Solutions for Coatings",
    link:"/applications/coatings",
    desc: "Enhance brightness, opacity, and durability in architectural, automotive, and industrial coatings. Our titanium dioxide ensures long-lasting color retention and superior surface protection under demanding conditions.",
  },
  {
    image: "/category/plastic.webp",
    name: "Solutions for Plastics",
     link:"/applications/plastics",
    desc: "Achieve brilliant whiteness, high opacity, and UV resistance in masterbatches and plastic compounds. Engineered to improve processing stability and maintain product aesthetics across applications.",
  },
  {
    image: "/category/laminates.webp",
    name: "Solutions for Laminates",
     link:"/applications/laminates",
    desc: "Deliver exceptional whiteness and smoothness to decorative laminates and films. Our TiO₂ grades provide uniform dispersion, high gloss, and superior light stability for premium surface finishes.",
  },
];


  return (
    <div>
      <div
        className="relative w-full px-8 bg-cover bg-center h-[50vh] md:h-[90vh] flex flex-col items-start justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/application.webp')",
        }}
      ></div>

      <section className="mt-2 md:mt-8 py-10 bg-gradient-to-b from-white to-blue-50">
        <div className="w-full mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif md:text-5xl font-extrabold text-[#004C91] tracking-tight mb-7">
              Premium Titanium Dioxide Solutions by Application
            </h2>
            <p className="text-black text-sm md:text-xl max-w-5xl my-5 mx-auto leading-relaxed">
              Decades of industry leading innovation in coatings, plastics, and
              laminates applications We set the standard in service,
              performance, and reliability to be your trusted TiO₂ partner. We
              make TiO₂ you can count on to drive innovation in coatings,
              plastics, and laminates applications. We strive to boldly lead the
              way with process improvements and best practices to deliver
              long-term value to our customers.
            </p>
          </div>

          {/* Grid Layout */}
          <div
            className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2
              gap-12 mb-10"
          >
            {industries.map((industry, index) => (
              <Link
                key={index}
                href={industry.link}
                title={industry.name}
                className="relative w-full flex rounded-2xl overflow-hidden border-b-3 border-blue-500 shadow-lg group bg-white hover:shadow-2xl transition-shadow duration-500  cursor-pointer"
              >
             
                {/* Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    title={industry.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Text */}
                <div className="p-6 text-center">
                  <h3 className="text-sm md:text-xl font-semibold text-[#004C91] group-hover:text-[#00e5ff] transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="max-w-md text-sm">{industry.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA></CTA>
    </div>
  );
};

export default page;
