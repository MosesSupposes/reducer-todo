import moment from "moment";

export const initialState = {
  todos: []
};

export function todoReducer(state, action) {
  switch (action.type) {
    case "SUBMIT_TODO":
      return { ...state, todos: [...state.todos, { todo: action.payload }] };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.todo.id !== action.payload;
        })
      };
    case "TOGGLE_COMPLETED":
      // find the id inside state.todos that matches the payload
      const matchedId = state.todos.find(todo => {
        return todo.todo.id === action.payload;
      });

      return {
        ...state,
        todos: state.todos.map(({ todo }) => {
          console.log("todo.completed:", todo.completed);
          return matchedId.todo.id === todo.id
            ? {
                todo: {
                  ...todo,
                  completed: !todo.completed,
                  completeDate: moment().format("MMM Do YYYY, h:mm:ss a")
                }
              }
            : { todo };
        })
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter(({ todo }) => !todo.completed)
      };
    default:
      return state;
  }
}
