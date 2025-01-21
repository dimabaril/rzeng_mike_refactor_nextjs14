import React, { useEffect, useState } from "react";
import generateGradient from "./generateGradient";

const COLORS_COUNT = 15;

const TextGradientBg = () => {
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    setGradient(generateGradient(COLORS_COUNT));
  }, []);

  return (
    <div
      className={"py-2 text-center text-2xl"}
      style={{
        background: gradient,
      }}
    >
      fractal freedom that&apos;s what we strive for, but in
      fact..........................................
    </div>
  );
};

export default TextGradientBg;
