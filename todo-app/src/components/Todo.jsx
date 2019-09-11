import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

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
      <p
        onClick={() => {
          toggleCompleted(id);
        }}
      >
        {task}
      </p>
      <div>
        {/* <input
          className="check-complete"
          type="checkbox"
          checked={completed}
          }
        /> */}
        <button
          className="delete-todo-btn"
          onClick={() => {
            deleteTodo(id);
          }}
        >
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}
