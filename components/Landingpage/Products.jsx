"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/Data";

// Featured product IDs
const featuredProducts = [
  {
    id: "prod-1",
    name: "Premium Dunnage Air Bag",
    image: ["/ch.png"],
    excerpt: [
      {
        type: "p",
        text: "High-quality dunnage air bags designed for secure cargo stabilization during transport.",
      },
    ],
  },
  {
    id: "prod-2",
    name: "Heavy Duty Air Bag",
    image: ["/ch1.png"],
    excerpt: [
      {
        type: "p",
        text: "Engineered for high-pressure applications ensuring maximum load safety and durability.",
      },
    ],
  },
  {
    id: "prod-3",
    name: "Paper Dunnage Bags",
    image: ["/d2.webp"],
    excerpt: [
      {
        type: "p",
        text: "Eco-friendly paper dunnage bags ideal for sustainable cargo protection.",
      },
    ],
  },
  {
    id: "prod-4",
    name: "Woven Air Bags",
    image: ["/d1.webp"],
    excerpt: [
      {
        type: "p",
        text: "Reusable woven dunnage bags offering superior strength and long-lasting performance.",
      },
    ],
  },
];
// Filter products
// const featuredProducts = categories
//   .flatMap((cat) => cat.products)
//   .filter((p) => featuredProductIds.includes(p.id));

export default function HomeProducts() {
  return (
    <section className="py-10 sm:py-16 md:py-28 px-4 sm:px-6 bg-orange-50">
      <div className="max-w-7xl mx-auto space-y-10 mt-10">
        {/* ===== Section Header ===== */}
        <div className="text-center space-y-4 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Featured Products
          </h2>
          <p className="text-gray-700 text-base sm:text-lg  max-w-5xl mx-auto leading-relaxed">
        Explore our diverse portfolio of Titanium Dioxide (TiO₂) products, engineered for superior brightness, opacity, and durability across plastics, coatings, and laminates. As a leading <strong>Titanium Dioxide Manufacturer,</strong>  Salford delivers advanced TiO₂ solutions that meet the highest global standards for quality and performance.
          </p>
        </div>

        {/* ===== Product Grid ===== */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
{featuredProducts.map((product) => (
  <Link
    key={product.id}
    href={`/products/${product.id}`}
    className="group relative block rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
  >
    {/* PRODUCT IMAGE */}
    <div className="relative h-[400px] w-full overflow-hidden">
      <img
        src={product.image?.[0] || "/placeholder.jpg"}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* 🔹 PRODUCT NAME (VISIBLE ALWAYS) */}
      <div className="absolute bottom-0 left-0 w-full bg-white backdrop-blur-md text-black capitalize py-3 text-center">
        <h3 className="text-lg font-semibold tracking-wide">
          {product.name}
        </h3>
      </div>

      {/* 🔥 HOVER OVERLAY */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-orange-500/90 to-black/70
        translate-y-[-100%] group-hover:translate-y-0
        transition-transform duration-500 ease-in-out flex flex-col justify-center items-center text-center p-6"
      >
        {/* TITLE */}
        <h3 className="text-white text-xl font-bold mb-3">
          {product.name}
        </h3>

        {/* SHORT DESC */}
        <p className="text-gray-200 text-sm mb-4 line-clamp-3">
          {(product.excerpt || [])
            .filter((b) => b.type === "p")
            .slice(0, 1)
            .map((block) =>
              block.text.length > 90
                ? block.text.slice(0, 90) + "..."
                : block.text
            )}
        </p>

        {/* BUTTON */}
        <span className="px-5 py-2 rounded-full bg-white text-black font-semibold text-sm hover:bg-orange-500 hover:text-white transition">
          View Product
        </span>
      </div>
    </div>
  </Link>
))}
        </div>

        {/* ===== See All Products Button ===== */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-block  px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-700 text-white text-lg sm:text-lg md:text-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            See All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
