import React, { useState, useReducer } from "react";
import "./App.scss";

// Contexts
import { TodoContext } from "./contexts/TodoContext";

// Components
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// Reducers
import { todoReducer, initialState } from "./reducers/todoReducer";

function App() {
  const [inputText, setInputText] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Handlers

  const changeHandler = e => {
    setInputText(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    dispatch({
      type: "SUBMIT_TODO",
      payload: {
        id: Date.now(),
        task: inputText,
        completed: false
      }
    });
  };

  const deleteTodo = id => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const toggleCompleted = id => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  };

  return (
    <div className="App">
      <TodoForm
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        inputText={inputText}
      />
      <TodoList
        todos={state.todos}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleCompleted}
      />
    </div>
  );
}

export default App;
