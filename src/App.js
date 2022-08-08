import { useEffect, useState } from "react";
import { Todo } from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
      <h1>Todos:</h1>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default App;
