import React, { useState, useEffect, useContext } from "react";
import styles from "./PomodoroTimer.module.css";
import Mode from "../../models/mode.js";
import Skip from "../../assets/img/skip.png";
import { PomodoroContext } from "../../contexts/PomodoroContext";
import { TasksContext } from "../../contexts/TasksContext";

const PomodoroTimer = () => {
   const { settings, mode, editMode } = useContext(PomodoroContext);
   const { increaseActPomodoros, activeTask } = useContext(TasksContext);
   const [seconds, setSeconds] = useState(0);
   const [minutes, setMinutes] = useState(settings.pomodoro);
   const [isPaused, setIsPaused] = useState(true);
   const [pomodoroNumber, setPomodoroNumber] = useState(1);

   useEffect(() => {
      setSeconds(0);
      setMinutes(settings.pomodoro);
   }, [settings]);

   useEffect(() => {
      let interval = null;

      if (!isPaused) {
         interval = setInterval(() => {
            if (seconds === 0) {
               if (minutes !== 0) {
                  setMinutes(minutes - 1);
                  setSeconds(59);
               } else {
                  setIsPaused(true);
                  switchMode();
                  if (activeTask) {
                     increaseActPomodoros();
                  }
               }
            } else {
               setSeconds(seconds - 1);
            }
         }, 1000)
      }

      return () => {
         clearInterval(interval);
      }
   }, [isPaused, seconds, minutes]);

   function switchMode() {
      switch (mode) {
         case Mode.pomodoro:
            if (pomodoroNumber % settings.longBreakInterval) {
               editMode(Mode.shortBreak);
               setSeconds(0);
               setMinutes(settings.shortBreak);
            } else {
               editMode(Mode.longBreak);
               setSeconds(0);
               setMinutes(settings.longBreak);
            }
            setPomodoroNumber(pomodoroNumber + 1);
            break;
         case Mode.shortBreak:
            editMode(Mode.pomodoro);
            setSeconds(0);
            setMinutes(settings.pomodoro);
            break;
         case Mode.longBreak:
            editMode(Mode.pomodoro);
            setSeconds(0);
            setMinutes(settings.pomodoro);
            break;
         default:
            break;
      }
   }

   function handleSwitchModeClick(e, mode) {
      if (isPaused || window.confirm('The timer is still running, are you sure you want to switch?')) {
         setIsPaused(true);
         editMode(mode);
         switch (mode) {
            case Mode.pomodoro:
               setSeconds(0);
               setMinutes(settings.pomodoro);
               break;
            case Mode.shortBreak:
               setSeconds(0);
               setMinutes(settings.shortBreak);
               break;
            case Mode.longBreak:
               setSeconds(0);
               setMinutes(settings.longBreak);
               break;
            default:
               break;
         }
      }
   }

   function handleStartClick(e) {
      setIsPaused(!isPaused);
   }

   function handleSkipClick(e) {
      if (window.confirm('Are you sure you want to finish the round early?')) {
         setIsPaused(true);
         switchMode();
         if (mode === Mode.pomodoro && activeTask) {
            increaseActPomodoros();
         }
      }
   }

   const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
   const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
   return (
      <div className={styles.PomodoroTimer}>
         <div className={styles.wrapper}>
            <div className={styles.timer}>
               <div className={styles.modes}>
                  <button
                     className={mode === Mode.pomodoro ? styles.activeMode : undefined}
                     onClick={(e) => handleSwitchModeClick(e, Mode.pomodoro)}
                  >
                     Pomodoro
                  </button>
                  <button
                     className={mode === Mode.shortBreak ? styles.activeMode : undefined}
                     onClick={(e) => handleSwitchModeClick(e, Mode.shortBreak)}
                  >
                     Short Break
                  </button>
                  <button
                     className={mode === Mode.longBreak ? styles.activeMode : undefined}
                     onClick={(e) => handleSwitchModeClick(e, Mode.longBreak)}
                  >
                     Long Break
                  </button>
               </div>
               <div className={styles.time}>
                  {timerMinutes}:{timerSeconds}
               </div>
               <div className={styles.timerButtons}>
                  <button
                     className={`${isPaused ? styles.btnStart : styles.btnStop}`}
                     onClick={handleStartClick}
                  >
                     {isPaused ? "start" : "stop"}
                  </button>
                  <button
                     className={styles.btnSkip + ` ${isPaused ? styles.btnSkipTrans : undefined}`}
                     onClick={handleSkipClick}
                     disabled={isPaused ? true : false}
                  >
                     <img src={Skip} alt="skip" width="30" height="30" />
                  </button>
               </div>
            </div>
            <p className={styles.pomodoroNumber}>#{pomodoroNumber}</p>
         </div>
      </div>
   );
};

export default PomodoroTimer;