import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PomodoroInfo from './components/PomodoroInfo/PomodoroInfo';
import PomodoroTimer from './components/PomodoroTimer/PomodoroTimer';
import Tasks from './components/Tasks/Tasks';

function App() {
  return (
    <div className="App">
      <Header text="Pomodoro Timer" />
      <main>
        <PomodoroTimer />
        <Tasks />
        <PomodoroInfo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
