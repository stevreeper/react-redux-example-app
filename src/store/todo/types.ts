import { Todo } from "../../models/Todo";
import { Action } from "redux";

//State
export interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  error: any;
}

export interface FetchTodosSuccessAction {
  todos: Todo[];
}

export interface FetchTodosFailureAction {
  error: string;
}

export interface UpdateTodoAction {
  todo: Todo;
}

export interface AddTodoAction {
  todo: string;
}

//Acions Types
export interface TodoTypes {
  FETCH_TODOS: "FETCH_TODOS";
  FETCH_TODOS_SUCCESS: "FETCH_TODOS_SUCCESS";
  FETCH_TODOS_FAILURE: "FETCH_TODOS_FAILURE";
  UPDATE_TODO: "UPDATE_TODO";
  ADD_TODO: "ADD_TODO";
}

export interface TodoActions {
  fetchTodos(): Action<void>;
  fetchTodosSuccess(todos: FetchTodosSuccessAction["todos"]): Action<void>;
  fetchTodosFailure(error: FetchTodosFailureAction["error"]): Action<void>;
  updateTodo(todo: UpdateTodoAction["todo"]): Action<void>;
  addTodo(todo: AddTodoAction["todo"]): Action<void>;
}
