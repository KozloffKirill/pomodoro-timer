import React from "react";
import styles from "./Header.module.css"

const Header = ({ text }) => {

   return (
      <header className={styles.Header}>
         <div className={styles.wrapper}>
            <h1 className={styles.name}>{text}</h1>
         </div>
      </header>
   );
};

export default Header;