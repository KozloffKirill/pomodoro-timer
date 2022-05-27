import React, { useState, useEffect, useRef } from "react";
import styles from "./NewTask.module.css";
import AddTask from "../AddTask/AddTask";

const NewTask = () => {
   const [isAdd, setIsAdd] = useState(false);

   const ref = useRef(null);
   useEffect(() => {
      function clickOutside(e) {
         if (ref.current && !ref.current.contains(e.target)) {
            setIsAdd(false);
         }
      }

      if (isAdd) {
         document.addEventListener('mousedown', clickOutside);
      }

      return () => {
         document.removeEventListener('mousedown', clickOutside);
      };
   }, [isAdd]);

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
               ref={ref}
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