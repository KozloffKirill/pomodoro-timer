import React, { useContext, useState, useRef, useEffect } from "react";
import styles from "./Task.module.css";
import dots from "../../assets/img/three-dots-icon.svg";
import { TasksContext } from "../../contexts/TasksContext";
import EditTask from "../EditTask/EditTask";

const Task = ({ task }) => {
   const [isEdit, setIsEdit] = useState(false);

   const { switchTaskCompleted } = useContext(TasksContext);

   const ref = useRef(null);
   useEffect(() => {
      function clickOutside(e) {
         if (ref.current && !ref.current.contains(e.target)) {
            if (window.confirm('The change will be lost. Are you sure you want to close it?')) {
               setIsEdit(false);
            }
         }
      }

      if (isEdit) {
         document.addEventListener('mousedown', clickOutside);
      }

      return () => {
         document.removeEventListener('mousedown', clickOutside);
      };
   }, [isEdit]);

   function handleSwitchCompletedClick(e) {
      switchTaskCompleted(task.id);
   }

   function handleEditTaskClick(e) {
      setIsEdit(true);
   }

   function handleCancelClick(e) {
      setIsEdit(false);
   }

   return (
      <article className={styles.Task}>
         {isEdit ?
            <EditTask
               task={task}
               cancel={handleCancelClick}
               ref={ref}
            /> :
            <>
               <div className={styles.firstRow}>
                  <div className={styles.left + ` ${task.completed ? styles.completed : undefined}`}>
                     <button
                        className={styles.mark}
                        onClick={handleSwitchCompletedClick}>
                     </button>
                     <span className={styles.name}>{task.name}</span>
                  </div>
                  <div className={styles.right}>
                     <span className={styles.estimate}>
                        {task.actPomodoros}/{task.estPomodoros}
                     </span>
                     <button className={styles.btnEdit} onClick={handleEditTaskClick}>
                        <img src={dots} alt="edit" width="20" height="20" />
                     </button>
                  </div>
               </div>
               {task.note &&
                  <div className={styles.secondRow}>
                     <p className={styles.note}>{task.note}</p>
                  </div>
               }
            </>
         }
      </article>
   );
};

export default Task;