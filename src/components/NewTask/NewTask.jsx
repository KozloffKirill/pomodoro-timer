import React, { useState } from "react";
import styles from "./NewTask.module.css";
import AddTask from "../AddTask/AddTask";

const NewTask = () => {
   const [isAdd, setIsAdd] = useState(false);

   function handleAddTaskClick(e) {
      setIsAdd(true);
   }

   function handleCancelClick() {
      setIsAdd(false);
   }

   return (
      <div className={styles.NewTask}>
         {isAdd ?
            <AddTask
               cancel={handleCancelClick}
            /> :
            <button
               className={styles.btnAdd}
               onClick={handleAddTaskClick}
            >
               Add task
            </button>
         }

      </div>
   );
};

export default NewTask;