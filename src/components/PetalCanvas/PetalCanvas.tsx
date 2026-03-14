"use client";

import { useCallback, useEffect, useState, JSX } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

// ─── PARTICLES CONFIG ─────────────────────────────────────────────────────────
const PARTICLE_OPTIONS: ISourceOptions = {
  fullScreen: {
    enable: true,
    zIndex: 1,
  },
  particles: {
    number: {
      value: 40,
    },
    color: {
      value: ["#ffb8d4", "#ffd6e8", "#f9629f", "#ffc8de", "#e8447e"],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: { min: 0.3, max: 0.7 },
    },
    size: {
      value: { min: 4, max: 10 },
    },
    move: {
      enable: true,
      direction: "bottom",
      speed: { min: 1, max: 3 },
      straight: false,
      outModes: {
        default: "out",
      },
      drift: 1,
    },
    wobble: {
      enable: true,
      distance: 10,
      speed: 5,
    },
    rotate: {
      value: { min: 0, max: 360 },
      animation: {
        enable: true,
        speed: 5,
      },
    },
  },
  emitters: {
    position: {
      x: 50,
      y: -10,
    },
    rate: {
      quantity: 3,
      delay: 0.3,
    },
  },
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function PetalCanvas(): JSX.Element | null {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [engineReady, setEngineReady] = useState<boolean>(false);

  // ── Initialize engine once ──
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  // ── Hide petals after 5 seconds ──
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const particlesLoaded = useCallback(async (): Promise<void> => {
    // particles loaded successfully
  }, []);

  if (!engineReady || !isVisible) return null;

  return (
    <Particles
      id="sakura-petals"
      options={PARTICLE_OPTIONS}
      particlesLoaded={particlesLoaded}
    />
  );
}
