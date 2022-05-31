import { useReducer } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PomodoroInfo from './components/PomodoroInfo/PomodoroInfo';
import PomodoroTimer from './components/PomodoroTimer/PomodoroTimer';
import Tasks from './components/Tasks/Tasks';
import { PomodoroContext, pomodoroInitialState } from './contexts/PomodoroContext';

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

function App() {
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
    <div className="App">
      <PomodoroContext.Provider value={{
        settings: state.settings,
        mode: state.mode,
        editSettings,
        editMode
      }}>
        <Header text="Pomodoro Timer" />
        <main>
          <PomodoroTimer />
          <Tasks />
          <PomodoroInfo />
        </main>
      </PomodoroContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
