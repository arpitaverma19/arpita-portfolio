"use client";

import { JSX } from "react";

import styles from "./Skills.module.scss";

// ─── TYPES ────────────────────────────────────────────────────────────────────
interface SkillCard {
  readonly icon: string;
  readonly title: string;
  readonly tags: readonly string[];
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const SKILL_CARDS: SkillCard[] = [
  {
    icon: "⚛️",
    title: "Frontend Frameworks",
    tags: ["React.js", "Next.js", "JavaScript", "TypeScript"],
  },
  {
    icon: "🎨",
    title: "UI & Styling",
    tags: ["Material-UI", "Fluent UI", "SCSS", "CSS3", "HTML5"],
  },
  {
    icon: "🔧",
    title: "State & Data",
    tags: ["Redux Toolkit", "Context API", "Axios", "REST APIs"],
  },
  {
    icon: "♿",
    title: "Accessibility",
    tags: ["WCAG 2.2", "ARIA", "Semantic HTML", "react-intl"],
  },
  {
    icon: "🧪",
    title: "Testing & Quality",
    tags: ["Jest", "Enzyme", "React Testing Library", "SonarQube"],
  },
  {
    icon: "🚀",
    title: "DevOps & Tooling",
    tags: ["Git", "Azure DevOps", "CI/CD", "Webpack", "JIRA"],
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function Skills(): JSX.Element {
  return (
    <section aria-label="Skills section" className={styles.section} id="skills">
      {/* ── Header ── */}
      <div className={styles.header}>
        <p className={styles.sectionLabel}>Technical Expertise</p>
        <h2 className={styles.sectionTitle}>Core Skills</h2>
      </div>

      {/* ── Grid ── */}
      <div className={styles.grid}>
        {SKILL_CARDS.map(({ icon, title, tags }: SkillCard) => (
          <article key={title} aria-label={title} className={styles.card}>
            {/* Icon */}
            <span aria-hidden="true" className={styles.cardIcon}>
              {icon}
            </span>

            {/* Title */}
            <h3 className={styles.cardTitle}>{title}</h3>

            {/* Tags */}
            <ul aria-label={`${title} technologies`} className={styles.tags}>
              {tags.map((tag: string) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
