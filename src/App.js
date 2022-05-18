import './App.css';
import Header from './components/Header/Header';
import PomodoroTimer from './components/PomodoroTimer/PomodoroTimer';

function App() {
  return (
    <div className="App">
      <Header text="Pomodoro Timer" />
      <main>
        <PomodoroTimer />
      </main>
    </div>
  );
}

export default App;
