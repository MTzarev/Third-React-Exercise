import TodoList from './components/TodoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>To Do List</h1>
      <TodoList/>
      <footer>All right reserved &copy;</footer>
      </header>
    </div>
  );
}

export default App;
