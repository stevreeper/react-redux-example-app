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
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  UPDATE_TODO = "UPDATE_TODO",
  ON_TODO_FAILURE = "ON_TODO_FAILURE",
}

interface updateTodo {
  type: typeof TodoActions.UPDATE_TODO;
  payload: Todo;
}

interface fetchTodos {
  type: typeof TodoActions.FETCH_TODOS;
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
  | fetchTodos
  | fetchTodosSuccess
  | onTodoFailure
  | updateTodo;
