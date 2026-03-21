"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Landingpage/Navbar";
import Footer from "@/components/Landingpage/Footer";


export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Hide Navbar/Footer on /studio routes
const hiddenRoutes = ["/studio", "/login", "/admin"];
const hideLayout = hiddenRoutes.some((route) => pathname.startsWith(route));

  

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
