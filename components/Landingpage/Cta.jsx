"use client";

import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      className="relative bg-center bg-cover bg-fixed w-full min-h-screen flex items-center"
      style={{ backgroundImage: "url(/bgcheck.png)" }}
    >

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20 blur-2xl"></div>

      <div className="relative w-full max-w-7xl mx-auto grid md:grid-cols-2">

        {/* ================= LEFT ================= */}
        <div className="text-white px-10 md:px-16 mt-10">

          <p className="text-white text-xl mb-2">Get in Touch</p>

          <h2 className="text-5xl font-bold mb-4">
            Contact Us
          </h2>

          <p className="text-white max-w-lg mb-12 text-2xl leading-7">
            Need a custom product or bulk solution? Get in touch with our team for
            tailored packaging and handling solutions.
          </p>

          {/* ADDRESS */}
          <div className="flex items-start gap-5 mb-10">
            <div className="w-16 h-16 bg-[#2F4FA2] rounded-full flex items-center justify-center">
              <MapPin size={27} />
            </div>

            <div>
              <h4 className="text-white text-2xl font-bold">Address</h4>
              <p className="text-white text-xl mt-2 leading-7">
                PO Box: 27379,<br />
                Ajman Industrial Area 1,<br />
                Ajman – UAE
              </p>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-start gap-5 mb-10">
            <div className="w-17 h-17 bg-[#2F4FA2] rounded-full flex items-center justify-center">
              <Phone size={26} />
            </div>

            <div>
              <h4 className="text-white text-2xl font-semibold">Phone</h4>
              <p className="text-white text-2xl mt-2">
                +9716 744 1001
              </p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-start gap-5">
            <div className="w-17 h-17 bg-[#2F4FA2] rounded-full flex items-center justify-center">
              <Mail size={26} />
            </div>

            <div>
              <h4 className="text-white text-2xl font-semibold">Email</h4>
              <p className="text-white text-2xl mt-2">
                sales@crateco.ae
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="bg-white/10 backdrop-blur-lg px-10 md:px-16 py-10 text-white">

          <h3 className="text-3xl font-semibold mb-10 text-white">
            Request More Info
          </h3>

          {/* FORM */}
          <div className="space-y-8">

            {["Name", "Email", "Phone", "Product Required"].map((item, i) => (
              <div key={i}>
                <label className="block mb-2 text-white">{item}</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-gray-400 focus:border-[#59B347] outline-none py-2"
                />
              </div>
            ))}

            {/* MESSAGE */}
            <div>
              <label className="block mb-2 text-white">Message</label>
              <textarea
                rows={3}
                className="w-full bg-transparent border-b border-white focus:border-[#59B347] outline-none py-2 resize-none"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex justify-end mt-6">
              <button className="w-16 h-16 bg-gradient-to-r from-[#2F4FA2] to-[#59B347] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
                <Send className="text-white" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}