import React from "react";
import styles from "./Footer.module.css";
import github from "../../assets/img/github-icon.svg";
import telegram from "../../assets/img/telegram-icon.svg";

const Footer = () => {

   return (
      <footer className={styles.Footer}>
         <div className={styles.wrapper}>
            <p className={styles.developer}>
               Made by <a href="mailto:kirillkozlove39@gmail.com">Kozlov Kirill</a>
            </p>
            <ul className={styles.links}>
               <li>
                  <a href="https://github.com/KozloffKirill" target="_blank" rel="noreferrer">
                     <img src={github} alt="github link" width="40" />
                  </a>
               </li>
               <li>
                  <a href="https://t.me/KKozl0v" target="_blank" rel="noreferrer">
                     <img src={telegram} alt="telegram link" width="40" />
                  </a>
               </li>
            </ul>
         </div>
      </footer>
   );
};

export default Footer;
