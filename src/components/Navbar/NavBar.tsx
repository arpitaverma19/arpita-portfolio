"use client";

import { useState, useEffect, JSX } from "react";
import Link from "next/link";

import styles from "./NavBar.module.scss";

interface NavLink {
  readonly label: string;
  readonly href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const RESUME_PATH = "/ArpitaVerma_SeniorReactEngineer_CV2026.pdf";
const SCROLL_THRESHOLD = 50;

export default function Navbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const container = document.getElementById(
      "snap-container",
    ) as HTMLDivElement | null;

    if (!container) return;

    const handleScroll = (): void => {
      setIsScrolled(container.scrollTop > SCROLL_THRESHOLD);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}
      role="navigation"
    >
      <Link
        aria-label="Go to home section"
        className={styles.logo}
        href="#home"
      >
        Arpita Verma{" "}
        <span aria-hidden="true" className={styles.dot}>
          ✦
        </span>
      </Link>

      <ul className={styles.links} role="list">
        {NAV_LINKS.map(({ label, href }: NavLink) => (
          <li key={href}>
            <a
              aria-label={`Go to ${label} section`}
              className={styles.link}
              href={href}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a
        aria-label="Download Arpita Verma Resume PDF"
        className={styles.resumeBtn}
        download
        href={RESUME_PATH}
      >
        Download CV 🌸
      </a>
    </nav>
  );
}
