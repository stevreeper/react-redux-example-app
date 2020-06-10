import React from "react";

import "./styles.css";
import { Todo, TodoActions } from "../../store/todo/types";
import { useDispatch } from "react-redux";

interface TodoContainerProps {
  todo: Todo;
}

const TodoContainer: React.FC<TodoContainerProps> = ({ todo }) => {
  const dispatch = useDispatch();

  function onTodoClick() {
    dispatch({ type: TodoActions.CHANGE_COMPLETED, payload: todo.id });
  }

  return (
    <div className="container">
      <input
        name={String(todo.id)}
        type="checkbox"
        checked={todo.completed}
        onClick={onTodoClick}
      />
      <label
        htmlFor={String(todo.id)}
        className={todo.completed ? "completed-todo" : ""}
      >
        {todo.title}
      </label>
    </div>
  );
};

export default TodoContainer;
