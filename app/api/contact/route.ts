import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

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

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!json || typeof json !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const body = json as Record<string, unknown>;
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const brief = String(body.brief ?? "").trim();

  const nameErr = validateName(name);
  const emailErr = validateEmail(email);
  const briefErr = validateBrief(brief);
  if (nameErr || emailErr || briefErr) {
    return NextResponse.json(
      {
        error: "Validation failed.",
        fields: { name: nameErr, email: emailErr, brief: briefErr },
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL?.trim();

  if (!apiKey || !to) {
    return NextResponse.json(
      {
        error:
          "Contact email is not configured. Set RESEND_API_KEY and CONTACT_TO_EMAIL on the server.",
      },
      { status: 503 },
    );
  }

  const from =
    process.env.CONTACT_FROM?.trim() ||
    "Portfolio <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const subject = `Portfolio inquiry from ${name}`;
  const text = `From: ${name}\nEmail: ${email}\n\n--- Project brief ---\n\n${brief}`;

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Project brief:</strong></p>
    <p style="white-space:pre-wrap;">${escapeHtml(brief)}</p>
  `;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json(
      { error: "Could not send your message. Please try again later." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
