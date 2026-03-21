"use client";
import { countries } from "@/Data";
import { useState } from "react";
import axios from "axios"

const Form = () => {
  // form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

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
        setLoading(false);
        setStatus("✅ Message sent successfully!");
        setName("");
        setEmail("");
        setCountry("");
        setPhone("");
        setMessage("");

        const whatsappText = `Hi, I am ${name}.\n \nEmail: ${email}\n\nMessage: ${message}\n\nContact: ${phone} \n Place: ${country}`;
        const waUrl = `https://wa.me/918527557778?text=${encodeURIComponent(
          whatsappText
        )}`;

        // Delay WhatsApp redirect by 1 second to show success message
        setTimeout(() => {
          window.open(waUrl, "_blank");
        }, 1000);
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
    <form
      onSubmit={handleSubmit}
      className="bg-white px-2 py-5 rounded-xl md:px-5 lg:px-10"
    >
      {/* hidden  */}
      {/* <input
                    type="hidden"
                    name="_subject"
                    value="New Product Enquiry"
                  />
                  <input type="hidden" name="_template" value="table" />
                  <input
                    type="hidden"
                    name="product"
                    value="Enquiry From Website"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_nosponsor" value="true" />
                  <input
                    type="hidden"
                    name="_cc"
                    value="sales@aanyaenterprise.com"
                  /> */}

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
          placeholder="Jone Doe"
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
          required
          className="bg-gray-200 px-3 py-1 rounded-lg"
        />
      </div>
      <div className="flex flex-col my-3">
        <label htmlFor="name" className="font-semibold">
          Country
        </label>
        <select
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
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
          required
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
  );
};

export default Form;
