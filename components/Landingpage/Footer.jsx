"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  { name: "Dunnage Air Bags", link: "/products" },
  { name: "Air Column Bags", link: "/products" },
  { name: "Woven Air Bags", link: "/products" },
];

const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: "url('/footerbg.png')" }}
      className="relative h-[70vh] bg-cover bg-center text-gray-300 pt-20 pb-10 overflow-hidden"
    >
      {/* --- Premium Overlay --- */}
      <div className="absolute inset-0 bg-[#0A1F3C]/70"></div>
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#2F4FA2] via-[#59B347] to-[#2F4FA2] opacity-90"></div>
      <div className="absolute inset-0 bg-[url('/patterns/noise.webp')] opacity-20 mix-blend-overlay"></div>

      {/* --- Main Content --- */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* --- Logo & About --- */}
          <div>
            <div className="mb-6">
              <div className="p-[6px] rounded-lg bg-white inline-block">
                <Image
                  src="/logo.webp"
                  alt="D Pack Logo"
                  width={170}
                  height={90}
                  className="rounded-md brightness-110"
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white max-w-xs">
              Leading Dunnage Bag Manufacturer delivering high-performance cargo
              securing solutions for logistics, shipping, and global industries.
            </p>
          </div>

          {/* --- Quick Links --- */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2 tracking-wide relative inline-block after:content-[''] after:block after:h-[2px] after:w-12 after:bg-gradient-to-r from-[#2F4FA2] to-[#59B347] after:mt-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-[14px] text-white uppercase tracking-wide">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about-us" },
                { name: "Products", href: "/products" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="relative group inline-block transition-all duration-300"
                  >
                    <span className="group-hover:text-[#59B347]">
                      {item.name}
                    </span>
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gradient-to-r from-[#2F4FA2] to-[#59B347] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Explore More --- */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2 tracking-wide relative inline-block after:content-[''] after:block after:h-[2px] after:w-12 after:bg-gradient-to-r from-[#2F4FA2] to-[#59B347] after:mt-2">
              Explore More
            </h3>
            <ul className="space-y-3 text-[14px] text-white uppercase tracking-wide">
              {[
                { name: "Industries", href: "/industries" },
                { name: "Applications", href: "/applications" },
                { name: "Contact Us", href: "/contact-us" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="relative group inline-block transition-all duration-300"
                  >
                    <span className="group-hover:text-[#59B347]">
                      {item.name}
                    </span>
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gradient-to-r from-[#2F4FA2] to-[#59B347] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Products --- */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2 tracking-wide relative inline-block after:content-[''] after:block after:h-[2px] after:w-12 after:bg-gradient-to-r from-[#2F4FA2] to-[#59B347] after:mt-2">
              Our Products
            </h3>
            <ul className="space-y-3 text-[14px] text-white uppercase tracking-wide">
              {products.map((p) => (
                <li key={p.name}>
                  <Link
                    href={p.link}
                    className="relative group inline-block transition-all duration-300"
                  >
                    <span className="group-hover:text-[#59B347]">
                      {p.name}
                    </span>
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gradient-to-r from-[#2F4FA2] to-[#59B347] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* --- Divider --- */}
        <div className="my-8 border-t border-white/10"></div>

        {/* --- Bottom Bar --- */}
        <div className="text-center text-xs sm:text-sm text-white">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#59B347] font-medium tracking-wide">
            DPACK
          </span>{" "}
          — All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;