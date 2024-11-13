"use client";

import React, { useRef, useState } from "react";
import { Modal } from "antd";
import Image from "next/image";
import ring from "/public/images/ring.png";
import styles from "./BlackHole.module.css";

export default function BlackHole() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const showModal = () => {
    setIsModalOpen(true);
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage('{"method":"play"}', "*");
    }
  };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  const handleCancel = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage('{"method":"pause"}', "*");
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <Image
        src={ring}
        alt="ring"
        // width={300}
        // height={300}
        className={`${styles.shake} w-1/2 self-center object-contain hover:cursor-pointer`}
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
        styles={{ body: { backgroundColor: "black" } }}
        modalRender={(modal) => {
          return React.isValidElement<React.HTMLAttributes<HTMLDivElement>>(
            modal,
          )
            ? React.cloneElement(modal, {
                style: {
                  ...modal.props.style,
                  borderRadius: 0,
                  padding: 40,
                  backgroundColor: "#222",
                },
              })
            : null;
        }}
      >
        {/* <video width="640" height="480" autoPlay muted loop>
          <source src="/videos/coffee.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <iframe
          ref={iframeRef}
          width="1000"
          height="562"
          src="https://player.vimeo.com/video/280087401?autoplay=1&loop=1&controls=0#t=6s"
          allow="autoplay; fullscreen"
        ></iframe>
      </Modal>
    </>
  );
}
