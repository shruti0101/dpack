import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

 const RenderProductCard = ({product}) => (

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


  export default RenderProductCard