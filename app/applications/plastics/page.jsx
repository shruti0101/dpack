import React from "react";

const Page = () => {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative w-full px-8 bg-cover bg-center h-[50vh] md:h-[90vh] flex flex-col items-start justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/category/plastic.webp')",
        }}
      >
        <div className="bg-black/30 absolute inset-0" />
        <h1 className="relative font-serif text-white text-3xl md:text-5xl font-bold z-10">
          Solutions for Plastics
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-black leading-relaxed">
        <h2 className="text-3xl md:text-3xl font-semibold mb-6">
      Innovating Titanium Dioxide Solutions for High-Performance, Visually Appealing Plastics
        </h2>
        <p className="mb-6 text-xl">
          Since the 1950s, the plastics industry has relied on high-quality titanium dioxide (TiO₂) to overcome challenges related to color, opacity, and weather resistance. As the plastics market continues to evolve, Salford TiO₂ enables the production of thinner films, brighter colors, and improved reflectivity to meet today’s performance and aesthetic demands.

A pioneer in chloride-process TiO₂ technology, Salford stands as a global leader in titanium dioxide innovation. Our advanced TiO₂ solutions deliver exceptional opacity, UV protection, color retention, gloss, brightness, and mechanical strength — enhancing performance across a wide range of plastic systems.
        </p>

        <h3 className="text-4xl text-blue-500 font-semibold mb-6">
        Overview of Common Resin Systems for Plastic Applications
        </h3>
      

        <h3 className="text-2xl font-semibold mb-3">
         Polyolefins (Polyethylene and Polypropylene)
        </h3>
        <p className=" text-lg mb-6 space-y-2">
        Most polyolefin applications involve preparing a TiO₂ concentrate before compounding it into the final product. For these systems, dispersion ease, resistance to yellowing, and optical performance are essential. In thin-film and extrusion coating applications, Salford TiO₂ offers excellent dispersion and minimizes lacing and discoloration even under high processing temperatures.
        </p>

        <h3 className="text-2xl font-semibold mb-4">
       Polyvinyl Chloride (PVC)
        </h3>
        <p className="mb-4 text-lg">
        Selecting the right Salford TiO₂ grade for rigid vinyl depends on both the product’s intended use and the type of stabilizers in the PVC compound. For outdoor products such as building siding and window profiles, Salford TiO₂ ensures gloss retention, resistance to chalking, and long-term color durability. In colored exterior applications, its strong tinting strength and fade resistance enable lasting visual performance and potential toner cost savings.
        </p>

        <h4 className="text-2xl font-semibold mb-2">
        ABS and ABS Blends
        </h4>
        <p className="mb-4 text-lg">
         For ABS and ABS-blend polymers, Salford TiO₂ provides outstanding optical, thermal, and UV stability. Its bluish-white undertone enhances brightness and appearance while minimizing polymer degradation at lower pigment loadings — improving both mechanical properties and material efficiency.
        </p>

        <h4 className="text-2xl font-semibold mb-2">
        PET / PBT
        </h4>
        <p className="mb-4 text-lg">
          <strong>Salford TiO₂</strong> PET and PET-PBT blends are widely used in extrusion and injection molding. Salford TiO₂ ensures consistent whiteness, excellent light stability, and mechanical strength, maintaining the desired finish in packaging, textiles, and industrial components.
        </p>

        <h4 className="text-2xl font-semibold mb-2">Acrylic (PMMA / PMA)</h4>
        <p className="mb-6 text-lg">
       In acrylic polymers such as polymethylacrylate (PMA) and polymethylmethacrylate (PMMA), Salford TiO₂ provides brilliant opacity and uniform dispersion for both opaque and semi-opaque applications. It’s ideal for appliances, signage, lighting, and architectural panels where color consistency and light diffusion are critical.
        </p>

        <h4 className="text-2xl font-semibold mb-4">
        Polyphenylene Sulfide (PPS)
        </h4>
        <p className="mb-4 text-lg">
        Naturally brown in color, PPS requires pigments with a strong bluish undertone to achieve bright whites. Salford TiO₂ offers excellent color development, high stability under heat and mechanical stress, and superior processability — making it suitable for both mass-tone and tint-tone white PPS formulations.
        </p>


        <h4 className="text-2xl font-semibold mb-4">
       Polyamide (Nylon)
        </h4>
        <p className="mb-4 text-lg">
       Polyamide resins require pigments with hydrophobic surfaces, high whiteness, and low metallic impurities. Salford TiO₂ delivers the mechanical strength, thermal stability, and consistent dispersion that high-performance engineering polymers demand.
        </p>


         <h4 className="text-2xl font-semibold mb-4">
      Polycarbonate (PC) and PC Blends
        </h4>
        <p className="mb-4 text-lg">
       Polycarbonate and its blends need a TiO₂ pigment that provides a bright white finish with excellent stability during processing. Salford TiO₂ features advanced surface coatings and thermal modifications that maintain rheological and mechanical integrity in high-temperature molding conditions.
        </p>



         <h4 className="text-2xl font-semibold mb-4">
     Polystyrene (PS and HIPS)
        </h4>
        <p className="mb-4 text-lg">
     Salford TiO₂ grades are ideal for coloring general-purpose and high-impact polystyrene applications. They deliver a maximum bluish-white undertone, strong tinting strength, thermal stability, and light discoloration resistance — ensuring both visual appeal and processing durability in end-use products.
        </p>
      </div>








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



    </div>
  );
};

export default Page;
