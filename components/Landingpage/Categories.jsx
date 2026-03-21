// "use client";
// import React, { useRef, useEffect, useState } from "react";

// export default function ProductCategoriesSection() {
//   const sectionRef = useRef(null);
//   const scrollRef = useRef(null);
//   const totalScrollRef = useRef(0);
//   const tickingRef = useRef(false);
//   const [sectionHeight, setSectionHeight] = useState(800);

 
//   const categories = [
//     { name: "Plastics", src: "/plastics.webp" },
//     { name: "Paper & Paper Laminates", src: "/paper.webp" },
//     { name: "Pharma & Cosmetics ", src: "/phrama.webp" },
//     { name: "Inks", src: "/inks.webp" },
//     { name: "Paints & Coatings", src: "/coatings.webp" },
//      { name: "Industry Catalyst", src: "/catalyst.webp" },
//   ];

//   // Build cards: for each category show image card then colored text card
//   const cards = categories.flatMap((c) => [
//     { type: "img", name: c.name, src: c.src },
//     { type: "text", name: c.name },
//   ]);

//   useEffect(() => {
//     const sectionEl = sectionRef.current;
//     const scrollEl = scrollRef.current;
//     if (!sectionEl || !scrollEl) return;

//     // measure sizes and set section height
//     const updateSizes = () => {
//       // total horizontal scroll needed (scrollable width minus viewport width)
//       const totalHorizontal = Math.max(
//         0,
//         scrollEl.scrollWidth - window.innerWidth
//       );
//       totalScrollRef.current = totalHorizontal;
//       // vertical space needed so that vertical scroll maps exactly to horizontal travel
//       setSectionHeight(totalHorizontal + window.innerHeight);
//     };

//     // Wait until all images inside scrollEl are loaded (so scrollWidth is accurate)
//     const waitForImages = () => {
//       const imgs = scrollEl.querySelectorAll("img");
//       if (!imgs.length) {
//         updateSizes();
//         return;
//       }
//       let loaded = 0;
//       imgs.forEach((img) => {
//         if (img.complete) {
//           loaded++;
//         } else {
//           img.addEventListener(
//             "load",
//             () => {
//               loaded++;
//               if (loaded === imgs.length) updateSizes();
//             },
//             { once: true }
//           );
//           img.addEventListener(
//             "error",
//             () => {
//               loaded++;
//               if (loaded === imgs.length) updateSizes();
//             },
//             { once: true }
//           );
//         }
//       });
//       if (loaded === imgs.length) updateSizes();
//     };

//     waitForImages();
  
//     const onResize = () => {
//       updateSizes();
     
//       handleRAF();
//     };
//     window.addEventListener("resize", onResize);

    
//     const handleRAF = () => {
 
//       const sectionTop = sectionEl.getBoundingClientRect().top + window.scrollY;
//       const scrollY = window.scrollY;

//       const totalH = totalScrollRef.current;
//       if (totalH <= 0) {
//         tickingRef.current = false;
//         return;
//       }

//       // when user is inside the section, progress goes from 0 -> 1 over totalH px
//       const rawProgress = (scrollY - sectionTop) / totalH;
//       const progress = Math.min(Math.max(rawProgress, 0), 1);

//       scrollEl.scrollLeft = progress * totalH;
//       tickingRef.current = false;
//     };

//     const onScroll = () => {
//       if (tickingRef.current) return;
//       tickingRef.current = true;
//       requestAnimationFrame(handleRAF);
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });

//     updateSizes();
//     handleRAF();

//     return () => {
//       window.removeEventListener("resize", onResize);
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full bg-gradient-to-b py-15 from-white to-gray-50"
//       style={{ height: sectionHeight }}
//     >
//       <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10 text-center">
//         <h2 className="text-3xl md:text-6xl mb-2 font-bold text-[#123745] drop-shadow-sm">
//           Our Categories
//         </h2>
// <div className="relative w-50 mx-auto h-1.5 bg-[#03a9f4]/30 rounded mb-8 overflow-hidden">
//   <div className="absolute inset-0 bg-gradient-to-r from-[#03a9f4] via-[#004AAC] to-[#03a9f4] animate-slide"></div>
// </div>      </div>

