import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  alternates: {
    canonical: "/resources/blog/where-to-begin-with-data-governance",
  },
  title: "Where to begin with data governance — Procela",
  description:
    "Data governance can feel too big to start. A pragmatic on-ramp for companies at the beginning — start with a problem, scope one domain, assign real owners, and show progress — plus a first-90-days shape.",
};

export default function Post() {
  return (
    <ArticleLayout
      category="Blog"
      title="Where to begin with data governance"
      deck="Governance can feel too big to start. The teams that succeed don't boil the ocean — they start small, deliberately, and build momentum."
      meta="By the Procela team · September 2026 · 6 min read"
    >
      <p>
        Every data governance program starts the same way: with a blank page and
        the feeling that the task is enormous. Thousands of tables, dozens of
        systems, competing priorities, and a framework document that reads like a
        graduate course. It&apos;s no surprise so many programs stall before they
        begin. The good news is that you don&apos;t start by governing everything.
        You start with one problem, one domain, and a handful of people. Here&apos;s
        a pragmatic way to get moving.
      </p>

      <h2>Start with a problem, not a framework</h2>
      <p>
        It&apos;s tempting to begin by adopting a governance framework end to end.
        Don&apos;t. A framework is a map, not a starting point &mdash; and a
        program justified only by &ldquo;best practice&rdquo; rarely survives its
        first budget review. Anchor governance to a problem the business already
        feels: a failed audit, a report nobody trusts, a breach scare, a migration
        that keeps slipping.
      </p>
      <p>
        <strong>Try this:</strong> write one sentence &mdash; &ldquo;We&apos;re
        doing this because ___.&rdquo; If you can&apos;t fill the blank with
        something a business leader cares about, you&apos;re not ready to start;
        you&apos;re ready to keep looking for the real reason.
      </p>

      <h2>Scope tight — one domain, not the enterprise</h2>
      <p>
        The fastest way to fail is to try to govern everything at once. Pick a
        single, high-value data domain &mdash; the one behind the problem you just
        named &mdash; and draw a hard boundary around it. A narrow scope you finish
        beats a broad scope you abandon.
      </p>
      <p>
        <strong>Try this:</strong> choose one domain and list the systems and data
        it touches. If that list runs longer than a page, the scope is still too
        big &mdash; cut it down.
      </p>

      <h2>Assign people before you buy tools</h2>
      <p>
        Governance is an accountability system, not a software category. The most
        common early mistake is buying a platform and hoping it creates ownership.
        It doesn&apos;t. Name the owners and stewards for your chosen domain first
        &mdash; real people who answer for the data &mdash; and only then decide
        what tooling supports them.
      </p>
      <p>
        <strong>Try this:</strong> for your one domain, write down who owns the
        data and who stewards it, by name. The empty cells are your first finding,
        not a failure.
      </p>

      <h2>Write a few policies you&apos;ll actually enforce</h2>
      <p>
        A thick policy binder feels like progress and changes nothing. A handful of
        policies that are actually enforced changes behavior. Start with two or
        three that matter for your domain &mdash; access, retention, classification
        &mdash; and make sure each one is wired to something real.
      </p>
      <p>
        <strong>Try this:</strong> for each policy, name who enforces it and how
        you&apos;d prove it&apos;s in effect. If you can&apos;t, it&apos;s an
        aspiration, not a policy &mdash; and it&apos;s better to know that now.
      </p>

      <h2>Get a sponsor and make progress visible</h2>
      <p>
        Programs die in silence. You need an executive sponsor who feels the
        original problem, and you need to show them movement they can see. Early,
        visible wins buy you the runway to expand.
      </p>
      <p>
        <strong>Try this:</strong> agree with your sponsor on one number
        you&apos;ll move in 90 days &mdash; coverage of the domain, owners
        assigned, a gap closed &mdash; and report it, plainly, when you hit it.
      </p>

      <h2>Plan to expand, not to finish</h2>
      <p>
        Governance is never &ldquo;done,&rdquo; and treating it like a project with
        an end date sets you up to fail. Design your first domain as a template:
        the way you assigned owners, wrote policies, and measured progress should
        be repeatable. Then add the next domain, and the next.
      </p>
      <p>
        <strong>Try this:</strong> once your first domain is governed, write down
        what you&apos;d do the same way next time. That short playbook is worth
        more than any framework.
      </p>

      <h2>A first-90-days shape</h2>
      <p>
        If you want a simple sequence to start from and adapt:
      </p>
      <ul>
        <li>
          <strong>Weeks 1–2:</strong> name the problem and the sponsor; pick one
          domain.
        </li>
        <li>
          <strong>Weeks 3–6:</strong> map the domain&apos;s systems and data;
          assign owners and stewards.
        </li>
        <li>
          <strong>Weeks 7–10:</strong> write and wire up two or three policies;
          surface the obvious gaps.
        </li>
        <li>
          <strong>Weeks 11–13:</strong> close a visible gap, report the one number,
          and plan domain two.
        </li>
      </ul>
      <p>
        A note on speed: the audit-ready baseline itself &mdash; cataloguing the
        domain, classifying its data, assigning owners, and recording the controls
        that govern it &mdash; can land early, often within about a month. The rest
        of the quarter is momentum: closing gaps, reporting progress, and lining up
        the next domain. Treat the 30-day baseline as the first milestone, not the
        finish line.
      </p>

      <h2>The takeaway</h2>
      <p>
        Starting data governance isn&apos;t about adopting the perfect framework or
        buying the right platform. It&apos;s about picking one problem worth
        solving, scoping it tightly, putting real names against real data, and
        showing progress someone cares about. Do that once and you&apos;ll have
        what most stalled programs never get: proof that it works, and a repeatable
        way to do it again.
      </p>
    </ArticleLayout>
  );
}
