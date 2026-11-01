"use client";

import { useState, useSyncExternalStore } from "react";
import { Pause, Play } from "lucide-react";
import LetterGlitch from "@/components/effects/letter-glitch";

const motionQuery = "(prefers-reduced-motion: reduce)";
const subscribe = (callback: () => void) => {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};
const getMotionPreference = () => window.matchMedia(motionQuery).matches;
const getServerPreference = () => false;
const colors = ["#ff6082", "#ff9ab0", "#ffffff"];

export function HeroBackground() {
  const [paused, setPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribe,
    getMotionPreference,
    getServerPreference,
  );
  return (
    <>
      <div className="hero-atmosphere" aria-hidden="true">
        <LetterGlitch
          key={reducedMotion ? "still" : "motion"}
          glitchColors={colors}
          baseColor="#c5b8c0"
          fontSize={14}
          spacing={0.65}
          density={0.7}
          baseOpacity={0.16}
          glitchAmount={0.35}
          speed={reducedMotion ? 0 : 0.7}
          paused={paused}
          flow={reducedMotion ? 0 : 0.4}
          interactive={!paused && !reducedMotion}
          clickEffect={paused || reducedMotion ? "none" : "tear"}
          edgeFade={0.12}
          centerFade={0.3}
          intro={false}
          dpr={1.5}
        />
      </div>
      <button
        className="hero-motion-toggle"
        type="button"
        onClick={() => setPaused(!paused)}
        aria-pressed={paused}
      >
        {paused ? (
          <Play size={14} aria-hidden="true" />
        ) : (
          <Pause size={14} aria-hidden="true" />
        )}
        {paused ? "Play background" : "Pause background"}
      </button>
    </>
  );
}
