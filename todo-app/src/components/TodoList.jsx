import React from "react";
import { Segment } from "semantic-ui-react";

import Todo from "./Todo";

export default function TodoList(props) {
  const { todos, deleteTodo, toggleCompleted } = props;
  console.log(todos);
  return (
    <Segment.Group>
      {todos.map(todo => {
        return (
          <Segment raised>
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleCompleted={toggleCompleted}
            />
          </Segment>
        );
      })}
    </Segment.Group>
  );
}
