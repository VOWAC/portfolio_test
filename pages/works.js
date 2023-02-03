import React from "react";
import Header from "../components/header"
import Container from "../components/container";
import styles from "../styles/works.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <Container>
        <div className={styles.header}>
          <Header title="ワークス" />
          <nav className={styles.nav}>
            <Link href="/">
              <p className={styles.text}>トップ</p>
            </Link>
            <Link href="/about">
              <p className={styles.text}>アバウト</p>
            </Link>
            <Link href="/contact">
              <p className={styles.text}>コンタクト</p>
            </Link>
          </nav>
        </div>
      </Container>
    </motion.div>
  );
};

export default Works;
