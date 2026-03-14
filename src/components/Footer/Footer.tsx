"use client";

import { JSX } from "react";

import styles from "./Footer.module.scss";

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function Footer(): JSX.Element {
  return (
    <footer aria-label="Footer" className={styles.footer}>
      <p className={styles.text}>
        Made with{" "}
        <span aria-label="love" className={styles.heart}>
          ❤️
        </span>{" "}
        by <span className={styles.name}>Arpita Verma</span>
      </p>

      <p className={styles.copy}>
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
