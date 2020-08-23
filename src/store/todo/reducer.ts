import { createActions, createReducer } from "reduxsauce";
import {
  TodoState,
  FetchTodosSuccessAction,
  FetchTodosFailureAction,
  UpdateTodoAction,
  TodoActions,
  TodoTypes,
  AddTodoAction,
} from "./types";

export const { Types, Creators } = createActions<TodoTypes, TodoActions>({
  fetchTodos: null,
  fetchTodosSuccess: ["todos"],
  fetchTodosFailure: ["error"],
  updateTodo: ["todo"],
  addTodo: ["todo"],
});

const INITIAL_STATE: TodoState = {
  todos: [],
  isLoading: true,
  error: null,
};

const fetchTodos = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoading: true,
    error: null,
  };
};

const fetchTodosSuccess = (
  state = INITIAL_STATE,
  { todos }: FetchTodosSuccessAction
) => {
  return {
    ...state,
    isLoading: false,
    todos,
  };
};

const fetchTodosFailure = (
  state = INITIAL_STATE,
  { error }: FetchTodosFailureAction
) => {
  return {
    ...state,
    error,
    isLoading: false,
    todos: [],
  };
};

const updateTodo = (state = INITIAL_STATE, { todo }: UpdateTodoAction) => {
  return {
    ...state,
    todos: state.todos.map((t) => (t.id === todo.id ? todo : t)),
  };
};

const addTodo = (state = INITIAL_STATE, { todo }: AddTodoAction) => {
  return {
    ...state,
    todos: [
      {
        id: state.todos.length + 1,
        title: todo,
        completed: false,
      },
      ...state.todos,
    ],
  };
};

export const Reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_TODOS]: fetchTodos,
  [Types.FETCH_TODOS_SUCCESS]: fetchTodosSuccess,
  [Types.FETCH_TODOS_FAILURE]: fetchTodosFailure,
  [Types.UPDATE_TODO]: updateTodo,
  [Types.ADD_TODO]: addTodo,
});
