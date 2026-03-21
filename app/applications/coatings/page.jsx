import React from "react";

const Page = () => {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative w-full px-8 bg-cover bg-center h-[50vh] md:h-[90vh] flex flex-col items-start justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/category/coating.webp')",
        }}
      >
        <div className="bg-black/30 absolute inset-0" />
        <h1 className="relative font-serif text-white text-3xl md:text-5xl font-bold z-10">
          Solutions for Coatings
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-black leading-relaxed">
        <h2 className="text-3xl md:text-3xl font-semibold mb-6">
          A Legacy of Innovation and Excellence in Coating Solutions
        </h2>
        <p className="mb-6 text-lg leading-relaxed">
          For decades, Salford has been a pioneer in titanium dioxide (TiO₂)
          innovation, consistently setting the standard for quality,
          reliability, and performance in the coatings industry. As one of the
          most trusted names in TiO₂ technology, Salford continues to deliver
          exceptional product consistency, dependable customer service, and
          global manufacturing capability. Our legacy of quality extends to
          Salford Coating Solutions, developed for both architectural and
          industrial applications — including OEM, marine, aerospace, and
          construction coatings. Products formulated with high-grade Salford
          TiO₂ ensure outstanding durability, long-lasting protection, and
          enhanced visual performance across every use case.
        </p>

        <h3 className="text-2xl font-semibold mb-3">Architectural Coatings</h3>
        <ul className="list-disc text-lg pl-6 mb-6 space-y-2">
          <li>
            Or interior paints, it offers bright whites, vivid colors, and the
            ideal gloss level for any aesthetic. Its excellent opacity ensures
            smooth, uniform coverage and long-lasting brightness.
          </li>
          <li>
            For exterior coatings, Salford TiO₂ resists UV degradation,
            chalking, and fading — preserving that freshly painted appearance
            over time.
          </li>

          <li>
            Choosing the right Salford grade ensures a perfect balance between
            gloss retention, color stability, and environmental resistance,
            helping your coatings perform beautifully under all conditions.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-3">
          Industrial Coatings and Finishes
        </h3>
        <p className="text-lg">
          Industrial coatings cover a wide range of applications, including
          automotive, powder, coil, can, and building paints — each requiring
          specific performance features. While titanium dioxide is known for its
          opacity, Salford TiO₂ also plays a critical role in enhancing gloss,
          durability, and curing behavior, especially in acid-catalyzed
          coatings.Salford-engineered TiO₂ improves coating strength and
          stability, ensuring superior protection and compatibility with other
          formulation ingredients.
        </p>

        <ul className="list-disc text-lg mt-4 pl-6 mb-6 space-y-2">
          <li>
            Silica treatment provides excellent exterior durability and chalk
            resistance.
          </li>
          <li>
            Alumina treatment ensures smooth dispersion and prevents
            flocculation.
          </li>
          <li>
            Optimized particle size distribution results in higher gloss and
            refined surface finish.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Automotive Applications</h3>
        <p className="mb-4 text-lg">
          In automotive coatings, Salford TiO₂ ensures color stability, UV
          resistance, and long-lasting gloss for both interior and exterior
          vehicle surfaces. It enhances visual appeal while protecting against
          environmental wear and discoloration.
        </p>

        <h4 className="text-2xl font-semibold mb-2">
          When used in coatings, Salford TiO₂:
        </h4>

        <ul className="list-disc text-lg pl-6 mb-6 space-y-2">
          <li>Creates a smooth, high-gloss finish</li>
          <li>Maintains color brilliance over time</li>
          <li>Protects against UV and environmental damage</li>
        </ul>

        <p className="mb-4 text-lg">
          In plastics, it prevents fading and supports UV protection — helping
          automotive parts retain their appearance longer. Salford TiO₂ is
          widely used in powder, coil, primer, e-coat, and can coatings,
          providing consistency and long-term performance in every formulation.
        </p>
      </div>






 {/* ===== Scrollable Product Table Section ===== */}
      <section className="relative bg-white py-15">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#004C91]">
            Salford TiO₂ Product Grades for Coatings
          </h2>

          <div className="overflow-y-auto h-[70vh] shadow-xl rounded-2xl border border-gray-200">
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
                    name: "SALFORD 628",
                    apps: [
                      "Powder coating",
                      "White and tinted automotive finishes",
                      "Waterborne paints",
                      "Screen and digital printing inks",
                      "Quartz and stone",
                      "Coil coating and UV-cured finishes",
                    ],
                  },
                  {
                    name: "SALFORD 686",
                    apps: [
                      "Architectural and industrial paints",
                      "Screen and digital printing inks",
                      "Waterborne paints",
                      "White automotive finishes",
                      "Quartz and stone",
                      "Coil coating and UV-cured finishes",
                    ],
                  },
                  {
                    name: "SALFORD 660",
                    apps: [
                      "Automotive OEM topcoat and refinish",
                      "High-durability exterior coil coatings",
                      "Aerospace coatings",
                      "Powder coatings",
                      "Specialty coatings with superior chalk resistance",
                    ],
                  },
                  {
                    name: "SALFORD 618",
                    apps: [
                      "Interior industrial coatings",
                      "Powder coatings",
                      "Coil coatings",
                      "Container coatings",
                      "Electrodeposition coatings",
                      "Interior architectural coatings",
                    ],
                  },
                  {
                    name: "SALFORD 620",
                    apps: [
                      "Industrial coatings",
                      "Powder coatings",
                      "External & internal architectural coatings",
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
