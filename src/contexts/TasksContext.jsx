import { createContext, useReducer } from "react";

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
      case 'ADD_TASK':
         return {
            ...state,
            tasks: [...state.tasks, action.payload]
         };
      case 'EDIT_TASK':
         return {
            ...state,
            tasks: state.tasks.map((task) => {
               if (task.id === action.payload.id) {
                  return {
                     ...task,
                     ...action.payload.changes
                  };
               }
               return task;
            })
         };
      case 'DELETE_TASK':
         return {
            ...state,
            tasks: state.tasks.filter((task) => task.id !== action.payload)
         };
      default:
         return state;
   }
};

const tasksInitialState = {
   tasks: []
};

export const TasksContext = createContext(tasksInitialState);
TasksContext.displayName = "TasksContext";

const TasksProvider = ({ children }) => {
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

   function addTask(task) {
      dispatch({
         type: 'ADD_TASK',
         payload: task
      });
   }

   function editTask(id, changes) {
      dispatch({
         type: 'EDIT_TASK',
         payload: {
            id,
            changes
         }
      });
   }

   function deleteTask(id) {
      dispatch({
         type: 'DELETE_TASK',
         payload: id
      });
   }

   // Actions end //

   return (
      <TasksContext.Provider value={{
         tasks: state.tasks,
         clearAllTasks,
         clearCompletedTasks,
         switchTaskCompleted,
         addTask,
         editTask,
         deleteTask
      }}>
         {children}
      </TasksContext.Provider>
   );
};

export default TasksProvider;