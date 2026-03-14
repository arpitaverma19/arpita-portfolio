"use client";

import { JSX } from "react";

import styles from "./Experience.module.scss";

// ─── TYPES ────────────────────────────────────────────────────────────────────
interface Job {
  readonly period: string;
  readonly company: string;
  readonly role: string;
  readonly bullets: readonly string[];
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const JOBS: Job[] = [
  {
    period: "Mar 2026 – Present",
    company: "Talentica Software",
    role: "Senior Software Engineer",
    bullets: [
      "Building new features for Autodesk Fusion 360 using React JS.",
      "Collaborating with cross-functional product and design teams in a fast-paced enterprise environment.",
    ],
  },
  {
    period: "Mar 2023 – Jan 2026",
    company: "Mobiquity / Hexaware Technologies",
    role: "Lead Engineer",
    bullets: [
      "Designed and implemented reusable, modular components using React, TypeScript, MUI and Next.js for a loan tracking application.",
      "Integrated third-party Kustomer Chat widget for seamless customer support.",
      "Built custom SVG circular progress bars and vertical stepper UI components.",
      "Created editable forms integrated with REST APIs via Axios, managed state using Redux Toolkit.",
      "Led SDLC best practices with Azure DevOps for version control and CI/CD pipelines.",
      "Mentored junior developers and led technical hiring for frontend engineering roles.",
    ],
  },
  {
    period: "Dec 2019 – Mar 2023",
    company: "Infosys",
    role: "Technology Analyst",
    bullets: [
      "Developed features for Microsoft's Learning Experience Platform using React, TypeScript and Fluent UI.",
      "Engineered a time range slider using Fluent UI for intuitive dataset filtering.",
      "Led full localization of UI using react-intl for global accessibility.",
      "Built a CSV import tool to streamline admin user record management.",
      "Enhanced UI accessibility with ARIA roles and keyboard navigation.",
      "Acted as feature owner driving development from analysis through client delivery.",
    ],
  },
  {
    period: "Jul 2017 – Dec 2019",
    company: "Harbinger Group",
    role: "Software Engineer",
    bullets: [
      "Developed customer-facing UI forms using ReactJS functional components with Axios.",
      "Implemented complaint submission and onboarding flows for a background verification platform.",
      "Delivered bug fixes, accessibility enhancements and performance improvements in an Agile team.",
    ],
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function Experience(): JSX.Element {
  return (
    <section
      aria-label="Work experience section"
      className={styles.section}
      id="experience"
    >
      {/* ── Header ── */}
      <div className={styles.header}>
        <p className={styles.sectionLabel}>Career Journey</p>
        <h2 className={styles.sectionTitle}>Work Experience</h2>
      </div>

      {/* ── Timeline ── */}
      <div className={styles.timeline}>
        {JOBS.map(({ period, company, role, bullets }: Job) => (
          <div key={company} className={styles.item}>
            {/* ── Left — Date ── */}
            <div className={styles.dateSide}>
              <span className={styles.period}>{period}</span>
              <span className={styles.company}>{company}</span>
            </div>

            {/* ── Dot ── */}
            <div aria-hidden="true" className={styles.dot} />

            {/* ── Right — Content ── */}
            <div className={styles.contentSide}>
              <h3 className={styles.role}>{role}</h3>
              <ul aria-label={`Responsibilities at ${company}`}>
                {bullets.map((bullet: string) => (
                  <li key={bullet} className={styles.bullet}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
