"use client";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";



/* Carousel data */
const industries = [
  { image: "/industry/1.webp", name: "Agriculture"  },
  { image: "/industry/3.webp", name: "Oil & Gas Industry" },
  { image: "/industry/4.webp", name: "Plastics & Polymers" },
  { image: "/industry/5.webp", name: "Building And Homes" },
  { image: "/industry/8.webp", name: "Laminates" },
  { image: "/industry/6.webp", name: "Medical/Personal Care" },
  { image: "/industry/7.webp", name: "Footwear & Apparel" },
];

const ServicesCarousel = () => {


  return (
    <section className="py-3 mb-15 bg-gradient-to-br from-white to-blue-50">
      {/* Heading */}
      <div
        className="text-center max-w-3xl mx-auto mb-16 px-4"
        data-aos="fade-up"
      >
        <div className="flex items-center justify-center">
          <div className="w-10 h-1 bg-sky-500 mr-3 rounded-full" />
          <h3 className="text-sky-600 font-bold uppercase tracking-[0.15em] text-sm sm:text-base">
            Our Services
          </h3>
          <div className="w-10 h-1 bg-sky-500 ml-3 rounded-full" />
        </div>

        <h2 className="relative inline-block font-bold text-[#1E2939] text-3xl sm:text-3xl md:text-5xl leading-snug group">
         Industries We Serve
          <br />
      
        </h2>
         <p className="text-black mx-auto mt-2 text-base sm:text-lg max-w-lg">
              Delivering reliable solutions across diverse industries with unmatched quality and expertise.
            </p>
      </div>

      {/* Carousel */}
      <div className="md:max-w-6xl mx-auto ">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000 }}
          loop
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {industries.map((service, index) => (
            <SwiperSlide key={index}>
              {/* Make each card clickable */}
              <div >
                <div className="relative h-[420px] sm:h-[440px] md:h-[460px] w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-xl group ">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10 z-10 transition-opacity duration-300 group-hover:bg-black/20" />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#1869C1] via-[#7DAADA]/30 to-transparent opacity-90 group-hover:h-full transition-all duration-500 z-20" />
                  {/* Title */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 text-white text-center transition-all duration-500 group-hover:bottom-18">
                    <h3 className="text-3xl font-extrabold tracking-wide drop-shadow-md">
                      {service.name}
                    </h3>
                  </div>
              
                  {/* Glow Border */}
                  <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-blue-400 transition-all duration-500 z-50 pointer-events-none" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesCarousel;
