"use client";

import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { FormEvent, useCallback, useId, useState } from "react";

const SKY = "#8ec8ff";
const SKY_DIM = "#b6dfff";

type FieldErrors = {
  name?: string;
  email?: string;
  brief?: string;
};

function validateName(value: string): string | undefined {
  const t = value.trim();
  if (!t) return "Please enter your name.";
  if (t.length < 2) return "Name must be at least 2 characters.";
  if (t.length > 120) return "Name is too long.";
  return undefined;
}

function validateEmail(value: string): string | undefined {
  const t = value.trim();
  if (!t) return "Please enter your email.";
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);
  if (!ok) return "Enter a valid email address.";
  return undefined;
}

function validateBrief(value: string): string | undefined {
  const t = value.trim();
  if (!t) return "Please describe your project.";
  if (t.length < 20) return "Please add a bit more detail (at least 20 characters).";
  if (t.length > 8000) return "Message is too long.";
  return undefined;
}

export function ContactForm() {
  const titleId = useId();
  const descId = useId();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brief, setBrief] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const runValidation = useCallback((): boolean => {
    const next: FieldErrors = {
      name: validateName(name),
      email: validateEmail(email),
      brief: validateBrief(brief),
    };
    setErrors(next);
    return !next.name && !next.email && !next.brief;
  }, [name, email, brief]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    if (!runValidation()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          brief: brief.trim(),
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        fields?: FieldErrors;
      };

      if (!res.ok) {
        if (data.fields) {
          setErrors({
            name: data.fields.name,
            email: data.fields.email,
            brief: data.fields.brief,
          });
        }
        setSubmitError(
          data.error ||
            (res.status === 503
              ? "This form is not set up yet on the server."
              : "Something went wrong. Please try again."),
        );
        return;
      }

      setShowSuccess(true);
    } catch {
      setSubmitError("Network error. Check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccess(false);
    setName("");
    setEmail("");
    setBrief("");
    setErrors({});
    setSubmitError(null);
  };

  const inputError =
    "border-rose-500/60 focus:border-rose-400/70 focus:ring-rose-400/25";
  const inputOk =
    "border-white/[0.12] focus:border-cyan-400/40 focus:ring-cyan-400/30";

  return (
    <>
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
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((s) => ({ ...s, name: undefined }));
            }}
            onBlur={() =>
              setErrors((s) => ({ ...s, name: validateName(name) }))
            }
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={`mt-2 w-full rounded-xl border bg-[#0d0f16] px-4 py-3 text-[15px] text-white placeholder:text-gray-500 outline-none transition focus:ring-1 ${errors.name ? inputError : inputOk}`}
          />
          {errors.name ? (
            <p
              id="contact-name-error"
              className="mt-1.5 text-[13px] text-rose-400/95"
              role="alert"
            >
              {errors.name}
            </p>
          ) : null}
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
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((s) => ({ ...s, email: undefined }));
            }}
            onBlur={() =>
              setErrors((s) => ({ ...s, email: validateEmail(email) }))
            }
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={`mt-2 w-full rounded-xl border bg-[#0d0f16] px-4 py-3 text-[15px] text-white placeholder:text-gray-500 outline-none transition focus:ring-1 ${errors.email ? inputError : inputOk}`}
          />
          {errors.email ? (
            <p
              id="contact-email-error"
              className="mt-1.5 text-[13px] text-rose-400/95"
              role="alert"
            >
              {errors.email}
            </p>
          ) : null}
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
            onChange={(e) => {
              setBrief(e.target.value);
              if (errors.brief) setErrors((s) => ({ ...s, brief: undefined }));
            }}
            onBlur={() =>
              setErrors((s) => ({ ...s, brief: validateBrief(brief) }))
            }
            aria-invalid={Boolean(errors.brief)}
            aria-describedby={errors.brief ? "contact-brief-error" : undefined}
            className={`mt-2 w-full resize-y rounded-xl border bg-[#0d0f16] px-4 py-3 text-[15px] text-white placeholder:text-gray-500 outline-none transition focus:ring-1 ${errors.brief ? inputError : inputOk}`}
          />
          {errors.brief ? (
            <p
              id="contact-brief-error"
              className="mt-1.5 text-[13px] text-rose-400/95"
              role="alert"
            >
              {errors.brief}
            </p>
          ) : null}
        </div>

        {submitError ? (
          <p
            className="rounded-xl border border-rose-500/40 bg-rose-950/40 px-4 py-3 text-[13px] text-rose-200/95 md:text-[14px]"
            role="alert"
          >
            {submitError}
          </p>
        ) : null}

        <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-[11px] leading-relaxed text-cyan-400/70 md:text-[12px]">
            By submitting, you agree to be contacted about your request.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="shrink-0 rounded-full border border-transparent bg-[#b6dfff] px-8 py-3 text-[14px] font-semibold text-gray-900 transition-colors duration-200 hover:border-gray-500 hover:bg-gray-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-60 md:py-3.5 md:text-[15px]"
          >
            {isSubmitting ? "Sending…" : "Send message"}
          </button>
        </div>
      </form>

      {showSuccess ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4 backdrop-blur-[6px]"
          role="presentation"
          onClick={(ev) => {
            if (ev.target === ev.currentTarget) closeSuccessModal();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            className="w-full max-w-[min(100%,380px)] rounded-2xl border border-white/20 bg-[#1a1b26] px-8 py-9 text-center shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2" style={{ borderColor: SKY, color: SKY }}>
              <CheckCircleIcon className="h-8 w-8" strokeWidth={1.5} aria-hidden />
            </div>
            <h2
              id={titleId}
              className="mt-6 text-[20px] font-bold leading-snug md:text-[22px]"
              style={{ color: SKY_DIM }}
            >
              Message Sent Successfully!
            </h2>
            <p
              id={descId}
              className="mt-3 text-[14px] leading-relaxed text-gray-400 md:text-[15px]"
            >
              Thank you for reaching out. I&apos;ll get back to you soon!
            </p>
            <button
              type="button"
              onClick={closeSuccessModal}
              className="mt-8 w-full rounded-full border-2 bg-transparent px-6 py-3 text-[14px] font-semibold transition hover:bg-white/[0.06] md:text-[15px]"
              style={{ borderColor: SKY, color: SKY }}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
