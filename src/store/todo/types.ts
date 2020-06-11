export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

//State
export interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  error: any;
}

//Acions Types
export enum TodoActions {
  FETCH_TODOS_BEGIN,
  FETCH_TODOS_SUCCESS,
  UPDATE_TODO,
  ON_TODO_FAILURE,
}

interface updateTodo {
  type: typeof TodoActions.UPDATE_TODO;
  payload: Todo;
}

interface fetchTodosBegin {
  type: typeof TodoActions.FETCH_TODOS_BEGIN;
}

interface fetchTodosSuccess {
  type: typeof TodoActions.FETCH_TODOS_SUCCESS;
  payload: Todo[];
}

interface onTodoFailure {
  type: typeof TodoActions.ON_TODO_FAILURE;
  payload: any;
}

export type TodoActionTypes =
  | fetchTodosBegin
  | fetchTodosSuccess
  | onTodoFailure
  | updateTodo;
