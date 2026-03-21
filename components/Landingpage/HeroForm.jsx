import { countries } from "@/Data";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const HeroForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const router = useRouter();   
  // form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setLoading(true);
    try {
      const formData = {
        platform: "Salford Landing page",
        platformEmail: "sales@aanyaenterprise.com",
        name,
        email,
        place: country,
        phone,
        message,
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

      console.log(formData);
    } catch (error) {
      console.log(error);
      setStatus(error?.message);
    }
  };

  return (
    <div className="bg-gray-100 text-black py-10 lg:py-10 ">
      <p className="uppercase font-medium text-gray-950 md:text-lg text-center">
        We're here to help your
      </p>
      <p className="text-3xl font-semibold py-5 text-gray-950 md:text-4xl text-center">
        <span className="font-bold text-blue-600">Discuss</span> Your Chemical
        Solution Needs
      </p>
      <p className="text-sm text-blue-950 py-3 md:text-lg text-center">
        Are you looking for top-quality chemical tailored to your needs? Reach
        out to us.
      </p>
      <form
        onSubmit={handleSubmit}
        className=" flex items-center flex-col justify-center gap-3 py-5 px-5 md:flex-row lg:px-10 md:gap-1 lg:gap-5"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
          className="border py-2 px-3 rounded-2xl bg-white text-black shadow-lg w-full md:scale-105 "
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="border py-2 px-3 rounded-2xl bg-white text-black shadow-lg w-full md:scale-105 "
        />
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maxLength={10}
          minLength={10}
          pattern="[0-9]{10}"
          placeholder="Phone"
          className="border py-2 px-3 rounded-2xl bg-white text-black shadow-lg w-full md:scale-105 "
        />
        <select
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          defaultValue=""
          required
          placeholder="Email"
          className="border rounded-2xl bg-white text-black shadow-lg w-full md:scale-105  p-3"
        >
          {countries.map((country, idx) => (
            <option key={idx} value={country} className="text-black">
              {country}
            </option>
          ))}
        </select>

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Message"
          required
          className="border py-2 px-3 rounded-2xl bg-white text-black shadow-lg w-full "
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full"
        >
          {loading ? "Sending..." : "Send Message"}
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
  );
};

export default HeroForm;