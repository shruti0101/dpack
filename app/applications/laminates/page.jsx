import React from "react";

const Page = () => {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative w-full px-8 bg-cover bg-center h-[50vh] md:h-[90vh] flex flex-col items-start justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/category/laminates.webp')",
        }}
      >
        <div className="bg-black/50 absolute inset-0" />
        <h1 className="relative font-serif text-white text-3xl md:text-5xl font-bold z-10">
          Solutions for Laminates
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-black leading-relaxed">
        <h2 className="text-3xl md:text-3xl font-semibold mb-6">
          Enabling Custom Color and Design for Flooring and Furniture
        </h2>
        <p className="mb-6 text-xl">
          High-quality titanium dioxide (TiO₂) plays a vital role in laminate
          flooring and furniture production. It brings brilliance, color
          stability, and surface smoothness to materials used in high- and
          low-pressure décor papers, decorative foils, and printed applications.
        </p>

        <h3 className="text-2xl font-semibold mb-3">
          What Decor Paper Producers Require
        </h3>
        <ul className="list-disc text-lg pl-6 mb-6 space-y-2">
          <li>Consistent TiO₂ quality and efficiency for optimal performance</li>
          <li>Superior UV resistance and even paper formation</li>
          <li>Lightweight paper that maintains strength and smoothness</li>
          <li>Excellent retention for improved runnability and productivity</li>
          <li>A blue-white undertone that enhances the color spectrum</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-3">
          Requirements for Laminate Manufacturers
        </h3>
        <ul className="list-disc text-lg pl-6 mb-6 space-y-2">
          <li>Strong opacity and effective hiding power</li>
          <li>Long-lasting color stability and resistance to fading</li>
          <li>
            Post-forming flexibility for shaping products with curved edges
          </li>
          <li>Uniform color tone and even appearance</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">
          Salford High-Quality TiO₂ in Production
        </h3>
        <p className="mb-4 text-lg">
          Inconsistent TiO₂ can lead to poor retention, color inconsistency, and
          reduced paper strength. <strong>Salford</strong> titanium dioxide is
          engineered with precision to ensure consistent quality, outstanding
          dispersion, and reliable performance throughout the production
          process.
        </p>

        <h4 className="text-2xl font-semibold mb-2">
          Reel-to-Reel Color Consistency
        </h4>
        <p className="mb-4 text-lg">
          Achieving consistent color from reel to reel prevents costly downtime
          and improves profitability. With <strong>Salford TiO₂</strong>,
          manufacturers can maintain uniform color quality and predictable
          output across every production batch.
        </p>

        <h4 className="text-2xl font-semibold mb-2">
          Enhanced Appearance and Light Stability
        </h4>
        <p className="mb-4 text-lg">
          <strong>Salford TiO₂</strong> pigments deliver vibrant, blue-white
          undertones that enhance image clarity and pattern detail. They protect
          decorative surfaces from yellowing or fading due to UV and light
          exposure, ensuring long-lasting visual appeal.
        </p>

        <h4 className="text-2xl font-semibold mb-2">Improved Paper Strength</h4>
        <p className="mb-6 text-lg">
          Consistent pigment quality from <strong>Salford</strong> allows
          producers to use lighter base paper without compromising strength.
          This leads to greater production efficiency and improved margins per
          ton of material.
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          Applications within Laminate Manufacturing
        </h3>
        <p className="mb-4 text-lg">
          Décor papers—both high- and low-pressure—are essential for uni-color
          and print-based laminate applications. They demand superior quality
          and consistency, as printing base papers are used in several stages of
          laminate manufacturing.
        </p>
        <p className="text-lg">
          Decorative foils, an intermediate laminate material, are typically
          used for glue-on applications and require reliable performance under
          light pressure (1–2 bar), ensuring aesthetic appeal and long-lasting
          surface quality.
        </p>
      </div>








  {/* ===== Scrollable Product Table Section ===== */}
      <section className="relative bg-white md:py-20">
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



    </div>
  );
};

export default Page;
