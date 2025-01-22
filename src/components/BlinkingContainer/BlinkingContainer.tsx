"use client";

import React, { useEffect, useState, useRef } from "react";

const OPACITY_MIN = 0.3;
const OPACITY_MAX = 1;
const BLINK_DURATION_MIN = 50;
const BLINK_DURATION_MAX = 250;
const BLINK_INTERVAL_MIN = 500;
const BLINK_INTERVAL_MAX = 3500;

export default function BlinkingContainer({
  children,
  opacityMin = OPACITY_MIN,
  opacityMax = OPACITY_MAX,
  blinkDurationMin = BLINK_DURATION_MIN,
  blinkDurationMax = BLINK_DURATION_MAX,
  blinkIntervalMin = BLINK_INTERVAL_MIN,
  blinkIntervalMax = BLINK_INTERVAL_MAX,
}: {
  children: React.ReactNode;
  opacityMin?: number;
  opacityMax?: number;
  blinkDurationMin?: number;
  blinkDurationMax?: number;
  blinkIntervalMin?: number;
  blinkIntervalMax?: number;
}) {
  const [isBlinking, setIsBlinking] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const opacityMinRef = useRef(opacityMin);
  const opacityMaxRef = useRef(opacityMax);
  const blinkDurationMinRef = useRef(blinkDurationMin);
  const blinkDurationMaxRef = useRef(blinkDurationMax);
  const blinkIntervalMinRef = useRef(blinkIntervalMin);
  const blinkIntervalMaxRef = useRef(blinkIntervalMax);

  useEffect(() => {
    const blink = () => {
      setIsBlinking(true);
      setOpacity(
        Math.random() * (opacityMaxRef.current - opacityMinRef.current) +
          opacityMinRef.current,
      ); // Случайная яркость от 0.3 до 1
      setTimeout(
        () => {
          setIsBlinking(false);
        },
        Math.random() *
          (blinkDurationMaxRef.current - blinkDurationMinRef.current) +
          blinkDurationMinRef.current,
      ); // Продолжительность мигания от 50 до 250 мс
    };

    const interval = setInterval(
      () => {
        blink();
        setTimeout(
          blink,
          Math.random() *
            (blinkDurationMaxRef.current - blinkDurationMinRef.current) +
            blinkDurationMinRef.current,
        ); // Второе мигание через случайное время
      },
      Math.random() *
        (blinkIntervalMaxRef.current - blinkIntervalMinRef.current) +
        blinkIntervalMinRef.current,
    ); // Интервал между миганиями от 500 до 3500 мс

    return () => clearInterval(interval);
  }, []);

  return <div style={{ opacity: isBlinking ? opacity : 1 }}>{children}</div>;
}
