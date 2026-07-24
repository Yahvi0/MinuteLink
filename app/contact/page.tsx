"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire this up to an API route (e.g. /api/contact) to actually send the message
    console.log({ name, email, message });
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main className="bg-gradient-to-br from-fuchsia-50 via-purple-50 to-indigo-50 min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-purple-100 p-8 flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-center">
          <span className="inline-flex self-center items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold tracking-wide">
            Contact Us
          </span>
          <h1 className="text-2xl font-bold">Get in touch</h1>
          <p className="text-gray-500 text-sm">
            Questions, feedback, or bug reports — we'd love to hear from you.
          </p>
        </div>

        {sent ? (
          <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 text-center font-medium">
            Thanks — your message has been sent. We'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 rounded-md border border-purple-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            />

            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-md border border-purple-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            />

            <textarea
              required
              rows={4}
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="px-4 py-2 rounded-md border border-purple-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-lg shadow-lg shadow-purple-300/50 p-3 font-bold text-white hover:shadow-purple-400/60 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </main>
  );
}