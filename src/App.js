import "./styles.css";
import { useState } from "react";
import ToDoList from "./ToDoList.js";
import data from "./data.json";
import ToDoForm from "./ToDoForm.js";

export default function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false }
    ];
    setToDoList(copy);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ToDoList
        toDoList={toDoList}
        handleFilter={handleFilter}
        handleToggle={handleToggle}
      />
      <ToDoForm addTask={addTask} />
    </div>
  );
}