//       {/* sticky horizontal scroller */}
//       <div
//         ref={scrollRef}
//         className="sticky top-18 left-0 w-full h-screen flex items-center overflow-hidden"
//         style={{ willChange: "scroll-position" }}
//       >
//         <div className="flex items-center px-8 md:px-16">
//           {cards.map((card, i) => (
//             <div
//               key={i}
//               className="flex-shrink-0 w-[280px] md:w-[340px] lg:w-[380px] h-[480px] mx-6 rounded-2xl overflow-hidden
//                          transform transition-transform duration-400 ease-out hover:scale-105 hover:shadow-2xl"
//               style={{ boxShadow: "0 12px 30px rgba(8,15,40,0.08)" }}
//             >
//               {card.type === "img" ? (
//                 <img
//                   src={card.src}
//                   alt={card.name}
//                   className="w-full h-full object-cover"
//                   draggable={false}
//                 />
//               ) : (
//                 <div
//                   className="w-full h-full bg-gradient-to-br from-[#00537B]  text-white
//                                 flex flex-col items-center justify-center p-6"
//                 >
//                   <svg
//                     width="70"
//                     height="70"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="opacity-90"
//                     role="img"
//                     aria-label="Ti O two chemical label"
//                   >
//                     <circle
//                       cx="12"
//                       cy="12"
//                       r="11"
//                       fill="rgba(255,255,255,0.03)"
//                     />

//                     <text
//                       x="12"
//                       y="14"
//                       textAnchor="middle"
//                       fontFamily="Arial, Helvetica, sans-serif"
//                       fontWeight="700"
//                       fontSize="11.5"
//                       fill="white"
//                       dominantBaseline="middle"
//                     >
//                       TiO
//                       <tspan fontSize="5" baselineShift="sub">
//                         2
//                       </tspan>
//                     </text>
//                   </svg>

//                   <h2 className="text-center mt-5 text-[#00537B] text-2xl md:text-4xl font-semibold tracking-wide">
//                     {card.name}
//                   </h2>
//                 </div>
//               )}
//             </div>
//           ))}
         
//           <div style={{ width: 24 }} />
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
 import { ClipboardList, Box, Settings } from "lucide-react";


import "swiper/css";
import "swiper/css/navigation";

