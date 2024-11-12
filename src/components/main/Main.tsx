"use client";

import Image from "next/image";

import { useEffect, useRef } from "react";
import styles from "./Main.module.css";

export default function Main() {
  const frontLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frontLayer = frontLayerRef.current;

    if (!frontLayer) {
      return;
    }

    const handleScroll = () => {
      const scroll = window.scrollY / 1.5;
      frontLayer.style.transform = `translateY(-${scroll}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.parallax} h-full`}>
      <div className="h-full bg-main bg-cover"></div>

      <Image
        src="/images/photo_duo_bottom.png"
        alt="photo duo bottom"
        width={500}
        height={500}
        className="w-full"
      />

      <div
        ref={frontLayerRef}
        className={`${styles.parallax__layer} absolute top-1/4 w-2/12 bg-center_line bg-contain opacity-70`}
      ></div>
    </div>
  );
}
