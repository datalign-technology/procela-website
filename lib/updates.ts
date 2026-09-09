// Content source for the rotating updates banner at the top of every page.
// To add, change, or remove an item, edit this list — a commit triggers a
// rebuild and the banner updates. Newest first. `href` may be an internal path
// ("/resources/...") or an external URL (set `external: true`). `label` is the
// small tag shown on the banner (e.g. "Blog", "Release", "News", "Event").
export type Update = {
  date: string;
  label: string;
  title: string;
  href: string;
  external?: boolean;
  /** Set when the linked post has a downloadable template — shows a template
   *  icon in place of the text label. */
  kit?: boolean;
};

export const UPDATES: Update[] = [
  {
    date: "September 2026",
    label: "Blog",
    title: "What belongs on a governance scorecard",
    href: "/resources/blog/what-belongs-on-a-governance-scorecard",
    kit: true,
  },
  {
    date: "September 2026",
    label: "Blog",
    title: "Where to begin with data governance",
    href: "/resources/blog/where-to-begin-with-data-governance",
    kit: true,
  },
];
