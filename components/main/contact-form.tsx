"use client";

import { FormEvent, useState } from "react";

const CONTACT_EMAIL = "sharmapraduman6@gmail.com";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brief, setBrief] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${name || "Portfolio"}`);
    const body = encodeURIComponent(
      `From: ${name}\nEmail: ${email}\n\n--- Project brief ---\n\n${brief}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      id="contact-form"
      onSubmit={onSubmit}
      className="flex flex-col gap-6"
      noValidate
    >
      <div>
        <label
          htmlFor="contact-name"
          className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-400/85"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-xl border border-white/[0.12] bg-[#0d0f16] px-4 py-3 text-[15px] text-white placeholder:text-gray-500 outline-none transition focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/30"
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-400/85"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-xl border border-white/[0.12] bg-[#0d0f16] px-4 py-3 text-[15px] text-white placeholder:text-gray-500 outline-none transition focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/30"
        />
      </div>
      <div>
        <label
          htmlFor="contact-brief"
          className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-400/85"
        >
          Project brief
        </label>
        <textarea
          id="contact-brief"
          name="brief"
          rows={6}
          placeholder="Tell me about your idea, timeline, and goals."
          value={brief}
          onChange={(e) => setBrief(e.target.value)}
          className="mt-2 w-full resize-y rounded-xl border border-white/[0.12] bg-[#0d0f16] px-4 py-3 text-[15px] text-white placeholder:text-gray-500 outline-none transition focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/30"
        />
      </div>

      <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-md text-[11px] leading-relaxed text-gray-500 md:text-[12px]">
          By submitting, you agree to be contacted about your request.
        </p>
        <button
          type="submit"
          className="shrink-0 rounded-full border border-white/30 bg-transparent px-8 py-3 text-[14px] font-semibold text-white transition hover:border-white/50 hover:bg-white/[0.06] md:py-3.5 md:text-[15px]"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
