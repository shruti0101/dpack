
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

      {/* 🟨 Title */}
      <section className="w-full text-center py-5 md:py-16">
        <h1 className="text-2xl sm:text-3xl mt-25  md:text-6xl font-bold text-black">
          {product?.name}
        </h1>
      </section>

      {/* 🏭 Product Banner */}
      {product?.banner && (
        <section className="relative  w-full h-[35vh] sm:h-[50vh] md:h-[75vh] overflow-hidden rounded-lg">
          <Image
            src={product.banner}
            alt={`${product.name} Banner`}
            fill
            className="object-cover md:px-30"
            priority
          />
        </section>
      )}

      {/* 🧾 Product Description */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-16 mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-[#B57E1F] mb-6 border-b pb-2">
          Product Description
        </h2>

        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-800">
          {(Array.isArray(product.description) ? product.description : []).map(
            (block, i) => {
              switch (block.type) {
                case "h2":
                  return (
                    <h2
                      key={i}
                      className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6"
                    >
                      {block.text}
                    </h2>
                  );
                case "p":
                  return (
                    <p key={i} className="leading-relaxed mt-2">
                      {block.text}
                    </p>
                  );
                case "ul":
                  return (
                    <ul
                      key={i}
                      className="list-disc ml-5 sm:ml-6 space-y-2 mt-2 text-gray-800"
                    >
                      {block.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            }
          )}
        </div>
      </section>

      {/* 📘 Helpful Resources */}
      <section className="bg-gradient-to-r from-[#0076A8]/90 to-[#00A3C4]/80 py-14 sm:py-20 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold mb-10 sm:mb-12">
            Helpful Resources
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 🧪 Request a Sample */}
            <a
              href="/contact-us"
              className="bg-[#00B4D8] hover:bg-[#00C8F3] transition-all duration-300 rounded-lg p-8 sm:p-10 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-10 h-10 sm:w-12 sm:h-12 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5h-15A2.25 2.25 0 012.25 17.25V6.75m19.5 0l-9.75 7.5-9.75-7.5"
                />
              </svg>
              <h3 className="text-xl sm:text-2xl font-medium">
                Request a Sample
              </h3>
            </a>

            {/* 🧾 SDS */}
            <a
              href={product.pdfs?.sds || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0096C7] hover:bg-[#00B4D8] transition-all duration-300 rounded-lg p-8 sm:p-10 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-10 h-10 sm:w-12 sm:h-12 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-6.75a2.25 2.25 0 00-2.25-2.25h-10.5A2.25 2.25 0 004.5 7.5v9a2.25 2.25 0 002.25 2.25h7.5l4.5 3v-3.75a2.25 2.25 0 002.25-2.25z"
                />
              </svg>
              <h3 className="text-xl sm:text-2xl font-medium">
                Safety Data Sheets (SDS)
              </h3>
            </a>

            {/* 📄 TDS */}
            <a
              href={product.pdfs?.tds || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0096C7] hover:bg-[#00B4D8] transition-all duration-300 rounded-lg p-8 sm:p-10 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-10 h-10 sm:w-12 sm:h-12 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl sm:text-2xl font-medium">
                Technical Data Sheets (TDS)
              </h3>
            </a>
          </div>
        </div>
      </section>

      {/* 🧩 Related Products */}
   <section className="mt-16 md:mt-20 px-4 sm:px-8 mb-16">
  <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-semibold text-[#014AAB] text-center border-b pb-2 inline-block">
    Related Items
  </h2>

  {(() => {
    const categoryObj = categories.find((c) =>
      c.products.some((p) => p.id === product.id)
    );

    const related = categoryObj
      ? categoryObj.products.filter((p) => p.id !== product.id)
      : [];

    if (!related.length) {
      return (
        <div className="mt-10 text-center text-gray-500 text-lg">
          No related items found in this category.
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
        {related.slice(0, 4).map((relatedProduct) => (
          <div
            key={relatedProduct.id}
            className="group flex flex-col rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2"
          >
            <div className="p-6 flex flex-col flex-grow bg-[#B6E0EC]/40">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-black group-hover:text-[#0082C8] transition-colors duration-300">
                {relatedProduct.name}
              </h3>

              {relatedProduct.model && (
                <p className="text-sm text-gray-500 mb-3">
                  {relatedProduct.model}
                </p>
              )}

              <div className="space-y-2 text-sm md:text-base text-black">
                {(relatedProduct.excerpt || [])
                  .filter((b) => b.type === "p")
                  .map((block, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {block.text}
                    </p>
                  ))}
              </div>

              <a
                href={`/products/${relatedProduct.id}`}
                className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-r from-[#00537B] to-[#0082C8] text-white rounded-lg font-medium hover:scale-105 transition-transform duration-300"
              >
                View Details <ArrowUpRight className="w-4 h-4" />
              </a>

              <span className="block h-1 w-0 bg-gradient-to-r from-[#8AB0C2] to-[#0082C8] rounded-full mt-4 transition-all duration-300 group-hover:w-full mx-auto"></span>
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
