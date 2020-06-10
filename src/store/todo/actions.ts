import { Todo, TodoActions, TodoActionTypes } from "./types";

export function createTodo(newTodo: Todo): TodoActionTypes {
  return {
    type: TodoActions.CREATE_TODO,
    payload: newTodo,
  };
}

export function setTodos(todos: Todo[]): TodoActionTypes {
  return {
    type: TodoActions.SET_TODOS,
    payload: todos,
  };
}

export function changeCompleted(id: number): TodoActionTypes {
  return {
    type: TodoActions.CHANGE_COMPLETED,
    payload: id,
  };
}
