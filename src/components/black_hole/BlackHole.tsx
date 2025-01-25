"use client";

import React, { useRef, useState } from "react";
import { Modal } from "antd";
import Image from "next/image";
import ring from "/public/images/ring.png";
import styles from "./BlackHole.module.css";
import useInViewPort from "@/hooks/useInViewPort";

export default function BlackHole() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const ringRef = useRef(null);
  const inViewport = useInViewPort(ringRef, { threshold: 0.5 });

  const showModal = () => {
    setIsModalOpen(true);
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage('{"method":"play"}', "*");
    }
  };

  const handleCancel = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage('{"method":"pause"}', "*");
    }
    setIsModalOpen(false);
  };

  return (
    <>
      {/* <Image
        ref={ringRef}
        src={ring}
        alt="ring"
        // width={300}
        // height={300}
        className={`${styles.shake} ${inViewport ? "scale-100" : "scale-0"} object-contain duration-[1500ms] ease-in-out hover:cursor-pointer`}
        onClick={showModal}
      /> */}

      <div
        ref={ringRef}
        className={`${styles.shake} ${inViewport ? "scale-100" : "scale-0"} absolute inset-0 duration-[1500ms] ease-in-out hover:cursor-pointer`}
        style={{
          backgroundImage:
            "radial-gradient(circle at center, black 40%, transparent 50%, white 60%, transparent 70%",
        }}
        onClick={showModal}
      />

      <Modal
        className="p-0"
        width={1080}
        // height={450}
        centered
        title={null}
        footer={null}
        open={isModalOpen}
        onCancel={handleCancel}
        keyboard={true}
        // styles={{ body: { backgroundColor: "black" } }}
        modalRender={(modal) => {
          return React.isValidElement<React.HTMLAttributes<HTMLDivElement>>(
            modal,
          )
            ? React.cloneElement(modal, {
                style: {
                  ...modal.props.style,
                  borderRadius: 0,
                  padding: window.innerWidth >= 1024 ? 40 : 0,
                  backgroundColor: "black",
                },
              })
            : null;
        }}
      >
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/280087401?autoplay=1&amp;controls=0&amp;loop=1#t=6s"
            allow="autoplay; fullscreen"
            className="absolute left-0 top-0 h-full w-full"
            title="Rzeng - Tg X"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Modal>
    </>
  );
}
