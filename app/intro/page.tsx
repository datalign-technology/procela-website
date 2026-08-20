import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/intro" },
  title: "Procela — Intro",
  description:
    "A 60-second look at Procela: business-process-first data governance for regulated enterprises. Your data never leaves your perimeter.",
  openGraph: {
    title: "Procela — Intro",
    description:
      "A 60-second look at Procela: business-process-first data governance for regulated enterprises.",
    url: "https://www.procela.ai/intro",
    type: "video.other",
  },
};

export default function IntroPage() {
  return (
    <main
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        background: "#0b1512",
      }}
    >
      <iframe
        src="/intro-explainer.html"
        title="Procela intro explainer"
        allow="fullscreen"
        allowFullScreen
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
      />
    </main>
  );
}
