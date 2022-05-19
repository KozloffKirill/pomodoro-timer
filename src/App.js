import { useReducer } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PomodoroInfo from './components/PomodoroInfo/PomodoroInfo';
import PomodoroTimer from './components/PomodoroTimer/PomodoroTimer';
import Tasks from './components/Tasks/Tasks';
import { SettingsContext, settingsInitialState } from './contexts/SettingsContext';

const SettingsReducer = (state, action) => {
  switch (action.type) {
    case "EDIT_SETTINGS":
      return action.payload;
  }
};

function App() {
  const [state, dispatch] = useReducer(SettingsReducer, settingsInitialState);

  // Actions start //

  function editSettings(settings) {
    dispatch({
      type: 'EDIT_SETTINGS',
      payload: settings
    });
  }

  // Actions end //

  return (
    <div className="App">
      <SettingsContext.Provider value={state}>
        <Header text="Pomodoro Timer" />
        <main>
          <PomodoroTimer />
          <Tasks />
          <PomodoroInfo />
        </main>
      </SettingsContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
