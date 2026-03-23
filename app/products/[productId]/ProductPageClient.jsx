import { categories } from "@/Data";
import Image from "next/image";
import Head from "next/head";
import { ArrowUpRight } from "lucide-react";

export default function ProductPage({ params }) {
  const { productId } = params;

  const allProducts = categories.flatMap((c) => c.products);
  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <h2 className="text-center text-red-500 mt-10">Product not found</h2>
    );
  }

  return (
    <>
      <Head>
        <title>{product.metaTitle || product.name}</title>
        <meta
          name="description"
          content={product.metaDescription || product.name}
        />
      </Head>

      {/* 🔥 HERO TITLE */}
      <section className="relative w-full text-center py-10 md:py-20 bg-gradient-to-b from-[#EEF4FF] to-white">
        <h1 className="text-3xl  mt-12 sm:text-4xl md:text-6xl font-extrabold text-[#2F4FA2] tracking-tight">
          {product?.name}
        </h1>
        <div className="w-24 h-[3px] bg-gradient-to-r from-[#2F4FA2] to-[#59B347] mx-auto mt-4 rounded-full"></div>
      </section>

      {/* 🖼️ BANNER */}
      {product?.banner && (
        <section className="relative w-full h-[35vh] sm:h-[50vh] md:h-[75vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/10 z-10"></div>
          <Image
            src={product.banner}
            alt={`${product.name} Banner`}
            fill
            className="object-cover md:px-30 scale-105"
            priority
          />
        </section>
      )}

      {/* 📄 DESCRIPTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-20 mb-20">
        <div className="bg-white  p-8 md:p-12 border border-gray-100">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2F4FA2] mb-8">
            Product Description
          </h2>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">
            {(Array.isArray(product.description) ? product.description : []).map(
              (block, i) => {
                switch (block.type) {
                  case "h2":
                    return (
                      <h2
                        key={i}
                        className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2F4FA2] mt-6"
                      >
                        {block.text}
                      </h2>
                    );
                  case "p":
                    return <p key={i}>{block.text}</p>;
                  case "ul":
                    return (
                      <ul key={i} className="space-y-2 mt-2">
                        {block.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="w-2 h-2 mt-2 bg-[#59B347] rounded-full"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              }
            )}
          </div>

        </div>
      </section>


      {/* 🧾 SPECIFICATION MATRIX */}
<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
  
  <h2 className="text-2xl md:text-3xl font-bold text-[#0B2A4A] mb-4">
    SPECIFICATION MATRIX
  </h2>

  <div className="w-16 h-[3px] bg-green-600 mb-8 rounded-full"></div>

  <div className="overflow-hidden rounded-xl border border-gray-200 shadow-md">

    <table className="w-full text-left border-collapse">

      {/* HEADER */}
      <thead>
        <tr className="bg-[#0A1F3C] text-white text-sm uppercase tracking-wide">
          <th className="px-6 py-5 font-semibold">Parameter</th>
          <th className="px-6 py-5 font-semibold">PX-700 Standard</th>
          <th className="px-6 py-5 font-semibold">PX-900 Ultra</th>
          <th className="px-6 py-5 font-semibold">PX-X Experimental</th>
        </tr>
      </thead>

      {/* BODY */}
      <tbody className="text-gray-700 text-sm">

        <tr className="bg-[#F7F7F7]">
          <td className="px-6 py-5 font-medium text-[#0B2A4A]">Torque Capacity</td>
          <td className="px-6 py-5">450 Nm</td>
          <td className="px-6 py-5 text-[#D4A44B] font-semibold">890 Nm</td>
          <td className="px-6 py-5">1,200 Nm</td>
        </tr>

        <tr className="bg-white">
          <td className="px-6 py-5 font-medium text-[#0B2A4A]">Material Composition</td>
          <td className="px-6 py-5">Aluminum-Steel</td>
          <td className="px-6 py-5">Grade 5 Titanium</td>
          <td className="px-6 py-5">Carbon-Polymer</td>
        </tr>

        <tr className="bg-[#F7F7F7]">
          <td className="px-6 py-5 font-medium text-[#0B2A4A]">Operating Voltage</td>
          <td className="px-6 py-5">24V DC</td>
          <td className="px-6 py-5">48V DC</td>
          <td className="px-6 py-5">Variable 400V</td>
        </tr>

        <tr className="bg-white">
          <td className="px-6 py-5 font-medium text-[#0B2A4A]">Protection Class</td>
          <td className="px-6 py-5">IP65</td>
          <td className="px-6 py-5">IP68 / IP69K</td>
          <td className="px-6 py-5">Submersible</td>
        </tr>

        <tr className="bg-[#F7F7F7]">
          <td className="px-6 py-5 font-medium text-[#0B2A4A]">Maintenance Cycle</td>
          <td className="px-6 py-5">12,000 Hrs</td>
          <td className="px-6 py-5">25,000 Hrs</td>
          <td className="px-6 py-5">Condition Based</td>
        </tr>

      </tbody>
    </table>

  </div>
</section>

      {/* ⚡ RESOURCES */}
      <section className="bg-gradient-to-br from-[#2F4FA2] to-[#59B347] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12">
            Helpful Resources
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[{
              title: "Get In Touch",
              link: "/contact-us"
            },
            {
              title: "Download Brochure",
              link: product.pdfs?.sds || "#"
            },
            {
              title: "Request a Quote",
              link: product.pdfs?.tds || "#"
            }].map((item, i) => (

              <a
                key={i}
                href={item.link}
                target="_blank"
                className="group bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl shadow-xl hover:scale-105 transition-all duration-500"
              >
                <h3 className="text-xl md:text-2xl font-semibold group-hover:text-yellow-300 transition">
                  {item.title}
                </h3>
              </a>

            ))}

          </div>
        </div>
      </section>

      {/* 🔗 RELATED */}
      <section className="mt-20 px-4 sm:px-8 mb-20">

        <h2 className="text-3xl md:text-5xl font-semibold text-[#2F4FA2] text-center mb-12">
          Related Products
        </h2>

        {(() => {
          const categoryObj = categories.find((c) =>
            c.products.some((p) => p.id === product.id)
          );

          const related = categoryObj
            ? categoryObj.products.filter((p) => p.id !== product.id)
            : [];

          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

              {related.slice(0, 4).map((relatedProduct) => (

                <div
                  key={relatedProduct.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >

                  <div className="p-6 flex flex-col h-full bg-gradient-to-b from-[#EEF4FF] to-white">

                    <h3 className="text-xl font-semibold text-[#2F4FA2] mb-4 group-hover:text-[#59B347] transition">
                      {relatedProduct.name}
                    </h3>

                    <div className="text-sm text-gray-600 space-y-2 flex-grow">
                      {(relatedProduct.excerpt || [])
                        .filter((b) => b.type === "p")
                        .map((block, idx) => (
                          <p key={idx}>{block.text}</p>
                        ))}
                    </div>

                    <a
                      href={`/products/${relatedProduct.id}`}
                      className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-r from-[#2F4FA2] to-[#59B347] text-white rounded-full font-medium hover:scale-105 transition"
                    >
                      View Details <ArrowUpRight className="w-4 h-4" />
                    </a>

                  </div>

                </div>

              ))}

            </div>
          );
        })()}
      </section>
    </>
  );
}