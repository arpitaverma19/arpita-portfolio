"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./SplashScreen.module.scss";

interface SplashScreenProps {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const [leaving, setLeaving] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEnter = () => {
    setLeaving(true);
    setTimeout(() => {
      onEnter();
    }, 800);
  };

  return (
    <div
      className={`
        ${styles.splash}
        ${mounted ? styles.mounted : ""}
        ${leaving ? styles.leaving : ""}
      `}
      onClick={handleEnter}
    >
      {/* Background blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />

      {/* Main content */}
      <div className={styles.content}>
        {/* Image */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageGlow} />
          <Image
            src="/arpita-image.jpeg"
            alt="Arpita Verma"
            width={280}
            height={340}
            className={styles.image}
            priority
          />
        </div>

        {/* Text */}
        <div className={styles.textWrapper}>
          <p className={styles.greeting}>Hello There</p>

          <h1 className={styles.name}>
            I&apos;m <em>Arpita</em>
          </h1>

          <p className={styles.role}>Senior Frontend Engineer</p>

          <p className={styles.message}>
            Welcome to my little corner of the internet.
            <br />
            Hope you enjoy your visit 🌸
          </p>

          <button className={styles.enterBtn} onClick={handleEnter}>
            <span>Enter Portfolio</span>
            <span className={styles.arrow}>→</span>
          </button>

          <p className={styles.hint}>or click anywhere to continue</p>
        </div>
      </div>
    </div>
  );
}
