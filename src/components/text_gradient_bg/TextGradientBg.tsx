import React, { useEffect, useState } from "react";
import generateGradient from "./generateGradient";
import styles from "./RunningLine.module.css";

const COLORS_COUNT = 15;

const TextGradientBg = () => {
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    setGradient(generateGradient(COLORS_COUNT));
  }, []);

  return (
    <div
      className="overflow-hidden whitespace-nowrap py-2 text-2xl"
      style={{
        background: gradient,
      }}
    >
      <div className={`${styles.animate_marquee} inline-block`}>
        <span>
          ....................fractal freedom that&apos;s what we strive for,
          but in fact....................
        </span>
        <span>
          ....................fractal freedom that&apos;s what we strive for,
          but in fact....................
        </span>
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
