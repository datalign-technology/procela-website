"use client";

import { useState } from "react";
import Link from "next/link";
import { EVAL_ZIP_URL, EVAL_FILE_NAME, EVAL_VERSION } from "@/lib/eval";

/**
 * Registration gate for the downloadable evaluation build. Captures the lead
 * (name / work email / company) through the same /api/demo pipeline as the
 * other gated resources, then reveals and auto-starts the download of the
 * GitHub-hosted eval bundle. GitHub serves the asset with an attachment
 * disposition, so a same-tab click downloads without navigating away.
 */
export default function EvalDownloadGate() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  function startDownload() {
    try {
      const a = document.createElement("a");
      a.href = EVAL_ZIP_URL;
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch {
      /* the visible button in the success panel is the fallback */
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("sending");

    const fd = new FormData(e.currentTarget);
    const payload = {
      ...Object.fromEntries(fd.entries()),
      intent: "eval",
      resource: `Procela Evaluation Build ${EVAL_VERSION}`,
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
      startDownload();
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
          Thanks — <strong>{EVAL_FILE_NAME}</strong> should download
          automatically. If it doesn&apos;t, use the button below. We&apos;ve
          also emailed you the link and the quick-start steps.
        </p>
        <p style={{ marginTop: "1.25rem" }}>
          <a className="btn-primary-lg" href={EVAL_ZIP_URL} rel="noopener">
            Download {EVAL_FILE_NAME}
          </a>
        </p>
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

        <label className="eval-agree">
          <input type="checkbox" name="agree" required />
          <span>
            I understand this build is for evaluation use only, under the license
            included in the evaluation repository.
          </span>
        </label>

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
          {status === "sending" ? "Preparing your download…" : "Create account & download"}
        </button>
      </div>
      <p className="form-note">
        We&apos;ll email you the download link and setup steps, and may follow up
        about your evaluation. Unsubscribe anytime. See our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </form>
  );
}
