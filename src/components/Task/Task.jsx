import React, { useContext } from "react";
import styles from "./Task.module.css";
import dots from "../../assets/img/three-dots-icon.svg";
import { TasksContext } from "../../contexts/TasksContext";

const Task = ({ data }) => {
   const { switchTaskCompleted } = useContext(TasksContext);

   function handleSwitchCompletedClick(e) {
      switchTaskCompleted(data.id);
   }

   function handleEditTaskClick(e) {

   }

   return (
      <article className={styles.Task}>
         <div className={styles.left + ` ${data.completed ? styles.completed : undefined}`}>
            <button
               className={styles.mark}
               onClick={handleSwitchCompletedClick}>
            </button>
            <span className={styles.name}>{data.name}</span>
         </div>
         <div className={styles.right}>
            <span className={styles.estimate}>
               {data.actPomodoros}/{data.estPomodoros}
            </span>
            <button className={styles.btnEdit} onClick={handleEditTaskClick}>
               <img src={dots} alt="edit" width="20" height="20" />
            </button>
         </div>
      </article>
   );
};

export default Task;