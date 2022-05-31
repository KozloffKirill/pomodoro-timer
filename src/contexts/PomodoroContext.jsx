import React, { createContext, useReducer } from "react";
import Mode from "../models/mode";


const PomodoroReducer = (state, action) => {
   switch (action.type) {
      case "EDIT_SETTINGS":
         return {
            ...state,
            settings: action.payload
         };
      case "EDIT_MODE":
         return {
            ...state,
            mode: action.payload
         };
      default:
         return state;
   }
};

const pomodoroInitialState = {
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

const PomodoroProvider = ({ children }) => {
   const [state, dispatch] = useReducer(PomodoroReducer, pomodoroInitialState);

   // Actions start //

   function editSettings(settings) {
      dispatch({
         type: 'EDIT_SETTINGS',
         payload: settings
      });
   }

   function editMode(mode) {
      dispatch({
         type: 'EDIT_MODE',
         payload: mode
      });
   }

   // Actions end //

   return (
      <PomodoroContext.Provider value={{
         settings: state.settings,
         mode: state.mode,
         editSettings,
         editMode
      }}>
         {children}
      </PomodoroContext.Provider>
   );
};

export default PomodoroProvider;