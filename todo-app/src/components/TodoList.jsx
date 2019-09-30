import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Segment } from "semantic-ui-react"

import Todo from "./Todo"

import { deleteTodo, toggleCompleted } from "../store/actions"

export default function TodoList() {
  const todos = useSelector(state => state.todos)
  return (
    <Segment.Group>
      {todos.map(todo => {
        return (
          <Segment key={todo.id} raised>
            <Todo todo={todo} />
          </Segment>
        )
      })}
    </Segment.Group>
  )
}
