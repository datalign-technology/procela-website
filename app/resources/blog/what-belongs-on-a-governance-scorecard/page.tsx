import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  alternates: {
    canonical: "/resources/blog/what-belongs-on-a-governance-scorecard",
  },
  title: "What belongs on a governance scorecard — Procela",
  description:
    "Most governance dashboards measure activity, not outcomes. How to build a scorecard leadership actually trusts and acts on — plus a five-measure starter set you can adopt.",
};

export default function Post() {
  return (
    <ArticleLayout
      category="Blog"
      title="What belongs on a governance scorecard"
      deck="Most governance dashboards measure activity, not outcomes. Here's how to build one leadership actually trusts — and acts on."
      meta="By the Procela team · September 2026 · 6 min read"
    >
      <p>
        You built the dashboard. Most of the numbers are green. And leadership
        still doesn&apos;t quite trust it. If that&apos;s familiar, the dashboard
        is probably measuring the wrong things &mdash; effort instead of
        outcomes, volume instead of risk. A scorecard earns trust when every
        number answers a question someone actually cares about. Here&apos;s how
        to build one that does.
      </p>

      <h2>Measure outcomes, not activity</h2>
      <p>
        &ldquo;12,000 assets catalogued&rdquo; sounds like progress, but it
        doesn&apos;t tell anyone whether the data that <em>matters</em> is under
        control. Activity metrics reward motion; outcome metrics reward results.
        The question leadership is really asking is &ldquo;are we
        exposed?&rdquo; &mdash; not &ldquo;how busy is the team?&rdquo;
      </p>
      <p>
        <strong>Try this:</strong> for every metric on your dashboard, ask
        &ldquo;what decision would change if this number moved?&rdquo; If the
        answer is &ldquo;none,&rdquo; cut it.
      </p>

      <h2>Report a few measures, not fifty</h2>
      <p>
        A scorecard with forty metrics is a spreadsheet, and nobody reads it.
        Leadership can hold three to five numbers in their head; give them more
        and they&apos;ll trust none of them. Being disciplined about what you
        leave off is what makes the rest credible.
      </p>
      <p>
        <strong>Try this:</strong> force yourself to pick the five measures
        you&apos;d keep if you could show only five. That short list is your
        scorecard; everything else is supporting detail one click down.
      </p>

      <h2>Every number needs an owner and a source</h2>
      <p>
        A metric someone typed into a slide by hand is an opinion. A metric
        derived from the system of record is evidence. Trust collapses the first
        time a number can&apos;t be explained or reproduced, so each measure
        should have a clear definition, a named owner, and a source anyone can
        trace.
      </p>
      <p>
        <strong>Try this:</strong> next to each measure, write one sentence
        &mdash; how it&apos;s calculated and where the data comes from. If you
        can&apos;t, that measure isn&apos;t ready to report.
      </p>

      <h2>Show movement, with a one-line &ldquo;so what&rdquo;</h2>
      <p>
        A single snapshot can&apos;t tell you whether things are getting better
        or worse. Leadership wants the trend and the takeaway: what changed since
        last time, and why. A number with a short explanation is worth ten
        without one.
      </p>
      <p>
        <strong>Try this:</strong> pair each measure with its prior value and a
        sentence &mdash; &ldquo;classification of tier-1 data rose from 78% to
        91% after the billing domain was reviewed.&rdquo; That&apos;s the part
        people remember.
      </p>

      <h2>Tie each measure to a target and an action</h2>
      <p>
        A measure with no target is trivia &mdash; you can&apos;t tell good from
        bad. And a red number with no owner or next step just creates anxiety.
        Every measure should have a threshold that defines &ldquo;acceptable,&rdquo;
        and every miss should map to a specific action and a person.
      </p>
      <p>
        <strong>Try this:</strong> for each measure, write the target and what
        happens when it&apos;s missed &mdash; &ldquo;tier-1 coverage below 95%
        &rarr; steward review scheduled within a week.&rdquo;
      </p>

      <h2>A starter scorecard</h2>
      <p>
        If you&apos;re building from scratch, a small, outcome-focused set covers
        most of what leadership needs:
      </p>
      <ul>
        <li>
          <strong>Coverage of critical data</strong> &mdash; the share of your
          highest-tier assets that have an owner, a classification, and a policy.
        </li>
        <li>
          <strong>Classification of sensitive data</strong> &mdash; how much of
          your regulated or sensitive data is actually labeled.
        </li>
        <li>
          <strong>Ownership</strong> &mdash; the share of key domains and assets
          with a named, current owner.
        </li>
        <li>
          <strong>Open issues</strong> &mdash; unresolved governance issues, and
          how long they&apos;ve been open.
        </li>
        <li>
          <strong>Exceptions</strong> &mdash; approved policy exceptions, and how
          many are past their review date.
        </li>
      </ul>
      <p>
        Five numbers, each tied to a target, a source, and an owner, will tell a
        truer story than a wall of charts.
      </p>

      <h2>The takeaway</h2>
      <p>
        A good governance scorecard isn&apos;t a report card for the team &mdash;
        it&apos;s a decision tool for leadership. Measure outcomes, keep the list
        short, make every number traceable, and tie each one to a target and an
        action. Do that, and the scorecard stops being something you defend and
        becomes something people use.
      </p>
    </ArticleLayout>
  );
}
