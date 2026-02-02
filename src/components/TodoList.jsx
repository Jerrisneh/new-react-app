import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function addTodo() {
    if (input === "") return;

    setTodos([...todos, input]);
    setInput("");
  }

  function deleteTodo(index) {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <>
      <div class='todo-container'>
        <div class='todo-card'>
          <h2 className='todo-title'>Todo List</h2>

          <div class='todo-input-area'>
            <input
              type='text'
              value={input}
              placeholder='Enter a Todo'
              onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={addTodo}>Add</button>
          </div>

          <ul className='todo-list'>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}

                <button onClick={() => deleteTodo(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
