import React, { useContext } from "react";
import styles from "./Tasks.module.css";
import TasksMenu from "../TasksMenu/TasksMenu";
import TasksList from "../TasksList/TasksList";
import NewTask from "../NewTask/NewTask";
import { PomodoroContext } from "../../contexts/PomodoroContext";
import Mode from "../../models/mode";

const Tasks = () => {
   const { mode } = useContext(PomodoroContext);

   return (
      <div className={`${styles.Tasks} ${mode === Mode.shortBreak && styles.shortBreakTheme} ${mode === Mode.longBreak && styles.longBreakTheme}`}>
         <div className={styles.wrapper}>
            <TasksMenu />
            <TasksList />
            <NewTask />
         </div>
      </div>
   );
};

export default Tasks;