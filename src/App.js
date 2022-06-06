import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PomodoroInfo from './components/PomodoroInfo/PomodoroInfo';
import PomodoroTimer from './components/PomodoroTimer/PomodoroTimer';
import Tasks from './components/Tasks/Tasks';
import PomodoroProvider from './contexts/PomodoroContext';
import TasksProvider from './contexts/TasksContext';

function App() {

  return (
    <div className="App">
      <PomodoroProvider>
        <TasksProvider>
          <Header text="Pomodoro Timer" />
          <main>
            <PomodoroTimer />
            <Tasks />
            <PomodoroInfo />
          </main>
        </TasksProvider>
      </PomodoroProvider>
      <Footer />
    </div>
  );
}

export default App;
