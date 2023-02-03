import React from "react";
// import hobby from "public/hobby.png";
// import Image from "next/image";
import styles from "../styles/hobby.module.scss";

const Hobby = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.imageContainer}>
        {/* <Image
          className={styles.image}
          src={hobby}
          layout="fill"
          objectFit="contain"
        /> */}
      </div>
      <div className={styles.content}>
        <p>
          イラストを描くことが好きです<br />
        </p>
        <p>女の子をよく書きます</p>
      </div>
    </div>
  );
};

export default Hobby;
