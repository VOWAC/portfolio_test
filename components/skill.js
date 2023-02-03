import React, { useState } from "react";
import styles from "../styles/skill.module.scss";

const Skill = () => {
  return (
    <>
      <List></List>
    </>
  );
};

export const List = () => {
  const [html, setHtml] = useState(true);
  const [css, setCss] = useState(false);
  const [js, setJs] = useState(false);
  const [figma, setFigma] = useState(false);
  const [react, setReact] = useState(false);
  return (
    <div className={styles.list}>
      <div className={styles.layout}>
        <div className={styles.chartItems}>
          <div className={styles.chart}>
            {html ? (
              <>
                <div className={styles.HTML}>
                  <p>
                    HTML
                    <br />
                    80%
                  </p>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className={styles.chart}>
            {css ? (
              <>
                <div className={styles.CSS}>
                  <p>
                    CSS
                    <br />
                    70%
                  </p>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className={styles.chart}>
            {js ? (
              <>
                <div className={styles.JavaScript}>
                  <p>
                    JavaScript
                    <br />
                    60%
                  </p>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className={styles.chart}>
            {figma ? (
              <>
                <div className={styles.Figma}>
                  <p>
                    Figma
                    <br />
                    55%
                  </p>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className={styles.chart}>
            {react ? (
              <>
                <div className={styles.React}>
                  <p>
                    React/<br />
                    Next.js
                    <br />
                    53%
                  </p>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          {/* chart */}
        </div>
        {/* chartitems */}
        <div className={styles.boxRight}>
          <div className={styles.listItem}>
            <p
              className={`${html ? styles.true : styles.false}`}
              onClick={() => {
                setHtml(true);
                setCss(false);
                setJs(false);
                setFigma(false);
                setReact(false);
              }}
            >
              HTML
            </p>

            <p
              className={`${css ? styles.true : styles.false}`}
              onClick={() => {
                setHtml(false);
                setCss(true);
                setJs(false);
                setFigma(false);
                setReact(false);
              }}
            >
              CSS
            </p>

            <p
              className={`${js ? styles.true : styles.false}`}
              onClick={() => {
                setHtml(false);
                setCss(false);
                setJs(true);
                setFigma(false);
                setReact(false);
              }}
            >
              JavaScript
            </p>

            <p
              className={`${figma ? styles.true : styles.false}`}
              onClick={() => {
                setHtml(false);
                setCss(false);
                setJs(false);
                setFigma(true);
                setReact(false);
              }}
            >
              Figma
            </p>

            <p
              className={`${react ? styles.true : styles.false}`}
              onClick={() => {
                setHtml(false);
                setCss(false);
                setJs(false);
                setFigma(false);
                setReact(true);
              }}
            >
              React/Next.js
            </p>
          </div>
          <div className={styles.textItems}>
            <div className={styles.chartText}>
              {html ? (
                <>
                  <p className={styles.chartText}>コーディングができます</p>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.chartText}>
              {css ? (
                <>
                  <p className={styles.chartText}>
                    基本的なCSSと簡単なCSSアニメーションを
                    <br />
                    コーディングすることができます
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.chartText}>
              {js ? (
                <>
                  <p className={styles.chartText}>
                    Three.js,p5.jsなどのWebGL系の
                    <br />
                    JavaScriptライブラリを勉強中です
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.chartText}>
              {figma ? (
                <>
                  <p className={styles.chartText}>
                    基本的な操作はできます。
                    <br />
                    ワイヤーフレームとモックはFigmaで作っています
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.chartText}>
              {react ? (
                <>
                  <p className={styles.chartText}>
                    TypeScriptも併せて勉強中です
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div> // list
  );
};

export default Skill;
