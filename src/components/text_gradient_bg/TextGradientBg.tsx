import React, { useEffect, useState } from "react";
import generateGradient from "./generateGradient";
import styles from "./RunningLine.module.css";
import localFont from "next/font/local";

const mikeySMatrix = localFont({ src: "../../app/fonts/MikeySMatrix.woff2" });

const COLORS_COUNT = 15;

const TextGradientBg = () => {
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    if (window.innerWidth >= 1000) {
      setGradient(generateGradient(COLORS_COUNT));
    }
  }, []);

  return (
    <div
      className="overflow-hidden whitespace-nowrap py-2 text-2xl"
      style={{
        background: gradient,
      }}
    >
      <div
        className={`${styles.animate_marquee} ${mikeySMatrix.className} inline-block antialiased`}
      >
        <span>
          ....................fractal freedom that&apos;s what we strive for,
          but in fact....................
        </span>
        <span>
          ....................fractal freedom that&apos;s what we strive for,
          but in fact....................
        </span>
      </div>
    </div>
  );
};

export default TextGradientBg;
