import React from "react";
import Link from "next/link";
import styles from "../styles/top.module.scss";
// import Container from "../components/container";
import { motion } from "framer-motion";

export function Menu() {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Link className={styles.text} href="/about">
            アバウト
          </Link>
        </li>
        <li>
          <Link className={styles.text} href="/works">
            ワークス
          </Link>
        </li>
        <li>
          <Link className={styles.text} href="/contact">
            コンタクト
          </Link>
        </li>
      </ul>
    </div>
  );
}

const Top = () => {
  return (
    <motion.div
      // className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      //     initial={{ width: 0 }}
      // animate={{ width: "100%" }}
      // exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      {/* <Container> */}
        <div className={styles.container}>
          <h2>ポートフォリオ</h2>
          <h1>金井雪華</h1>
          <Menu></Menu>
        </div>
      {/* </Container> */}
    </motion.div>
  );
};

export default Top;
