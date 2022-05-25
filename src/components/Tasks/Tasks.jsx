import React, { useReducer } from "react";
import styles from "./Tasks.module.css";
import { TasksContext, tasksInitialState } from "../../contexts/TasksContext";
import TasksMenu from "../TasksMenu/TasksMenu";
import TasksList from "../TasksList/TasksList";

const TasksReducer = (state, action) => {
   switch (action.type) {
      case 'CLEAR_ALL_TASKS':
         return {
            ...state,
            tasks: []
         };
      case 'CLEAR_COMPLETED_TASKS':
         return {
            ...state,
            tasks: state.tasks.filter((task) => !task.completed)
         };
      case 'SWITCH_TASK_COMPLETED':
         return {
            ...state,
            tasks: state.tasks.map((task) => {
               if (task.id === action.payload) {
                  const newTask = Object.assign({}, task);
                  newTask.completed = !task.completed;
                  return newTask;
               }
               return task;
            })
         }
      default:
         return state;
   }
};

const Tasks = () => {
   const [state, dispatch] = useReducer(TasksReducer, tasksInitialState);

   // Actions start //

   function clearCompletedTasks() {
      dispatch({
         type: 'CLEAR_COMPLETED_TASKS'
      });
   }

   function clearAllTasks() {
      dispatch({
         type: 'CLEAR_ALL_TASKS'
      });
   }

   function switchTaskCompleted(id) {
      dispatch({
         type: 'SWITCH_TASK_COMPLETED',
         payload: id
      });
   }

   // Actions end //

   function handleAddTaskClick(e) {

   }

   return (
      <div className={styles.Tasks}>
         <TasksContext.Provider value={{
            tasks: state.tasks,
            clearAllTasks,
            clearCompletedTasks,
            switchTaskCompleted
         }}>
            <div className={styles.wrapper}>
               <TasksMenu />
               <TasksList />
               <button
                  className={styles.btnAdd}
                  onClick={handleAddTaskClick}
               >
                  Add task
               </button>
            </div>
         </TasksContext.Provider>
      </div>
   );
};

export default Tasks;