"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/Data";

const plasticsProducts = categories.find((c) => c.id === "plastics")?.products ?? [];

export default function ProductsPage() {
  const renderProductCard = (product) => (
    <Link
      key={product.id}
      href={`/products/${product.id}`}
      className="group relative rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      style={{
        background: "linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)",
        minWidth: "280px",
      }}
    >
      {/* Arrow Icon */}
      <div className="absolute top-4 right-4 bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 shadow-md transition duration-300">
        <ArrowUpRight className="w-6 h-6 text-blue-600" />
      </div>

      {/* Card Content */}
      <div className="p-8 flex flex-col justify-between h-full w-full relative">
        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300 mb-2">
          {product.name}
        </h3>

        <div className="space-y-2 text-white text-sm md:text-base">
          {(product.excerpt || [])
            .filter((b) => b.type === "p")
            .map((block, idx) => (
              <p key={idx} className="leading-relaxed">
                {block.text}
              </p>
            ))}
        </div>

        {/* Underline on hover */}
        <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-300 transition-all duration-300 group-hover:w-full rounded"></span>
      </div>
    </Link>
  );

  const renderSection = (title, subtitle, description, products) => (
    <section className="relative w-full bg-gradient-to-b from-white via-[#E6F0FA] to-[#D0E4FA] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#4A90E2_0%,_transparent_40%)] opacity-20 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-10 md:px-16 space-y-6 py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">{title}</h2>
        <p className="text-xl text-black font-medium">{subtitle}</p>
        <div className="text-black text-xl leading-relaxed space-y-4">
          {description.split("\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 w-full">
          {products.map(renderProductCard)}
        </div>
      </div>
    </section>
  );

  return (
    <>
      {/* Banner Section */}
      <div
        className="relative w-full h-[50vh] md:h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/category/plastic.webp')" }}
      />

      {/* Plastics Section */}
      {renderSection(
        "Titanium Dioxide Solutions for Plastics",
        "High-Performance Pigments Delivering Exceptional Results",
        `Titanium dioxide (TiO₂) pigments are among the most widely utilized in the plastics industry. The right TiO₂ grade can be selected based on the type of resin, processing conditions, and the performance requirements of the final product.

TiO₂ is a versatile material in polymer manufacturing. While it is best known as a premium white pigment, providing brightness and opacity, its benefits go far beyond color. Titanium dioxide interacts with light—scattering visible light to create opacity or absorbing UV light to protect polymers from degradation. Its applications in the polymer industry continue to evolve, leveraging its light-responsive properties.

Despite the growth of new applications, TiO₂’s pigmentary qualities remain crucial. It is the most important white pigment in plastics due to its ability to efficiently scatter light, imparting whiteness, brightness, and opacity. Chemically inert, insoluble in polymers, and heat-stable under rigorous processing, TiO₂ is available in two crystal forms: anatase and rutile. Rutile is preferred because it offers better light scattering, stability, and lower risk of photodegradation.

Most commercial TiO₂ grades are not pure—they are often treated with inorganic or organic coatings to enhance properties such as dispersibility, weather resistance, and color stability. Because different applications demand different performance characteristics, ongoing research focuses on developing TiO₂ grades that meet the evolving needs of the plastics industry.

Salford ensures consistent quality through rigorous testing of its titanium dioxide pigments, covering color, tinting strength, undertone, pH, resistance, acid solubility, and dispersion performance.

Through proactive product stewardship, Salford enhances product performance while promoting responsible business practices, protecting stakeholders, and minimizing the environmental footprint of our products.`,
        plasticsProducts
      )}

      {/* Scrollable Product List Section */}
      <section className="relative bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#004C91]">
            Salford TiO₂ Product Grades for Plastics
          </h2>

          <div className="overflow-y-auto h-[70vh] shadow-lg rounded-2xl border border-gray-200">
            <table className="min-w-full bg-white text-left">
              <thead className="bg-gradient-to-r from-[#4A90E2] to-[#357ABD] text-white">
                <tr>
                  <th className="py-4 px-6 font-semibold text-lg">Product</th>
                  <th className="py-4 px-6 font-semibold text-lg">Applications</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {[
                  {
                    name: "SALFORD 201",
                    apps: [
                      "High-temperature cast and extrusion coating films",
                      "Extrusion coated paper",
                      "High-quality color masterbatch",
                    ],
                  },
                  {
                    name: "SALFORD 250",
                    apps: [
                      "ABS parts for automotive",
                      "Appliances colour stability under UV stress",
                      "Thermoplastic masterbatches",
                      "High-performance films such polypropylene (BOPP) for snack packaging",
                    ],
                  },
                  {
                    name: "SALFORD 280",
                    apps: ["Polyolefin masterbatch", "Styrenics", "ABS", "Flexible PVC and plastisols"],
                  },
                  {
                    name: "SALFORD 260",
                    apps: [
                      "Building products for outdoor use (windows, gutters, decks, fences)",
                      "Stadium seats",
                      "High-end patio furniture",
                      "Automotive body panels",
                    ],
                  },
                  {
                    name: "SALFORD 269",
                    apps: ["Polyolefin masterbatch", "Styrenics", "Interior rigid PVC", "ABS", "Flexible PVC and plastisols"],
                  },
                  {
                    name: "SALFORD 288",
                    apps: ["Masterbatches and compound", "PVC films", "Polystyrene and copolymers", "Engineering plastic"],
                  },

                    {
                    name: "SALFORD 626",
                    apps: [
                      "PVC profiles and sidings",
                      "Engineering plastics and flexible PVC",
                      "Plasticizer pastes and liquid colors",
                      "Polystyrene and copolymers",
                    ],
                  },
                ].map((product, idx) => (
                  <tr key={idx} className="hover:bg-blue-50 transition">
                    <td className="py-5 px-6 font-semibold text-[#004C91]">{product.name}</td>
                    <td className="py-5 px-6 space-y-2 text-gray-700">
                      {product.apps.map((a, i) => (
                        <p key={i}>{a}</p>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
