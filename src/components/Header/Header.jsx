import React, { useContext } from "react";
import { PomodoroContext } from "../../contexts/PomodoroContext";
import Mode from "../../models/mode";
import styles from "./Header.module.css"

const Header = ({ text }) => {
   const { mode } = useContext(PomodoroContext);

   return (
      <header className={`${styles.Header} ${mode === Mode.shortBreak && styles.shortBreakTheme} ${mode === Mode.longBreak && styles.longBreakTheme}`}>
         <div className={styles.wrapper}>
            <p className={styles.name}>{text}</p>
         </div>
      </header>
   );
};

export default Header;