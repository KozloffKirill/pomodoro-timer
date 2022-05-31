import { createContext } from "react";
import Mode from "../models/mode";

export const pomodoroInitialState = {
   settings: {
      pomodoro: 25, // minutes
      shortBreak: 5, // minutes
      longBreak: 20, // minutes
      longBreakInterval: 4
   },
   mode: Mode.pomodoro
};

export const PomodoroContext = createContext(pomodoroInitialState);
PomodoroContext.displayName = "PomodoroContext";