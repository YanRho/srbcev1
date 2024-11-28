"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Ensure this matches the backend API expectations
      });

      if (!response.ok) {
        const errorData = await response.json(); // Attempt to parse JSON error
        throw new Error(errorData.error || "Unknown error occurred");
      }

      const data = await response.json(); // Parse the success JSON response
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setError("");
    } catch (err: any) {
      console.error("Error sending message:", err.message);
      setError(
        err.message || "Failed to send message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/contact-bg.jpg')`,
      }}
    >
      <div className="bg-black bg-opacity-50 p-20 w-full flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 shadow-md rounded-lg max-w-lg w-full"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Connect with us!
          </h2>
          <div className="mb-4">
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 border rounded-md w-full"
            />
          </div>
          {success && (
            <p className="text-green-600 mb-4">Message sent successfully!</p>
          )}
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full transition duration-200"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
