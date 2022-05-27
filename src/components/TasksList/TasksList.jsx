import React, { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";
import styles from "./TasksList.module.css";
import Task from "../Task/Task";

const TasksList = () => {
   const { tasks } = useContext(TasksContext);

   return (
      <ul className={styles.taskList}>
         {
            tasks?.map((task) => {
               return (
                  <li key={task.id}>
                     <Task task={task} />
                  </li>
               );
            })
         }
      </ul>
   );
}

export default TasksList;