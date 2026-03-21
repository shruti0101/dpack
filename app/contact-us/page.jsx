"use client";
import React, { useState } from "react";
import axios from "axios";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple validation
    if (!firstName.trim()) return setStatus("❌ First name is required");
    if (!lastName.trim()) return setStatus("❌ Last name is required");
    if (!/^\d{10}$/.test(phone)) return setStatus("❌ Phone must be 10 digits");
    if (!email.includes("@")) return setStatus("❌ Invalid email address");
    if (!message.trim()) return setStatus("❌ Message cannot be empty");

    setStatus("Sending...");
    setLoading(true);

    const formData = {
      platform: "Contact Us Page",
      platformEmail: "sales@aanyaenterprise.com",
      name: `${firstName} ${lastName}`,
      email,
      phone,
      place: "N/A",
      message,
    };

    try {
      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData
      );

      if (data?.success) {
        setStatus("✅ Message sent successfully!");
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("❌ Something went wrong. Try again.");
      }
    } catch (error) {
      setStatus("❌ " + error.message);
    }

    setLoading(false);
  };

  return (
    <div>
      {/* ===== Hero Section ===== */}
      <div
        className="relative w-full px-8 bg-cover bg-center h-[50vh] md:h-[90vh] flex flex-col items-start justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/whychoosebg.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative mt-20 z-10 text-white max-w-4xl">
          <h1 className="text-3xl tracking-wide md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-white mt-4 md:max-w-2xl text-sm md:text-lg md:leading-relaxed">
            Partner with a Global Leader Today. If you are seeking a Titanium
            Dioxide Manufacturer in Germany, contact our team today to discuss
            your requirements, request product samples, or explore strategic
            partnership opportunities.
          </p>
        </div>
      </div>

      {/* ===== Contact Section ===== */}
      <section className="bg-[#e6f5ff] py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* ===== Left Content ===== */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-extrabold text-[#0047b3]">
              Let's Connect
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              Have questions or want to discuss your project? Fill out the form,
              and our team of experts will get back to you promptly. We value
              your partnership and are ready to provide tailored solutions for
              your business.
            </p>
          </div>

          {/* ===== Right: Contact Form ===== */}
          <div className="relative">
            <div className="lg:sticky lg:top-36">
              <div className="bg-white/80 backdrop-blur-xl border border-white/30 p-8 rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold text-[#0047b3] mb-6 text-center">
                  Get in Touch
                </h2>

                {/* VALIDATED REACT FORM */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="w-full p-4 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#0047b3]"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      className="w-full p-4 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#0047b3]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={phone}
                      maxLength={10}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full p-4 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#0047b3]"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full p-4 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#0047b3]"
                    />
                  </div>

                  <textarea
                    placeholder="Message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full p-4 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#0047b3] resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-[#0047b3] to-[#0066cc] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:from-[#003a99] hover:to-[#0052a3] transition-all w-full"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  {status && (
                    <p
                      className={`text-center text-sm font-medium p-3 rounded-lg ${
                        status.startsWith("✅")
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {status}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
