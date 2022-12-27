import React from "react";
import ToDo from "./ToDo.js";

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <div className="tododiv">
      {toDoList.map((todo) => {
        return <ToDo todo={todo} handleToggle={handleToggle} />;
      })}

      <button onClick={handleFilter}> Delete Completed </button>
    </div>
  );
};
export default ToDoList;
