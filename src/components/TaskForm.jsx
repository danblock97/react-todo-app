import React, { Component } from "react";

class TaskForm extends Component {
  state = {
    title: "",
  };

  handleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddTask(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form
        className="task-form flex items-center"
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="Enter task title..."
          className="flex-grow p-2 border rounded mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Add Task
        </button>
      </form>
    );
  }
}

export default TaskForm;
