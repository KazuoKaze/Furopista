import React from "react";
import styles from "../styles/Footer.module.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const Footer = () => {
  return (
    <div className={styles.footer__div1}>
      <div className={styles.footer__div2}>
        <div className={styles.footer__div3}>
          <div className={styles.footer__div4}>
            <div className={styles.footer__div5}>
              <div className={styles.footer__div6}>
                <h2>Tech Specs</h2>
              </div>
              <div className={styles.footer__div7}>
                <svg className={styles.footer__svg1} viewBox="0 0 48 48">
                  <g>
                    <path d="M 24 14.25 a 9.56 9.56 0 1 0 9.55 9.55 h 0 A 9.56 9.56 0 0 0 24 14.25 Z m 0 17.51 a 8 8 0 1 1 8 -8 h 0 A 8 8 0 0 1 24 31.76 Z"></path>
                    <path d="M 45.11 18.49 l -2.9 -0.33 a 0.58 0.58 0 0 1 -0.46 -0.38 A 18 18 0 0 0 41 15.86 a 0.56 0.56 0 0 1 0 -0.6 L 42.83 13 a 2.13 2.13 0 0 0 -0.16 -2.84 l -4.8 -4.79 A 2.13 2.13 0 0 0 35 5.18 L 32.75 7 a 0.58 0.58 0 0 1 -0.61 0 a 18.71 18.71 0 0 0 -1.91 -0.79 a 0.57 0.57 0 0 1 -0.39 -0.46 l -0.33 -2.9 A 2.13 2.13 0 0 0 27.38 1 H 20.62 a 2.13 2.13 0 0 0 -2.13 1.9 l -0.33 2.9 a 0.57 0.57 0 0 1 -0.39 0.46 a 18.71 18.71 0 0 0 -1.91 0.79 a 0.56 0.56 0 0 1 -0.6 0 L 13 5.18 a 2.13 2.13 0 0 0 -2.84 0.16 L 5.34 10.13 A 2.11 2.11 0 0 0 5.18 13 L 7 15.26 a 0.56 0.56 0 0 1 0 0.6 a 18.78 18.78 0 0 0 -0.8 1.91 a 0.55 0.55 0 0 1 -0.46 0.39 l -2.9 0.33 A 2.13 2.13 0 0 0 1 20.62 v 6.76 a 2.13 2.13 0 0 0 1.89 2.13 l 2.9 0.33 a 0.55 0.55 0 0 1 0.46 0.39 c 0.23 0.65 0.5 1.29 0.79 1.91 a 0.53 0.53 0 0 1 0 0.6 L 5.17 35 a 2.13 2.13 0 0 0 0.16 2.84 l 4.79 4.79 a 2.13 2.13 0 0 0 2.84 0.16 L 15.25 41 a 0.57 0.57 0 0 1 0.6 0 a 18 18 0 0 0 1.92 0.79 a 0.58 0.58 0 0 1 0.38 0.46 l 0.33 2.9 A 2.13 2.13 0 0 0 20.61 47 h 6.77 a 2.13 2.13 0 0 0 2.12 -1.9 l 0.33 -2.9 a 0.55 0.55 0 0 1 0.39 -0.45 a 20 20 0 0 0 1.92 -0.8 a 0.57 0.57 0 0 1 0.6 0 L 35 42.82 a 2.12 2.12 0 0 0 2.84 -0.16 l 4.81 -4.78 A 2.12 2.12 0 0 0 42.82 35 L 41 32.75 a 0.57 0.57 0 0 1 0 -0.6 a 20 20 0 0 0 0.8 -1.92 a 0.55 0.55 0 0 1 0.46 -0.39 l 2.9 -0.33 A 2.12 2.12 0 0 0 47 27.39 V 20.62 A 2.13 2.13 0 0 0 45.11 18.49 Z m 0.3 8.89 a 0.53 0.53 0 0 1 -0.48 0.54 l -2.9 0.33 a 2.14 2.14 0 0 0 -1.78 1.45 a 16.75 16.75 0 0 1 -0.73 1.76 a 2.17 2.17 0 0 0 0.24 2.28 L 41.58 36 a 0.54 0.54 0 0 1 0 0.73 l -4.79 4.79 a 0.55 0.55 0 0 1 -0.73 0 l -2.28 -1.82 a 2.15 2.15 0 0 0 -2.28 -0.24 a 18.1 18.1 0 0 1 -1.76 0.73 A 2.12 2.12 0 0 0 28.26 42 l -0.33 2.9 a 0.55 0.55 0 0 1 -0.54 0.48 H 20.62 a 0.55 0.55 0 0 1 -0.54 -0.48 L 19.75 42 a 2.12 2.12 0 0 0 -1.44 -1.78 a 18.1 18.1 0 0 1 -1.76 -0.73 a 2.14 2.14 0 0 0 -1 -0.22 a 2.1 2.1 0 0 0 -1.32 0.46 L 12 41.58 a 0.55 0.55 0 0 1 -0.72 0 l -4.8 -4.79 a 0.56 0.56 0 0 1 0 -0.73 l 1.82 -2.28 a 2.13 2.13 0 0 0 0.24 -2.28 c -0.27 -0.58 -0.51 -1.16 -0.72 -1.76 A 2.13 2.13 0 0 0 6 28.26 l -2.9 -0.33 a 0.56 0.56 0 0 1 -0.49 -0.54 V 20.62 a 0.55 0.55 0 0 1 0.49 -0.54 L 6 19.75 a 2.16 2.16 0 0 0 1.78 -1.44 a 18 18 0 0 1 0.72 -1.76 a 2.13 2.13 0 0 0 -0.24 -2.28 L 6.42 12 a 0.55 0.55 0 0 1 0 -0.72 l 4.79 -4.79 a 0.55 0.55 0 0 1 0.73 0 l 2.28 1.82 a 2.15 2.15 0 0 0 2.28 0.24 a 16 16 0 0 1 1.76 -0.74 A 2.13 2.13 0 0 0 19.74 6 l 0.33 -2.9 a 0.55 0.55 0 0 1 0.54 -0.48 h 6.77 a 0.55 0.55 0 0 1 0.54 0.48 L 28.25 6 a 2.13 2.13 0 0 0 1.44 1.78 a 15.91 15.91 0 0 1 1.76 0.73 a 2.17 2.17 0 0 0 2.28 -0.24 L 36 6.42 a 0.54 0.54 0 0 1 0.73 0 l 4.79 4.79 a 0.55 0.55 0 0 1 0 0.72 l -1.8 2.3 a 2.12 2.12 0 0 0 -0.24 2.28 a 17.85 17.85 0 0 1 0.72 1.75 A 2.16 2.16 0 0 0 42 19.75 l 2.9 0.33 a 0.53 0.53 0 0 1 0.48 0.54 Z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className={styles.footer__div8}>
              <div className={styles.footer__div9}>
                <h4 className={styles.footer__line1}>TUO</h4>
                <KeyboardArrowDownIcon className={styles.footer__erow1} />
              </div>
              <div className={styles.footer__div10}></div>
            </div>
            <div className={styles.footer__div11}>
              <div className={styles.footer__div12}>
                <svg
                  viewBox="0 0 24 24"
                  className={styles.footer__svg2}
                  width="30"
                  height="34"
                >
                  <path d="M 10.9 5 H 13 v 2.3 h -2.1 V 5 Z m 0 14 V 9.7 H 13 V 19 h -2.1 Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;