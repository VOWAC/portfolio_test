import React from "react";
import styles from "../styles/header.module.scss";
import Container from "./container";

export default function Header({ title }) {
  return (
    <Container>
      <div className={styles.overAll}>
        <header className={styles.navFalse}>
          <p>{title}</p>
        </header>
      </div>
    </Container>
  );
}
