"use client";

import Aside from "@/components/aside/Aside";
import Main from "@/components/main/Main";
import TitleMain from "@/components/title_main/TitleMain";
import Contacts from "@/components/contacts/Contacts";
import Particles from "@/components/particules/Particles";
import { useEffect, useRef } from "react";

export default function Home() {
  const titleRef = useRef<HTMLDivElement>(null);
  // const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    // const particles = particlesRef.current;

    // if (!title || !particles) return;
    if (!title) return;

    const handleScroll = () => {
      const scroll = window.scrollY;
      title.style.transform = `translateY(+${scroll * 2}px)`;
      // particles.style.transform = `translateY(+${scroll}px)`;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-clip">
      <div className="sticky top-0 h-screen">
        <Particles />
      </div>
      <div
        ref={titleRef}
        className="absolute right-6 top-12 z-10 lg:right-60 lg:top-40"
      >
        <TitleMain>0^n</TitleMain>
      </div>
      <div className="relative overflow-hidden">
        {/* <div ref={particlesRef} className="h-screen"> */}
        <div className="fixed w-full">
          <Aside />
        </div>

        <div className="mx-auto max-w-[1200px]">
          <div className="text-xl text-white">
            <Main />
          </div>

          <div className="flex justify-center py-32 text-xl text-white">
            <Contacts />
          </div>
        </div>
      </div>
    </div>
  );
}
