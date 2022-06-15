import { createContext, useReducer } from "react";
import TaskHelper from "../helpers/task.helper";

const TasksReducer = (state, action) => {
   switch (action.type) {
      case 'CLEAR_ALL_TASKS':
         return {
            ...state,
            activeTask: null,
            tasks: []
         };
      case 'CLEAR_COMPLETED_TASKS':
         const activeTask = state.activeTask;
         let newActiveTask = null;
         if (activeTask) {
            for (let task of state.tasks) {
               if (task.id === state.activeTask) {
                  newActiveTask = task.completed ? null : state.activeTask;
                  break;
               }
            }
         }
         return {
            ...state,
            activeTask: newActiveTask,
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
      case 'INCREASE_ACT_POMODOROS':
         return {
            ...state,
            tasks: state.tasks.map((task) => {
               if (task.id === state.activeTask) {
                  const newTask = Object.assign({}, task);
                  newTask.actPomodoros++;
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
            activeTask: action.payload === state.activeTask ? null : state.activeTask,
            tasks: state.tasks.filter((task) => task.id !== action.payload)
         };
      case 'SELECT_ACTIVE_TASK':
         return {
            ...state,
            activeTask: action.payload
         };
      default:
         return state;
   }
};

const tasksInitialState = {
   tasks: [
      { name: 'Task 1', note: '', actPomodoros: 0, estPomodoros: 3, completed: false, id: TaskHelper.getNewId() },
      { name: 'Task 2', note: 'Он хочет лично всех увидеть, чтобы посмотреть, какие мы активные', actPomodoros: 0, estPomodoros: 4, completed: true, id: TaskHelper.getNewId() },
      { name: 'Task 3', note: 'Jijka', actPomodoros: 0, estPomodoros: 3, completed: false, id: TaskHelper.getNewId() },
      { name: 'Task 4', note: '', actPomodoros: 0, estPomodoros: 3, completed: false, id: TaskHelper.getNewId() },
   ],
   activeTask: null
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

   function increaseActPomodoros() {
      dispatch({
         type: 'INCREASE_ACT_POMODOROS'
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

   function selectActiveTask(id) {
      dispatch({
         type: 'SELECT_ACTIVE_TASK',
         payload: id
      });
   }

   // Actions end //

   return (
      <TasksContext.Provider value={{
         tasks: state.tasks,
         activeTask: state.activeTask,
         clearAllTasks,
         clearCompletedTasks,
         switchTaskCompleted,
         addTask,
         editTask,
         deleteTask,
         selectActiveTask,
         increaseActPomodoros
      }}>
         {children}
      </TasksContext.Provider>
   );
};

export default TasksProvider;