import React, { useContext, useState } from "react";
import styles from "./TasksMenu.module.css";
import dots from "../../assets/img/three-dots-icon.svg";
import { TasksContext } from "../../contexts/TasksContext";
import trash from "../../assets/img/trash-icon.svg";

const TasksMenu = () => {
   const { clearAllTasks, clearCompletedTasks } = useContext(TasksContext);
   const [isOpen, setIsOpen] = useState(false);

   function handleOpenDropdownClick(e) {
      setIsOpen(!isOpen);
   }

   function handleClearCompletedTasksClick(e) {
      clearCompletedTasks();
      setIsOpen(false);
   }

   function handleClearAllTasksClick(e) {
      clearAllTasks();
      setIsOpen(false);
   }

   return (
      <div className={styles.TasksMenu}>
         <span>Tasks</span>
         <div className={styles.dropdown}>
            <button className={styles.btnMenu} onClick={handleOpenDropdownClick}>
               <img src={dots} alt="menu" width="20" height="20" />
            </button>
            {isOpen &&
               <ul className={styles.dropdownContent}>
                  <li onClick={handleClearCompletedTasksClick}>
                     <img width="20px" height="20px" alt="trash" src={trash} /> <span>Clear finished tasks</span>
                  </li>
                  <li onClick={handleClearAllTasksClick}>
                     <img width="20px" height="20px" alt="trash" src={trash} /> <span>Clear all tasks</span>
                  </li>
               </ul>
            }
         </div>

      </div>
   );
};

export default TasksMenu;