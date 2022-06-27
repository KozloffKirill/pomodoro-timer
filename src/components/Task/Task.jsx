import React, { useContext } from "react";
import styles from "./Task.module.css";
import dots from "../../assets/img/three-dots-icon.svg";
import { TasksContext } from "../../contexts/TasksContext";
import EditTask from "../EditTask/EditTask";
import useDropdown from "../../hooks/useDropdown";

const Task = ({ task, active }) => {
   const { switchTaskCompleted, selectActiveTask } = useContext(TasksContext);

   const [isEdit, setIsEdit, editRef] = useDropdown(false, () => {
      if (window.confirm('The change will be lost. Are you sure you want to close it?')) {
         setIsEdit(false);
      }
   });

   function handleActiveTaskClick(e) {
      if (active) {
         selectActiveTask(null)
      } else {
         selectActiveTask(task.id);
      }
   }

   function handleSwitchCompletedClick(e) {
      e.stopPropagation();
      switchTaskCompleted(task.id);
   }

   function handleEditTaskClick(e) {
      e.stopPropagation();
      setIsEdit(true);
   }

   function handleCancelClick(e) {
      setIsEdit(false);
   }

   return (
      <>
         {isEdit ?
            <EditTask
               task={task}
               cancel={handleCancelClick}
               ref={editRef}
            /> :
            <article
               className={`${styles.Task} ${active && styles.active}`}
               onClick={handleActiveTaskClick}
            >
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
            </article>
         }
      </>
   );
};

export default Task;