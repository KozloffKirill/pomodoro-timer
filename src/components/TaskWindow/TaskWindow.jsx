import React, { useState } from "react";
import styles from "./TaskWindow.module.css";

const TaskWindow = ({ children, footer, cancel, save }) => {
   const [name, setName] = useState('');

   function handleNameOnChange(e) {
      setName(e.target.value);
   }

   return (
      <div className={styles.TaskWindow}>
         <div className={styles.taskParams}>
            <div className={styles.name}>
               <input
                  type="text"
                  placeholder="What are you working on?"
                  value={name}
                  onChange={handleNameOnChange}
               />
            </div>
            {children}
         </div>
         <footer className={styles.taskFooter}>
            <div className={styles.left}>
               {footer}
            </div>
            <div className={styles.right}>
               <button className={styles.btnCancel} onClick={cancel}>Cancel</button>
               <button className={styles.btnSave} onClick={save}>Save</button>
            </div>
         </footer>
      </div>
   );
};

export default TaskWindow;