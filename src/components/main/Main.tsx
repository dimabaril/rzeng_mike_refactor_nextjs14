"use client";

import Image from "next/image";

import { useEffect, useRef } from "react";
// import styles from "./Main.module.css";

import CenterLine from "../center_line/CenterLine";
import BlackHole from "../black_hole/BlackHole";

export default function Main() {
  const frontLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frontLayer = frontLayerRef.current;

    if (!frontLayer) return;

    const handleScroll = () => {
      const scroll = window.scrollY / 1.5;
      frontLayer.style.transform = `translateY(-${scroll}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={"relative h-full"}>
      <div className="flex flex-col">
        <Image
          // className="bg-black pb-32 pr-32"
          src="/images/photo_duo.jpg"
          alt="photo duo"
          width={800}
          height={0}
          // className="self-center"
        />

        <div className="ml-auto w-1/2">
          <p className="py-5">
            Rzeng & Mike Iv are a duo of intermedia artists engaged in creation
            of an intense abstraction - audio-visual &quot;outplace&quot;.
          </p>
          <p className="py-5">
            “Zero night” is our new audio-visual set where we bring to pass an
            attempt of cutting through borders of genres and discourses,
            cultural codes and identity policies in a perceptual transmutation.
          </p>
          <p className="py-5">
            Inheriting a counting system of “Arabian night” Zero night would be
            that of an untold story. Zero as a prehistoric or non-historic one,
            a parallel landscape, escaping grids and mapping.
          </p>
          <p className="py-5">
            Technically, this set is based on signal transmission of analogue
            and digitally synthesised sound sources through algorithms of
            sensitivity to the whole spectrogram with various processing,
            resampling and sequencing sonic and image-ing techniques in an
            experimental cross-media improvisation.
          </p>
        </div>
      </div>

      <video width="1200" height="676" autoPlay muted loop preload="none">
        <source src="/videos/web_video_1200.mp4" type="video/mp4" />
        {/* <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        /> */}
        Your browser does not support the video tag.
      </video>

      <div>
        fractal freedom that's what we strive for, but in
        fact..........................................
      </div>

      <Image
        src="/images/Copy of IMG_0349-cc.jpg"
        alt="photo duo bottom"
        width={1200}
        height={0}
        className="w-full"
      />

      <div ref={frontLayerRef} className={"absolute left-80 top-1/3 z-10 w-36"}>
        <CenterLine />
      </div>

      <div className="absolute right-[5%] top-16 z-10 w-[256px]">
        <BlackHole />
      </div>
      <div className="absolute left-[5%] top-1/3 z-10 w-[200px]">
        <BlackHole />
      </div>
    </div>
  );
}
