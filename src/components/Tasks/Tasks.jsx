import React from "react";
import styles from "./Tasks.module.css";
import TasksProvider from "../../contexts/TasksContext";
import TasksMenu from "../TasksMenu/TasksMenu";
import TasksList from "../TasksList/TasksList";
import NewTask from "../NewTask/NewTask";

const Tasks = () => {

   return (
      <div className={styles.Tasks}>
         <TasksProvider>
            <div className={styles.wrapper}>
               <TasksMenu />
               <TasksList />
               <NewTask />
            </div>
         </TasksProvider>
      </div>
   );
};

export default Tasks;