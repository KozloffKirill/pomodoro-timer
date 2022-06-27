import React, { useContext } from "react";
import { PomodoroContext } from "../../contexts/PomodoroContext";
import Mode from "../../models/mode";
import PomodoroSettings from "../PomodoroSettings/PomodoroSettings";
import styles from "./Header.module.css"
import logo from "../../assets/img/logo.svg";
import setting from "../../assets/img/settings-icon.svg";
import useModalState from "../../hooks/useModalState";

const Header = ({ text }) => {
   const { mode } = useContext(PomodoroContext);
   const [isOpen, onOpen, onClose] = useModalState(false);

   function handleSettingClick(e) {
      onOpen();
   }

   function handleOnClose(e) {
      onClose()
   }

   return (
      <>
         {isOpen &&
            <PomodoroSettings
               onClose={handleOnClose}
            />
         }
         <header className={`${styles.Header} ${mode === Mode.shortBreak && styles.shortBreakTheme} ${mode === Mode.longBreak && styles.longBreakTheme}`}>
            <div className={styles.wrapper}>
               <div className={styles.container}>
                  <p className={styles.name}>
                     <img src={logo} alt="logo" height="60" width="60" />
                     {text}
                  </p>
                  <button
                     className={styles.btnSettings}
                     onClick={handleSettingClick}
                  >
                     <img src={setting} alt="setting" height="16" width="16" />
                     Setting
                  </button>
               </div>
            </div>
         </header>
      </>
   );
};

export default Header;