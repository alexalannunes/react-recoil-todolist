import "./App.css";
import logo from "./logo.svg";
import { TodoList } from "./TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TODO!</p>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
