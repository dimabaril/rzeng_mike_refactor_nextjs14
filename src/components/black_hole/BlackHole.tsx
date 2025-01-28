"use client";

import React, { useRef, useState } from "react";
import { Modal } from "antd";
import { isMobile } from "react-device-detect";
import styles from "./BlackHole.module.css";
import useInViewPort from "@/hooks/useInViewPort";

type vimeoProps = {
  vimeoId: number;
  startFrom?: number;
};

export default function BlackHole({ vimeoId, startFrom }: vimeoProps) {
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
      <div
        ref={ringRef}
        className={`${styles.shake} ${inViewport ? "scale-100" : "scale-0"} absolute inset-0 aspect-square duration-[1500ms] ease-in-out hover:cursor-pointer`}
        style={{
          backgroundImage:
            "radial-gradient(circle at center, black 20%, transparent 54%, white 61%, transparent 68%), radial-gradient(circle at calc(50% + 2%) calc(50% - 2%), black 20%, transparent 54%, white 61%, transparent 68%)",
        }}
        onClick={showModal}
      ></div>

      <Modal
        className="p-0"
        width={1080}
        centered
        title={null}
        footer={null}
        open={isModalOpen}
        onCancel={handleCancel}
        keyboard={true}
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
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&playsinline=1&controls=${isMobile ? 1 : 0}&muted=${isMobile ? 1 : 0}&loop=1#t=${startFrom ? startFrom : 0}s`}
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
