import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TodoForm(props) {
  const { inputText, changeHandler, clearCompleted } = props;
  return (
    <div className="TodoForm">
      <div>
        <form className="form" onSubmit={props.submitHandler}>
          <input
            className="form-input"
            type="text"
            placeholder="add todo..."
            onChange={changeHandler}
            value={inputText}
          ></input>
          <button className="add-todo-btn" type="submit">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </form>
      </div>

      <button className="clear-completed-btn" onClick={clearCompleted}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}
