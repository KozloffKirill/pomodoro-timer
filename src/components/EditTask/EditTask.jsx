import React, { useContext, useState } from "react";
import TaskWindow from "../TaskWindow/TaskWindow";
import styles from "./EditTask.module.css";
import caretDown from "../../assets/img/caret-down-icon.svg";
import caretUp from "../../assets/img/caret-up-icon.svg";
import { TasksContext } from "../../contexts/TasksContext";

const EditTask = ({ task, cancel }) => {
   const [est, setEst] = useState(task.estPomodoros);
   const [act, setAct] = useState(task.actPomodoros);
   const [name, setName] = useState(task.name);
   const [note, setNote] = useState(task.note);
   const [isNote, setIsNote] = useState(!!task.note.length);

   const { editTask, deleteTask } = useContext(TasksContext);

   function handleActChange(e) {
      setAct(+e.target.value);
   }

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

   function handleEditTaskClick(e) {
      editTask(
         task.id,
         {
            name,
            note,
            actPomodoros: act,
            estPomodoros: est,
         });
      cancel();
   }

   function handleDeleteTaskClick(e) {
      deleteTask(task.id);
   }

   const footer = (
      <button className={styles.btnDelete} onClick={handleDeleteTaskClick}>Delete</button>
   );
   return (
      <TaskWindow
         footer={footer}
         name={name}
         nameChange={handleNameChange}
         note={note}
         noteChange={handleNoteChange}
         isNote={isNote}
         addNote={handleAddNoteClick}
         cancel={handleCancelClick}
         save={handleEditTaskClick}
      >
         <div className={styles.estPomodoros}>
            <p className={styles.fieldName}>Est Pomodoros</p>
            <div className={styles.inputs}>
               <input
                  className={styles.actPomoInput}
                  type="number"
                  min="0"
                  step="1"
                  value={act}
                  onChange={handleActChange}
               />
               <span className={styles.slash}>/</span>
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

export default EditTask;