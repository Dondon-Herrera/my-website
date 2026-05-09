import Link from "next/link";
import {
  BellIcon,
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

import { ContactForm } from "@/components/main/contact-form";

const cardBase =
  "rounded-[24px] border border-[#30363d]/80 bg-[#11121d] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-10";

const labelClass =
  "text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-400/90 md:text-[12px]";

const tagClass =
  "rounded-full border border-white/20 bg-[#0d0f16] px-3 py-1.5 text-[12px] text-gray-200 md:text-[13px]";

const collaborationTags = [
  "Product Strategy",
  "MVP Delivery",
  "AI Integrations",
  "Code Reviews",
  "Technical Consulting",
];

export function ContactPageContent() {
  return (
    <div
      id="contact"
      className="min-h-screen w-full bg-transparent pb-[calc(11rem+env(safe-area-inset-bottom,0px))] pt-[max(5rem,env(safe-area-inset-top,0px)+3rem)] text-white sm:pb-[calc(12rem+env(safe-area-inset-bottom,0px))] md:pb-[calc(14rem+env(safe-area-inset-bottom,0px))]"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mx-auto max-w-3xl px-2 text-center">
          <h1 className="text-[28px] font-bold leading-tight tracking-tight text-[#b6dfff] md:text-[40px] md:leading-tight lg:text-[44px]">
            Let&apos;s start something remarkable
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-gray-400 md:mt-6 md:text-[17px] md:leading-relaxed">
            Tell me about your product vision, timeline, and goals. I&apos;ll respond
            with clear next steps and a plan that fits your momentum.
          </p>
        </header>

        {/* Two columns */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 lg:grid-cols-2 lg:gap-8">
          {/* Left stack */}
          <div className="flex flex-col gap-6">
            {/* Collaboration */}
            <div className={cardBase}>
              <p className={labelClass}>Collaboration</p>

              <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
                {/* Illustration cluster */}
                <div className="relative mx-auto flex h-[140px] w-full max-w-[200px] shrink-0 items-center justify-center sm:mx-0 sm:w-[44%]">
                  <div className="absolute left-2 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/35 bg-[#0d0f16] text-cyan-300">
                    <BellIcon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="relative z-[1] flex h-24 w-28 items-center justify-center rounded-2xl border border-amber-300/40 bg-gradient-to-br from-amber-400/25 to-amber-600/10 shadow-lg">
                    <EnvelopeIcon className="h-10 w-10 text-sky-300" aria-hidden />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 text-[11px] font-bold text-white shadow">
                      1
                    </span>
                  </div>
                  <div className="absolute -bottom-1 right-4 rotate-12 rounded-xl border border-sky-400/30 bg-sky-500/20 p-2 text-sky-200">
                    <PaperAirplaneIcon className="h-7 w-7" aria-hidden />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-[20px] font-bold leading-snug text-white md:text-[22px]">
                    Let&apos;s build together
                  </h2>
                  <p className="mt-3 text-[14px] leading-relaxed text-gray-400 md:text-[15px]">
                    I bridge the gap between vision and execution — crafting scalable,
                    performance-driven products with clarity and care.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2 md:gap-2.5">
                {collaborationTags.map((t) => (
                  <span key={t} className={tagClass}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct line */}
            <div className={cardBase}>
              <p className={labelClass}>Direct line</p>
              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-[#0d0f16] text-cyan-300">
                    <EnvelopeIcon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                      Email
                    </p>
                    <Link
                      href="mailto:sharmapraduman6@gmail.com"
                      className="mt-1 block truncate text-[15px] font-medium text-white underline-offset-2 hover:text-cyan-200 hover:underline"
                    >
                      sharmapraduman6@gmail.com
                    </Link>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-[#0d0f16] text-cyan-300">
                    <ClockIcon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                      Response
                    </p>
                    <p className="mt-1 text-[15px] font-medium text-white">
                      Within 2 – 4 hours
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-[#0d0f16] text-cyan-300">
                    <MapPinIcon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                      Location
                    </p>
                    <p className="mt-1 text-[15px] font-medium text-white">
                      Remote · India
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div className={cardBase}>
            <p className={labelClass}>Project details</p>
            <h2 className="mt-4 text-[22px] font-bold text-white md:text-[26px]">
              Send your message
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-gray-400 md:text-[15px]">
              Share goals, timelines, and any constraints. I&apos;ll respond with a
              clear plan and next steps.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center md:mt-14">
          <Link
            href="/"
            className="text-[14px] text-cyan-400/90 underline-offset-4 transition hover:text-cyan-300 hover:underline"
          >
            ← Back to portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
