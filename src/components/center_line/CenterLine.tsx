import React, { useEffect, useState } from "react";
import generateGradient from "./generateGradient";
import styles from "./CenterLine.module.css";

export default function CenterLine() {
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    setGradient(generateGradient());
  }, []);

  return (
    <div
      className={`${styles.bg_moving} min-h-screen w-full`}
      style={{ backgroundImage: gradient }}
    />
  );
}
