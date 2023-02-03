import React from "react";
import Image from "next/image";
import Texture from "../public/texture.jpg"
import styles from "../styles/bg.module.scss";
import logo from "../public/YukihaLogo.svg"

const Bg = () => {
  return (
    <>
      <Image
        className={styles.bg}
        src={Texture}
        layout="fill"
        objectFit="cover"
      />
      <Image
        className={styles.logo}
        src={logo}
        layout="fill"
        // objectFit="cover"
        //
      />
    </>
  );
};

export default Bg;
