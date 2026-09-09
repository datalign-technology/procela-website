"use client";

import { useState } from "react";
import Link from "next/link";

type Props = {
  /** Path to the downloadable file, served from /public. */
  file?: string;
  /** Human-readable resource name, tagged onto the captured lead. */
  resource?: string;
  /** Label for the submit button in its idle state. */
  submitLabel?: string;
  /** Heading shown once the download is ready. */
  successTitle?: string;
  /** Body shown once the download is ready. */
  successBody?: string;
  /** Label for the manual download button. */
  downloadLabel?: string;
};

export default function StarterKitGate({
  file = "/downloads/procela-data-governance-starter-kit.xlsx",
  resource = "Data Governance Starter Kit",
  submitLabel = "Get the Starter Kit",
  successTitle = "Your download is ready",
  successBody = "Thanks — your Data Governance Starter Kit should download automatically. If it doesn't, use the button below.",
  downloadLabel = "Download the Starter Kit (.xlsx)",
}: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("sending");

    const fd = new FormData(e.currentTarget);
    const payload = {
      ...Object.fromEntries(fd.entries()),
      intent: "starter-kit",
      resource,
    };

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("done");
      // Kick off the download automatically once we have their details.
      try {
        const a = document.createElement("a");
        a.href = file;
        a.setAttribute("download", "");
        document.body.appendChild(a);
        a.click();
        a.remove();
      } catch {
        /* the visible button below is the fallback */
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("idle");
    }
  }

  if (status === "done") {
    return (
      <div className="form-success" role="status">
        <h3>{successTitle}</h3>
        <p>{successBody}</p>
        <a className="btn-primary-lg" href={file} download>
          {downloadLabel}
        </a>
      </div>
    );
  }

  return (
    <form className="form-wrap" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field-row">
          <div className="field">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" autoComplete="organization" required />
          </div>
          <div className="field">
            <label htmlFor="role">Job title / role (optional)</label>
            <input id="role" name="role" type="text" autoComplete="organization-title" />
          </div>
        </div>

        {/* Honeypot: hidden from users, catches bots. */}
        <div className="hp" aria-hidden="true">
          <label htmlFor="company_website">Company website</label>
          <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}

        <button type="submit" className="btn-primary-lg full" disabled={status === "sending"}>
          {status === "sending" ? "Preparing your download…" : submitLabel}
        </button>
      </div>
      <p className="form-note">
        We&apos;ll email you the occasional Procela update and may follow up about
        your governance program. Unsubscribe anytime. See our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </form>
  );
}
