"use client";

import { useState } from "react";
import Link from "next/link";

type DemoFormProps = {
  /** "pilot" tailors the copy and tags the submission as a pilot request. */
  intent?: "demo" | "pilot";
};

export default function DemoForm({ intent = "demo" }: DemoFormProps) {
  const isPilot = intent === "pilot";
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("sending");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = { ...Object.fromEntries(fd.entries()), intent };

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data.error || "Something went wrong. Please try again.",
        );
      }
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("idle");
    }
  }

  if (status === "done") {
    return (
      <div className="form-success" role="status">
        <h3>Thanks — we&apos;ll be in touch.</h3>
        <p>
          {isPilot
            ? "A member of the Procela team will reach out shortly to scope your pilot and map it to your environment."
            : "A member of the Procela team will reach out shortly to schedule your walkthrough."}
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
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" autoComplete="organization" required />
        </div>
        <div className="field">
          <label htmlFor="industry">Industry</label>
          <select id="industry" name="industry" defaultValue="">
            <option value="" disabled>
              Select an industry
            </option>
            <option>Defense &amp; Aerospace</option>
            <option>Financial Services</option>
            <option>Healthcare &amp; Life Sciences</option>
            <option>Government &amp; Public Sector</option>
            <option>Energy &amp; Utilities</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="message">
            {isPilot
              ? "What domain would you pilot first?"
              : "What are you trying to govern?"}
          </label>
          <textarea
            id="message"
            name="message"
            placeholder={
              isPilot
                ? "Tell us about the domain you'd start with, your stack, and how you'd want to deploy — cloud, on-premise, or air-gapped."
                : "Tell us about your environment and stack."
            }
          />
        </div>

        {/* Honeypot: hidden from users, catches bots. */}
        <div className="hp" aria-hidden="true">
          <label htmlFor="company_website">Company website</label>
          <input
            id="company_website"
            name="company_website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="btn-primary-lg full"
          disabled={status === "sending"}
        >
          {status === "sending"
            ? "Sending…"
            : isPilot
              ? "Start a pilot"
              : "Request a demo"}
        </button>
      </div>
      <p className="form-note">
        By submitting, you agree to our{" "}
        <Link href="/terms">Terms of Service</Link> and{" "}
        <Link href="/privacy">Privacy Policy</Link>. We&apos;ll only use your details to
        contact you about Procela.
      </p>
    </form>
  );
}
