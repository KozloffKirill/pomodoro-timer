import { createContext } from "react";

export const settingsInitialState = {
   pomodoro: 25, // minutes
   shortBreak: 5, // minutes
   longBreak: 20, // minutes
   longBreakInterval: 4
};

export const SettingsContext = createContext(settingsInitialState); 
SettingsContext.displayName="SettingsContext";