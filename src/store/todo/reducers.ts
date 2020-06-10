import { TodoState, TodoActionTypes, TodoActions } from "./types";

const initialState: TodoState = {
  todos: [
    {
      id: 1,
      title: "hey",
      completed: false,
    },
  ],
};

export function todoReducer(
  state = initialState,
  action: TodoActionTypes
): TodoState {
  switch (action.type) {
    case TodoActions.SET_TODOS:
      return {
        todos: action.payload,
      };
    case TodoActions.CHANGE_COMPLETED:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) todo.completed = !todo.completed;
          return todo;
        }),
      };
    default:
      return state;
  }
}
