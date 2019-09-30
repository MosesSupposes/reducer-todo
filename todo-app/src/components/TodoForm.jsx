import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import moment from "moment"

export default function TodoForm() {
  const dispatch = useDispatch()
  const inputText = useSelector(state => state.inputText)
  const error = useSelector(state => state.error)

  return (
    <div className="container">
      <div className="TodoForm">
        <div>
          <form
            className="form"
            onSubmit={e => {
              e.preventDefault()
              if (!inputText) {
                dispatch({ type: "SUBMIT_FAILED" })
              }
              dispatch({
                type: "SUBMIT_TODO",
                payload: {
                  id: Date.now(),
                  task: inputText,
                  completed: false,
                  completeDate: moment().format("MMM Do YYYY, h:mm:ss a")
                }
              })
            }}
          >
            <input
              className="form-input"
              type="text"
              placeholder="add todo..."
              onChange={e => {
                dispatch({
                  type: "CHANGE_INPUT",
                  payload: e.target.value
                })
              }}
              value={inputText}
            ></input>

            <button className="add-todo-btn" type="submit">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </form>
        </div>

        <button
          className="clear-completed-btn"
          onClick={() => {
            dispatch({ type: "CLEAR_COMPLETED" })
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      {error && <p className="error">Please enter a task</p>}
    </div>
  )
}
