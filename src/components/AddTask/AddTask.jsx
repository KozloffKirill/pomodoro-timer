import React, { useContext, useState } from "react";
import TaskWindow from "../TaskWindow/TaskWindow";
import styles from "./AddTask.module.css";
import caretDown from "../../assets/img/caret-down-icon.svg";
import caretUp from "../../assets/img/caret-up-icon.svg";
import { TasksContext } from "../../contexts/TasksContext";
import TaskHelper from "../../helpers/task.helper";

const AddTask = ({ cancel }) => {
   const [est, setEst] = useState(1);
   const [name, setName] = useState('');
   const [note, setNote] = useState('');
   const [isNote, setIsNote] = useState(false);

   const { addTask } = useContext(TasksContext);

   function handleEstChange(e) {
      setEst(+e.target.value);
   }

   function handleIncreaseClick(e) {
      setEst(est + 1);
   }

   function handleDecreaseClick(e) {
      if (est > 0) {
         setEst(est - 1);
      }
   }

   function handleNameChange(e) {
      setName(e.target.value);
   }

   function handleNoteChange(e) {
      setNote(e.target.value);
   }

   function handleAddNoteClick(e) {
      setIsNote(true);
   }

   function handleCancelClick(e) {
      cancel();
   }

   function handleAddTaskClick(e) {
      addTask({
         name,
         note,
         actPomodoros: 0,
         estPomodoros: est,
         completed: false,
         id: TaskHelper.getNewId()
      });
      setName('');
      setNote('');
      setEst(1);
      setIsNote(false);
   }

   return (
      <TaskWindow
         name={name}
         nameChange={handleNameChange}
         note={note}
         noteChange={handleNoteChange}
         isNote={isNote}
         addNote={handleAddNoteClick}
         cancel={handleCancelClick}
         save={handleAddTaskClick}
      >
         <div className={styles.estPomodoros}>
            <p className={styles.fieldName}>Est Pomodoros</p>
            <div className={styles.inputs}>
               <input
                  type="number"
                  min="0"
                  step="1"
                  value={est}
                  onChange={handleEstChange}
               />
               <button onClick={handleIncreaseClick}><img alt="up" width="14" height="14" src={caretUp} /></button>
               <button onClick={handleDecreaseClick}><img alt="down" width="14" height="14" src={caretDown} /></button>
            </div>
         </div>
      </TaskWindow>
   );
};

export default AddTask;