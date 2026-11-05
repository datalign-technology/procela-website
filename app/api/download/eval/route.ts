import { NextResponse } from "next/server";
import { Resend } from "resend";
import { recordLead } from "@/lib/leads";
import { readDownloadToken } from "@/lib/eval-token";
import { EVAL_ZIP_URL, EVAL_VERSION } from "@/lib/eval";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FROM = process.env.DEMO_FROM_EMAIL;
const TO = process.env.DEMO_TO_EMAIL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

function escapeHtml(v: string) {
  return v.replace(
    /[<>&"]/g,
    (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" })[c] as string,
  );
}

/**
 * Tracked eval download. The site's download button points here instead of
 * straight at GitHub, so the actual file fetch is logged and (when a token is
 * present) attributed to the registration that produced it, then the visitor
 * is redirected to the public bundle. Redirecting always happens — tracking is
 * best-effort and must never block the download.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("t");
  const { claims, verified, expired } = readDownloadToken(token);

  const ua = req.headers.get("user-agent") || "";
  const referer = req.headers.get("referer") || "";
  // Behind Amplify/CloudFront the client IP is in x-forwarded-for.
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim();

  // Build a human-readable note describing the attribution quality + context.
  const attribution = claims
    ? verified
      ? "attributed (verified)"
      : expired
        ? "attributed (token expired)"
        : "attributed (unverified)"
    : "unattributed (no token)";
  const note = [
    `eval ${EVAL_VERSION} download`,
    attribution,
    ip && `ip=${ip}`,
    ua && `ua=${ua}`,
    referer && `ref=${referer}`,
  ]
    .filter(Boolean)
    .join(" · ");

  // Durable log to the configured lead sink(s), tagged so downloads are
  // distinguishable from registrations.
  try {
    await recordLead({
      intent: "eval-download",
      resource: `Procela Evaluation Build ${EVAL_VERSION}`,
      name: claims?.name || "(unknown)",
      email: claims?.email || "(unknown)",
      company: claims?.company || "(unknown)",
      role: claims?.role,
      message: note,
    });
  } catch (err) {
    console.error("Eval download logging failed:", err);
  }

  // Immediate notification (best-effort).
  if (resend && FROM && TO) {
    const who = claims
      ? `${claims.name} · ${claims.email} · ${claims.company}`
      : "an unidentified visitor (no registration token)";
    const subject = claims
      ? `Evaluation downloaded - ${claims.company}`
      : "Evaluation downloaded - (unattributed)";
    const text = [
      "Someone downloaded the evaluation build.",
      "",
      `Who: ${who}`,
      `Attribution: ${attribution}`,
      ip ? `IP: ${ip}` : null,
      ua ? `User agent: ${ua}` : null,
      referer ? `Referrer: ${referer}` : null,
    ]
      .filter((v): v is string => v !== null)
      .join("\n");
    const html =
      `<h2>Evaluation downloaded</h2>` +
      `<p><strong>Who:</strong> ${escapeHtml(who)}<br>` +
      `<strong>Attribution:</strong> ${escapeHtml(attribution)}` +
      (ip ? `<br><strong>IP:</strong> ${escapeHtml(ip)}` : "") +
      (ua ? `<br><strong>User agent:</strong> ${escapeHtml(ua)}` : "") +
      (referer ? `<br><strong>Referrer:</strong> ${escapeHtml(referer)}` : "") +
      `</p>`;
    try {
      await resend.emails.send({ from: FROM, to: [TO], subject, text, html });
    } catch (err) {
      console.error("Eval download notification failed:", err);
    }
  }

  // Hand the visitor the actual bundle. 302 so it's never cached as permanent.
  return NextResponse.redirect(EVAL_ZIP_URL, 302);
}
