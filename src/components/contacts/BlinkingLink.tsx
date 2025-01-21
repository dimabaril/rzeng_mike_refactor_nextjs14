"use client";

import { useEffect, useState } from "react";

interface BlinkingLinkProps {
  href: string;
}

export default function BlinkingLink({ href }: BlinkingLinkProps) {
  const [isBlinking, setIsBlinking] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const blink = () => {
      setIsBlinking(true);
      setOpacity(Math.random() * 0.7 + 0.3); // Случайная яркость от 0.3 до 1
      setTimeout(
        () => {
          setIsBlinking(false);
        },
        Math.random() * 200 + 50,
      ); // Продолжительность мигания от 50 до 250 мс
    };

    const interval = setInterval(
      () => {
        blink();
        setTimeout(blink, Math.random() * 200 + 50); // Второе мигание через короткий интервал
      },
      Math.random() * 3000 + 500,
    ); // Интервал между миганиями от 500 до 3500 мс

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      className={"block p-1"}
      href={href}
      target="_blank"
      // rel="noreferrer"
      style={{ opacity: isBlinking ? opacity : 1 }}
    >
      {href}
    </a>
  );
}
