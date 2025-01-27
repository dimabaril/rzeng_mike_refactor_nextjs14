"use client";

import Image from "next/image";

import { useEffect, useRef, useState } from "react";

import CenterLine from "@/components/center_line/CenterLine";
import BlackHole from "@/components/black_hole/BlackHole";
import TextGradientBg from "@/components/text_gradient_bg/TextGradientBg";
import TitleEnd from "@/components/title_main/TitleEnd";

import styles from "./Main.module.css";
import Contacts from "../contacts/Contacts";

export default function Main() {
  const parallaxLayerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const frontLayer = parallaxLayerRef.current;

    if (!frontLayer) return;

    const handleScroll = () => {
      const scroll = window.scrollY / 1.5;
      frontLayer.style.transform = `translateY(-${scroll}px)`;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative h-full">
      <div className={` ${styles.grid_bg}`}>
        <div className={` ${styles.gradient_black_to_transparent}`}>
          <Image
            src="/images/photo_duo_bottom.png"
            alt="photo"
            width={800}
            height={722}
            priority
          />

          <div className="relative z-10 ml-auto lg:w-1/2">
            <p className="p-5">
              Rzeng & Mike Iv are a duo of intermedia artists engaged in
              creation of an intense abstraction - audio-visual
              &quot;outplace&quot;.
            </p>
            <p className="p-5">
              “Zero night” is our new audio-visual set where we bring to pass an
              attempt of cutting through borders of genres and discourses,
              cultural codes and identity policies in a perceptual
              transmutation.
            </p>
            <p className="p-5">
              Inheriting a counting system of “Arabian night” Zero night would
              be that of an untold story. Zero as a prehistoric or non-historic
              one, a parallel landscape, escaping grids and mapping.
            </p>
            <p className="p-5">
              Technically, this set is based on signal transmission of analogue
              and digitally synthesised sound sources through algorithms of
              sensitivity to the whole spectrogram with various processing,
              resampling and sequencing sonic and image-ing techniques in an
              experimental cross-media improvisation.
            </p>
          </div>
          <video
            className="-mt-48"
            // width="1200"
            // height="676"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          >
            <source src="/videos/web_video_1200.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <TextGradientBg />

      <div className="relative">
        {isMobile ? (
          <Image
            className=""
            src="/images/Copy of IMG_0349-cc_mobile.jpg"
            alt="photo"
            width={1080}
            height={777}
          />
        ) : (
          <Image
            className=""
            src="/images/Copy of IMG_0349-cc.jpg"
            alt="photo"
            width={1200}
            height={550}
          />
        )}

        <div className="absolute bottom-0 left-1/4 -translate-x-1/2 translate-y-1/2">
          <TitleEnd />
        </div>
      </div>

      <div className="flex justify-center py-32 text-xl text-white">
        <Contacts />
      </div>

      <div
        ref={parallaxLayerRef}
        className={"absolute left-[45%] top-1/3 w-[12%] lg:left-[30%]"}
      >
        <CenterLine />
      </div>

      <div className="absolute right-[5%] top-16 aspect-square w-1/3 lg:w-1/5">
        <BlackHole vimeoId={280087401} startFrom={6} />
      </div>

      <div className="absolute left-[5%] top-72 aspect-square w-1/5 lg:top-1/3 lg:w-1/6">
        <BlackHole vimeoId={1044695863} />
      </div>

      <div className="absolute bottom-5 left-[10%] aspect-square w-3/12 lg:bottom-[37%] lg:w-1/5">
        <BlackHole vimeoId={1044696793} />
      </div>

      <div className="absolute bottom-60 right-[5%] aspect-square w-1/5 lg:bottom-[43%] lg:w-1/6">
        <BlackHole vimeoId={1044701271} />
      </div>
    </div>
  );
}
