"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong ❌");
      }
    } catch (error) {
      setStatus("Server error ❌");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0f0f0f] p-8 rounded-xl border text-amber-300 border-gray-800 space-y-6"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full p-3 bg-black border text-white border-gray-700 rounded-lg outline-none"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full p-3 bg-black border  text-white border-gray-700 rounded-lg outline-none"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        value={form.message}
        onChange={handleChange}
        required
        className="w-full p-3 bg-black border  text-white border-gray-700 rounded-lg outline-none"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-semibold"
      >
        Send Message
      </button>

      {status && (
        <p className="text-center text-sm text-gray-400">
          {status}
        </p>
      )}
    </form>
  );
}
