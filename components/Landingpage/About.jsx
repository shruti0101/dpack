"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative py-20 px-6 md:px-20 flex justify-center items-center overflow-hidden">

      <div className="absolute w-[720px] h-[720px] top-0 right-0 -z-10">
        <Image
          src="/wave.png"
          alt="shape"
          fill
          className="object-cover opacity-80"
        />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div className="bg-white">

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Dpack Packaging Solutions
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">
              Leading Dunnage Bags
            </span>
            <br />
            <span className="text-[#2F4FA2]">
              Manufacturer <span className="text-[#59B347]">& Supplier</span>
            </span>
          </h2>

          <p className="text-black  text-lg mb-4 leading-relaxed">
            At Dpack  we specialize in manufacturing high-quality Dunnage Bags designed to secure cargo during transportation and prevent load shifting in containers, trucks, and railcars.
          </p>

          <p className="text-black text-lg mb-4 leading-relaxed">
            With extensive industry experience, we have become a trusted Dunnage Bags manufacturer and supplier providing reliable packaging solutions for logistics, shipping, and industrial sectors.
          </p>

          <p className="text-black text-lg leading-relaxed">
            Our durable and high-strength dunnage bags ensure maximum cargo protection, improved load stability, and cost-effective transportation safety for global supply chains.
          </p>

          {/* CTA */}
          <button className="mt-5 px-7 py-3 rounded-full bg-gradient-to-r from-[#2F4FA2] to-[#59B347] text-white font-semibold shadow-md hover:scale-105 transition-all duration-300">
            Explore Products
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          <div className="relative z-10">
            <Image
              src="/aboutimg.png"
              alt="Dunnage Bags"
              width={500}
              height={400}
              className="object-cover float-animation"
            />
          </div>

        </div>
      </div>
    </section>
  );
}