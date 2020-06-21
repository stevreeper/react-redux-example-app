import { TodoState, TodoActionTypes, TodoActions } from "./types";

const initialState: TodoState = {
  todos: [],
  isLoading: true,
  error: null,
};

export function todoReducer(
  state = initialState,
  action: TodoActionTypes
): TodoState {
  switch (action.type) {
    case TodoActions.FETCH_TODOS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case TodoActions.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case TodoActions.ON_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case TodoActions.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    default:
      return state;
  }
}
