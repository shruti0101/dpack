"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/Data";

const plasticsProducts =
  categories.find((c) => c.id === "plastics")?.products ?? [];
const laminatesProducts =
  categories.find((c) => c.id === "laminates")?.products ?? [];
const coatingsProducts =
  categories.find((c) => c.id === "coatings")?.products ?? [];

export default function ProductsPage() {
  const renderProductCard = (product) => (
    <Link
      key={product.id}
      href={`/products/${product.id}`}
      className="group relative rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-[#4A90E2] to-[#357ABD] flex flex-col justify-between"
    >
      {/* Hover Icon */}
      <div className="absolute top-4 right-4 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 shadow-md transition duration-300">
        <ArrowUpRight className="w-5 h-5 text-blue-600" />
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-8 flex flex-col justify-between h-full">
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300 mb-3">
          {product.name}
        </h3>

        <div className="space-y-2 text-white text-sm sm:text-base leading-relaxed">
          {(product.excerpt || [])
            .filter((b) => b.type === "p")
            .map((block, idx) => (
              <p key={idx}>{block.text}</p>
            ))}
        </div>

        {/* Underline animation */}
        <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-300 transition-all duration-300 group-hover:w-full rounded"></span>
      </div>
    </Link>
  );

  const renderSection = (
    mainHeading,
    title,
    subtitle,
    description,
    products
  ) => (
    <section className="relative w-full bg-gradient-to-b from-white via-[#E6F0FA] to-[#D0E4FA] overflow-hidden py-16 sm:py-20">
      {/* Top intro block */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 space-y-6 mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900">
          {mainHeading}
        </h2>
        <h3 className="text-xl sm:text-2xl font-medium text-[#1E4B7A]">
          Salford Titanium Dioxide: Premium Quality, Reliable Supply, Expert
          Support
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
          For decades, Salford has built lasting partnerships by delivering
          Titanium Dioxide (TiO₂) our customers can truly depend on. With nearly
          a century of experience, we continue to provide world-class TiO₂ for
          coatings, plastics, and laminate applications across the globe.
          <br />
          <br />
          As innovators of the chloride manufacturing process, we’ve refined it
          over the years to extend product durability and minimize environmental
          impact. Through collaboration and innovation, we help our customers
          develop superior products powered by advanced TiO₂ technology.
          <br />
          <br />
          Each Salford TiO₂ grade is managed by a dedicated Grade Guardian who
          ensures it meets our strict quality standards. Only products that pass
          every test are delivered to our customers.
        </p>
      </div>

      {/* Section content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 font-medium mb-4">
          {subtitle}
        </p>
        <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-10">
          {description}
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map(renderProductCard)}
        </div>
      </div>
    </section>
  );

  return (
    <>
      {/* ===== Hero Banner ===== */}
      <div
        className="relative w-full h-[40vh] sm:h-[55vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/whychoosebg.webp')" }}
      ></div>

      {/* ===== Product Sections ===== */}
      {renderSection(
        "Empowering Plastics with TiO₂ Brilliance",
        "TiO₂ for Plastics",
        "High-performance grades for plastics, polymers, and masterbatches.",
        `Our TiO₂ grades deliver superior opacity, brightness, and UV resistance for high-quality plastic applications. 
        These pigments ensure long-term color stability, excellent dispersibility, and optimal surface finish. 
        Ideal for injection molding, extrusion, and film applications.`,
        plasticsProducts
      )}

      {renderSection(
        "Enhancing Coatings with Superior Titanium Dioxide",
        "TiO₂ for Coatings",
        "Coating-grade TiO₂ designed for maximum opacity and durability.",
        `Ideal for architectural, industrial, and automotive coatings with superior gloss, color, and long-term performance. 
        Our TiO₂ pigments provide enhanced hiding power, improved weather resistance, and excellent lightfastness, 
        making coatings more durable and vibrant. Perfect for solvent-based and waterborne systems.`,
        coatingsProducts
      )}

      {renderSection(
        "Whitening Solutions for Laminates and Decorative Surfaces",
        "TiO₂ for Laminates",
        "Optical brighteners and whiteners for laminate applications.",
        `Designed for exceptional brightness and whiteness in decorative laminates, papers, and films. 
        Our TiO₂ products improve optical performance, ensuring high gloss and uniform color. 
        They are suitable for high-pressure laminates, melamine boards, decorative films, and specialty papers.`,
        laminatesProducts
      )}

      <div className="text-center bg-[#D4E6FA] text-xs sm:text-sm text-black py-2">
        <p>
          Website Designed By Promozione Branding Pvt. Ltd.{" "}
          <a
            className="text-blue-400 underline"
            href="https://www.promozionebranding.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website Designing Company
          </a>
        </p>
      </div>
    </>
  );
}
