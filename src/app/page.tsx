"use client";

import Aside from "@/components/aside/Aside";
import Main from "@/components/main/Main";
import TitleMain from "@/components/title_main/TitleMain";
import Particles from "@/components/particles/Particles";
import { useEffect, useRef, useState } from "react";
import useInViewPort from "@/hooks/useInViewPort";

export default function Home() {
  const titleRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLImageElement>(null);

  const inViewport = useInViewPort(mainRef, {
    threshold: 0,
    rootMargin: "0px 0px -70% 0px",
  });

  useEffect(() => {
    const title = titleRef.current;

    if (!title) return;

    const handleScroll = () => {
      const scroll = window.scrollY;
      title.style.transform = `translateY(+${scroll * 2}px)`;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <div
      className="relative select-none overflow-clip"
      onContextMenu={handleContextMenu}
    >
      <div className="sticky top-0 -z-10 h-screen">
        <Particles />
      </div>

      {inViewport && (
        <div className="fixed top-0 w-full">
          <Aside />
        </div>
      )}

      <div
        ref={titleRef}
        className="absolute right-6 top-12 z-10 lg:right-60 lg:top-40"
      >
        <TitleMain>0^n</TitleMain>
      </div>

      <div
        ref={mainRef}
        className="z-20 mx-auto max-w-[1200px] text-xl text-white"
      >
        <Main />
      </div>
    </div>
  );
}
