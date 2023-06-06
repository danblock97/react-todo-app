import React, { useState, useEffect } from "react";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    setTodos(updatedTodos);
  };

  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleNewTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    setTodos([
      ...todos,
      { id: todos.length + 1, name: newTodo, complete: false },
    ]);
    setNewTodo("");
  };

  const handleClearTodos = () => {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  };

  const updateTodo = (id, newName) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, name: newName } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App m-5 dark:bg-gray-800 min-h-screen text-white flex flex-col items-center justify-center">
      <form onSubmit={handleNewTodo} className="flex items-center">
        <input
          type="text"
          name="todo"
          value={newTodo}
          onChange={handleNewTodoChange}
          className="border-2 border-gray-500 mr-2 p-2 rounded-lg bg-gray-700 text-white"
          placeholder="Add new todo"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg">
          Add Todo
        </button>
      </form>
      <div className="mt-5">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            todo={todo}
          />
        ))}
      </div>
      <div className="mt-5">
        <button
          onClick={handleClearTodos}
          className="bg-red-600 text-white p-2 rounded-lg"
        >
          Clear Completed Todos
        </button>
      </div>
    </div>
  );
}

export default App;
