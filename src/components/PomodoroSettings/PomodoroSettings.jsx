import React, { useContext, useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./PomodoroSettings.module.css";
import close from "../../assets/img/close-icon.svg";
import { PomodoroContext } from "../../contexts/PomodoroContext";

const PomodoroSettings = ({ onClose }) => {
   const { settings, editSettings } = useContext(PomodoroContext);

   const [pomodoro, setPomodoro] = useState(settings.pomodoro);
   const [shortBreak, setShortBreak] = useState(settings.shortBreak);
   const [longBreak, setLongBreak] = useState(settings.longBreak);
   const [longBreakInterval, setLongBreakInterval] = useState(settings.longBreakInterval);

   function handlePomodoroChange(e) {
      setPomodoro(e.target.value);
   }

   function handleShortBreakChange(e) {
      setShortBreak(e.target.value);
   }

   function handleLongBreakChange(e) {
      setLongBreak(e.target.value);
   }

   function handleLongBreakIntervalChange(e) {
      setLongBreakInterval(e.target.value);
   }

   function handleSaveClick(e) {
      console.log(e);
      e.preventDefault();
      editSettings({
         pomodoro: Math.ceil(pomodoro),
         shortBreak: Math.ceil(shortBreak),
         longBreak: Math.ceil(longBreak),
         longBreakInterval: Math.ceil(longBreakInterval)
      });
      onClose();
   }

   function handleCloseClick(e) {
      onClose();
   }

   return (
      <Modal>
         <div className={styles.PomodoroSettings}>
            <header>
               <span className={styles.modalName}>Timer settings</span>
               <button
                  className={styles.btnClose}
                  onClick={handleCloseClick}
               >
                  <img width="24" height="24" alt="sloce" src={close} />
               </button>
            </header>
            <div className={styles.main}>
               <form className={styles.pomodoroForm} id="pomodoroForm">
                  <fieldset>
                     <div className={styles.fieldName}><span>Time (minutes)</span></div>
                     <div className={styles.timeInputs}>
                        <label>
                           Pomodoro
                           <input type="number" min="0" step="1"
                              value={pomodoro}
                              onChange={handlePomodoroChange}
                           />
                        </label>
                        <label>
                           Short Break
                           <input type="number" min="0" step="1"
                              value={shortBreak}
                              onChange={handleShortBreakChange}
                           />
                        </label>
                        <label>
                           Long Break
                           <input type="number" min="0" step="1"
                              value={longBreak}
                              onChange={handleLongBreakChange}
                           />
                        </label>
                     </div>
                  </fieldset>
                  <fieldset>
                     <div className={styles.intervalInputs}>
                        <div className={styles.fieldName}><span>Long Break interval</span></div>
                        <div>
                           <input type="number" min="0" step="1"
                              value={longBreakInterval}
                              onChange={handleLongBreakIntervalChange}
                           />
                        </div>
                     </div>
                  </fieldset>
               </form>
            </div>
            <footer>
               <button
                  className={styles.btnOk}
                  type="submit"
                  form="pomodoroForm"
                  onClick={handleSaveClick}
                  disabled={pomodoro <= 0 || shortBreak <= 0 || longBreak <= 0 || longBreakInterval <= 0}
               >
                  OK
               </button>
            </footer>
         </div>
      </Modal>
   );
};

export default PomodoroSettings;