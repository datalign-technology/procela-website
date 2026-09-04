// Single source for the "Updates" section: it drives both the rotating banner
// at the top of every page and the /updates index page. To add, change, or
// remove an item, edit this list — a commit triggers a rebuild and both places
// update. Newest first. `href` may be an internal path ("/resources/...") or an
// external URL (set `external: true`). `label` is the small tag shown on the
// banner and card (e.g. "Blog", "Release", "News", "Event").
export type Update = {
  date: string;
  label: string;
  title: string;
  href: string;
  external?: boolean;
};

export const UPDATES: Update[] = [
  {
    date: "September 2026",
    label: "Blog",
    title: "What belongs on a governance scorecard",
    href: "/resources/blog/what-belongs-on-a-governance-scorecard",
  },
  {
    date: "September 2026",
    label: "Blog",
    title: "Govern the process, not just the data",
    href: "/resources/blog/govern-the-process-not-just-the-data",
  },
];
