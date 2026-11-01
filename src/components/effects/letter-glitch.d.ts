import type { ComponentType, HTMLAttributes } from "react";

export interface LetterGlitchProps extends HTMLAttributes<HTMLDivElement> {
  glitchColors?: string[];
  baseColor?: string;
  characters?: string;
  fontFamily?: string;
  fontSize?: number;
  spacing?: number;
  density?: number;
  baseOpacity?: number;
  glitchAmount?: number;
  speed?: number;
  /** Freeze the current frame until resumed. */
  paused?: boolean;
  smooth?: boolean;
  interactive?: boolean;
  cursorRadius?: number;
  clickEffect?: "tear" | "burst" | "none";
  flow?: number;
  edgeFade?: number;
  centerFade?: number;
  intro?: boolean;
  lightMode?: boolean;
  backgroundColor?: string;
  dpr?: number;
}
declare const LetterGlitch: ComponentType<LetterGlitchProps>;
export default LetterGlitch;
