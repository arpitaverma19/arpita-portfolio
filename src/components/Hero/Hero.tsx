"use client";

import { JSX } from "react";
import Image from "next/image";

import styles from "./Hero.module.scss";

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const STATS = [
  { num: "8+", label: "Years Experience" },
  { num: "4", label: "Companies" },
  { num: "∞", label: "Clean Code" },
] as const;

const SKILL_PILLS = [
  "⚛️ React.js",
  "▲ Next.js",
  "🔷 TypeScript",
  "🎨 Material-UI",
  "🔧 Redux",
] as const;

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function Hero(): JSX.Element {
  return (
    <section aria-label="Hero section" className={styles.hero}>
      {/* ── Background ── */}
      <div aria-hidden="true" className={styles.bgGradient} />

      {/* ── Left Side — Text ── */}
      <div className={styles.textSide}>
        {/* Badge */}
        <div aria-label="Status" className={styles.badge}>
          🌸 Open to Opportunities
        </div>

        {/* Name */}
        <h1 className={styles.name}>
          Arpita
          <br />
          <em>Verma</em>
        </h1>

        {/* Title */}
        <p className={styles.title}>
          Senior Frontend Engineer · React.js · Next.js
        </p>

        {/* Description */}
        <p className={styles.desc}>
          Crafting elegant, high-performance web experiences for 8 years. I turn
          complex problems into clean interfaces that users love.
        </p>

        {/* CTA Buttons */}
        <div className={styles.cta}>
          <a
            aria-label="Go to experience section"
            className={styles.btnPrimary}
            href="#experience"
          >
            View My Work
          </a>

          <a
            aria-label="Send email to Arpita"
            className={styles.btnOutline}
            href="mailto:arpitaverma19@gmail.com"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div aria-label="Career statistics" className={styles.statsBar}>
          {STATS.map(({ num, label }) => (
            <div key={label} className={styles.statItem}>
              <span aria-hidden="true" className={styles.statNum}>
                {num}
              </span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right Side — Visual ── */}
      <div aria-hidden="true" className={styles.visualSide}>
        {/* Skill pills */}
        {SKILL_PILLS.map((pill, index) => (
          <span key={pill} className={styles.skillPill} data-index={index}>
            {pill}
          </span>
        ))}

        {/* Glow circle */}
        <div className={styles.glowCircle} />

        {/* Chibi Image */}
        <div className={styles.imageWrapper}>
          <Image
            alt="Arpita Verma chibi illustration"
            className={styles.chibImage}
            height={320}
            priority
            src="/arpita-hero-page.jpeg"
            width={260}
          />
        </div>
      </div>
    </section>
  );
}
