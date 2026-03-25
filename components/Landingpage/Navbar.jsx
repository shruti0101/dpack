"use client";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Popup from "./Popup";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const menuItems = [
    { label: "About Us", link: "/about-us" },
    {
      label: "Products",
      link: "/products",
      dropdown: [
        { label: "Dunnage Bags", link: "/products/dunnage-bags" },
        // { label: "Solutions for Laminates", link: "/tio2-for-laminates" },
        // { label: "Solutions for Coatings", link: "/tio2-for-coatings" },
      ],
    },
    { label: "Industries", link: "/industries" },
    { label: "Applications", link: "/applications" },
    { label: "News & Events", link: "/news-events" },
  ];

  return (
    <>
      {/* FLOATING NAVBAR */}
      <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4">

        <div className="flex items-center justify-between bg-white/70 backdrop-blur-xl border border-white/30 shadow-2xl rounded-full px-6 ">

          {/* LOGO */}
          <Link href="/">
            <Image src="/logo.webp" width={170} height={100} alt="logo" />
          </Link>

          {/* MENU */}
          <nav className="hidden lg:flex text-xl items-center gap-2">

            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.link}
                  className="px-4 py-2 rounded-full relative z-10 flex items-center gap-1 text-black text-lg font-medium"
                >
                  {item.label}

                  {item.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        openMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* 🔥 HOVER BACKGROUND (KEY PREMIUM PART) */}
                {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D75F3B] to-[#E1957D] opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></div> */}

                {/* 🔥 ACTIVE PILL */}
                {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D75F3B] to-[#E1957D] opacity-0 group-hover:text-white group-hover:opacity-20 transition duration-300"></div> */}

                {/* DROPDOWN */}
                {item.dropdown && openMenu === item.label && (
                  <div className="absolute top-[90%] left-1/2 -translate-x-1/2 w-72 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-3 border border-white/30">
                    {item.dropdown.map((d, i) => (
                      <Link
                        key={i}
                        href={d.link}
                        className="block px-4 py-2 rounded-lg hover:bg-blue-100  transition"
                      >
                        {d.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">

            <button
              onClick={() => setIsFormOpen(true)}
              className="px-5 py-3 rounded-full bg-gradient-to-r from-[#2F4FA2] to-[#59B347] text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Request Quote
            </button>

            <Link
              href="/contact-us"
              className="px-5 py-2 rounded-full border border-blue-600 hover:border-[#0082C8] hover:text-[#0082C8] transition"
            >
              Contact Us
            </Link>

          </div>

          {/* MOBILE */}
          <button className="lg:hidden" onClick={() => setMobileOpen(true)}>
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          <div className="relative w-72 bg-white h-full shadow-xl p-6">
            <div className="flex justify-between mb-6">
              <Image src="/logo.webp" width={90} height={50} alt="" />
              <X onClick={() => setMobileOpen(false)} />
            </div>

            {menuItems.map((item, idx) => (
              <Link key={idx} href={item.link} className="block py-3 border-b">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* POPUP */}
      {isFormOpen && (
        <Popup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}
    </>
  );
}