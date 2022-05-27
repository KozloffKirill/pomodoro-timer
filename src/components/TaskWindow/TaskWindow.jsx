import React, { forwardRef } from "react";
import styles from "./TaskWindow.module.css";

const TaskWindow = forwardRef(({
   children,
   footer,
   name, nameChange,
   note, noteChange,
   isNote, addNote,
   cancel,
   save
}, ref) => {

   return (
      <div className={styles.TaskWindow} ref={ref}>
         <div className={styles.taskParams}>
            <div className={styles.name}>
               <input
                  type="text"
                  placeholder="What are you working on?"
                  value={name}
                  onChange={nameChange}
               />
            </div>
            {children}
            <div className={styles.note}>
               {isNote ?
                  <textarea
                     placeholder="Some notes..."
                     value={note}
                     onChange={noteChange}
                  >
                  </textarea> :
                  <button className={styles.btnAddNote} onClick={addNote}>+ Add Note</button>
               }
            </div>
         </div>
         <footer className={styles.taskFooter}>
            <div className={styles.left}>
               {footer}
            </div>
            <div className={styles.right}>
               <button
                  className={styles.btnCancel}
                  onClick={cancel}
               >
                  Cancel
               </button>
               <button
                  className={styles.btnSave}
                  disabled={!name.length}
                  onClick={save}
               >
                  Save
               </button>
            </div>
         </footer>
      </div>
   );
});

export default TaskWindow;