export default function ProductSection() {

  const products1 = [
    {
      img: "/check2.png",
      title: "Standard Dunnage Air Bag",
      size: "For Container & Truck Load Securing",
    },
    {
      img: "/check1.webp",
      title: "Heavy Duty Air Bag",
      size: "High Pressure Load Stabilization",
    },
    {
      img: "/crate3.png",
      title: "Paper Dunnage Bags",
      size: "Eco-Friendly Transport Protection",
    },
    {
      img: "/crate1.png",
      title: "Woven Air Bags",
      size: "Reusable & Durable Packaging",
    },
    {
      img: "/crate1.png",
      title: "Custom Size Air Bags",
      size: "Tailored Cargo Safety Solutions",
    },
  ];

   const products2 = [
    {
      img: "/check2.png",
      title: "Standard Dunnage Air Bag",
      size: "For Container & Truck Load Securing",
    },
    {
      img: "/check1.webp",
      title: "Heavy Duty Air Bag",
      size: "High Pressure Load Stabilization",
    },
    {
      img: "/crate3.png",
      title: "Paper Dunnage Bags",
      size: "Eco-Friendly Transport Protection",
    },
    {
      img: "/crate1.png",
      title: "Woven Air Bags",
      size: "Reusable & Durable Packaging",
    },
    {
      img: "/crate1.png",
      title: "Custom Size Air Bags",
      size: "Tailored Cargo Safety Solutions",
    },
  ];

    const products3 = [
    {
      img: "/check2.png",
      title: "Standard Dunnage Air Bag",
      size: "For Container & Truck Load Securing",
    },
    {
      img: "/check1.webp",
      title: "Heavy Duty Air Bag",
      size: "High Pressure Load Stabilization",
    },
    {
      img: "/crate3.png",
      title: "Paper Dunnage Bags",
      size: "Eco-Friendly Transport Protection",
    },
    {
      img: "/crate1.png",
      title: "Woven Air Bags",
      size: "Reusable & Durable Packaging",
    },
    {
      img: "/crate1.png",
      title: "Custom Size Air Bags",
      size: "Tailored Cargo Safety Solutions",
    },
  ];

  return (

    <>
    
    <section className="bg-orange-50 py-20 px-10">

      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-[34px] font-semibold">
          <span className="text-orange-600">D PACK</span>{" "}
          <span className="text-orange-400 uppercase">Product Collections</span>
        </h2>
        <p className="text-gray-600 text-[16px] mt-2">
          Advanced Dunnage Air Bags for Safe & Secure Cargo Transportation
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto flex gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="w-[35%]">

          <h3 className="text-[38px] font-semibold text-orange-600 mb-5">
            Dunnage Air Bags
          </h3>

          <p className="text-gray-600 text-[18px] leading-[32px] mb-6">
            Our premium dunnage air bags are designed to prevent cargo movement during transit,
            ensuring maximum safety for goods across road, rail, and sea transportation.
          </p>

          <p className="text-gray-600 text-[18px] leading-[32px] mb-6">
            Engineered with high-strength materials, they provide reliable void filling,
            shock absorption, and load stabilization for export and logistics industries.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4 cursor-pointer group">
            <span className="text-orange-600 text-[18px] font-medium group-hover:underline">
              View All
            </span>

            <div className="w-10 h-10 border border-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition">
              →
            </div>
          </div>

        </div>

        {/* RIGHT SIDE - SWIPER */}
        <div className="w-[65%] relative overflow-hidden">

          <div className="bg-[#F8F8F8] rounded-[60px] px-16 py-14 relative">

            {/* CUSTOM ARROWS */}
            <button className="swiper-prev absolute left-[-25px] top-1/2 -translate-y-1/2 w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center shadow z-10 hover:bg-orange-500 hover:text-white transition">
              <ChevronLeft />
            </button>

            <button className="swiper-next absolute right-[-25px] top-1/2 -translate-y-1/2 w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center shadow z-10 hover:bg-orange-500 hover:text-white transition">
              <ChevronRight />
            </button>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".swiper-prev",
                nextEl: ".swiper-next",
              }}
              spaceBetween={40}
              slidesPerView={3}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              centeredSlides={true}
              loop={true}
              className="!overflow-visible"
            >
              {products1.map((item, i) => (
                <SwiperSlide key={i}>
                  {({ isActive }) => (
                    <div
                      className={`text-center transition-all duration-500 ${
                        isActive
                          ? "scale-140 opacity-100"
                          : "scale-90"
                      }`}
                    >
                      <Image
                        src={item.img}
                        alt=""
                        width={520}
                        height={460}
                        className="mx-auto object-contain"
                      />

                      <h4 className={`mt-6 text-[14px] font-semibold ${
                        isActive ? "text-orange-600" : "text-gray-700"
                      }`}>
                        {item.title}
                      </h4>

                      <p className="text-[13px] text-gray-500 mt-1">
                        {item.size}
                      </p>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>

      </div>
    </section>

{/* second */}

  <section className="bg-white py-9 px-10">

     

      <div className="max-w-[1400px] mx-auto flex gap-16 items-center">




   {/* RIGHT SIDE - SWIPER */}
        <div className="w-[65%] relative overflow-hidden">

          <div className="bg-[#F8F8F8] rounded-[60px] px-16 py-14 relative">

            {/* CUSTOM ARROWS */}
            <button className="swiper-prev absolute left-[-25px] top-1/2 -translate-y-1/2 w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center shadow z-10 hover:bg-orange-500 hover:text-white transition">
              <ChevronLeft />
            </button>

            <button className="swiper-next absolute right-[-25px] top-1/2 -translate-y-1/2 w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center shadow z-10 hover:bg-orange-500 hover:text-white transition">
              <ChevronRight />
            </button>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".swiper-prev",
                nextEl: ".swiper-next",
              }}
              spaceBetween={40}
              slidesPerView={3}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              centeredSlides={true}
              loop={true}
              className="!overflow-visible"
            >
              {products2.map((item, i) => (
                <SwiperSlide key={i}>
                  {({ isActive }) => (
                    <div
                      className={`text-center transition-all duration-500 ${
                        isActive
                          ? "scale-140 opacity-100"
                          : "scale-90"
                      }`}
                    >
                      <Image
                        src={item.img}
                        alt=""
                        width={520}
                        height={460}
                        className="mx-auto object-contain"
                      />

                      <h4 className={`mt-6 text-[14px] font-semibold ${
                        isActive ? "text-orange-600" : "text-gray-700"
                      }`}>
                        {item.title}
                      </h4>

                      <p className="text-[13px] text-gray-500 mt-1">
                        {item.size}
                      </p>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>



        {/* LEFT SIDE */}
        <div className="w-[35%]">

          <h3 className="text-[38px] font-semibold text-orange-600 mb-5">
            Dunnage Air Bags
          </h3>

          <p className="text-gray-600 text-[18px] leading-[32px] mb-6">
            Our premium dunnage air bags are designed to prevent cargo movement during transit,
            ensuring maximum safety for goods across road, rail, and sea transportation.
          </p>

          <p className="text-gray-600 text-[18px] leading-[32px] mb-6">
            Engineered with high-strength materials, they provide reliable void filling,
            shock absorption, and load stabilization for export and logistics industries.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4 cursor-pointer group">
            <span className="text-orange-600 text-[18px] font-medium group-hover:underline">
              View All
            </span>

            <div className="w-10 h-10 border border-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition">
              →
            </div>
          </div>

        </div>

     

      </div>
    </section>

    {/* third */}


     <section className="bg-orange-50 py-9 px-10">

     

      <div className="max-w-[1400px] mx-auto flex gap-16 items-center">


        {/* LEFT SIDE */}
        <div className="w-[35%]">

          <h3 className="text-[38px] font-semibold text-orange-600 mb-5">
            Dunnage Air Bags
          </h3>

          <p className="text-gray-600 text-[18px] leading-[32px] mb-6">
            Our premium dunnage air bags are designed to prevent cargo movement during transit,
            ensuring maximum safety for goods across road, rail, and sea transportation.
          </p>

          <p className="text-gray-600 text-[18px] leading-[32px] mb-6">
            Engineered with high-strength materials, they provide reliable void filling,
            shock absorption, and load stabilization for export and logistics industries.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4 cursor-pointer group">
            <span className="text-orange-600 text-[18px] font-medium group-hover:underline">
              View All
            </span>

            <div className="w-10 h-10 border border-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition">
              →
            </div>
          </div>

        </div>


   {/* RIGHT SIDE - SWIPER */}
        <div className="w-[65%] relative overflow-hidden">

          <div className="bg-[#F8F8F8] rounded-[60px] px-16 py-14 relative">

            {/* CUSTOM ARROWS */}
            <button className="swiper-prev absolute left-[-25px] top-1/2 -translate-y-1/2 w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center shadow z-10 hover:bg-orange-500 hover:text-white transition">
              <ChevronLeft />
            </button>

            <button className="swiper-next absolute right-[-25px] top-1/2 -translate-y-1/2 w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center shadow z-10 hover:bg-orange-500 hover:text-white transition">
              <ChevronRight />
            </button>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".swiper-prev",
                nextEl: ".swiper-next",
              }}
              spaceBetween={40}
              slidesPerView={3}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              centeredSlides={true}
              loop={true}
              className="!overflow-visible"
            >
              {products2.map((item, i) => (
                <SwiperSlide key={i}>
                  {({ isActive }) => (
                    <div
                      className={`text-center transition-all duration-500 ${
                        isActive
                          ? "scale-140 opacity-100"
                          : "scale-90"
                      }`}
                    >
                      <Image
                        src={item.img}
                        alt=""
                        width={520}
                        height={460}
                        className="mx-auto object-contain"
                      />

                      <h4 className={`mt-6 text-[14px] font-semibold ${
                        isActive ? "text-orange-600" : "text-gray-700"
                      }`}>
                        {item.title}
                      </h4>

                      <p className="text-[13px] text-gray-500 mt-1">
                        {item.size}
                      </p>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>




     

      </div>
    </section>

    {/* after cat section */}


 <section
      className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/bgcheck3.webp)" }}
    >

     

      {/* MAIN BOX */}
      <div className="relative max-w-6xl mt-70 w-full bg-[#F4F4F4] px-12 py-7 shadow-md">

        {/* HEADING */}
        <h2 className="text-center text-[32px] font-semibold text-[#0F3B5F] mb-10">
          Solutions Designed for Your Success
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3">

          {/* CARD 1 */}
          <div className="text-center px-8 py-10 border border-gray-300">

            <ClipboardList
              size={72}
              strokeWidth={1.5}
              className="mx-auto text-orange-500 mb-6"
            />

            <h3 className="text-[18px] font-bold text-[#0F3B5F] mb-4 leading-tight">
              VENDOR-MANAGED <br /> INVENTORY
            </h3>

            <p className="text-[17px] text-black leading-6">
              An effective distribution strategy is a critical element to your bottom line.
              Our cost-efficient vendor managed inventory solutions enable you to fulfill your
              commitments to your customers, anywhere in the world, on your timeline.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="text-center px-8 py-10 border-y border-gray-300 md:border-y-0 md:border border-gray-300">

            <Box
              size={72}
              strokeWidth={1.5}
              className="mx-auto text-orange-500 mb-6"
            />

            <h3 className="text-[18px] font-bold text-[#0F3B5F] mb-4 leading-tight">
              PACKAGE DESIGN <br /> SERVICES
            </h3>

            <p className="text-[17px] text-black leading-6">
              Whether you need a custom bag or optimized stock bag to meet your exact needs,
              we employ a team of experts to get you what you need as fast as possible.
              quality proven excellence
            </p>
          </div>

          {/* CARD 3 */}
          <div className="text-center px-8 py-10 border border-gray-300">

            <Settings
              size={72}
              strokeWidth={1.5}
              className="mx-auto text-orange-500 mb-6"
            />

            <h3 className="text-[18px] font-bold text-[#0F3B5F] mb-4 leading-tight">
              BAG FILLING <br /> EQUIPMENT
            </h3>

            <p className="text-[17px] text-black leading-6">
              Optimize your packaging process and streamline your production line with our
              innovative bag filling solutions. Efficiently fill, seal, and palletize a broad
              range of powders, flakes, and granular products.
            </p>
          </div>

        </div>
      </div>
    </section>


    </>
  );
}