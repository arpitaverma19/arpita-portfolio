"use client";

import { useState } from "react";
import SplashScreen from "@/components/SplashScreen/SplashScreen";
import MainPage from "@/components/MainPage/MainPage";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {/* Show splash screen first */}
      {!splashDone && (
        <SplashScreen onEnter={() => setSplashDone(true)} />
      )}

      {/* Show main page after splash */}
      {splashDone && <MainPage />}
    </>
  );
}