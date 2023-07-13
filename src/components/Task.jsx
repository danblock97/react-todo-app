import React, { Component } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

class Task extends Component {
  render() {
    const {
      id,
      title,
      isFavorite,
      isCompleted,
      onToggleFavorite,
      onToggleComplete,
      onDelete,
    } = this.props;

    return (
      <div
        className={`task flex flex-row items-center justify-between p-4 bg-white shadow rounded mt-2 dark:bg-black ${
          isCompleted ? "task-completed" : ""
        }`}
      >
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => onToggleComplete(id)}
            className="mr-2"
          />
          <span
            className={`text-gray-800 dark:text-white ${
              isCompleted ? "line-through" : ""
            }`}
          >
            {title}
          </span>
        </div>
        <div className="flex flex-row items-center lg:flex-row">
          <button
            onClick={() => onToggleFavorite(id)}
            className={`p-2 mr-2 rounded hover:bg-gray-200 transition dark:text-white dark:hover:bg-gray-700 ${
              isFavorite ? "text-red-600" : "text-gray-500"
            }`}
          >
            {isFavorite ? <AiFillStar /> : <AiOutlineStar />}
          </button>
          <button
            onClick={() => onDelete(id)}
            className="p-2 rounded hover:bg-gray-200 transition text-gray-500 dark:text-white dark:hover:bg-gray-700"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Task;
