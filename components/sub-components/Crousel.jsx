"use client";
import { landingPageSecondSectionProduct } from "@/Data";
import React, { useState, useEffect } from "react";

const AUTOPLAY_DELAY = 3000;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Responsive slidesToShow
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const totalSlides = Math.ceil(
    landingPageSecondSectionProduct.length / slidesToShow
  );

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(nextSlide, AUTOPLAY_DELAY);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const transformStyle = {
    transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
    transition: "transform 0.5s ease-in-out",
  };

  return (
    <div className="relative overflow-hidden rounded-xl bg-white p-4">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={transformStyle}
      >
        {landingPageSecondSectionProduct.map((product, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-2`}
          >
            <div className="group border border-gray-200 rounded-lg overflow-hidden flex flex-col items-center h-full p-4 hover:shadow-lg transition duration-300 transform hover:scale-[1.02]">
              <img
                src={product.image}
                alt={product.title}
                title={product.title}
                className="w-full h-52 object-cover mb-3 rounded-lg"
              />
              <div className="text-base font-semibold text-gray-800 text-center mt-1 group-hover:text-blue-700">
                {product.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-0 z-10 p-3 bg-blue-600 text-white rounded-r-xl transform -translate-y-1/2 opacity-80 hover:opacity-100 transition shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute top-1/2 right-0 z-10 p-3 bg-blue-600 text-white rounded-l-xl transform -translate-y-1/2 opacity-80 hover:opacity-100 transition shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-indigo-600 scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
