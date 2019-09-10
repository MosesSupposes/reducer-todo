import React from "react";

export default function Todo(props) {
  const { deleteTodo, toggleCompleted } = props;
  // destructuring object properties
  let {
    todo: {
      todo: { task, id, completed }
    }
  } = props;

  return (
    <div className={`Todo ${completed ? "completed" : ""}`}>
      <p>{task}</p>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleCompleted(id)}
      />
      <button
        onClick={() => {
          deleteTodo(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
