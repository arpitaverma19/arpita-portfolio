import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Noto_Serif_JP } from "next/font/google";
import "./globals.scss";

// ─── FONTS ───────────────────────────────────────
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-noto",
  display: "swap",
});

// ─── METADATA (SEO) ──────────────────────────────
export const metadata: Metadata = {
  title: "Arpita Verma — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 8 years of experience in React.js, Next.js and TypeScript. Building elegant, scalable web applications.",
  keywords: [
    "Arpita Verma",
    "Senior Frontend Engineer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Bengaluru",
  ],
  authors: [{ name: "Arpita Verma" }],
};

// ─── ROOT LAYOUT ─────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${playfair.variable}
        ${dmSans.variable}
        ${notoSerifJP.variable}
      `}
    >
      <body>{children}</body>
    </html>
  );
}