"use client";

import styles from "./MainPage.module.scss";
import Hero from "@/components/Hero/Hero";
import Experience from "@/components/Experience/Experience";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import Navbar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import PetalCanvas from "../PetalCanvas/PetalCanvas";

export default function MainPage() {
  return (
    <>
      <PetalCanvas />
      <Navbar />
      <div id="snap-container" className={styles.snapContainer} role="main">
        <section className={styles.snapSection} id="home">
          <Hero />
        </section>

        <section className={styles.snapSection} id="experience">
          <Experience />
        </section>

        <section className={styles.snapSection} id="skills">
          <Skills />
        </section>

        <section className={styles.snapSection} id="contact">
          <Contact />
        </section>

        <Footer />
      </div>
    </>
  );
}
