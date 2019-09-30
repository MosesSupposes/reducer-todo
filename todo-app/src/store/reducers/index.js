import moment from "moment"

import {
  SUBMIT_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED,
  CLEAR_COMPLETED,
  CHANGE_INPUT
} from "../actions"

export const initialState = {
  inputText: "",
  todos: JSON.parse(localStorage.getItem("todos")) || []
}

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        inputText: action.payload
      }
    case SUBMIT_TODO:
      localStorage.setItem(
        "todos",
        JSON.stringify(state.todos.concat(action.payload))
      )
      return {
        ...state,
        inputText: "",
        todos: JSON.parse(localStorage.getItem("todos"))
      }
    case DELETE_TODO:
      localStorage.setItem(
        "todos",
        JSON.stringify(
          state.todos.filter(todo => {
            return todo.id !== action.payload
          })
        )
      )
      return {
        ...state,
        todos: JSON.parse(localStorage.getItem("todos"))
      }
    case TOGGLE_COMPLETED:
      // find the id inside state.todos that matches the payload
      const matchedTodo = state.todos.find(todo => {
        return todo.id === action.payload
      })

      const newTodos = state.todos.map(todo => {
        return todo.id === matchedTodo.id
          ? {
              ...todo,
              completed: !todo.completed,
              completeDate: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
            }
          : { ...todo }
      })

      localStorage.setItem("todos", JSON.stringify(newTodos))

      return {
        ...state,
        todos: JSON.parse(localStorage.getItem("todos"))
      }

    case CLEAR_COMPLETED:
      const incompleteTodos = state.todos.filter(todo => {
        return todo.completed === false
      })

      localStorage.setItem("todos", JSON.stringify(incompleteTodos))
      return {
        ...state,
        todos: JSON.parse(localStorage.getItem("todos"))
      }
    default:
      return state
  }
}
