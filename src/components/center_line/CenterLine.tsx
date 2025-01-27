import React, { useEffect, useState } from "react";
import generateGradient from "./generateGradient";
import styles from "./CenterLine.module.css";

const COLORS_COUNT = 11;

export default function CenterLine() {
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    setGradient(generateGradient(COLORS_COUNT));
  }, []);

  return (
    <div
      className={`${styles.bg_moving} min-h-screen w-full`}
      style={{ backgroundImage: gradient }}
    />
  );
}
