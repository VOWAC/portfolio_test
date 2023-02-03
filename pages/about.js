import Container from "../components/container";
import Header from "../components/header";
import React, { useEffect, useRef } from "react";
import styles from "../styles/about.module.scss";
import Profile from "../components/profile";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { motion } from "framer-motion";
import Skill from "../components/skill";

export default function About() {
  const hero = useRef();
  const content = useRef();
  const skill = useRef();
  useEffect(() => {
    gsap.set(content.current, {
      autoAlpha: 1,
    }); //opacity: 0;

    gsap.to(content.current, {
      autoAlpha: 0, //opacity: 1;とvisibility：visible;がつく
      y: -50,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#profile",
        start: "top center-=200px",
        end: "top center-=300px",
        // markers: true,
        scrub: true,
      },
      stagger: {
        from: "start",
        amount: 0.4,
      },
    });
  }, [content]);

  useEffect(() => {
    gsap.set(hero.current, {
      autoAlpha: 0,
    }); //opacity: 0;

    gsap.to(hero.current, {
      autoAlpha: 0, //opacity: 1;とvisibility：visible;がつく
      scrollTrigger: {
        trigger: "#hobby",
        start: "top bottom",
        end: "top center+=100px",
        // markers: true,
        scrub: true,
      },
    });

    gsap.to(hero.current, {
      autoAlpha: 1, //opacity: 1;とvisibility：visible;がつく
      y: -100,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#hobby",
        start: "top center+=100px",
        end: "top center",
        // markers: true,
        scrub: true,
      },
      stagger: {
        from: "start",
        amount: 0.4,
      },
    });

    gsap.set(hero.current, { autoAlpha: 1 });

    gsap.to(hero.current, {
      autoAlpha: 0, //opacity: 1;とvisibility：visible;がつく
      // y: -50,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#hobby",
        // start: "top-=100px top+=100px",
        start: "top center-=200px",
        end: "top center-=300px",
        // end: "top center",
        // markers: true,
        scrub: true,
      },
      stagger: {
        from: "start",
        amount: 0.4,
      },
    });
  }, [hero]);

  useEffect(() => {
    gsap.set(skill.current, {
      autoAlpha: 0,
    }); //opacity: 0;

    gsap.to(skill.current, {
      autoAlpha: 0, //opacity: 1;とvisibility：visible;がつく
      scrollTrigger: {
        trigger: "#skill",
        start: "top center+=300px",
        end: "top center+=200px",
        // markers: true,
        scrub: true,
      },
    });

    gsap.to(skill.current, {
      autoAlpha: 1, //opacity: 1;とvisibility：visible;がつく
      y: -200,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#skill",
        start: "top center+=200px",
        end: "top center",
        // markers: true,
        scrub: true,
      },
      stagger: {
        from: "start",
        amount: 0.4,
      },
    });

  }, [skill]);


  return (
    <motion.div
      // className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <div>
        <div className={styles.overall}>
          <Container>
            <div className={styles.header}>
              <Header title="アバウト" />
              <nav className={styles.nav2}>
                <Link href="/">
                  <p className={styles.text}>トップ</p>
                </Link>
                <Link href="/works">
                  <p className={styles.text}>ワークス</p>
                </Link>
                <Link href="/contact">
                  <p className={styles.text}>コンタクト</p>
                </Link>
              </nav>
            </div>
            <div className={styles.fix}>
              <div className={styles.frame}>
                <div className={styles.frameLeft}></div>
                <div className={styles.frameRight}></div>
              </div>
            </div>
          </Container>
        </div>

        <div className={styles.div}>
          <div className={styles.profile} id="profile" ref={content}>
            <Profile></Profile>
          </div>
          <div className={styles.hobby} id="hobby" ref={hero}>
          <Skill></Skill>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
