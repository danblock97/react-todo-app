import React, { useState } from "react";
import Modal from "./Modal";

function Todo({ todo, toggleTodo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState("");

  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  const handleUpdateClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  const handleUpdateChange = (e) => {
    setUpdatedName(e.target.value);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    if (updatedName.trim() !== "") {
      updateTodo(todo.id, updatedName);
      setUpdatedName("");
      setIsEditing(false);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <label className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span className={todo.complete ? "line-through" : ""}>{todo.name}</span>
        <button
          onClick={handleUpdateClick}
          className="bg-yellow-600 text-white p-2 rounded-lg"
        >
          Update
        </button>
        <button
          onClick={handleDeleteClick}
          className="bg-red-600 text-white p-2 rounded-lg"
        >
          Delete
        </button>
      </label>
      <Modal
        isOpen={isEditing}
        onRequestClose={handleCancelClick}
        contentLabel="Update Todo"
      >
        <form onSubmit={handleUpdateSubmit} className="flex items-center">
          <input
            type="text"
            onChange={handleUpdateChange}
            className="border-2 border-gray-500 mr-2 p-2 rounded-lg bg-gray-700 text-white"
          />
          <button
            type="submit"
            className="bg-green-600 text-white p-2 rounded-lg"
          >
            Update
          </button>
          <button
            onClick={handleCancelClick}
            type="button"
            className="bg-red-600 text-white p-2 rounded-lg ml-2"
          >
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default Todo;
