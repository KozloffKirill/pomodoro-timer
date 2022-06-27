import React from "react";
import styles from "./NewTask.module.css";
import AddTask from "../AddTask/AddTask";
import useDropdown from "../../hooks/useDropdown";

const NewTask = () => {
   const [isAdd, setIsAdd, addRef] = useDropdown(false, () => setIsAdd(false));

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
               ref={addRef}
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