import { NextResponse } from "next/server";
import { Resend } from "resend";
import { saveLead } from "@/lib/leads";

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
  const role = String(data.role ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const companySize = String(data.companySize ?? "").trim();
  const deployment = String(data.deployment ?? "").trim();
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

  // Persist first (best-effort, durable). A datastore hiccup must never drop
  // the request — the email below is the other capture channel.
  let saved = false;
  try {
    saved = await saveLead({
      intent: isPilot ? "pilot" : "demo",
      name,
      email,
      company,
      role,
      phone,
      companySize,
      deployment,
      industry,
      message,
    });
  } catch (err) {
    console.error("Lead persistence failed:", err);
  }

  if (!resend || !FROM || !TO) {
    if (saved) {
      // The lead is safely in the datastore even though email isn't set up.
      return NextResponse.json({ ok: true });
    }
    console.error(
      "Form not configured: set RESEND_API_KEY, DEMO_FROM_EMAIL, and DEMO_TO_EMAIL (or LEADS_TABLE).",
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
    role ? `Role: ${role}` : null,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    `Company: ${company}`,
    companySize ? `Company size: ${companySize}` : null,
    industry ? `Industry: ${industry}` : null,
    deployment ? `Deployment: ${deployment}` : null,
    "",
    message || "(no message)",
  ]
    .filter((v): v is string => v !== null)
    .join("\n");

  const row = (label: string, value: string) =>
    value ? `<br><strong>${label}:</strong> ${escapeHtml(value)}` : "";
  const htmlBody =
    `<h2>New ${isPilot ? "pilot" : "demo"} request</h2>` +
    `<p><strong>Name:</strong> ${escapeHtml(name)}` +
    row("Role", role) +
    `<br><strong>Email:</strong> ${escapeHtml(email)}` +
    row("Phone", phone) +
    `<br><strong>Company:</strong> ${escapeHtml(company)}` +
    row("Company size", companySize) +
    row("Industry", industry) +
    row("Deployment", deployment) +
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
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend send failed:", err);
    // The lead is still captured in the datastore, so don't make the visitor
    // resubmit — only surface an error when we have no record at all.
    if (saved) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      {
        error:
          "Something went wrong sending your request. Please try again or email us directly.",
      },
      { status: 502 },
    );
  }
}
