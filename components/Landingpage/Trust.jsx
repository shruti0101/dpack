"use client";
import React from "react";
import Image from "next/image";

export default function TitaniumDioxideSection() {
  return (
    <section className="bg-white px-5">
           {/* Heading */}
          <h2 className="text-3xl md:text-5xl text-center font-bold text-[#004250] mb-9">
            Titanium Dioxide Manufacturer You Can Trust
          </h2>
      <div className="w-full mx-auto  lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">

        
        {/* Left Side Image */}
        <div className="relative w-full h-[380px] lg:h-[520px] overflow-hidden rounded-lg shadow-md">
          <Image
            src="/trust.jpg" // Replace with your actual image path
            alt="Titanium Dioxide Manufacturing"
            fill
            className="object-cover "
          />
        </div>

        {/* Right Side Content */}
        <div>
       

          {/* Paragraphs */}
          <p className="text-black leading-relaxed ">
            At <span className="font-semibold">Salford</span>, we do not only
            manufacture — rather, we supply industries with Titanium Dioxide
            (TiO₂) of the highest quality, which is specially engineered for
            excellence. As an international <strong>Titanium Dioxide (TiO₂) Manufacturer</strong>, we
            keep on performing and supplying in a reliable manner, bringing very
            bright and consistent products to every single major industrial
            sector.
          </p>

          <p className="text-black leading-relaxed ">
            Our TiO₂ products, venturing from one end of the industrial line to
            the other — from paints and coatings to plastic, paper, textiles,
            cosmetics, and pharmacy — are unique in giving your production line
            the unmatched characteristics of purity, opacity, and durability.
          </p>

          <p className="text-black leading-relaxed">
            Every manufacture, quality control, and innovation Salford process
            guarantees world-class standards for every batch of the product.
          </p>

          {/* Subheading */}
          <h3 className="text-2xl font-semibold text-[#004250] mb-4">
            Our Edge as a Titanium Dioxide Manufacturer
          </h3>

          {/* Bullet List */}
          <ul className="text-gray-800 leading-relaxed mb-8 space-y-2">
            <li>
               <span className="font-bold">Precision Manufacturing</span> –
              Advanced production technology for consistent TiO₂ quality.
            </li>
            <li>
             <span className="font-bold">Industry Versatility</span> –
              Serving multiple sectors with tailored grades and specifications.
            </li>
            <li>
              <span className="font-bold">Global Reach</span> – Supplying to
              partners and industries worldwide.
            </li>
            <li>
              <span className="font-bold">Sustainable Operations</span> –
              Focused on eco-conscious sourcing and responsible production.
            </li>
            <li>
               <span className="font-bold">Reliable Partnership</span> –
              Built on trust, transparency, and long-term value.
            </li>
          </ul>

          {/* Tagline */}
          {/* <p className="text-gray-800 italic leading-relaxed mb-8">
            Salford emerges as your trustworthy Titanium Dioxide Producer who is
            geared up to foster the industrial revolution with the help of{" "}
            <span className="text-[#004250] font-semibold">
              Technology, Quality, and Integrity.
            </span>
          </p> */}
        </div>
      </div>
    </section>
  );
}
