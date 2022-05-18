import './App.css';
import Header from './components/Header/Header';
import PomodoroInfo from './components/PomodoroInfo/PomodoroInfo';
import PomodoroTimer from './components/PomodoroTimer/PomodoroTimer';

function App() {
  return (
    <div className="App">
      <Header text="Pomodoro Timer" />
      <main>
        <PomodoroTimer />
        <PomodoroInfo />
      </main>
    </div>
  );
}

export default App;
