import React from "react";

const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };
  return (
    <div className="row">
      <div
        id={todo.id}
        key={todo.id + todo.task}
        name="todo"
        value={todo.id}
        onClick={handleClick}
        className={todo.complete ? "strike" : ""}
      >
        {todo.task}
      </div>
    </div>
  );
};

export default ToDo;
