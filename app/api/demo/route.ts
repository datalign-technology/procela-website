import { NextResponse } from "next/server";
import { Resend } from "resend";
import { recordLead } from "@/lib/leads";
import { SITE_URL } from "@/lib/site";

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

type ReplyConfig = {
  subject: string;
  heading: string;
  intro: string;
  links: { label: string; href: string }[];
};

/** Per-intent copy and links for the automated confirmation sent to the
 *  person who submitted the form. Links are absolute (email clients need it). */
function replyConfig(intent: string): ReplyConfig {
  const S = SITE_URL;
  switch (intent) {
    case "pilot":
      return {
        subject: "Thanks — let's scope your Procela pilot",
        heading: "Thanks for your interest in a pilot",
        intro:
          "We've received your request and a member of our team will reach out shortly to scope a pilot and map it to your environment. In the meantime, a few things you might find useful:",
        links: [
          { label: "How a pilot runs", href: `${S}/pilot` },
          { label: "Take the interactive tour", href: `${S}/tour` },
          { label: "Security & deployment", href: `${S}/security` },
        ],
      };
    case "starter-kit":
      return {
        subject: "Your Data Governance Starter Kit",
        heading: "Your Starter Kit is ready",
        intro:
          "Thanks for downloading the Data Governance Starter Kit. If the download didn't start automatically, you can grab it below — and the companion article walks through how to use it:",
        links: [
          { label: "Download the Starter Kit (.xlsx)", href: `${S}/downloads/procela-data-governance-starter-kit.xlsx` },
          { label: "Where to begin with data governance", href: `${S}/resources/blog/where-to-begin-with-data-governance` },
          { label: "Take the interactive tour", href: `${S}/tour` },
        ],
      };
    case "scorecard":
      return {
        subject: "Your Governance Scorecard Template",
        heading: "Your Scorecard Template is ready",
        intro:
          "Thanks for downloading the Governance Scorecard Template. If the download didn't start automatically, you can grab it below — and the companion article explains what belongs on a scorecard:",
        links: [
          { label: "Download the Scorecard Template (.xlsx)", href: `${S}/downloads/procela-governance-scorecard-template.xlsx` },
          { label: "What belongs on a governance scorecard", href: `${S}/resources/blog/what-belongs-on-a-governance-scorecard` },
          { label: "Take the interactive tour", href: `${S}/tour` },
        ],
      };
    default: // demo
      return {
        subject: "Thanks for requesting a Procela demo",
        heading: "Thanks for requesting a demo",
        intro:
          "We've received your request and a member of our team will reach out shortly to schedule a walkthrough tailored to your environment. In the meantime, a few things you might find useful:",
        links: [
          { label: "Take the interactive tour", href: `${S}/tour` },
          { label: "Explore the platform", href: `${S}/platform` },
          { label: "Security & deployment", href: `${S}/security` },
        ],
      };
  }
}

/** Build the confirmation email (html + text) sent back to the submitter. */
function buildConfirmation(intent: string, name: string) {
  const r = replyConfig(intent);
  const firstName = name.split(/\s+/)[0] || "";
  const greetHtml = firstName ? `Hi ${escapeHtml(firstName)},` : "Hi,";
  const greetText = firstName ? `Hi ${firstName},` : "Hi,";

  const linksHtml = r.links
    .map(
      (l) =>
        `<li style="margin:0 0 10px"><a href="${l.href}" style="color:#2f7052;font-weight:600;text-decoration:underline">${escapeHtml(l.label)} &rarr;</a></li>`,
    )
    .join("");

  const html =
    `<div style="font-family:Arial,Helvetica,sans-serif;color:#0d1f17;max-width:560px;margin:0 auto;padding:8px">` +
    `<h2 style="font-size:20px;margin:0 0 14px;color:#0d1f17">${escapeHtml(r.heading)}</h2>` +
    `<p style="font-size:15px;line-height:1.6;margin:0 0 10px">${greetHtml}</p>` +
    `<p style="font-size:15px;line-height:1.6;margin:0 0 16px">${escapeHtml(r.intro)}</p>` +
    `<ul style="font-size:15px;line-height:1.6;padding-left:18px;margin:0 0 20px">${linksHtml}</ul>` +
    `<p style="font-size:15px;line-height:1.6;margin:0 0 16px">Just reply to this email if you have any questions — it reaches our team directly.</p>` +
    `<p style="font-size:15px;line-height:1.6;margin:0">&mdash; The Procela team</p>` +
    `<p style="font-size:12px;color:#6b7a72;margin:22px 0 0">Datalign Technology LLC (DBA Procela) &middot; procela.ai</p>` +
    `</div>`;

  const text = [
    r.heading,
    "",
    greetText,
    r.intro,
    "",
    ...r.links.map((l) => `- ${l.label}: ${l.href}`),
    "",
    "Just reply to this email if you have any questions — it reaches our team directly.",
    "",
    "— The Procela team",
    "Datalign Technology LLC (DBA Procela) · procela.ai",
  ].join("\n");

  return { subject: r.subject, html, text };
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
  const intent = String(data.intent ?? "demo").trim() || "demo";
  const resource = String(data.resource ?? "").trim();
  const INTENT_LABELS: Record<string, string> = {
    demo: "Demo",
    pilot: "Pilot",
    "starter-kit": "Starter kit",
    scorecard: "Scorecard",
  };
  const label = INTENT_LABELS[intent] ?? "Demo";
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

  // Persist first (best-effort, durable) to every configured sink. A sink
  // hiccup must never drop the request — the email below is another channel.
  let saved = false;
  try {
    saved = await recordLead({
      intent,
      resource,
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
      "Form not configured: set RESEND_API_KEY, DEMO_FROM_EMAIL, and DEMO_TO_EMAIL " +
        "(or a persistence sink: LEADS_TABLE / LEADS_SHEETS_WEBHOOK_URL).",
    );
    return NextResponse.json(
      { error: "The form isn't configured yet. Please email us directly." },
      { status: 500 },
    );
  }

  const subject = `${label} request - ${company}`;
  const textBody = [
    `Request type: ${label}`,
    resource ? `Resource: ${resource}` : null,
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
    `<h2>New ${label.toLowerCase()} request</h2>` +
    (resource ? `<p><strong>Resource:</strong> ${escapeHtml(resource)}</p>` : "") +
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

    // Best-effort automated confirmation to the submitter. A failure here must
    // never affect the visitor's response — the request is already captured.
    try {
      const confirmation = buildConfirmation(intent, name);
      const { error: replyError } = await resend.emails.send({
        from: FROM,
        to: [email],
        replyTo: TO,
        subject: confirmation.subject,
        text: confirmation.text,
        html: confirmation.html,
      });
      if (replyError) throw replyError;
    } catch (replyErr) {
      console.error("Auto-reply send failed:", replyErr);
    }

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
