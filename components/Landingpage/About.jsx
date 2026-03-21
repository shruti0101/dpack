"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative py-20 px-6 md:px-20 flex justify-center items-center overflow-hidden  ">

        <div className="absolute w-[720px] h-[620px] top-0 right-0 -z-10 ">
            <Image
              src="/dd.png" // 👉 your soft shape image
              alt="shape"
              fill
              className="object-cover opacity-80"
            />
          </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div className="bg-white ">

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Vands Engineering Solutions
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">
              Leading Airless Painting Machine
            </span>
            <br />
            <span className="text-red-500">
              Manufacturer & Wholesaler
            </span>
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            At Vands Engineering Solutions, we are recognized as a premier Airless Painting Machine Manufacturer, offering cutting-edge solutions designed to deliver superior performance, efficiency, and durability.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            With years of industry expertise, we have established ourselves as a reliable Airless Painting Machine Wholesaler and supplier.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our advanced machines ensure smooth, uniform coating with high efficiency and minimal wastage.
          </p>

          {/* CTA */}
          <button className="mt-8 px-7 py-3 rounded-full bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold shadow-md hover:scale-105 transition-all duration-300">
            Explore Products
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative ">


          {/* 🔥 PRODUCT */}
          <div className="relative z-10">
            <Image
              src="/aboutimg.png"
              alt="Airless Painting Machine"
              width={500}
              height={400}
              className="object-cover float-animation "
            />
          </div>

        </div>
      </div>
    </section>
  );
}