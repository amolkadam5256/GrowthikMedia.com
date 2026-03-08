"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ChevronDown } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        service: "",
        budget: "",
        message: "",
      });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div className="rounded-sm bg-white dark:bg-zinc-900 p-8 sm:p-12 border-2 border-black dark:border-white/20  relative transition-colors">
      <h2 className="text-4xl font-black text-black dark:text-white uppercase tracking-tight mb-4 border-b-4 border-red-600 pb-2 inline-block">
        Send a Message
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg font-bold">
        Fill out the form below and our growth experts will get back to you
        shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-black uppercase text-black dark:text-white mb-2 tracking-widest"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="rounded-sm w-full px-5 py-4 bg-white dark:bg-zinc-950 border-2 border-black dark:border-white/20 text-black dark:text-white font-bold focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:border-red-600 focus:shadow-[4px_4px_0_#dc2626] transition-all placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-black uppercase text-black dark:text-white mb-2 tracking-widest"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="rounded-sm w-full px-5 py-4 bg-white dark:bg-zinc-950 border-2 border-black dark:border-white/20 text-black dark:text-white font-bold focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:border-red-600 focus:shadow-[4px_4px_0_#dc2626] transition-all placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-black uppercase text-black dark:text-white mb-2 tracking-widest"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="rounded-sm w-full px-5 py-4 bg-white dark:bg-zinc-950 border-2 border-black dark:border-white/20 text-black dark:text-white font-bold focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:border-red-600 focus:shadow-[4px_4px_0_#dc2626] transition-all placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="+91 12345 67890"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-black uppercase text-black dark:text-white mb-2 tracking-widest"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="rounded-sm w-full px-5 py-4 bg-white dark:bg-zinc-950 border-2 border-black dark:border-white/20 text-black dark:text-white font-bold focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:border-red-600 focus:shadow-[4px_4px_0_#dc2626] transition-all placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Your Company Ltd"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-black uppercase text-black dark:text-white mb-2 tracking-widest"
            >
              Service Required *
            </label>
            <div className="rounded-sm relative border-2 border-black dark:border-white/20 bg-white dark:bg-zinc-950 focus-within:border-red-600 focus-within:shadow-[4px_4px_0_#dc2626] transition-all overflow-hidden">
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-transparent text-black dark:text-white font-bold focus:outline-none appearance-none cursor-pointer pr-12 rounded-sm"
              >
                <option
                  value=""
                  className="bg-white text-black dark:bg-black dark:text-white"
                >
                  Select a service
                </option>
                <option
                  value="seo"
                  className="bg-white text-black dark:bg-black dark:text-white"
                >
                  SEO Services
                </option>
                <option
                  value="digital-marketing"
                  className="bg-white text-black dark:bg-black dark:text-white"
                >
                  Digital Marketing
                </option>
                <option
                  value="web-dev"
                  className="bg-white text-black dark:bg-black dark:text-white"
                >
                  Website Development
                </option>
                <option
                  value="branding"
                  className="bg-white text-black dark:bg-black dark:text-white"
                >
                  Branding & Design
                </option>
                <option
                  value="social-media"
                  className="bg-white text-black dark:bg-black dark:text-white"
                >
                  Social Media Marketing
                </option>
                <option
                  value="ecommerce"
                  className="bg-white text-black dark:bg-black dark:text-white"
                >
                  E-Commerce Solutions
                </option>
              </select>
              <div className="absolute top-0 right-0 w-12 h-full border-l-2 border-black dark:border-white/20 flex items-center justify-center pointer-events-none bg-white dark:bg-zinc-950">
                <ChevronDown className="w-5 h-5 text-black dark:text-white" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-black uppercase text-black dark:text-white mb-2 tracking-widest"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="rounded-sm w-full px-5 py-4 bg-white dark:bg-zinc-950 border-2 border-black dark:border-white/20 text-black dark:text-white font-bold focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:border-red-600 focus:shadow-[4px_4px_0_#dc2626] transition-all resize-none placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="Tell us about your project or goals..."
          ></textarea>
        </div>

        <div className="rounded-sm flex items-center gap-4 p-4 bg-white dark:bg-zinc-950">
          <input
            type="checkbox"
            required
            id="not-bot"
            className="rounded-sm w-6 h-6 border-2 border-black dark:border-white/50 bg-white dark:bg-black text-red-600 focus:ring-0 focus:ring-offset-0 cursor-pointer appearance-none checked:bg-red-600 checked:border-red-600 relative after:content-['✓'] after:absolute after:text-white after:font-bold after:-top-1 after:left-1 checked:after:block after:hidden"
          />
          <label
            htmlFor="not-bot"
            className="font-bold cursor-pointer select-none text-black dark:text-white uppercase tracking-wider text-sm"
          >
            I am not a robot
          </label>
        </div>

        {submitStatus === "success" && (
          <div className="rounded-sm p-4 bg-green-500 dark:bg-green-600 border-2 border-black dark:border-white text-black dark:text-white flex items-center gap-3 font-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
            <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
            <p>MESSAGE RECEIVED. WE WILL RESPOND SHORTLY.</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-sm w-full py-5 px-6 font-black text-white text-lg transition-all bg-red-600 border-2 border-transparent hover:border-black dark:hover:border-white flex items-center justify-center gap-3 shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#fff] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] uppercase tracking-widest disabled:opacity-50 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[6px_6px_0_#000]"
        >
          {isSubmitting ? (
            <div className="animate-spin h-6 w-6 border-b-2 border-white rounded-full"></div>
          ) : (
            <>
              Send Message <Send className="w-5 h-5 ml-2" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
