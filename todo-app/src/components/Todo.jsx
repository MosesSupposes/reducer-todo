import React from "react"
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

export default function Todo({ todo }) {
  const dispatch = useDispatch()
  const { id, task, completed, completeDate } = todo
  return (
    <div
      className={`Todo`}
      onClick={e => {
        e.stopPropagation()
        dispatch({ type: "TOGGLE_COMPLETED", payload: id })
      }}
    >
      <div className="todo-info">
        <p className={`todo-text ${completed ? "completed" : ""}`}>{task}</p>
        <p className="todo-date">
          {completed ? `completed: ${completeDate}` : null}
        </p>
      </div>

      <div>
        <button
          className="delete-todo-btn"
          onClick={e => {
            e.stopPropagation()
            dispatch({ type: "DELETE_TODO", payload: id })
          }}
        >
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  )
}
