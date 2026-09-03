import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  alternates: {
    canonical: "/resources/blog/govern-the-process-not-just-the-data",
  },
  title: "Govern the process, not just the data — Procela",
  description:
    "A finished data catalog that nobody trusts is a common place to get stuck. Here's why starting from your business processes makes governance easier — and practical steps you can try this week.",
};

export default function Post() {
  return (
    <ArticleLayout
      category="Blog"
      title="Govern the process, not just the data"
      deck="Plenty of teams finish a data catalog and still can't answer the questions that matter. Here's why — and a practical way to get unstuck."
      meta="By the Procela team · September 2026 · 6 min read"
    >
      <p>
        You can do everything the playbook says &mdash; crawl the warehouse,
        inventory the columns, classify what you find &mdash; and still end up
        with a catalog nobody trusts and questions nobody can answer. It&apos;s
        one of the most common and expensive places a governance effort gets
        stuck. If that sounds familiar, the problem usually isn&apos;t effort or
        tooling. It&apos;s the starting point.
      </p>

      <p>
        Most governance starts with the data: thousands of columns waiting to be
        labeled. But a column on its own can&apos;t tell you why it matters, who
        depends on it, or what breaks if it&apos;s wrong. Those answers live in
        how the business actually works &mdash; in its processes. Start there
        instead, and the rest of governance gets a lot easier. Here&apos;s what
        changes, and how to put it into practice.
      </p>

      <h2>Let ownership follow the work</h2>
      <p>
        Ask &ldquo;who owns this table?&rdquo; and you&apos;ll get a shrug. Ask
        &ldquo;who runs the monthly close?&rdquo; or &ldquo;who&apos;s
        responsible for outage restoration?&rdquo; and someone answers right
        away. Ownership is nearly impossible to assign in the abstract and
        obvious the moment you attach it to a process.
      </p>
      <p>
        <strong>Try this:</strong> instead of chasing owners table by table,
        list your key processes and name the person accountable for each. Let the
        data each process touches inherit that owner. You&apos;ll assign more
        real ownership in an afternoon than in months of asking &ldquo;whose is
        this?&rdquo;
      </p>

      <h2>Give policies something concrete to attach to</h2>
      <p>
        A retention or access rule written against &ldquo;customer data&rdquo; in
        general is an intention. The same rule attached to the specific
        activities that create, read, and report on that data is something you
        can actually enforce &mdash; and explain to someone who asks why.
      </p>
      <p>
        <strong>Try this:</strong> for each policy you have, write down the
        processes it applies to. If you can&apos;t name them, the policy
        isn&apos;t ready to enforce yet &mdash; and knowing that is far better
        than assuming it&apos;s covered.
      </p>

      <h2>Prioritize by what breaks, not by what&apos;s alphabetical</h2>
      <p>
        You can&apos;t govern everything at once, and teams that try tend to burn
        out before they finish. Processes give you a ranking the raw data
        can&apos;t: govern the assets your most critical work depends on first. A
        classification gap on data feeding a regulatory report is not the same as
        one on a scratch table nobody reads.
      </p>
      <p>
        <strong>Try this:</strong> pick the two or three highest-stakes processes
        you have &mdash; the ones tied to revenue, safety, or a regulator &mdash;
        and trace the data they depend on. That short list is your first
        governance backlog, already in priority order.
      </p>

      <h2>Make the audit a story you can tell</h2>
      <p>
        Auditors don&apos;t really want a list of controls; they want to follow a
        thread: this process, run by this person, uses this data, governed by
        this rule, and here&apos;s the record of what changed. When your
        governance is organized around processes, that narrative mostly already
        exists.
      </p>
      <p>
        <strong>Try this:</strong> take one important process and try to tell
        that story end to end today. Wherever the thread breaks &mdash; an
        unnamed owner, a policy with no teeth, a missing log &mdash; you&apos;ve
        just found your next piece of work.
      </p>

      <h2>Where to start this week</h2>
      <p>
        You don&apos;t need a new platform or a reorg to begin. Pick one process
        that matters and map it simply: the steps, the systems each step uses,
        the data that flows through, and who&apos;s accountable. Then answer four
        questions about it:
      </p>
      <ol style={{ margin: "0 0 1rem 1.25rem" }}>
        <li>Who owns the data this process depends on?</li>
        <li>What policies should apply &mdash; and are they actually in force?</li>
        <li>If this data were wrong or late, what would break?</li>
        <li>
          Could you show someone the chain from process, to data, to the control
          that governs it?
        </li>
      </ol>
      <p>
        The gaps you find are your roadmap. Do it for one process and you&apos;ll
        have a template &mdash; and a much easier argument &mdash; for the next.
      </p>

      <h2>The takeaway</h2>
      <p>
        Governing data without the work it serves gives you an inventory.
        Connecting the two gives you something people actually use. If your
        catalog is finished but nobody trusts it, the missing piece usually
        isn&apos;t more data &mdash; it&apos;s the business context that makes the
        data mean something. Start with one process, and let the work show you
        what to govern next.
      </p>
    </ArticleLayout>
  );
}
