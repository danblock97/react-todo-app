import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Sidebar from "./components/Sidebar";
import TaskPieChart from "./components/TaskPieChart";
import Switcher from "./components/Switcher";

class App extends Component {
  state = {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    filter: "all",
  };

  handleAddTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      isFavorite: false,
      isCompleted: false,
    };

    const tasks = [...this.state.tasks, newTask];

    this.setState({ tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  handleToggleFavorite = (id) => {
    const tasks = this.state.tasks.map((task) =>
      task.id === id ? { ...task, isFavorite: !task.isFavorite } : task
    );

    this.setState({ tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  handleToggleComplete = (id) => {
    const tasks = this.state.tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    this.setState({ tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  handleDeleteTask = (id) => {
    const tasks = this.state.tasks.filter((task) => task.id !== id);

    this.setState({ tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  handleFilterFavorite = () => {
    this.setState({ filter: "favorites" });
  };

  handleFilterCompleted = () => {
    this.setState({ filter: "completed" });
  };

  handleShowAll = () => {
    this.setState({ filter: "all" });
  };

  render() {
    const { tasks, filter } = this.state;

    let tasksToShow = tasks;

    if (filter === "favorites") {
      tasksToShow = tasks.filter((task) => task.isFavorite);
    } else if (filter === "completed") {
      tasksToShow = tasks.filter((task) => task.isCompleted);
    }

    return (
      <div className="app lg:flex justify-center items-center dark:bg-black/90 dark:min-h-screen overflow-hidden">
        <Sidebar
          onFilterFavorite={this.handleFilterFavorite}
          onShowAll={this.handleShowAll}
          onFilterCompleted={this.handleFilterCompleted}
        />
        <div className="container mx-auto mt-10 flex-grow overflow-auto lg:overflow-visible text-center relative">
          <h1 className="text-2xl font-bold text-center mb-6 dark:text-white">
            TuDou | Make Tasks Fun
          </h1>
          <TaskForm onAddTask={this.handleAddTask} />
          <TaskList
            tasks={tasksToShow}
            onToggleFavorite={this.handleToggleFavorite}
            onToggleComplete={this.handleToggleComplete}
            onDelete={this.handleDeleteTask}
          />
          <TaskPieChart tasks={tasksToShow} />
          <div className="absolute bottom-0 right-0 overflow-hidden pr-6 lg:pr-0">
            <Switcher />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
