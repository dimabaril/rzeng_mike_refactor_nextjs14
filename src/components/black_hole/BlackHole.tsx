"use client";

import React, { useState } from "react";
import { Modal } from "antd";
import Image from "next/image";
import ring from "/public/images/ring.png";
import styles from "./BlackHole.module.css";

export default function BlackHole() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  const handleCancel = () => {
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
        width={800}
        // height={450}
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
                style: { ...modal.props.style, borderRadius: 0, padding: 0 },
              })
            : null;
        }}
      >
        {/* <video width="640" height="480" autoPlay muted loop>
          <source src="/videos/coffee.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <iframe
          width="800"
          height="450"
          src="https://player.vimeo.com/video/280087401?autoplay=1&loop=1"
          title="Vimeo video player"
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
        {/* <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/9UqYTZLymtQ?si=ZhHSk3OIIDH3qUwX&autoplay=1&controls=0"
          title="YouTube video player"
          controls="0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe> */}
      </Modal>
    </>
  );
}
