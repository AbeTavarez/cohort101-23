import Counter from './features/counter/Counter';
import TodoList from './components/TododList';
import './App.css';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <h1>Redux Intro App</h1>

      <Counter />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
