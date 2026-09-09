"use client";

import { useState } from "react";
import Link from "next/link";

const FILE = "/downloads/procela-data-governance-starter-kit.xlsx";

export default function StarterKitGate() {
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
      resource: "Data Governance Starter Kit",
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
        a.href = FILE;
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
        <h3>Your download is ready</h3>
        <p>
          Thanks — your Data Governance Starter Kit should download
          automatically. If it doesn&apos;t, use the button below.
        </p>
        <a className="btn-primary-lg" href={FILE} download>
          Download the Starter Kit (.xlsx)
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
          {status === "sending" ? "Preparing your download…" : "Get the Starter Kit"}
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
