import React from "react";
import styles from "./Tasks.module.css";
import dots from "../../assets/img/three-dots-icon.svg";

const Tasks = () => {

   return (
      <div className={styles.Tasks}>
         <div className={styles.wrapper}>
            <div className={styles.tasksMenu}>
               <span>Tasks</span>
               <button className={styles.btnMenu}>
                  <img src={dots} width="20" height="20" />
               </button>
            </div>
            <ul className={styles.taskList}>
               {/*<li><Task /></li>
               <li><Task /></li>*/}
            </ul>
            <button className={styles.btnAdd}>Add task</button>
         </div>
      </div>
   );
};

export default Tasks;