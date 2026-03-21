"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Cta from "@/components/Landingpage/Cta";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Factory,
  ShieldCheck,
  FlaskConical,
  Zap,
  Recycle,
  Truck,
  Users,
  Globe2,
  Target,
  Leaf,
  Rocket,
  Handshake,
  Cpu,
} from "lucide-react";
const page = () => {
  const [activeTab, setActiveTab] = useState("vision");

  const sustainabilityPoints = [
    {
      icon: <Factory size={28} />,
      text: "Eco-efficient manufacturing processes that meet EU environmental norms.",
    },
    {
      icon: <ShieldCheck size={28} />,
      text: "Adherence to REACH, FDA, and ISO certifications.",
    },
    {
      icon: <Truck size={28} />,
      text: "Safe handling, storage, and distribution across the supply chain.",
    },
    {
      icon: <Users size={28} />,
      text: "Community engagement and responsible trade practices.",
    },
  ];

  const innovationPoints = [
    {
      icon: <FlaskConical size={28} />,
      text: "Next-generation pigment formulations with higher opacity and dispersion.",
    },
    {
      icon: <Recycle size={28} />,
      text: "Low-carbon manufacturing technologies.",
    },
    {
      icon: <Zap size={28} />,
      text: "Customized TiO₂ grades for advanced industries like electronics, green coatings, and food applications.",
    },
    {
      icon: <Cpu size={28} />,
      text: "AI-driven process optimization ensuring consistency, efficiency, and reduced production variability.",
    },
  ];

  const tabContent = {
    values: {
      title: "Our Values",
      text: "Integrity, collaboration, and customer-centricity are at the heart of everything we do. We believe in building partnerships founded on trust, transparency, and innovation.",
    },
    vision: {
      title: "Our Vision",
      text: "To be the most trusted global partner for titanium dioxide—linking German manufacturing excellence with Global industrial innovation through quality, consistency, and collaboration. We envision a future where Salford becomes synonymous with trust, transparency, and transformation in the global titanium dioxide trade.",
    },
    mission: {
      title: "Our Mission",
      text: (
        <>
          To empower Global industries by providing high-performance titanium
          dioxide sourced from Germany’s most advanced manufacturing facilities,
          supported by:
          <ul className="mt-4 space-y-2 list-disc list-inside text-left">
            <li>Uncompromising quality assurance and certification</li>
            <li>
              Efficient logistics and timely supply across in all over world
            </li>
            <li>Strong technical support and product expertise</li>
            <li>Sustainable and environmentally responsible operations</li>
          </ul>
        </>
      ),
    },
  };

  const pillars = [
    {
      icon: <Target size={40} className="text-[#03a9f4] mb-4" />,
      title: "Quality Without Compromise",
      desc: "Our titanium dioxide meets global quality benchmarks, with every batch undergoing stringent laboratory analysis for purity, brightness, and particle size. We uphold German precision in production and Global reliability in delivery.",
    },
    {
      icon: <Leaf size={40} className="text-[#03a9f4] mb-4" />,
      title: "Operational Excellence",
      desc: "We continuously enhance our systems to maintain safe, efficient, and sustainable operations. From factory to port to customer warehouse, our processes are streamlined to ensure timely, reliable, and cost-effective delivery.",
    },
    {
      icon: <Rocket size={40} className="text-[#03a9f4] mb-4" />,
      title: "Growth Through Innovation",
      desc: "Salford actively invests in research, new TiO₂ applications, and process optimization. We are continuously innovating to deliver higher efficiency pigments, better dispersion, and eco-friendly TiO₂ alternatives.",
    },
    {
      icon: <Handshake size={40} className="text-[#03a9f4] mb-4" />,
      title: "Long-Term Partnership Approach",
      desc: "Our business is built on trust, transparency, and collaboration. We don’t just trade—we create value for our partners, fostering long-term industrial relationships that drive mutual success.",
    },
  ];

  const images = [
    "/industry/9.webp",
    "/about/global1.webp",
    "/industry/11.webp",
    "/industry/4.webp",

    "/industry/10.avif",
    "/industry/2.webp",
  ];

  return (
    <>
      {/* ===== Banner Section ===== */}
      <div
        className="relative w-full px-5 md:px-15 bg-cover bg-center h-[50vh] md:h-[100vh] flex flex-col items-start justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/about/Chemicals.webp')",
        }}
      >
        {/* Overlay Gradient */}

        {/* Content */}
        <div className="relative z-10 text-white ">
          <h1 className="text-3xl font-serif text-white md:text-6xl font-extrabold tracking-tight drop-shadow-lg mt-20">
            About Us
          </h1>
          <p className="text-white mt-4 md:max-w-2xl text-sm md:text-lg md:leading-relaxed">
            Partner with a Global Leader Today If you are seeking a Titanium
            Dioxide Manufacturer in Germany Contact our team today to discuss
            your requirements, request product samples, or explore strategic
            partnership opportunities. Together, let’s build a sustainable,
            brighter future for industry—powered by world-class titanium dioxide
            and the trusted partnership of Salford.
          </p>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#E4E7EF] to-[#E4E7EF] py-4 md:py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 md:gap-12 items-center">
          {/* Right Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-md  overflow-hidden ">
            <Image
              src="/about/about1.webp" // Replace with your actual image
              alt="Salford Titanium Dioxide Manufacturing"
              fill
              className="object-cover "
            />
            <div className="absolute inset-0 bg-blue-900/10"></div>
          </div>

          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-md font-semibold tracking-wider uppercase text-blue-700">
              About Salford
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Empowering Industries Through Global Titanium Dioxide Expertise
            </h3>
            <p className="text-black text-lg leading-relaxed">
              Salford stands as a trusted name in the global titanium dioxide
              market—recognized as a leading Titanium Dioxide Manufacturer in
              Germany and a prominent titanium dioxide manufacturer in all over
              world. With a deep-rooted commitment to excellence, innovation,
              and reliability, we connect world-class chemical manufacturing
              expertise with world rapidly advancing industrial ecosystem.
            </p>
            <p className="text-black text-lg leading-relaxed">
              Our journey began with a clear purpose: to bridge the gap between
              international titanium dioxide manufacturing excellence and the
              growing needs of Global industries. Today, Salford is proud to
              deliver premium-grade TiO₂ that fuels innovation and enhances the
              quality of countless products used across the world—from paints
              and plastics to cosmetics, paper, and food.
            </p>
            <p className="text-black text-lg leading-relaxed">
              We don’t just supply materials—we deliver global quality,
              technical reliability, and sustainable growth to the industries
              that depend on us.
            </p>
          </div>
        </div>
      </section>

      {/* section 2 */}

      <section className="relative bg-white py-20 overflow-hidden">
        {/* Background Gradient & Shapes */}

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Left Content */}
            <div className="text-left">
              <h2 className="text-5xl md:text-6xl font-extrabold text-[#1B5AA2] mb-4 leading-tight">
                Our Global Identity
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#003a70] mb-8">
                A German Manufacturer with a Global Vision
              </h3>

              <div className="space-y-6 max-w-2xl text-lg md:text-xl text-black">
                <p>
                  As a Titanium Dioxide Manufacturer in Germany, Salford{" "}
                  embodies the precision, innovation, and quality control
                  standards that define German engineering.
                </p>
                <p>
                  Our expertise in titanium dioxide production allows us to
                  supply , different grades, meeting the diverse requirements of
                  global industries.
                </p>
                <p>
                  From Germany, our operations extend across
                  continents—empowering manufacturers in Europe, the Middle
                  East, and Asia.{" "}
                  <span className="font-bold text-[#03a9f4]">
                    in all over world
                  </span>{" "}
                  has become a cornerstone of our global strategy.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                {["Germany", " All over world", "Middle East", "Asia"].map(
                  (region, idx) => (
                    <div
                      key={idx}
                      className="bg-[#E7F5FF]/80 backdrop-blur-md text-[#003a70] px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                      {region}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Right Side Vertical Carousel */}
            <div className="flex justify-center">
              <Carousel
                opts={{
                  align: "start",
                  axis: "y", // <-- vertical direction
                }}
                plugins={[
                  Autoplay({
                    delay: 2500,
                  }),
                ]}
                className="w-full max-w-sm"
              >
                <CarouselContent className="h-[500px] ">
                  {images.map((src, index) => (
                    <CarouselItem
                      key={index}
                      className="flex items-center justify-center h-[500px]"
                    >
                      <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl">
                        <Image
                          src={src}
                          alt={`Global Image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}

      <section className="bg-[#f3fbff] w-full relative py-24 overflow-hidden">
        {/* Soft Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6f5ff] via-[#f3fbff] to-white pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          {/* --------------------------------------------- */}
          {/* 1️⃣ Our Core Strengths */}
          {/* --------------------------------------------- */}
          <div>
            <h2 className="text-5xl font-extrabold text-[#1B5AA2] mb-3 text-center">
              Our Core Strengths
            </h2>
            <h3 className="text-2xl md:text-3xl text-[#003a70] font-semibold text-center mb-10">
              Built on Global Manufacturing, Driven by Local Insight
            </h3>

            <p className="max-w-3xl mx-auto text-center text-lg text-black mb-16">
              Salford’s foundation rests on a balance of German manufacturing
              precision and Global market understanding. This dual strength
              makes us the preferred choice for industries seeking long-term,
              reliable titanium dioxide supply.
            </p>

            <div className="grid md:grid-cols-3 gap-10">
              {/* 1. German Manufacturing */}
              <div className="bg-yellow-100/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <Factory className="text-[#03a9f4]" size={36} />
                  <h4 className="text-xl font-bold text-[#003a70]">
                    German Manufacturing Excellence
                  </h4>
                </div>
                <p className="text-black text-lg  leading-relaxed">
                  Our production facilities in Germany follow stringent quality
                  control systems and ISO-certified processes, ensuring
                  consistency and reliability. Our chemical engineering
                  expertise guarantees optimum particle size, superior opacity,
                  and brightness— hallmarks of German craftsmanship.
                </p>
              </div>

              {/* 2. Global Market Expertise */}
              <div className="bg-yellow-100/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <Globe2 className="text-[#03a9f4]" size={36} />
                  <h4 className="text-xl font-bold text-[#003a70]">
                    Global Market Expertise
                  </h4>
                </div>
                <p className="text-black text-lg leading-relaxed">
                  As a leading titanium dioxide manufacturer in all over world,
                  we understand the unique demands of Global
                  manufacturers—cost-effectiveness, performance, and
                  consistency. Our on-ground presence ensures timely deliveries
                  and personalized support.
                </p>
              </div>

              {/* 3. Sustainable Supply */}
              <div className="bg-yellow-100/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <Recycle className="text-[#03a9f4]" size={36} />
                  <h4 className="text-xl font-bold text-[#003a70]">
                    Sustainable Sourcing & Supply Chain
                  </h4>
                </div>
                <p className="text-black text-lg  leading-relaxed">
                  We prioritize sustainability through eco-friendly production,
                  efficient logistics, and responsible distribution. Every
                  shipment reflects our promise of quality, reliability, and
                  respect for the environment.
                </p>
              </div>
            </div>
          </div>

          {/* --------------------------------------------- */}
          {/* 2️⃣ Vision & Mission */}
          {/* --------------------------------------------- */}
          <section className="md:py-16 rounded-3xl shadow-inner">
            <div className="max-w-5xl mx-auto text-center px-6">
              <h2 className="text-4xl font-extrabold text-[#1B5AA2] mb-10">
                Our Vision and Mission
              </h2>

              {/* Tabs */}
              <div className="flex justify-center mb-8">
                {["values", "vision", "mission"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-10 py-4 font-semibold text-lg uppercase transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-[#FFD700] text-[#003a70] shadow-md"
                        : "bg-[#003a70] text-white hover:bg-[#02539c]"
                    } ${tab === "values" ? "rounded-l-xl" : ""} ${
                      tab === "mission" ? "rounded-r-xl" : ""
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="max-w-3xl mx-auto text-black text-xl">
                <h3 className="text-2xl font-semibold text-[#003a70] mb-3">
                  {tabContent[activeTab].title}
                </h3>
                <p className="leading-relaxed">{tabContent[activeTab].text}</p>
              </div>
            </div>
          </section>

          {/* --------------------------------------------- */}
          {/* 3️⃣ Strategic Pillars */}
          {/* --------------------------------------------- */}

          <div className="w-full mx-auto text-center ">
            <h2 className="text-5xl font-extrabold text-[#1B5AA2] mb-3">
              Our Strategic Pillars
            </h2>
            <h3 className="text-2xl text-[#003a70] mb-7">
              The Foundation of Our Global Success
            </h3>

            <p className="max-w-3xl mx-auto text-center text-lg text-black mb-16">
              Salford’s foundation rests on a balance of German manufacturing
              precision and Global market understanding. This dual strength
              makes us the preferred choice for industries seeking long-term,
              reliable titanium dioxide supply.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-7 shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Sliding Overlay */}
                  <div className="absolute inset-0 bg-[#1B5AA2] translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-2xl opacity-90"></div>

                  {/* Content */}
                  <div className="relative z-10 text-center transition-all duration-300 group-hover:text-white">
                    <div className=""> {pillar.icon}</div>
                    <h4 className="text-xl font-bold mb-2">{pillar.title}</h4>
                    <p className="text-md ">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* cta */}

      <Cta></Cta>
      {/* section 4 */}

      <section className="relative py-20 bg-[#F7F5C9]/20  overflow-hidden">
        {/* Decorative Background Circles */}
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-[#03a9f4]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[28rem] h-[28rem] bg-[#1B5AA2]/10 rounded-full blur-[200px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-[#1B5AA2] mb-4">
              Sustainability and Responsibility
            </h2>
            <h3 className="text-2xl text-[#003a70] font-semibold">
              Manufacturing with Integrity
            </h3>
          </div>

          {/* Sustainability Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-10 md:p-14 mb-20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#03a9f4]/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                As a Titanium Dioxide Manufacturer in Germany, sustainability is
                at the core of our operations. Our production follows strict
                environmental standards to minimize carbon footprint, reduce
                emissions, and conserve resources.
                <br />
                <br />
                As a titanium dioxide manufacturer in all over world, we extend
                the same responsibility through ethical sourcing, safe
                transportation, and regulatory compliance.
              </p>

              <h4 className="text-2xl font-semibold text-[#003a70] mb-6">
                Our Sustainability Focus Includes:
              </h4>

              <ul className="grid sm:grid-cols-2 gap-6">
                {sustainabilityPoints.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 bg-yellow-500/10 p-4 rounded-2xl  transition-all duration-300"
                  >
                    <div className="text-[#03a9f4] mt-1">{item.icon}</div>
                    <p className="text-black text-lg">{item.text}</p>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-gray-800 font-medium text-lg">
                For Salford , sustainability is not just a policy — it’s a
                commitment to global well-being and industrial balance.
              </p>
            </div>
          </motion.div>

          {/* Innovation Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-10 md:p-14 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B5AA2]/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-4xl font-extrabold text-[#1B5AA2] mb-4">
                Innovation: The Salford Edge
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Salford continues to push the boundaries of titanium dioxide
                performance through innovation. Our R&D initiatives in Germany
                focus on developing smarter, more efficient pigment technologies
                that redefine TiO₂ excellence.
              </p>

              <ul className="grid sm:grid-cols-2 gap-6">
                {innovationPoints.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4  p-4 rounded-2xl bg-yellow-500/10 transition-all duration-300"
                  >
                    <div className="text-[#1B5AA2] mt-1">{item.icon}</div>
                    <p className="text-black text-lg">{item.text}</p>
                  </li>
                ))}
              </ul>

              <p className="mt-10 text-gray-800 font-medium text-lg">
                This innovation mindset ensures that every Salford product
                delivered to in all over world represents the latest in global
                TiO₂ technology — keeping our partners ahead in both quality and
                sustainability.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default page;
