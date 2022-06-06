import React from "react";
import styles from "./Tasks.module.css";
import TasksMenu from "../TasksMenu/TasksMenu";
import TasksList from "../TasksList/TasksList";
import NewTask from "../NewTask/NewTask";

const Tasks = () => {

   return (
      <div className={styles.Tasks}>
         <div className={styles.wrapper}>
            <TasksMenu />
            <TasksList />
            <NewTask />
         </div>
      </div>
   );
};

export default Tasks;