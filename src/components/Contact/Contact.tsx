"use client";

import { JSX } from "react";

import styles from "./Contact.module.scss";

// ─── TYPES ────────────────────────────────────────────────────────────────────
interface ContactLink {
  readonly icon: string;
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly ariaLabel: string;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const CONTACT_LINKS: ContactLink[] = [
  {
    icon: "📧",
    label: "Email",
    value: "arpitaverma19@gmail.com",
    href: "mailto:arpitaverma19@gmail.com",
    ariaLabel: "Send email to Arpita Verma",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "+91 88408 33485",
    href: "tel:+918840833485",
    ariaLabel: "Call Arpita Verma",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/arpita-verma",
    href: "https://www.linkedin.com/in/arpita-verma-95b6a9106/",
    ariaLabel: "Visit Arpita Verma LinkedIn profile",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/arpitaverma19",
    href: "https://github.com/arpitaverma19",
    ariaLabel: "Visit Arpita Verma GitHub profile",
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function Contact(): JSX.Element {
  return (
    <section
      aria-label="Contact section"
      className={styles.section}
      id="contact"
    >
      {/* ── Background ── */}
      <div aria-hidden="true" className={styles.bgGradient} />

      {/* ── Content ── */}
      <div className={styles.content}>
        {/* ── Header ── */}
        <div className={styles.header}>
          <p className={styles.sectionLabel}>Get In Touch</p>
          <h2 className={styles.sectionTitle}>Say Hello 🌸</h2>
          <p className={styles.subtitle}>
            Open to exciting frontend engineering opportunities, collaborations,
            and conversations.
          </p>
        </div>

        {/* ── Links ── */}
        <ul aria-label="Contact links" className={styles.links}>
          {CONTACT_LINKS.map(
            ({ icon, label, value, href, ariaLabel }: ContactLink) => (
              <li key={label}>
                <a
                  aria-label={ariaLabel}
                  className={styles.chip}
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span aria-hidden="true" className={styles.chipIcon}>
                    {icon}
                  </span>
                  <span className={styles.chipContent}>
                    <span className={styles.chipLabel}>{label}</span>
                    <span className={styles.chipValue}>{value}</span>
                  </span>
                </a>
              </li>
            ),
          )}
        </ul>

        {/* ── Resume ── */}

        <a
          aria-label="Download Arpita Verma Resume PDF"
          className={styles.resumeBtn}
          download
          href="/ArpitaVerma_SeniorReactEngineer_CV2026.pdf"
        >
          Download Resume 🌸
        </a>
      </div>

      {/* ── Decorative Japanese text ── */}
      <p aria-hidden="true" className={styles.jpText}>
        お問い合わせ
      </p>
    </section>
  );
}
