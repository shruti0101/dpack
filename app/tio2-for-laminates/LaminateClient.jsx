"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/Data";

const laminatesProducts =
  categories.find((c) => c.id === "laminates")?.products ?? [];

export default function ProductsPage() {
  // === Product Card ===
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
      {/* Hover Arrow */}
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

        {/* Underline Hover Effect */}
        <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-300 transition-all duration-300 group-hover:w-full rounded"></span>
      </div>
    </Link>
  );

  // === Reusable Section ===
  const renderSection = (title, subtitle, description, products) => (
    <section className="relative w-full bg-gradient-to-b from-white via-[#E6F0FA] to-[#D0E4FA] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#4A90E2_0%,_transparent_40%)] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 space-y-6 py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          {title}
        </h2>
        <p className="text-xl text-gray-700 font-medium">{subtitle}</p>

        <div className="text-gray-800 text-lg leading-relaxed space-y-4">
          {description.split("\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-12 w-full">
          {products.map(renderProductCard)}
        </div>
      </div>
    </section>
  );

  return (
    <>
      {/* ===== Banner Section ===== */}
      <div
        className="relative w-full h-[50vh] md:h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/category/laminates.webp')" }}
      />

      {/* ===== Main Content Section ===== */}
      {renderSection(
        "Titanium Dioxide Solutions for Laminates",
        "Enabling Custom Color and Design for Flooring and Furniture",
        `Laminate manufacturers rely on titanium dioxide (TiO₂) for brilliant whiteness, superior opacity, and excellent light stability—ensuring high visual quality and long-lasting performance across décor papers, foils, and printed laminates.

Salford’s titanium dioxide grades are engineered to deliver smooth runnability, uniform opacity, and outstanding retention during paper or foil processing. With reduced reel-to-reel variation, they help minimize downtime and ensure flawless printing consistency.

It is specifically designed for laminate applications, providing high opacity and color retention. Its surface treatment ensures compatibility with diverse water chemistries, enabling wide versatility in high- and low-pressure décor papers and furniture laminates.

TiO₂ not only improves visual brightness but also enhances color stability, preventing discoloration from UV exposure. By ensuring even dispersion and stronger paper strength, Salford’s TiO₂ grades enable manufacturers to achieve uniformity, reduce waste, and improve yield—creating decorative surfaces that are both durable and visually appealing.`,
        laminatesProducts
      )}

      {/* ===== Scrollable Product Table Section ===== */}
      <section className="relative bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#004C91]">
            Salford TiO₂ Product Grades for Laminates
          </h2>

          <div className="overflow-y-auto h-[40vh] shadow-xl rounded-2xl border border-gray-200">
            <table className="min-w-full bg-white text-left">
              <thead className="bg-gradient-to-r from-[#4A90E2] to-[#357ABD] text-white">
                <tr>
                  <th className="py-4 px-6 font-semibold text-lg">Product</th>
                  <th className="py-4 px-6 font-semibold text-lg">
                    Applications
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {[
               
                  {
                    name: "SALFORD 296+",
                    apps: [
                     "High- and low-pressure decor papers",
              "Decorative foils",
              "Laminate flooring and furniture",
              "Print-based applications",
                    ],
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50 transition">
                    <td className="py-5 px-6 font-semibold text-[#004C91]">
                      {row.name}
                    </td>
                    <td className="py-5 px-6 space-y-2 text-gray-700">
                      {row.apps.map((a, i) => (
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
