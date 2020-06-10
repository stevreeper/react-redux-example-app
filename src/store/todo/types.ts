export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

//State
export interface TodoState {
  todos: Todo[];
}

//Acions Types
export enum TodoActions {
  CREATE_TODO,
  SET_TODOS,
  CHANGE_COMPLETED,
}

interface CreateTodoAction {
  type: typeof TodoActions.CREATE_TODO;
  payload: Todo;
}

interface SetTodosAction {
  type: typeof TodoActions.SET_TODOS;
  payload: Todo[];
}

interface ChangeCompletedAction {
  type: typeof TodoActions.CHANGE_COMPLETED;
  payload: number;
}

export type TodoActionTypes =
  | CreateTodoAction
  | SetTodosAction
  | ChangeCompletedAction;
