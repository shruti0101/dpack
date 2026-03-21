"use client";
import axios from "axios";
import ContactForm from "@/components/Landingpage/Popup";
import PrimaryButton from "@/components/sub-components/PrimaryButton";

import { advantages, countries, products, testimonial } from "@/Data";
import { CheckIcon } from "lucide-react";
import React, { useState } from "react";
const IMAGE_HERO_FACTORY = "/landing-page/195.jpg";

import { advantagesCard } from "@/components/sub-components/data";
import Image from "next/image";
import Crousel from "@/components/sub-components/Crousel";
import HeroForm from "@/components/Landingpage/HeroForm";
import { useRouter } from "next/navigation";
import Whatsapp from "@/components/Whatsapp";
export default function SalfordLandingPage() {
  const [openForm, setOpenForm] = useState(false);

  // for form



  // form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();   
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");
  setLoading(true);

  try {
    const finalMessage =
      message.trim() === "" ? "User did not enter a message." : message;

    const formData = {
      platform: "Salford Landing page",
      platformEmail: "sales@aanyaenterprise.com",
      name,
      email,
      place: country,
      phone,
      message: finalMessage, // ⬅ backend will not break now
    };

    const { data } = await axios.post(
      "https://brandbnalo.com/api/form/add",
      formData
    );

    if (data?.success) {
              router.push("/thankyou");   
      setLoading(false);
      setStatus("✅ Message sent successfully!");
      setName("");
      setEmail("");
      setCountry("");
      setPhone("");
      setMessage("");
    } else {
      setStatus("❌ Failed to send. Please check your form or try again.");
    }
  } catch (error) {
    console.log(error);
    setStatus(error?.message);
  }
};


  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 lg:mt-14">
      <header
        className="relative bg-gray-900 text-white pt-24 pb-32 overflow-hidden"
        style={{
          backgroundImage: `url(${IMAGE_HERO_FACTORY})`,
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
        }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <p className="text-blue-400 mt-4 font-semibold text-base sm:text-lg mb-4 uppercase tracking-widest">
            Premium Global Titanium Dioxide Manufacturing
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Delivering High-Quality TiO₂ for{" "}
            <span className="text-blue-400">
              Paints, Coatings, Plastics & Industrial Use
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Consistent, high-performance TiO₂ pigments and solutions, backed by
            years of export expertise and global standards.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              className="px-2 py-1 lg:px-8 lg:py-3 text-lg font-bold text-white bg-blue-600 rounded-lg shadow-xl hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02] active:scale-100 uppercase tracking-wider"
              onClick={() => setOpenForm(true)}
            >
              Request a Quote
            </button>

            <a
              href="/contact-us"
              className="px-8 py-3 text-lg font-medium text-blue-600 border-2 border-blue-600 rounded-lg bg-blue-50 transition duration-300"
            >
              Explore Our Featured Grades
            </a>
          </div>
        </div>
      </header>
      {/* hero form  */}
      <HeroForm />

      {/* Products Section */}
      <section className="relative py-10 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          {/* Heading */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Our <span className="text-blue-600">Products</span>
            </h2>
            <p className="text-black max-w-2xl mx-auto text-lg">
              Explore our range of top-quality products crafted with innovation
              and precision. Each product reflects our commitment to
              performance, durability, and trust.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(({ title, para, image }, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={image}
                    width={400}
                    height={400}
                    alt={title}
                    className="rounded-2xl w-full h-auto object-cover mb-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  <h3 className=" text-base md:text-xl font-bold text-black mb-2 group-hover:text-blue-600">
                    {title}
                  </h3>
                  <p className="  text-black leading-relaxed">{para}</p>

                  {/* Centered Button */}
                  <button
                    onClick={() => setOpenForm(true)}
                    className="bg-red-500 py-2 px-5 text-white cursor-pointer rounded mt-4 font-medium shadow-md hover:bg-red-600 transition-all duration-300"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* After Products Paragraph */}
          <div
            className="mt-8 text-center max-w-3xl mx-auto"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Excellence Beyond Expectations
            </h3>
            <p className="text-black text-sm md:text-lg leading-relaxed">
              Our products are designed to meet the highest standards of
              performance and reliability. We believe in delivering value that
              lasts — helping our clients stay ahead in a rapidly evolving
              world. With every innovation, we aim to create solutions that
              truly make a difference.
            </p>
          </div>
        </div>

        {/* Decorative Background Blur */}
        <div className="absolute -top-20 left-10 w-60 h-60 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
      </section>

      {/* second   */}
      <section className="py-12  border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wide">
            Premium Titanium Dioxide Manufacturing Solutions - Salford TiO₂
            Experts
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Paints, Coatings, Plastics & Industrial Use
          </h2>

          <Crousel />
          <p className="text-black text-sm mt-6 italic">
            Salford is a global leader in Titanium Dioxide manufacturing,
            dedicated to supplying high-quality TiO₂ (Titanium Dioxide) for
            industrial applications worldwide. With advanced TiO₂ manufacture
            processes and a strong international network, we provide reliable,
            high-performance Titanium Dioxide to meet the needs of paints,
            coatings, plastics, paper, textiles, cosmetics, and food industries.
            Our commitment to quality, innovative solutions, and customer
            satisfaction has established Salford as a trusted partner for
            manufacturers seeking world-class Titanium Dioxide supply.
          </p>
        </div>
      </section>

      {/* why whoose us  */}
      <section className="py-3 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-5 md:mb-10">
            <h2 className="text-3xl sm:text-4xl  font-extrabold text-gray-900">
              Why Businesses Choose{" "}
              <span className="text-blue-600">Salford</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Advantage List */}
            <div className="p-6 bg-gray-50 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-3 border-gray-200">
                Key Advantages
              </h3>
              <ul className="space-y-4">
                {advantages.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-lg text-gray-700"
                  >
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side: Call to Action Block */}
            <div className="p-8 bg-blue-500 rounded-xl shadow-2xl text-white transform hover:scale-[1.01] transition duration-300">
              <h3 className="text-2xl font-bold mb-4">
                Get High-Performance TiO₂ for Your Manufacturing Needs
              </h3>
              <p className="text-blue-100 text-lg mb-6">
                Looking for premium Titanium Dioxide suitable for your
                application? Our experts can guide you to the{" "}
                <span className="font-bold">ideal grade and specification</span>{" "}
                based on your industry use.
              </p>

              {/* CTA Button */}
              <button
                onClick={() => setOpenForm(true)}
                className="inline-block px-8 py-3 text-lg font-bold text-blue-600 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-300 uppercase tracking-wider"
              >
                Speak to Our Experts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* advanced cards  */}
      <section className="py-8 md:py-15 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
              The Salford Advantage: Your{" "}
              <span className="text-blue-600">Trusted TiO₂ Partner</span>
            </h2>
            <p className="text-md mt-3 text-black  max-w-3xl mx-auto">
              Salford is a global leader in Titanium Dioxide manufacturing,
              dedicated to supplying high-quality TiO₂ for industrial
              applications worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {advantagesCard.map(({ title, description, icons }, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-4 p-5 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-200"
              >
                <div className="flex-shrink-0 text-blue-600 text-3xl ">
                  {icons}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-base">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* testimonial  */}
      <section className="py-8 md:py-13 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Trusted by{" "}
              <span className="text-blue-600">Global Industry Leaders</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonial.map(({ quote, author, title }, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col justify-between transform transition duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <p className="text-lg italic text-gray-900 mb-6">"{quote}"</p>
                <div>
                  <p className="font-semibold text-blue-600 text-lg">
                    {author}
                  </p>
                  <p className="text-gray-800 text-sm">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form  */}
      <section className="px-3 py-8   flex flex-col md:flex-row bg-gray-100 md:px-5 md:gap-5 lg:px-44 lg:gap-10 lg:py-12">
        <div className="md:w-1/2">
          <p className="uppercase font-medium text-gray-950 md:text-lg">
            We're here to help you
          </p>
          <p className="text-3xl font-semibold py-5 text-gray-950 md:text-4xl">
            <span className="font-bold text-blue-600">Discuss</span> Your
            Chemical Solution Needs
          </p>
          <p className="text-sm text-blue-950 py-3 md:text-lg">
            Are you looking for top-quality chemical tailored to your needs?
            Reach out to us.
          </p>
        </div>
        <div className="md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-white px-2 py-5 rounded-xl md:px-5 lg:px-10"
          >
            <div className="flex flex-col my-3">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
                name="name"
                placeholder="Your Name"
                className="bg-gray-200 px-3 py-1 rounded-lg"
              />
            </div>
            <div className="flex flex-col my-3">
              <label htmlFor="name" className="font-semibold">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="Email"
                className="bg-gray-200 px-3 py-1 rounded-lg"
              />
            </div>
            <div className="flex flex-col my-3">
              <label htmlFor="name" className="font-semibold">
                Country
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                name="country"
                defaultValue=""
                required
                placeholder="Email"
                className="bg-gray-200 px-3 py-1 rounded-lg"
              >
                {countries.map((country, idx) => (
                  <option key={idx} value={country} className="text-black">
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col my-3">
              <label htmlFor="name" className="font-semibold">
                Phone
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                name="phone"
                maxLength={10}
                minLength={10}
                pattern="[0-9]{10}"
                placeholder="Enter Phone Number"
                className="bg-gray-200 px-3 py-1 rounded-lg"
              />
            </div>

            <div className="flex flex-col my-3">
              <label htmlFor="name" className="font-semibold">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                type="text"
                required
                placeholder="Inform me about this"
                className="bg-gray-200 px-3 py-1 rounded-lg"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="my-4 rounded-full bg-[#0071E9] text-white py-2 px-5"
            >
              {loading ? "Get a Solution..." : "Get a solution"}
            </button>

            {status && (
              <p
                className={`text-center mt-4 text-sm font-medium p-3 rounded-lg ${
                  status.startsWith("✅")
                    ? "bg-green-100 text-green-800"
                    : status.startsWith("❌")
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* 8. Find the Perfect TiO₂ Grade for Your Application (Product Explorer CTA) */}
      <section className="py-10 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-2xl">
              <img
                src={"/landing-page/396.jpg"}
                alt="Product Explorer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                Find the Perfect{" "}
                <span className="text-blue-600">TiO₂ Grade</span> for Your
                Application
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Ready to enhance your product's performance? Use our Product
                Explorer to filter by application (Plastics, Coatings,
                Laminates) and find the technical data sheets you need.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <PrimaryButton href="/products">
                  Explore Product Grades
                </PrimaryButton>
                <a
                  href="/contact-us"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition duration-200"
                >
                  Need Technical Assistance? Contact Our Experts. →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {openForm && (
        <ContactForm isOpen={openForm} onClose={() => setOpenForm(false)} />
      )}



      <Whatsapp></Whatsapp>
    </div>
  );
}
