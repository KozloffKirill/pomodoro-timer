import React from "react";
import styles from "./Header.module.css"

const Header = ({ text }) => {

   return (
      <header className={styles.Header}>
         <h1 className={styles.name}>{text}</h1>
      </header>
   );
};

export default Header;