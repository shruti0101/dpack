"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowBigRight } from "lucide-react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const from = params?.get("from") || "/studio";

  useEffect(() => setFadeIn(true), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) router.push(from);
      else alert("Invalid password");
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
      {/* Login Card */}
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-sm bg-white shadow-lg rounded-2xl p-8 border border-blue-100 transition-all duration-700 transform ${
          fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
          Admin Login
        </h2>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Username</label>
            <input
              type="text"
              value="admin"
              disabled
              className="w-full border border-gray-300 p-2 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 mb-1 block">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-all duration-300 disabled:opacity-70"
        >
          {loading ? "Checking..." : "Login"}
        </button>
      </form>

      {/* Back to Home */}
      <div className="mt-6 flex items-center justify-center gap-2 text-red-600 hover:text-red-800 transition-all duration-300 hover:translate-x-1">
        <a href="/" className="flex items-center gap-2 font-medium">
          <span>Back to Home Page</span>
          <ArrowBigRight size={20} />
        </a>
      </div>
    </section>
  );
}
