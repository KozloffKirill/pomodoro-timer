import { createContext } from "react";
import TaskHelper from "../helpers/task.helper";

export const tasksInitialState = {
   tasks: [
      { name: 'Task 1', note: '', actPomodoros: 0, estPomodoros: 3, completed: false, id: TaskHelper.getNewId() },
      { name: 'Task 2', note: '', actPomodoros: 0, estPomodoros: 3, completed: false, id: TaskHelper.getNewId() },
      { name: 'Task 3', note: '', actPomodoros: 0, estPomodoros: 3, completed: true, id: TaskHelper.getNewId() }
   ],

};

export const TasksContext = createContext(tasksInitialState);
TasksContext.displayName = "TasksContext";