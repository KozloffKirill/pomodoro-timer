import React from "react";
import styles from "./Header.module.css"

const Header = ({ text }) => {

   return (
      <header className={styles.Header}>
         <div className={styles.wrapper}>
            <p className={styles.name}>{text}</p>
         </div>
      </header>
   );
};

export default Header;