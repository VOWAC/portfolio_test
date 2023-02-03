import React from "react";
// import fydnr from "public/fydnr.png";
// import Image from "next/image";
import styles from "../styles/profile.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Profile = () => {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.icon}>
          {/* <Image src={fydnr} alt="icon" height="200px" width="200px"></Image> */}
        </div>
        <div className={styles.content}>
          <div className={styles.passingBar}>
            <h1 className={styles.passingText}>
              <ruby>
                金井<rt>カナイ</rt>
              </ruby>
              <ruby>
                雪華<rt>ユキハ</rt>
              </ruby>
            </h1>
          </div>

          <p>
            2004/02/05生まれ。19歳。
            <br />
            東京デザインテクノロジーセンター専門学校
            <br />
            スーパーITエンジニア専攻1年。
          </p>
          <p>
            WebXRに魅了された専門学生。
            <br />
            フロントエンドに興味があり、
            <br />
            Web系言語を中心に勉強しています。
          </p>
        </div>
        <p></p>
      </div>
    </>
  );
};

export default Profile;
