import './App.css';
import Header from './components/Header/Header';
import PomodoroTimer from './components/PomodoroTimer/PomodoroTimer';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header text="Pomodoro Timer" />
        <main>
          <PomodoroTimer minutes={20} seconds={15} />
        </main>
      </div>
    </div>
  );
}

export default App;
