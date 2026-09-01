import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FROM = process.env.DEMO_FROM_EMAIL;
const TO = process.env.DEMO_TO_EMAIL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function escapeHtml(v: string) {
  return v.replace(
    /[<>&"]/g,
    (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" })[c] as string,
  );
}

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const company = String(data.company ?? "").trim();
  const industry = String(data.industry ?? "").trim();
  const message = String(data.message ?? "").trim();
  const isPilot = String(data.intent ?? "").trim() === "pilot";
  // Honeypot: bots fill this hidden field. Silently accept and drop.
  const honeypot = String(data.company_website ?? "").trim();

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !company) {
    return NextResponse.json(
      { error: "Please fill in your name, work email, and company." },
      { status: 400 },
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!resend || !FROM || !TO) {
    console.error(
      "Demo form not configured: set RESEND_API_KEY, DEMO_FROM_EMAIL, and DEMO_TO_EMAIL.",
    );
    return NextResponse.json(
      { error: "The form isn't configured yet. Please email us directly." },
      { status: 500 },
    );
  }

  const subject = `${isPilot ? "Pilot" : "Demo"} request - ${company}`;
  const textBody = [
    `Request type: ${isPilot ? "Pilot" : "Demo"}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    industry ? `Industry: ${industry}` : null,
    "",
    message || "(no message)",
  ]
    .filter((v): v is string => v !== null)
    .join("\n");

  const htmlBody =
    `<h2>New ${isPilot ? "pilot" : "demo"} request</h2>` +
    `<p><strong>Name:</strong> ${escapeHtml(name)}<br>` +
    `<strong>Email:</strong> ${escapeHtml(email)}<br>` +
    `<strong>Company:</strong> ${escapeHtml(company)}` +
    (industry ? `<br><strong>Industry:</strong> ${escapeHtml(industry)}` : "") +
    `</p>` +
    `<p>${escapeHtml(message || "(no message)").replace(/\n/g, "<br>")}</p>`;

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });
    if (error) {
      console.error("Resend send failed:", error);
      return NextResponse.json(
        {
          error:
            "Something went wrong sending your request. Please try again or email us directly.",
        },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend send failed:", err);
    return NextResponse.json(
      {
        error:
          "Something went wrong sending your request. Please try again or email us directly.",
      },
      { status: 502 },
    );
  }
}
