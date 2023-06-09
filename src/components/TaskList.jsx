import React, { Component } from "react";
import Task from "./Task";

class TaskList extends Component {
  render() {
    const { tasks, onToggleFavorite, onToggleComplete, onDelete } = this.props;

    return (
      <div className="task-list mt-6">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            isFavorite={task.isFavorite}
            isCompleted={task.isCompleted}
            onToggleFavorite={onToggleFavorite}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default TaskList;
