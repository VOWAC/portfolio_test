import React from "react";
import Header from "../components/header";
import Container from "../components/container";
import styles from "../styles/contact.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <Container>
        <div className={styles.header}>
          <Header title="コンタクト" />
          <nav className={styles.nav}>
            <Link href="/">
              <p className={styles.text}>トップ</p>
            </Link>
            <Link href="/about">
              <p className={styles.text}>アバウト</p>
            </Link>
            <Link href="/works">
              <p className={styles.text}>ワークス</p>
            </Link>
          </nav>
        </div>
        <div className={styles.fix}>
          <div className={styles.main}>
            <div className={styles.name}>
              <p>お名前</p>
              <input type="text" />
            </div>
            <div className={styles.mail}>
              <p>メールアドレス</p>
              <input type="text" />
            </div>
            <div className={styles.sendAndContent}>
              <div className={styles.content}>
                <p>お問い合わせ内容</p>
                <input type="text" />
              </div>
              {/* <a className={styles.send}>
              送信</a> */}
              <a href="#" className={styles.send}>
                <span className={styles.button__text}>送信</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Contact;
