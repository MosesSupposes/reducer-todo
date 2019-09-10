import React from "react";

import Todo from "./Todo";

export default function TodoList(props) {
  const { todos, deleteTodo, toggleCompleted } = props;
  console.log(todos);
  return (
    <div className="TodoList">
      {todos.map(todo => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleCompleted={toggleCompleted}
          />
        );
      })}
    </div>
  );
}
