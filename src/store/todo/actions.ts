import { Todo, TodoActions, TodoActionTypes } from "./types";

export function fetchTodos(): TodoActionTypes {
  return {
    type: TodoActions.FETCH_TODOS,
  };
}

export function fetchTodosSuccess(todos: Todo[]): TodoActionTypes {
  return {
    type: TodoActions.FETCH_TODOS_SUCCESS,
    payload: todos,
  };
}

export function onTodoFailure(error: any): TodoActionTypes {
  return {
    type: TodoActions.ON_TODO_FAILURE,
    payload: error,
  };
}

export function updateTodo(todo: Todo): TodoActionTypes {
  return {
    type: TodoActions.UPDATE_TODO,
    payload: todo,
  };
}
